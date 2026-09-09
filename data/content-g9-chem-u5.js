/* Content: Grade 9 Chemistry — Unit 5: Chemical Bonding (2 topics) */
window.Lessons = window.Lessons || {};

Lessons["g9-chemistry-uc5-t1"] = {
  overview: "Atoms bond because bonded is more stable — everyone chasing the octet. When the electronegativity gap is huge, electrons are TRANSFERRED (ionic); when it's small, they're SHARED (covalent). This lesson teaches you to draw both with Lewis dot structures and to write the formulas they produce.",
  objectives: [
    "State why atoms bond (stability, octet/duet)",
    "Explain ionic bonding as electron transfer with electron diagrams",
    "Explain covalent bonding as sharing: single, double, triple",
    "Draw Lewis dot structures for simple molecules and ions",
    "Write formulas from combining powers (NaCl, MgCl₂, H₂O, CH₄)"
  ],
  simple: "Bonding = electrons rearranged so each atom ends up 8 valence (or 2 for H/He). <b>Ionic:</b> metal + non-metal with a big EN gap — sodium GIVES its spare electron to chlorine; Na⁺ and Cl⁻ snap together by opposite charges → NaCl. Transfer diagram: Na 2,8,1 → 2,8 (+1 charge); Cl 2,8,7 → 2,8,8 (−1). Charges must balance overall. <b>Covalent:</b> two non-metals share pairs — H + H each lend one → H₂ holds a shared pair; oxygen needs 2 → H₂O; carbon needs 4 → CH₄. Pairs can double (O=O, CO₂) or triple (N≡N). <b>Lewis dots</b> draw valence electrons as dots around the symbol — the chemist's shorthand for all of this.",
  detailed: "<p><b>Why bond at all?</b> Isolated atoms (except nobles) have incomplete shells; joining lowers the system's energy — bonded sodium and chlorine are genuinely more stable than the separated pair, and the difference is released as heat. Three paths to an octet: lose, gain or share. Which path runs is set by electronegativity (Unit 4's trend).</p><p><b>Ionic bonding</b> — non-negotiable transfer between a low-IE metal and a high-EN non-metal (ΔEN big, ~1.7+). Sodium (2,8,1) hands its 3s¹ electron to chlorine (2,8,7): Na → Na⁺ (2,8, neon's config) + Cl⁻ (2,8,8, argon's). Opposite charges attract in all directions, packing into a giant <b>crystal lattice</b> — no discrete 'NaCl molecule', just a 3-D grid where every Na⁺ is hugged by six Cl⁻. The electrostatic force locking that grid = <b>lattice energy</b>, why salt melts at 801°C. Writing formulas: total positive charge must equal total negative (compounds are neutral): Na⁺Cl⁻ = NaCl; Mg²⁺ needs two Cl⁻ → MgCl₂; Al³⁺ + O²⁻ cross charges → Al₂O₃ (the criss-cross 'combine valencies' trick). Naming: metal + non-metal-ide (sodium chloride, magnesium oxide); transition metals get charge numerals (iron(II)/iron(III)) — Grade 10 territory but flagged.</p><p><b>Covalent bonding</b> — when both atoms pull comparably hard (small ΔEN, usually two non-metals), neither can take; they <b>share</b> electron pairs, each pair counting toward both octets. One pair = single bond (H₂, Cl₂, H₂O, CH₄, NH₃); two = double (O₂, CO₂ — each O shares two with C); three = triple (N₂ — the very strong bond making nitrogen gas unreactive, and its breaking the energy bottleneck of fertilizer manufacture). Shared pairs are pulled unevenly when ENs differ: in H₂O oxygen hogs the electrons → partial charges δ⁻/δ⁺ → <b>polar covalent</b> bonds — water's polarity (bent shape, δ⁺ H's facing out) explains its solvent reign, high boiling point and surface tension; symmetrical CCl₄ or nonpolar pairs share evenly. Lewis structures: symbol + valence dots; bonds as lines; leftover <b>lone pairs</b> shown (water: two bonds + two lone pairs on O = octet complete). Simple covalent molecules have weak BETWEEN-molecule forces → low melting/boiling points, non-conductors — the physical contrast to salts.</p><p>Duets count too: H and He aim for 2 (every hydrogen in H₂O is happy at 2 via sharing — the octet rule's smallest exception).</p><p><b>Quick classification drill</b> (exam staple): metal+non-metal → ionic; non-metal+non-metal → covalent; check ΔEN if unsure (NaCl 2.1 → ionic; HCl 0.9 → polar covalent; Cl₂ 0 → non-polar). Then balance charges or share until octets close — formulas write themselves from configurations.</p>",
  keyTerms: [
    { term: "Ionic bond", def: "Electrostatic attraction after complete electron transfer (metal + non-metal)" },
    { term: "Covalent bond", def: "Shared electron pair between non-metals" },
    { term: "Lattice", def: "Giant 3-D grid of alternating ions — no molecules in salts" },
    { term: "Lewis structure", def: "Valence dots / bond lines around element symbols" },
    { term: "Polar covalent", def: "Unequal sharing (ΔEN moderate) → partial charges" },
    { term: "Lone pair", def: "Valence pair not used in bonding" },
    { term: "Octet rule", def: "Tendency to hold 8 valence (duet for H/He)" }
  ],
  formulas: [
    {
      name: "Charge balance (ionic formulas)",
      formula: "total + charge = total − charge",
      meaning: "Neutrality fixes subscripts: Mg²⁺ + 2Cl⁻ → MgCl₂",
      when: "Writing any ionic formula",
      example: "Ca²⁺ with NO₃⁻ → Ca(NO₃)₂ (bracket the polyatomic!)"
    }
  ],
  workedExamples: [
    {
      problem: "Show the electron transfer forming MgO (Mg 2,8,2; O 2,6).",
      calculation: "Mg sheds 2 → Mg²⁺ (2,8); O takes 2 → O²⁻ (2,8,8)",
      answer: "Mg²⁺O²⁻ → MgO, charges 1:1 balanced"
    },
    {
      problem: "Draw (describe) the Lewis structure of ammonia, NH₃.",
      answer: "N with 5 dots: three single bonds to H (3 shared pairs) + one lone pair left on N → N octet, each H duet — pyramid shape, polar"
    },
    {
      problem: "Write formulas: aluminium chloride, sodium oxide, carbon tetrachloride.",
      answer: "Al³⁺+3Cl⁻ → AlCl₃; 2Na⁺+O²⁻ → Na₂O; C shares 4 → CCl₄ (covalent, no criss-cross — prefix names flag it)"
    },
    {
      problem: "Why does NaCl conduct when dissolved but not as a solid?",
      answer: "Conduction needs MOBILE charges: the lattice locks ions in place; water frees them to drift to the electrodes"
    }
  ],
  commonMistakes: [
    "'Sharing' in ionic bonds (it's transfer — ions carry FULL charges, not shared pairs)",
    "Writing NaCl₂ for sodium + chlorine (charges must balance: Na⁺Cl⁻)",
    "Forgetting brackets on polyatomic groups: CaNO₃₃ instead of Ca(NO₃)₂",
    "Counting bond pairs twice wrong in Lewis diagrams (lone pairs missing)",
    "Claiming ionic compounds form molecules (giant lattice — 'formula unit' is the word)",
    "Confusing polar molecules with polar bonds' presence alone (shape can cancel them: CO₂ nonpolar despite polar C=O)"
  ],
  applications: [
    "Salt vs sugar vs wax: melting behavior at home literally tests ionic/covalent-molecular bonding",
    "Fertilizer industry: breaking N₂'s triple bond (Haber process) feeds the world — bond strength = economics",
    "Water as universal solvent: polarity dissolves ions — biology and your bloodstream run on it",
    "Dental & medicine: ionic hydroxyapatite in enamel; polar/non-polar drug solubility rules",
    "Nail polish remover, dry cleaning, fuel mixing: 'like dissolves like' is ΔEN applied"
  ],
  summary: "Atoms bond to close octets. Big electronegativity gap → electron transfer → ions → lattice (NaCl, MgO) — formula from charge balance. Small gap → shared pairs (H₂O, CH₄, O₂, N₂) — Lewis dots track every electron; uneven sharing = polarity. Ionic: high melting, conducts dissolved; covalent: soft, insulating. Configurations + EN trends fully predict which story any pair tells.",
  visuals: [],
  questions: [
    { type: "mcq", q: "An ionic bond forms by:", options: ["sharing pairs", "complete electron transfer", "proton exchange", "magnetism"], answer: 1, difficulty: 1, explanation: "Metal gives, non-metal takes — full charges result." },
    { type: "mcq", q: "The formula of magnesium chloride is:", options: ["MgCl", "MgCl₂", "Mg₂Cl", "Mg(Cl₂)"], answer: 1, difficulty: 2, explanation: "Mg²⁺ needs two Cl⁻ for neutrality." },
    { type: "mcq", q: "A covalent bond consists of:", options: ["transferred electrons", "a shared electron pair", "ionic attraction", "neutron pairs"], answer: 1, difficulty: 1, explanation: "Both atoms count the pair toward octets." },
    { type: "mcq", q: "How many bonds can carbon form (2,4)?", options: ["1", "2", "3", "4"], answer: 3, difficulty: 1, explanation: "Four valence → four shares — organic chemistry's backbone." },
    { type: "mcq", q: "In a triple bond, how many electrons are shared?", options: ["3", "6", "9", "2"], answer: 1, difficulty: 2, explanation: "Three pairs = 6 electrons (N₂)." },
    { type: "mcq", q: "Solid NaCl doesn't conduct electricity because:", options: ["it has no charges", "ions are fixed in the lattice", "electrons are shared", "it's a covalent solid"], answer: 1, difficulty: 2, explanation: "Charges present but immobile until dissolved/melted." },
    { type: "mcq", q: "Which pair forms an ionic compound?", options: ["H and O", "Na and Cl", "C and O", "N and N"], answer: 1, difficulty: 1, explanation: "Metal + non-metal, huge ΔEN." },
    { type: "mcq", q: "Water's O–H bonds are best called:", options: ["non-polar covalent", "polar covalent", "ionic", "metallic"], answer: 1, difficulty: 2, explanation: "O hogs the shared pairs (ΔEN 1.4)." },
    { type: "mcq", q: "A Lewis dot structure shows:", options: ["only nucleus particles", "valence electrons as dots around symbols", "the full atom to scale", "bond energies"], answer: 1, difficulty: 1, explanation: "Inner shells stay hidden — chemistry is the outer tier." },
    { type: "mcq", q: "Why is N₂ gas so unreactive?", options: ["nitrogen is a metal", "its triple bond is very strong to break", "it has no electrons", "it's heavier than air"], answer: 1, difficulty: 3, explanation: "Bond-breaking costs energy; 941 kJ/mol is steep." }
  ]
};

