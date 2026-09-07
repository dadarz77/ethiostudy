/* ============================================================
   Content: Grade 10 Physics — Unit 4: Static and Current Electricity
   7 topics: Charges in Nature, Methods of Charging, The Electroscope,
   Coulomb's Law, Ohm's Law & Circuits, Combination of Resistors,
   Electrical Safety.
   ============================================================ */
window.Lessons = window.Lessons || {};

/* --- p4-1: Charges in Nature --- */
Lessons["g10-physics-up4-t1"] = {
  overview: "Electric charge is a fundamental property of matter, just like mass. Everything around you is built from atoms containing positively charged protons and negatively charged electrons. Static electricity — the shock from a doorknob, lightning, a comb picking up paper — all comes from an imbalance of these charges.",
  objectives: [
    "Identify the two kinds of electric charge and the particles that carry them",
    "State that like charges repel and unlike charges attract",
    "Explain charging as a transfer of electrons, not creation of charge",
    "State the law of conservation of charge and the SI unit of charge"
  ],
  simple: "There are two types of charge: positive (+) and negative (−). Think of them like magnets: same types push apart (repel), opposite types pull together (attract). An atom is neutral when its protons (+) and electrons (−) balance. Rub a balloon on your hair and electrons jump from hair to balloon — the balloon becomes negative, your hair positive, and they attract. Nothing was created; electrons just moved.",
  detailed: `<p><b>Two kinds of charge:</b> Matter contains <b>protons</b> (positive charge, locked in the nucleus) and <b>electrons</b> (negative charge, can move between materials). The unit of charge is the <b>coulomb (C)</b>. The charge of one electron is 1.6 × 10⁻¹⁹ C — the smallest free-standing charge in nature.</p>
<p><b>Neutral objects</b> have equal numbers of protons and electrons. A body becomes <b>negatively charged</b> by gaining electrons, and <b>positively charged</b> by losing electrons. Note: it is always the light, mobile electrons that move — protons stay in the nucleus.</p>
<p><b>Interaction of charges:</b> Like charges repel (+ and +, or − and −); unlike charges attract (+ and −). This is the fundamental rule of electrostatics.</p>
<p><b>Conservation of charge:</b> Charge can neither be created nor destroyed, only transferred. If a glass rod loses 5 electrons, the silk it was rubbed with gains exactly 5 electrons. The total charge of an isolated system never changes.</p>
<p><b>Quantisation:</b> Any charge is a whole-number multiple of the electron charge: Q = n·e, where n is an integer and e = 1.6 × 10⁻¹⁹ C.</p>`,
  keyTerms: [
    { term: "Electric charge", def: "A fundamental property of matter causing it to experience force in an electric field; two types: positive and negative." },
    { term: "Proton", def: "Positively charged particle in the nucleus; +1.6 × 10⁻¹⁹ C." },
    { term: "Electron", def: "Negatively charged particle that can move between materials; −1.6 × 10⁻¹⁹ C." },
    { term: "Coulomb (C)", def: "The SI unit of electric charge." },
    { term: "Conservation of charge", def: "Charge cannot be created or destroyed, only transferred between bodies." },
    { term: "Quantisation", def: "Charge exists only in whole multiples of the electron charge: Q = ne." }
  ],
  formulas: [
    {
      name: "Quantisation of charge",
      formula: "Q = n·e",
      meaning: "Total charge equals a whole number of electrons times the elementary charge.",
      vars: [
        { name: "Q", meaning: "total charge", unit: "C" },
        { name: "n", meaning: "number of electrons (integer)", unit: "—" },
        { name: "e", meaning: "elementary charge (1.6 × 10⁻¹⁹)", unit: "C" }
      ],
      units: "coulombs (C)",
      when: "To find the charge carried by a known number of electrons, or the number of electrons behind a known charge.",
      example: "n = 10⁹ electrons → Q = 10⁹ × 1.6×10⁻¹⁹ = 1.6×10⁻¹⁰ C."
    }
  ],
  workedExamples: [
    {
      problem: "A balloon gains 2.5 × 10¹⁰ electrons after being rubbed on hair. What charge does it carry, and what charge is left on the hair?",
      given: "n = 2.5 × 10¹⁰ electrons, e = 1.6 × 10⁻¹⁹ C",
      formula: "Q = n·e",
      substitution: "Q = 2.5 × 10¹⁰ × 1.6 × 10⁻¹⁹",
      calculation: "Q = 4.0 × 10⁻⁹ C = 4 nC",
      answer: "Balloon: −4 nC (gained electrons). Hair: +4 nC (lost the same electrons) — total charge conserved at zero."
    },
    {
      problem: "How many electrons make up a charge of −1 μC?",
      given: "Q = −1 × 10⁻⁶ C, e = 1.6 × 10⁻¹⁹ C",
      formula: "n = |Q| / e",
      substitution: "n = 10⁻⁶ / (1.6 × 10⁻¹⁹)",
      calculation: "n = 6.25 × 10¹²",
      answer: "About 6.25 trillion electrons."
    }
  ],
  commonMistakes: [
    "Saying a body becomes positive by 'gaining positive charge' — it actually LOSES electrons.",
    "Thinking protons move during charging — only electrons are mobile in solids.",
    "Believing rubbing CREATES charge — it only transfers existing electrons."
  ],
  applications: [
    "Lightning: huge charge separation in storm clouds discharges in a giant spark.",
    "Photocopiers and laser printers use charged toner attracted to patterned charges.",
    "Static cling and shocks from synthetic clothes are everyday electron transfers.",
    "Spray painting charges paint droplets so they attract to the (oppositely charged) object."
  ],
  summary: "Two charges: positive (protons) and negative (electrons). Like repel, unlike attract. Charging = moving electrons, never creating charge (conservation). Charge is quantised: Q = ne, with e = 1.6 × 10⁻¹⁹ C, measured in coulombs.",
  visuals: [
    { type: "flowChart", config: { steps: ["Atom: equal protons & electrons → neutral", "Rub two materials", "Electrons transfer", "One body: − (gained e⁻)", "Other body: + (lost e⁻)", "Total charge unchanged"], title: "Charging by Electron Transfer" } }
  , {"type":"qa","config":{"title":"Quick Review — tap a question to reveal the answer","pairs":[{"q":"A balloon gains 2.5 × 10¹⁰ electrons after being rubbed on hair. What charge does it carr…","a":"<b>Answer:</b> Balloon: −4 nC (gained electrons). Hair: +4 nC (lost the same electrons) — total charge conserved at zero."},{"q":"How many electrons make up a charge of −1 μC?","a":"<b>Answer:</b> About 6.25 trillion electrons."}]}}],
  questions: [
    { type: "mcq", q: "Which particle moves when a material becomes charged by rubbing?", options: ["Proton", "Electron", "Neutron", "Nucleus"], answer: 1, difficulty: 1, explanation: "Only electrons are mobile in solids; protons stay bound in the nucleus." },
    { type: "mcq", q: "Two negatively charged objects brought close will:", options: ["Attract", "Repel", "Not interact", "Cancel each other"], answer: 1, difficulty: 1, explanation: "Like charges repel — two negatives push each other apart." },
    { type: "tf", q: "Rubbing a balloon on hair creates new electric charge.", answer: false, difficulty: 1, explanation: "Charge is only transferred (electrons move), never created — conservation of charge." },
    { type: "calc", q: "A body loses 5 × 10¹⁰ electrons. What positive charge does it gain, in nanocoulombs? (e = 1.6×10⁻¹⁹ C)", answer: "8", difficulty: 2, explanation: "Q = ne = 5×10¹⁰ × 1.6×10⁻¹⁹ = 8×10⁻⁹ C = 8 nC", tolerance: 0.2 },
    { type: "short", q: "State the SI unit of electric charge.", answer: "coulomb|c", difficulty: 1, explanation: "The coulomb (C) is the SI unit of charge." },
    { type: "concept", q: "Why does a positively charged object have less mass than before charging (however slightly)?", answer: "lost electrons|electrons have mass|mass of electrons", difficulty: 3, explanation: "Becoming positive means losing electrons, and electrons have real (tiny) mass, so the object's mass decreases by n × 9.1×10⁻³¹ kg." }
  ]
};

