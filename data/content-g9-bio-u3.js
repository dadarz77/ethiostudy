/* Content: Grade 9 Biology — Unit 3: Cells (2 topics) */
window.Lessons = window.Lessons || {};

Lessons["g9-biology-ub3-t1"] = {
  overview: "Every living thing is built of cells — the smallest unit that runs all seven life processes. Grade 9 maps the two building plans (plant vs animal) and the organelle workshop inside them.",
  objectives: [
    "State the three parts of the cell theory",
    "Label and describe the main organelles of plant and animal cells",
    "Name the structures unique to plant cells",
    "Relate each organelle's structure to its function",
    "Use a light microscope correctly to view cells"
  ],
  simple: "<b>Cell theory:</b> all organisms are made of cells · the cell is the smallest living unit · all cells come from pre-existing cells. Two blueprints: <b>animal cells</b> (cell membrane, cytoplasm, nucleus, mitochondria, ribosomes…) and <b>plant cells</b> which add three extras — a <b>cellulose wall</b> outside the membrane, <b>chloroplasts</b> for photosynthesis, and one giant <b>vacuole</b> for water pressure. Think of the cell as a factory: nucleus = manager's office, mitochondria = power plant, ribosomes = assembly line, membrane = security gate.",
  detailed: "<p>Recorded in 1838–39 by <b>Schleiden</b> (plants), <b>Schwann</b> (animals) and completed by <b>Virchow</b> ('omnis cellula e cellula'), cell theory rests on microscope evidence: Robert Hooke first saw 'cells' in cork (dead walls!), and Leeuwenhoek watched living microbes decades earlier.</p><p>Every cell shares three basics: the <b>cell membrane</b> — selectively permeable phospholipid bilayer controlling traffic; <b>cytoplasm</b> — gel where reactions happen and organelles sit; and the <b>nucleus</b> — DNA archive directing the cell. <b>Prokaryotes</b> (bacteria) break the pattern: no nucleus, DNA free in a loop, plus a capsule and flagellum — worth contrasting since Unit 2 made nucleus presence the kingdom divider.</p><p>Organelle functions: <b>mitochondria</b> — respiration and ATP release ('powerhouse', double-membraned with folded inner cristae); <b>ribosomes</b> — protein synthesis (free in cytoplasm or on <b>rough ER</b>, whose 'roughness' is exactly those ribosomes); <b>smooth ER</b> — lipid manufacture and transport; <b>Golgi apparatus</b> — modifies, packages and ships proteins in vesicles; <b>vacuoles</b> — storage (small and scattered in animal cells); <b>lysosomes</b> — enzyme packets digesting worn parts and invaders.</p><p><b>Plant-only structures:</b> the <b>cell wall</b> (cellulose, rigid, gives shape and turgor strength, permeable unlike the membrane) outside the membrane; <b>chloroplasts</b> (contain chlorophyll; capture light for photosynthesis — the organelle that makes plants autotrophs); and the <b>large permanent vacuole</b> filled with cell sap — it maintains <b>turgor pressure</b> keeping herbaceous plants upright (wilting = vacuoles losing water). The classic exam list: wall, chloroplast, large vacuole — animal cells have none of the three.</p><p><b>Cell specialization:</b> multicellular organisms differentiate cells for jobs — sperm (long tail, many mitochondria, haploid nucleus), nerve cells (long fibers, branches), root-hair cells (one-cell-long extension, no chloroplasts — underground!), red blood cells (no nucleus, biconcave, packed with haemoglobin). Form follows function every time: ask 'what is this cell's job?' and predict its organelles — a muscle cell craves mitochondria, a pancreatic enzyme-cell craves rough ER and Golgi.</p><p><b>Microscopy:</b> light microscope magnification = eyepiece × objective (10× × 40× = 400×). Routine: carry with two hands, start on lowest power, coarse then fine focus, diaphragm for contrast; stained temporary mounts (iodine for starch in potato, methylene blue for cheek cells) reveal nuclei. Electron microscopes (added magnification into millions) exposed the membrane and organelle details this lesson describes — technology drove the theory.</p>",
  keyTerms: [
    { term: "Cell theory", def: "All organisms made of cells; cell = basic unit; cells arise from cells" },
    { term: "Organelle", def: "A specialized functional structure inside the cytoplasm" },
    { term: "Selectively permeable", def: "Membrane property: some substances pass, others blocked" },
    { term: "Chloroplast", def: "Plant organelle with chlorophyll; site of photosynthesis" },
    { term: "Tonoplast / vacuole", def: "Large permanent plant vacuole and its membrane; turgor control" },
    { term: "Prokaryotic", def: "Cell without a true nucleus (bacteria)" },
    { term: "Specialization", def: "Cells differentiated for a particular function" }
  ],
  formulas: [
    {
      name: "Microscope magnification",
      formula: "total magnification = eyepiece lens × objective lens",
      meaning: "The two lens systems multiply",
      when: "Every practical microscopy session"
    }
  ],
  workedExamples: [
    {
      problem: "An eye of 10× with a 40× objective magnifies:",
      calculation: "10 × 40",
      answer: "400×"
    },
    {
      problem: "Predict: which organelle is abundant in (a) flight muscle, (b) salivary enzyme cells, (c) leaf mesophyll?",
      answer: "(a) mitochondria (energy), (b) rough ER + Golgi (protein export), (c) chloroplasts (photosynthesis)"
    },
    {
      problem: "A cell has a nucleus, cell wall and chloroplasts. Animal, plant or fungus?",
      calculation: "wall + chloroplasts → plant (fungi have walls but no chloroplasts)",
      answer: "Plant"
    },
    {
      problem: "Why do root hair cells lack chloroplasts?",
      answer: "No light underground — photosynthesis impossible, so the organelle is wasted space"
    }
  ],
  commonMistakes: [
    "Drawing the cell wall INSIDE the membrane (wall is outermost in plants)",
    "Saying only plant cells have vacuoles — animal ones exist but are small/temporary",
    "Confusing chloroplast (organelle) with chlorophyll (pigment inside it)",
    "Believing the nucleus is the only DNA location — mitochondria and chloroplasts carry their own",
    "Fungi = plants misconception (chitin wall, no chloroplasts, absorptive)",
    "Using coarse focus under high power — crushes slides and objectives"
  ],
  applications: [
    "Medicine: cancer is uncontrolled cell division — understanding the cell explains the disease",
    "Agriculture: turgor knowledge = why crops wilt at noon and recover at dusk (water stress)",
    "Food science: osmosis and cells underpin salting, sugaring and brining as preservation",
    "Forensics & health: cheek-cell and blood-smear microscopy are first-line diagnostics",
    "Biotechnology: plant tissue culture grows thousands of banana/coffee plantlets from cells"
  ],
  summary: "Cell theory: everything is cells; cells are the unit of life; cells beget cells. Common kit — membrane, cytoplasm, nucleus, mitochondria, ribosomes, ER, Golgi; plants add wall, chloroplasts and a big vacuole. Specialized cells reveal form-fits-function, and the light microscope (eyepiece × objective) is the tool that proved it all.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Who proposed that all cells come from pre-existing cells?", options: ["Hooke", "Schleiden", "Virchow", "Leeuwenhoek"], answer: 2, difficulty: 2, explanation: "Virchow completed cell theory in 1855." },
    { type: "mcq", q: "The 'powerhouse' performing respiration is the:", options: ["ribosome", "mitochondrion", "Golgi body", "lysosome"], answer: 1, difficulty: 1, explanation: "Mitochondria release energy (ATP) from glucose." },
    { type: "mcq", q: "Which set is FOUND ONLY in plant cells?", options: ["nucleus, membrane, cytoplasm", "wall, chloroplast, large vacuole", "mitochondria, ribosomes, wall", "vacuole, nucleus, chloroplast"], answer: 1, difficulty: 1, explanation: "The classic plant trio; the rest mix shared parts." },
    { type: "mcq", q: "Proteins are synthesized at the:", options: ["Golgi apparatus", "ribosomes", "lysosomes", "cell membrane"], answer: 1, difficulty: 1, explanation: "Ribosomes read genetic instructions to build proteins." },
    { type: "mcq", q: "A cell membrane is described as selectively permeable because it:", options: ["blocks everything", "allows some substances through and not others", "lets only water pass", "is fully open"], answer: 1, difficulty: 2, explanation: "Traffic control, not a wall." },
    { type: "mcq", q: "The plant cell's rigidity and upright support come mainly from:", options: ["the nucleus", "the turgid vacuole", "mitochondria", "ribosomes"], answer: 1, difficulty: 2, explanation: "Water pressure in the permanent vacuole presses cytoplasm against the wall." },
    { type: "mcq", q: "10× eyepiece + 45× objective gives:", options: ["55×", "4.5×", "450×", "4500×"], answer: 2, difficulty: 1, explanation: "Multiply: 450×." },
    { type: "mcq", q: "Mature mammalian red blood cells are unusual because they:", options: ["have two nuclei", "lack a nucleus", "photosynthesize", "are larger than white cells"], answer: 1, difficulty: 2, explanation: "No nucleus = more room for haemoglobin (trading repair for capacity)." },
    { type: "mcq", q: "Rough ER looks 'rough' under the microscope due to:", options: ["ribosomes on its surface", "attached chloroplasts", "vacuole dents", "wall deposits"], answer: 0, difficulty: 3, explanation: "Surface ribosomes — it exports proteins." }
  ]
};

