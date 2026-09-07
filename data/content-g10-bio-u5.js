/* ============================================================
   Content: Grade 10 Biology — Unit 5: Human Body Systems
   5 topics. Rich format + 3 visuals per lesson.
   ============================================================ */
window.Lessons = window.Lessons || {};

/* --- b5-1: The Digestive System --- */
Lessons["g10-biology-ub5-t1"] = {
  overview: "Food is foreign matter until your digestive system disassembles it into molecules small enough to cross into your cells. A 9-metre tube — mouth to anus — runs mechanical churning and chemical hydrolysis in sequence, with the liver, pancreas and glands supplying the chemistry. Enzymes are the workers: each one cuts one kind of bond.",
  objectives: [
    "Name the organs of the alimentary canal and the accessory glands",
    "Explain mechanical vs chemical digestion with locations",
    "Match each major enzyme to substrate, product and pH optimum",
    "Describe absorption adaptations of the small intestine",
    "Trace a bite of injera + shiro from mouth to cell/faeces"
  ],
  simple: "Digestion = hydrolysis with a delivery system. MECHANICAL: teeth chew, stomach churns — surface area up. CHEMICAL: enzymes cut polymers to monomers. Mouth: salivary amylase starts starch → maltose (pH ~7). Stomach: pepsin cuts proteins → peptides (HCl makes pH ~2 — acid kills microbes too). Small intestine: the main event — bile from the liver EMULSIFIES fats (no enzyme, just surface area), pancreatic amylase/lipase/proteases finish the jobs (pH ~8 after bicarbonate neutralises stomach acid). Absorption: villi + microvilli (folded fingers, huge surface) pass glucose/amino acids to blood, fatty acids to lymph. Water and salts return in the large intestine; leftovers exit as faeces. Vitamins and minerals pass unchanged — they were never polymers.",
  detailed: `<p><b>The canal:</b> Mouth (teeth, tongue, salivary glands: amylase + mucus + lysozyme) → pharynx → oesophagus (peristalsis — wave of circular + longitudinal muscle; epiglottis guards the airway) → stomach (gastric glands: HCl, pepsinogen→pepsin, mucus, intrinsic factor for B₁₂; churning → chyme) → small intestine (duodenum = chemistry; jejunum/ileum = absorption) → large intestine (colon: water/salt reabsorption, microbiome ferments fibre making vitamin K + some B; rectum; anus).</p>
<p><b>Accessory organs:</b> LIVER — bile (from cholesterol; stored in gall bladder): bile SALTS emulsify fat droplets → micelles (surface area for lipase; NOT enzymatic). Also metabolic hub (glucose↔glycogen, amino-acid deamination → urea, detox). PANCREAS — the enzyme arsenal + bicarbonate (neutralises chyme to pH ~8 — duodenal enzymes need alkaline); also endocrine (insulin/glucagon — links to G11). SALIVARY GLANDS — ~1.5 L/day, amylase, mucus, antibacterial lysozyme.</p>
<p><b>Enzyme table (memorise for exams):</b>
<br>• Salivary/pancreatic AMYLASE: starch → maltose (pH 7/8).
<br>• PEPSIN: protein → peptides (pH 2, stomach).
<br>• TRYPSIN (pancreas): protein/peptides → smaller peptides (pH 8).
<br>• LIPASE (pancreas): fat → fatty acids + glycerol (pH 8, needs bile first).
<br>• MEMBRANE DI-SACCHARIDASES (maltase, sucrase, lactase): di- → monosaccharides.
<br>• Nucleases: nucleic acids → nucleotides.
<br>End products: glucose, amino acids, fatty acids + glycerol, nucleotides.</p>
<p><b>Absorption engineering:</b> circular folds → villi (finger-like, ~0.5 mm) → microvilli (brush border) → ~200 m² surface (a tennis court in 5 m of tube). Each villus: capillary loop (glucose, amino acids, water, minerals → hepatic portal vein → liver first!) + LACTEAL (blind lymph vessel: fatty acids + glycerol reassemble into chylomicrons → lymph → bloodstream — bypassing the liver). Transport: glucose/galactose co-transported with Na⁺ (the ORS trick again!), amino acids active transport, fructose facilitated diffusion.</p>
<p><b>Health links:</b> GERD (acid reflux — sphincter weak), ulcers (H. pylori or NSAIDs, not 'stress alone'), gall stones (cholesterol/bilirubin crystals), lactose intolerance (lactase drops after childhood in most populations — Ethiopian dairy culture vs genetics), constipation (fibre + water — Unit 3's cellulose earns its keep), dental caries (bacteria + sugar → acid → enamel erosion; fluoride).</p>`,
  keyTerms: [
    { term: "Alimentary canal", def: "The 9 m food tube: mouth → anus." },
    { term: "Peristalsis", def: "Muscle waves pushing food along." },
    { term: "Mechanical vs chemical", def: "Churning (surface area) vs enzyme hydrolysis." },
    { term: "Pepsin / trypsin", def: "Stomach protein-cutting enzyme (pH 2) / pancreatic (pH 8)." },
    { term: "Bile / emulsification", def: "Liver fluid; bile salts split fat into micelles — surface area, not digestion." },
    { term: "Villus / microvillus", def: "Absorptive finger / its membrane folds — surface amplifiers." },
    { term: "Lacteal", def: "Villus lymph vessel — fat exit route." },
    { term: "Hepatic portal vein", def: "Nutrient blood routed to the LIVER first." },
    { term: "Chyme", def: "Acidic semi-fluid from the stomach." },
    { term: "Microbiome", def: "Colon bacteria — fibre fermentation, vitamin K." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "Trace one glucose unit from an injera starch molecule: from bite to a muscle cell, naming every processing step.",
      given: "Integration journey.",
      formula: "Ingestion → digestion → absorption → transport → use.",
      substitution: "Mouth: chewing (mechanical) + salivary amylase (starch → maltose, pH 7). Stomach: acid halts amylase; no carb digestion. Duodenum: pancreatic amylase finishes → maltose; maltase (brush border) → glucose. Ileum: glucose co-transported with Na⁺ into villus capillary → hepatic portal vein → liver (some stored as glycogen) → general circulation → muscle capillary → GLUT transporter into fibre → respiration.",
      calculation: "Whole journey: ~2–5 hours.",
      answer: "Starch → maltose → glucose → blood → liver checkpoint → muscle fuel."
    },
    {
      problem: "A patient has her gall bladder removed. Explain why a fatty meal now causes indigestion, and what is NOT damaged.",
      given: "No bile storage.",
      formula: "Emulsification → lipase access.",
      substitution: "Bile still made by liver but trickles continuously instead of bolus-released with meals → large fat loads aren't emulsified fast enough → lipase (needs surface) works slowly → fat reaches colon undigested → bloating/steatorrhoea (fatty stools). Protein/carb digestion untouched (no bile needed).",
      calculation: "Adaptation: smaller, lower-fat meals.",
      answer: "Bile is a surface-area tool — without its burst delivery, fat digestion lags; other enzymes unaffected."
    },
    {
      problem: "Design an experiment proving salivary amylase digests starch AND that boiling destroys it. Name reagents and expected results.",
      given: "Classic practical.",
      formula: "Iodine (starch) + Benedict's (reducing sugar).",
      substitution: "Two tubes of starch solution: A + fresh saliva, B + boiled saliva; incubate 37 °C 10 min. Test both: IODINE — A stays yellow-brown (starch gone), B turns blue-black (starch intact). BENEDICT'S + heat — A brick-red (maltose made), B stays blue (no sugar).",
      calculation: "37 °C = body optimum; boiled enzyme denatured (Unit 3 link).",
      answer: "A digested, B didn't — enzyme present and heat-sensitive, proven by two complementary tests."
    },
    {
      problem: "Why must stomach pepsin NOT be active inside the pancreatic cells that make trypsin, and how does the body prevent self-digestion?",
      given: "Enzyme safety design.",
      formula: "Zymogens + compartmentalisation.",
      substitution: "Both made as inactive precursors: pepsinogen (activated only by HCl in the lumen) and trypsinogen (activated only in the duodenum by enterokinase → trypsin cascade). Stomach lining: thick alkaline mucus + rapid cell replacement (~3 days). Pancreas: inhibitors + no contact with active form until the gut.",
      calculation: "Failure mode: trypsin activates inside the pancreas → pancreatitis.",
      answer: "Loaded as safed guns (zymogens), fired only at the right address (lumen, correct pH)."
    }
  ],
  commonMistakes: [
    "Saying bile DIGESTS fat — it EMULSIFIES (physical breakdown); lipase does the chemistry.",
    "Placing absorption mainly in the stomach — it's the small intestine (stomach: some water, alcohol, drugs).",
    "Thinking the liver 'makes bile to digest' — bile has NO enzymes; it's surface-area engineering.",
    "Confusing the routes: glucose/amino acids → blood (portal vein → liver); fats → LYMPH (lacteal) first.",
    "Saying enzymes are digested with food — some survive (rennin in infants), but most pancreatic enzymes act in the lumen and aren't absorbed.",
    "Believing the stomach digests most food — it's a mixer + protein starter; the duodenum is the chemical powerhouse.",
    "Calling fibre 'nutritionless' — it feeds the microbiome, makes vitamin K/butyrate, prevents constipation.",
    "Ulcers are caused by spicy food — the real culprits: H. pylori infection and NSAIDs (food aggravates, doesn't cause)."
  ],
  applications: [
    "Nutrition planning: the injera + shiro + kitfo plate maps to carb/protein/fat digestion routes and timings.",
    "Lactose intolerance: lactase supplements, fermented dairy (ergo/cheese — bacteria pre-digest lactose).",
    "ORS design: glucose co-transport drives Na⁺ (and water) absorption — Unit 3's ion lesson pays off.",
    "Gall-stone and liver-disease diets: low fat when bile flow is limited.",
    "Dental health: sugar frequency (not amount) feeds acid attacks — fluoride toothpaste, timing of sweets.",
    "Digestive disorders: GERD (elevate head of bed), coeliac (gluten-triggered villus damage → malabsorption), IBS."
  ],
  summary: "Canal: mouth (amylase) → oesophagus (peristalsis) → stomach (HCl + pepsinogen, chyme) → small intestine (bile emulsifies; pancreatic amylase/lipase/trypsin; brush-border di-saccharidases; pH 8) → large intestine (water/salt, microbiome, fibre) → rectum/anus. Absorption: villi/microvilli → blood (portal → liver) for sugars/amino acids, lacteal (lymph) for fats. Enzymes = specific hydrolysis workers; zymogens keep them safe.",
  visuals: [
    { type: "flowChart", config: { steps: ["Mouth: chew + amylase (pH 7)", "Oesophagus: peristalsis", "Stomach: HCl + pepsin → chyme (pH 2)", "Duodenum: bile + pancreatic enzymes (pH 8)", "Jejunum/ileum: villi absorb", "Colon: water back, fibre to microbes", "Rectum → anus"], title: "The 9-Metre Assembly Line" } },
    { type: "tableVisual", config: { headers: ["Enzyme", "Made by", "Acts on", "Product", "pH"], rows: [["Salivary amylase", "Salivary gland", "Starch", "Maltose", "7"], ["Pepsin", "Stomach", "Protein", "Peptides", "2"], ["Bile (not enzyme)", "Liver", "Fat droplets", "Micelles", "8"], ["Pancreatic lipase", "Pancreas", "Emulsified fat", "FA + glycerol", "8"], ["Trypsin", "Pancreas", "Proteins", "Peptides", "8"], ["Maltase", "Ileum lining", "Maltose", "Glucose", "8"]], title: "The Enzyme Roster" } },
    { type: "qa", config: { title: "Gut Puzzles — tap to reveal", pairs: [{ q: "Why does the liver get first refusal on nutrient blood?", a: "Hepatic portal vein routes ALL gut blood through the liver — it stores glucose as glycogen and screens toxins before the body sees them." }, { q: "Why do fats go through lymph instead of blood?", a: "Chylomicrons are too big for capillaries — lacteals are blind-ended and leaky enough to take them." }, { q: "Why doesn't the stomach digest itself?", a: "Alkaline mucus barrier + enzymes made as inactive zymogens + lining replaced every few days." }] } }
  ],
  questions: [
    { type: "mcq", q: "Bile helps fat digestion by:", options: ["Enzymatically splitting fat", "Emulsifying fat into micelles", "Making lipase", "Lowering pH"], answer: 1, difficulty: 1, explanation: "Bile salts increase surface area — lipase does the actual cutting." },
    { type: "mcq", q: "Pepsin works best at pH:", options: ["2", "7", "8", "11"], answer: 0, difficulty: 1, explanation: "Stomach acid ~pH 2 — pepsin's optimum; it stops in the duodenum's alkaline flow." },
    { type: "short", q: "The finger-like absorptive projections of the small intestine are ____.", answer: "villi|villus", difficulty: 1, explanation: "Villi (with microvilli) — the surface-area amplifiers." },
    { type: "concept", q: "Where do absorbed fatty acids go first, and why not straight to blood?", answer: "lacteal lymph|too big for capillaries|chylomicrons", difficulty: 3, explanation: "Reassembled into chylomicrons — too large for capillaries, so they enter the leaky lacteal (lymph) → bloodstream via thoracic duct." },
    { type: "mcq", q: "Most chemical digestion and absorption happens in the:", options: ["Stomach", "Small intestine", "Large intestine", "Oesophagus"], answer: 1, difficulty: 1, explanation: "Duodenum finishes chemistry; jejunum/ileum absorb — the canal's workhorse." },
    { type: "short", q: "The vessel carrying nutrient blood from gut to liver is the ____ portal vein.", answer: "hepatic", difficulty: 2, explanation: "Hepatic portal vein — the liver's first-pass checkpoint." },
    { type: "tf", q: "Vitamin C must be digested before absorption.", answer: false, difficulty: 2, explanation: "Vitamins are small molecules — absorbed as-is; only polymers need digestion." },
    { type: "concept", q: "Explain why a high-fibre diet prevents constipation using water and gut facts.", answer: "fibre holds water|bulk|peristalsis", difficulty: 2, explanation: "Cellulose fibre is indigestible but holds water → bulky soft faeces → stimulates peristalsis → regular transit." },
    { type: "ordering", q: "Pick the correct protein-digestion sequence:", options: ["Pepsin (stomach) → trypsin (duodenum) → peptidases → amino acids absorbed", "Trypsin → pepsin → amino acids → bile", "Bile → pepsin → amino acids → villi", "Amylase → lipase → peptides"], answer: [0], difficulty: 2, explanation: "Stomach starts (peptides), pancreas continues, brush-border finishes to amino acids." },
    { type: "calc", q: "A villus is 0.5 mm long; microvilli multiply surface ~20×. If the intestine's flat area were 6.5 m², approximate effective area (m²)?", answer: "130|200", difficulty: 3, explanation: "6.5 × 20 ≈ 130 m² (textbook estimates reach ~200 with folds) — a sports field in your abdomen.", tolerance: 80 }
  ]
};

