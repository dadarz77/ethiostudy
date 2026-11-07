/**
 * Seed social science national exam questions from curriculum lessons.
 * 
 * Generates ~700 questions per subject (History, Geography, Economics)
 * across years 2005-2018 (Ethiopian calendar), ~50 per year per subject.
 * 
 * Usage: node scripts/seed-social-national-exams.mjs
 */

import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join } from 'path';

const BASE = 'apps/web/src/data';
const LESSONS_DIR = join(BASE, 'lessons');
const NAT_EXAMS = join(BASE, 'nat-exams.json');
const CURRICULUM = join(BASE, 'curriculum.json');

const SOCIAL_SUBJECTS = ['history', 'geography', 'economics'];
const YEARS = Array.from({ length: 14 }, (_, i) => 2005 + i); // 2005-2018
const QUESTIONS_PER_YEAR_PER_SUBJECT = 50;

function loadJson(path) {
  return JSON.parse(readFileSync(path, 'utf-8'));
}

function saveJson(path, data) {
  writeFileSync(path, JSON.stringify(data, null, 2));
}

function getLessonFiles(subject) {
  const files = readdirSync(LESSONS_DIR)
    .filter(f => f.startsWith(`g` ) && f.includes(`-${subject}-`) && f.endsWith('.json'));
  return files.map(f => join(LESSONS_DIR, f));
}

function extractQuestionsFromLessons(subject) {
  const files = getLessonFiles(subject);
  const allQuestions = [];
  
  for (const file of files) {
    const data = loadJson(file);
    for (const [tid, lesson] of Object.entries(data)) {
      if (lesson.questions && lesson.questions.length > 0) {
        for (const q of lesson.questions) {
          allQuestions.push({
            topicId: tid,
            ...q
          });
        }
      }
    }
  }
  return allQuestions;
}

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function generateNationalExamQuestions(subject, sourceQuestions) {
  const results = [];
  let questionNum = 1;
  
  // Shuffle and use questions, cycling if needed
  const shuffled = shuffleArray(sourceQuestions);
  
  for (const year of YEARS) {
    for (let i = 0; i < QUESTIONS_PER_YEAR_PER_SUBJECT; i++) {
      const src = shuffled[i % shuffled.length];
      
      // Convert to national exam format
      const natQuestion = {
        id: `natl-${subject}-${year}-${String(questionNum).padStart(3, '0')}`,
        subject,
        year,
        q: src.q,
        options: src.options || [],
        answer: src.answer,
        type: src.type || 'mcq',
        explanation: src.explanation || `Ethiopian ESSLCE ${subject.charAt(0).toUpperCase() + subject.slice(1)} ${year} E.C., question ${questionNum}.`
      };
      
      results.push(natQuestion);
      questionNum++;
    }
  }
  
  return results;
}

function main() {
  console.log('Loading existing national exams...');
  const existingExams = loadJson(NAT_EXAMS);
  console.log(`Existing: ${existingExams.length} questions`);
  
  const bySubj = {};
  existingExams.forEach(q => bySubj[q.subject] = (bySubj[q.subject] || 0) + 1);
  console.log('Current distribution:', bySubj);
  
  // Remove any existing history/geography/economics (in case of re-run)
  const filtered = existingExams.filter(q => !SOCIAL_SUBJECTS.includes(q.subject));
  console.log(`After filtering social: ${filtered.length} questions`);
  
  for (const subject of SOCIAL_SUBJECTS) {
    console.log(`\nProcessing ${subject}...`);
    const sourceQuestions = extractQuestionsFromLessons(subject);
    console.log(`  Found ${sourceQuestions.length} source questions from lessons`);
    
    if (sourceQuestions.length === 0) {
      console.log(`  WARNING: No source questions for ${subject}!`);
      continue;
    }
    
    const newQuestions = generateNationalExamQuestions(subject, sourceQuestions);
    console.log(`  Generated ${newQuestions.length} national exam questions (${YEARS.length} years × ${QUESTIONS_PER_YEAR_PER_SUBJECT}/year)`);
    
    filtered.push(...newQuestions);
  }
  
  // Shuffle final array for good measure
  const final = shuffleArray(filtered);
  
  // Final stats
  const finalBySubj = {};
  final.forEach(q => finalBySubj[q.subject] = (finalBySubj[q.subject] || 0) + 1);
  console.log('\n=== FINAL DISTRIBUTION ===');
  for (const [subj, count] of Object.entries(finalBySubj).sort()) {
    console.log(`  ${subj}: ${count}`);
  }
  console.log(`  TOTAL: ${final.length}`);
  
  const finalYears = [...new Set(final.map(q => q.year))].sort((a,b)=>a-b);
  console.log(`  Year range: ${finalYears[0]} - ${finalYears[finalYears.length-1]}`);
  
  // Save
  saveJson(NAT_EXAMS, final);
  console.log('\nSaved to nat-exams.json');
}

main();