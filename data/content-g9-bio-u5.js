/* Content: Grade 9 Biology — Unit 5: Human Health, Nutrition and Disease (2 topics) */
window.Lessons = window.Lessons || {};

Lessons["g9-biology-ub5-t1"] = {
  overview: "Food is fuel, building material and chemical messenger. This topic breaks down the nutrient classes, what a balanced diet actually means, and how both shortage and excess become disease — from kwashiorkor to obesity.",
  objectives: [
    "Classify the six nutrient groups and state each one's role",
    "Distinguish macro- from micronutrients",
    "Explain what makes a diet 'balanced' using local foods",
    "Identify deficiency diseases by their missing nutrient",
    "Contrast under-nutrition (PEM) with over-nutrition"
  ],
  simple: "Six nutrient jobs: <b>carbohydrates</b> & <b>fats</b> = energy (carbs first choice, fats the concentrated store), <b>proteins</b> = build & repair (meat, beans, injera's wheat), <b>vitamins</b> = protect (A eyes, C immunity, D bones), <b>minerals</b> = iron for blood, calcium for bones, and <b>water</b> = solvent, transport, temperature. <b>Balanced diet</b> = right mix + roughage (fiber), not just 'eating enough'. Too little → wasting (marasmus) or protein-loss swelling (kwashiorkor) or deficiency diseases; too much → obesity, heart and diabetes risk.",
  detailed: "<p><b>Carbohydrates</b> (sugars, starch, fiber; C, H, O) are the body's quick fuel: 1 g ≈ 17 kJ, broken to glucose for respiration. Staples — cereals (teff, wheat, maize), root crops, honey, injera — dominate Ethiopian plates. <b>Fats</b> (oils, butter/niter kibbeh, seeds, avocado) pack 1 g ≈ 38 kJ, insulate, cushion organs and carry vitamins A, D, E, K. <b>Proteins</b> (meat, fish, eggs, pulses like shiro/berbere legumes, nuts) are the only everyday source of nitrogen: 20 amino acids build muscle, enzymes, antibodies and hormones; some amino acids are 'essential' — food must supply them. Excess protein can also burn for energy in lean times.</p><p><b>Vitamins</b> — tiny organic helpers; fat-soluble (A, D, E, K — stored, risky in megadoses) vs water-soluble (B-group, C — flushed out, needed daily): <b>A</b> (liver, carrots, mangoes; vision — deficiency = night blindness), <b>B₁</b> (cereals; deficiency beriberi), <b>B₁₂</b> (animal foods; anemia), <b>C</b> (citrus, pepper; collagen and gums — scurvy), <b>D</b> (sunlight on skin, eggs; calcium absorption — rickets/osteomalacia). <b>Minerals:</b> <b>iron</b> — hemoglobin; deficiency anemia, the most common nutritional problem worldwide (puberty, pregnancy and heavy periods raise demand); <b>calcium</b> — bones/teeth, clotting, muscle signal (dairy, green stalks); <b>iodine</b> — thyroid hormone; goiter and cretinism where soil is iodine-poor (highland and rift valleys historically — iodized salt is the fix); <b>sodium/potassium</b> — water balance and nerve function. <b>Water</b> — 60–70% of you; solvent for every reaction, blood's vehicle, sweat's cooler; dehydration kills faster than starvation. <b>Dietary fiber</b> (roughage) — not digested, yet essential: feeds bowel movement, slows sugar uptake, lowers cholesterol risk, feeds gut bacteria.</p><p><b>Balanced diet</b> = the right proportions of all seven groups (including water and fiber) for age, sex and activity, plus adequate energy — not too little, not too much. Practical picture on a plate: half vegetables/fruit, a quarter staple carbohydrate, a quarter protein source, a little fat, water beside it. Energy reference needs: teen ≈ 10,000 kJ/day (more with heavy labor), carbs/fats supply it; surplus is stored as fat.</p><p><b>Malnutrition runs both directions.</b> Under: marasmus (general energy shortage → wasting), <b>kwashiorkor</b> (protein shortage despite calories → swollen belly, edema, flaky skin — classic at weaning when maize-only replaces breast milk), the deficiency diseases above, and hidden-hunger micronutrient gaps even in adequate calories. Over: obesity (BMI > 30), linked to type 2 diabetes, hypertension, heart disease and some cancers — rising in Ethiopian towns alongside fast food and car-centric life. Balanced, varied, unprocessed-leaning eating is the through-line for both directions.</p><p><b>Food safety</b> closes the loop: clean water, washing produce, cooking meat thoroughly, separating raw and cooked, refrigerating — because contamination (Salmonella, cholera in water, aflatoxin in stored grains) turns food from cure to cause.</p>",
  keyTerms: [
    { term: "Macronutrients", def: "Needed in grams: carbs, proteins, fats (and water)" },
    { term: "Micronutrients", def: "Needed in trace amounts: vitamins and minerals" },
    { term: "Balanced diet", def: "All nutrients in correct proportions for the individual" },
    { term: "Kwashiorkor / marasmus", def: "Protein-deficiency edema / total-energy-deficiency wasting" },
    { term: "Essential amino acids", def: "Protein building blocks the body can't synthesize" },
    { term: "Roughage (fiber)", def: "Undigested plant material driving healthy bowel function" },
    { term: "BMI", def: "Mass (kg) ÷ height² (m²) — screening gauge of weight status" }
  ],
  formulas: [
    {
      name: "Body mass index",
      formula: "BMI = mass (kg) ÷ [height (m)]²",
      meaning: "Standard screening ratio of weight to stature",
      when: "Classifying under/healthy/overweight in adults (≈18.5–25 healthy band)"
    }
  ],
  workedExamples: [
    {
      problem: "A 2-year-old eats mostly maize porridge after weaning and develops a swollen belly. Name the condition and the missing nutrient.",
      calculation: "staple-only diet = calories but little protein",
      answer: "Kwashiorkor — protein (and micronutrient) deficiency"
    },
    {
      problem: "Calculate BMI for 70 kg at 1.60 m.",
      calculation: "70 ÷ 1.6² = 70 ÷ 2.56",
      answer: "≈27.3 — overweight band"
    },
    {
      problem: "Which is the better iron source for a vegetarian: spinach alone, or spinach + orange? Explain.",
      answer: "Spinach + orange — vitamin C improves absorption of plant (non-haem) iron"
    },
    {
      problem: "A long-distance cyclist carb-loads before a race. Justify with nutrient roles.",
      answer: "Carbohydrates are the quick-fuel store (glycogen); fats can't release energy fast enough for sprint demands"
    }
  ],
  commonMistakes: [
    "Calling fats 'the enemy' — they're dense fuel + vitamin carriers; quantity is the issue",
    "Thinking kwashiorkor = starving calories (it's specifically protein, often WITH calories)",
    "Believing vitamins give energy — they regulate energy release, never fuel it",
    "Saying anemia = only blood loss (iron-poor diet, pregnancy demands, parasites)",
    "Ignoring iodine because salt 'looks fine' — the iodine in it can be lost; goiter areas need iodized",
    "Treating fruit juice smoothies as 'balanced' — sugar load without the fiber is candy-like"
  ],
  applications: [
    "Ethiopian public health: iodized salt, vitamin A campaigns and school feeding are nutrition science in action",
    "Athletes & students: pre-exam and training meals = timing the right energy sources",
    "Pregnancy care: folic acid + iron supplements prevent neural defects and maternal anemia",
    "Food industry labels: reading energy (kJ) and nutrient panels is applied biology",
    "Agriculture links: biofortified beans and orange-flesh sweet potato breed nutrition into staples"
  ],
  summary: "Carbs and fats fuel (fats concentrated), protein builds and repairs, vitamins and minerals regulate in trace doses, water carries everything, fiber keeps the gut working. Balance = right mix for you, not just 'food'; malnutrition spans kwashiorkor and deficiency diseases on one side, obesity and NCD risk on the other — clean, varied, minimally processed food is the fix on both ends.",
  visuals: [],
  questions: [
    { type: "mcq", q: "The body's preferred quick-energy nutrient is:", options: ["protein", "fat", "carbohydrate", "vitamin"], answer: 2, difficulty: 1, explanation: "Glucose from carbs is the default respiration fuel." },
    { type: "mcq", q: "Kwashiorkor results specifically from a shortage of:", options: ["water", "protein", "iodine", "carbohydrate"], answer: 1, difficulty: 2, explanation: "Calories present, protein missing — edema distinguishes it." },
    { type: "mcq", q: "Vitamin C deficiency causes:", options: ["rickets", "night blindness", "scurvy (bleeding gums)", "goiter"], answer: 2, difficulty: 1, explanation: "Collagen fails without ascorbic acid." },
    { type: "mcq", q: "Iron is needed mainly to:", options: ["build bone", "make haemoglobin for oxygen transport", "clot blood", "digest fat"], answer: 1, difficulty: 2, explanation: "Deficiency → less oxygen delivery → fatigue, anemia." },
    { type: "mcq", q: "Iodized salt prevents:", options: ["anemia", "goiter and cretinism", "kwashiorkor", "obesity"], answer: 1, difficulty: 1, explanation: "Thyroid hormone requires iodine." },
    { type: "mcq", q: "Which pair are both fat-soluble vitamins?", options: ["A and C", "D and E", "B₁ and D", "C and K"], answer: 1, difficulty: 3, explanation: "A, D, E, K dissolve in lipids and store; B and C flush out." },
    { type: "mcq", q: "Dietary fiber is important because it:", options: ["supplies energy", "prevents constipation and aids bowel health", "provides amino acids", "carries vitamins to cells"], answer: 1, difficulty: 1, explanation: "It isn't digested — that's the point." },
    { type: "mcq", q: "BMI of 50 kg person at 1.50 m?", options: ["22.2", "33.3", "18.5", "25.0"], answer: 0, difficulty: 2, explanation: "50 ÷ 2.25 ≈ 22.2 — healthy band." },
    { type: "mcq", q: "Water's roles include all EXCEPT:", options: ["solvent for reactions", "temperature regulation", "direct energy source", "transport medium"], answer: 2, difficulty: 2, explanation: "Water carries and cools but never fuels." },
    { type: "mcq", q: "A student eats enough calories but almost no fruits/vegetables for months. Most likely risk:", options: ["obesity only", "micronutrient deficiency ('hidden hunger')", "protein excess", "no risk — calories are everything"], answer: 1, difficulty: 3, explanation: "Energy adequacy hides vitamin/mineral gaps." }
  ]
};