/* --- p4-2: Methods of Charging --- */
Lessons["g10-physics-up4-t2"] = {
  overview: "There are three ways to charge an object: by friction (rubbing), by conduction (touching a charged body), and by induction (bringing a charged body near without touching). Each transfers or redistributes electrons in a different way.",
  objectives: [
    "Describe charging by friction and give examples",
    "Explain charging by conduction (contact)",
    "Explain charging by induction and why no contact is needed",
    "Compare the three methods and the sign of charge each produces"
  ],
  simple: "Friction: rub two materials — electrons scrape off one onto the other (balloon on hair). Conduction: touch a neutral object with a charged one — some charge flows onto it, so it ends up with the SAME sign. Induction: just bring a charged object NEAR a conductor — electrons inside rearrange; ground the far side and the object keeps the OPPOSITE sign, without ever touching the charged body.",
  detailed: `<p><b>1. Charging by friction:</b> When two different materials are rubbed, electrons transfer from the one with weaker hold to the stronger (see the triboelectric series: glass, hair → wool → silk → rubber → plastic). The two objects end up with equal and opposite charges. E.g., glass rod + silk: glass becomes +, silk becomes −.</p>
<p><b>2. Charging by conduction (contact):</b> Touching a neutral conductor with a charged object lets charge flow between them until shared. A negatively charged rod gives electrons to the neutral object → object becomes negative (same sign as the rod). A positively charged rod takes electrons → object becomes positive.</p>
<p><b>3. Charging by induction:</b> Bring a charged rod near (not touching) a conductor. Free electrons redistribute: a nearby − rod repels electrons to the far side, leaving the near side +. While the rod is near, connect the far side to <b>earth (grounding)</b> — electrons escape to (or flow from) Earth. Remove the ground, then the rod: the conductor is left with charge OPPOSITE to the rod, with no contact ever made.</p>
<p><b>Key comparison:</b> friction and conduction need contact; induction does not. Conduction gives the same sign as the charging body; induction gives the opposite sign. All three obey conservation of charge.</p>`,
  keyTerms: [
    { term: "Charging by friction", def: "Electron transfer between two materials rubbed together." },
    { term: "Charging by conduction", def: "Charge transfer by direct contact between a charged body and a neutral one." },
    { term: "Charging by induction", def: "Charging without contact, by charge redistribution plus grounding." },
    { term: "Triboelectric series", def: "Ranking of materials by how readily they give up or gain electrons." },
    { term: "Grounding (earthing)", def: "Connecting a body to Earth, which can supply or absorb unlimited electrons." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "A negatively charged rod is brought near a neutral metal sphere that is briefly touched (grounded) on the far side, then the rod is removed. What is the final charge on the sphere and why?",
      given: "Rod: negative. Sphere: neutral, grounded once.",
      formula: "Induction: like charges repel to ground.",
      substitution: "Rod (−) repels sphere's free electrons into Earth through the ground connection.",
      calculation: "Sphere lost electrons → net positive.",
      answer: "The sphere is left POSITIVE — opposite to the rod — without any contact."
    },
    {
      problem: "A plastic comb is run through dry hair and then picks up small paper pieces. Identify the charging method and explain the attraction.",
      given: "Comb + hair rubbing.",
      formula: "Friction transfers electrons; charged bodies attract neutral ones (polarisation).",
      substitution: "Electrons move hair → comb; comb becomes negative.",
      calculation: "The charged comb polarises neutral paper, and the nearer opposite charge attracts more strongly.",
      answer: "Charging by friction; the charged comb attracts neutral paper by polarisation."
    }
  ],
  commonMistakes: [
    "Confusing conduction and induction results: conduction → same sign; induction → opposite sign.",
    "Thinking induction requires touching the object — it specifically does NOT.",
    "Forgetting that grounding must happen WHILE the inducing rod is near."
  ],
  applications: [
    "Electrostatic precipitators in factories charge smoke particles, then collect them by induction on plates.",
    "Touchscreens and capacitive sensors rely on charge redistribution by induction from your finger.",
    "Lightning rods protect buildings by controlled discharge to Earth (grounding).",
    "Van de Graaff generators charge domes by conduction — hair stands up from like-charge repulsion."
  ],
  summary: "Three methods: friction (rub → equal & opposite charges), conduction (touch → same sign), induction (near + ground → opposite sign, no contact). Grounding lets electrons flow to/from Earth. All obey conservation of charge.",
  visuals: [
    { type: "flowChart", config: { steps: ["Bring − rod near neutral sphere", "Electrons repelled to far side", "Ground the far side (e⁻ escape)", "Remove ground", "Remove rod → sphere is +"], title: "Charging by Induction" } }
  , {"type":"qa","config":{"title":"Quick Review — tap a question to reveal the answer","pairs":[{"q":"A negatively charged rod is brought near a neutral metal sphere that is briefly touched (…","a":"<b>Answer:</b> The sphere is left POSITIVE — opposite to the rod — without any contact."},{"q":"A plastic comb is run through dry hair and then picks up small paper pieces. Identify the…","a":"<b>Answer:</b> Charging by friction; the charged comb attracts neutral paper by polarisation."}]}}],
  questions: [
    { type: "mcq", q: "Charging a conductor by induction leaves it with a charge:", options: ["Same sign as the inducing rod", "Opposite sign to the inducing rod", "No charge", "Both signs equally"], answer: 1, difficulty: 2, explanation: "Induction repels like charges to ground, leaving the opposite sign behind." },
    { type: "mcq", q: "A negatively charged rod touches a neutral sphere. The sphere becomes:", options: ["Positive", "Negative", "Neutral", "Half positive"], answer: 1, difficulty: 1, explanation: "Conduction shares charge — the sphere gains electrons and takes the same (negative) sign." },
    { type: "tf", q: "Charging by friction requires direct contact between the materials.", answer: true, difficulty: 1, explanation: "Friction is rubbing — surfaces must touch for electrons to transfer." },
    { type: "mcq", q: "Which sequence is correct for induction charging?", options: ["Ground → remove rod → remove ground", "Bring rod near → ground → remove ground → remove rod", "Remove rod → ground → bring rod near", "Touch rod → ground → remove ground"], answer: 1, difficulty: 3, explanation: "Rod must be near while grounding; ground removed first, then rod, to trap the charge." },
    { type: "short", q: "Name the process of connecting a body to Earth so electrons can flow.", answer: "grounding|earthing|ground", difficulty: 1, explanation: "Grounding (earthing) provides a path for electrons to flow to or from Earth." },
    { type: "concept", q: "Why does a charged balloon stick to a neutral wall?", answer: "polarisation|induces opposite charge|attracts neutral", difficulty: 2, explanation: "The balloon polarises the wall's charges; the nearer opposite induced charge attracts the balloon more strongly than the like far charge repels it." }
  ]
};

