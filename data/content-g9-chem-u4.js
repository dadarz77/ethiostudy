/* Content: Grade 9 Chemistry — Unit 4: Periodic Classification of Elements (2 topics) */
window.Lessons = window.Lessons || {};

Lessons["g9-chemistry-uc4-t1"] = {
  overview: "The periodic table is chemistry's map: 118 elements arranged so that position predicts behavior. This lesson covers how the map was built (Mendeleev's genius), how to read it (groups, periods), and the metal/non-metal geography on it.",
  objectives: [
    "Explain Mendeleev's arrangement and his bold predictions",
    "State the modern law: properties are periodic functions of atomic number",
    "Identify groups and periods and what their numbers encode",
    "Name the main families: alkali metals, halogens, noble gases",
    "Locate metals, non-metals and metalloids on the table"
  ],
  simple: "Elements sit in <b>columns (groups 1–18)</b> by similar behavior and <b>rows (periods)</b> by increasing atomic number. <b>Mendeleev (1869)</b> arranged 63 known elements by mass and left GAPS for undiscovered ones — gallium, scandium and germanium later filled them exactly as predicted, proving the map real. Modern law: properties repeat with <b>atomic number</b> (Moseley's fix). Group = valence electrons (Group 1 all have 1); period = shells. Geography: metals left, non-metals right, <b>metalloids</b> (boron, silicon…) on the staircase between. Families: <b>alkali metals</b> (Li/Na/K — soft, water-reactive), <b>halogens</b> (F/Cl/Br/I — reactive non-metals), <b>noble gases</b> (He–Rn — inert).",
  detailed: "<p><b>Before Mendeleev:</b> Dobereiner's triads (strontium's weight = mean of calcium and barium) and Newlands' octaves (every 8th element repeats — ridiculed) hinted at pattern. <b>Mendeleev's leap:</b> he arranged by atomic MASS but organized BY PROPERTIES — elements of similar behavior in one column — and where the pattern demanded, he (1) left gaps and (2) boldly predicted missing elements' properties ('eka-aluminium', 'eka-silicon'), even questioning measured masses when the pattern said the data was wrong. When gallium (1875), scandium (1879) and germanium (1886) were found matching his predictions almost digit-for-digit, the table became chemistry's oracle. <b>Moseley (1913)</b> then re-ordered by X-ray-measured <b>atomic number</b> — fixing argon/potassium's inverted masses — giving the <b>Modern Periodic Law</b>: physical and chemical properties are periodic functions of atomic number. Because electron configuration (Unit 3) fills shells regularly, the periodicity IS electronic structure made visible.</p><p><b>Reading the map:</b> 18 <b>groups</b> (vertical columns) = same valence electrons, same family behavior: Group 1 alkali metals (1 valence), Group 2 alkaline earths (2), Group 17 halogens (7), Group 18 noble gases (8/duet). 7 <b>periods</b> (horizontal rows) = number of shells; within a period, valence climbs 1→8 left to right — one electron added per step, properties marching steadily from metallic to gaseous. The lower two rows (<b>lanthanides/actinides</b>) are pulled out to keep the page narrow — they belong between groups 2 and 3 in periods 6–7.</p><p><b>Metals vs non-metals:</b> metals (left + center — all but a few are shiny solids, conduct, malleable, lose electrons forming cations, make basic oxides: sodium, iron, copper, gold); non-metals (top right — dull, insulating, brittle, gain/share electrons forming anions or molecules, acidic oxides: oxygen, chlorine, carbon, sulfur). The <b>staircase</b> from boron to polonium hosts <b>metalloids</b> — silicon and germanium: semiconductors, the physical basis of every computer chip, which is why 'silicon' names the tech world. Hydrogen parks awkwardly top-left — a non-metal that could be Group 1 (1 valence) or 17 (needs one).</p><p>Families with personality: <b>alkali metals</b> — soft enough to cut, tarnish instantly, fizz and ignite in water (reactivity rises DOWN the group — easier electron loss as shells grow); <b>halogens</b> — fluorine (pale gas) → chlorine (green gas) → bromine (red liquid) → iodine (purple-black solid), all one electron short of octet, so ferociously reactive; reactivity falls down the group (opposite trend to metals!). <b>Noble gases</b> — complete shells, monatomic, used in welding shields, neon signs and cryogenics.</p><p>Where the table came from and where new elements come from: elements 1–94 mostly natural (technetium-98 and promethium-145 ghostly exceptions); heavier ones synthesized in accelerators and named (oganesson, livermorium…). The table remains a working document — position still predicts behavior, and every 'why' traces back to electronic configuration.</p>",
  keyTerms: [
    { term: "Group / period", def: "Vertical family (same valence) / horizontal row (same shells)" },
    { term: "Periodic law", def: "Properties recur with atomic number (Moseley's modern form)" },
    { term: "Alkali metals / halogens / noble gases", def: "Group 1 / 17 / 18 families" },
    { term: "Metalloid", def: "Staircase element with intermediate properties (semiconductors)" },
    { term: "eka-", def: "Mendeleev's prefix for predicted undiscovered analogues" },
    { term: "Transition metals", def: "Middle block (Sc–Zn etc.), variable properties, colored compounds" }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "Mendeleev placed Ar(39.9) before K(39.1) despite mass order. What principle won?",
      answer: "Chemical behavior — argon's inertness grouped it with neon, potassium's alkali metal character with sodium; atomic number (Moseley) later justified it exactly"
    },
    {
      problem: "An element X: group 2, period 4. Give its valence electrons and likely reactivity trend vs calcium.",
      answer: "2 valence electrons; it's BELOW calcium → more reactive (loses its two easier with extra shells)"
    },
    {
      problem: "Predict: is bromine a metal/non-metal, and how does its reactivity compare to chlorine?",
      answer: "Non-metal halogen; LESS reactive than chlorine — halogen reactivity falls down the group"
    },
    {
      problem: "Which element fills the 'eka-silicon' slot, and what did Mendeleev predict about it?",
      answer: "Germanium (1886) — greyish metalloid, density ~5.5, oxide of formula XO₂ with density 4.7 — all roughly verified"
    }
  ],
  commonMistakes: [
    "Saying properties repeat with atomic MASS (it's atomic NUMBER)",
    "Mixing group and period: group = valence; period = shells",
    "Expecting uniform reactivity trends: metals increase down groups, halogens DECREASE down",
    "Calling hydrogen an alkali metal (one valence electron ≠ metal)",
    "Thinking Mendeleev invented the elements he placed (he organized known ones and predicted gaps)",
    "Forgetting metalloids' staircase location when classifying 'in-between' elements"
  ],
  applications: [
    "Semiconductor industry: metalloids (silicon, germanium) power phones/solar — position predicts use",
    "Predicting reactions: table says lithium behaves like sodium BEFORE you ever see the reaction",
    "Medicine & biology: iodine (halogen) for thyroid, iron (transition) for blood, calcium (group 2) for bone",
    "Ethiopian mining: knowing which elements accompany which ores guides gold, potash and tantalite exploration",
    "Welding & lighting: noble-gas chemistry decides argon shields, neon signs, helium cryogenics"
  ],
  summary: "The table orders elements by atomic number into groups (same valence, same behavior) and periods (same shells, steady drift). Mendeleev proved its power by predicting missing elements; Moseley grounded it in atomic number. Geography is destiny: metals left, non-metals right, metalloids on the staircase, and the named families (alkalis, halogens, nobles) carry the trend rules.",
  visuals: [],
  questions: [
    { type: "mcq", q: "The modern periodic law orders elements by:", options: ["atomic mass", "atomic number", "discovery date", "density"], answer: 1, difficulty: 1, explanation: "Moseley's X-ray numbers fixed the order." },
    { type: "mcq", q: "Elements in the same group share the same number of:", options: ["shells", "valence electrons", "protons", "neutrons"], answer: 1, difficulty: 1, explanation: "That's why they behave alike." },
    { type: "mcq", q: "Mendeleev's strongest evidence his table worked was:", options: ["its color scheme", "predicted elements later discovered with matching properties", "being first to try", "alphabetical order"], answer: 1, difficulty: 2, explanation: "Gallium, scandium, germanium = the 'eka' predictions." },
    { type: "mcq", q: "The halogens are in group:", options: ["1", "2", "17", "18"], answer: 2, difficulty: 1, explanation: "Seven valence electrons, one short of octet." },
    { type: "mcq", q: "A period number tells the element's:", options: ["valence count", "occupied shells", "metallicity", "mass"], answer: 1, difficulty: 2, explanation: "Row 3 = three shells (e.g. Na: 2,8,1)." },
    { type: "mcq", q: "Metalloids sit:", options: ["far left", "far right", "along the staircase between metals and non-metals", "in the middle block"], answer: 2, difficulty: 1, explanation: "B, Si, Ge, As, Sb, Te." },
    { type: "mcq", q: "Alkali metals' reactivity as you go DOWN group 1:", options: ["increases", "decreases", "stays equal", "doubles randomly"], answer: 0, difficulty: 2, explanation: "Easier to lose the farther valence electron." },
    { type: "mcq", q: "Noble gases barely react because:", options: ["they are gases", "their outer shells are full", "they are light", "they lack electrons"], answer: 1, difficulty: 1, explanation: "Completed octet = no octet drive." },
    { type: "mcq", q: "Moseley's re-ordering resolved which problem?", options: ["hydrogen's spot", "mass-inverted pairs like Ar/K", "the lanthanides", "the metalloids"], answer: 1, difficulty: 3, explanation: "Argon's higher mass but lower Z → correct placement." },
    { type: "mcq", q: "Silicon's semiconductor behavior is predicted from its:", options: ["mass", "position as a metalloid on the staircase", "color", "abundance"], answer: 1, difficulty: 3, explanation: "Intermediate properties come from intermediate position." }
  ]
};