Lessons["g9-biology-ub5-t2"] = {
  overview: "Disease is any breakdown of healthy function; the body fights back with layered defences. Grade 9 sorts communicable from non-communicable, maps the immune ladder, and lands the skills of prevention and basic first aid.",
  objectives: [
    "Define health and disease; distinguish communicable vs non-communicable",
    "Name major pathogens (bacteria, viruses, fungi, protozoans) and example diseases",
    "Describe transmission routes and the chain of infection",
    "Explain the body's non-specific and specific defences, including vaccination",
    "Perform basic first-aid responses for common emergencies"
  ],
  simple: "<b>Communicable diseases</b> pass person→person (or from vectors/animals): colds, flu, TB, cholera, malaria, HIV. <b>Non-communicable</b> don't: diabetes, hypertension, asthma, cancers — mostly lifestyle and genes. Culprits: <b>pathogens</b> — bacteria, viruses, fungi, protozoa. Spread via air droplets, water/food (fecal–oral), body fluids, vectors like mosquitoes. Defences: skin/mucus (walls), white cells (guards), <b>antibodies</b> (targeted missiles with memory → <b>vaccines</b> train them safely). Prevention: hygiene, safe water, vaccines, mosquito nets, healthy lifestyle. First aid: <b>DR-ABC</b> — Danger, Response, Airway, Breathing, Compression — call for help early.",
  detailed: "<p><b>Health</b> (WHO) = complete physical, mental and social well-being, not merely absence of disease. A <b>disease</b> disrupts normal function; <b>infectious</b> (communicable) disease involves a pathogen passing between hosts. The <b>chain of infection</b> links: reservoir → exit route → transmission → entry → susceptible host; break any link and transmission stops (masks, clean water, vaccines each cut a different rung).</p><p><b>Pathogen classes with exemplars:</b> <b>bacteria</b> (living cells; divide fast; e.g. <i>Vibrio cholerae</i> — cholera, <i>Mycobacterium tuberculosis</i> — TB, Salmonella — typhoid; treatable with antibiotics), <b>viruses</b> (acellular; hijack host cells to copy themselves; e.g. influenza, HIV, measles, rabies; antibiotics useless — vaccines/antivirals instead), <b>fungi</b> (ringworm, athlete's foot, candida; antifungals), <b>protozoans</b> (Plasmodium — malaria via Anopheles mosquito; amoebic dysentery), plus worms (intestinal helminths). <b>C carriers and vectors:</b> a carrier spreads without symptoms; a vector (mosquito, tsetse) physically transmits between hosts.</p><p><b>Transmission routes:</b> airborne droplets (cough/sneeze — TB, flu), fecal–oral (contaminated water/food — cholera, typhoid, hepatitis A), body fluids & sexual contact (HIV, hepatitis B, syphilis), blood/needles (HIV, hepatitis B/C), vector bites (malaria, dengue, leishmaniasis), direct contact (scabies, ringworm). Malaria's mini-cycle: Plasmodium lives part-time in liver/blood cells, part-time in the mosquito — bed nets (barrier), indoor spraying, and draining standing water break it.</p><p><b>Defences — three lines.</b> First: <b>physical/chemical barriers</b> — skin (wall), mucus + cilia (traps and sweeps), stomach acid, tears/saliva (lysozyme), urine flow. Second: <b>non-specific internal</b> — inflammation (heat, swelling, redness — increased blood flow), <b>phagocytes</b> engulfing any invader, fever slowing pathogens. Third: <b>specific immunity</b> — lymphocytes: <b>B cells</b> secrete <b>antibodies</b> (Y-proteins matched to one antigen, marking pathogens for destruction and toxin neutralization), <b>T cells</b> kill infected cells and coordinate. After infection, <b>memory cells</b> remain: faster, larger response on re-exposure = recovery and long-term protection.</p><p><b>Vaccination</b> exploits memory: an attenuated/inactivated/subunit pathogen presents antigens WITHOUT disease → immune system builds memory → real infection gets stopped fast. <b>Herd immunity</b> shields the unvaccinated when coverage is high enough. This is the public-health triumph of the century (smallpox erased; polio near-erased; Ethiopia's Expanded Programme on Immunization protects children annually).</p><p><b>Antibiotics & resistance:</b> antibiotics kill or stall bacteria (not viruses!). Misuse — wrong dose, stopping early, viral 'colds' — selects resistant strains (MRSA, MDR-TB). Discipline: only when prescribed, full course, never share leftovers.</p><p><b>Non-communicable diseases (NCDs):</b> cardiovascular disease (diet, smoking, inactivity), type 2 diabetes (obesity-linked), chronic respiratory disease (smoke, air pollution), cancers (tobacco, UV, viruses like HPV) and mental-health disorders. Risk-factor management — diet from the previous topic, exercise, no tobacco, screening — is self-directed prevention.</p><p><b>First aid</b> basics: <b>DR-ABC</b> — check Danger, check Response; call for help; clear Airway; if not Breathing → CPR chest compressions (30:2) for trained responders; choking → abdominal thrusts; bleeding → direct pressure + elevation; burns → cool running water 20 minutes, no ice/toothpaste; fractures → immobilize, don't reset; poisoning/corrosives → never induce vomiting, bring the container label with the casualty. The golden rules: protect yourself (gloves), call early (8-8-0 / 9-0-7), don't do beyond your training. In Ethiopia, the <b>Health Extension Program</b> trains local workers in exactly these community-level responses.</p><p><b>Mind matters too:</b> stigma against HIV or mental illness spreads harm faster than many pathogens; accurate knowledge and respectful treatment are part of disease control.</p>",
  keyTerms: [
    { term: "Communicable disease", def: "Transferable between hosts by direct or indirect routes" },
    { term: "Pathogen", def: "Organism causing infectious disease" },
    { term: "Vector", def: "Organism (e.g. mosquito) transmitting a pathogen" },
    { term: "Antigen / antibody", def: "Foreign marker molecule / matched Y-protein that flags it" },
    { term: "Phagocytosis", def: "Non-specific engulfment of invaders by white cells" },
    { term: "Vaccination", def: "Safe antigen exposure that builds immunological memory" },
    { term: "Antibiotic resistance", def: "Survival of drug-evolved bacteria — misuse accelerates it" },
    { term: "DR-ABC", def: "Danger, Response, Airway, Breathing, Compression — first-aid sequence" }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "Cholera spreads via the fecal–oral route. List three separate chain links to break.",
      answer: "Reservoir (treat infected patients), exit/entry (handwashing, sanitation), vehicle (boiled/chlorinated water) — each cut blocks transmission"
    },
    {
      problem: "Why don't antibiotics work against the flu?",
      answer: "Flu is viral; antibiotics target bacterial structures/processes absent in viruses"
    },
    {
      problem: "A child receives the measles vaccine. Explain the immunology in sequence.",
      answer: "Vaccine antigens → B/T lymphocyte response without disease → memory cells persist → true measles infection triggers rapid antibody response before illness develops"
    },
    {
      problem: "Classify: (a) malaria, (b) type 2 diabetes, (c) TB, (d) hypertension — communicable or NCD, pathogen if any.",
      answer: "(a) communicable, protozoan via mosquito; (b) NCD; (c) communicable, bacterium; (d) NCD"
    }
  ],
  commonMistakes: [
    "Believing colds/flu need antibiotics — they're viral; pressure prescriptions fuel resistance",
    "Thinking vaccines 'give you the disease' — they present safe antigens, no active infection",
    "Confusing vectors (mosquito) with carriers (symptom-free human)",
    "Equating 'non-communicable' with 'not serious' — NCDs kill more globally than infections",
    "Malaria from 'bad air' or toilet seats myth vs the actual mosquito cycle",
    "First-aid errors: putting toothpaste on burns, pulling a choking adult's head back, moving fracture victims unnecessarily"
  ],
  applications: [
    "Community health: latrines, chlorination and ORS (oral rehydration) saved countless cholera lives",
    "Travel & school readiness: vaccination cards and outbreak reporting (cholera, measles) follow these rules",
    "Everyday prevention: ITNs against malaria, bed-net + drainage policy, coughing into elbow",
    "Emergency response: DR-ABC and calling 8-8-0/9-0-7 turns bystanders into lifesavers",
    "Career paths: public health, nursing, lab technology, health extension work"
  ],
  summary: "Disease splits into communicable (pathogens moving by droplet, fecal–oral, fluid or vector routes) and non-communicable (lifestyle/genetic). The body defends in layers — barriers, phagocytes/inflammation, then antibody-mediated specific immunity with memory that vaccines exploit. Antibiotics only for bacteria, and only used well; first aid is DR-ABC, call early, act within training.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Which is a non-communicable disease?", options: ["tuberculosis", "type 2 diabetes", "cholera", "malaria"], answer: 1, difficulty: 1, explanation: "It doesn't transmit between people." },
    { type: "mcq", q: "The malaria pathogen is a:", options: ["virus", "bacterium", "protozoan", "fungus"], answer: 2, difficulty: 2, explanation: "Plasmodium — spread by Anopheles mosquitoes." },
    { type: "mcq", q: "Antibodies are produced by:", options: ["red blood cells", "B lymphocytes", "platelets", "skin cells"], answer: 1, difficulty: 2, explanation: "Plasma cells (B-cell lineage) secrete them." },
    { type: "mcq", q: "A vaccine works because it:", options: ["kills all germs in the body", "contains weakened/safe antigens that build memory", "replaces antibiotics", "raises temperature permanently"], answer: 1, difficulty: 1, explanation: "Immunological memory without real disease." },
    { type: "mcq", q: "Which action does NOT reduce cholera spread?", options: ["boiling drinking water", "handwashing with soap", "taking antibiotics as prevention", "sanitation"], answer: 2, difficulty: 3, explanation: "Drugs treat cases; clean water/food and hygiene stop transmission." },
    { type: "mcq", q: "Influenza spreads mainly by:", options: ["contaminated soil", "airborne droplets", "mosquito bites", "food only"], answer: 1, difficulty: 1, explanation: "Cough/sneeze droplets and close contact." },
    { type: "mcq", q: "Stopping an antibiotic course early risks:", options: ["faster cure", "surviving resistant bacteria multiplying", "allergy", "nothing"], answer: 1, difficulty: 2, explanation: "The toughest survivors reproduce → resistance." },
    { type: "mcq", q: "First thing to do at any accident scene:", options: ["move the victim", "check for danger to yourself", "give water", "call family"], answer: 1, difficulty: 1, explanation: "D in DR-ABC — a rescuer can't help if injured." },
    { type: "mcq", q: "A burn should be cooled with:", options: ["ice cubes", "toothpaste", "cool running water", "butter"], answer: 2, difficulty: 1, explanation: "Running water 10–20 min; folk remedies infect." },
    { type: "mcq", q: "Phagocytosis belongs to which defence line?", options: ["first (barriers)", "second (non-specific internal)", "third (antibodies)", "it isn't a defence"], answer: 1, difficulty: 3, explanation: "General engulfment — no target specificity." }
  ]
};
