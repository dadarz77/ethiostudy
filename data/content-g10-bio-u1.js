/* ============================================================
   Content: Grade 10 Biology — Unit 1: Sub-fields and History of Biology
   5 topics. Rich format + 3 visuals per lesson.
   ============================================================ */
window.Lessons = window.Lessons || {};

/* --- b1-1: Sub-fields of Biology --- */
Lessons["g10-biology-ub1-t1"] = {
  overview: "Biology is not one subject — it's a family of sciences, each zooming into a different level of life: molecules, cells, organisms, populations, ecosystems. Knowing the sub-fields helps you find YOUR corner of life science and understand how they all connect.",
  objectives: [
    "Define biology and list its major branches",
    "Match each sub-field to its level of study (molecular → ecosystem)",
    "Distinguish organism-group branches (botany, zoology, microbiology)",
    "Explain how sub-fields interlock (e.g. genetics + ecology = population genetics)",
    "Identify which branch studies a given real-world problem"
  ],
  simple: "Biology = the study of life (bios = life, logos = study). Because 'life' is huge, biologists split it up. One way: by GROUP of organisms — botany (plants), zoology (animals), microbiology (microbes). Another way: by LEVEL of organisation — molecular biology (DNA, proteins), cell biology (the cell), anatomy (body parts), physiology (how parts work), genetics (inheritance), ecology (organisms + environment). Most real problems need several at once: fighting a malaria outbreak uses parasitology (the Plasmodium), entomology (the mosquito), immunology (your defences) and epidemiology (population spread).",
  detailed: `<p><b>Levels-of-organisation branches:</b> Molecular biology — the chemistry of life machinery (DNA replication, gene expression). Cell biology (cytology) — the cell as unit: organelles, membranes, division. Histology — tissues. Anatomy — body structures (gross = naked eye, microscopic = with instruments). Physiology — functions and mechanisms (how the kidney filters, how nerves fire). Developmental biology — from zygote to adult (embryology). Genetics — heredity and variation. Evolutionary biology — change of species over deep time. Ecology — interactions: organism → population → community → ecosystem → biosphere.</p>
<p><b>Group branches:</b> Botany (plants: taxonomy, physiology, economic botany), Zoology (animals: entomology-insects, ichthyology-fish, herpetology-reptiles/amphibians, ornithology-birds, mammalogy-mammals), Microbiology (bacteriology, virology, mycology-fungi, parasitology), Phycology (algae), Bryology (mosses).</p>
<p><b>Applied/interdisciplinary branches:</b> Biochemistry (chemical processes in living matter), Biophysics, Biotechnology (using organisms for products), Medicine, Agriculture (agronomy, horticulture, forestry, animal science), Environmental biology, Marine biology, Freshwater biology (limnology — relevant to Lake Tana!), Epidemiology, Bioinformatics (computational biology — the data era).</p>
<p><b>Why the split?</b> No human can hold all of biology. Specialisation lets depth; but life doesn't respect the borders — a cancer researcher needs genetics + cell biology + immunology + anatomy. Modern biology's frontier problems (climate, pandemics, food security) are explicitly MULTI-branch.</p>
<p><b>Choosing a branch for a problem:</b> exam-style skill — read the problem, find the LEVEL and the GROUP: 'why does teff fail in waterlogged soil?' → plant physiology + agriculture; 'how does a new virus spread?' → virology + epidemiology; 'how do fish breathe at altitude?' → zoology (ichthyology) + physiology.</p>`,
  keyTerms: [
    { term: "Biology", def: "Science of living organisms (bios = life, logos = study)." },
    { term: "Botany", def: "Study of plants." },
    { term: "Zoology", def: "Study of animals." },
    { term: "Microbiology", def: "Study of microorganisms." },
    { term: "Cytology", def: "Cell biology — the cell as unit of life." },
    { term: "Anatomy vs Physiology", def: "Structure vs function of body parts." },
    { term: "Genetics", def: "Heredity and variation." },
    { term: "Ecology", def: "Organisms and their environment." },
    { term: "Entomology", def: "Insects — includes malaria-vector work." },
    { term: "Bioinformatics", def: "Computing applied to biological data (DNA sequences)." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "Ethiopia's public-health team is tracking a cholera outbreak in a town. List four biology sub-fields that must work together and say what each contributes.",
      given: "An outbreak scenario.",
      formula: "Level + group matching.",
      substitution: "Bacteriology (identify Vibrio cholerae), Epidemiology (who/where/when spread), Physiology (dehydration mechanism — ion pumping in gut), Ecology/environmental biology (water sources, sanitation).",
      calculation: "Plus immunology for vaccine strategy.",
      answer: "Outbreak response is a team sport across at least 4-5 branches."
    },
    {
      problem: "Classify these by LEVEL of biology: (a) studying ribosome structure, (b) studying how the heart pumps, (c) studying wolf pack interactions with deer and forest.",
      given: "Three research objects.",
      formula: "Molecular → organ → ecosystem ladder.",
      substitution: "(a) molecular biology (organelle machine). (b) physiology (organ function; anatomy if structure). (c) ecology (community + ecosystem level).",
      calculation: "Each level has its own questions and methods.",
      answer: "Molecular / physiological / ecological — three rungs of the organisation ladder."
    },
    {
      problem: "A student loves insects and wants a career. Name the branch and two real problems in Ethiopia where it matters.",
      given: "Career-matching question.",
      formula: "Entomology + applied links.",
      substitution: "Branch: entomology (zoology sub-branch). Problems: malaria vector control (Anopheles), fall armyworm on maize, desert locust swarms (2020 outbreak), tsetse fly and trypanosomiasis in cattle.",
      calculation: "Also pollination ecology for agriculture.",
      answer: "Entomologist — with locust and malaria work right at home."
    },
    {
      problem: "Why is 'freshwater biology (limnology)' especially relevant to Ethiopia? Give two study targets.",
      given: "Local-context reasoning.",
      formula: "Ecosystem relevance.",
      substitution: "Lake Tana (source of the Blue Nile, endemic Labeobarbus fish, wetland birds), Rift Valley lakes (Abijatta flamingos, Naivasha-type systems), river systems and their fisheries.",
      calculation: "Water-tower nation → freshwater science is national science.",
      answer: "Tana's endemic fish evolution and Rift lake bird/ecosystem health are flagship limnology problems."
    }
  ],
  commonMistakes: [
    "Saying anatomy studies 'how things work' — that's physiology; anatomy is structure.",
    "Confusing microbiology (all microbes) with bacteriology (bacteria only — viruses, fungi are separate).",
    "Thinking ecology = environmentalism — ecology is the science; activism is a use of it.",
    "Placing virology under botany/zoology — viruses aren't organisms in the plant/animal groups; they're microbiology's edge.",
    "Believing sub-fields are walled off — modern problems (pandemics, climate) are deliberately cross-branch.",
    "Mixing up herpetology (reptiles + amphibians) with ornithology (birds)."
  ],
  applications: [
    "Career map: medicine (physiology/anatomy), agriculture (botany/entomology/soil biology), conservation (ecology/zoology), public health (microbiology/epidemiology), forensics (genetics), industry (biotechnology/biochemistry).",
    "Ethiopian research institutions: EPHI (epidemiology/microbiology), EIAR (crop science), Ethiopian Wildlife & Conservation Authority (ecology), Addis Ababa University biology departments across branches.",
    "Every news story you'll read — outbreak, drought, locusts, GMO debate — is a sub-field in action.",
    "Choosing your own study path: the branch map tells you where your curiosity fits."
  ],
  summary: "Biology splits two ways: by organism group (botany, zoology, microbiology + their sub-branches) and by level of organisation (molecular → cell → tissue/organ (anatomy/physiology) → genetics → ecology → evolution). Real problems demand several branches at once, and modern frontiers (bioinformatics, biotechnology) are born at the seams.",
  visuals: [
    { type: "mindMap", config: { branches: [{ items: ["Molecular biology", "Cell biology", "Genetics"], label: "Molecules & cells" }, { items: ["Anatomy", "Physiology", "Histology"], label: "Body" }, { items: ["Botany", "Zoology", "Microbiology"], label: "Groups" }, { items: ["Ecology", "Evolution", "Behaviour"], label: "Populations" }, { items: ["Medicine", "Agriculture", "Biotech"], label: "Applied" }], center: "BIOLOGY" } },
    { type: "flowChart", config: { steps: ["Molecule", "Cell", "Tissue", "Organ", "Organ system", "Organism", "Population", "Community", "Ecosystem", "Biosphere"], title: "Levels of Biological Organisation" } },
    { type: "qa", config: { title: "Which Branch? — tap to reveal", pairs: [{ q: "Study of mosses?", a: "Bryology (botany sub-branch)." }, { q: "How genes pass from parents to offspring?", a: "Genetics." }, { q: "Structure and role of the kidney nephron's filtering?", a: "Anatomy (structure) + physiology (function)." }, { q: "A new coronavirus variant spreading through a country?", a: "Virology + epidemiology (microbiology + population-level branch)." }] } }
  ],
  questions: [
    { type: "mcq", q: "The branch that studies insects is:", options: ["Herpetology", "Entomology", "Ornithology", "Ichthyology"], answer: 1, difficulty: 1, explanation: "Entomology = insects; herpeto = reptiles/amphibians, ornitho = birds, ichthyo = fish." },
    { type: "mcq", q: "Physiology differs from anatomy because it studies:", options: ["Body structure", "Body function", "Fossils", "Cell division"], answer: 1, difficulty: 1, explanation: "Anatomy = what parts are; physiology = what parts DO." },
    { type: "short", q: "The study of living things at the level of DNA and proteins is ____ biology.", answer: "molecular", difficulty: 1, explanation: "Molecular biology — life's chemistry machinery." },
    { type: "concept", q: "Why does fighting malaria need MORE than one biology branch?", answer: "parasite mosquito human spread|multiple levels|entomology parasitology epidemiology", difficulty: 2, explanation: "Plasmodium (parasitology), Anopheles vector (entomology), human response (immunology/physiology), population spread (epidemiology/ecology)." },
    { type: "tf", q: "Microbiology and bacteriology mean exactly the same thing.", answer: false, difficulty: 2, explanation: "Bacteriology is only bacteria; microbiology covers bacteria, viruses, fungi, protists." },
    { type: "mcq", q: "A scientist studies how Lake Tana fish interact with their environment. Her main branch is:", options: ["Genetics", "Ecology", "Histology", "Virology"], answer: 1, difficulty: 1, explanation: "Organisms ↔ environment = ecology (freshwater/limnology flavour)." },
    { type: "ordering", q: "Pick the correct organisation ladder (small → large):", options: ["Cell → tissue → organ → organ system → organism", "Tissue → cell → organ → organism → tissue", "Organ → cell → organism → ecosystem", "Organism → organ → cell → molecule"], answer: [0], difficulty: 2, explanation: "The standard hierarchy from cell upward." },
    { type: "short", q: "The computational analysis of DNA sequence data is called ____.", answer: "bioinformatics", difficulty: 2, explanation: "Biology + informatics — the data-driven branch." },
    { type: "concept", q: "Give the branch and level for: 'studying how a hormone lowers blood sugar'.", answer: "physiology endocrine|organ system level|function of hormone", difficulty: 3, explanation: "Physiology (function), specifically endocrine physiology, at organ-system level." }
  ]
};

