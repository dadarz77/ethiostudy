/* Content: Grade 11 Chemistry — Unit 6: Organic Chemistry (5 topics) */
window.Lessons = window.Lessons || {};

Lessons["g11-chemistry-uc6-t1"] = {
  overview: "Alcohols (R–OH) and ethers (R–O–R) are oxygen's two everyday faces in organic chemistry. The –OH group makes alcohols hydrogen-bonding, water-soluble (small ones), oxidizable fuels and solvents; ethers, lacking an O–H, are inert, volatile solvents. Naming, classification and reactions — plus ethanol's cultural and physiological story — fill this topic.",
  objectives: [
    "Name and classify alcohols (1°, 2°, 3°) and ethers",
    "Explain boiling-point and solubility trends via hydrogen bonding",
    "Write preparation routes: hydration, fermentation, Williamson synthesis",
    "Predict oxidation products by alcohol class",
    "Describe ethanol's uses, effects and hazards"
  ],
  simple: "Swap a hydrogen on a hydrocarbon for an –OH group and you have an alcohol: methanol (CH₃OH, toxic — blinds), ethanol (C₂H₅OH, drinks and fuel), propanol… The –OH makes them social: they hydrogen-bond, so they boil far higher than alkanes of similar mass (ethanol 78 °C vs propane −42 °C) and small ones dissolve in water completely. Classify by who holds the –OH: primary (carbon attached to one other carbon), secondary, tertiary — the order decides oxidation: 1° → aldehyde → acid; 2° → ketone; 3° → refuses. Ethers are alcohols' quiet twins: oxygen between two carbons (CH₃–O–CH₃). No O–H means no hydrogen bonding between their own molecules → low boiling points (dimethyl ether −24 °C) and chemical inertness → perfect solvents and anaesthetics. Make alcohols by hydrating alkenes (industry) or fermenting sugars (Ethiopian tej, araqe, wine — yeast's anaerobic gift: C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂). Make ethers by Williamson synthesis: alkoxide + haloalkane. Ethanol: fuel, solvent, disinfectant, drink — and a depressant whose oxidation in the liver (to acetaldehyde, the hangover culprit) saturates at ~one unit per hour.",
  detailed: "<p><b>Naming & classification.</b> Alcohol: alkane name + -ol, –OH gets lowest locant (propan-2-ol). Polyols: ethane-1,2-diol (antifreeze), propane-1,2,3-triol (glycerol). Class = carbons attached to the C–OH: 1° (ethanol), 2° (propan-2-ol), 3° (2-methylpropan-2-ol). Ethers: alkoxyalkane (methoxyethane) or common dialkyl ether names.</p><p><b>Physical properties.</b> Hydrogen bonding: alcohols associate → high b.p. (butanol 118 °C vs pentane 36 °C, similar mass). Solubility: –OH H-bonds with water, but the hydrocarbon tail resists — methanol/ethanol/propanol miscible; from butanol down, solubility drops sharply; long-chain alcohols are waxes. Branching lowers b.p. (surface area). Ethers: accept H-bonds from water (slightly soluble) but don't donate → b.p. ≈ alkane level; diethyl ether 35 °C, famously volatile and flammable.</p><p><b>Preparation.</b> Industrial: hydration of ethene (steam, H₃PO₄/SiO₂, 300 °C, 60 atm — reversible, Le Chatelier in action). Laboratory: reduction of carbonyls (LiAlH₄/NaBH₄), Grignard + carbonyl (chain building), hydrolysis of haloalkanes (aqueous OH⁻, reflux). Fermentation: yeast anaerobic respiration, 30–35 °C, pH ~5, 5–14% ethanol ceiling (ethanol denatures the yeast beyond that); distillation concentrates (Ethiopian araqe). Ethers: Williamson — RONa + R'X → ROR' (works best with 1° halides; 3° eliminate instead). Dehydration of alcohols: conc. H₂SO₄, 170 °C → alkene (elimination) vs 140 °C → ether (substitution) — temperature selects the pathway.</p><p><b>Oxidation (the classification test).</b> Acidified K₂Cr₂O₇ (orange → green) or KMnO₄: 1° + mild/distill → aldehyde (RCHO); strong/reflux → carboxylic acid (RCOOH). 2° → ketone (RCOR'), stops there. 3° → no reaction (no C–H to remove) — the distinguishing experiment. Combustion: all burn; ethanol's clean flame makes it a cooking fuel (Ethiopian bioethanol stoves — clean-air win over charcoal).</p><p><b>Ether chemistry.</b> Unreactive to bases, oxidants, Na metal — hence solvents and Grignard media. Old general anaesthetic (diethyl ether) — flammability ended clinical use. MTBE (methyl tert-butyl ether) replaced lead in gasoline as an octane booster and oxygenate — groundwater pollutant, a cautionary substitution. Epoxides (cyclic ethers): strained, reactive — ethylene oxide → ethanoic acid, glycols, sterilant.</p><p><b>Ethanol: biology & society.</b> CNS depressant (disinhibition first, sedation after); metabolized by liver alcohol dehydrogenase → ethanal (hangover, toxic, carcinogenic) → ethanoate → CO₂ + H₂O; rate ~7 g/hour, zero-order (enzyme saturated — kinetics from Unit 4!). Methanol's toxicity (formic acid blinds) exists because liver enzymes oxidize it too — the antidote is ethanol (competitive inhibition). Uses: beverage, solvent, disinfectant (70% best — needs water to denature proteins), fuel (E10–E100; Ethiopia's sugar-ethanol plants), chemical feedstock (to ethene, ethanoic acid).</p>",
  keyTerms: [
    { term: "Hydroxyl group", def: "–OH — the alcohol functional group" },
    { term: "1°/2°/3° alcohol", def: "C–OH carbon attached to 1/2/3 other carbons" },
    { term: "Ether linkage", def: "C–O–C between two alkyl groups" },
    { term: "Williamson synthesis", def: "alkoxide + 1° haloalkane → ether" },
    { term: "Fermentation", def: "anaerobic yeast conversion of sugar → ethanol + CO₂" },
    { term: "Zero-order metabolism", def: "liver clears ethanol at constant rate — saturation" }
  ],
  formulas: [
    {
      name: "Fermentation",
      formula: "C₆H₁₂O₆ → 2C₂H₅OH + 2CO₂",
      meaning: "Yeast's anaerobic energy harvest",
      vars: [{ name: "30–35 °C", meaning: "optimal, enzymes denature hotter", unit: "—" }],
      units: "—",
      when: "Beverages, biofuel",
      example: "180 g glucose → 92 g ethanol (theoretical 51% by mass)"
    },
    {
      name: "Oxidation ladder",
      formula: "RCH₂OH →[O] RCHO →[O] RCOOH",
      meaning: "1° alcohols climb; 2° stop at ketone; 3° refuse",
      vars: [{ name: "[O]", meaning: "acidified dichromate", unit: "orange→green" }],
      units: "—",
      when: "Classifying alcohols",
      example: "Ethanol → ethanal → ethanoic acid (vinegar)"
    }
  ],
  workedExamples: [
    {
      problem: "Name and classify: CH₃CH(OH)CH₃; (CH₃)₃COH; CH₃OCH₂CH₃.",
      given: "structures",
      formula: "-ol naming, class by C–OH attachments",
      substitution: "propan-2-ol (2°); 2-methylpropan-2-ol (3°); methoxyethane (ether)",
      calculation: "—",
      answer: "2° alcohol, 3° alcohol, ether — only the first two oxidize"
    },
    {
      problem: "Explain why butan-1-ol (118 °C) boils far higher than pentane (36 °C) despite similar molar mass.",
      given: "C₄H₉OH vs C₅H₁₂",
      formula: "H-bonding",
      substitution: "–OH molecules associate via strong intermolecular H-bonds",
      calculation: "extra energy to separate them",
      answer: "Hydrogen bonding — the same force that makes water anomalously high-boiling"
    },
    {
      problem: "A bottle of 'alcohol X' oxidizes to a compound giving silver mirror with Tollens'. What class is X?",
      given: "silver mirror = aldehyde",
      formula: "only 1° alcohols reach aldehydes",
      substitution: "2° → ketone (no mirror); 3° → nothing",
      calculation: "X is primary",
      answer: "Primary alcohol — the aldehyde test reads the classification backwards"
    },
    {
      problem: "Choose conditions: ethanol → ethene vs ethanol → ethoxyethane.",
      given: "same reagent",
      formula: "conc. H₂SO₄ temperature switch",
      substitution: "170 °C: elimination to alkene; 140 °C: intermolecular substitution to ether",
      calculation: "T selects pathway",
      answer: "Hot = alkene, warm = ether — kinetics vs mechanism competition"
    },
    {
      problem: "Why is 70% ethanol a better disinfectant than absolute ethanol?",
      given: "denaturation needs water",
      formula: "water co-denatures proteins",
      substitution: "pure ethanol dehydrates the cell wall too fast, protecting microbes inside",
      calculation: "70% penetrates and unfolds proteins",
      answer: "Water is a co-agent — protein denaturation requires it; 70% kills, 100% merely preserves"
    }
  ],
  commonMistakes: [
    "Classifying alcohols by the –OH position instead of carbons attached to the C–OH",
    "Claiming 3° alcohols oxidize to ketones — no C–H on the carbinol carbon = no reaction",
    "Ethers called 'able to hydrogen bond with themselves' — no O–H, only accept from water",
    "Fermentation written as aerobic — it's anaerobic; oxygen routes yeast to respiration (no ethanol)",
    "Methanol confused with ethanol — one carbon, and blindingly toxic",
    "Williamson synthesis attempted with 3° halides — elimination wins",
    "Ethanol metabolism treated as first-order — the liver enzyme saturates (zero-order)"
  ],
  applications: [
    "Biofuel: Ethiopian sugar-cane ethanol (E100 buses trials) — clean cooking stoves replacing charcoal",
    "Traditional brewing: tej (honey wine), tela, araqe distillation — fermentation chemistry in culture",
    "Medical: ethanol as methanol-antidote (competitive inhibition), 70% disinfectant, solvent in tinctures",
    "Industry: methanol → formaldehyde (resins), ethanol → ethene (plastic feedstock)",
    "Lab craft: diethyl ether as extraction solvent and Grignard medium — inertness exploited"
  ],
  summary: "Alcohols carry –OH: hydrogen bonding gives high boiling points and water solubility (small ones); classification 1°/2°/3° predicts oxidation (aldehyde→acid, ketone, none). Routes: hydration of alkenes, fermentation, reduction, Grignard. Ethers (C–O–C) skip H-bonding — volatile, inert solvents made by Williamson synthesis. Ethanol is the flagship: fuel, disinfectant, solvent, beverage — and a zero-order-metabolized depressant whose acetaldehyde intermediate drives hangovers and whose liver chemistry explains methanol's danger and ethanol's antidote role.",
  visuals: [
    { type: "comparison", config: { title: "Alcohol vs ether", left: { name: "R–OH alcohol", items: ["H-bonds → high b.p.", "small ones water-soluble", "oxidizable (1°, 2°)", "makes H₂ with Na"] }, right: { name: "R–O–R ether", items: ["no O–H → low b.p.", "inert solvent", "no oxidation", "anaesthetic history"] } } },
    { type: "steps", config: { title: "Oxidation by class", steps: [{ label: "1° alcohol", detail: "→ aldehyde → acid" }, { label: "2° alcohol", detail: "→ ketone (stops)" }, { label: "3° alcohol", detail: "→ no reaction" }, { label: "Test", detail: "orange Cr₂O₇²⁻ → green" }] } },
    { type: "lineGraph", config: { title: "Boiling points (°C)", xLabel: "molar mass (g/mol)", yLabel: "b.p.", series: [{ label: "alcohols", color: "#3b82f6", points: [[32, 65], [46, 78], [60, 97], [74, 118]] }, { label: "alkanes", color: "#94a3b8", points: [[30, -42], [44, -1], [58, 36], [72, 69]] }] } }
  ],
  questions: [
    { type: "mcq", q: "Which oxidizes to a ketone?", options: ["1° alcohol", "2° alcohol", "3° alcohol", "ether"], answer: 1, difficulty: 1, explanation: "2° → ketone, stops there" },
    { type: "mcq", q: "The –OH makes alcohols:", options: ["acidic", "H-bonding", "volatile", "inert"], answer: 1, difficulty: 1, explanation: "Hydrogen bonding dominates their physical properties" },
    { type: "mcq", q: "Williamson synthesis makes:", options: ["alcohols", "ethers", "aldehydes", "acids"], answer: 1, difficulty: 2, explanation: "alkoxide + haloalkane → ether" },
    { type: "mcq", q: "Methanol is dangerous because:", options: ["flammable only", "oxidizes to formic acid (blindness)", "it's an ether", "non-metabolizable"], answer: 1, difficulty: 2, explanation: "Liver turns it to methanoic acid — optic nerve damage" },
    { type: "tf", q: "Diethyl ether hydrogen-bonds with itself.", answer: false, difficulty: 2, explanation: "No O–H — it accepts H-bonds from water but can't donate" },
    { type: "tf", q: "Fermentation requires oxygen.", answer: false, difficulty: 2, explanation: "Anaerobic — O₂ switches yeast to respiration" },
    { type: "calc", q: "Glucose 180 g → theoretical ethanol mass?", answer: "92", difficulty: 2, explanation: "C₆H₁₂O₆ → 2C₂H₅OH: 180 g → 92 g" },
    { type: "calc", q: "Butanol solubility vs butane in water — which dissolves more?", answer: "butanol|1", difficulty: 2, explanation: "The –OH H-bonds with water; butane can't" },
    { type: "short", q: "Reagent for 1°→aldehyde (distil off):", answer: "acidified potassium dichromate|k2cr2o7|dichromate|pcc", difficulty: 2, explanation: "Acidified K₂Cr₂O₇, distill immediately to stop at aldehyde" },
    { type: "concept", q: "Why does one standard drink take ~an hour to clear regardless of body size?", answer: "zero order|enzyme saturated|constant rate|alcohol dehydrogenase", difficulty: 3, explanation: "Liver alcohol dehydrogenase operates saturated (zero-order kinetics from Unit 4): a fixed ~7 g/hour is processed no matter the concentration — the bottleneck enzyme, not the body's volume, sets the clock" }
  ]
};

