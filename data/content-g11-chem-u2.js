/* Content: Grade 11 Chemistry — Unit 2: Chemical Bonding (4 topics) */
window.Lessons = window.Lessons || {};

Lessons["g11-chemistry-uc2-t1"] = {
  overview: "Ionic bonds are electrostatic deals: metals hand electrons to non-metals, both reach noble-gas configurations, and the resulting ions lock into a crystal lattice. Lattice energy — the glue strength — explains why salt melts at 801 °C, dissolves in water and conducts only when molten or dissolved.",
  objectives: [
    "Draw Lewis dot symbols and predict ion charges from position in the table",
    "Explain electron transfer and the octet drive",
    "Write formulas of ionic compounds (including transition-metal charges)",
    "Define lattice energy and relate it to charge and radius",
    "Connect structure to properties: mp/bp, hardness, conductivity, solubility"
  ],
  simple: "Sodium has one electron too many; chlorine needs exactly one. Na donates its 3s electron to Cl: Na becomes Na⁺ (neon's configuration), Cl becomes Cl⁻ (argon's). Opposite charges attract — but not in pairs: each Na⁺ is surrounded by six Cl⁻ and vice versa, building a giant 3-D lattice. That lattice is why table salt is hard, brittle, and holds together until 801 °C. The attraction strength (lattice energy) grows with bigger charges and smaller ions: MgO (2+/2−, small) melts at 2852 °C while NaCl gives up at 801. In water, polar molecules pry the ions apart — salt dissolves, and the free ions carry current. Solid salt doesn't conduct because its ions are welded in place; melt it or dissolve it and the ions move — conductivity is the fingerprint of mobile charge.",
  detailed: "<p><b>The transfer.</b> Na (1s²2s²2p⁶3s¹) → loses 3s¹ → Na⁺ is isoelectronic with Ne. Cl (…3p⁵) → gains one → Cl⁻ is isoelectronic with Ar. Energetically: ionizing Na costs 496 kJ/mol, Cl's electron affinity gives back 349 — the difference is PAID by lattice formation (NaCl: −787 kJ/mol). Born-Haber cycles account for every step: sublimation, ionization, dissociation, affinity, lattice. The octet rule (main-group atoms gain/lose/share to reach 8 valence electrons) predicts charges: group 1 → 1+, group 2 → 2+, group 13 → 3+, group 15 → 3−, group 16 → 2−, group 17 → 1−.</p><p><b>Formulas & naming.</b> Balance charges to zero: Ca²⁺ + Cl⁻ → CaCl₂; Al³⁺ + O²⁻ → Al₂O₃ (cross the charges, reduce). Transition metals need Roman numerals — Fe²⁺ iron(II), Fe³⁺ iron(III); polyatomic ions stay intact as units (SO₄²⁻, NO₃⁻, OH⁻, NH₄⁺): Ca(OH)₂, (NH₄)₂SO₄.</p><p><b>Lattice energy.</b> U ∝ (Q₁Q₂)/(r₊ + r₋) — Coulomb's law in a crystal. Doubling charges quadruples attraction: MgO (2+, 2−) ≈ 3795 kJ/mol vs NaCl 787. Smaller ions pack closer: LiF > NaCl > KBr in lattice strength — which orders melting points, hardness and solubility trends. High lattice energy = high mp, hard crystal, poor solubility (water must out-compete the lattice).</p><p><b>Properties from structure.</b> Giant lattice → no molecules, so no boiling point below decomposition; hard but BRITTLE (a shifted plane brings like charges together → repulsion splits the crystal along cleavage planes). Conductivity: solid = no (ions fixed); molten/aqueous = yes (ions mobile). Solubility: water's high dielectric constant (ε ≈ 80) weakens ion-ion attraction ~80×; hydration energy must rival lattice energy. CaF₂ and BaSO₄ lose that contest — 'insoluble'.</p><p><b>Limitations:</b> pure transfer is the extreme; most 'ionic' compounds have covalent character (Fajans: small highly-charged cation + large polarizable anion → sharing creeps in — LiI, AlCl₃).</p>",
  keyTerms: [
    { term: "Lewis dot symbol", def: "Element + valence electrons as dots" },
    { term: "Octet rule", def: "Gain/lose/share to reach 8 valence electrons" },
    { term: "Lattice energy", def: "Energy released assembling the crystal (or needed to break it apart)" },
    { term: "Coordination number", def: "Neighbours of opposite charge around each ion (NaCl: 6)" },
    { term: "Born-Haber cycle", def: "Hess-law accounting of ionic formation steps" },
    { term: "Electrolyte", def: "Substance whose melt/solution conducts via mobile ions" }
  ],
  formulas: [
    {
      name: "Lattice energy proportionality",
      formula: "U ∝ (Q₊Q₋)/(r₊ + r₋)",
      meaning: "Bigger charges, smaller ions → stronger lattice",
      vars: [{ name: "Q", meaning: "ion charges", unit: "e" }, { name: "r", meaning: "ionic radii", unit: "pm" }],
      units: "kJ/mol",
      when: "Comparing mp/solubility of ionic solids",
      example: "MgO (2·2, small) 3795 vs NaCl (1·1) 787 kJ/mol"
    },
    {
      name: "Charge balance",
      formula: "Σ(cation charge × count) + Σ(anion charge × count) = 0",
      meaning: "Every ionic formula is electrically neutral",
      vars: [{ name: "—", meaning: "cross-and-reduce method", unit: "—" }],
      units: "—",
      when: "Writing any ionic formula",
      example: "Al³⁺ + O²⁻ → Al₂O₃ (2×3 = 3×2 = 6)"
    }
  ],
  workedExamples: [
    {
      problem: "Write formulas: calcium chloride, aluminium oxide, iron(III) sulfate, ammonium phosphate.",
      given: "Ca²⁺ Cl⁻; Al³⁺ O²⁻; Fe³⁺ SO₄²⁻; NH₄⁺ PO₄³⁻",
      formula: "charge balance",
      substitution: "CaCl₂; Al₂O₃; Fe₂(SO₄)₃; (NH₄)₃PO₄",
      calculation: "check: Fe₂ = +6, (SO₄)₃ = −6 ✓",
      answer: "CaCl₂, Al₂O₃, Fe₂(SO₄)₃, (NH₄)₃PO₄ — polyatomic ions in brackets, never split"
    },
    {
      problem: "Which has the higher melting point, NaF or NaI? Justify.",
      given: "same cation, F⁻ smaller than I⁻",
      formula: "U ∝ Q₁Q₂/(r₊+r₋)",
      substitution: "NaF: 102 + 133 pm; NaI: 102 + 220 pm",
      calculation: "shorter distance → stronger attraction",
      answer: "NaF (993 °C) > NaI (661 °C) — smaller ion, tighter lattice"
    },
    {
      problem: "Why does solid KCl not conduct but molten KCl does?",
      given: "structure",
      formula: "conduction needs mobile charges",
      substitution: "solid: ions locked in lattice sites; melt: ions free to drift",
      calculation: "no electrons free either (all in closed shells)",
      answer: "Charge carriers exist in both — but only the melt lets them MOVE"
    },
    {
      problem: "Use a Born-Haber logic: why is NaCl formation overall exothermic despite costing energy to ionize Na?",
      given: "IE(Na) = +496, EA(Cl) = −349",
      formula: "ΔH_f = sublimation + IE + ½D + EA + U",
      substitution: "+108 +496 +122 −349 −787",
      calculation: "= −410 kJ/mol ≈ measured ΔH_f(NaCl)",
      answer: "The lattice energy (−787) pays for everything — ionic bonding is thermodynamically self-financing"
    },
    {
      problem: "Predict: is MgO or BaO more soluble in water? (Hint: lattice vs hydration.)",
      given: "Mg²⁺ tiny, Ba²⁺ large",
      formula: "solubility needs hydration energy ≥ lattice energy",
      substitution: "MgO lattice enormous (small 2+/2−); BaO lattice weaker",
      calculation: "both react with water, but lattice argument: MgO hardest to pull apart",
      answer: "BaO dissolves more readily — weaker lattice; MgO's 3795 kJ/mol lattice resists hydration"
    }
  ],
  commonMistakes: [
    "Drawing NaCl as a discrete 'molecule' — it's a giant lattice; the formula is a ratio",
    "Crossing charges without reducing: Mg₂O₂ → must be MgO",
    "Splitting polyatomic ions: CaOH₂ wrong — it's Ca(OH)₂",
    "Saying ionic solids conduct (they don't — only molten/aqueous)",
    "Confusing 'brittle' with 'soft' — ionic crystals are hard AND brittle (cleavage)",
    "Lattice energy sign confusion: released on formation (negative), required to separate (positive)",
    "Assuming bigger charge always = more soluble — it's the lattice-vs-hydration contest"
  ],
  applications: [
    "Food preservation: salt's osmotic pull dehydrates microbes — ionic chemistry in every Ethiopian spice market",
    "Electroplating & batteries: molten-salt and Li-ion cells run on ion mobility",
    "Rebar corrosion: chloride ions breach the passive oxide layer on steel — why coastal concrete fails",
    "Water hardness: Ca²⁺/Mg²⁺ from limestone aquifers scale kettles and fight soap",
    "Flux in welding & metallurgy: CaF₂ lowers melting points — Rift Valley fluorite mined for it"
  ],
  summary: "Ionic bonds form when metals transfer electrons to non-metals, both landing on noble-gas configurations; the electrostatic lattice that follows is quantified by lattice energy U ∝ Q₁Q₂/(r₊+r₋). Charge balance writes every formula; Born-Haber cycles prove formation is exothermic because lattice energy repays ionization. Structure explains properties: high mp, hard-brittle crystals, conduction only with mobile ions, and solubility decided by hydration versus lattice.",
  visuals: [
    { type: "steps", config: { title: "From atoms to a crystal", steps: [{ label: "Na gives 3s¹", detail: "costs 496 kJ/mol" }, { label: "Cl takes it", detail: "gives back 349" }, { label: "Ions meet", detail: "Na⁺ and Cl⁻ attract" }, { label: "Lattice builds", detail: "releases 787 kJ/mol" }, { label: "Net −410", detail: "salt exists" }] } },
    { type: "comparison", config: { title: "Ionic vs metallic conduction", left: { name: "NaCl (ionic)", items: ["carriers = ions", "solid: insulator", "molten/dissolved: conductor", "brittle crystal"] }, right: { name: "Cu (metallic)", items: ["carriers = electrons", "solid: conductor", "always conducts", "malleable"] } } },
    { type: "qa", config: { title: "Formula reflexes", pairs: [{ q: "Al³⁺ + O²⁻?", a: "<b>Al₂O₃</b>" }, { q: "Fe²⁺ vs Fe³⁺ names?", a: "<b>iron(II) / iron(III)</b>" }, { q: "MgO mp vs NaCl?", a: "<b>2852 vs 801 °C</b> — 2×2 charges" }] } }
  ],
  questions: [
    { type: "mcq", q: "The ion formed by oxygen (group 16) is:", options: ["O⁺", "O²⁻", "O⁻", "O²⁺"], answer: 1, difficulty: 1, explanation: "Gains 2 to complete the octet → oxide O²⁻" },
    { type: "mcq", q: "Formula of calcium phosphate:", options: ["CaPO₄", "Ca₃(PO₄)₂", "Ca₂PO₄", "Ca(PO₄)₃"], answer: 1, difficulty: 2, explanation: "Ca²⁺ ×3 = +6 balances PO₄³⁻ ×2 = −6" },
    { type: "mcq", q: "Lattice energy increases with:", options: ["larger ions", "smaller charges", "smaller ions and larger charges", "higher temperature"], answer: 2, difficulty: 2, explanation: "U ∝ Q₁Q₂/(r₊+r₋) — tight and highly charged wins" },
    { type: "mcq", q: "Which conducts electricity?", options: ["solid NaCl", "molten NaCl", "sugar solution", "copper only"], answer: 1, difficulty: 2, explanation: "Molten salt has mobile ions (copper conducts too, but 'only' is wrong)" },
    { type: "tf", q: "An ionic compound consists of discrete molecules.", answer: false, difficulty: 2, explanation: "Giant lattice — the formula is the simplest ratio" },
    { type: "tf", q: "Ionic crystals are brittle because shifted planes bring like charges together.", answer: true, difficulty: 3, explanation: "Like-charge repulsion along the plane splits the crystal" },
    { type: "calc", q: "Na⁺ radius 102 pm, Cl⁻ 181 pm. Distance in the lattice (pm)?", answer: "283", difficulty: 2, explanation: "r₊ + r₋ = 102 + 181 = 283 pm" },
    { type: "calc", q: "Born-Haber: +108 +496 +122 −349 −787 = ? kJ/mol (ΔH_f of NaCl).", answer: "-410", difficulty: 3, explanation: "Sum = −410 kJ/mol — matches experiment" },
    { type: "short", q: "Energy released when gaseous ions assemble into the crystal:", answer: "lattice energy", difficulty: 1, explanation: "Lattice energy (U)" },
    { type: "concept", q: "Why is MgO's melting point ~3.5× NaCl's?", answer: "double charges|higher lattice energy|stronger attraction|2+ 2- vs 1+ 1-", difficulty: 3, explanation: "Mg²⁺O²⁻ product of charges is 4× Na⁺Cl⁻⁻ and the ions are smaller — lattice energy 3795 vs 787 kJ/mol, so far more heat is needed to free the ions" }
  ]
};