/* --- b1-2: Pure and Applied Fields of Biology --- */
Lessons["g10-biology-ub1-t2"] = {
  overview: "Some biologists chase knowledge for its own sake (pure/basic science: why do telomeres shorten?); others solve human problems (applied science: how do we grow teff in drier years?). Both feed each other — and Ethiopia's development needs both.",
  objectives: [
    "Distinguish pure (basic) from applied biology by GOAL, not by method",
    "Give examples of pure research that later became applications",
    "List major applied fields: medicine, agriculture, biotechnology, conservation",
    "Trace a discovery chain from curiosity to product",
    "Argue why both kinds of research matter"
  ],
  simple: "Pure biology asks 'how does this work?' with no product in mind — studying fruit-fly eyes, bacterial shapes, or how deep-sea worms survive. Applied biology asks 'how does this HELP?' — vaccines, crop breeding, sewage treatment, wildlife management. The line blurs: the mould-obsessed Fleming (pure-ish) gave us penicillin; bacteria that cut DNA (discovered as curiosity) became genetic engineering's scissors. Applied science without pure science is a well that runs dry; pure science that never applies is knowledge nobody uses. You need both.",
  detailed: `<p><b>Pure (basic) research:</b> driven by questions, published as understanding. Examples: how does photosynthesis split water? (curiosity → 300 years of work); why do some bacteria have restriction enzymes? (answer: anti-viral defence — nobody planned the payoff); what genes control body segmentation in Drosophila? (answer became the foundation of developmental biology and cancer genetics).</p>
<p><b>Applied research:</b> driven by problems with deadlines and users. Medicine (drugs, diagnostics), agriculture (breeding, pest control, soil biology), veterinary science, forestry and wildlife management, fisheries, food science and safety, industrial biotechnology (enzymes, biofuels, fermentation), environmental biotechnology (waste treatment, bioremediation), forensic biology.</p>
<p><b>The discovery chain (classic cases):</b>
<br>• Streptomyces soil bacteria studied for growth habits → antibiotics (streptomycin, TB treatment).
<br>• Thermus aquaticus living in hot springs (pure curiosity, 1966) → Taq polymerase → PCR → every modern diagnostic lab, paternity test, and variant tracker.
<br>• Observed hyphae killing bacteria in Fleming's plates → penicillin (1928) → mass production (1940s) → the antibiotic era.
<br>• Bacterial immune systems (CRISPR repeats, described 1987, understood ~2005-2012) → gene editing (2012) → medicine and crop engineering NOW.</p>
<p><b>Ethiopian applied-biology landscape:</b> EIAR (Ethiopian Institute of Agricultural Research) teff/sorghum breeding and drought-tolerant varieties; EPHI (public-health labs, outbreak response); Institute of Biotechnology (EBI) at Addis Ababa University (tissue culture, banana plantlets, vaccine research); Lejja and Melka Werer centers (cotton, livestock); game wardens & national-past management (ECODEC, Ethiopian Wolf Conservation Program in the Simien/Bale highlands).</p>
<p><b>Why both:</b> applications draw from the basic-science reservoir; every generation that only USES old knowledge eventually runs out of new tools. Nations that fund only applied work end up buying others' discoveries at premium prices.</p>`,
  keyTerms: [
    { term: "Pure (basic) research", def: "Knowledge for its own sake — questions drive it." },
    { term: "Applied research", def: "Problem-driven science aimed at products/solutions." },
    { term: "Biotechnology", def: "Using organisms/systems to make or improve products." },
    { term: "Discovery chain", def: "Curiosity finding → understanding → application → product." },
    { term: "PCR", def: "DNA amplification — born from a hot-spring bacterium (pure research)." },
    { term: "CRISPR", def: "Gene editing — from a bacterial immune curiosity to a molecular tool." },
    { term: "Bioremediation", def: "Using microbes to clean pollutants." },
    { term: "EIAR / EPHI", def: "Ethiopian applied-biology institutions (agriculture / public health)." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "Classify each as pure or applied: (a) sequencing a new lake bacterium's genome out of curiosity; (b) breeding a mildew-resistant barley variety; (c) mapping how a hormone controls insect moulting; (d) making a biopesticide from that hormone pathway.",
      given: "Four research projects.",
      formula: "Goal test: understanding vs product.",
      substitution: "(a) pure — knowledge goal. (b) applied — farmer's problem. (c) pure — mechanism question. (d) applied — product from (c).",
      calculation: "Notice (c)→(d) is a discovery chain.",
      answer: "Pure, applied, pure, applied — and (c) feeds (d)."
    },
    {
      problem: "Trace the PCR story from hot spring to hospital lab in four steps.",
      given: "Thermus aquaticus, 1966 Yellowstone-like springs.",
      formula: "Curiosity → enzyme → technique → application.",
      substitution: "(1) Microbiologist studies bacteria living at 70 °C (pure). (2) Their DNA-copying enzyme works when hot (understanding). (3) Kary Mullis's PCR (1983) needs a heat-stable polymerase → Taq adopted → DNA can be amplified in cycles. (4) Hospitals: pathogen detection, genetic disease testing, forensics.",
      calculation: "Every step depended on the previous.",
      answer: "A curiosity about hot-spring life became the workhorse of every diagnostic lab."
    },
    {
      problem: "An Ethiopian university wants to boost banana production for smallholders using biology. Design a two-part plan: one applied and one supporting basic study.",
      given: "Tissue-culture banana programs exist (EBI).",
      formula: "Applied + basic pairing.",
      substitution: "Applied: mass micropropagation (tissue culture) of disease-free planting material + field trials of varieties. Basic: study the genetic variation and soil microbiome of local banana fields to know WHAT to breed for and WHY some plots fail.",
      calculation: "Basic findings feed the next applied cycle.",
      answer: "Tissue-culture delivery now + population-genetics/soil-microbiome research underneath it."
    },
    {
      problem: "A politician proposes cutting ALL pure-biology funding and keeping only medical/agricultural applied work. Give two evidence-based objections.",
      given: "Policy argument.",
      formula: "Discovery-chain logic.",
      substitution: "(1) Applied pipelines run on basic discoveries — antibiotics, PCR, CRISPR, vaccines' mRNA platform all began as curiosity research; cutting the source dries the pipeline within a generation. (2) Nations that fund only applied work must IMPORT others' discoveries (patent fees, tech transfer) — more expensive long-term.",
      calculation: "Historical lag: curiosity→product often 20-40 years (Taq 1966 → PCR era 1990s).",
      answer: "Pure research is the seed bank of every future application — cutting it mortgages tomorrow."
    }
  ],
  commonMistakes: [
    "Saying pure research is 'useless' — the use often appears decades later (Taq → PCR took ~20 years).",
    "Classifying by TECHNIQUE instead of GOAL — a genome sequence can serve either.",
    "Thinking only medicine counts as applied — agriculture, conservation, industry, forensics all qualify.",
    "Believing applied research needs no basic science — every application stands on someone's curiosity.",
    "Confusing biotechnology (broad: from bread-making to gene editing) with genetic engineering only.",
    "Forgetting Ethiopia's own applied institutions (EIAR, EPHI, EBI) when listing 'real-world biology'."
  ],
  applications: [
    "Vaccines & outbreak response (EPHI labs) — applied microbiology/immunology.",
    "Teff and wheat breeding for drought/heat — applied plant biology feeding food security.",
    "Tissue-culture banana and coffee plantlets (EBI) — clean planting material for smallholders.",
    "Ethiopian Wolf Conservation Program — applied ecology in Bale Mountains.",
    "Industrial fermentation: injera batter science, tej, beer (starch → sugar → alcohol microbiology).",
    "Waste treatment and bioremediation of tannery effluents — environmental biotechnology."
  ],
  summary: "Pure biology = understanding-driven; applied = problem-driven. The discovery chain (curiosity → mechanism → tool → product) shows they're one pipeline: penicillin, PCR, CRISPR all began as 'why?'. Ethiopia's applied needs (crops, health, conservation) are strongest when basic research keeps refilling the well.",
  visuals: [
    { type: "flowChart", config: { steps: ["Curiosity question", "Mechanism understood", "Tool discovered", "Prototype built", "Product in the field"], title: "The Discovery Chain (pure → applied)" } },
    { type: "comparison", config: { title: "Pure vs Applied Biology", left: { name: "Pure (basic)", items: ["Goal: understanding", "Success = good explanation", "Timeline: open-ended", "Example: how do restriction enzymes work?"] }, right: { name: "Applied", items: ["Goal: solve a problem", "Success = working product", "Timeline: deadlines", "Example: drought-tolerant teff variety"] } } },
    { type: "qa", config: { title: "Chain Builders — tap to reveal", pairs: [{ q: "What was Fleming's 'useless' observation?", a: "Mould killing bacteria on a plate — published as a curiosity in 1929; mass-produced penicillin arrived in the 1940s." }, { q: "Why did PCR need a hot-spring bacterium?", a: "The reaction cycles through boiling; ordinary DNA polymerase denatures. Taq from Thermus aquaticus survives the heat." }, { q: "Name one Ethiopian applied-biology success.", a: "Virus-free banana plantlets by tissue culture (EBI) — thousands of farmers got clean planting stock." }] } }
  ],
  questions: [
    { type: "mcq", q: "Basic (pure) research is best described as research aimed at:", options: ["Selling a product", "Understanding nature", "Passing exams", "Winning awards"], answer: 1, difficulty: 1, explanation: "Knowledge for its own sake — understanding is the goal." },
    { type: "mcq", q: "Which is an APPLIED biology example?", options: ["Mapping fruit-fly gene functions", "Breeding mildew-resistant barley", "Describing a new deep-sea worm", "Measuring enzyme kinetics for theory"], answer: 1, difficulty: 1, explanation: "Barley breeding solves a farmer's problem — applied." },
    { type: "short", q: "The heat-stable DNA polymerase used in PCR came from the bacterium Thermus ____.", answer: "aquaticus|taq", difficulty: 2, explanation: "T. aquaticus from hot springs — the pure-research gift to diagnostics." },
    { type: "concept", q: "Why can cutting pure-research funding hurt a country's medicine 20 years later?", answer: "no new discoveries|pipeline dries|applications need basic science", difficulty: 3, explanation: "Applications draw on basic discoveries; without new curiosity research, tomorrow's tools must be imported at premium cost." },
    { type: "tf", q: "Biotechnology only means modern genetic engineering.", answer: false, difficulty: 2, explanation: "Bread, beer, injera fermentation are biotechnology too — using organisms to make products." },
    { type: "mcq", q: "The discovery chain in correct order is:", options: ["Product → tool → mechanism", "Mechanism → curiosity → product", "Curiosity → mechanism → tool → product", "Tool → product → curiosity"], answer: 2, difficulty: 2, explanation: "Question first, then understanding, then usable tool, then product." },
    { type: "short", q: "Ethiopia's public-health laboratory and outbreak-response institution is abbreviated ____.", answer: "ephi", difficulty: 2, explanation: "Ethiopian Public Health Institute — applied biology in action." },
    { type: "concept", q: "Classify: 'studying how cichlid fish species diversified in lakes' and 'using that knowledge to manage a fishery'.", answer: "pure applied|first basic second applied|understanding vs management", difficulty: 2, explanation: "Evolutionary curiosity = pure; sustainable fishery = applied." },
    { type: "mcq", q: "CRISPR gene editing originated from:", options: ["Plant breeding programs", "Studying bacterial immune systems", "Vaccine manufacturing", "Fossil DNA"], answer: 1, difficulty: 3, explanation: "Bacterial anti-viral defence observed as basic science → the editing tool (2012)." }
  ]
};