Lessons["g11-chemistry-uc6-t2"] = {
  overview: "The carbonyl group C=O defines two families: aldehydes (R–CHO, terminal) and ketones (R–CO–R, internal). Polar double bond, nucleophilic addition chemistry, the silver/Fehling's tests that tell them apart, and everyday roles from formaldehyde's resins to acetone's nail-polish removal.",
  objectives: [
    "Name and distinguish aldehydes and ketones",
    "Explain carbonyl polarity and nucleophilic addition",
    "Predict products: reduction, HCN addition, oxidation",
    "Use Tollens' and Fehling's tests to tell the families apart",
    "Give uses and hazards of key carbonyls"
  ],
  simple: "A carbon double-bonded to oxygen is a carbonyl. If it sits at the chain end with an H attached — aldehyde (ethanal CH₃CHO, methanal HCHO). If it's buried between two carbons — ketone (propanone CH₃COCH₃, acetone). The C=O is polar: oxygen hogs electrons, leaving carbon δ+ — a target for nucleophiles (CN⁻, H⁻, water). That's the core reaction: nucleophilic addition — the π bond snaps open and two new groups attach to the carbonyl carbon. Aldehydes are hungrier (less crowded, less electron-fed) AND easier to oxidize: they carry that C–H the oxidizer can grab → carboxylic acids; ketones refuse. That difference is the test: Tollens' silver mirror or Fehling's red precipitate — aldehydes yes, ketones no (except the α-hydroxy ones). Reduction turns both to alcohols (aldehyde → 1°, ketone → 2°) — NaBH₄ delivers H⁻. HCN adds to give hydroxynitriles (cyanohydrins) — chain-building. Everyday: methanal (formalin — embalming, resins), ethanal (vinegar's precursor), propanone (solvent, diabetic breath marker), butanal (fragrance).",
  detailed: "<p><b>Structure & naming.</b> Aldehyde: -al suffix (ethanal), formyl group –CHO always terminal — hence methanal is the only one with H on both sides. Ketone: -one (propanone), carbonyl internal, lowest locant. Both sp², trigonal planar at the carbonyl carbon, bond angles ~120°.</p><p><b>Carbonyl polarity & addition.</b> C=O: oxygen more electronegative → C δ+, O δ−. Nucleophiles attack carbon; the π electrons move to oxygen (alkoxide), then protonate. General: C=O + Nu–H → C(OH)(Nu). Examples: HCN (CN⁻ attack → hydroxynitrile — racemic mixture from planar attack both faces); NaBH₄/LiAlH₄ (H⁻ delivery → alcohol); water (gem-diols — hydrates, significant only for reactive aldehydes like methanal/chloral); alcohols (hemiacetals/acetals — sugar ring chemistry!).</p><p><b>Reactivity order.</b> Aldehydes > ketones: (1) steric — terminal carbon is exposed; (2) electronic — two alkyl groups donate electron density into Cδ+, shielding ketones. Explains: aldehydes oxidize readily (C–H bond is the handle), ketones resist mild oxidants; aldehydes add HCN faster.</p><p><b>Tests.</b> Tollens' (ammoniacal Ag⁺): aldehyde reduces Ag⁺ → silver mirror; ketone no. Fehling's/Benedict's (Cu²⁺ citrate/carbonate): aldehyde → red Cu₂O precipitate (ketone no) — the blood-glucose and urine-sugar screen. 2,4-DNP (Brady's): BOTH give orange precipitate — the carbonyl confirmation, then Tollens' differentiates.</p><p><b>Preparation.</b> Aldehydes: controlled oxidation of 1° alcohols (distil immediately — reflux overshoots to acid); Rosenmund (acyl chloride + H₂/Pd-BaSO₄); hydroformylation of alkenes (industrial). Ketones: oxidation of 2° alcohols; Friedel–Crafts acylation (aromatic ketones); hydration of alkynes (Markovnikov — propyne → propanone).</p><p><b>Key members.</b> Methanal: gas, 40% = formalin — preservative, urea-formaldehyde resins (adhesives — off-gassing concern); suspected carcinogen. Ethanal: intermediate in ethanol metabolism (the hangover molecule), perfumery. Propanone: solvent (nail polish remover), produced industrially via cumene process; in diabetes, fat metabolism makes it — fruity breath, a diagnostic marker. α,β-unsaturated carbonyls (enalones): conjugation adds 1,4-addition chemistry (later courses).</p>",
  keyTerms: [
    { term: "Carbonyl group", def: "C=O — polar, planar, electrophilic carbon" },
    { term: "Nucleophilic addition", def: "Nu attacks Cδ+, π opens to O — the carbonyl reaction" },
    { term: "Tollens' reagent", def: "Ag⁺(NH₃)₂ — silver mirror with aldehydes" },
    { term: "Fehling's/Benedict's", def: "Cu²⁺ → red Cu₂O with aldehydes" },
    { term: "Hydroxynitrile", def: "HCN addition product — cyanohydrin" },
    { term: "2,4-DNP", def: "Brady's reagent — orange ppt confirms any carbonyl" }
  ],
  formulas: [
    {
      name: "Nucleophilic addition",
      formula: "R₂C=O + HCN → R₂C(OH)CN",
      meaning: "CN⁻ attacks Cδ+, O protonates",
      vars: [{ name: "R₂C=O", meaning: "aldehyde or ketone", unit: "—" }],
      units: "—",
      when: "Chain extension, stereochem",
      example: "Ethanal → 2-hydroxypropanenitrile (racemic)"
    },
    {
      name: "Oxidation split",
      formula: "RCHO + [O] → RCOOH | RCOR' + [O] → no reaction",
      meaning: "The aldehyde C–H is the oxidizable handle",
      vars: [{ name: "[O]", meaning: "mild: Tollens/Fehling or dichromate", unit: "—" }],
      units: "—",
      when: "Distinguishing tests",
      example: "Ethanal → ethanoic acid; propanone unchanged"
    }
  ],
  workedExamples: [
    {
      problem: "A compound C₃H₆O gives an orange precipitate with 2,4-DNP but no silver mirror. Identify it.",
      given: "carbonyl yes, aldehyde no",
      formula: "tests logic",
      substitution: "2,4-DNP+ → C=O present; Tollens− → not aldehyde",
      calculation: "must be the ketone isomer",
      answer: "Propanone (acetone) — the only C₃H₆O ketone"
    },
    {
      problem: "Write products: (a) propanal + Tollens'; (b) butanone + NaBH₄; (c) ethanal + HCN.",
      given: "three reactions",
      formula: "oxidation / reduction / addition",
      substitution: "(a) propanoate (mirror); (b) butan-2-ol; (c) 2-hydroxypropanenitrile",
      calculation: "—",
      answer: "Acid salt, 2° alcohol, cyanohydrin — the carbonyl trio"
    },
    {
      problem: "Explain why methanal is the most reactive aldehyde toward nucleophilic addition.",
      given: "no alkyl groups",
      formula: "steric + electronic",
      substitution: "two H's: zero crowding, zero electron donation to Cδ+",
      calculation: "most exposed, most positive carbon",
      answer: "Nothing shields or feeds the electrophilic carbon — nucleophiles hit it hardest"
    },
    {
      problem: "How would you prepare ethanal from ethanol, and why not just reflux with dichromate?",
      given: "1° alcohol",
      formula: "controlled oxidation",
      substitution: "acidified K₂Cr₂O₇, distil ethanal as it forms (b.p. 21 °C)",
      calculation: "reflux exposes it to [O] longer → ethanoic acid",
      answer: "Distillation escapes the oxidizer — reflux overshoots to the acid"
    },
    {
      problem: "Diabetic breath smells of propanone. Connect this to carbonyl chemistry.",
      given: "fat metabolism",
      formula: "ketone bodies",
      substitution: "excess fat → acetoacetate → decarboxylates to propanone",
      calculation: "volatile ketone exits via lungs",
      answer: "The simplest ketone — its volatility and characteristic smell betray uncontrolled glucose metabolism"
    }
  ],
  commonMistakes: [
    "Drawing the aldehyde group as –COH — it's –CHO (H on carbon, not oxygen)",
    "Ketones said to oxidize to acids — no C–H on the carbonyl, mild oxidants fail",
    "Tollens' used as 'the carbonyl test' — it's the ALDEHYDE test; 2,4-DNP confirms carbonyl",
    "NaBH₄ thought to reduce C=C — it targets the polar C=O selectively",
    "HCN addition ignoring racemization — planar carbonyl → attack both faces → racemic",
    "Methanal treated as liquid — it's a gas; formalin is its 40% solution",
    "Fehling's positive for all sugars — only reducing sugars (fructose's α-hydroxy ketone is the exception)"
  ],
  applications: [
    "Medicine: Fehling's/Benedict's urine-glucose screening — a 19th-century test still in clinics",
    "Materials: urea-formaldehyde and phenol-formaldehyde resins — plywood, adhesives, Bakelite",
    "Forensics & health: breath acetone as a non-invasive diabetes marker",
    "Perfumery & flavor: cinnamaldehyde (cinnamon), vanillin (aldehyde on an aromatic ring)",
    "Synthesis: cyanohydrins → α-hydroxy acids (mandelic acid from bitter almonds' chemistry)"
  ],
  summary: "Carbonyl polarity (Cδ+=Oδ−) drives nucleophilic addition — HCN, NaBH₄, water, alcohols. Aldehydes (terminal –CHO) beat ketones in reactivity: less crowded, less electron-shielded, and oxidizable (C–H handle) to acids; ketones resist. Tollens' silver mirror and Fehling's red Cu₂O flag aldehydes; 2,4-DNP flags any carbonyl. Reduction: aldehyde → 1° alcohol, ketone → 2°. Methanal (resins, formalin), ethanal (metabolism), propanone (solvent, diabetes marker) anchor the family's real-world face.",
  visuals: [
    { type: "comparison", config: { title: "Aldehyde vs ketone", left: { name: "R–CHO", items: ["terminal C=O", "oxidizes easily", "Tollens' + mirror", "reduces → 1° alcohol"] }, right: { name: "R–CO–R'", items: ["internal C=O", "resists oxidation", "Tollens' −", "reduces → 2° alcohol"] } } },
    { type: "steps", config: { title: "Nucleophilic addition", steps: [{ label: "Nu⁻ attacks Cδ+", detail: "π electrons to O" }, { label: "Alkoxide forms", detail: "O⁻ intermediate" }, { label: "Protonation", detail: "O⁻ + H⁺ → OH" }, { label: "Product", detail: "two groups on one C" }] } },
    { type: "qa", config: { title: "Test logic", pairs: [{ q: "2,4-DNP orange?", a: "<b>carbonyl present</b>" }, { q: "Tollens' mirror?", a: "<b>aldehyde</b>" }, { q: "Both +?", a: "<b>aldehyde confirmed</b>" }] } }
  ],
  questions: [
    { type: "mcq", q: "The carbonyl carbon is attacked by:", options: ["electrophiles", "nucleophiles", "radicals only", "bases"], answer: 1, difficulty: 1, explanation: "Cδ+ attracts Nu⁻" },
    { type: "mcq", q: "Which gives a silver mirror?", options: ["propanone", "ethanal", "ethanol", "acetic acid"], answer: 1, difficulty: 1, explanation: "Aldehydes reduce Tollens' Ag⁺" },
    { type: "mcq", q: "NaBH₄ reduction of butanone gives:", options: ["butanal", "butan-2-ol", "butanoic acid", "butane"], answer: 1, difficulty: 2, explanation: "Ketone → 2° alcohol" },
    { type: "mcq", q: "HCN addition to ethanal yields:", options: ["2-hydroxypropanenitrile", "propanoic acid", "propanamide", "ethylene glycol"], answer: 0, difficulty: 2, explanation: "Cyanohydrin: OH and CN on the former carbonyl carbon" },
    { type: "tf", q: "Ketones oxidize to carboxylic acids with mild oxidants.", answer: false, difficulty: 2, explanation: "No aldehydic C–H — they resist" },
    { type: "tf", q: "The carbonyl carbon is sp² and trigonal planar.", answer: true, difficulty: 2, explanation: "~120° angles — enables attack from either face" },
    { type: "calc", q: "Molar mass of propanone (C₃H₆O)?", answer: "58", difficulty: 1, explanation: "36+6+16 = 58 g/mol" },
    { type: "calc", q: "Volume ratio of HCN needed per carbonyl in addition?", answer: "1", difficulty: 2, explanation: "One HCN per C=O — simple 1:1 addition" },
    { type: "short", q: "Reagent confirming any carbonyl (orange ppt):", answer: "2,4-dnp|brady|2,4-dinitrophenylhydrazine", difficulty: 2, explanation: "2,4-DNP (Brady's reagent)" },
    { type: "concept", q: "Why is ethanal more reactive toward HCN than propanone?", answer: "steric less crowded|electronic alkyl donation|aldehyde vs ketone", difficulty: 3, explanation: "Two reasons: propanone's two methyl groups crowd the carbonyl carbon (steric) AND donate electron density that dampens its δ+ charge (electronic) — ethanal has only one methyl and a small H, so CN⁻ finds a more positive, more exposed target" }
  ]
};