Lessons["g11-chemistry-uc2-t2"] = {
  overview: "When neither atom can wrest the electron away, they share. Lewis structures count the shared pairs, VSEPR predicts the 3-D shape from electron-pair repulsion, and electronegativity differences decide whether the bond is non-polar, polar or ionic. Shape then predicts polarity — and polarity predicts properties.",
  objectives: [
    "Draw Lewis structures including lone pairs, double/triple bonds and resonance",
    "Apply VSEPR to predict molecular shapes and bond angles",
    "Classify bonds by electronegativity difference",
    "Determine molecular polarity from shape + bond polarity",
    "Relate intermolecular forces (H-bonding, dipole, dispersion) to boiling points"
  ],
  simple: "Two hydrogens each need one electron to fill their shells — so they share a pair: H–H. In water, oxygen shares with two H but keeps two lone pairs; the four electron groups push apart into a tetrahedral arrangement, and the molecule bends to 104.5°. VSEPR is just 'electron groups repel, take the widest angles': 2 groups = linear 180°, 3 = trigonal planar 120°, 4 = tetrahedral 109.5°, with lone pairs squeezing angles tighter (NH₃ 107°, H₂O 104.5°). Electronegativity decides bond character: ΔEN < 0.4 non-polar covalent, 0.4–1.7 polar covalent, > 1.7 ionic. H–Cl is polar AND bent? No — diatomic, so polar. CO₂ has polar bonds but is linear — the pulls cancel: non-polar molecule. Water's bent shape means the pulls DON'T cancel — polar, hence hydrogen bonding, hence its freakishly high boiling point for such a small molecule.",
  detailed: "<p><b>Lewis structures.</b> Count total valence electrons; skeleton with single bonds; complete octets of outer atoms; leftovers to the central atom; if the centre lacks an octet, share a lone pair into a double/triple bond. Check: H₂O (8 e⁻: 2 bonds + 2 lone pairs), CO₂ (16: two C=O), N₂ (10: triple + lone pair), NH₄⁺ (8, charge in brackets), SO₄²⁻ (32). Exceptions: BF₃ (6 e⁻, incomplete octet), PCl₅ (10, expanded — period 3+ has d-orbitals), SF₆ (12). Resonance: when double bonds can sit in equivalent places (O₃, NO₃⁻, benzene) — the real molecule is the hybrid, all bonds equal (NO₃⁻: three identical 1⅓ bonds).</p><p><b>VSEPR.</b> Electron groups (bonding OR lone pairs) maximize separation. 2 → linear 180°; 3 → trigonal planar 120°; 4 → tetrahedral 109.5°; 5 → trigonal bipyramidal 90/120°; 6 → octahedral 90°. Lone pairs repel MORE than bonding pairs (they're fatter, closer to the nucleus), so they compress angles: CH₄ 109.5 → NH₃ 107 → H₂O 104.5. Name shapes by ATOM positions: AX₄ tetrahedral, AX₃E trigonal pyramidal, AX₂E₂ bent, AX₅E seesaw, AX₄E₂ square planar.</p><p><b>Bond polarity.</b> ΔEN: 0 (H–H) non-polar; 0.4 (C–H) essentially non-polar; 0.9 (H–Cl) polar covalent (δ⁺H–Clδ⁻); 2.1 (Na–Cl) ionic. Dipole moment μ measures polarity (Debye): H₂O 1.85 D, CO₂ 0 D (cancels), CH₃Cl 1.9 D. Molecular polarity = vector sum of bond dipoles — symmetry is the judge: CO₂ linear cancels; SO₂ bent doesn't; CCl₄ tetrahedral cancels; CHCl₃ doesn't.</p><p><b>Intermolecular forces (the properties payoff).</b> Within the molecule: covalent bonds. BETWEEN molecules: (1) London dispersion — all molecules, from temporary dipoles, grows with size/electron count (I₂ solid, F₂ gas); (2) dipole-dipole — polar molecules align; (3) hydrogen bonding — H on N/O/F attracted to a lone pair on N/O/F of a neighbour: water, DNA base pairs, proteins. Boiling points: H₂O 100 °C vs H₂S −60 °C — the H-bond premium. Chain length raises dispersion (pentane 36 °C < octane 126 °C < eicosane 346 °C).</p>",
  keyTerms: [
    { term: "Lone pair", def: "Valence pair not in a bond — occupies space, bends shapes" },
    { term: "VSEPR", def: "Valence-Shell Electron-Pair Repulsion: groups maximize separation" },
    { term: "Resonance", def: "Electrons delocalized over equivalent structures — hybrid is real" },
    { term: "Dipole moment", def: "μ = charge × separation; vector sum decides molecular polarity" },
    { term: "Hydrogen bond", def: "H–N/O/F attracted to lone pair on N/O/F — strongest IMF" },
    { term: "Dispersion (London)", def: "Temporary-dipole attraction; universal, grows with size" }
  ],
  formulas: [
    {
      name: "Bond type from ΔEN",
      formula: "ΔEN < 0.4 non-polar | 0.4–1.7 polar | > 1.7 ionic",
      meaning: "Electronegativity gap as the bond-type dial",
      vars: [{ name: "ΔEN", meaning: "electronegativity difference", unit: "Pauling" }],
      units: "—",
      when: "Classifying any bond",
      example: "H–Cl: 3.0 − 2.1 = 0.9 → polar covalent"
    },
    {
      name: "VSEPR angle ladder",
      formula: "lp repels more: 109.5 → 107 → 104.5",
      meaning: "Each lone pair squeezes bonding angles ~2.5°",
      vars: [{ name: "AXₘEₙ", meaning: "m bonded, n lone pairs", unit: "—" }],
      units: "degrees",
      when: "Predicting real angles",
      example: "CH₄ 109.5°, NH₃ 107°, H₂O 104.5°"
    }
  ],
  workedExamples: [
    {
      problem: "Draw the Lewis structure of CO₂ and predict its shape and polarity.",
      given: "C 4 + 2×O 6 = 16 valence e⁻",
      formula: "octets + VSEPR",
      substitution: "O=C=O, no lone pairs on C",
      calculation: "2 groups → linear 180°; bond dipoles cancel",
      answer: "Linear, non-polar (μ = 0) despite polar C=O bonds — symmetry wins"
    },
    {
      problem: "Predict shapes/angles: NH₃, H₂O, BF₃, CH₄.",
      given: "N: 3 bonds + 1 lp; O: 2 + 2; B: 3 + 0; C: 4 + 0",
      formula: "VSEPR",
      substitution: "AX₃E, AX₂E₂, AX₃, AX₄",
      calculation: "pyramidal 107°, bent 104.5°, trigonal planar 120°, tetrahedral 109.5°",
      answer: "NH₃ trigonal pyramidal; H₂O bent; BF₃ trigonal planar; CH₄ tetrahedral"
    },
    {
      problem: "Which is more polar: H₂O or H₂S? Explain the boiling-point gap (100 vs −60 °C).",
      given: "O EN 3.5, S 2.5",
      formula: "ΔEN + H-bond criteria",
      substitution: "H₂O: O–H bonds + lone pairs → H-bonds; H₂S: S too weakly EN",
      calculation: "H-bonds need N/O/F — S misses",
      answer: "H₂O far more polar and H-bonded; H₂S only dipole + dispersion — 160 K gap for one element swap"
    },
    {
      problem: "Draw the two resonance structures of ozone O₃ and give the real bond order.",
      given: "18 valence e⁻",
      formula: "one double, one single, lp on centre",
      substitution: "O=O–O ↔ O–O=O",
      calculation: "bond order = (2+1)/2 = 1.5",
      answer: "Both O–O bonds identical, length between single and double — the hybrid is real, the arrows are the bookkeeping"
    },
    {
      problem: "Order by boiling point: CH₄, C₃H₈, C₈H₁₈, and explain.",
      given: "all non-polar",
      formula: "dispersion ∝ electrons/surface",
      substitution: "10 → 26 → 50 electrons",
      calculation: "−161 → −42 → 126 °C",
      answer: "Bigger molecules = stickier temporary dipoles = higher bp — the reason gasoline evaporates and motor oil doesn't"
    }
  ],
  commonMistakes: [
    "Polar BONDS ≠ polar MOLECULE — always check symmetry (CO₂, CCl₄, BF₃ cancel)",
    "Naming shapes from electron groups instead of atom positions (H₂O is 'bent', not 'tetrahedral')",
    "Forgetting lone pairs in Lewis structures — they decide the shape",
    "H-bonding claimed for any H — needs H on N/O/F AND a lone-pair N/O/F neighbour",
    "Expanded octets given to period-2 atoms (C, N, O can't exceed 8 — no d-orbitals)",
    "Resonance treated as flipping molecules — it's ONE hybrid structure",
    "Double-counting electrons in charges: brackets and superscripts for ions ([NH₄]⁺)"
  ],
  applications: [
    "DNA: base pairs hold via H-bonds (A=T 2, G≡C 3) — the double helix unzips when heat breaks them (PCR)",
    "Water's anomalies (ice floats, high heat capacity) = H-bond network — climate and life depend on it",
    "Solvents: 'like dissolves like' — polar ethanol mixes with blood, non-polar hexane lifts grease",
    "Soaps: one head polar, one tail non-polar — micelles carry oil off in water",
    "Refrigerants & fuels: boiling points tuned by chain length and halogenation (ΔEN engineering)"
  ],
  summary: "Covalent bonds are shared pairs drawn as Lewis structures (with lone pairs, multiple bonds, resonance and octet exceptions). VSEPR turns electron-group counts into shapes — linear 180°, planar 120°, tetrahedral 109.5° — with lone pairs squeezing angles down. ΔEN classifies bond polarity; vector sums of bond dipoles give molecular polarity; and intermolecular forces (dispersion < dipole < H-bond) translate all of it into boiling points, solubility and material behaviour.",
  visuals: [
    { type: "comparison", config: { title: "Shape gallery (4 groups)", left: { name: "By groups", items: ["2 → linear 180°", "3 → planar 120°", "4 → tetrahedral 109.5°", "5 → trig bipyr", "6 → octahedral"] }, right: { name: "Lone-pair edits", items: ["CH₄ 109.5°", "NH₃ 107° (1 lp)", "H₂O 104.5° (2 lp)", "lp repels harder"] } } },
    { type: "steps", config: { title: "Lewis in 5 moves", steps: [{ label: "Count valence e⁻", detail: "add for −, subtract for +" }, { label: "Skeleton", detail: "least EN atom centre" }, { label: "Fill outer octets", detail: "bonds first" }, { label: "Centre leftovers", detail: "or make multiple bonds" }, { label: "Check", detail: "octets + formal charge" }] } },
    { type: "barChart", config: { title: "Boiling points (°C) — H-bond premium", labels: ["H₂O", "H₂S", "NH₃", "CH₄"], values: [100, -60, -33, -161] } }
  ],
  questions: [
    { type: "mcq", q: "The shape of CH₄ is:", options: ["linear", "square planar", "tetrahedral", "trigonal pyramidal"], answer: 2, difficulty: 1, explanation: "4 bonding groups → tetrahedral 109.5°" },
    { type: "mcq", q: "Which molecule is non-polar despite polar bonds?", options: ["H₂O", "CO₂", "NH₃", "HCl"], answer: 1, difficulty: 2, explanation: "Linear symmetry cancels the C=O dipoles" },
    { type: "mcq", q: "The H–O–H angle in water is about:", options: ["180°", "120°", "109.5°", "104.5°"], answer: 3, difficulty: 2, explanation: "Two lone pairs squeeze the tetrahedral angle down" },
    { type: "mcq", q: "Hydrogen bonding requires H bonded to:", options: ["C, H, or S", "N, O, or F", "any non-metal", "metals"], answer: 1, difficulty: 1, explanation: "Small + highly EN: N, O, F only" },
    { type: "tf", q: "BF₃ has an incomplete octet on boron.", answer: true, difficulty: 2, explanation: "6 electrons around B — a classic exception" },
    { type: "tf", q: "PCl₅ is a valid molecule with 10 electrons on P.", answer: true, difficulty: 2, explanation: "Period 3 expands the octet (d-orbitals)" },
    { type: "calc", q: "ΔEN for H–Cl (3.0 − 2.1) classifies the bond as:", answer: "polar covalent|polar", difficulty: 2, explanation: "0.9 sits in the 0.4–1.7 polar-covalent band" },
    { type: "calc", q: "Total valence electrons in CO₂?", answer: "16", difficulty: 2, explanation: "4 + 6 + 6 = 16" },
    { type: "short", q: "Theory that predicts molecular shapes from electron-pair repulsion:", answer: "vsepr", difficulty: 1, explanation: "VSEPR — Valence Shell Electron Pair Repulsion" },
    { type: "concept", q: "Explain why NH₃'s angle (107°) is smaller than CH₄'s (109.5°).", answer: "lone pair repels more|lp-bp repulsion|lone pair squeezes", difficulty: 3, explanation: "Nitrogen's lone pair is held by one nucleus only — fatter and closer, so it repels bonding pairs harder, compressing H–N–H below the tetrahedral angle" }
  ]
};