/* --- p4-3: The Electroscope --- */
Lessons["g10-physics-up4-t3"] = {
  overview: "An electroscope is a simple instrument for detecting electric charge and (with a known charge) its sign. The gold-leaf electroscope uses two thin metal leaves that repel each other when they acquire the same charge.",
  objectives: [
    "Describe the construction of a gold-leaf electroscope",
    "Explain how it detects charged and uncharged bodies",
    "Use an electroscope to determine the sign of an unknown charge",
    "Explain how the leaves collapse when charge is removed"
  ],
  simple: "Inside a glass jar, a metal rod hangs with two paper-thin gold leaves at the bottom and a metal disc on top. Touch a charged object to the disc: charge runs down into both leaves. Since both leaves get the SAME charge, they repel and spread apart — the bigger the spread, the more the charge. Bring your finger to the disc and the charge drains away — leaves collapse.",
  detailed: `<p><b>Construction:</b> a metal cap/disc connected to a vertical metal rod inside a glass case (protects air currents and keeps charge from leaking). At the rod's lower end hang two very thin, light <b>gold leaves</b>. Gold is used because it can be hammered extremely thin (light → responds to tiny forces) and doesn't tarnish.</p>
<p><b>Detecting charge:</b> Touch a charged body to the cap → charge conducts to the leaves → both leaves acquire like charge → they repel and diverge. Divergence angle indicates the amount of charge.</p>
<p><b>Detecting an uncharged body:</b> A neutral body touched to the cap causes no divergence.</p>
<p><b>Finding the SIGN (needs a known charge):</b> First charge the electroscope with a known sign, so leaves stand apart. Then bring the unknown rod NEAR the cap (no touch):
<br>• If divergence <b>increases</b> → unknown has the SAME sign (its repelled charge pushes more like charge into the leaves).
<br>• If divergence <b>decreases</b> (leaves collapse) → unknown has the OPPOSITE sign (it attracts charge up, partially neutralising the leaves).</p>
<p><b>Discharging:</b> Touching the cap with a finger (or any conductor to Earth) drains the charge — the leaves fall back together.</p>`,
  keyTerms: [
    { term: "Electroscope", def: "An instrument that detects the presence and amount of electric charge." },
    { term: "Gold leaves", def: "Thin flexible foils that diverge when they share like charge." },
    { term: "Divergence", def: "The spreading apart of the leaves, proportional to stored charge." },
    { term: "Metal cap/disc", def: "The top terminal where charge is applied or induced." },
    { term: "Discharging", def: "Removing the electroscope's charge by grounding it." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "An electroscope is known to be negatively charged (leaves diverged). An unknown rod is brought near the cap and the leaves collapse further together. What is the sign of the rod's charge?",
      given: "Electroscope: negative. Observation: divergence decreases.",
      formula: "Opposite charge near cap attracts positive charge up / neutralises leaf excess.",
      substitution: "A positive rod pulls electrons from the leaves up toward the cap.",
      calculation: "Less like charge in the leaves → less repulsion → leaves fall.",
      answer: "The rod is POSITIVE (opposite sign to the electroscope)."
    },
    {
      problem: "A student touches the cap of a charged electroscope and the leaves drop. Explain.",
      given: "Human body is a conductor connected (through moisture) to Earth.",
      formula: "Grounding provides a path for charge to leave.",
      substitution: "Charge flows from leaves → rod → cap → body → Earth.",
      calculation: "With no net charge left, the leaves no longer repel.",
      answer: "The body grounded the electroscope; charge drained away and the leaves collapsed."
    }
  ],
  commonMistakes: [
    "Thinking the leaves diverge because of attraction — they repel because they carry LIKE charge.",
    "Using an uncharged electroscope to find sign — you need a known charge first.",
    "Believing the glass case is decorative — it prevents charge leakage and air movement."
  ],
  applications: [
    "Classic physics demonstrations of induction, conduction and ionising radiation (charge leaking through ionised air).",
    "Radiation detectors evolved from electroscopes: a charged leaf electroscope discharges faster near radioactive sources.",
    "In electrometers (modern electronic descendants), sensitive charge measurements detect tiny currents."
  ],
  summary: "Gold-leaf electroscope: cap + rod + two thin leaves in glass. Charge → leaves share like charge → diverge. Ground → collapse. To find sign: pre-charge with known sign; more divergence = same sign, less = opposite.",
  visuals: [
    { type: "flowChart", config: { steps: ["Charged body touches cap", "Charge flows down the rod", "Both leaves get like charge", "Like charges repel", "Leaves diverge ∝ charge"], title: "How an Electroscope Works" } }
  , {"type":"qa","config":{"title":"Quick Review — tap a question to reveal the answer","pairs":[{"q":"An electroscope is known to be negatively charged (leaves diverged). An unknown rod is br…","a":"<b>Answer:</b> The rod is POSITIVE (opposite sign to the electroscope)."},{"q":"A student touches the cap of a charged electroscope and the leaves drop. Explain.","a":"<b>Answer:</b> The body grounded the electroscope; charge drained away and the leaves collapsed."}]}}],
  questions: [
    { type: "mcq", q: "The gold leaves of an electroscope diverge because they:", options: ["Have unlike charges attracting", "Have like charges repelling", "Are heated", "Are magnetic"], answer: 1, difficulty: 1, explanation: "Both leaves receive the same sign of charge, so they repel each other." },
    { type: "mcq", q: "Why are the leaves made of gold?", options: ["Gold conducts best", "Gold is cheap", "Gold can be made extremely thin and doesn't tarnish", "Gold is magnetic"], answer: 2, difficulty: 2, explanation: "Gold's malleability gives ultra-thin light leaves, and it resists corrosion that would block charge." },
    { type: "tf", q: "A charged electroscope's leaves collapse when the cap is touched by hand.", answer: true, difficulty: 1, explanation: "The body grounds the electroscope, draining its charge." },
    { type: "concept", q: "A positively charged electroscope has diverged leaves. A rod is brought near without touching and the leaves spread MORE. What is the rod's sign?", answer: "positive|same sign", difficulty: 3, explanation: "A positive rod repels positive charge down into the leaves (electrons drawn up), increasing like charge and divergence — so the rod is positive (same sign)." },
    { type: "short", q: "What part of the electroscope do you touch to apply charge?", answer: "cap|disc|metal cap|metal disc|knob", difficulty: 1, explanation: "Charge is applied to the metal cap (disc) at the top of the rod." }
  ]
};