Lessons["g11-chemistry-uc6-t3"] = {
  overview: "Carboxylic acids (R–COOH) are the organic acids of vinegar, citrus and biology. The carboxyl group — carbonyl plus hydroxyl — makes them weakly acidic (resonance-stabilized carboxylate), reactive toward bases, alcohols and carbonates, and tunable by substituents (electron-withdrawing groups sharpen acidity).",
  objectives: [
    "Name carboxylic acids and the carboxyl structure",
    "Explain acidity via carboxylate resonance",
    "Predict substituent effects on acid strength",
    "Write reactions: with metals, bases, carbonates, alcohols",
    "Connect acids to everyday and industrial contexts"
  ],
  simple: "R–COOH: the carboxyl group — a C=O and an –OH sharing one carbon. That partnership is the trick: when the –OH loses H⁺, the leftover negative charge smears evenly over BOTH oxygens (resonance) — stabilized, so the acid gives up the proton far more readily than alcohols do (ethanoic acid K_a = 1.8 × 10⁻⁵ vs ethanol ~10⁻¹⁶ — a trillion-fold). Still weak: only partially ionized in water. Naming: -oic acid (methanoic, ethanoic = vinegar's acid, propanoic, butanoic = rancid butter). Substituents matter: pull electrons toward yourself (Cl, F, more of them, closer) and the acid strengthens — chloroethanoic > ethanoic; trichloro > mono; fluoro beats chloro. Reactions: acids do what acids do — metal → salt + H₂; base → salt + water; carbonate → salt + water + CO₂ (the fizz test). And the special one: + alcohol ⇌ ester + water (Fischer esterification, acid-catalyzed, reversible — next topic). Everyday: vinegar (4–6% ethanoic), citric (lemons), tartaric, formic (ant stings, methanoic), lactic (fermented foods, muscles), fatty acids (long chains — oils). Benzoic: aromatic preservative.",
  detailed: "<p><b>Structure & bonding.</b> Carboxyl carbon sp², planar; the C–OH bond lengthens and the O–H acidifies because the π system conjugates with the lone pair on the hydroxyl oxygen. Carboxylate anion RCOO⁻: two equivalent resonance forms, charge delocalized over both oxygens — the stabilization that makes carboxylic acids ~10¹¹× stronger than alcohols.</p><p><b>Acidity & substituent effects.</b> K_a values: methanoic 1.8 × 10⁻⁴ > ethanoic 1.8 × 10⁻⁵ (methyl donates electrons, destabilizing the anion). Inductive effects: ClCH₂COOH (1.4 × 10⁻³) ≫ CH₃COOH; Cl₂CHCOOH > ClCH₂COOH; ClCH₂CH₂COOH weaker (effect fades with distance); F strongest inductive. Aromatic: benzoic (6.3 × 10⁻⁵) — ring withdraws; nitrobenzoics stronger (NO₂ ortho/para). pK_a = −log K_a: smaller = stronger. The classic order: mineral acids ≫ carboxylic > phenol > water > alcohols.</p><p><b>Reactions.</b> (1) Metals (Na, Mg): 2RCOOH + 2Na → 2RCOO⁻Na⁺ + H₂↑. (2) Bases: RCOOH + NaOH → RCOONa + H₂O (neutralization; ethanoate soaps = sodium salts of long-chain acids). (3) Carbonates/hydrogencarbonates: 2RCOOH + CO₃²⁻ → 2RCOO⁻ + H₂O + CO₂↑ — effervescence distinguishes acids from phenols (carbonic acid beats phenol's acidity). (4) Esterification: RCOOH + R'OH ⇌ RCOOR' + H₂O, conc. H₂SO₄ catalyst, reversible — equilibrium yield via excess reagent or product removal (Le Chatelier, Unit 5). (5) Reduction: LiAlH₄ → 1° alcohol (NaBH₄ too weak — selectivity). (6) From acyl chlorides/anhydrides (more reactive derivatives — A-level extension).</p><p><b>Preparation.</b> Oxidation: 1° alcohols or aldehydes + excess acidified dichromate, reflux (RCH₂OH → RCHO → RCOOH); nitrile hydrolysis (RCN + 2H₂O/H⁺ → RCOOH + NH₄⁺ — chain extension); Grignard + CO₂ then acid (RCOOH with one more carbon); haloalkane → nitrile → acid (the two-carbon-growth route). Industrial: methanol carbonylation (Monsanto/Cativa: CH₃OH + CO → CH₃COOH — rhodium/iodide catalyst, >99% selectivity — the world's vinegar); butane oxidation for acetic/acetic anhydride; fermentation (slow, traditional — Ethiopian etan).</p><p><b>Family members.</b> Methanoic acid HCOOH: the only one with an aldehydic H — reduces Tollens'/KMnO₄ (the exception that proves the test); ant/bee venom, leather tanning, rubber coagulant (Ethiopian coffee-cherry processing uses it). Ethanoic: glacial (pure, freezes at 16.6 °C — 'glacial'), vinegar, PET/acetate feedstock. Propanoic: mold inhibitor (calcium propanoate in bread). Butanoic: rancid butter smell. Dioic: oxalic (rust removal, kidney stones), adipic (nylon). Long-chain: fatty acids — saturated (stearic, palmitic) vs unsaturated (oleic, linoleic — the next topic's oils). Citric/tartaric/malic: fruit acids, buffers and flavor.</p>",
  keyTerms: [
    { term: "Carboxyl group", def: "–COOH: carbonyl + hydroxyl on one carbon" },
    { term: "Carboxylate resonance", def: "charge delocalized over both O — the acidity source" },
    { term: "Inductive effect", def: "electron-withdrawing groups strengthen nearby acids" },
    { term: "Glacial ethanoic", def: "pure acetic acid — freezes to ice-like crystals" },
    { term: "Esterification", def: "acid + alcohol ⇌ ester + water (H⁺ catalyzed)" },
    { term: "Methanoic exception", def: "has aldehydic H — reduces Tollens'" }
  ],
  formulas: [
    {
      name: "Acidity equilibrium",
      formula: "RCOOH ⇌ RCOO⁻ + H⁺ | K_a ≈ 10⁻⁵ (ethanoic)",
      meaning: "Weak, partial ionization — resonance-stabilized anion",
      vars: [{ name: "pK_a", meaning: "−log K_a; ethanoic 4.76", unit: "—" }],
      units: "mol/L",
      when: "Any acid-strength question",
      example: "0.1 M ethanoic: [H⁺] = √(K_a·c) = 1.3 × 10⁻³, pH 2.87"
    },
    {
      name: "Carbonate test",
      formula: "2RCOOH + Na₂CO₃ → 2RCOO⁻Na⁺ + H₂O + CO₂↑",
      meaning: "Effervescence — carboxylic acids beat carbonic",
      vars: [{ name: "CO₂", meaning: "limewater cloudiness", unit: "gas" }],
      units: "—",
      when: "Distinguishing acids from phenols",
      example: "Vinegar + baking soda = the classroom volcano, real chemistry"
    }
  ],
  workedExamples: [
    {
      problem: "Rank: ethanoic, chloroethanoic, 3-chloropropanoic, propanoic acids by strength.",
      given: "inductive effects",
      formula: "EWG closer & stronger → stronger acid",
      substitution: "Cl on α-carbon (chloroethanoic) > Cl on β (3-chloropropanoic) > no Cl (ethanoic ≈ propanoic, propanoic slightly weaker)",
      calculation: "pK_a: 2.86, 4.0, 4.76, 4.87",
      answer: "chloroethanoic > 3-chloropropanoic > ethanoic > propanoic — distance fades induction"
    },
    {
      problem: "0.050 M ethanoic acid, K_a = 1.8 × 10⁻⁵. Find pH.",
      given: "weak acid",
      formula: "[H⁺] = √(K_a·c)",
      substitution: "√(1.8 × 10⁻⁵ × 0.050) = √(9 × 10⁻⁷)",
      calculation: "9.5 × 10⁻⁴ M",
      answer: "pH ≈ 3.0 — weak but far more acidic than an alcohol of similar concentration"
    },
    {
      problem: "A mystery C₂H₄O₂ compound fizzes with NaHCO₃ and turns litmus red. Identify and write the fizz reaction.",
      given: "acidic + carbonate",
      formula: "carboxylic acid",
      substitution: "ethanoic acid; 2CH₃COOH + NaHCO₃ → 2CH₃COONa + H₂O + CO₂↑",
      calculation: "—",
      answer: "Ethanoic (acetic) acid — the fizz is CO₂ from carbonate destruction"
    },
    {
      problem: "Show two synthetic routes to propanoic acid with carbon-count logic.",
      given: "target C₃",
      formula: "oxidation vs nitrile",
      substitution: "(a) propan-1-ol + excess dichromate, reflux; (b) ethyl bromide → CH₃CH₂CN (KCN) → hydrolysis (H₃O⁺)",
      calculation: "(b) grows the chain: C₂ → C₃",
      answer: "Direct oxidation keeps carbon count; nitrile hydrolysis adds one — choose by starting material"
    },
    {
      problem: "Why does methanoic acid reduce Tollens' while ethanoic doesn't?",
      given: "structure HCOOH",
      formula: "aldehydic H",
      substitution: "H–COOH looks like an aldehyde's H–C=O on one side",
      calculation: "oxidized to CO₂ + H₂O",
      answer: "The H on the carboxyl carbon is the same handle aldehydes offer — methanoic is the acid that behaves like an aldehyde"
    }
  ],
  commonMistakes: [
    "Writing –COH for the carboxyl — it's –COOH (the H is on oxygen)",
    "Carboxylic acids called strong — they're weak (partial ionization), just far stronger than alcohols/phenol",
    "Resonance ignored: claiming the –OH alone explains acidity — alcohols have –OH too",
    "Inductive effect thought to work through space equally at any distance — it fades sharply with each carbon",
    "Methanoic acid excluded from Tollens' reactions — it's the exception that reduces",
    "Esterification treated as irreversible — it's an equilibrium (Unit 5 logic applies)",
    "NaBH₄ claimed to reduce acids — only LiAlH₄ touches carboxyls"
  ],
  applications: [
    "Food: vinegar preservation (pH drop kills microbes), citric/tartaric flavor and buffering, benzoate preservatives",
    "Ethiopian context: traditional etan (vinegar) from fermented honey/wine; formic acid in coffee processing",
    "Materials: terephthalic acid → PET bottles; adipic acid → nylon-6,6; methacrylic → Plexiglas",
    "Medicine: aspirin (acetylsalicylic acid), ibuprofen — carboxyls as the acidic handle for absorption",
    "Agriculture: formic/propionic acid silage additives preserve fodder; acidified herbicide delivery"
  ],
  summary: "The carboxyl group's acidity comes from resonance-stabilized carboxylate — charge shared over two oxygens — making RCOOH weak but ~10¹¹× stronger than alcohols. Inductive withdrawal (Cl, F, closer = stronger) tunes K_a. Classic reactions: metals/bases → salts, carbonates → CO₂ fizz, alcohols ⇌ esters (Fischer), LiAlH₄ → 1° alcohols. Routes: oxidation of 1° alcohols/aldehydes, nitrile hydrolysis, Grignard + CO₂, industrial methanol carbonylation. Methanoic acid's aldehydic H makes it the Tollens'-positive exception. From vinegar to PET, the carboxyl is organic chemistry's workhorse.",
  visuals: [
    { type: "steps", config: { title: "Why resonance = acidity", steps: [{ label: "Lose H⁺", detail: "from –OH" }, { label: "Negative charge", detail: "on carboxylate" }, { label: "Delocalize", detail: "shared over both O" }, { label: "Stabilized", detail: "proton leaves happily" }] } },
    { type: "barChart", config: { title: "pK_a (lower = stronger)", labels: ["HCl", "methanoic", "chloroethanoic", "ethanoic", "propanoic", "phenol", "ethanol"], values: [-7, 3.75, 2.86, 4.76, 4.87, 10, 16] } },
    { type: "qa", config: { title: "Reaction map", pairs: [{ q: "+ Na?", a: "<b>salt + H₂</b>" }, { q: "+ CO₃²⁻?", a: "<b>salt + H₂O + CO₂↑</b>" }, { q: "+ alcohol/H⁺?", a: "<b>ester + water</b>" }] } }
  ],
  questions: [
    { type: "mcq", q: "Carboxylic acids are more acidic than alcohols because:", options: ["stronger O–H bond", "resonance-stabilized carboxylate", "bigger mass", "more carbons"], answer: 1, difficulty: 2, explanation: "Charge delocalization stabilizes the conjugate base" },
    { type: "mcq", q: "Which is the strongest acid?", options: ["ethanoic", "chloroethanoic", "propanoic", "butanoic"], answer: 1, difficulty: 2, explanation: "Cl withdraws electrons inductively" },
    { type: "mcq", q: "The fizz test uses:", options: ["litmus", "NaHCO₃", "Tollens'", "Na metal"], answer: 1, difficulty: 1, explanation: "Carbonate → CO₂ effervescence" },
    { type: "mcq", q: "Reducing ethanoic acid to ethanol requires:", options: ["NaBH₄", "LiAlH₄", "H₂ alone", "Zn"], answer: 1, difficulty: 3, explanation: "Only the strong hydride donor touches carboxyls" },
    { type: "tf", q: "Methanoic acid gives a positive Tollens' test.", answer: true, difficulty: 3, explanation: "Its aldehydic H is oxidized — CO₂ forms" },
    { type: "tf", q: "Glacial ethanoic acid is 100% acetic acid.", answer: true, difficulty: 2, explanation: "Pure — freezes at 16.6 °C into ice-like crystals" },
    { type: "calc", q: "pK_a of acid with K_a = 1.8 × 10⁻⁵?", answer: "4.7", difficulty: 2, explanation: "−log(1.8e-5) ≈ 4.74" },
    { type: "calc", q: "[H⁺] in 0.10 M ethanoic (K_a = 1.8 × 10⁻⁵)?", answer: "1.3e-4|0.00013", difficulty: 3, explanation: "√(1.8e-6) ≈ 1.34 × 10⁻⁴ M" },
    { type: "short", q: "Industrial route to ethanoic acid:", answer: "methanol carbonylation|carbonylation|monsanto", difficulty: 2, explanation: "CH₃OH + CO → CH₃COOH (Rh/I catalyst)" },
    { type: "concept", q: "Why does 3-chloropropanoic acid have a higher pK_a than 2-chloropropanoic?", answer: "distance|inductive fades|farther Cl weaker", difficulty: 3, explanation: "The inductive effect is through-bond and decays with each intervening carbon — Cl on C2 (α) pulls electron density from the carboxylate directly; on C3 (β) one more CH₂ insulates it, so the anion is less stabilized and the acid weaker" }
  ]
};