/* --- b5-2: Circulatory & Lymphatic Systems --- */
Lessons["g10-biology-ub5-t2"] = {
  overview: "Your blood is a river with three cargoes: oxygen, nutrients and wastes — and the heart is the four-chambered pump that never stops. Arteries carry it out under pressure, capillaries exchange it molecule by molecule, veins return it with valves. The lymphatic system is the river's overflow: recovering leaked fluid, absorbing dietary fat and hosting immune defence.",
  objectives: [
    "Name heart chambers, valves and the double circulation route",
    "Relate vessel structure to function (artery/capillary/vein)",
    "List blood components and each one's job",
    "Explain the lymphatic system: lymph, nodes, vessels, fat absorption",
    "Interpret blood pressure and pulse readings"
  ],
  simple: "The heart is a double pump: RIGHT side sends used blood to the lungs (pulmonary circuit — pick up O₂, drop CO₂); LEFT side sends fresh blood to the whole body (systemic circuit). Blood flows one way because of valves: atrium → ventricle → artery, never back. VESSELS: arteries = thick elastic walls (high pressure, pulsing); capillaries = one-cell-thin (exchange happens here — slow, wide, leaky); veins = thin walls + valves (low pressure, muscle squeeze walks blood home). BLOOD: plasma (water + proteins + cargo), red cells (haemoglobin carries O₂ — no nucleus = more room), white cells (immune defence), platelets (clotting). LYMPH: fluid that leaks from capillaries gets collected, filtered in nodes (lymphocyte barracks) and returned — plus it carries dietary fats from the gut.",
  detailed: `<p><b>Heart anatomy:</b> four chambers — right/left atria (receive), right/left ventricles (pump; left wall 3× thicker — body pressure). Valves: tricuspid (R), bicuspid/mitral (L) atrio-ventricular; semilunar (pulmonary, aortic) at outlets — the 'lub-dub' is valve closure. Pacemaker: SA node (right atrium) fires ~70/min → AV node delay (atria empty first) → Bundle of His → Purkinje fibres (ventricles squeeze bottom-up). Coronary arteries feed the heart muscle itself — blocked = myocardial infarction (heart attack).</p>
<p><b>Double circulation:</b> body → vena cavae → RA → RV → pulmonary artery (the artery carrying DEOXYGENATED blood) → lungs → pulmonary vein (vein carrying OXYGENATED) → LA → LV → aorta → body. Two circuits in series = pressure boost: lungs get gentle flow (fragile), body gets strong flow (LV ~120 mmHg systolic).</p>
<p><b>Vessels:</b> Artery: thick tunica media (muscle + elastic) — withstands and smooths pressure; arterioles = resistance valves controlling flow distribution. Capillary: single endothelial layer, ~8 µm — red cells queue single-file; exchange by diffusion (O₂, CO₂, nutrients, wastes) + pressure-driven leakage (plasma out at arterial end, reabsorbed at venous end — most of it; the rest → lymph). Vein: thin wall, large lumen, VALVES every few cm; return relies on skeletal-muscle pump + breathing pressure — standing still for hours = pooling (why guards faint; 'soldier's faint').</p>
<p><b>Blood components:</b> Plasma (55%): 92% water + albumin (osmotic pressure), globulins (antibodies), fibrinogen (clotting), transport of hormones/urea/glucose, buffering. Red cells (45% — haematocrit): biconcave (SA:V), no nucleus, ~270 million haemoglobin each; made in bone marrow (needs iron + B₁₂ + folate — why ulcers/parasites cause anaemia); lifespan 120 days, recycled in spleen/liver. White cells: neutrophils (phagocyte first responders), lymphocytes (B: antibodies; T: helpers/killers — next-next lesson), monocytes→macrophages, eosinophils (parasites/allergy). Platelets: nucleus-free fragments — clotting plugs (with fibrin mesh → scab). Normal ranges: RBC 4.5–5.5 M/µL, WBC 4–11 K/µL, platelets 150–400 K/µL, Hb 13–17 g/dL.</p>
<p><b>Clotting:</b> damage → platelets stick + release chemicals → fibrinogen → fibrin threads trap cells → clot; scab forms; wound heals underneath. Haemophilia = missing clotting factor (X-linked — G11 genetics preview).</p>
<p><b>Lymphatic:</b> capillary leak (~3 L/day) → lymph capillaries (overlap flaps act as one-way doors) → nodes (filters + lymphocyte activation sites — swollen during infection) → thoracic duct → subclavian vein. Also: lacteals absorb dietary fat (Unit 5a). No pump — valves + muscle movement, like veins. Elephantiasis: parasitic worms block lymph → swelling (Ethiopian context: filariasis control programs).</p>
<p><b>Blood pressure:</b> systolic/diastolic (120/80 mmHg normal); >130/80 = hypertension ('silent killer' — damages kidneys, brain, heart); risks: salt, obesity, inactivity, genetics; measured with cuff (auscultation). Pulse = arterial pressure wave — rate + rhythm at wrist/neck.</p>`,
  keyTerms: [
    { term: "Double circulation", def: "Pulmonary + systemic loops in series." },
    { term: "SA node", def: "Pacemaker — sets heart rate ~70/min." },
    { term: "Artery / vein / capillary", def: "Out under pressure / return with valves / exchange sites." },
    { term: "Plasma", def: "Blood's liquid matrix — water + proteins + cargo." },
    { term: "Haemoglobin", def: "RBC's iron protein — O₂ carrier (oxyhaemoglobin)." },
    { term: "Haematocrit", def: "RBC fraction of blood (~45%)." },
    { term: "Platelet / fibrin", def: "Clotting fragment / the mesh that seals wounds." },
    { term: "Lymph / lacteal", def: "Returned interstitial fluid / fat-absorbing villus vessel." },
    { term: "Systole / diastole", def: "Contraction (120) / relaxation (80) pressures." },
    { term: "Hypertension", def: "Chronically high BP — vessel/organ damage." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "Follow a red blood cell from the liver sinusoid back to the liver — name every chamber and vessel it passes.",
      given: "One full circuit.",
      formula: "Systemic return → pulmonary → systemic out.",
      substitution: "Hepatic vein → inferior vena cava → RIGHT ATRIUM → tricuspid → RIGHT VENTRICLE → pulmonary artery → lung capillary (loads O₂) → pulmonary vein → LEFT ATRIUM → bicuspid → LEFT VENTRICLE → aorta → hepatic artery → back to liver.",
      calculation: "Passed through the heart once, lungs once — ~60 seconds total.",
      answer: "IVC → RA → RV → lungs → LA → LV → aorta → liver — the double-circuit loop."
    },
    {
      problem: "A student stands motionless in assembly for 40 minutes and feels dizzy. Explain with vein physics and name the body's countermeasures.",
      given: "Orthostatic pooling.",
      formula: "Muscle pump + valves + baroreflex.",
      substitution: "Leg veins return blood via skeletal-muscle squeeze + one-way valves; standing still = no pump → blood pools below → venous return ↓ → cardiac output ↓ → brain under-perfused → dizzy. Countermeasures: baroreceptors detect drop → heart rate + vessel constriction rise; fainted person falls horizontal (restores flow).",
      calculation: "Prevention: calf flexing, shifting weight.",
      answer: "A plumbing problem, not a heart weakness — the muscle pump went offline."
    },
    {
      problem: "Read a BP report: 145/92 mmHg. Classify it, name two long-term organ risks, and suggest two lifestyle fixes.",
      given: "Hypertension case.",
      formula: "Normal <120/80; stage 2 ≥140/90.",
      substitution: "145/92 = stage-2 hypertension. Risks: kidneys (nephrosclerosis → failure), brain (stroke — burst/clotted vessels), heart (LV thickening → failure), eyes (retinopathy). Fixes: less salt (<5 g/day), regular aerobic exercise, weight control, treat sleep apnoea; medication if needed.",
      calculation: "'Silent killer' — usually symptomless until damage.",
      answer: "High — needs lifestyle change now and likely medication; the damage is slow and painless."
    },
    {
      problem: "Why do pulmonary ARTERIES carry deoxygenated blood while pulmonary VEINS carry oxygenated? What actually defines artery vs vein?",
      given: "Naming logic trap.",
      formula: "Vessel type = direction, not oxygen.",
      substitution: "Artery = carries blood AWAY from the heart (thick wall for pressure); vein = TOWARD the heart (valves, thinner). The lung pair flips the colour convention because the pulmonary circuit's job is re-oxygenation: RV pumps blue blood AWAY (artery), lungs return red blood TOWARD (vein).",
      calculation: "All other arteries red, all other veins blue.",
      answer: "Direction defines the name — oxygen defines the colour; the lungs are the exception that proves the rule."
    }
  ],
  commonMistakes: [
    "Saying arteries = oxygenated, veins = deoxygenated — the PULMONARY pair is reversed; direction defines the vessel.",
    "Thinking blood flows through veins by heart pressure — veins rely on muscle pumps + valves (heart pressure is spent by capillaries).",
    "Confusing the pulmonary artery (from RV, deoxy) with the pulmonary vein (from lungs, oxy).",
    "Believing the heart beats 'because you think about it' — SA node auto-rhythmic; nerves/hormones only adjust rate.",
    "Calling plasma 'the clear part with nothing in it' — proteins, hormones, nutrients, wastes, clotting factors.",
    "Saying red cells have a nucleus — mammals eject it (more haemoglobin room; can't divide — marrow makes new ones).",
    "Thinking a 'fast pulse' means a weak heart — exercise raises rate normally; resting tachycardia needs checking.",
    "Confusing a heart attack (coronary blockage — muscle dies) with cardiac arrest (pump stops entirely)."
  ],
  applications: [
    "Blood donation & typing: ABO/Rh screening saves lives (Ethiopian Blood Bank Service); universal donor O−, recipient AB+.",
    "Hypertension screening: free cuff checks at health posts — the silent killer caught early.",
    "Anaemia work: low Hb + iron/B₁₂ tests trace causes (parasites, ulcers, diet) — endemic in pregnancy.",
    "Swollen lymph nodes during infection = the system working (not 'glands being bad') — but persistent hard nodes need assessment.",
    "DVT prevention: move on long bus rides (Addis–regional travel) — sitting still + clotting risk.",
    "Elephantiasis/filariasis programs: lymph-block parasites treated with mass drug administration."
  ],
  summary: "Heart: 4 chambers, 4 valves, SA-node rhythm, double circulation (pulmonary gentle loop + systemic high-pressure loop). Vessels: artery (thick, pressure), capillary (thin, exchange), vein (valves, muscle-pump return). Blood: plasma (transport + proteins), RBC (O₂ via haemoglobin), WBC (defence), platelets (clots). Lymphatic: recovers leaked fluid, filters in nodes, absorbs fat via lacteals. BP 120/80 normal; hypertension = silent organ damage.",
  visuals: [
    { type: "flowChart", config: { steps: ["Body → vena cava", "Right atrium → right ventricle", "Pulmonary artery → LUNGS (O₂ in, CO₂ out)", "Pulmonary vein → left atrium", "Left ventricle → aorta → body"], title: "Double Circulation Loop" } },
    { type: "comparison", config: { title: "Artery vs Vein vs Capillary", left: { name: "Artery", items: ["Thick elastic muscle wall", "High pressure, pulses", "Away from heart", "No valves (except outlets)"] }, right: { name: "Vein", items: ["Thin wall, wide lumen", "Low pressure", "Toward heart", "One-way valves + muscle pump"] } } },
    { type: "tableVisual", config: { headers: ["Component", "Structure", "Job"], rows: [["Plasma", "92% water + proteins", "Transport, clotting, osmosis"], ["Red cell", "No nucleus, biconcave", "O₂ via haemoglobin"], ["Neutrophil", "Lobed nucleus", "Phagocytose bacteria"], ["Lymphocyte", "Large nucleus", "Antibodies (B) / kill-help (T)"], ["Platelet", "Cell fragment", "Clot plug + fibrin"]], title: "Blood — Four Cargoes in One River" } }
  ],
  questions: [
    { type: "mcq", q: "The chamber pumping oxygenated blood to the body is the:", options: ["Right atrium", "Right ventricle", "Left atrium", "Left ventricle"], answer: 3, difficulty: 1, explanation: "LV — thickest wall, feeds the aorta and the whole systemic circuit." },
    { type: "mcq", q: "Gas exchange with tissues occurs in:", options: ["Arteries", "Veins", "Capillaries", "The heart"], answer: 2, difficulty: 1, explanation: "One-cell-thin walls + slow flow = diffusion happens in capillaries." },
    { type: "short", q: "The protein in red cells that carries oxygen is ____.", answer: "hemoglobin|haemoglobin", difficulty: 1, explanation: "Haemoglobin — iron at its centre binds O₂." },
    { type: "concept", q: "Why does the left ventricle have a much thicker wall than the right?", answer: "body pressure vs lungs|systemic circuit|pulmonary is low pressure", difficulty: 2, explanation: "LV drives blood the whole body against high resistance; RV only pushes to nearby, low-pressure lungs." },
    { type: "mcq", q: "The pulmonary artery is unusual because it carries:", options: ["Oxygenated blood", "Deoxygenated blood", "Lymph", "Nutrients only"], answer: 1, difficulty: 2, explanation: "It's an artery by DIRECTION (away from RV) — but the blood is deoxygenated, heading to the lungs." },
    { type: "short", q: "The heart's natural pacemaker is the ____ node.", answer: "sa|sinoatrial", difficulty: 2, explanation: "SA node fires the rhythm; AV node delays it so atria empty first." },
    { type: "tf", q: "Veins contain one-way valves to prevent backflow.", answer: true, difficulty: 1, explanation: "Valves + skeletal-muscle squeeze walk blood uphill to the heart." },
    { type: "concept", q: "Explain two ways the lymphatic system supports circulation and nutrition.", answer: "returns leaked fluid|absorbs fat lacteals", difficulty: 3, explanation: "(1) Recovers ~3 L/day of leaked plasma → returns it to blood (volume/pressure). (2) Lacteals absorb dietary fats too big for blood capillaries." },
    { type: "calc", q: "Heart rate 75/min, stroke volume 70 mL. Cardiac output per minute (L)?", answer: "5.25|5.3", difficulty: 2, explanation: "75 × 70 = 5250 mL ≈ 5.25 L/min — the whole blood volume every minute.", tolerance: 0.3 },
    { type: "ordering", q: "Pick the correct clotting sequence:", options: ["Fibrin → platelets stick → wound closes → clot", "Damage → platelets stick + chemicals → fibrinogen → fibrin mesh → clot", "Clot → fibrin → damage → platelets", "WBC → fibrin → scab → damage"], answer: [1], difficulty: 2, explanation: "Platelet plug first, then the fibrin net reinforces it into a clot." }
  ]
};