/* --- b1-3: Major Discoveries in Biology --- */
Lessons["g10-biology-ub1-t3"] = {
  overview: "A handful of discoveries redefined what 'life' means: cells, evolution by natural selection, inheritance laws, the germ theory of disease, and the DNA double helix. Each one didn't just add facts — it changed the FRAME biologists think in.",
  objectives: [
    "Present the five landmark discoveries with dates and discoverers",
    "Explain what question each discovery answered",
    "State the core idea of each in one sentence",
    "Connect discoveries to modern medicine/agriculture",
    "Sequence the discoveries chronologically"
  ],
  simple: "1665: Hooke names the 'cell' looking at cork; 1859: Darwin (and Wallace) publish natural selection — one law explains life's unity AND diversity; 1866: Mendel's pea experiments reveal inheritance comes in discrete units (genes); 1860s: Pasteur and Koch prove microbes cause disease (germ theory) — surgery, vaccines, sanitation follow; 1953: Watson & Crick (with Franklin's X-ray data) reveal DNA's double helix — the molecule of heredity, and the code inside it. Each discovery was a new lens: cell → everything alive is built of them; evolution → everything alive is related; DNA → everything alive reads the same molecular instruction book.",
  detailed: `<p><b>Cell theory (1838-39, Schleiden & Schwann; Hooke 1665 named cells; Leeuwenhoek first saw living cells 1674):</b> all organisms are made of cells; the cell is the basic unit of life; all cells come from pre-existing cells (Virchow, 1855). Consequence: biology's questions become cell questions — disease, growth, reproduction all live at cell level.</p>
<p><b>Evolution by natural selection (Darwin's Beagle voyage 1831-36; Origin of Species 1859; Wallace independently):</b> organisms vary; more offspring are born than survive; traits are heritable; therefore variants better matched to the environment leave more descendants → populations change over generations. Evidence Darwin used: fossils, biogeography, homologous structures, embryology. Modern synthesis (1930s-40s) merged it with genetics → evolution = change in allele frequencies.</p>
<p><b>Mendel's laws (1866, rediscovered 1900):</b> inheritance is particulate (genes, not blending); segregation (each parent passes one of two alleles); independent assortment (different genes sort separately — mostly). Why peas: controlled breeding, clear traits, large numbers, mathematics applied to biology for the first time.</p>
<p><b>Germ theory (Pasteur's swan-neck flasks 1861; Koch's postulates 1884):</b> diseases come from specific microorganisms, not 'miasma' (bad air). Pasteur also gave pasteurisation and rabies vaccine; Koch identified anthrax, TB and cholera bacteria and the postulates to prove causation. Consequences: antisepsis (Lister), vaccines, clean water, public health as science.</p>
<p><b>DNA double helix (1953):</b> Avery-MacLeod-McCarty (1944) and Hershey-Chase (1952) proved DNA is the genetic material; Chargaff's rules (A=T, G=C); Franklin & Wilkins's X-ray diffraction (Photo 51) revealed the helix geometry; Watson & Crick built the model: two antiparallel strands, sugar-phosphate backbone, complementary base pairing — and the structure ITSELF suggested copying (unzip and each strand templates a new one). Downstream: genetic code cracked (1960s), recombinant DNA (1973), Human Genome Project (2003), CRISPR (2012).</p>
<p><b>Other giants worth naming:</b> binomial nomenclature (Linnaeus 1758), circulation of blood (Harvey 1628), taxonomy, photosynthesis's oxygen source (van Niel), population genetics (Hardy-Weinberg), ecosystem concept (Tansley 1935).</p>`,
  keyTerms: [
    { term: "Cell theory", def: "All life is made of cells; cells arise from cells." },
    { term: "Natural selection", def: "Heritable variants that aid survival/reproduction increase over generations." },
    { term: "Survival of the fittest", def: "Short phrase (Spencer, adopted by Darwin) — best-matched leave most offspring." },
    { term: "Segregation", def: "Mendel: two alleles separate into different gametes." },
    { term: "Germ theory", def: "Specific microbes cause specific diseases." },
    { term: "Koch's postulates", def: "Evidence rules linking a microbe to a disease." },
    { term: "Double helix", def: "DNA's two-strand spiral with complementary base pairing." },
    { term: "Complementary base pairing", def: "A=T, G≡C — the copying rule." },
    { term: "Photo 51", def: "Rosalind Franklin's X-ray diffraction image revealing helix structure." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "A student says 'Darwin invented evolution.' Correct the statement precisely.",
      given: "Common misconception.",
      formula: "Idea vs mechanism.",
      substitution: "Evolution (descent with modification) was discussed before Darwin (his own grandfather Erasmus; Lamarck 1809). Darwin + Wallace's contribution was the MECHANISM: natural selection — plus 20 years of evidence.",
      calculation: "Also note independent co-discovery by Wallace (1858).",
      answer: "Darwin didn't invent evolution; he provided its first working mechanism and evidence base."
    },
    {
      problem: "Explain how Pasteur's swan-neck flask experiment killed the 'spontaneous generation' idea.",
      given: "Broth in open flask vs curved-neck flask.",
      formula: "Controlled exposure.",
      substitution: "Air reaches broth in both, but dust/microbes trap in the S-curve of the swan neck. Broth stays sterile indefinitely; tip the neck → growth appears.",
      calculation: "Life came from life (biogenesis), not from the broth itself.",
      answer: "The experiment separated 'air' from 'airborne particles' — only the particles caused growth."
    },
    {
      problem: "Why is it said that DNA's structure 'suggested its function' immediately?",
      given: "1953 Watson-Crick paper's famous closing line.",
      formula: "Complementarity → copying.",
      substitution: "Two strands with A-T/G-C pairing: separate them and each is a perfect template for a new partner strand.",
      calculation: "Heredity's molecular mechanism was visible in the model itself.",
      answer: "Base pairing is a copying instruction — the structure explained replication in one glance."
    },
    {
      problem: "Match each discovery to a modern technology: (a) germ theory, (b) Mendel, (c) DNA structure, (d) natural selection.",
      given: "Four → four.",
      formula: "Discovery-chain thinking.",
      substitution: "(a) → vaccines, sterilisation, antibiotics, sanitation. (b) → genetic counselling, crop/animal breeding, pedigree analysis. (c) → PCR diagnostics, genetic engineering, gene therapy, forensics. (d) → antibiotic-resistance management, pest-resistance strategies, vaccine strain updates.",
      calculation: "Every modern biotech has a discovery grandparent.",
      answer: "Four lenses, four industries of consequences."
    }
  ],
  commonMistakes: [
    "Crediting Darwin with 'inventing evolution' — he supplied the mechanism (natural selection).",
    "Saying 'survival of the fittest' means strongest — 'fittest' = best matched to the environment (often the sneakiest, not the biggest).",
    "Believing Mendel was ignored because he was wrong — he was ahead of his time; the chromosome mechanism wasn't known until 1900.",
    "Thinking Pasteur DISCOVERED microbes (Leeuwenhoek saw them ~1674); Pasteur proved what they DO.",
    "Omitting Rosalind Franklin when telling the DNA story — her diffraction data was central.",
    "Confusing the rediscovery of Mendel (1900) with his original work (1866).",
    "Saying antibiotics 'create' resistant bacteria — selection was already there; antibiotics SELECT the resistant variants (natural selection in fast-forward)."
  ],
  applications: [
    "Germ theory underpins every Ethiopian health campaign: clean water, TB/DOTS programs, vaccination weeks.",
    "Mendelian genetics powers EIAR plant breeding (pedigree selection for yield/drought).",
    "DNA technology: EPHI uses PCR for outbreak confirmation (cholera, measles).",
    "Natural selection in real time: managing drug-resistant TB and malaria (chloroquine resistance).",
    "Cell theory → tissue culture (EBI banana plantlets) and modern cancer biology.",
    "Evolutionary thinking guides wildlife conservation (genetic diversity of Ethiopian wolf populations)."
  ],
  summary: "Five frame-shifters: cell theory (life's unit), natural selection (life's history), Mendelian inheritance (life's accounting), germ theory (disease's cause), DNA double helix (life's code). Each answered a burning question and each unlocked a technology chain we still ride — vaccines, breeding, PCR, resistance management.",
  visuals: [
    { type: "timeline", config: { events: [{ text: "Hooke names 'cells' in cork", year: "1665" }, { text: "Linnaeus binomial nomenclature", year: "1758" }, { text: "Schleiden & Schwann — cell theory", year: "1838" }, { text: "Darwin — Origin of Species", year: "1859" }, { text: "Mendel — pea inheritance laws", year: "1866" }, { text: "Pasteur/Koch — germ theory", year: "1861-84" }, { text: "Watson, Crick & Franklin data — DNA helix", year: "1953" }, { text: "Human Genome Project complete", year: "2003" }], title: "Five Discoveries That Redefined Life" } },
    { type: "mindMap", config: { branches: [{ items: ["Cell theory", "Microscopes"], label: "Cells" }, { items: ["Natural selection", "Genetics"], label: "Evolution" }, { items: ["Germ theory", "Vaccines"], label: "Disease" }, { items: ["DNA helix", "Genomics", "CRISPR"], label: "Molecule of heredity" }], center: "Landmark Discoveries" } },
    { type: "qa", config: { title: "Who Did What? — tap to reveal", pairs: [{ q: "Who proved DNA (not protein) carries genes?", a: "Avery-MacLeod-McCarty (1944), confirmed by Hershey-Chase (1952) with radioactive phage." }, { q: "Whose X-ray image revealed the helix?", a: "Rosalind Franklin's Photo 51 (with Maurice Wilkins at King's College London)." }, { q: "Who founded antiseptic surgery from germ theory?", a: "Joseph Lister — carbolic acid to kill 'germs' in wounds (1867)." }] } }
  ],
  questions: [
    { type: "mcq", q: "Cell theory states all of the following EXCEPT:", options: ["All organisms are made of cells", "Cells arise from pre-existing cells", "The cell is the basic unit of life", "Cells can form from sterile broth"], answer: 3, difficulty: 2, explanation: "Spontaneous generation was disproved (Pasteur); cells only come from cells." },
    { type: "short", q: "The 1859 book 'On the Origin of Species' was written by ____.", answer: "darwin|charles darwin", difficulty: 1, explanation: "Charles Darwin — with Wallace's parallel work read out in 1858." },
    { type: "mcq", q: "Mendel's inheritance units are now called:", options: ["Chromosomes", "Genes", "Enzymes", "Hormones"], answer: 1, difficulty: 1, explanation: "His 'factors' = genes, on chromosomes (established ~1900-1902)." },
    { type: "concept", q: "What did Pasteur's swan-neck flasks prove?", answer: "life from life|microbes from air particles|no spontaneous generation", difficulty: 2, explanation: "Sterile broth stayed sterile until particles entered — biogenesis, not spontaneous generation." },
    { type: "mcq", q: "DNA's structure immediately suggested its function because:", options: ["It was acidic", "Base pairing allows each strand to template a new one", "It glows under UV", "It is single-stranded"], answer: 1, difficulty: 3, explanation: "Complementarity (A-T, G-C) = a built-in copying mechanism." },
    { type: "ordering", q: "Pick the correct chronological order:", options: ["DNA helix → germ theory → cell theory", "Cell theory → germ theory → DNA helix", "Germ theory → DNA helix → cell theory", "DNA helix → cell theory → germ theory"], answer: [1], difficulty: 2, explanation: "1838 cells → 1860s-80s germs → 1953 DNA." },
    { type: "tf", q: "Rosalind Franklin's X-ray diffraction data was essential to the DNA model.", answer: true, difficulty: 2, explanation: "Photo 51 gave the helix dimensions; her contribution is now recognised." },
    { type: "short", q: "The rules linking a specific microbe to a specific disease are ____'s postulates.", answer: "koch", difficulty: 2, explanation: "Robert Koch (1884) — the causation checklist still used conceptually." },
    { type: "concept", q: "How does the discovery of natural selection explain antibiotic resistance?", answer: "resistant variants selected|survive and reproduce|pre-existing variation", difficulty: 3, explanation: "Variation exists; antibiotics kill susceptible bacteria; resistant survivors multiply — selection in fast-forward." }
  ]
};