Lessons["g11-chemistry-uc2-t3"] = {
  overview: "Metals bind by electron communalism: valence electrons detach into a 'sea' that glues positive ion cores together. The same sea explains conductivity, malleability, luster — and why alloys like bronze and steel outperform pure metals.",
  objectives: [
    "Describe the metallic bonding model (ion cores + delocalized electrons)",
    "Explain conductivity, malleability, ductility and luster from the model",
    "Relate bond strength to melting point trends across metals",
    "Define alloys and explain hardening from size mismatch",
    "Contrast metallic with ionic and covalent bonding"
  ],
  simple: "In a metal, atoms don't share pairs or transfer — they pool. Sodium's 3s¹ electron detaches; what's left is Na⁺, and the electrons roam the whole crystal as a delocalized sea. The electrostatic attraction between the sea and every ion core glues the structure — non-directional, so ions can slide past each other without breaking anything: that's malleability (hammer into sheets) and ductility (draw into wires). The free electrons carry charge (conductivity) and reflect light (luster). Bond strength scales with electron count and ion size: Na (1 e⁻, big) melts at 98 °C; Mg (2 e⁻, smaller) at 650; Al (3 e⁻) at 660; tungsten (many d-electrons, strong) at 3422 — filament metal. Mix in a different-sized atom and the layers can no longer slide — that's an alloy: bronze harder than copper, steel stronger than iron.",
  detailed: "<p><b>The electron sea.</b> Metal atoms have low IE and few valence electrons; in the solid, valence orbitals overlap into bands spanning the crystal — electrons become delocalized band electrons, and the lattice is positive ion cores in that sea. Bonding = non-directional electrostatic attraction (like ionic, but the glue is mobile). Band language: the 3s band of Na holds 2N states for N atoms — half-filled → conductor; Mg's 3s full but overlapping 3p → still conductor; the gap between filled and empty bands is what separates metals from insulators/semiconductors.</p><p><b>Property → model mapping.</b> Conductivity: electrons drift under a field (and heat scatters them → metals get MORE resistive with heat, opposite of semiconductors). Malleability/ductility: non-directional bonding lets planes slide while the sea keeps gluing — ionic crystals shatter instead (charge alignment breaks them). Luster: free electrons absorb and re-emit light across visible frequencies; tarnish (Ag₂S, Cu₂(OH)₂CO₃) is surface chemistry stealing the shine. High mp/bp: strong sea needs heat to disrupt — but strength varies with charge density.</p><p><b>Trends.</b> Melting points: Na 98 < Mg 650 < Al 660 < Fe 1538 < W 3422 °C — more delocalized electrons + smaller/higher-charge cores = deeper sea, stronger glue. Group trend down: Li 181 > Na 98 > K 63 — bigger cores, weaker attraction. Mercury: filled 5d + relativistic effects shrink the sea's participation → liquid at room temperature.</p><p><b>Alloys.</b> Substitutional (atoms swap sites: brass Cu+Zn, bronze Cu+Sn) or interstitial (small atoms in gaps: steel = Fe + ≤2% C). Foreign atoms distort the lattice — sliding planes now snag on size mismatch → hardness and strength jump (pure gold 24K is soft; 18K jewellery is Au+Cu/Ag). Shape-memory NiTi, stainless (Fe+Cr+Ni passivates with Cr₂O₃ skin), amalgams for dental fillings — engineering by mixing.</p><p><b>Comparison table logic:</b> ionic = transfer, directional lattice, brittle, conducts molten; covalent = shared pairs, directional, low mp (molecular) or giant network (diamond); metallic = pooled, non-directional, conducts always, malleable.</p>",
  keyTerms: [
    { term: "Delocalized electrons", def: "Valence electrons free to roam the whole crystal" },
    { term: "Ion cores", def: "Metal atoms stripped of their valence electrons" },
    { term: "Non-directional bonding", def: "Attraction equal in all directions — enables sliding" },
    { term: "Band", def: "Merged orbitals spanning the crystal; half-filled = conductor" },
    { term: "Alloy", def: "Metal + other element(s); distorted lattice = harder" },
    { term: "Interstitial / substitutional", def: "Guest in gaps (C in Fe) / guest swaps sites (Zn in Cu)" }
  ],
  formulas: [
    {
      name: "Bond strength drivers",
      formula: "strength ∝ (valence e⁻ count) / (ion-core size)",
      meaning: "More pooled electrons, smaller cores → stronger glue",
      vars: [{ name: "mp", meaning: "tracks bond strength", unit: "°C" }],
      units: "—",
      when: "Comparing metal melting points",
      example: "Na (1 e⁻, big) 98 °C vs Mg (2 e⁻, smaller) 650 °C"
    },
    {
      name: "Conduction condition",
      formula: "half-filled or overlapping bands → metal",
      meaning: "Electrons need empty states to move into",
      vars: [{ name: "gap", meaning: "filled→empty band gap", unit: "eV" }],
      units: "—",
      when: "Metal vs semiconductor vs insulator",
      example: "Na: 3s half-filled; diamond: 7 eV gap → insulator"
    }
  ],
  workedExamples: [
    {
      problem: "Explain why copper wire conducts but a NaCl crystal doesn't — both are 'lattices'.",
      given: "bonding types",
      formula: "mobile charge carriers",
      substitution: "Cu: delocalized electrons free to drift; NaCl: electrons locked in closed-shell ions",
      calculation: "NaCl conducts only molten/dissolved (ions mobile)",
      answer: "Conduction needs mobile charge — metals have it built-in, ionic solids store it in place"
    },
    {
      problem: "Order by melting point: K, Ca, Sc. Justify.",
      given: "period 4 metals",
      formula: "more valence e⁻ + smaller cores",
      substitution: "K (1 e⁻) < Ca (2) < Sc (3)",
      calculation: "63 < 842 < 1541 °C",
      answer: "Sc deepest sea, tightest cores — highest mp"
    },
    {
      problem: "Why is 18-karat gold harder than 24-karat?",
      given: "18K = 75% Au + Cu/Ag",
      formula: "alloy hardening",
      substitution: "foreign atoms distort the lattice",
      calculation: "sliding planes snag on size mismatch",
      answer: "Pure gold slides freely (soft); alloy atoms lock the layers — same reason steel beats iron"
    },
    {
      problem: "Mercury is liquid at room temperature while its neighbours are solid. What does the model say?",
      given: "Hg: [Xe]4f¹⁴5d¹⁰6s²",
      formula: "sea participation",
      substitution: "filled 5d + relativistic 6s contraction → few electrons join the sea",
      calculation: "weak metallic glue → mp −39 °C",
      answer: "A shallow electron sea can't hold ion cores in place at room temperature"
    },
    {
      problem: "A wire heats up as current passes. Explain via the band model.",
      given: "electron drift",
      formula: "scattering",
      substitution: "ions vibrate more when hot → scatter drifting electrons",
      calculation: "resistance rises with T in metals",
      answer: "Collisions convert electron energy to lattice vibration = heat — the basis of fuses and incandescent filaments"
    }
  ],
  commonMistakes: [
    "Saying electrons are 'shared in pairs' — metallic bonding is pooled, not paired",
    "Claiming metals conduct because ions move — electrons carry current in solids",
    "Malleability confused with ionic brittleness — non-directional vs directional is the key",
    "Alloys called 'compounds' with fixed formulas — they're mixtures with variable ratios",
    "Melting-point trend down a group stated backwards (Li > Na > K — falls down)",
    "Thinking pure metals are hardest — alloys are harder (distortion blocks sliding)",
    "Luster attributed to 'reflection off smooth surface' — it's the electron sea re-emitting light"
  ],
  applications: [
    "Wiring: Cu vs Al conductors — sea mobility vs weight/cost trade-offs in Ethiopia's grid expansion",
    "Alloy engineering: steel (Fe+C), brass (Cu+Zn), duralumin (Al+Cu) — every vehicle and bridge",
    "Soldering & jewellery: Pb-free Sn-Ag-Cu solders; 9K/18K gold standards",
    "Thermoelectrics: metal junctions convert heat gradients to voltage — spacecraft power",
    "Catalysis: Pt/Ni surfaces donate sea electrons to adsorbed molecules — catalytic converters, fuel cells"
  ],
  summary: "Metals bond by pooling valence electrons into a delocalized sea around positive ion cores — non-directional electrostatic glue. The sea explains conductivity (mobile electrons), malleability/ductility (layers slide without breaking), luster (light re-emission) and melting-point trends (more electrons, smaller cores = stronger). Alloys harden by lattice distortion: interstitial carbon or substitutional zinc snag the sliding planes, turning soft iron into steel.",
  visuals: [
    { type: "mindMap", config: { center: "Electron sea", branches: [{ label: "Properties", items: ["conducts", "malleable/ductile", "lustrous", "high mp"] }, { label: "Strength drivers", items: ["valence e⁻ count", "ion-core size", "charge density"] }, { label: "Alloys", items: ["interstitial (steel)", "substitutional (brass)", "distortion = hardness"] }] } },
    { type: "barChart", config: { title: "Melting points (°C)", labels: ["K", "Na", "Mg", "Al", "Fe", "W"], values: [63, 98, 650, 660, 1538, 3422] } },
    { type: "qa", config: { title: "Model → fact", pairs: [{ q: "Why malleable?", a: "<b>non-directional glue</b>" }, { q: "Why does resistance rise with heat?", a: "<b>ions vibrate, scatter e⁻</b>" }, { q: "Why is bronze harder than Cu?", a: "<b>Sn distorts sliding</b>" }] } }
  ],
  questions: [
    { type: "mcq", q: "Metallic bonding is best described as:", options: ["shared electron pairs", "electron transfer", "ion cores in an electron sea", "van der Waals stacks"], answer: 2, difficulty: 1, explanation: "Delocalized electrons glue positive cores" },
    { type: "mcq", q: "Metals conduct because:", options: ["ions move", "electrons are delocalized", "atoms vibrate", "bonds break"], answer: 1, difficulty: 1, explanation: "Mobile band electrons carry charge" },
    { type: "mcq", q: "Which is an interstitial alloy?", options: ["brass", "bronze", "steel", "solder"], answer: 2, difficulty: 2, explanation: "Carbon sits in iron's gaps; brass/bronze substitute" },
    { type: "mcq", q: "Melting point generally down Group 1:", options: ["rises", "falls", "constant", "oscillates"], answer: 1, difficulty: 2, explanation: "Bigger cores, weaker sea attraction: Li 181 > Na 98 > K 63 °C" },
    { type: "tf", q: "Metals are malleable because metallic bonds are directional.", answer: false, difficulty: 2, explanation: "NON-directional — sliding doesn't break the glue" },
    { type: "tf", q: "Alloys are generally harder than their pure metals.", answer: true, difficulty: 1, explanation: "Foreign atoms block plane sliding" },
    { type: "calc", q: "A 2 mm² copper wire carries 3 A. Current density (A/mm²)?", answer: "1.5", difficulty: 2, explanation: "3/2 = 1.5 A/mm² — why wire gauges matter" },
    { type: "calc", q: "How many valence electrons per atom pool into Mg's sea?", answer: "2", difficulty: 2, explanation: "Mg: 3s² — both delocalize" },
    { type: "short", q: "Term for electrons free to move through the whole metal:", answer: "delocalized|electron sea|mobile electrons", difficulty: 1, explanation: "Delocalization — the electron sea" },
    { type: "concept", q: "Why does an ionic crystal shatter where a metal bends under a hammer?", answer: "non-directional vs directional|like charges align|planes slide vs planes split|sea keeps gluing", difficulty: 3, explanation: "Metals: the sea re-glues sliding layers instantly. Ionic: a shifted plane aligns like charges → repulsion cracks the crystal — directional glue can't survive the slide" }
  ]
};