/* --- b5-3: The Breathing System --- */
Lessons["g10-biology-ub5-t3"] = {
  overview: "Breathing is the bellows; gas exchange is the chemistry. Air is filtered, humidified and delivered to 300 million alveoli — grape-like sacs where oxygen crosses a one-cell-thin membrane into blood and carbon dioxide crosses out. Pressure differences move air in and out; diffusion gradients move gases across.",
  objectives: [
    "Name airway structures and their conditioning jobs",
    "Explain ventilation mechanics (diaphragm, ribs, pressure)",
    "Describe alveolar structure and the diffusion barrier",
    "State gas transport: O₂ with haemoglobin, CO₂ as bicarbonate",
    "Link breathing control (medulla, CO₂/pH) to exercise"
  ],
  simple: "IN: air → nose (warm, moisten, filter with hairs + mucus) → trachea (ciliated mucus escalator) → bronchi → bronchioles → ALVEOLI. The alveoli are the destination: 300 million tiny bubbles, one-cell thin, wrapped in capillaries — O₂ diffuses into blood, CO₂ diffuses out. BREATHING MECHANICS: diaphragm contracts (flattens) + ribs lift → chest volume UP → pressure DOWN → air rushes IN (inspiration). Relax → volume down → pressure up → air OUT. You don't 'pull' air in — you make room and pressure does the work. CONTROL: your medulla watches blood CO₂ (via pH) — high CO₂ = breathe harder/faster (that's why holding your breath fails: CO₂, not oxygen, is the alarm). At altitude (Addis at 2,400 m), each breath grabs less O₂ — the body adapts with more red cells.",
  detailed: `<p><b>Airway conditioning:</b> Nose: turbinates create turbulence → particles hit mucus; capillaries warm air to body temp; ~44 °C/100% humidity by the trachea. Trachea/bronchi: C-shaped cartilage rings (keep airway open but allow oesophagus expansion), goblet cells (mucus traps dust/pathogens), cilia beat upward 1 cm/min — the MUCOCILIARY ESCALATOR to the throat (smoking paralyses it → 'smoker's cough' is the escalator rebooting). Bronchioles: no cartilage, smooth muscle constricts (asthma) — branch to alveolar ducts → alveoli.</p>
<p><b>Ventilation physics (Boyle's law):</b> P × V constant — enlarge the box, pressure falls, air flows in. Inspiration: diaphragm contracts (flattens down) + external intercostals lift ribs → thoracic volume ↑ → intrapulmonary pressure ~1 mmHg below atmospheric → inflow (~500 mL tidal volume). Expiration (quiet): elastic recoil — diaphragm relaxes, ribs drop, pressure ↑ → outflow. Forced: internal intercostals + abdominals push. Vital capacity ~4–5 L (measured with spirometer); residual volume (~1.2 L) never leaves — keeps alveoli open and gas exchange continuous.</p>
<p><b>Exchange surface:</b> alveolar epithelium (type I pneumocytes) + capillary endothelium + fused basement membranes = respiratory membrane ~0.5 µm. Surfactant (type II cells, dipalmitoyl phospholipid) cuts surface tension — prevents collapse (alveoli would stick shut like wet balloons; premature babies lack it → respiratory distress syndrome). Diffusion drivers: O₂ 104 mmHg alveolus → 40 venous blood; CO₂ 46 → 40 — CO₂ dissolves 20× better, diffuses despite smaller gradient. Total exchange surface ~70 m².</p>
<p><b>Transport:</b> O₂: 98% bound to haemoglobin (oxyhaemoglobin — loose binding, loads in lungs' high pO₂, unloads in tissues' low pO₂; Bohr effect: CO₂/acid makes Hb release MORE where active). CO₂: 70% as bicarbonate (HCO₃⁻ — RBC carbonic anhydrase: CO₂ + H₂O ⇌ H₂CO₃ ⇌ H⁺ + HCO₃⁻; travels in plasma, reversed in lungs), 23% Hb-bound (carbaminohaemoglobin), 7% dissolved. The bicarbonate buffer also stabilises blood pH (Unit 3 link).</p>
<p><b>Control:</b> Medulla's respiratory centre + CHEMORECEPTORS (aortic/carotid bodies + medullary central ones) mainly monitor CO₂/pH — hypercapnia drives breathing (O₂ is a backup drive). Exercise: muscles make CO₂ + lactic acid → pH drops → breathing deepens/rates up; also adrenaline pre-boosts heart + dilates bronchioles. Hyperventilation blows off CO₂ → blood alkaline → tingling/dizziness (the paper-bag rebreathing trick — but don't use it for asthma/heart attacks).</p>
<p><b>Health:</b> Asthma (bronchiole spasm + mucus — inhalers: salbutamol relaxes, steroids calm inflammation). TB (Mycobacterium — airborne, Ethiopia's burden: DOTS treatment). Pneumonia (fluid in alveoli → poor diffusion). Biomass smoke (indoor cooking fuel — major respiratory risk; improved stoves). Altitude: Addis Ababa 2,400 m → pO₂ ~20% lower; acclimatise via more RBCs (EPO) — the Ethiopian runners' advantage studied worldwide.</p>`,
  keyTerms: [
    { term: "Alveolus", def: "Air sac — the exchange unit (0.5 µm membrane)." },
    { term: "Tidal volume", def: "~500 mL per normal breath." },
    { term: "Vital capacity", def: "Max exhaled after deep inhale (~4–5 L)." },
    { term: "Residual volume", def: "~1.2 L always left — alveoli stay open." },
    { term: "Surfactant", def: "Lipid film lowering surface tension — prevents collapse." },
    { term: "Mucociliary escalator", def: "Cilia + mucus sweeping debris up to the throat." },
    { term: "Oxyhaemoglobin", def: "Hb + O₂ — loads in lungs, releases in tissues." },
    { term: "Bicarbonate", def: "HCO₃⁻ — CO₂'s main transport form (70%)." },
    { term: "Bohr effect", def: "CO₂/acid makes haemoglobin release more O₂ where needed." },
    { term: "Hypoxia / altitude acclimatisation", def: "Low O₂ → more RBCs over weeks." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "Explain inspiration step-by-step using pressure, and name the muscles involved.",
      given: "Ventilation mechanics.",
      formula: "Volume ↑ → pressure ↓ → inflow (Boyle).",
      substitution: "Diaphragm contracts and flattens + external intercostals lift ribs up/out → thoracic cavity volume ↑ → lungs stretch (pleural friction) → intrapulmonary pressure falls ~1 mmHg below atmospheric → air rushes down the pressure gradient (~500 mL).",
      calculation: "Expiration at rest = passive elastic recoil — no muscle needed.",
      answer: "You don't suck air in — you enlarge the box and physics fills it."
    },
    {
      problem: "A premature baby's alveoli collapse each breath. Which cell and molecule are missing, and why does collapse happen?",
      given: "RDS case.",
      formula: "Surfactant vs surface tension.",
      substitution: "Type II pneumocytes immature → little surfactant → water lining's surface tension squeezes small alveoli shut (Laplace: smaller bubble = higher collapsing pressure) → each re-inflation needs huge effort → hypoxia.",
      calculation: "Treatment: antenatal steroids to mature lungs; surfactant replacement via tube.",
      answer: "No surfactant = wet-balloon collapse — the film that keeps bubbles open is missing."
    },
    {
      problem: "Addis Ababa (2,400 m) vs sea level: same breathing rate, but athletes arrive 'gasping' for weeks. Explain the physics and the acclimatisation.",
      given: "Altitude physiology.",
      formula: "Fractional O₂ constant, pressure lower.",
      substitution: "Air is still 21% O₂ but total pressure ~590 mmHg vs 760 → alveolar pO₂ ~20% lower → Hb less saturated each pass → tissues get less O₂ per breath → breathe faster/deeper immediately (hypoxic drive). Over 2–6 weeks: kidneys release EPO → bone marrow makes MORE red cells → carrying capacity compensates.",
      calculation: "The famous highland-endurance adaptation (plus lactate/threshold training debates).",
      answer: "Thinner air, same percentage — the body buys back oxygen with extra red cells."
    },
    {
      problem: "Why does holding your breath end from CO₂ panic rather than oxygen need, and why is this dangerous for swimmers?",
      given: "Control centres.",
      formula: "Chemoreceptors watch CO₂/pH.",
      substitution: "Breath-hold → CO₂ rises → pH drops → medulla's drive escalates until diaphragm spasms (can't override). O₂ may already be critically low while CO₂ 'feels fine' — especially after hyperventilating first (blows off CO₂, delays the alarm while O₂ still falls) → shallow-water blackout.",
      calculation: "Safe rule: never hyperventilate before swimming, never swim alone.",
      answer: "The alarm measures CO₂ — swimmers who silence it pass out underwater."
    }
  ],
  commonMistakes: [
    "Saying we breathe 'because we need oxygen' — the main drive is CO₂/pH; O₂ is a backup signal.",
    "Thinking the diaphragm 'pulls air in' — it lowers pressure; air flows down the gradient.",
    "Confusing breathing (ventilation) with respiration (cellular energy release) — two different processes.",
    "Believing gas exchange happens in bronchioles — only alveoli have the thin, vascular exchange membrane.",
    "Saying CO₂ is carried as dissolved gas mostly — 70% is bicarbonate in plasma.",
    "Thinking exhaled air is 'all CO₂' — it's still ~16% O₂ (we only extract ~25% of each breath's oxygen).",
    "Confusing asthma (muscle spasm/mucus — bronchioles) with pneumonia (fluid/pus in alveoli).",
    "Believing smoking cures 'just the lungs' — CO binds Hb (carboxyhaemoglobin), nicotine raises BP, vessels everywhere suffer."
  ],
  applications: [
    "Altitude training & Ethiopian distance running: 2,400 m living = natural EPO boost — the world studies Ituti/Bishoftu camps.",
    "Asthma inhalers: relievers (salbutamol — relax muscle) vs preventers (steroids — calm inflammation).",
    "TB control (DOTS): airborne spread → cough hygiene, ventilation, 6-month treatment adherence.",
    "Indoor air: biomass cooking smoke → respiratory illness in women/children — improved stoves and ventilation save lungs.",
    "Smoking cessation: cilia regrow within weeks (the escalator restarts); Hb CO clears in days.",
    "First aid: recovery position (airway), CPR (pump + breaths), never back-slapping a choking adult blindly — abdominal thrusts."
  ],
  summary: "Airway conditions (warm/moist/filter) → alveoli exchange: 70 m² of 0.5 µm membrane, surfactant keeps bubbles open. Ventilation = pressure play (diaphragm + ribs → volume → Boyle's law). Transport: O₂ on haemoglobin (Bohr effect), CO₂ as bicarbonate (70%). Control: medulla monitors CO₂/pH. Altitude, asthma, TB, smoke — the system's real-world stressors.",
  visuals: [
    { type: "steps", config: { steps: [{ detail: "Diaphragm flattens, ribs lift — volume ↑", label: "Chest expands" }, { detail: "Lung pressure falls below atmospheric", label: "Pressure drops" }, { detail: "Air rushes down the gradient (~500 mL)", label: "Inflow" }, { detail: "Relax → recoil → pressure ↑ → air out", label: "Passive outflow" }], title: "Inspiration — Physics, Not Pulling" } },
    { type: "comparison", config: { title: "Alveolus vs Tissue Capillary", left: { name: "In the lung", items: ["Alveolar pO₂ 104 → blood 40: O₂ IN", "Blood pCO₂ 46 → alveolus 40: CO₂ OUT", "Exhaled air: 16% O₂ left"] }, right: { name: "In the body", items: ["Tissue pO₂ low → O₂ unloads (Bohr)", "Cells' CO₂ floods in → bicarbonate", "Same diffusion, opposite direction"] } } },
    { type: "qa", config: { title: "Breath Riddles — tap to reveal", pairs: [{ q: "Why can't you keep holding your breath by willpower?", a: "CO₂ rises → pH drops → the medulla's drive overrides conscious control — the diaphragm simply breathes." }, { q: "Why do premature babies' lungs collapse?", a: "Type II cells haven't made surfactant — surface tension wins in tiny alveoli." }, { q: "Why is exhaled air still ~16% oxygen?", a: "Diffusion only partially loads blood each pass — we never extract all the O₂ from a breath." }] } }
  ],
  questions: [
    { type: "mcq", q: "Gas exchange occurs in the:", options: ["Bronchi", "Alveoli", "Trachea", "Larynx"], answer: 1, difficulty: 1, explanation: "Alveoli — thin, wet, capillary-wrapped sacs." },
    { type: "mcq", q: "During inspiration, the diaphragm:", options: ["Relaxes and domes up", "Contracts and flattens", "Stays still", "Pushes ribs down"], answer: 1, difficulty: 1, explanation: "Flattening enlarges the cavity → pressure falls → air in." },
    { type: "short", q: "Most CO₂ is transported as ____ ions in plasma.", answer: "bicarbonate|hco3", difficulty: 2, explanation: "~70% as HCO₃⁻ (carbonic anhydrase in RBCs makes it)." },
    { type: "concept", q: "Why does breathing speed up during exercise? Name the signal.", answer: "CO2 rises pH drops|medulla senses|more O2 demand", difficulty: 2, explanation: "Muscles make CO₂/lactic acid → blood pH falls → chemoreceptors → medulla increases rate/depth." },
    { type: "mcq", q: "Surfactant's job is to:", options: ["Kill bacteria", "Reduce surface tension so alveoli stay open", "Carry O₂", "Move mucus"], answer: 1, difficulty: 2, explanation: "Without it, small alveoli collapse each breath." },
    { type: "tf", q: "Exhaled air contains no oxygen.", answer: false, difficulty: 2, explanation: "~16% O₂ remains — exchange is partial each pass." },
    { type: "short", q: "The cilia-and-mucus defence of the trachea is nicknamed the ____ ___.", answer: "mucociliary escalator", difficulty: 2, explanation: "It sweeps trapped particles up to be swallowed." },
    { type: "concept", q: "Explain one advantage of Ethiopia's highland altitude for endurance athletes.", answer: "more red cells|EPO|thinner air trains carriers", difficulty: 3, explanation: "Lower pO₂ → kidneys release EPO → more RBCs/haemoglobin → greater O₂ carrying capacity when racing at lower altitude." },
    { type: "calc", q: "Tidal volume 500 mL, rate 14/min. Minute ventilation (L/min)?", answer: "7", difficulty: 2, explanation: "500 × 14 = 7000 mL = 7 L/min at rest.", tolerance: 0.5 }
  ]
};