Lessons["g9-biology-ub3-t2"] = {
  overview: "The membrane is a smart gate: water and molecules cross it by diffusion, osmosis — or by paying energy. This topic explains why salted meat keeps, why IV fluids must match your blood, and how roots drink.",
  objectives: [
    "Define diffusion and give everyday and biological examples",
    "Explain osmosis precisely (water, dilute→concentrated, semi-permeable)",
    "Predict cell behavior in hypotonic, isotonic and hypertonic solutions",
    "Contrast passive transport with active transport",
    "Describe endocytosis and exocytosis as bulk transport"
  ],
  simple: "<b>Diffusion:</b> particles spread from where there are MANY to where there are FEW (down the concentration gradient) until even — perfume across a room, oxygen into blood. <b>Osmosis:</b> the same but ONLY water crossing a semi-permeable membrane, from dilute solution into concentrated one. A cell in plain water swells (animal cells can burst!); in strong salt water it shrivels; in matched fluid it's happy. <b>Active transport:</b> the cell burns energy to pump substances the WRONG way — roots hoarding minerals, your nerves resetting.",
  detailed: "<p><b>Diffusion</b> is the net movement of particles down their concentration gradient — spontaneous mixing driven by random motion; faster over short distances, at higher temperature, for smaller particles, and across larger surface areas. No energy from the cell is needed: it's <b>passive transport</b>. Biological headlines: oxygen diffusing from alveoli into blood (and into cells), CO₂ leaving, glucose moving from gut blood into cells — all gradient-powered. The membrane itself only passes small non-charged molecules (O₂, CO₂, water); the rest needs help.</p><p><b>Osmosis</b> is diffusion of water specifically, across a <b>partially permeable membrane</b>, from the region of higher water concentration (dilute solution) to lower (concentrated). Three tones of environment: <b>hypotonic</b> (outside more dilute than cell): water floods in — animal cell swells and may <b>lyse</b>; a plant cell becomes <b>turgid</b> (firm — its normal, healthy state thanks to wall resistance). <b>Hypertonic</b> (outside saltier): water leaves — animal cells <b>crenate</b> (shrivel), plant cytoplasm pulls away from the wall = <b>plasmolysis</b> (a wilted, salted world). <b>Isotonic</b>: equal — no net movement; this is why medical infusions are 0.9% saline, matching blood.</p><p>Osmosis demos: visking tubing + sugar solution in water gains mass (water entered); potato strips in strong salt solution go limp (water left); in plain water they stiffen (turgor). Red blood cells make the dramatic version: hemolysis in distilled water, crenellation in brine.</p><p><b>Active transport</b> reverses the gradient using <b>energy (ATP)</b> from respiration and <b>carrier proteins</b> acting as pumps: root-hair cells accumulate mineral ions far more concentrated than soil water; gut epithelium absorb remaining glucose against the gradient; kidney tubules reclaim salts. It's the cell's water pump, running uphill. <b>Bulk transport</b> moves loads too big for channels: <b>endocytosis</b> — membrane folds inward to engulf (an amoeba eating, white blood cells swallowing bacteria); <b>exocytosis</b> — vesicles fuse with the membrane to export (digestive enzymes, hormones leaving cells). Both consume ATP.</p><p>Contrast table worth memorizing: direction (down vs up gradient), energy (none vs ATP), membrane role (crossing vs pumps/vesicles), examples (gas exchange vs root uptake). All three systems — diffusion, osmosis, active transport — cooperate to keep cells supplied, hydrated and clean.</p>",
  keyTerms: [
    { term: "Diffusion", def: "Net movement of particles down their concentration gradient" },
    { term: "Concentration gradient", def: "Difference in particle concentration between regions" },
    { term: "Osmosis", def: "Water diffusion across a partially permeable membrane, dilute → concentrated" },
    { term: "Turgid / plasmolysed", def: "Plant cell swollen firm / cytoplasm shrunk from the wall" },
    { term: "Crenation / lysis", def: "Animal cell shriveling in salt / bursting in plain water" },
    { term: "Active transport", def: "Energy-requiring pumping against the gradient" },
    { term: "Endocytosis / exocytosis", def: "Membrane engulfing material in / vesicles exporting out" }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "A potato strip is measured 5.0 g, placed in 20% salt solution overnight, then weighed 4.4 g. Explain.",
      calculation: "outside hypertonic to potato cell sap",
      answer: "Water left the cells by osmosis into the salt solution → mass fell and the strip went limp"
    },
    {
      problem: "Predict each in distilled water: (a) red blood cell, (b) onion epidermal cell.",
      answer: "(a) swells and lyses (no wall); (b) becomes turgid but survives — wall stops bursting"
    },
    {
      problem: "Why must root-hair cells spend ATP on mineral uptake?",
      answer: "Ion concentration inside the root EXCEEDS soil water — only active transport moves them uphill"
    },
    {
      problem: "In an IV drip, why 0.9% NaCl rather than pure water?",
      answer: "0.9% is isotonic to blood; pure water would be hypotonic → red cells swell and burst"
    }
  ],
  commonMistakes: [
    "Saying osmosis moves 'water from low to high concentration' without naming — of WATER; it's really dilute solution → concentrated solution",
    "Thinking plant cells burst in hypotonic water (the wall prevents lysis)",
    "Calling active transport 'just the reverse of diffusion' — it uses protein pumps and ATP",
    "Confusing turgid with 'full of sugar/salt' — turgor is water pressure",
    "Believing diffusion needs energy — the gradient powers it",
    "Plasmolysis vs crenation vocabulary mixed between plant/animal cells"
  ],
  applications: [
    "Food preservation: salting, smoking and sugaring draw water out of microbes by osmosis",
    "Medicine: rehydration salts, IV tonicity and dialysis all work on these principles",
    "Agriculture: over-fertilizing 'burns' crops — soil turns hypertonic, roots lose water",
    "Cooking: brining meat and osmotic crispness of salted cucumbers",
    "Kidney physiology: your tubules perform exactly this trio of transport processes daily"
  ],
  summary: "Particles diffuse down gradients for free; water osmoses across membranes from dilute to concentrated (turgid/lysed vs plasmolysed/crenated by tonicity). Cells pump against gradients with active transport (ATP + pumps) and bulk-move via endo/exocytosis. Passive = downhill, active = uphill and energized.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Osmosis is the movement of:", options: ["water from concentrated to dilute solution", "water from dilute to concentrated solution across a membrane", "any molecule down a gradient", "salt into cells"], answer: 1, difficulty: 2, explanation: "Water follows its own gradient: dilute side → concentrated side." },
    { type: "mcq", q: "A red blood cell in distilled water will:", options: ["shrivel", "stay the same", "swell and burst", "divide"], answer: 2, difficulty: 2, explanation: "Hypotonic → water in → lysis (no wall)." },
    { type: "mcq", q: "Plant cells shrink away from the wall (plasmolysis) in:", options: ["dilute solution", "concentrated sugar/salt solution", "isotonic fluid", "pure water"], answer: 1, difficulty: 2, explanation: "Water leaves toward the hypertonic outside." },
    { type: "mcq", q: "Which requires energy from respiration?", options: ["diffusion", "osmosis", "active transport", "both b and c"], answer: 2, difficulty: 1, explanation: "Uphill pumping consumes ATP." },
    { type: "mcq", q: "The best example of diffusion is:", options: ["perfume scent filling a room", "kidney reabsorbing glucose", "amoeba engulfing food", "root taking nitrate from soil"], answer: 0, difficulty: 1, explanation: "The others are active/bulk transport." },
    { type: "mcq", q: "Wilting lawn recovering after rain is mainly:", options: ["cells drinking by active transport", "vacuoles refilling water → turgor returns", "walls dissolving", "osmosis stopping"], answer: 1, difficulty: 2, explanation: "Hypotonic soil water re-enters by osmosis → turgor." },
    { type: "mcq", q: "White blood cells engulfing bacteria use:", options: ["exocytosis", "diffusion", "endocytosis", "osmosis"], answer: 2, difficulty: 3, explanation: "Bulk uptake by membrane engulfment." },
    { type: "mcq", q: "Why does adding too much fertilizer kill young plants?", options: ["fertilizer is acidic", "soil becomes hypertonic → roots lose water", "roots absorb too much sugar", "it blocks sunlight"], answer: 1, difficulty: 3, explanation: "Osmotic reversal — 'burning' = dehydration by hypertonic soil." },
    { type: "mcq", q: "The factor that makes diffusion FASTER is:", options: ["larger particles", "lower temperature", "shorter distance", "thicker membrane"], answer: 2, difficulty: 2, explanation: "Rate rises with steep gradient, heat, smallness — and falls with distance." }
  ]
};