/* --- p4-4: Coulomb's Law --- */
Lessons["g10-physics-up4-t4"] = {
  overview: "Coulomb's law gives the exact electric force between two point charges: proportional to each charge and inversely proportional to the square of their separation. It is the electrostatic counterpart of Newton's law of gravitation.",
  objectives: [
    "State Coulomb's law mathematically and in words",
    "Use F = kQ₁Q₂/r² with SI units",
    "Predict how force changes when charge or distance changes",
    "Apply the inverse-square relationship"
  ],
  simple: "Two charges push or pull with a force F = k·Q₁Q₂/r². Double either charge → double the force. Double the distance → force drops to a QUARTER (that's the 'square' in inverse-square). k = 9 × 10⁹ is just the constant that makes the units work in air/vacuum.",
  detailed: `<p><b>Coulomb's law:</b> The force between two point charges is directly proportional to the product of the charges and inversely proportional to the square of the distance between their centres:</p>
<p>F = k · Q₁Q₂ / r²</p>
<p>where <b>k = 9.0 × 10⁹ N·m²/C²</b> (in vacuum/air), charges in coulombs, distance in metres. The force acts along the line joining the charges: attractive for unlike, repulsive for like charges.</p>
<p><b>Proportionality reasoning:</b> F ∝ Q₁Q₂ and F ∝ 1/r². So if Q₁ doubles and r halves: F × 2 × 4 = 8 times stronger.</p>
<p><b>By analogy with gravity:</b> Newton's gravitation F = G·m₁m₂/r² has the same inverse-square structure — Coulomb's k plays G's role, charge plays mass's role. But electric force can attract OR repel, and is enormously stronger (k ≫ G).</p>
<p><b>Superposition:</b> with several charges, the net force on one charge is the vector sum of the individual Coulomb forces.</p>`,
  keyTerms: [
    { term: "Coulomb's law", def: "F = kQ₁Q₂/r² — force between two point charges." },
    { term: "Coulomb constant (k)", def: "9.0 × 10⁹ N·m²/C² in vacuum/air." },
    { term: "Point charge", def: "A charge treated as concentrated at a point." },
    { term: "Inverse-square law", def: "A quantity that falls as 1/distance²." },
    { term: "Superposition", def: "Net force = vector sum of forces from each charge." }
  ],
  formulas: [
    {
      name: "Coulomb's law",
      formula: "F = k·Q₁Q₂ / r²",
      meaning: "Electric force between two point charges: bigger charges → bigger force; larger separation → force falls with the square.",
      vars: [
        { name: "F", meaning: "electrostatic force", unit: "N" },
        { name: "k", meaning: "Coulomb constant (9.0 × 10⁹)", unit: "N·m²/C²" },
        { name: "Q₁, Q₂", meaning: "the two charges", unit: "C" },
        { name: "r", meaning: "distance between charge centres", unit: "m" }
      ],
      units: "newtons (N)",
      when: "Whenever you need the force between two charged bodies small compared to their separation.",
      example: "Q₁ = Q₂ = 1 μC, r = 0.1 m: F = 9×10⁹ × 10⁻⁶ × 10⁻⁶ / 0.01 = 0.9 N."
    }
  ],
  workedExamples: [
    {
      problem: "Two charges of +3 μC and −6 μC are 30 cm apart in air. Find the force between them and state its nature.",
      given: "Q₁ = 3×10⁻⁶ C, Q₂ = 6×10⁻⁶ C, r = 0.30 m, k = 9×10⁹",
      formula: "F = kQ₁Q₂/r²",
      substitution: "F = 9×10⁹ × (3×10⁻⁶)(6×10⁻⁶) / (0.30)²",
      calculation: "F = 9×10⁹ × 1.8×10⁻¹¹ / 0.09 = 0.162/0.09 = 1.8 N",
      answer: "F = 1.8 N, ATTRACTIVE (unlike charges)."
    },
    {
      problem: "The distance between two charges is tripled while both charges are doubled. By what factor does the force change?",
      given: "Q → 2Q each, r → 3r",
      formula: "F ∝ Q₁Q₂/r²",
      substitution: "New F ∝ (2)(2)/(3²) = 4/9",
      calculation: "Factor = 4/9 ≈ 0.44",
      answer: "The force becomes 4/9 of its original value."
    }
  ],
  commonMistakes: [
    "Forgetting to square r — tripling distance cuts force by 9, not 3.",
    "Using cm instead of metres in the formula.",
    "Plugging in the negative sign of a charge when computing force magnitude (use |Q|, then decide attract/repel separately).",
    "Confusing k (9×10⁹) with G (6.67×10⁻¹¹)."
  ],
  applications: [
    "Explains why electrons stay bound in atoms — the electric force at atomic distances is immense.",
    "Design of capacitors and high-voltage equipment relies on Coulomb forces between plates.",
    "Static cling, dust attraction on screens, and photocopier toner behaviour are all Coulomb forces.",
    "Force fields in mass spectrometers and particle accelerators build on this law."
  ],
  summary: "F = kQ₁Q₂/r², k = 9×10⁹ N·m²/C². Force ∝ product of charges, ∝ 1/r². Like charges repel, unlike attract. Always convert μC → ×10⁻⁶ C and cm → m before substituting.",
  visuals: [
    { type: "motionGraph", config: { xLabel: "r (m)", yLabel: "F (N)", data: [9, 2.25, 1, 0.5625, 0.36], title: "Inverse-square: F vs r" } }
  , {"type":"qa","config":{"title":"Quick Review — tap a question to reveal the answer","pairs":[{"q":"Two charges of +3 μC and −6 μC are 30 cm apart in air. Find the force between them and st…","a":"<b>Answer:</b> F = 1.8 N, ATTRACTIVE (unlike charges)."},{"q":"The distance between two charges is tripled while both charges are doubled. By what facto…","a":"<b>Answer:</b> The force becomes 4/9 of its original value."}]}}],
  questions: [
    { type: "mcq", q: "If the distance between two charges is halved, the force becomes:", options: ["Half", "Double", "Four times", "One quarter"], answer: 2, difficulty: 1, explanation: "F ∝ 1/r²; halving r multiplies F by 1/(½)² = 4." },
    { type: "mcq", q: "The value of the Coulomb constant k in air is approximately:", options: ["6.67×10⁻¹¹", "9×10⁹", "3×10⁸", "1.6×10⁻¹⁹"], answer: 1, difficulty: 1, explanation: "k = 9.0×10⁹ N·m²/C². (6.67×10⁻¹¹ is G; 3×10⁸ is c; 1.6×10⁻¹⁹ is e.)" },
    { type: "calc", q: "Two +1 μC charges are 0.1 m apart. Find the force in newtons. (k = 9×10⁹)", answer: "0.09", difficulty: 2, explanation: "F = 9×10⁹ × 10⁻⁶ × 10⁻⁶ / 0.01 = 0.09 N (repulsive).", tolerance: 0.005 },
    { type: "calc", q: "Q₁ = 2 μC, Q₂ = 4 μC, r = 0.2 m. Find F in newtons.", answer: "1.8", difficulty: 2, explanation: "F = 9×10⁹ × (2×10⁻⁶)(4×10⁻⁶)/(0.2²) = 9×10⁹ × 8×10⁻¹²/0.04 = 1.8 N.", tolerance: 0.05 },
    { type: "tf", q: "Coulomb's force between two electrons is attractive.", answer: false, difficulty: 1, explanation: "Electrons are like charges — they repel." },
    { type: "concept", q: "Why is Coulomb's law called an inverse-square law?", answer: "force proportional 1/r squared|falls with square of distance", difficulty: 2, explanation: "Because the force is proportional to 1/r² — doubling distance reduces force to one quarter." }
  ]
};