Lessons["g11-chemistry-uc6-t4"] = {
  overview: "Esters (R–COO–R') are the fragrant fruits of carboxylic acid + alcohol condensation — reversible, acid-catalyzed, and the reason bananas, glue and fats exist. Their chemistry is the esterification equilibrium and its two exits: hydrolysis (back to acid + alcohol) and transesterification (swap the alcohol — biodiesel).",
  objectives: [
    "Name esters and write the Fischer esterification",
    "Explain the equilibrium and how industry drives yield",
    "Describe acid vs base hydrolysis (saponification)",
    "Connect esters to fragrances, flavors and solvents",
    "Explain transesterification in biodiesel production"
  ],
  simple: "Cook carboxylic acid with alcohol and a drop of conc. H₂SO₄: the –OH of the acid and the H of the alcohol's –OH leave as water, and the remainder joins: R–COO–R' — an ester. Smell it: ethyl ethanoate = glue/solvent sweetness; isoamyl ethanoate = banana; octyl ethanoate = orange. Naming: the alcohol's carbon chain first (ethyl), then the acid minus -ic plus -oate (ethanoate) → ethyl ethanoate. The reaction is an EQUILIBRIUM (Unit 5!): to get high yield, use excess of the cheap reagent or distil the ester out as it forms. Two ways back: acid hydrolysis (water + H⁺, reversible, same road in reverse) or base hydrolysis (OH⁻ eats the acid product, forming carboxylate salt — irreversible, that's saponification: making SOAP from fats). Esters also swap partners: transesterification — methanol + vegetable oil (triester of glycerol) → methyl esters (biodiesel) + glycerol. Physical: polar C=O but no O–H → can't self-H-bond → volatile, moderately soluble (small ones), sweet-smelling. Polyesters: terephthalic + ethylene glycol → PET — bottles and fabric, one ester linkage per repeat.",
  detailed: "<p><b>Fischer esterification.</b> RCOOH + R'OH ⇌ RCOOR' + H₂O, H⁺ catalyst (conc. H₂SO₄ — also a dehydrating agent). Mechanism sketch: protonate carbonyl O → alcohol attacks Cδ+ → proton transfers → water leaves → deprotonate. Isotopic labeling (¹⁸O in the alcohol) proves the alcohol's oxygen stays in the ester — the acid loses the –OH, the alcohol loses the H. Equilibrium K ≈ 1–10: modest; drive yield by excess alcohol (cheap) or continuous ester/water removal (Le Chatelier). H₂SO₄ must be catalytic — too much and side reactions (sulfonation, charring) appear.</p><p><b>Naming.</b> Alkyl alkanoate: alkyl from the alcohol, alkanoate from the acid. Methylethanoate CH₃COOCH₃, ethyl propanoate C₂H₅COOC₂H₅... Aromatic: methyl benzoate (grape flavor), phenyl ethanoate.</p><p><b>Hydrolysis — two exits.</b> Acidic: water excess + H⁺, reverse of formation, equilibrium again. Basic: OH⁻ attacks, carboxylic acid product is instantly neutralized to RCOO⁻ — the anion can't be attacked, so the reaction runs to completion: saponification. Long-chain esters (fats, oils) + NaOH → sodium carboxylates (soap) + glycerol — the ancient chemistry, now industrial. Soap's dual nature: nonpolar tail dissolves grease, carboxylate head dissolves water — micelles emulsify oil off cloth.</p><p><b>Physical properties.</b> No O–H → no self-association → b.p. similar to acids of same mass but far lower than the corresponding alcohols/acids; volatile → vapor reaches the nose → fragrance. Small esters: water-soluble (H-bond ACCEPTORS via carbonyl O); solubility falls with chain length. Sweet/fruity odors: banana (isoamyl acetate), pear (propyl ethanoate), rum (ethyl butanoate) — flavor industry's vocabulary.</p><p><b>Transesterification & biodiesel.</b> RCOOR + R''OH ⇌ RCOOR'' + ROH (acid/base catalyzed). Industry: triglyceride + 3 CH₃OH →(NaOH) 3 fatty-acid methyl esters (FAME = biodiesel) + glycerol. Methanol excess + mild base drives it; glycerol separates (density) — a by-product now worth money (cosmetics, pharmaceuticals). Ethiopian context: jatropha and used-cooking-oil biodiesel research — ester chemistry as energy strategy.</p><p><b>Polyesters & materials.</b> Diacid + diol → polyester + water (condensation polymerization): PET (terephthalic + ethylene glycol) — bottles, fibers (polyester clothing), films; biodegradable PLA (lactic acid polyester) from fermented corn — compostable cups. Hydrolysis is polyester's Achilles heel — base washes degrade PET fabrics over time (why 'dry clean' exists for some garments).</p>",
  keyTerms: [
    { term: "Ester linkage", def: "–COO– between acyl and alkoxy groups" },
    { term: "Fischer esterification", def: "acid + alcohol ⇌ ester + water, H⁺ catalyzed" },
    { term: "Saponification", def: "base hydrolysis of esters → soap + glycerol (irreversible)" },
    { term: "Transesterification", def: "ester + different alcohol → new ester — biodiesel route" },
    { term: "FAME", def: "fatty acid methyl esters = biodiesel" },
    { term: "PET", def: "polyethylene terephthalate — condensation polyester" }
  ],
  formulas: [
    {
      name: "Esterification",
      formula: "CH₃COOH + C₂H₅OH ⇌ CH₃COOC₂H₅ + H₂O",
      meaning: "Acid + alcohol ⇌ ester + water (H⁺ cat.)",
      vars: [{ name: "K ≈ 4", meaning: "equilibrium modest — drive it", unit: "—" }],
      units: "—",
      when: "Fragrance, solvent, PET synthesis",
      example: "Excess ethanol or distilled ester removal → high yield"
    },
    {
      name: "Saponification",
      formula: "(C₁₇H₃₅COO)₃C₃H₅ + 3NaOH → 3C₁₇H₃₅COONa + C₃H₅(OH)₃",
      meaning: "Tristearin (fat) → sodium stearate (soap) + glycerol",
      vars: [{ name: "NaOH", meaning: "stoichiometric, not catalytic", unit: "—" }],
      units: "—",
      when: "Soap & detergent making",
      example: "100 g coconut oil + ~14 g NaOH → soap batch"
    }
  ],
  workedExamples: [
    {
      problem: "Name the ester from butanoic acid + methanol, and write the reaction.",
      given: "Fischer",
      formula: "alkyl alkanoate",
      substitution: "CH₃CH₂CH₂COOH + CH₃OH ⇌ CH₃CH₂CH₂COOCH₃ + H₂O",
      calculation: "methyl from alcohol, butanoate from acid",
      answer: "Methyl butanoate — pineapple aroma"
    },
    {
      problem: "Esterification K ≈ 4. Starting 1 mol each, what's the equilibrium yield and how do you beat it?",
      given: "equilibrium math",
      formula: "x²/(1−x)² = 4 → x/(1−x) = 2",
      substitution: "x = 0.67",
      calculation: "67% single-pass",
      answer: "Use 2× excess alcohol (→ ~80%) or distil ester/water out — Le Chatelier's toolbox"
    },
    {
      problem: "Why is base hydrolysis irreversible while acid hydrolysis isn't?",
      given: "mechanism logic",
      formula: "product trapping",
      substitution: "OH⁻ converts RCOOH → RCOO⁻; the anion resists nucleophilic attack",
      calculation: "no reverse path",
      answer: "The carboxylate salt is a dead end — acid hydrolysis keeps both directions open"
    },
    {
      problem: "Write the biodiesel reaction from a generic triglyceride.",
      given: "transesterification",
      formula: "fat + 3MeOH → 3 FAME + glycerol",
      substitution: "(RCOO)₃C₃H₅ + 3CH₃OH →(NaOH) 3 RCOOCH₃ + C₃H₅(OH)₃",
      calculation: "glycerol sinks, biodiesel floats — phase separation",
      answer: "Three methyl esters (fuel) + glycerol (by-product) — ester swap as energy"
    },
    {
      problem: "A student mixes ethanoic acid and ethanol without catalyst. Predict the outcome.",
      given: "no H₂SO₄",
      formula: "kinetics",
      substitution: "equilibrium still favors some ester, but rate is glacial",
      calculation: "days for modest conversion",
      answer: "Trace ester, slowly — the catalyst doesn't move K, it just lets you reach it this century"
    }
  ],
  commonMistakes: [
    "Naming esters 'acid-alkyl' backwards — alkyl FIRST (from alcohol): ethyl ethanoate, not ethanoate ethyl",
    "Writing ester formation as losing H from acid and OH from alcohol — it's OH from acid, H from alcohol (¹⁸O labeling proves it)",
    "Calling saponification catalytic base — the OH⁻ is CONSUMED (stoichiometric)",
    "Esters said to hydrogen-bond with themselves — no O–H; they only accept",
    "Transesterification confused with transesterification of amides — esters swap OR groups, not N",
    "Forgetting the equilibrium: writing esterification with a single arrow",
    "PET called addition polymer — it's condensation (water leaves each linkage)"
  ],
  applications: [
    "Flavor & perfume industry: synthetic esters (banana, pear, rum) — cheap nature-copies",
    "Solvents: ethyl ethanoate and butyl ethanoate in paints, glues, nail-polish removers — volatility tuned by chain",
    "Biodiesel: used cooking oil + methanol → FAME fuel — waste-to-energy chemistry",
    "Soap & cosmetics: saponification of palm/coconut/sheabutter oils — Ethiopian shea and sesame soaps",
    "Materials: PET bottles/fibers, PLA compostable plastics — polyester economy"
  ],
  summary: "Esters form by Fischer esterification — acid + alcohol ⇌ ester + water, H⁺ catalyzed, equilibrium-limited (drive with excess or removal). Named alkyl alkanoate; fragrant, volatile, small ones water-soluble as H-bond acceptors. Hydrolysis exits: acid (reversible) or base (irreversible saponification → soap + glycerol). Transesterification swaps alkoxy groups — biodiesel from triglycerides + methanol. Polyesters (PET, PLA) are diacid + diol condensations — materials built from the same linkage.",
  visuals: [
    { type: "steps", config: { title: "Driving ester yield", steps: [{ label: "Mix acid + alcohol", detail: "H₂SO₄ cat." }, { label: "Equilibrium ~67%", detail: "K ≈ 4" }, { label: "Excess alcohol", detail: "shifts right" }, { label: "Or distil ester", detail: "product removal" }, { label: "Yield >95%", detail: "Le Chatelier applied" }] } },
    { type: "comparison", config: { title: "Two hydrolyses", left: { name: "Acid (H⁺/H₂O)", items: ["reversible", "gives acid + alcohol", "same road back"] }, right: { name: "Base (OH⁻)", items: ["irreversible", "gives carboxylate salt", "saponification → soap"] } } },
    { type: "flowChart", config: { title: "Biodiesel plant", nodes: [{ label: "Waste oil", detail: "triglycerides" }, { label: "Methanol + NaOH", detail: "transesterification" }, { label: "Settle", detail: "glycerol sinks" }, { label: "FAME", detail: "biodiesel" }] } }
  ],
  questions: [
    { type: "mcq", q: "Ethyl ethanoate comes from:", options: ["ethanol + ethanoic acid", "ethanoic acid + methanol", "ethene + water", "ethanal + oxygen"], answer: 0, difficulty: 1, explanation: "Alcohol's alkyl + acid's alkanoate" },
    { type: "mcq", q: "Saponification produces:", options: ["ester + water", "soap + glycerol", "acid + alcohol", "aldehyde"], answer: 1, difficulty: 1, explanation: "Fat + NaOH → carboxylate salts + glycerol" },
    { type: "mcq", q: "In esterification, the water's oxygen comes from:", options: ["the alcohol", "the carboxylic acid", "the catalyst", "the air"], answer: 1, difficulty: 3, explanation: "Acid loses –OH; ¹⁸O labeling proves it" },
    { type: "mcq", q: "Biodiesel is made by:", options: ["esterification", "transesterification", "saponification", "polymerization"], answer: 1, difficulty: 2, explanation: "Methanol swaps the glycerol off the fat" },
    { type: "tf", q: "Esters hydrogen-bond with themselves like alcohols.", answer: false, difficulty: 2, explanation: "No O–H — they accept but never donate" },
    { type: "tf", q: "Base hydrolysis of esters is reversible.", answer: false, difficulty: 2, explanation: "Carboxylate salt can't reverse — completion" },
    { type: "calc", q: "K = 4, 1 mol each reactant. Ester fraction at equilibrium?", answer: "0.67|67", difficulty: 3, explanation: "x/(1−x) = 2 → x = 2/3" },
    { type: "calc", q: "Moles of NaOH to saponify 1 mol triglyceride?", answer: "3", difficulty: 2, explanation: "Three ester linkages per fat molecule" },
    { type: "short", q: "Ester smelling of bananas:", answer: "isoamyl acetate|isopentyl acetate|isoamyl ethanoate", difficulty: 2, explanation: "Isoamyl (isopentyl) ethanoate" },
    { type: "concept", q: "Why does washing polyester fabric in hot soapy water slowly degrade it?", answer: "base hydrolysis|saponification of polyester|ester links cleaved", difficulty: 3, explanation: "PET is a chain of ester linkages; OH⁻ in detergent performs irreversible base hydrolysis on them — each cut shortens the polymer and weakens the fiber; hot water accelerates the kinetics (Arrhenius again)" }
  ]
};