/* --- b1-4: Contributions of Biological Discoveries --- */
Lessons["g10-biology-ub1-t4"] = {
  overview: "What did those discoveries BUY humanity? Doubled life expectancy, green-revolution grain yields, vaccines that erased smallpox, DNA tests that free the innocent. This lesson maps discoveries → concrete contributions across health, food, industry and environment.",
  objectives: [
    "Link each landmark discovery to its major human contributions",
    "Quantify impacts (life expectancy, yield gains, disease burden)",
    "Explain vaccine, antibiotic and breeding contributions mechanistically",
    "Assess double-edged contributions (antibiotic overuse, monocultures)",
    "Cite contributions relevant to Ethiopia"
  ],
  simple: "Germ theory → clean water, vaccines, antibiotics: average life expectancy in developed countries jumped from ~47 to ~75 years in the 20th century — microbes stopped being a death sentence. Mendel + Darwin → plant breeding: the Green Revolution (Borlaug's wheats) roughly doubled cereal yields 1960-2000, feeding billions. DNA → forensics, genetic disease testing, insulin made by engineered bacteria (no more pig pancreas extraction). Cell biology → tissue culture: virus-free banana seedlings for Ethiopian farmers. Evolution → the warning we now live with: misuse of antibiotics selects resistance — contribution AND responsibility.",
  detailed: `<p><b>Health contributions:</b> Germ theory → pasteurisation, antisepsis, sanitation, vaccination (smallpox eradicated 1980 — the only human disease erased; polio ~99% down), antibiotics (penicillin mass use 1940s: infections that routinely killed — childbirth wounds, pneumonia — became treatable). Life expectancy in high-income nations: ~47 (1900) → ~75 (2000); child mortality collapsed. Immunology from germ theory → modern cancer immunotherapy and mRNA vaccines (2020s).</p>
<p><b>Food contributions:</b> Mendelian + evolutionary genetics → hybridisation and selection breeding: Green Revolution wheat/rice varieties (1960s-70s) doubled yields in Mexico, India, Pakistan; biotechnology → Bt crops, Golden rice; tissue culture → clean planting material (Ethiopian banana, potato). Fermentation science (Pasteur) → bread, injera's fermentation, beer, yoghurt, cheese at industrial scale.</p>
<p><b>Industry contributions:</b> Microbiology → enzymes in detergents, biofuels, antibiotics production; DNA tech → recombinant insulin (1982, first engineered human drug), growth hormone, hepatitis vaccine; cell biology → monoclonal antibodies (diagnostics + cancer therapy); extremophile enzymes → PCR industry.</p>
<p><b>Environment & forensics:</b> Ecology + evolution → conservation biology (Ethiopian wolf, Simien fox programs), biodiversity monitoring with DNA barcoding; DNA profiling (1984, Alec Jeffreys) → forensics, paternity, exoneration of the wrongly convicted; microbial bioremediation → oil-spill cleanup, mine-waste treatment.</p>
<p><b>The double edge (critical thinking):</b> antibiotics overused in humans AND livestock → resistance crisis (TB/XDR-TB, malaria drug resistance — Ethiopia's real burden); monocultures → genetic vulnerability (Irish famine precedent; disease sweeps); DDT → pest control then ecological collapse (Rachel Carson, Silent Spring 1962); GMOs → yield/ nutrition gains vs corporate control and biosafety debates. Every contribution carries a management responsibility — biology's gifts need wisdom to keep.</p>`,
  keyTerms: [
    { term: "Eradication (smallpox)", def: "Only human disease wiped out by vaccination (1980)." },
    { term: "Green Revolution", def: "1960s-70s breeding + inputs that doubled cereal yields." },
    { term: "Recombinant insulin", def: "Human insulin made by engineered bacteria (1982) — DNA tech's first gift." },
    { term: "DNA profiling", def: "Jeffreys 1984 — identity from unique banding; forensics/paternity." },
    { term: "Antibiotic resistance", def: "Selection from misuse — the cost of overusing a contribution." },
    { term: "Monoculture", def: "Genetically uniform fields — high yield, high vulnerability." },
    { term: "Bioremediation", def: "Microbes cleaning pollution." },
    { term: "Tissue culture", def: "Growing plants/cells from small samples — clean seedlings at scale." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "Show how ONE discovery (germ theory) produced at least four distinct contributions.",
      given: "Pasteur/Koch 1860s-80s.",
      formula: "Branching consequences.",
      substitution: "(1) Sanitation & clean water → cholera/typhoid control. (2) Antisepsis (Lister) → safe surgery/childbirth. (3) Vaccines → smallpox eradication, polio near-erasure. (4) Antibiotics → infections treatable. (Bonus: food pasteurisation.)",
      calculation: "One idea, four industries of benefit.",
      answer: "Germ theory is the single biggest life-expectancy lever in history."
    },
    {
      problem: "A farmer in the Rift Valley loses maize to fall armyworm. Explain two biology-discovery-based responses and one caution.",
      given: "Real Ethiopian pest.",
      formula: "Applied genetics + ecology.",
      substitution: "Responses: (1) Bt maize (genetic engineering from DNA discovery) expresses a bacterial protein toxic to the worm; (2) integrated pest management (ecology): natural enemies, pheromone traps, rotation. Caution: monoculture Bt without refuges selects resistant worms (evolution again).",
      calculation: "Contribution + responsibility.",
      answer: "Use the tools, respect the evolution — resistance management is mandatory."
    },
    {
      problem: "Quantify: life expectancy in England was ~47 years (1900) and ~81 today. Name the discovery-cluster most responsible and the mechanism.",
      given: "The biggest public-health jump.",
      formula: "Germ theory cluster.",
      substitution: "Not hospitals' high-tech care — mainly: clean water + sanitation + pasteurisation + childhood vaccines + antibiotics, all germ-theory children, cutting infectious-death especially in children (child survival transforms the average).",
      calculation: "When fewer die at age 2, the average soars.",
      answer: "Germ theory's public-health applications — the quiet revolution behind the numbers."
    },
    {
      problem: "Explain the 'double edge' of antibiotics using natural selection, and state one action that slows resistance.",
      given: "The contribution turning costly.",
      formula: "Selection pressure logic.",
      substitution: "Any bacterial population contains rare resistant mutants; antibiotics kill competitors, resistant ones multiply → resistant strain dominates. Overuse (viral colds, livestock growth promotion) accelerates selection.",
      calculation: "Actions: complete prescribed courses, ban growth-promotion use, stewardship programs, phage/ new-drug research.",
      answer: "Antibiotics are natural selection's accelerator — use them like a finite resource, because they are."
    }
  ],
  commonMistakes: [
    "Attributing longer life mainly to hospitals — sanitation + vaccines did the heavy lifting.",
    "Thinking antibiotics 'create' resistance — they SELECT pre-existing resistant mutants.",
    "Believing the Green Revolution was only seeds — it was seeds + irrigation + fertiliser + policy as a package.",
    "Confusing vaccination (prevention, immune memory) with antibiotics (treatment, kill bacteria).",
    "Assuming GMO = always bad or always good — evaluate case by case (Bt cotton's pesticide cuts vs monoculture risks).",
    "Forgetting smallpox is ERADICATED — the proof that coordinated biology works at planetary scale.",
    "Cropping DNA profiling into 'genetic engineering' — it's an ANALYSIS tool, not modification."
  ],
  applications: [
    "Ethiopia's Expanded Program on Immunization (measles, polio campaigns) — germ theory's direct child.",
    "EIAR improved teff, wheat and maize varieties — Mendel + Green Revolution lineage.",
    "EBI tissue-culture banana program — cell biology feeding smallholder incomes.",
    "EPHI PCR laboratories — DNA discovery in outbreak confirmation.",
    "Ethiopian Wolf Conservation Program — ecology + genetics keeping a species alive.",
    "Injera fermentation, tej, yoghurt — Pasteur's microbiology in every kitchen."
  ],
  summary: "Germ theory → sanitation/vaccines/antibiotics (life expectancy doubled); genetics → Green Revolution yields and modern breeding; DNA tech → recombinant medicines, forensics, diagnostics; cell biology → tissue culture; ecology/evolution → conservation. Every gift has a shadow (resistance, monocultures, DDT) — contributions demand stewardship.",
  visuals: [
    { type: "flowChart", config: { steps: ["Germ theory (1860s)", "Sanitation + pasteurisation", "Vaccines (smallpox → 1980)", "Antisepsis (Lister)", "Antibiotics (1940s)", "Life expectancy 47 → 75+"], title: "One Discovery, One Century of Saved Lives" } },
    { type: "comparison", config: { title: "Gifts and Shadows", left: { name: "Contributions", items: ["Vaccines: smallpox gone", "Green Revolution: billions fed", "Insulin from bacteria", "DNA forensics: justice"] }, right: { name: "Responsibilities", items: ["Antibiotic stewardship", "Avoid monoculture fragility", "Pesticide ecology (DDT lesson)", "GMO ethics & biosafety"] } } },
    { type: "barChart", config: { labels: ["1900", "1940", "1970", "2000", "2023"], title: "Life Expectancy in High-Income Countries (years)", unit: "years", values: [47, 63, 71, 77, 81] } }
  ],
  questions: [
    { type: "mcq", q: "The only human disease eradicated so far is:", options: ["Polio", "Measles", "Smallpox", "TB"], answer: 2, difficulty: 1, explanation: "Smallpox — certified eradicated 1980 through vaccination." },
    { type: "short", q: "The first recombinant-DNA human drug (1982) was ____.", answer: "insulin", difficulty: 2, explanation: "Bacteria engineered to make human insulin — diabetes treatment transformed." },
    { type: "concept", q: "Why did clean water save more lives than hospitals?", answer: "prevention at population scale|stops transmission|germ theory public health", difficulty: 2, explanation: "Water/sanitation cut infectious transmission for everyone, not just those who could reach a hospital." },
    { type: "mcq", q: "The Green Revolution mainly doubled yields of:", options: ["Fruits", "Cereals (wheat/rice)", "Vegetables", "Coffee"], answer: 1, difficulty: 1, explanation: "High-yielding dwarf wheat and rice varieties — staple calories." },
    { type: "tf", q: "Antibiotics cause bacteria to mutate into resistant forms.", answer: false, difficulty: 3, explanation: "Resistance arises by random mutation FIRST; antibiotics select the resistant ones (natural selection)." },
    { type: "short", q: "DNA-based identity testing for forensics was developed by Alec ____ in 1984.", answer: "jeffreys", difficulty: 2, explanation: "Sir Alec Jeffreys — genetic fingerprinting." },
    { type: "mcq", q: "Which technology lets a single banana plant produce thousands of disease-free plantlets?", options: ["PCR", "Tissue culture", "DNA profiling", "Pasteurisation"], answer: 1, difficulty: 2, explanation: "Micropropagation from meristem culture — cell biology's farm gift (used at EBI, Ethiopia)." },
    { type: "concept", q: "Name the discovery behind each: (a) safe surgery in 1870, (b) drought-tolerant teff variety, (c) catching a criminal from blood at a scene.", answer: "germ theory|genetics breeding|dna profiling", difficulty: 3, explanation: "(a) germ theory → antisepsis (Lister); (b) Mendel/evolution → breeding; (c) DNA structure → profiling." },
    { type: "ordering", q: "Pick the correct sequence of contributions:", options: ["Antibiotics → vaccines → sanitation", "Sanitation → antisepsis → antibiotics → recombinant insulin", "Vaccines → DNA helix → germ theory", "Insulin → antibiotics → sanitation"], answer: [1], difficulty: 2, explanation: "Public health (1850s-70s) → antisepsis (1867) → antibiotics (1940s) → biotech drug (1982)." }
  ]
};