/* --- p4-5: Ohm's Law and Electric Circuits --- */
Lessons["g10-physics-up4-t5"] = {
  overview: "Ohm's law links the three quantities that describe current flow: voltage (the push), current (the flow) and resistance (the opposition). Master it and you can analyse almost any simple circuit.",
  objectives: [
    "Define current, voltage and resistance with their SI units",
    "State and apply Ohm's law V = IR",
    "Read and use I–V graphs for ohmic conductors",
    "Distinguish ohmic from non-ohmic behaviour"
  ],
  simple: "Water-pipe analogy: voltage is the pump pressure, current is how much water flows per second, resistance is how narrow/clogged the pipe is. Ohm's law: V = I × R. More pressure → more flow; more clog → less flow. A component obeys Ohm's law if doubling V exactly doubles I — its I–V graph is a straight line through the origin.",
  detailed: `<p><b>Current (I):</b> rate of flow of charge, I = Q/t. Unit: ampere (A) = 1 C/s. Measured with an ammeter in SERIES.</p>
<p><b>Voltage / potential difference (V):</b> energy per coulomb supplied or used, V = W/Q. Unit: volt (V) = 1 J/C. Measured with a voltmeter in PARALLEL across the component.</p>
<p><b>Resistance (R):</b> opposition to current. Unit: ohm (Ω) = 1 V/A. Depends on material, length, cross-section and temperature.</p>
<p><b>Ohm's law:</b> For a conductor at constant temperature, the current is directly proportional to the potential difference: V = IR.</p>
<p><b>I–V characteristics:</b> An <b>ohmic</b> conductor (metal wire at fixed temperature) gives a straight line through the origin; gradient = 1/R (on an I-vs-V plot). <b>Non-ohmic</b> examples: a filament lamp (curve flattens as the hot filament's resistance rises), a diode (conducts one way only, threshold ~0.7 V).</p>
<p><b>Rearranging:</b> I = V/R and R = V/I. Triangle trick: cover the one you want — V on top of I·R.</p>`,
  keyTerms: [
    { term: "Electric current", def: "Rate of flow of charge, I = Q/t, in amperes (A)." },
    { term: "Potential difference (voltage)", def: "Energy transferred per coulomb, V = W/Q, in volts (V)." },
    { term: "Resistance", def: "Opposition to current, R = V/I, in ohms (Ω)." },
    { term: "Ohm's law", def: "V = IR, at constant temperature." },
    { term: "Ohmic conductor", def: "One whose I–V graph is a straight line through the origin." },
    { term: "Non-ohmic", def: "Component whose resistance changes with conditions (lamp, diode)." }
  ],
  formulas: [
    {
      name: "Ohm's law",
      formula: "V = I·R",
      meaning: "Voltage across a conductor equals current times resistance.",
      vars: [
        { name: "V", meaning: "potential difference", unit: "V" },
        { name: "I", meaning: "current", unit: "A" },
        { name: "R", meaning: "resistance", unit: "Ω" }
      ],
      units: "volts = amperes × ohms",
      when: "Any ohmic component or circuit section at steady temperature.",
      example: "I = 0.5 A through R = 12 Ω → V = 6 V."
    },
    {
      name: "Current as charge flow",
      formula: "I = Q / t",
      meaning: "Current is charge passing a point per second.",
      vars: [
        { name: "I", meaning: "current", unit: "A" },
        { name: "Q", meaning: "charge", unit: "C" },
        { name: "t", meaning: "time", unit: "s" }
      ],
      units: "amperes (A)",
      when: "To relate coulombs to amps and seconds (e.g. battery capacity).",
      example: "30 C in 10 s → I = 3 A."
    }
  ],
  workedExamples: [
    {
      problem: "A 9 V battery drives a current of 0.03 A through a bulb. Find the bulb's resistance.",
      given: "V = 9 V, I = 0.03 A",
      formula: "R = V/I",
      substitution: "R = 9 / 0.03",
      calculation: "R = 300 Ω",
      answer: "The bulb's (hot) resistance is 300 Ω."
    },
    {
      problem: "How much charge passes a 2 A filament in 5 minutes?",
      given: "I = 2 A, t = 5 min = 300 s",
      formula: "Q = I·t",
      substitution: "Q = 2 × 300",
      calculation: "Q = 600 C",
      answer: "600 coulombs — that's 600 / 1.6×10⁻¹⁹ ≈ 3.75 × 10²¹ electrons."
    }
  ],
  commonMistakes: [
    "Writing 'V = IR' but substituting in mA or kΩ without converting (mA × kΩ actually gives volts — handy shortcut, but know why).",
    "Thinking current is 'used up' by components — the same current flows in a series loop; energy is what's transferred.",
    "Connecting an ammeter in parallel (it shorts the circuit) or a voltmeter in series (it blocks current).",
    "Assuming every component obeys Ohm's law — lamps and diodes don't."
  ],
  applications: [
    "Sizing resistors for LEDs: R = (V_supply − V_LED)/I_LED protects the LED.",
    "Electric heaters exploit R: high-resistance coils convert electrical energy to heat.",
    "Fuses and breakers are chosen using I = P/V so wiring never carries excess current.",
    "Every phone charger regulates V and limits I using Ohm's-law relationships."
  ],
  summary: "V = IR (ohmic, constant temperature). I = Q/t in amperes; V = W/Q in volts; R in ohms. Ammeter in series, voltmeter in parallel. Ohmic → straight I–V line; filament lamp and diode → non-ohmic curves.",
  visuals: [
    { type: "motionGraph", config: { xLabel: "V (volts)", yLabel: "I (A)", data: [0, 0.25, 0.5, 0.75, 1.0], title: "Ohmic conductor: straight I–V line (R = 8 Ω)" } }
  , {"type":"qa","config":{"title":"Quick Review — tap a question to reveal the answer","pairs":[{"q":"A 9 V battery drives a current of 0.03 A through a bulb. Find the bulb's resistance.","a":"<b>Answer:</b> The bulb's (hot) resistance is 300 Ω."},{"q":"How much charge passes a 2 A filament in 5 minutes?","a":"<b>Answer:</b> 600 coulombs — that's 600 / 1.6×10⁻¹⁹ ≈ 3.75 × 10²¹ electrons."}]}}],
  questions: [
    { type: "mcq", q: "An ammeter is connected in:", options: ["Parallel", "Series", "Either", "Across the supply only"], answer: 1, difficulty: 1, explanation: "Ammeters measure flow THROUGH a point, so they go in series; voltmeters go in parallel." },
    { type: "calc", q: "A 240 V heater draws 5 A. What is its resistance in ohms?", answer: "48", difficulty: 1, explanation: "R = V/I = 240/5 = 48 Ω.", tolerance: 0.5 },
    { type: "calc", q: "What current flows through a 100 Ω resistor with 12 V across it? Give in amperes.", answer: "0.12", difficulty: 1, explanation: "I = V/R = 12/100 = 0.12 A.", tolerance: 0.005 },
    { type: "mcq", q: "Which component is NON-ohmic?", options: ["Constant-temperature wire", "Filament lamp", "Fixed metal resistor", "Nichrome at steady low current"], answer: 1, difficulty: 2, explanation: "A filament lamp's resistance rises as it heats, so its I–V graph curves." },
    { type: "tf", q: "Doubling the voltage across an ohmic resistor doubles the current.", answer: true, difficulty: 1, explanation: "For constant R, I = V/R — I is directly proportional to V." },
    { type: "short", q: "State the SI unit of electric current.", answer: "ampere|amp|a", difficulty: 1, explanation: "The ampere (A) — one coulomb per second." }
  ]
};