/* --- b5-4: The Urinary System --- */
Lessons["g10-biology-ub5-t4"] = {
  overview: "Your kidneys are 24/7 chemical plants: filtering 180 litres of blood daily, keeping the 2 litres that matter, and turning the rest into urine. They control water balance, salt balance, blood pressure, pH and waste removal — and the nephron, their million tiny workers, does it with filtration, selective reabsorption and secretion.",
  objectives: [
    "Describe kidney structure: cortex, medulla, pelvis, ureter, bladder",
    "Trace filtration → reabsorption → secretion in a nephron",
    "Explain ADH's role in water balance (negative feedback)",
    "List what urine normally contains and what abnormal components indicate",
    "Relate kidney failure to dialysis/transplant"
  ],
  simple: "Blood enters each kidney via the renal artery → a million NEPHRONS filter it. Step 1 — FILTRATION: high pressure in the glomerulus squeezes water + small molecules (glucose, salts, urea) into Bowman's capsule (cells and big proteins stay behind). Step 2 — REABSORPTION: the proximal tubule takes back ALL the glucose, most salts and ~85% of water — the body keeps what it needs. Step 3 — SECRETION: the tubule actively dumps extra H⁺, K⁺ and drugs into the filtrate. The loop of Henle concentrates the urine (countercurrent — longer loops in desert-adapted animals!). Final urine (~1.5 L/day): water + urea + excess salts. The BLADDER stores it; ADH (brain hormone) tells the kidney how much water to reclaim — dehydrated → more ADH → concentrated urine.",
  detailed: `<p><b>Anatomy:</b> Two fist-sized kidneys (retroperitoneal, ~150 g each). Renal artery in → segmental → afferent arteriole → GLOMERULUS (capillary knot in Bowman's capsule) → efferent arteriole (narrower — maintains high pressure) → peritubular capillaries (reabsorption pickup) → renal vein out. Cortex (outer — glomeruli + proximal tubules), medulla (pyramids — loops + collecting ducts), pelvis (funnel) → ureter → bladder (muscular sac, ~400–600 mL capacity) → urethra. Blood flow: 25% of cardiac output to kidneys — the cleanest-per-capita organs.</p>
<p><b>Nephron steps:</b> (1) Ultrafiltration: pressure (~60 mmHg) forces plasma minus cells/proteins into capsule — 180 L/day filtrate. (2) Proximal convoluted tubule: selective reabsorption — 100% glucose/amino acids (active transport, Na⁺ co-transport), ~85% water, most salts; microvilli + mitochondria power it. (3) Loop of Henle: descending limb water out (permeable), ascending salts out (impermeable to water) → medulla becomes salty (countercurrent multiplier) → collecting duct can then pull water out along that gradient. (4) Distal tubule/collecting duct: fine-tuning under hormones — ADH (water permeability), aldosterone (Na⁺ retention). (5) Secretion along the way: H⁺, K⁺, NH₄⁺, drugs, creatinine — pH and potassium control.</p>
<p><b>ADH negative feedback:</b> dehydrated/high salt → hypothalamus osmoreceptors → posterior pituitary releases ADH → collecting ducts insert aquaporins → water reabsorbed → concentrated dark urine + blood diluted back to normal → ADH falls. Over-hydrated → ADH low → dilute pale urine. Alcohol blocks ADH → the frequent dilute urination (and next-day dehydration/headache). Desert rodents: enormous loops → urine 8× more concentrated than ours.</p>
<p><b>Urine composition & diagnostics:</b> Normal: ~95% water, urea (from liver deamination of amino acids — links to Unit 5a liver), uric acid, creatinine, excess ions, pigments (urochrome). ABNORMAL flags: glucose (diabetes mellitus — transporters saturated), protein (glomerulus damage), blood (stones/infection), ketones (starvation/diabetes), high volume + dilute (diabetes insipidus — ADH missing). Tests: dipsticks, microscopy.</p>
<p><b>Failure & replacement:</b> Chronic kidney disease causes: diabetes, hypertension (the two big ones), glomerulonephritis, stones, NSAID overuse. End-stage: dialysis (haemodialysis — blood pumped through artificial kidney 3×/week; peritoneal — using abdominal lining) or TRANSPLANT (Ethiopia: dialysis units in Addis hospitals; transplant capacity limited — prevention is the public-health play). Uraemia = waste buildup → itching, confusion, death without treatment.</p>`,
  keyTerms: [
    { term: "Nephron", def: "Kidney's filtering unit — ~1 million per kidney." },
    { term: "Glomerulus / Bowman's capsule", def: "High-pressure capillary knot / its catch cup." },
    { term: "Ultrafiltration", def: "Pressure squeeze: plasma minus cells/protein → filtrate." },
    { term: "Selective reabsorption", def: "Taking back glucose, salts, water — the keep-what-you-need step." },
    { term: "Loop of Henle", def: "Countercurrent concentrator — creates the salty medulla." },
    { term: "ADH", def: "Antidiuretic hormone — aquaporins → water reclamation." },
    { term: "Negative feedback", def: "Output (blood dilution) shuts off the signal (ADH)." },
    { term: "Urea", def: "Nitrogen waste from liver deamination — excreted." },
    { term: "Dialysis", def: "Artificial kidney — diffusion across membrane + dialysate." },
    { term: "Renal threshold", def: "Glucose level above which transporters spill it into urine." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "180 L filtrate forms daily but only 1.5 L urine leaves. Account for the difference and name the processes.",
      given: "The volume mystery.",
      formula: "Filtration − reabsorption + secretion = urine.",
      substitution: "99% of filtrate is reabsorbed: PCT ~85% water + all glucose/amino acids + most salts; loop/collecting duct reclaim the rest under ADH. Secretion adds small volumes of H⁺/K⁺/drugs. Net: 180 → 1.5 L.",
      calculation: "Kidneys reprocess the body's entire water ~12× daily.",
      answer: "It's a recycling plant, not a drain — the filtrate is a first draft, 99% kept."
    },
    {
      problem: "A hiker runs out of water for a day. Walk through the ADH loop from sensor to result.",
      given: "Dehydration feedback.",
      formula: "Osmoreceptor → ADH → aquaporin.",
      substitution: "Blood salt concentration ↑ → hypothalamus osmoreceptors shrink → thirst + posterior pituitary releases ADH → blood carries ADH to kidneys → collecting-duct cells insert aquaporins → water leaves duct into salty medulla → back to blood → urine small-volume, concentrated, dark → blood osmolarity normalises → ADH drops.",
      calculation: "Urine can reach ~1200 mOsm/L vs plasma 300.",
      answer: "A textbook negative-feedback loop: the fix silences its own alarm."
    },
    {
      problem: "A patient's urine tests positive for glucose despite normal diet. Explain two possible mechanisms.",
      given: "Glycosuria logic.",
      formula: "Renal threshold vs transporter capacity.",
      substitution: "(1) Diabetes mellitus: blood glucose > ~10 mmol/L → PCT Na⁺-glucose co-transporters saturated → glucose spills (osmotic diuresis → thirst + frequent urination). (2) Rare renal glycosuria: threshold genetically low with normal blood sugar — transporters defective.",
      calculation: "Confirm with blood glucose/HbA1c.",
      answer: "Either too much sugar for the pumps, or broken pumps — the dipstick can't tell which; blood tests do."
    },
    {
      problem: "A dialysis machine uses dialysate matching plasma EXCEPT urea is absent. Explain why each design choice matters.",
      given: "Artificial kidney physics.",
      formula: "Diffusion down gradients.",
      substitution: "Urea absent from dialysate → huge gradient → wastes diffuse OUT of blood. Same salts/glucose as plasma → they don't diffuse away (no gradient) — patient keeps them. Adjusting dialysate K⁺/HCO₃⁻ pulls excess ions out or adds buffer — the machine tunes composition by gradient engineering.",
      calculation: "3–4 h, 3×/week replaces ~75% of normal kidney clearance.",
      answer: "Dialysis is controlled diffusion — the dialysate recipe decides what leaves and what stays."
    }
  ],
  commonMistakes: [
    "Saying the kidney 'makes urine from blood' — it FILTERS plasma then reclaims 99%; urine is the rejected draft.",
    "Thinking glucose is 'supposed to be absent' from filtrate — it's filtered normally, then fully reabsorbed; glycosuria = saturation, not filtration failure.",
    "Confusing renal artery (waste-rich blood IN) with renal vein (cleaned blood out) — the artery is dirtier!",
    "Believing ADH 'makes you pee' — it CONSERVES water (anti-diuretic); less ADH = more dilute urine.",
    "Mixing urea (liver-made from amino-acid breakdown) with uric acid (nucleotide waste) — both nitrogen wastes, different sources.",
    "Thinking diabetes insipidus involves sugar — it's ADH/kidney-response failure → huge dilute urine (name similarity trap).",
    "Saying urine is sterile 'by definition' — bladder urine is low-bacteria but not zero; contamination is common.",
    "Believing drinking extreme water is always safe — over-hydration dilutes Na⁺ → hyponatraemia (Unit 3 link)."
  ],
  applications: [
    "Diabetes screening: urine dipstick (glucose, ketones) + blood tests — Ethiopia's rising diabetes burden.",
    "Kidney-stone prevention: hydration, less salt/oxalate (teff and spinach are healthy but stone-formers need water).",
    "Dialysis access: AV fistula surgery; peritoneal dialysis at home — feasibility in regional hospitals.",
    "Hypertension–kidney loop: high BP damages glomeruli; damaged kidneys raise BP (renin) — vicious cycle, treat both.",
    "NSAID caution: chronic painkiller use reduces kidney blood flow — a common over-the-counter risk.",
    "Urine tests in sport/medicine: hydration status, drug screening, pregnancy, infection — the simplest diagnostic fluid."
  ],
  summary: "Kidneys: ultrafiltration (180 L/day) → selective reabsorption (all glucose, most water/salts) → secretion (H⁺, K⁺, drugs) → urine 1.5 L. Loop of Henle concentrates; ADH fine-tunes water via negative feedback. Urea from the liver's deamination. Abnormal urine = diagnostic gold (glucose → diabetes, protein → damage). Failure → dialysis (gradient-engineered diffusion) or transplant.",
  visuals: [
    { type: "flowChart", config: { steps: ["Renal artery → glomerulus", "Ultrafiltration → Bowman's capsule (180 L)", "PCT: all glucose + 85% water back", "Loop of Henle: salt gradient", "Collecting duct: ADH sets water", "Urine 1.5 L → ureter → bladder"], title: "From 180 L to 1.5 L" } },
    { type: "cycleDiagram", config: { title: "ADH Negative Feedback", nodes: ["Dehydration — blood salty", "Hypothalamus senses", "Pituitary releases ADH", "Aquaporins reclaim water", "Blood normal — ADH off"] } },
    { type: "qa", config: { title: "Kidney Clinic — tap to reveal", pairs: [{ q: "Why is the efferent arteriole NARROWER than the afferent?", a: "To keep glomerular pressure high — filtration needs a squeeze." }, { q: "Why does alcohol make you urinate repeatedly?", a: "It blocks ADH → collecting ducts stay water-permeable → dilute urine floods out → dehydration (the headache)." }, { q: "Why do desert rodents have long loops of Henle?", a: "Longer loop = stronger salt gradient = more concentrated urine = less water lost." }] } }
  ],
  questions: [
    { type: "mcq", q: "The filtering knot of capillaries in a nephron is the:", options: ["Loop of Henle", "Glomerulus", "Collecting duct", "Renal pelvis"], answer: 1, difficulty: 1, explanation: "Glomerulus inside Bowman's capsule — ultrafiltration site." },
    { type: "mcq", q: "Glucose normally disappears from filtrate by:", options: ["Not being filtered", "Complete reabsorption in the PCT", "Secretion back to blood", "Breaking down"], answer: 1, difficulty: 2, explanation: "It IS filtered, then 100% reabsorbed (Na⁺ co-transport) — until the threshold." },
    { type: "short", q: "The hormone that increases water reabsorption in the collecting duct is ____.", answer: "adh|antidiuretic hormone|vasopressin", difficulty: 2, explanation: "ADH inserts aquaporins — water returns to blood." },
    { type: "concept", q: "Why is the renal ARTERY blood dirtier (more urea) than the renal VEIN?", answer: "kidney removes waste|vein is cleaned|artery brings waste", difficulty: 2, explanation: "Artery delivers wastes for filtration; vein carries the cleaned blood away — the kidney is the filter." },
    { type: "mcq", q: "Urea is produced mainly by the:", options: ["Kidney", "Liver", "Bladder", "Pancreas"], answer: 1, difficulty: 2, explanation: "Liver deaminates excess amino acids → urea → blood → kidney excretes." },
    { type: "tf", q: "A person with diabetes insipidus has high blood sugar.", answer: false, difficulty: 3, explanation: "It's an ADH problem (water balance) — blood glucose is normal; the name is a trap." },
    { type: "short", q: "The functional unit of the kidney is the ____.", answer: "nephron", difficulty: 1, explanation: "~1 million per kidney." },
    { type: "concept", q: "Explain how dialysis uses the dialysate recipe to remove urea but keep glucose.", answer: "no urea in dialysate|diffuses out|same glucose no gradient", difficulty: 3, explanation: "Diffusion follows gradients: urea absent outside → leaves blood; glucose matched → no net movement." },
    { type: "calc", q: "180 L filtrate/day, 1.5 L urine. What % of filtrate is reabsorbed?", answer: "99.2|99", difficulty: 2, explanation: "(180−1.5)/180 ≈ 99.2% reclaimed.", tolerance: 1 }
  ]
};