Lessons["g11-chemistry-uc6-t5"] = {
  overview: "Fats and oils are nature's esters: glycerol triple-esterified by long-chain fatty acids. Saturated chains pack (fats, solids); unsaturated kinks (oils, liquids). Their chemistry — hydrogenation, saponification, oxidation (rancidity) — is food science, soap-making and health, from Ethiopian niter kibbeh to palm and sesame oil.",
  objectives: [
    "Describe triglyceride structure (glycerol + 3 fatty acids)",
    "Distinguish saturated/unsaturated fats and their properties",
    "Explain hydrogenation and the trans-fat problem",
    "Write saponification and explain soap's cleaning action",
    "Describe rancidity and antioxidant protection"
  ],
  simple: "One glycerol (propane-1,2,3-triol) + three fatty acids (long carboxylic chains, C₁₂–C₂₄) → a triglyceride (fat/oil) + three waters — esterification, biology's version. If the chains have only C–C single bonds — saturated (stearic, palmitic): straight chains pack tight → solid at room T (butter, ghee/niter kibbeh, coconut). If chains carry C=C double bonds — unsaturated (oleic in olive/sesame, linoleic): kinks at each cis double bond prevent packing → liquid (oils). More double bonds → lower melting point and more air-sensitive. Chemistry you can do: (1) Hydrogenation — H₂/Ni adds across C=C → harder fat (margarine from vegetable oil); partial process can flip cis → trans (trans fats — the heart-disease scandal, now banned in many countries). (2) Saponification — NaOH → soap + glycerol; soap's amphiphile structure (nonpolar tail in grease, ionic head in water) forms micelles that lift oil off surfaces. (3) Rancidity — O₂ attacks C=C (autoxidation chain reaction) → aldehydes/ketones (off-smells); antioxidants (vitamin E, BHT) sacrifice themselves to stop the chain. Health: saturated excess raises LDL cholesterol; unsaturated (especially omega-3/6) preferred; the fat-soluble vitamins (A, D, E, K) ride in with the oils.",
  detailed: "<p><b>Structure.</b> Triglyceride (triacylglycerol): glycerol's three –OH esterified by fatty acyl groups. Natural fats are mixed — three different chains common. Fatty acids: even-numbered chains (biosynthesis adds C₂ units); palmitic C16:0, stearic C18:0, oleic C18:1 (cis-Δ9), linoleic C18:2, linolenic C18:3, arachidonic C20:4. 'C18:1' notation = carbons : double bonds.</p><p><b>Physical logic.</b> Saturated: flexible zig-zag, packs in crystal lattices → high mp (stearic 70 °C). Unsaturated: cis kinks destroy packing → low mp (oleic 13 °C, linolenic −11 °C). Hence animal fats (more saturated, body-temperature storage) solid; plant oils (more unsaturated, photosynthetic fluidity) liquid — with tropical exceptions: coconut/palm kernel (short saturated chains, still solid-ish in cool rooms). Density < water — oils float.</p><p><b>Hydrogenation.</b> H₂ (1–3 atm), Ni catalyst 150–200 °C: C=C → C–C. Industrial purpose: liquid oil → spreadable solid (margarine, shortening), stability gain (fewer C=C to oxidize). Partial hydrogenation side-reaction: some cis → trans isomerization — trans chains straighten and pack like saturates (the 'partially hydrogenated' label). Trans fats: LDL-raising like saturates PLUS HDL-lowering — worse than either; WHO FREPLACE elimination, Ethiopian food-label awareness growing. Fully hydrogenated = no trans (all single bonds) but waxy-saturated.</p><p><b>Saponification & cleaning.</b> Fat + 3NaOH → 3 RCOONa (soap) + glycerol. Soap anion: long nonpolar tail (grease-loving) + carboxylate head (water-loving) — micelles: tails inward around oil droplets, heads outward in water → emulsification, rinse away. Hard water problem: Ca²⁺/Mg²⁺ precipitate carboxylates (scum) — detergents (sulfonates, e.g. LAS) stay soluble; the 20th-century synthetic-detergent shift. Ethiopian traditional: erqet (seeds), soapberry-type saponins — natural surfactants before industry. Glycerol by-product: humectant in cosmetics, nitroglycerin feedstock (pharmaceutical + explosive dual use).</p><p><b>Rancidity & antioxidants.</b> Hydrolytic rancidity: lipase/heat cleaves esters → free fatty acids (butanoic's vomit smell in old butter). Oxidative: O₂ + bis-allylic H (between two C=C) → lipid radical → chain autoxidation → hydroperoxides → aldehydes/ketones (off-flavors, some toxic). Prevention: refrigeration (kinetics), dark bottles (photo-initiation), antioxidants (BHT, BHA, tocopherols — donate H to radicals, terminating chains), nitrogen flushing, metal chelation (Cu/Fe catalyze). Iodine value: grams I₂ per 100 g fat — measures unsaturation (oils absorb I₂ across C=C); high IV = drying oil (linseed — paints/varnishes, polymerizes with air).</p><p><b>Nutrition & industry.</b> Fats: 38 kJ/g (energy dense), solvent for vitamins A/D/E/K, essential fatty acids (linoleic ω-6, α-linolenic ω-3 — humans can't insert double bonds past Δ9). Palm oil: world's most-used vegetable oil (Ethiopian imports and local trials); interesterification rearranges chains to texture without trans fats — the modern fix. Deep-frying chemistry: polymerization + oxidation at 180 °C — used-oil monitoring (polar compounds) and biodiesel recycling close the loop.</p>",
  keyTerms: [
    { term: "Triglyceride", def: "glycerol + 3 fatty acids — the fat/oil ester" },
    { term: "Saturated fat", def: "no C=C — packs, solid (butter, ghee)" },
    { term: "Unsaturated", def: "C=C cis kinks — liquid oils" },
    { term: "Hydrogenation", def: "H₂/Ni: oil → fat; partial risks trans fats" },
    { term: "Micelle", def: "soap aggregate: tails in, heads out — emulsifies grease" },
    { term: "Iodine value", def: "g I₂/100 g — unsaturation measure" }
  ],
  formulas: [
    {
      name: "Saponification",
      formula: "C₃H₅(OOCR)₃ + 3NaOH → 3RCOONa + C₃H₅(OH)₃",
      meaning: "Fat + lye → soap + glycerol",
      vars: [{ name: "RCOONa", meaning: "soap (sodium carboxylate)", unit: "—" }],
      units: "—",
      when: "Soap & glycerol production",
      example: "Tristearin → sodium stearate (bar soap)"
    },
    {
      name: "Hydrogenation",
      formula: "C=C + H₂ →(Ni) CH–CH",
      meaning: "Unsaturation removed — oil hardens",
      vars: [{ name: "Ni", meaning: "catalyst, 150–200 °C", unit: "—" }],
      units: "—",
      when: "Margarine, shortening",
      example: "Oleic C18:1 → stearic C18:0"
    }
  ],
  workedExamples: [
    {
      problem: "Sesame oil (iodine value ~110) vs coconut oil (~10): which is more liquid and why?",
      given: "IV = unsaturation",
      formula: "cis kinks prevent packing",
      substitution: "sesame: many C=C (linoleic/oleic) → kinked → liquid",
      calculation: "coconut: mostly saturated (lauric C12:0) → packs",
      answer: "Sesame stays liquid; coconut solidifies below 25 °C — the iodine value predicts it"
    },
    {
      problem: "A margarine label reads 'partially hydrogenated vegetable oil.' What does it hide?",
      given: "label literacy",
      formula: "partial hydrogenation → trans isomers",
      substitution: "some cis C=C escaped hydrogenation but flipped trans",
      calculation: "trans = straight = packs = spreadable",
      answer: "Trans fats — the texture came with the cardiovascular cost; 'zero trans' requires full hydrogenation or interesterification"
    },
    {
      problem: "Write the saponification of a tristearin molecule and name the soap.",
      given: "C₁₇H₃₅ chains",
      formula: "(C₁₇H₃₅COO)₃C₃H₅ + 3NaOH",
      substitution: "→ 3 C₁₇H₃₅COONa + C₃H₅(OH)₃",
      calculation: "sodium octadecanoate",
      answer: "Sodium stearate (hard bar soap) + glycerol (humectant by-product)"
    },
    {
      problem: "Explain, with micelle logic, how soap removes oil from cloth.",
      given: "amphiphile",
      formula: "emulsification",
      substitution: "tails dissolve into the oil droplet; carboxylate heads face the water",
      calculation: "droplet lifts as a micelle — rinse carries it",
      answer: "Soap turns a hydrophobic stain into a hydrophilic package — the interface chemistry of cleaning"
    },
    {
      problem: "Why do nuts go rancid faster than butter, and why does vitamin E slow it?",
      given: "unsaturation + antioxidants",
      formula: "autoxidation chain",
      substitution: "nuts: polyunsaturated (bis-allylic H's) — O₂ chain reaction; butter: mostly saturated",
      calculation: "tocopherols donate H to lipid radicals → chains terminate",
      answer: "Double bonds are the fuel; antioxidants are the firebreak — hence 'with vitamin E' on oil labels"
    }
  ],
  commonMistakes: [
    "Fats called 'esters of ethane-1,2-diol' — glycerol is propane-1,2,3-TRIOL, three ester links",
    "Saturated defined as 'saturated with hydrogen' correctly but confused with 'full of trans fats' — saturates have NO double bonds at all",
    "Hydrogenation said to produce trans fats always — only PARTIAL hydrogenation does",
    "Soap vs detergent conflated — soap is the carboxylate salt; detergents are sulfonates (hard-water-proof)",
    "Micelles drawn with heads inward — tails hide from water, heads face it",
    "Rancidity treated as microbial only — oxidative autoxidation is the main route in oils",
    "Iodine value read backwards — HIGH IV = MORE unsaturated = oilier/drying, not more saturated"
  ],
  applications: [
    "Ethiopian cuisine & chemistry: niter kibbeh (ghee — saturated, stable for high-heat), sesame/olive/niger seed oils (unsaturated, finishing), berbere-spiced oils (antioxidant spices help!)",
    "Soap industry: traditional erqet saponins → industrial sodium palmate/stearate bars; liquid soaps = potassium salts",
    "Biodiesel: used frying oil → FAME (previous topic) — waste-to-fuel with glycerol credit",
    "Food packaging: nitrogen flushing + BHT/tocopherol + opaque packs — the anti-rancidity toolkit",
    "Nutrition science: ω-3/ω-6 balance, trans-fat bans, interesterified zero-trans shortenings"
  ],
  summary: "Fats and oils are glycerol triesters of long-chain fatty acids: saturated chains pack into solids, cis-unsaturated kinks stay liquid. Hydrogenation (H₂/Ni) hardens oils — fully, or partially with the trans-fat mistake. Saponification (NaOH) cleaves the esters to soap (micelle-forming amphiphiles that emulsify grease) + glycerol. Rancidity is oxidative autoxidation at bis-allylic sites, fought by refrigeration, darkness and radical-trapping antioxidants. Iodine value quantifies unsaturation; the fat chemistry on every label is this unit's equilibrium and kinetics in edible form.",
  visuals: [
    { type: "comparison", config: { title: "Fat vs oil", left: { name: "Saturated fat", items: ["no C=C", "straight chains pack", "solid (butter, ghee)", "higher mp"] }, right: { name: "Unsaturated oil", items: ["cis C=C kinks", "can't pack", "liquid (sesame, olive)", "air-sensitive"] } } },
    { type: "steps", config: { title: "How soap cleans", steps: [{ label: "Tail embeds in grease", detail: "hydrophobic effect" }, { label: "Heads face water", detail: "carboxylate shell" }, { label: "Micelle detaches", detail: "oil droplet packaged" }, { label: "Rinse", detail: "micelles wash away" }] } },
    { type: "barChart", config: { title: "Iodine value (unsaturation)", labels: ["coconut", "butter", "olive", "sesame", "soya", "linseed"], values: [10, 30, 85, 110, 130, 175] } }
  ],
  questions: [
    { type: "mcq", q: "A triglyceride is an ester of:", options: ["ethanol", "glycerol", "cholesterol", "methanol"], answer: 1, difficulty: 1, explanation: "Propane-1,2,3-triol + 3 fatty acids" },
    { type: "mcq", q: "Unsaturated oils are liquid because:", options: ["smaller mass", "cis kinks prevent packing", "they're ionic", "water content"], answer: 1, difficulty: 2, explanation: "Double-bond bends destroy crystal packing" },
    { type: "mcq", q: "Partial hydrogenation of oils creates:", options: ["soap", "trans fats", "glycerol", "vitamins"], answer: 1, difficulty: 2, explanation: "Cis→trans isomerization — the heart-disease link" },
    { type: "mcq", q: "High iodine value means:", options: ["saturated", "very unsaturated", "rancid", "solid"], answer: 1, difficulty: 3, explanation: "I₂ adds across C=C — more uptake = more double bonds" },
    { type: "tf", q: "Soap fails in hard water because Ca²⁺ precipitates the carboxylate.", answer: true, difficulty: 2, explanation: "Scum = insoluble calcium stearate" },
    { type: "tf", q: "Antioxidants prevent rancidity by blocking oxygen from the package.", answer: false, difficulty: 3, explanation: "They trap lipid radicals, terminating the chain — not O₂ screens" },
    { type: "calc", q: "Moles of NaOH per mole of triglyceride in saponification?", answer: "3", difficulty: 2, explanation: "Three ester links, three hydroxides" },
    { type: "calc", q: "A fat with 3 oleic chains (C18:1) — how many H₂ molecules fully hydrogenate 1 mol?", answer: "3", difficulty: 3, explanation: "One C=C per chain × 3 chains" },
    { type: "short", q: "Soap's water-loving end:", answer: "head|carboxylate|hydrophilic head|polar head", difficulty: 1, explanation: "The carboxylate head group" },
    { type: "concept", q: "Why do 'light' frying oils claim high smoke points, and how does refining relate to rancidity chemistry?", answer: "free fatty acids|smoke point|refining removes|oxidation products", difficulty: 3, explanation: "Smoke point is set by free fatty acids and oxidation fragments (they vaporize/decompose early); refining (degum, neutralize, bleach, deodorize) strips them — so a 'light/refined' oil smokes hotter and starts with fewer radical fuel-sites, though it also loses natural tocopherols, so it needs antioxidant addition to stay stable" }
  ]
};