/* --- p4-6: Combination of Resistors --- */
Lessons["g10-physics-up4-t6"] = {
  overview: "Real circuits combine resistors in series and parallel. Series adds resistances; parallel reduces the total below the smallest. Two simple rules let you reduce any network to one equivalent resistor.",
  objectives: [
    "Derive and apply R_total = R₁ + R₂ + … for series",
    "Derive and apply 1/R_total = 1/R₁ + 1/R₂ + … for parallel",
    "Use the product-over-sum shortcut for two parallel resistors",
    "Analyse mixed series–parallel networks"
  ],
  simple: "Series = one long road: current must pass through every resistor, so obstacles add up (R = R₁+R₂). Parallel = multiple lanes: current splits, so the total obstacle is LESS than your smallest lane. Two lanes? Use the shortcut: R = (R₁×R₂)/(R₁+R₂).",
  detailed: `<p><b>Series:</b> same current I through each resistor; voltages add: V = V₁+V₂+V₃ → IR = IR₁+IR₂+IR₃, so:</p>
<p>R_s = R₁ + R₂ + R₃ + …</p>
<p>The equivalent is always LARGER than the biggest resistor. (Two equal R in series → 2R.)</p>
<p><b>Parallel:</b> same voltage V across each branch; currents add: I = I₁+I₂+I₃ → V/R = V/R₁+V/R₂+V/R₃, so:</p>
<p>1/R_p = 1/R₁ + 1/R₂ + 1/R₃ + …</p>
<p>The equivalent is always SMALLER than the smallest branch. Two resistors shortcut:</p>
<p>R_p = (R₁·R₂)/(R₁+R₂)</p>
<p>Special cases: n equal resistors R in parallel → R/n. Two equal R → R/2.</p>
<p><b>Mixed networks:</b> reduce innermost groups first (parallel blocks to one R, series runs to one R), repeat until one equivalent remains. Then apply Ohm's law to the whole circuit.</p>
<p><b>Why it works intuitively:</b> series lengthens the resistive path (more opposition); parallel widens it (more paths → less opposition), mirroring R ∝ L/A of a wire.</p>`,
  keyTerms: [
    { term: "Series combination", def: "Components end-to-end sharing one current; resistances add." },
    { term: "Parallel combination", def: "Components across the same two nodes sharing voltage; conductances add." },
    { term: "Equivalent resistance", def: "Single resistance that could replace a network with the same total effect." },
    { term: "Branch current", def: "The current through one parallel path; larger in the smaller-R branch." }
  ],
  formulas: [
    {
      name: "Series resistors",
      formula: "R_s = R₁ + R₂ + R₃",
      meaning: "Total resistance of resistors in a single chain.",
      vars: [
        { name: "R_s", meaning: "series equivalent", unit: "Ω" },
        { name: "R₁, R₂, R₃", meaning: "individual resistances", unit: "Ω" }
      ],
      units: "ohms (Ω)",
      when: "Resistors connected end-to-end with one current path.",
      example: "4 + 6 + 10 = 20 Ω."
    },
    {
      name: "Parallel resistors",
      formula: "1/R_p = 1/R₁ + 1/R₂ (+ …)",
      meaning: "Reciprocal of total equals sum of reciprocals.",
      vars: [
        { name: "R_p", meaning: "parallel equivalent", unit: "Ω" },
        { name: "R₁, R₂", meaning: "branch resistances", unit: "Ω" }
      ],
      units: "ohms (Ω)",
      when: "Resistors sharing the same two nodes; current divides between them.",
      example: "6 Ω ∥ 3 Ω → (6×3)/(6+3) = 2 Ω."
    }
  ],
  workedExamples: [
    {
      problem: "A 4 Ω resistor is in series with a parallel pair of 6 Ω and 3 Ω. The battery is 12 V. Find total resistance and total current.",
      given: "R₁ = 4 Ω; R₂ = 6 Ω ∥ R₃ = 3 Ω; V = 12 V",
      formula: "Parallel shortcut, then series add, then Ohm's law",
      substitution: "R_p = (6×3)/(6+3) = 2 Ω; R_total = 4 + 2 = 6 Ω",
      calculation: "I = V/R = 12/6 = 2 A",
      answer: "R_total = 6 Ω, I = 2 A. (The 12 V splits: 8 V across the 4 Ω, 4 V across the parallel block.)"
    },
    {
      problem: "Three 9 Ω resistors are available. What total resistances can you make using all three?",
      given: "Three 9 Ω resistors, must use all",
      formula: "Series: sum; parallel: R/n; mixed combos",
      substitution: "All series: 27 Ω. All parallel: 9/3 = 3 Ω. One in series with two parallel: 9 + 4.5 = 13.5 Ω.",
      calculation: "Also two in series (18) parallel with 9: (18×9)/27 = 6 Ω.",
      answer: "27 Ω, 13.5 Ω, 6 Ω, or 3 Ω."
    }
  ],
  commonMistakes: [
    "Adding reciprocals and FORGETTING to flip back: 1/R = 1/6 + 1/3 = 1/2 → R = 2 Ω, not '0.5'.",
    "Using product-over-sum for THREE resistors — the shortcut is only valid for two.",
    "Expecting parallel total to be bigger — it's always smaller than the smallest branch.",
    "Reducing a mixed network in the wrong order — always collapse the innermost parallel blocks first."
  ],
  applications: [
    "Household wiring is parallel: every appliance gets full mains voltage and can switch independently.",
    "Series resistors make voltage dividers for sensor inputs and LED current limiting.",
    "Fuses and range extenders (multipliers) for meters use precise series/parallel resistor design.",
    "Adding appliances in parallel increases total current — why circuits overload at night."
  ],
  summary: "Series: R = R₁+R₂+… (bigger than all). Parallel: 1/R = 1/R₁+1/R₂+… (smaller than all); two-resistor shortcut R = R₁R₂/(R₁+R₂); n equal → R/n. Mixed networks: reduce innermost blocks first, then Ohm's law.",
  visuals: [
    { type: "flowChart", config: { steps: ["Find innermost parallel block", "Replace with equivalent R", "Add series resistances", "One equivalent R remains", "Apply I = V/R_total"], title: "Reducing a Mixed Network" } }
  , {"type":"qa","config":{"title":"Quick Review — tap a question to reveal the answer","pairs":[{"q":"A 4 Ω resistor is in series with a parallel pair of 6 Ω and 3 Ω. The battery is 12 V. Fin…","a":"<b>Answer:</b> R_total = 6 Ω, I = 2 A. (The 12 V splits: 8 V across the 4 Ω, 4 V across the parallel block.)"},{"q":"Three 9 Ω resistors are available. What total resistances can you make using all three?","a":"<b>Answer:</b> 27 Ω, 13.5 Ω, 6 Ω, or 3 Ω."}]}}],
  questions: [
    { type: "calc", q: "Two resistors 8 Ω and 8 Ω in parallel. Total in ohms?", answer: "4", difficulty: 1, explanation: "Two equal R in parallel → R/2 = 4 Ω.", tolerance: 0.1 },
    { type: "calc", q: "R₁ = 2 Ω and R₂ = 6 Ω in parallel. Find the total (product over sum).", answer: "1.5", difficulty: 2, explanation: "(2×6)/(2+6) = 12/8 = 1.5 Ω.", tolerance: 0.05 },
    { type: "mcq", q: "The total resistance of a parallel combination is always:", options: ["Greater than the largest", "Equal to the sum", "Less than the smallest", "Between the two"], answer: 2, difficulty: 1, explanation: "Extra paths always reduce total resistance below the smallest branch." },
    { type: "calc", q: "3 Ω, 4 Ω and 5 Ω in series across 12 V. Current in amperes?", answer: "1", difficulty: 1, explanation: "R = 3+4+5 = 12 Ω; I = 12/12 = 1 A.", tolerance: 0.05 },
    { type: "concept", q: "Why are house lights wired in parallel rather than series?", answer: "each gets full voltage|one fails others stay on|independent", difficulty: 2, explanation: "Parallel gives every lamp the full mains voltage and lets them work independently — one burnt bulb doesn't kill the circuit." },
    { type: "tf", q: "Adding a resistor in parallel always increases the total resistance.", answer: false, difficulty: 1, explanation: "It decreases it — more paths means less opposition." }
  ]
};