Lessons["g9-chemistry-uc4-t2"] = {
  overview: "Why does lithium fizzle while francium explodes? Why is fluorine hungrier than iodine? The answers are three smooth trends — atomic radius, ionisation energy and electronegativity — governed by nuclear pull versus electron shielding.",
  objectives: [
    "Define and predict atomic radius trends across periods and down groups",
    "Define ionisation energy and its trend opposites",
    "Define electronegativity and locate the most/least",
    "Explain every trend with the two competing factors: nuclear charge and shielding/distance",
    "Apply trends to predict reactivity of metals and non-metals"
  ],
  simple: "Two forces decide an atom's size and greed: the nucleus PULLING electrons in (stronger with more protons) vs outer electrons SITTING FAR and shielded by inner shells. Across a period: more protons, same shells → atoms shrink, grip tightens (harder to remove an electron = rising <b>ionisation energy</b>, hungrier for more = rising <b>electronegativity</b>). Down a group: new shells added → atoms grow, outer electron loose (<b>radii up, ionisation energy down</b>). Result: biggest + least greedy = <b>francium corner (bottom-left)</b>; smallest + greediest = <b>fluorine (top-right)</b>. Metals get MORE reactive down (easier to lose), non-metals LESS (harder to gain).",
  detailed: "<p><b>The tug-of-war model.</b> Effective nuclear pull on the outer electron ≈ (proton charge) reduced by (inner-shell shielding) and by (distance). Changing either lever changes every trend:</p><p><b>Atomic radius</b> (half the distance between bonded atoms' centers): DOWN a group it GROWS — each period adds a whole shell (Li 2,1 vs Na 2,8,1 vs K 2,8,8,1 — valence electron farther each step). ACROSS a period it SHRINKS — shells constant but protons climb: sodium's +11 grabs its third shell vs lithium's +3; chlorine's +17 packs two shells tighter than boron's +5. So largest stable atoms are bottom-left (francium region), smallest top-right (fluorine/helium).</p><p><b>Ionisation energy</b> — energy needed to remove the most loosely held electron from a gaseous atom (Na(g) → Na⁺(g) + e⁻; always ENDOTHERMIC — you must pay to win against attraction). Trend: INCREASES across a period (atoms smaller, pull stronger — removing electron from chlorine harder than sodium) and DECREASES down a group (valence electron far and shielded — cesium's is practically free, francium measured ~380 kJ/mol vs helium's 2,372). Evidence: noble gases top the chart (full tight shells); alkali metals bottom theirs (one loose electron). The jumps also PROVE shells: sodium's 1st IE is small, 2nd is suddenly huge (now peeling a full inner octet) — quantized levels made numeric.</p><p><b>Electronegativity</b> — an atom's hunger for SHARED electrons in a bond (Pauling scale, relative numbers no units): rises across (smaller + more protons → stronger claim on bonding pair) and falls down (distance + shielding). Fluorine reigns at 4.0; the cesium/francium end ~0.7; noble gases (with no bonding habit) usually excluded. This single number predicts bond type (next unit): big difference → ionic transfer, small difference → covalent sharing, tiny → non-polar.</p><p><b>Reactivity follows:</b> METALS react by losing electrons — easier down (lower IE) → cesium > sodium > lithium in water, francium theoretically the ultimate; NON-METALS react by gaining — easier up (stronger pull) → fluorine the champion oxidizer, iodine mild. Both trends are the same tug-of-war read from different seats.</p><p>Exceptions worth noting (exam flavor): noble gases have the HIGHEST IEs of their periods; within transition metals trends blur (added electrons shield each other too); and the 'diagonal relationship' (Li~Mg, Be~Al) shows behavior isn't perfectly periodic — the table is a strong predictor, not a spell book.</p><p>Exam method: state the trend, name the direction, then EXPLAIN with the two-factor sentence — 'down the group, extra shells increase distance and shielding, outweighing added protons, so the outer electron is held less tightly and less energy is needed to remove it.' Direction without mechanism scores half.</p>",
  keyTerms: [
    { term: "Atomic radius", def: "Half the bonded-atom nucleus distance; size trend variable" },
    { term: "Ionisation energy", def: "Energy to remove one electron from a gaseous atom (endothermic)" },
    { term: "Electronegativity", def: "Pull on a shared bonding pair (Pauling scale, F highest)" },
    { term: "Shielding", def: "Inner electrons muting nuclear attraction for outer ones" },
    { term: "Effective nuclear charge", def: "Net positive pull felt by valence electrons" },
    { term: "Periodicity", def: "Repeating trends driven by repeating configurations" }
  ],
  formulas: [
    {
      name: "First ionisation (general)",
      formula: "X(g) → X⁺(g) + e⁻  (ΔE = first IE, always +)",
      meaning: "Energy required to pluck the loosest electron from a gas-phase atom",
      when: "Comparing metals vs non-metals and group reactivity",
      example: "Na: 496 kJ/mol; Mg: 738 — Mg harder (more protons, same shell)"
    }
  ],
  workedExamples: [
    {
      problem: "Order Na, Mg, Cl by decreasing atomic radius and explain.",
      calculation: "same period 3 → more Z = tighter: Na(11) > Mg(12) > Cl(17)",
      answer: "Na > Mg > Cl — shells equal, nuclear charge rises across"
    },
    {
      problem: "Why is the 2nd ionisation energy of sodium so much larger than its 1st?",
      answer: "The 1st removes the loose 3s¹ electron; the 2nd breaks into the stable 2,8 neon core — much closer, much less shielded"
    },
    {
      problem: "Which is more electronegative: S or Cl? N or P?",
      answer: "Cl (further right, period 3); N (same group 15 but higher — P's extra shell shields)"
    },
    {
      problem: "Predict cesium vs magnesium reactivity with water, with reasoning.",
      answer: "Cesium far more violent: it sits lower-left — valence electron hugely shielded and distant, lowest IE; Mg's electron is tighter (higher up, more to the right)"
    }
  ],
  commonMistakes: [
    "Stating trends without the 'why' (shells/nuclear charge) — the mechanism is the mark",
    "Mixing up metal vs non-metal reactivity directions (metals UP with ease of losing? NO — DOWN; non-metals UP in gaining strength)",
    "Saying electronegativity has units (Pauling numbers are relative)",
    "Thinking more protons always = tighter atom across GROUPS too — down groups, added shells win",
    "Confusing ionization energy (atom losing) with electron affinity (atom gaining)",
    "Expecting noble gases to follow 'top-right = low IE' — they're the exception spike"
  ],
  applications: [
    "Choosing welding consumables & battery metals: lithium's small size/low IE make it the lightest anode",
    "Predicting bond polarity: ΔEN across the table flags salt (NaCl) vs sugar-like sharing (CCl₄)",
    "Catalysis & corrosion: cesium's runaway electron loss explains photoelectric cells; gold's tightness explains inert jewelry",
    "Medicine: iodine vs astatine chemistry (same group, different pull) in thyroid tracers",
    "Industry design: fluorine's supremacy as oxidizer drives uranium enrichment (UF₆) and non-stick polymers"
  ],
  summary: "Radius grows down and shrinks across; ionisation energy and electronegativity do the opposite — all three driven by nuclear charge versus shell distance and shielding. Fluorine corner: small, tight, greedy. Francium corner: huge, loose, generous. Metals react by losing (easier down), non-metals by gaining (easier up): the same tug-of-war, two seats.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Atomic radius generally increases:", options: ["left to right across a period", "top to bottom down a group", "toward fluorine", "with ionisation energy"], answer: 1, difficulty: 1, explanation: "Each new shell expands the atom." },
    { type: "mcq", q: "Ionisation energy is:", options: ["energy released when gaining electrons", "energy to remove an electron from a gaseous atom", "the atom's charge", "bond strength"], answer: 1, difficulty: 1, explanation: "Always a cost (endothermic)." },
    { type: "mcq", q: "The most electronegative element is:", options: ["oxygen", "chlorine", "fluorine", "cesium"], answer: 2, difficulty: 1, explanation: "4.0 on the Pauling scale — top-right champ." },
    { type: "mcq", q: "Across a period, IE generally increases because:", options: ["more shells shield better", "nuclear charge rises while shells stay constant", "atoms grow bigger", "electrons repel more"], answer: 1, difficulty: 2, explanation: "Same distance, stronger pull." },
    { type: "mcq", q: "Down group 1, reactivity increases because:", options: ["atoms shrink", "the valence electron is farther and more shielded — easier to lose", "protons increase so grip tightens", "they gain electrons"], answer: 1, difficulty: 2, explanation: "Distance + shielding beat extra protons." },
    { type: "mcq", q: "Fluorine is more reactive than iodine because both are halogens but fluorine:", options: ["has more shells", "attracts an incoming electron with less shielding and distance", "is heavier", "has 8 valence electrons"], answer: 1, difficulty: 2, explanation: "Gaining ability follows EN — up the group." },
    { type: "mcq", q: "Sodium's second IE >> first because the second electron must come from:", options: ["the loosest shell", "a complete inner shell", "the nucleus", "a bond"], answer: 1, difficulty: 3, explanation: "Breaking the 2,8 neon core is brutal." },
    { type: "mcq", q: "The smallest listed atom is:", options: ["K", "Ca", "Sc", "they're the same period — all equal"], answer: 2, difficulty: 2, explanation: "Period 4 left→right shrinks: Sc has the highest Z of the three." },
    { type: "mcq", q: "Noble gases have very high ionisation energies because they:", options: ["are heavy", "hold complete shells tightly with high effective pull", "lack electrons", "bond constantly"], answer: 1, difficulty: 2, explanation: "Full shell + small radius = hardest pluck." },
    { type: "mcq", q: "If element X has lower IE than Y and both are in the same group, X is:", options: ["higher in the group", "lower in the group", "in the same period", "a non-metal"], answer: 1, difficulty: 2, explanation: "IE falls down a group — X sits below." }
  ]
};