/* --- b1-5: Discoveries by Ethiopian Biologists --- */
Lessons["g10-biology-ub1-t5"] = {
  overview: "Ethiopian and Ethiopia-based scientists have shaped biology: from the hominin fossils that rewrote human origins (Lucy — discovered by an international team including Ethiopian paleoanthropologists, and Berhane Asfaw's role in the oldest Homo sapiens finds) to modern work on teff genomics, high-altitude adaptation, and the Ethiopian wolf. This lesson profiles the people and their contributions.",
  objectives: [
    "Name key Ethiopian biologists/paleoanthropologists and their work",
    "Explain the significance of the Omo Kibish and Herto fossil finds",
    "Describe teff genomics and crop-science contributions",
    "Summarize high-altitude and endemic-species research",
    "Connect these contributions to national pride and current careers"
  ],
  simple: "Ethiopia is where human origins are written in stone: the Omo Kibish skull (~195,000 years — among the oldest Homo sapiens fossils on Earth, studied by an international team with Ethiopian scientists like Berhane Asfaw, who co-described the Herto hominins ~160,000 years), and 'Lucy' (Australopithecus afarensis, 3.2 million years, found 1974 near Hadar by a team including Ethiopian geologists — Donald Johanson led, but the work is national heritage and Ethiopian researchers like Asfaw, who later became a leading paleoanthropologist, built careers on it). In living biology: Ethiopian scientists led the teff genome sequencing (2017, national research institutions + international partners), work on the unique high-altitude adaptations of Amhara/Oromo populations, and conservation biology of the Ethiopian wolf and Simien fox. The Institute of Biotechnology at Addis Ababa University runs tissue-culture programs that changed banana farming.",
  detailed: `<p><b>Paleoanthropology (human origins):</b> Ethiopia's Rift Valley is the world's richest hominin archive. Key finds & people:
<br>• Omo Kibish (Fossil I / 'Omo I'): ~195 ka — oldest widely accepted Homo sapiens remains (dated ~233 ka in 2022 restudy); excavated 1967 by an international team (Richard Leakey directed Ethiopian-Omo work; Ethiopian scientists participated and the National Museum of Ethiopia in Addis curates them).
<br>• Herto (Bodo): ~160 ka Homo sapiens idaltu — co-described by Tim White with Ethiopian paleoanthropologist Berhane Asfaw (2003).
<br>• Lucy (1974, Hadar, 3.2 Ma Australopithecus afarensis): found by Johanson/Greyson's team — Ethiopian contributions include geologist Asfaw's fieldwork and decades of Ethiopian Museum curation; Asfaw later became a professor at Addis and a leading voice on African origins.
<br>• Selam (DIK-1 'Dikika child', 2000): a juvenile A. afarensis — team included Ethiopian scientists; Zeresenay Alemseged (Ethiopian-born paleoanthropologist) LED the description — a world-famous career from Addis to the California Academy of Sciences.</p>
<p><b>Crop science:</b> Teff (Eragrostis tef) — Ethiopia's native grain — genome sequenced and published 2017 led by international collaboration with strong Ethiopian institutional participation (University of Addis Ababa, EIAR); the map enables breeding for yield, lodging resistance and drought. Ethiopian scientists also work on enset ('false banana' — a staple for 20+ million people) genomics and coffee genetics (Arabica ORIGINATES in Ethiopian forests — gene-pool conservation at Jimma/Bench Shey research). Sorghum and wheat breeding programs at EIAR have released hundreds of varieties.</p>
<p><b>Human & animal adaptation:</b> Studies of highland populations (Amhara, Oromo) show genetic and physiological adaptation to ~2,500-3,000 m altitude (hemoglobin/oxygen handling) — Ethiopian researchers co-lead this work. Endemic-species biology: Ethiopian wolf (world's rarest canid — Bale Mountains, ~500 left, Simien fox), gelada baboon (only grazing primate — studied by Ethiopian and international teams), Dinkwanth's and other endemic birds; conservation programs run by Ethiopian wildlife biologists with universities.</p>
<p><b>Institutional builders:</b> Berhane Asfaw (paleoanthropology, AAU), Zeresenay Alemseged (DIK-1, evolutionary anatomy), the Institute of Biotechnology (EBI — tissue culture, vaccine research), EPHI scientists (outbreak genomics), and the late Prof. Gebru Tareke and others who built modern Ethiopian biology education. The National Museum (Addis) is both research institution and guardian of 'Lucy'.</p>`,
  keyTerms: [
    { term: "Omo I", def: "~195,000-year-old Homo sapiens skull from Omo Kibish — among Earth's oldest." },
    { term: "Berhane Asfaw", def: "Ethiopian paleoanthropologist; co-described Herto; AAU professor." },
    { term: "Zeresenay Alemseged", def: "Ethiopian scientist who led the Dikika child (Selam) description." },
    { term: "Lucy (Dinkinesh)", def: "3.2 Ma Australopithecus afarensis, found Hadar 1974 — Ethiopia's heritage." },
    { term: "Teff genome (2017)", def: "Reference sequence enabling modern teff breeding." },
    { term: "Enset", def: "'False banana' — Ethiopian staple crop of 20+ million people." },
    { term: "Ethiopian wolf", def: "World's rarest canid; Bale Mountains endemic." },
    { term: "EBI", def: "Institute of Biotechnology, Addis Ababa University — tissue culture & vaccines." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "Why do the Omo and Herto fossils matter to the 'where did humans originate?' question?",
      given: "~195 ka and ~160 ka Homo sapiens in the Ethiopian Rift.",
      formula: "Fossil dating + geography.",
      substitution: "They are among the oldest anatomically modern human remains anywhere — placing the origin of our species in Africa, and Ethiopia specifically, in the first chapter of human history.",
      calculation: "2022 restudy pushed Omo I to ~233 ka — still Ethiopia.",
      answer: "Ethiopia's Rift Valley preserves the earliest pages of Homo sapiens — national heritage, global science."
    },
    {
      problem: "Explain how the 2017 teff genome converts a curiosity into an applied contribution.",
      given: "Teff: native, nutritious (gluten-free), low-yielding, prone to lodging.",
      formula: "Genome → markers → breeding.",
      substitution: "The sequence identifies genes for height/lodging, yield, drought tolerance → marker-assisted selection breeds shorter sturdy, higher-yield teff WITHOUT losing the grain's nutrition — faster than trial-and-error breeding.",
      calculation: "Teff is Ethiopia's food-culture AND export crop.",
      answer: "A genome map turns 5,000 years of folk breeding into precision breeding."
    },
    {
      problem: "A student says 'Lucy was discovered by foreigners, so Ethiopia has no role in the science.' Rebut with three facts.",
      given: "Misreading of scientific collaboration.",
      formula: "Evidence of Ethiopian contribution.",
      substitution: "(1) The fossils were found and are curated IN Ethiopia (National Museum, Addis — 'Dinkinesh'). (2) Ethiopian scientists (Berhane Asfaw and others) did decades of the fieldwork and research; Asfaw co-described Herto. (3) Zeresenay Alemseged, Ethiopian-born, LED the Dikika child (Selam) description — world-leading work from Ethiopia.",
      calculation: "Science is international; the archive and many of its readers are Ethiopian.",
      answer: "Ethiopia is both the home of the fossils and a producer of the science."
    },
    {
      problem: "Highland Ethiopians live healthily at 3,000 m where lowlanders get altitude sickness. What kind of biological question is this and what does research show?",
      given: "Human adaptation example.",
      formula: "Genetics + physiology of altitude.",
      substitution: "Question type: evolutionary/physiological adaptation. Studies show highland populations differ in hemoglobin handling, blood-oxygen affinity and nitric-oxide pathways — partly genetic, partly developmental — reducing the thick-blood risks seen in unacclimatised visitors.",
      calculation: "Same species, different environments → natural selection's local signatures.",
      answer: "A living example of adaptation — and a research field led partly by Ethiopian scientists."
    }
  ],
  commonMistakes: [
    "Saying 'Lucy is 3 million years old and the oldest human' — she's an Australopithecine (relative, not our species); Omo I is the ancient HOMO SAPIENS.",
    "Attributing all fossil science to foreign teams — Ethiopian paleoanthropologists (Asfaw, Alemseged) are central authors, not assistants.",
    "Confusing enset with banana — 'false banana': different genus, a staple for tens of millions, uniquely Ethiopian crop.",
    "Thinking teff is 'just a grain' — it's gluten-free, iron-rich, and its genome is a national breeding asset.",
    "Believing the Ethiopian wolf is a 'regular wolf' — separate species, world's rarest canid, endemic highlands.",
    "Reducing 'biology contributions' to medicine — crop genomics and conservation are equally national."
  ],
  applications: [
    "The National Museum of Ethiopia (Addis) — Lucy/Dinkinesh and human-origins heritage; science tourism and identity.",
    "Teff breeding programs (EIAR + genome map) — yield and climate resilience for smallholders.",
    "EBI tissue culture — virus-free banana/coffee planting material at national scale.",
    "Ethiopian Wolf Conservation Program & Bale Mountains eco-science — endemic-species stewardship.",
    "EPHI genomics labs — sequencing pathogen outbreaks (cholera, measles) with home-grown capacity.",
    "Coffee gene pools in SW Ethiopia — protecting Arabica's wild origin for global markets."
  ],
  summary: "Ethiopia's biological legacy: the oldest Homo sapiens fossils (Omo ~195 ka, Herto ~160 ka) with Ethiopian scientists (Asfaw, Alemseged) as lead authors; native-crop science (teff genome 2017, enset, Arabica coffee origin); adaptation and endemic-species biology (highland physiology, Ethiopian wolf); and institutions (National Museum, EBI, EPHI, EIAR) turning discovery into national contribution.",
  visuals: [
    { type: "timeline", config: { events: [{ text: "Omo I — oldest H. sapiens fossils (curated in Addis)", year: "1967" }, { text: "Lucy/Dinkinesh — A. afarensis at Hadar", year: "1974" }, { text: "Selam (Dikika child) — led by Z. Alemseged", year: "2000" }, { text: "Herto — co-described by B. Asfaw", year: "2003" }, { text: "Teff genome published", year: "2017" }], title: "Ethiopia's Human-Origins & Crop Timeline" } },
    { type: "mindMap", config: { branches: [{ items: ["Omo I", "Herto", "Lucy", "Selam"], label: "Human origins" }, { items: ["Teff genome", "Enset", "Coffee origin"], label: "Crop science" }, { items: ["Ethiopian wolf", "Gelada", "Highland adaptation"], label: "Endemics & adaptation" }, { items: ["National Museum", "EBI", "EPHI", "EIAR"], label: "Institutions" }], center: "Ethiopian Biology" } },
    { type: "qa", config: { title: "Know Your Scientists — tap to reveal", pairs: [{ q: "Who co-described the Herto Homo sapiens (2003)?", a: "Berhane Asfaw — Ethiopian paleoanthropologist, with Tim White's team." }, { q: "Who led the Dikika child (Selam) description?", a: "Zeresenay Alemseged — Ethiopian-born, now a world leader in human evolution research." }, { q: "What did the 2017 teff genome unlock?", a: "Marker-assisted breeding for yield, lodging and drought tolerance in Ethiopia's native grain." }] } }
  ],
  questions: [
    { type: "mcq", q: "The Omo I fossils are significant because they are among the oldest:", options: ["Australopithecines", "Homo sapiens remains on Earth", "Dinosaur eggs", "Domesticated crops"], answer: 1, difficulty: 2, explanation: "~195,000 (restudied ~233,000) years — early modern humans, Ethiopian Rift." },
    { type: "short", q: "The Ethiopian paleoanthropologist who co-described Herto is Berhane ____.", answer: "asfaw", difficulty: 2, explanation: "Berhane Asfaw — AAU professor, National Museum leader." },
    { type: "mcq", q: "'Lucy' (Dinkinesh) belongs to the species:", options: ["Homo sapiens", "Australopithecus afarensis", "Homo erectus", "Ensetum tef"], answer: 1, difficulty: 2, explanation: "3.2 Ma A. afarensis — a distant relative on the human family tree." },
    { type: "concept", q: "Why is the 2017 teff genome an applied contribution, not just data?", answer: "breeding markers|yield drought lodging|precision breeding", difficulty: 2, explanation: "It pinpoints genes so breeders select sturdy, high-yield teff fast — food security tool." },
    { type: "tf", q: "Enset is a variety of banana.", answer: false, difficulty: 1, explanation: "'False banana' — different genus; a uniquely Ethiopian staple crop." },
    { type: "short", q: "The world's rarest canid, endemic to Ethiopian highlands, is the Ethiopian ____.", answer: "wolf", difficulty: 1, explanation: "Canis simensis — ~500 left, Bale Mountains." },
    { type: "mcq", q: "Arabica coffee's wild origin is in:", options: ["Brazil", "Ethiopian forests", "Vietnam", "Yemen"], answer: 1, difficulty: 1, explanation: "SW Ethiopian highlands — the gene pool the world's coffee descends from." },
    { type: "concept", q: "How does highland-living research show natural selection acting on humans?", answer: "adaptation oxygen hemoglobin|genetic physiological|altitude", difficulty: 3, explanation: "Highlanders show distinct oxygen/hemoglobin handling — population-level adaptation to low oxygen." },
    { type: "ordering", q: "Pick the correct fossil-age order (oldest first):", options: ["Lucy → Omo I → Herto", "Omo I → Lucy → Herto", "Herto → Omo I → Lucy", "Lucy → Herto → Omo I"], answer: [0], difficulty: 3, explanation: "Lucy 3.2 Ma (oldest) → Omo I ~230 ka → Herto ~160 ka." }
  ]
};