/* --- p4-7: Electrical Safety --- */
Lessons["g10-physics-up4-t7"] = {
  overview: "Mains electricity is useful and dangerous. Understanding fuses, earthing, circuit breakers and safe practices lets you explain how household wiring protects people from shock and fire.",
  objectives: [
    "Explain how electric shock occurs and what makes it dangerous",
    "Describe the role of the fuse and how it is rated",
    "Explain earthing and how it prevents shocks",
    "Compare fuses with circuit breakers and list safety practices"
  ],
  simple: "Current takes the easiest path to ground — including through YOU. Three protections: (1) a FUSE melts if too much current flows, cutting the circuit; (2) the EARTH wire gives dangerous stray current an easy path that blows the fuse before your hand does; (3) insulation and dry hands keep current out of you in the first place. Rule of thumb: current above ~10 mA through the body is painful, above ~100 mA can be fatal.",
  detailed: `<p><b>Why current is dangerous:</b> The body conducts (especially when wet — salt water/sweat lowers skin resistance). Currents as low as 10 mA cause muscle contraction; ~30 mA can paralyse breathing muscles; around 100 mA through the chest can stop the heart (ventricular fibrillation). Danger depends on current, path and duration — and I = V/R, so high voltage (mains ~220 V in Ethiopia) drives dangerous currents even through dry skin.</p>
<p><b>The fuse:</b> a short piece of thin wire in series with the live supply. If current exceeds its rating, the wire heats (I²R) and melts, breaking the circuit. Choose a fuse rated slightly ABOVE the appliance's normal current (e.g. 3 A for a lamp, 13 A for a heater). Too low → nuisance blows; too high → no protection.</p>
<p><b>Cable colours (Ethiopia/EU standard):</b> Live (L) = brown, Neutral (N) = blue, Earth (E) = green/yellow stripes.</p>
<p><b>Earthing:</b> metal-cased appliances connect their casing to Earth via the thick green-yellow wire. If the live wire loosens and touches the casing, the earth path creates a huge current → fuse blows instantly → casing never stays live. Without earth, touching the casing would complete the path through you.</p>
<p><b>Circuit breakers (MCB/ELCB):</b> switches that trip magnetically (overcurrent) or by detecting live/neutral imbalance (earth-leakage, ~30 mA) and can be reset; faster and more sensitive than fuses.</p>
<p><b>Safety practices:</b> never touch wires with wet hands; don't overload sockets (daisy-chained heaters trip and overheat wiring); replace damaged cables; keep metal away from outlets; isolate a shock victim with a dry wooden stick, never bare hands.</p>`,
  keyTerms: [
    { term: "Live wire", def: "Carries the high voltage from the supply (brown)." },
    { term: "Neutral wire", def: "Returns current to the supply (blue)." },
    { term: "Earth wire", def: "Safety path from casing to ground (green/yellow)." },
    { term: "Fuse", def: "Thin wire that melts and breaks the circuit on overcurrent." },
    { term: "Short circuit", def: "Low-resistance unintended path causing very large current." },
    { term: "Overload", def: "Too many/too powerful appliances drawing excess current." },
    { term: "Circuit breaker", def: "Resettable automatic switch that trips on excess current." }
  ],
  formulas: [
    {
      name: "Ohm's law for shock risk",
      formula: "I = V / R",
      meaning: "Current through the body = applied voltage ÷ body resistance.",
      vars: [
        { name: "I", meaning: "current through body", unit: "A" },
        { name: "V", meaning: "voltage across contact points", unit: "V" },
        { name: "R", meaning: "body resistance (≈100 kΩ dry, ≈1 kΩ wet)", unit: "Ω" }
      ],
      units: "amperes",
      when: "Estimating why wet contact with mains is so dangerous.",
      example: "220 V across wet skin (1 kΩ): I = 0.22 A = 220 mA — potentially fatal."
    }
  ],
  workedExamples: [
    {
      problem: "An electric heater draws 2200 W from a 220 V supply. Which fuse rating is appropriate: 3 A, 10 A or 13 A?",
      given: "P = 2200 W, V = 220 V",
      formula: "I = P/V",
      substitution: "I = 2200/220 = 10 A",
      calculation: "Normal current 10 A → fuse must sit slightly above it.",
      answer: "A 13 A fuse. A 10 A fuse would blow during normal use; 3 A is far too small."
    },
    {
      problem: "A person with dry skin (R ≈ 100 kΩ) touches a 220 V live wire while standing insulated. Estimate the current and explain why wet hands change everything.",
      given: "V = 220 V; R_dry = 100 kΩ; R_wet ≈ 1 kΩ",
      formula: "I = V/R",
      substitution: "Dry: 220/100 000 = 2.2 mA. Wet: 220/1000 = 220 mA.",
      calculation: "2.2 mA is barely felt; 220 mA is well past the fibrillation threshold (~100 mA).",
      answer: "Dry skin limits current to a tingle; wet skin drops resistance ~100×, making the same voltage potentially lethal."
    }
  ],
  commonMistakes: [
    "Thinking the neutral wire is always safe — a broken neutral can leave appliances live.",
    "Replacing a blown fuse with a bigger one 'to stop it blowing' — that removes the protection; find the fault instead.",
    "Confusing earth with neutral: neutral carries normal current; earth carries current only in a fault.",
    "Believing low voltage is always safe — wet conditions make even 24 V hazardous near the heart."
  ],
  applications: [
    "Three-pin plugs: the earth pin is longer so the case grounds BEFORE live connects.",
    "ELCB/RCD outlets in bathrooms cut power within milliseconds of a 30 mA leak.",
    "Double insulation (plastic-cased tools) removes the need for an earth wire.",
    "Power-limiter strips prevent socket overloads in homes with many appliances."
  ],
  summary: "Danger = current through the body (I = V/R; wet skin is far riskier). Fuse melts on overcurrent (rate slightly above normal). Earth wire gives faults a low-resistance path so the fuse blows. Breakers are resettable and faster. Practices: dry hands, no overloads, intact insulation, never replace fuses with larger ones.",
  visuals: [
    { type: "flowChart", config: { steps: ["Live wire faults to metal casing", "Casing becomes live", "Earth wire provides low-R path", "Huge fault current flows", "Fuse melts / breaker trips", "Casing safe"], title: "How Earthing Protects You" } }
  , {"type":"qa","config":{"title":"Quick Review — tap a question to reveal the answer","pairs":[{"q":"An electric heater draws 2200 W from a 220 V supply. Which fuse rating is appropriate: 3…","a":"<b>Answer:</b> A 13 A fuse. A 10 A fuse would blow during normal use; 3 A is far too small."},{"q":"A person with dry skin (R ≈ 100 kΩ) touches a 220 V live wire while standing insulated. E…","a":"<b>Answer:</b> Dry skin limits current to a tingle; wet skin drops resistance ~100×, making the same voltage potentially lethal."}]}}],
  questions: [
    { type: "mcq", q: "In an Ethiopian-standard plug, the earth wire is coloured:", options: ["Brown", "Blue", "Green with yellow stripes", "Black"], answer: 2, difficulty: 1, explanation: "Earth is green/yellow; live is brown, neutral is blue." },
    { type: "mcq", q: "A fuse protects a circuit by:", options: ["Reducing the voltage", "Melting and breaking the circuit on excess current", "Storing excess current", "Reversing the current"], answer: 1, difficulty: 1, explanation: "The thin fuse wire heats and melts when current exceeds its rating, opening the circuit." },
    { type: "calc", q: "An appliance draws 440 W at 220 V. What minimum normal current does it use, in amperes?", answer: "2", difficulty: 2, explanation: "I = P/V = 440/220 = 2 A — so a 3 A fuse would suit it.", tolerance: 0.1 },
    { type: "concept", q: "Why does touching a live wire with wet hands increase the danger?", answer: "lower resistance|more current|wet skin less resistance", difficulty: 2, explanation: "Water with dissolved salts lowers skin resistance, so for the same voltage I = V/R gives a much larger, potentially fatal current." },
    { type: "tf", q: "A circuit breaker must be replaced after it trips.", answer: false, difficulty: 1, explanation: "Breakers are resettable; only fuses must be replaced." },
    { type: "mcq", q: "The earth wire in a metal-cased appliance is attached to:", options: ["The heating element", "The metal casing", "The live terminal", "The neutral terminal"], answer: 1, difficulty: 2, explanation: "Earth connects the casing to ground so a fault current blows the fuse instead of the user." }
  ]
};