Lessons["g11-chemistry-uc2-t4"] = {
  overview: "Beyond Lewis and VSEPR sit three deeper theories: valence bond theory (orbitals overlap, hybridize), molecular orbital theory (electrons occupy whole-molecule bands, explaining O₂'s magnetism), and the simple electrostatics of bond energy. Together they answer what Lewis can't: why bonds form, how strong, and what light they absorb.",
  objectives: [
    "Describe σ and π bonds from orbital overlap",
    "Assign hybridization: sp, sp², sp³ from electron-group count",
    "Build MO diagrams for diatomics; compute bond order",
    "Explain O₂ paramagnetism with MO theory",
    "Use bond energies to estimate reaction enthalpy"
  ],
  simple: "Valence bond theory: a bond is two half-filled orbitals overlapping, each holding a paired electron. Head-on overlap = σ bond (strong, free rotation); side-on = π bond (weaker, locks rotation — that's why double bonds can't twist). Methane's four identical bonds from different-looking s and p orbitals? They MIX first: hybridization — sp³ (4 groups, tetrahedral), sp² (3 groups, planar, leaves one p for the π in C=C), sp (2 groups, linear, two p's for C≡C's two π bonds). Molecular orbital theory goes further: combine orbitals across the WHOLE molecule — bonding MOs (lower energy, glue) and antibonding (higher, wedge apart). Bond order = (bonding − antibonding)/2: H₂ = 1, O₂ = 2 — and MO theory predicts O₂ has two unpaired electrons, matching its paramagnetism, which Lewis never could. Finally, the accountant's view: ΔH ≈ Σ(bonds broken) − Σ(bonds formed) — bond energies are measured heats of cleavage.",
  detailed: "<p><b>Valence bond (VB).</b> Overlap concentrates electron density between nuclei; greater overlap = stronger bond. σ: cylindrical symmetry about the bond axis (s-s, s-p, p-p head-on, hybrid-hybrid) — all single bonds are σ. π: parallel p-orbitals side-on, density above/below the axis — the second/third bond in double/triple. Double = σ + π, triple = σ + 2π. π overlap is weaker and prevents rotation (twisting breaks the side-on alignment → cis/trans isomerism in C₂H₄).</p><p><b>Hybridization.</b> Mix atomic orbitals to match observed geometry: 4 groups → sp³ (109.5°, CH₄, NH₃, H₂O — lone pairs live in hybrids); 3 → sp² (120°, BF₃, ethene's C, graphite's sheets); 2 → sp (180°, BeCl₂, ethyne's C, N₂). Count groups = σ bonds + lone pairs on the atom. Unhybridized p's carry π bonds: ethene each C is sp² + 1 p → π; ethyne sp + 2 p → 2π. Benzene: all sp², six p's overlap into a delocalized π ring — resonance made physical.</p><p><b>Molecular orbital (MO).</b> LCAO: N atomic orbitals → N molecular orbitals, half bonding (σ, π), half antibonding (σ*, π*). Fill with electrons (Aufbau, Pauli, Hund). Bond order = (N_b − N_a)/2: H₂ (2,0) → 1; He₂ (2,2) → 0 — doesn't exist ✓; O₂ (12 bonding-ish, 4 antibonding; the two HOMO electrons sit singly in π* per Hund) → bond order 2, TWO unpaired → paramagnetic — the triumph over Lewis. N₂: (10,4)/... bond order 3, diamagnetic, huge stability (inert fertilizer feedstock). Trends: bond order ↑ → length ↓, strength ↑ (C–C 154 pm/347 kJ < C=C 134/614 < C≡C 120/839).</p><p><b>Bond energy accounting.</b> ΔH_rxn ≈ Σ D(broken) − Σ D(formed). Combustion of methane: break 4 C–H (4×413) + 2 O=O (2×498) = 2648; form 2 C=O (2×799) + 4 O–H (4×463) = 3450; ΔH = −802 kJ/mol ✓ (measured −890; averages explain the gap). Endothermic bonds, exothermic reactions — the books balance on the FORMING side.</p><p><b>Choosing a theory:</b> Lewis for bookkeeping, VSEPR for shape, VB/hybrid for bonding patterns and isomerism, MO for magnetism, spectra and 'why'. They're a ladder, not rivals.</p>",
  keyTerms: [
    { term: "σ bond", def: "Head-on overlap, cylindrically symmetric, allows rotation" },
    { term: "π bond", def: "Side-on p overlap, weaker, locks rotation" },
    { term: "Hybridization", def: "Orbital mixing to match geometry: sp³, sp², sp" },
    { term: "Molecular orbital", def: "Electron state spanning the whole molecule (bonding or antibonding)" },
    { term: "Bond order", def: "(bonding − antibonding)/2 — 0 means no molecule" },
    { term: "Bond dissociation energy", def: "Heat to break one mole of a bond (gas phase)" }
  ],
  formulas: [
    {
      name: "Bond order",
      formula: "BO = (N_bonding − N_antibonding)/2",
      meaning: "Net glue from the MO fill",
      vars: [{ name: "N", meaning: "electrons in each set", unit: "e⁻" }],
      units: "—",
      when: "MO diagrams, stability checks",
      example: "O₂: (10 − 4)/2 = 2 (double bond, paramagnetic)"
    },
    {
      name: "Reaction enthalpy from bond energies",
      formula: "ΔH ≈ Σ D(broken) − Σ D(formed)",
      meaning: "Pay to break, collect on forming",
      vars: [{ name: "D", meaning: "average bond energy", unit: "kJ/mol" }],
      units: "kJ/mol",
      when: "Any gas-phase reaction estimate",
      example: "CH₄ + 2O₂: 2648 − 3450 = −802 kJ/mol"
    }
  ],
  workedExamples: [
    {
      problem: "Give the hybridization and geometry of each carbon in ethene (C₂H₄).",
      given: "C=C double bond",
      formula: "groups = σ + lp",
      substitution: "each C: 3 σ (2 H + 1 C) + 0 lp → sp²",
      calculation: "trigonal planar 120°, leftover p forms the π",
      answer: "sp², planar; the π bond locks the molecule flat — no rotation, hence cis/trans chemistry"
    },
    {
      problem: "Use MO theory to explain why O₂ is paramagnetic.",
      given: "16 e⁻ total",
      formula: "fill σ2s σ*2s σ2p π2p π*2p",
      substitution: "last 2 electrons enter the two degenerate π* singly (Hund)",
      calculation: "2 unpaired electrons",
      answer: "Two parallel spins in π* — liquid oxygen sticks to magnets; Lewis structures can't show this"
    },
    {
      problem: "Compute ΔH for H₂ + Cl₂ → 2 HCl using bond energies (H–H 436, Cl–Cl 243, H–Cl 431).",
      given: "break 1+1, form 2",
      formula: "ΔH = ΣD(broken) − ΣD(formed)",
      substitution: "(436 + 243) − 2×431",
      calculation: "679 − 862 = −183 kJ/mol",
      answer: "−183 kJ/mol — exothermic because two strong H–Cl bonds beat the two broken ones"
    },
    {
      problem: "Why does He₂ not exist? Answer with bond order.",
      given: "4 electrons",
      formula: "σ1s² σ*1s²",
      substitution: "BO = (2 − 2)/2",
      calculation: "= 0",
      answer: "Zero net bonding — antibonding cancels bonding; helium stays monatomic"
    },
    {
      problem: "Rank C–C, C=C, C≡C by length and strength; explain via overlap.",
      given: "bond orders 1, 2, 3",
      formula: "more overlap → shorter + stronger",
      substitution: "σ+π+π pulls nuclei closer",
      calculation: "154 > 134 > 120 pm; 347 < 614 < 839 kJ/mol",
      answer: "Triple: shortest, strongest — but note π bonds are the reactive part (weaker than σ)"
    }
  ],
  commonMistakes: [
    "Counting π bonds in the hybridization group count — only σ bonds + lone pairs count",
    "sp² called 'three orbitals' — it's three HYBRIDS plus one untouched p",
    "Bond order computed without dividing by 2, or forgetting to subtract antibonding",
    "O₂ drawn with all electrons paired (Lewis) then magnetism 'explained' wrongly",
    "ΔH sign convention flipped: broken − formed, not the reverse",
    "Rotation claimed about double bonds — the π bond forbids it",
    "Antibonding orbitals treated as 'empty trash' — they're real states that get filled (σ*)"
  ],
  applications: [
    "Photosynthesis & vision: π→π* absorption of light — retinal's cis/trans switch IS a π bond breaking",
    "Polymer chemistry: sp² conjugation gives conductive plastics and LED emissive layers",
    "Combustion engineering: bond-energy accounting sizes engines and heats meals (injera vs charcoal)",
    "Magnetism in medicine: O₂'s unpaired electrons enable blood-oxygen MRI contrast",
    "Catalysis design: π bonds adsorb on metal surfaces — hydrogenation of oils to margarine"
  ],
  summary: "VB theory builds bonds from orbital overlap: σ (head-on) and π (side-on), with hybridization (sp³/sp²/sp) matching geometry and π bonds locking rotation. MO theory merges orbitals across the molecule — bond order = (bonding − antibonding)/2 predicts stability (He₂ = 0) and O₂'s paramagnetism, Lewis's blind spot. Bond energies close the loop: ΔH = Σ(broken) − Σ(formed). Each theory answers a different question — use the ladder.",
  visuals: [
    { type: "comparison", config: { title: "σ vs π", left: { name: "σ (head-on)", items: ["strong", "free rotation", "all single bonds", "cylindrical"] }, right: { name: "π (side-on)", items: ["weaker", "locks rotation", "2nd/3rd bond", "above/below"] } },
      },
    { type: "steps", config: { title: "Hybridization dial", steps: [{ label: "4 groups", detail: "sp³ — 109.5° (CH₄)" }, { label: "3 groups", detail: "sp² — 120° (C₂H₄)" }, { label: "2 groups", detail: "sp — 180° (C₂H₂)" }, { label: "Leftover p's", detail: "carry the π bonds" }] } },
    { type: "qa", config: { title: "Theory picks", pairs: [{ q: "Shape?", a: "<b>VSEPR</b>" }, { q: "Magnetism?", a: "<b>MO theory</b>" }, { q: "Reaction heat?", a: "<b>bond energies</b>" }] } }
  ],
  questions: [
    { type: "mcq", q: "A double bond consists of:", options: ["2 σ", "σ + π", "2 π", "σ + δ"], answer: 1, difficulty: 1, explanation: "First σ, second π" },
    { type: "mcq", q: "The hybridization of carbon in methane:", options: ["sp", "sp²", "sp³", "sp³d"], answer: 2, difficulty: 1, explanation: "4 groups → sp³ tetrahedral" },
    { type: "mcq", q: "Bond order of O₂:", options: ["1", "1.5", "2", "3"], answer: 2, difficulty: 2, explanation: "(10 − 4)/2 = 2" },
    { type: "mcq", q: "Which explains O₂'s paramagnetism?", options: ["Lewis", "VSEPR", "MO theory", "octet rule"], answer: 2, difficulty: 2, explanation: "Two unpaired π* electrons — only MO shows it" },
    { type: "tf", q: "Rotation is free about a C=C double bond.", answer: false, difficulty: 2, explanation: "The π bond locks it — cis/trans isomers exist" },
    { type: "tf", q: "Bond energy calculations give exact ΔH for all reactions.", answer: false, difficulty: 3, explanation: "Averages — good estimates, exact only for the specific bond measured" },
    { type: "calc", q: "ΔH for CH₄ + Cl₂ → CH₃Cl + HCl: break 4×413+243=1895; form 3×413+328+431=2000. ΔH?", answer: "-105", difficulty: 3, explanation: "1895 − 2000 = −105 kJ/mol" },
    { type: "calc", q: "Bond order of N₂ ((10−4)/2)?", answer: "3", difficulty: 2, explanation: "Triple bond — why N₂ is so inert" },
    { type: "short", q: "Overlap type that forbids rotation:", answer: "pi|π", difficulty: 1, explanation: "π side-on overlap breaks if twisted" },
    { type: "concept", q: "Why are σ bonds stronger than π bonds?", answer: "greater overlap|head-on more density|between nuclei", difficulty: 3, explanation: "Head-on overlap concentrates density directly between the nuclei; side-on π density sits above/below the axis — less nuclear attraction per electron, so π is weaker and more reactive" }
  ]
};