/* --- b5-5: The Immune System --- */
Lessons["g10-biology-ub5-t5"] = {
  overview: "You are under constant microbial siege — and winning because of two defence layers: non-specific barriers and phagocytes that attack anything foreign, plus the specific immune system that learns, targets and REMEMBERS each invader. Vaccines work because memory cells never forget.",
  objectives: [
    "List the body's non-specific defences (physical, chemical, cellular)",
    "Distinguish non-specific vs specific immunity",
    "Explain antigens, antibodies, B- and T-lymphocyte roles",
    "Describe primary vs secondary response and vaccination",
    "Relate immunity to Ethiopian public health (vaccines, HIV, herd immunity)"
  ],
  simple: "Layer 1 — keep them OUT: skin (waterproof wall), mucus + cilia (sticky escalator), stomach acid (chemical moat), tears/saliva (lysozyme kills bacteria). Layer 2 — if something gets in: inflammation (red, hot, swollen — blood + phagocytes rush in) and PHAGOCYTES (neutrophils/macrophages — engulf and digest anything foreign, no questions asked). Layer 3 — the specialists: each pathogen carries ANTIGENS (name tags). A B-cell with the matching antibody finds it, clones itself, and its plasma cells pump antibodies that clump/neutralise the pathogen; helper T-cells coordinate; killer T-cells destroy infected cells. Then MEMORY cells stay behind — next time the same antigen appears, the SECONDARY response is faster and bigger: you're immune. Vaccines = a safe preview of the antigen that builds memory without the disease.",
  detailed: `<p><b>Non-specific (innate) defences:</b> Physical: skin (keratin, dry, acidic pH ~5.5), mucous membranes (trapping — respiratory escalator, gut acid, urinary flushing). Chemical: lysozyme (tears/saliva — breaks bacterial walls), HCl (stomach kills most swallowed microbes), defensins/interferons (antiviral proteins), sebum acids. Cellular: phagocytes (neutrophils — first wave; macrophages — big eaters + antigen presentation), Natural Killer cells (destroy virus-infected/tumour cells), inflammation (mast cells release histamine → vasodilation + leaky capillaries → redness, heat, swelling, pain; phagocytes follow chemical attractants), fever (pyrogens reset hypothalamus — slows pathogens, speeds defences).</p>
<p><b>Specific (adaptive) immunity:</b> ANTIGEN = any molecule the body flags 'non-self' (pathogen surface proteins, pollen, foreign blood cells). B-lymphocytes: each clone carries a unique antibody; antigen binding + helper-T signal → activation → PLASMA CELLS (antibody factories, thousands/sec) + memory B cells. Antibody action: agglutination (clumping — easy for phagocytes), neutralisation (blocking binding sites), opsonisation (coating for eating), complement activation (punching holes). T-lymphocytes (from thymus): HELPER T (CD4 — releases cytokines directing B cells and macrophages — the orchestra conductor), KILLER/CYTOTOXIC T (CD8 — destroys virus-infected or cancer cells by perforin/granzymes), regulatory T (calm the response), memory T. This is why HIV is catastrophic: it kills helper T-cells — the conductor — collapsing both arms of adaptive immunity.</p>
<p><b>Primary vs secondary response:</b> First exposure: lag 5–10 days (finding the right clone, building it) → modest IgM then IgG → illness possible. Memory cells persist (years–lifetime). Second exposure: lag 1–3 days, antibody titre 10–100× higher, IgG dominant, pathogen cleared before symptoms = you don't get sick again (measles, chickenpox).</p>
<p><b>Vaccination:</b> vaccine = attenuated (live-weakened: measles, oral polio), inactivated (killed: injectable polio), subunit/toxoid (piece or detoxified toxin: tetanus, hepatitis B), mRNA (instructions for an antigen — newer platforms). Builds artificial memory without disease risk. Herd immunity: enough vaccinated → pathogen can't find hosts → unprotected (infants, immunocompromised) shielded too. Ethiopia's EPI program: childhood vaccines (BCG, pentavalent, measles, PCV, rotavirus, polio) — coverage campaigns reach >80% of children; cold-chain logistics on highland roads are the unsung biology.</p>
<p><b>Allergy & autoimmunity:</b> allergy = misdirected IgE against harmless antigen (pollen, peanut) → mast-cell histamine → sneezing/swelling (anaphylaxis = systemic emergency — adrenaline). Autoimmune = tolerance breaks: immune system attacks self (type-1 diabetes — insulin cells; rheumatoid arthritis — joints; SLE). Transplant rejection = foreign MHC recognized — immunosuppressants needed.</p>`,
  keyTerms: [
    { term: "Innate immunity", def: "Non-specific: barriers, phagocytes, inflammation, fever." },
    { term: "Adaptive immunity", def: "Specific: B/T lymphocytes with memory." },
    { term: "Antigen / antibody", def: "Foreign 'name tag' / Y-protein matching it (B-cell product)." },
    { term: "Phagocytosis", def: "Engulf-and-digest by neutrophils/macrophages." },
    { term: "Helper T cell", def: "CD4 conductor — cytokines direct the whole response (HIV target)." },
    { term: "Killer T cell", def: "CD8 — destroys infected/cancer cells directly." },
    { term: "Plasma cell", def: "Activated B cell — antibody factory." },
    { term: "Memory cell", def: "Long-lived clone ready for re-invasion — the vaccine payoff." },
    { term: "Herd immunity", def: "Population coverage blocks transmission — protects the unvaccinated." },
    { term: "Agglutination", def: "Antibody clumping — marks pathogens for removal." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "Graph logic: explain why the secondary antibody response is faster, stronger and longer-lasting.",
      given: "Two-exposure comparison.",
      formula: "Memory = pre-built army.",
      substitution: "Primary: rare specific B-cell must be FOUND among ~10⁸ clones → clonal selection/expansion takes 5–10 days → modest peak. Secondary: memory B cells (already abundant, high-affinity after affinity maturation) activate in 1–3 days → plasma-cell numbers explode → titre 10–100× → persists.",
      calculation: "This is exactly what a booster shot re-triggers.",
      answer: "The first fight recruits an army; the second one was already standing by."
    },
    {
      problem: "A child receives the measles vaccine at 9 months. Trace what her immune system 'learns' and what protects her at 15 if exposed.",
      given: "Vaccine → protection.",
      formula: "Artificial active immunity.",
      substitution: "Vaccine's weakened measles antigens → her matching B-cell clone activates with helper T → plasma cells make anti-measles antibodies + MEMORY B/T cells form (no illness). At 15, wild measles inhaled → memory cells activate in days → antibodies neutralise before rash/fever develops → she's immune (and not infectious to others).",
      calculation: "Two doses ≈ 97% lifetime protection.",
      answer: "The vaccine was a rehearsal; the memory cast never forgot the script."
    },
    {
      problem: "Explain, using cell types, why untreated HIV progresses to AIDS while other infections don't.",
      given: "Immune collapse mechanism.",
      formula: "Target = the coordinator.",
      substitution: "HIV infects HELPER T cells (CD4 receptor) → replicates → kills them → without helper T: B cells get no activation signal (antibody responses fail), macrophages/killer T not boosted (cell-mediated fails) → opportunistic infections (TB, pneumonia, cancers) the body would normally shrug off become lethal = AIDS.",
      calculation: "ART (antiretrovirals) suppresses replication → CD4 recovers → people live normal lifespans.",
      answer: "HIV doesn't just win a battle — it destroys the general who runs all battles."
    },
    {
      problem: "A bee sting causes a whole-body reaction: swelling, wheezing, drop in BP. Name the process, the antibody class and the emergency drug.",
      given: "Anaphylaxis case.",
      formula: "IgE + mast cells gone systemic.",
      substitution: "Prior sensitisation made IgE against venom → re-exposure: venom cross-links IgE on mast cells EVERYWHERE → massive histamine → capillaries leak (swelling, BP drop), bronchioles constrict (wheeze). Treatment: ADRENALINE (epinephrine) IM — constricts vessels, dilates airways, stabilises mast cells; antihistamines/steroids follow.",
      calculation: "Epinephrine auto-injector = carried by known allergy sufferers.",
      answer: "Anaphylaxis = an allergic response aimed at the whole body — adrenaline is the one-minute fix."
    }
  ],
  commonMistakes: [
    "Saying antibiotics 'kill the immune system's germs' — antibiotics target BACTERIA (walls/ribosomes); viruses are untouched (that's why flu antibiotics don't help).",
    "Confusing antigens (the tag) with antibodies (the weapon made against it).",
    "Thinking vaccines 'give you the disease' — they present antigens safely; mild symptoms are the immune response, not infection.",
    "Believing a single vaccine dose is enough — boosters re-stimulate memory (hepatitis B ×3, tetanus every 10 years).",
    "Calling fever a disease — it's a defence (pyrogens reset the thermostat); treat comfort, not the number alone.",
    "Mixing B-cell jobs: plasma cells secrete antibodies; memory B cells persist — and T cells DON'T make antibodies.",
    "Thinking HIV spreads by toilet seats/sharing food — blood, semen/vaginal fluids, breast milk, needles; not casual contact.",
    "Assuming herd immunity protects only the vaccinated — its point is shielding those who CAN'T be vaccinated."
  ],
  applications: [
    "Ethiopia's EPI schedule: BCG at birth, pentavalent/measles/PCV/rotavirus in infancy — campaign teams reach remote woredas; cold-chain keeps vaccines alive.",
    "HIV prevention & ART: testing, PMTCT (mother-to-child), PrEP — viral suppression = untransmittable (U=U).",
    "Wound care: clean + cover (skin's job); tetanus booster status matters for soil-contaminated cuts.",
    "Allergy management: avoid triggers, antihistamines, epinephrine for anaphylaxis; immunotherapy re-trains response.",
    "Antibiotic stewardship: finish the course, never for viruses — resistance is evolution (Unit 1 link) in real time.",
    "Organ transplant & blood typing: MHC/ABO matching = antigen-antibody compatibility in practice."
  ],
  summary: "Three lines: barriers (skin, mucus, acid, lysozyme) → innate cells (phagocytes, NK, inflammation, fever) → adaptive (B → plasma + memory, antibodies; T helper/killer; clonal selection). Primary response slow, secondary fast/strong = memory = vaccination. Misfires: allergy (IgE), autoimmunity (self-attack). HIV kills helper T — the conductor. Herd immunity shields the weakest.",
  visuals: [
    { type: "steps", config: { steps: [{ detail: "Pathogen antigens encountered", label: "Recognition" }, { detail: "Matching B/T clone selected & expanded", label: "Clonal selection" }, { detail: "Plasma cells flood antibodies; killer T act", label: "Attack" }, { detail: "Memory B/T remain for years", label: "Memory" }, { detail: "Re-exposure → 1–3 day response, no illness", label: "Secondary" }], title: "How Adaptive Immunity Works" } },
    { type: "comparison", config: { title: "Innate vs Adaptive", left: { name: "Innate (non-specific)", items: ["Skin, mucus, acid", "Phagocytes, NK, inflammation", "Minutes–hours", "No memory", "Same every time"] }, right: { name: "Adaptive (specific)", items: ["B & T lymphocytes", "Antibodies, cytokines", "Days (primary)", "Memory cells", "Faster/stronger next time"] } } },
    { type: "qa", config: { title: "Immune Myths — tap to reveal", pairs: [{ q: "Why don't antibiotics work on flu?", a: "Flu is a virus — no walls or ribosomes to hit; antibiotics target bacteria only." }, { q: "Why do we get chickenpox once?", a: "Memory B/T cells from the first infection clear the virus before symptoms on re-exposure." }, { q: "Why vaccinate even if you won't travel?", a: "Herd immunity: high coverage stops circulation — protecting babies and the immunocompromised around you." }] } }
  ],
  questions: [
    { type: "mcq", q: "Which is a NON-specific defence?", options: ["Antibody production", "Phagocytosis", "Memory cells", "Vaccination"], answer: 1, difficulty: 1, explanation: "Phagocytes eat anything foreign — innate, no specificity." },
    { type: "mcq", q: "Antibodies are produced by:", options: ["T cells", "Plasma (B) cells", "Macrophages", "Platelets"], answer: 1, difficulty: 1, explanation: "Activated B cells → plasma cells = antibody factories." },
    { type: "short", q: "The molecule on a pathogen's surface that triggers an immune response is an ____.", answer: "antigen", difficulty: 1, explanation: "Antigen = the 'non-self' name tag." },
    { type: "concept", q: "Why does a second infection of the same pathogen often cause no symptoms?", answer: "memory cells|faster stronger response|secondary", difficulty: 2, explanation: "Memory B/T cells mount a 1–3 day high-titre response that clears the pathogen before illness develops." },
    { type: "mcq", q: "HIV primarily destroys:", options: ["Red cells", "Helper T cells", "Platelets", "Neutrophils"], answer: 1, difficulty: 2, explanation: "CD4 helper T — losing the coordinator collapses both antibody and cell-mediated immunity." },
    { type: "short", q: "The antibody class behind immediate allergy/anaphylaxis is ____.", answer: "ige", difficulty: 3, explanation: "IgE cross-links on mast cells → histamine flood." },
    { type: "tf", q: "Vaccines work by giving the body a weakened or partial form of the antigen.", answer: true, difficulty: 1, explanation: "Safe preview → artificial active immunity without the disease." },
    { type: "concept", q: "Explain how 90% vaccine coverage protects the 10% who aren't vaccinated.", answer: "herd immunity|pathogen can't spread|breaks chain", difficulty: 3, explanation: "With most hosts immune, transmission chains die out — the pathogen rarely reaches unprotected people." },
    { type: "ordering", q: "Pick the correct first-response order after a cut:", options: ["Phagocytes arrive → histamine → scab → antibodies", "Vasoconstriction + platelets plug → histamine/inflammation → phagocytes arrive → antibodies (if needed)", "Antibodies → scab → histamine → phagocytes", "Fever → scab → phagocytes → histamine"], answer: [1], difficulty: 2, explanation: "Clot first, inflammation signals next, phagocytes patrol, adaptive follows only if antigens appear." }
  ]
};
