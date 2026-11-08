/**
 * Scrape Gobezoch exam pages for History, Geography, Economics
 * Run: node scripts/scrape-gobezoch.mjs
 */

import https from 'https';
import { writeFileSync, mkdirSync, existsSync } from 'fs';
import { join } from 'path';

const BASE = 'https://gobezoch.com';
const SUBJECTS = [
  { key: 'history', years: [2018, 2017, 2016, 2015, 2014, 2013, 2012, 2011] },
  { key: 'geography', years: [2018, 2017, 2016, 2015, 2014, 2013, 2012] },
  { key: 'economics', years: [2018, 2017, 2016, 2012, 2011] },
];

const OUT_DIR = join('nat-exams', 'gobezoch-items');
mkdirSync(OUT_DIR, { recursive: true });

function fetchPage(path) {
  return new Promise((resolve, reject) => {
    https.get(`${BASE}${path}`, { headers: { 'User-Agent': 'Mozilla/5.0' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
    }).on('error', reject);
  });
}

function parseExamPage(html, subject, year) {
  // Extract JSON-LD structured data
  const ldMatch = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
  if (!ldMatch) return null;
  
  let ld;
  try {
    ld = JSON.parse(ldMatch[1]);
  } catch {
    return null;
  }
  
  // Find the Quiz object
  const quiz = Array.isArray(ld) ? ld.find(x => x['@type'] === 'Quiz') : null;
  if (!quiz || !quiz.hasPart) return null;
  
  const questions = quiz.hasPart.map((q, idx) => {
    const accepted = q.acceptedAnswer?.text || '';
    const suggested = q.suggestedAnswer?.map(a => a.text) || [];
    const allOpts = [accepted, ...suggested];
    
    // Find which option index is the correct one
    const answerIdx = allOpts.findIndex(opt => opt === accepted);
    
    return {
      id: `gob-${subject}-${year}-${String(idx + 1).padStart(3, '0')}`,
      subject,
      year,
      q: q.name || '',
      options: allOpts,
      answer: answerIdx >= 0 ? answerIdx : 0,
      type: 'mcq',
      explanation: '', // Not in LD, would need HTML parsing
      source: 'gobezoch-real',
      textbookRef: '',
    };
  });
  
  return { subject, year, count: questions.length, questions };
}

async function scrapeSubject(subject, years) {
  console.log(`\n=== ${subject.toUpperCase()} ===`);
  const allItems = [];
  
  for (const year of years) {
    try {
      const html = await fetchPage(`/exams/${subject}-${year}`);
      const parsed = parseExamPage(html, subject, year);
      
      if (parsed) {
        allItems.push(...parsed.questions);
        console.log(`  ${year}: ${parsed.count} questions`);
        writeFileSync(join(OUT_DIR, `${subject}-${year}.json`), JSON.stringify(parsed, null, 1));
      } else {
        console.log(`  ${year}: FAILED to parse`);
      }
      
      // Be nice to their server
      await new Promise(r => setTimeout(r, 500));
    } catch (e) {
      console.log(`  ${year}: ERROR - ${e.message}`);
    }
  }
  
  // Combined file
  writeFileSync(join(OUT_DIR, `${subject}-all.json`), JSON.stringify(allItems, null, 1));
  console.log(`  TOTAL: ${allItems.length} questions`);
  return allItems;
}

async function main() {
  const all = [];
  for (const { key, years } of SUBJECTS) {
    const items = await scrapeSubject(key, years);
    all.push(...items);
  }
  
  // Summary
  console.log('\n=== SUMMARY ===');
  for (const { key, years } of SUBJECTS) {
    const count = all.filter(q => q.subject === key).length;
    console.log(`  ${key}: ${count} questions`);
  }
  console.log(`  GRAND TOTAL: ${all.length} real questions`);
  
  writeFileSync(join(OUT_DIR, 'all-social-real.json'), JSON.stringify(all, null, 1));
  console.log(`\nSaved to ${OUT_DIR}/`);
}

main().catch(console.error);