Lessons["g9-chemistry-uc5-t2"] = {
  overview: "Metallic bonding is the odd one out: a lattice of positive ions swimming in a sea of delocalized electrons. That one image explains why metals conduct, bend, shine — and lets you predict ionic vs covalent vs metallic behavior from a formula alone.",
  objectives: [
    "Describe metallic bonding as positive ions in a delocalized electron sea",
    "Link the model to conductivity, malleability, ductility and luster",
    "Compare melting/boiling trends across ionic, covalent and metallic solids",
    "Predict bond type from an element pair or formula",
    "Match properties to bonding in everyday materials"
  ],
  simple: "Metals bond by <b>pooling their valence electrons</b>: the atoms become + ions fixed in a grid, while their outer electrons break free and flood the structure as a <b>delocalized sea</b>. That mobile sea holds everything together AND explains everything: it carries charge → <b>conducts electricity</b>; it lubricates sliding layers → <b>malleable/ductile</b> (bendable, wire-drawable); it bounces light → <b>shiny luster</b>; it carries heat fast → <b>thermal conductivity</b>. Compare: <b>ionic</b> solids (hard, brittle, high melting, conduct only dissolved), <b>covalent simple</b> (soft, low melting, never conduct), <b>giant covalent</b> (diamond, SiO₂ — network of bonds, extreme hardness). Predict from formula: metal+non-metal→ionic; non-metals→covalent; metal alone/alloy→metallic.",
  detailed: "<p><b>Why metals don't fit ionic or covalent boxes:</b> sodium's 2,8,1 can't gain seven electrons, and sharing one with a neighbor achieves nothing. Instead, all valence electrons detach into <b>delocalized</b> orbitals spanning the whole crystal — positive Na⁺/Fe²⁺/Al³⁺ cores in a shared electron fluid. The bonding force = attraction of the whole cation lattice to the electron sea — non-directional, which is the key to every property below.</p><p><b>Property → model reasoning</b> (the Grade 9 gold standard: explain, don't list): <b>Electrical conductivity</b> — the sea is already mobile charge; no melting needed (unlike salts). <b>Thermal conductivity</b> — free electrons race, colliding and passing energy along (why a metal spoon heats in boiling tea while a wooden one doesn't). <b>Malleability & ductility</b> — ion layers can SLIDE over each other because the sea flows and keeps the grip intact after displacement; ionic crystals can't (sliding brings like charges face-to-face → crack — the brittness explained at the same level). <b>Luster</b> — delocalized electrons interact with light broadly and re-emit it → polish shine. <b>Strength range</b> — sea density scales with charge and size: Mg²⁺ with 2 electrons per atom is stiffer than Na⁺'s 1; melting points of metals run wide (Hg −39°C to W 3,422°C) but generally high, bonding still strong.</p><p><b>Three-way property comparison (exam table):</b> ionic — hard, brittle, high MP/BP, conducts dissolved/molten only, soluble in water (salt); covalent simple molecular — soft/waxy, LOW MP/BP (weak intermolecular forces, NOT broken bonds — the classic wording trap), no conduction, soluble in organic solvents (iodine in alcohol); giant covalent — diamond/carbide/quartz: every atom bond-linked into a network → extreme hardness, extreme MP, insulating (diamond) with exceptions (graphite conducts along its layers — delocalized electrons there too). Metallic — conducts hot and cold, malleable, shiny, insoluble, MP varies wide.</p><p><b>Alloys:</b> melt metals together (copper + zinc = brass; iron + carbon = steel) and the different-sized atoms DISTORT the lattice — layers can't slide as easily → harder and stronger than the pure metal; bronze (Cu+Sn) made it into history as a whole age. Stainless steel's chromium passivates with a tough oxide skin = corrosion-proofing via chemistry at the same time.</p><p><b>Prediction flowchart to drill:</b> (1) metal + non-metal? → ionic — balance charges; (2) non-metals only? → covalent — share to octets; (3) metal(s) alone (element or mixture)? → metallic; (4) carbon network? check giant covalent (diamond, graphite) as the special molecular case. From bond type, read the property card backwards and answer any 'why does X behave thus' question with the structural model, not the observation loop.</p>",
  keyTerms: [
    { term: "Delocalized electrons", def: "Valence electrons free to move through the whole metal" },
    { term: "Metallic bond", def: "Attraction: cation lattice ↔ electron sea" },
    { term: "Malleable / ductile", def: "Hammerable into sheets / drawable into wire" },
    { term: "Giant covalent", def: "Network solid (diamond, quartz) — bonds everywhere" },
    { term: "Alloy", def: "Metal mixture whose distorted lattice hardens it" },
    { term: "Intermolecular force", def: "Weak attraction BETWEEN molecules — the low-MP culprit" }
  ],
  formulas: [
    {
      name: "Melting-point logic",
      formula: "what melts = what you BREAK",
      meaning: "Molecular substances break intermolecular forces (cheap); giant structures break real bonds (pricey)",
      when: "Explaining why I₂ melts low but diamond never does",
      example: "ice 0°C (H-bonds) vs NaCl 801°C (ionic) vs Si 1,414°C (covalent network)"
    }
  ],
  workedExamples: [
    {
      problem: "Use the electron-sea model to explain why copper wire bends but a salt crystal shatters.",
      answer: "In copper, sliding ion layers stay glued by the flowing sea; in NaCl, sliding aligns like charges and repulsion splits the lattice"
    },
    {
      problem: "Predict melting: sodium vs neon vs diamond — justify.",
      answer: "Neon lowest (only weak intermolecular forces, liquid at −246°C); sodium modest metal (sea, 98°C); diamond highest (every bond must stretch to flow — network)"
    },
    {
      problem: "Classify bond type: Fe, H₂S, K₂O, SiC.",
      answer: "Fe metallic (pure metal); H₂S covalent (two non-metals); K₂O ionic (metal+non-metal, charges 1:2 balance); SiC giant covalent network — the carbide hardness case"
    }
  ],
  commonMistakes: [
    "'Metals conduct because electrons transfer between atoms' — they FLOW THROUGH the sea; no atoms need to change identity",
    "Saying covalent substances have weak BONDS when melted (bonds stay; it's the between-molecule forces that lose)",
    "Expecting all metals to have high MP (mercury is liquid; gallium melts in your hand)",
    "Confusing malleability (sheets) with ductility (wires) — both from non-directional bonding",
    "Calling diamond metallic because it's carbon like graphite (no sea — all four electrons bonded)",
    "Brass is not a compound (variable composition — mixture/alloy, formula-free)"
  ],
  applications: [
    "Wire & cookware choice: copper/aluminum = best-value sea conductivity; steel handles = strength",
    "Ethiopian heritage crafts: bronze-casting church bells and crosses is applied alloy hardening",
    "Construction rebar: steel's alloy strength + concrete chemistry protect infrastructure",
    "Jewelry: gold's pure metallic softness vs alloying back to durability (18k vs 24k)",
    "Battery terminals corroding: ionic crust on metallic contacts shows all three bondings meeting"
  ],
  summary: "Metallic bonding = cation lattice + delocalized electron sea, and every metal property reads off the model: mobile charges conduct, sliding layers bend, electrons shine light. Ionic (brittle, salty-high-MP), simple covalent (soft, low-MP), giant covalent (hard networks) and metallic (strong, conductive) form the property grid — and metal/non-metal position alone predicts which cell a substance belongs in.",
  visuals: [],
  questions: [
    { type: "mcq", q: "In metallic bonding, the valence electrons are:", options: ["paired with one atom", "delocalized through the lattice", "transferred to anions", "in the nucleus"], answer: 1, difficulty: 1, explanation: "The shared 'sea' defines the model." },
    { type: "mcq", q: "Metals conduct electricity because:", options: ["atoms vibrate", "mobile electrons drift through the structure", "ions transfer bonds", "they are shiny"], answer: 1, difficulty: 1, explanation: "Free charge carriers — no melting needed." },
    { type: "mcq", q: "Ionic crystals are brittle because sliding layers:", options: ["lubricate", "align like charges → repel and split", "share electrons", "melt locally"], answer: 1, difficulty: 3, explanation: "Opposites must stay offset; slip breaks it." },
    { type: "mcq", q: "Which melts at the LOWEST temperature?", options: ["NaCl", "diamond", "iodine (simple covalent)", "iron"], answer: 2, difficulty: 2, explanation: "Only weak intermolecular forces give way." },
    { type: "mcq", q: "An alloy is best described as:", options: ["a compound of metals", "a mixture with distorted lattice → harder", "a pure metal", "an ionic crystal"], answer: 1, difficulty: 2, explanation: "Different atom sizes jam layer-slipping." },
    { type: "mcq", q: "Malleability means a metal can be:", options: ["turned to wire", "beaten into sheets", "dissolved in acid", "magnetized"], answer: 1, difficulty: 1, explanation: "Wires = ductility — a different shape, same cause." },
    { type: "mcq", q: "Which substance conducts only when dissolved or molten?", options: ["copper", "sugar", "sodium chloride", "graphite"], answer: 2, difficulty: 2, explanation: "Ions exist but need mobility to carry charge." },
    { type: "mcq", q: "Diamond's extreme hardness comes from:", options: ["metallic sea", "a giant covalent network", "ionic charges", "tightly packed molecules"], answer: 1, difficulty: 1, explanation: "Every carbon bonded into the whole." },
    { type: "mcq", q: "Predict: an element that is shiny, bendable and conducts when cold is:", options: ["a non-metal", "a metal", "an ionic solid", "a molecular gas"], answer: 1, difficulty: 1, explanation: "All four are sea-model signatures." },
    { type: "mcq", q: "Lustre (metal shine) is caused by:", options: ["surface oxides", "delocalized electrons interacting with light", "ionic reflection", "trapped air"], answer: 1, difficulty: 3, explanation: "The sea absorbs and re-emits across visible light." }
  ]
};
