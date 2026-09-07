/* ============================================================
   Content: Grade 11 Physics — Unit 7: Nuclear Physics
   3 topics: The Nucleus; Radioactivity; Nuclear Reactions.
   ============================================================ */
window.Lessons = window.Lessons || {};

/* --- p7-1: The Nucleus --- */
Lessons["g11-physics-up7-t1"] = {
  overview: "At the centre of every atom sits a nucleus 100,000× smaller than the atom itself, yet holding 99.97% of its mass — packed with protons and neutrons bound by the strongest force in nature. This lesson maps the nucleus: notation, isotopes, and the mass defect that reveals nuclear binding energy.",
  objectives: [
    "Use nuclear notation ᴬ_Z X and identify protons, neutrons, nucleons",
    "Define isotopes and explain chemical vs nuclear behaviour",
    "Describe the strong nuclear force and its short range",
    "Explain mass defect and binding energy (E = mc²)",
    "Read the binding-energy-per-nucleon curve and why fusion/fission release energy"
  ],
  simple: "The nucleus = protons (+) + neutrons (neutral), collectively 'nucleons'. Write it as ᴬ_Z X: Z = proton count (identity of the element), A = total nucleons, so neutrons = A − Z. Same Z, different A = isotopes (carbon-12 vs carbon-14 — same chemistry, different nuclear stability). Protons should scream apart from mutual repulsion — the strong nuclear force, ferocious but only across ~2 fm, glues them. Weigh a nucleus: it's LIGHTER than its parts. The missing mass became the binding energy that holds it: E = mc² — a little mass, a monstrous energy.",
  detailed: `<p><b>Nuclear notation:</b> ᴬ_Z X (e.g. ²³⁸₉₂ U). Z = atomic/proton number → element and neutral-atom electrons. A = nucleon (mass) number. N = A − Z neutrons. Isotopes: same Z, different N (¹H, ²H deuterium, ³H tritium). Chemical behaviour is electron-driven → isotopes react alike; nuclear behaviour depends on N/Z balance → wildly different stability.</p>
<p><b>Size & density:</b> R = R₀A^(1/3) (R₀ ≈ 1.2 fm = 1.2×10⁻¹⁵ m). Nuclear density ~2×10¹⁷ kg/m³ — a sugar cube of nuclear matter weighs ~10⁸ tonnes. The atom is mostly empty: nucleus like a marble in a football stadium.</p>
<p><b>Forces in the nucleus:</b> electrostatic repulsion between protons (long-range, wants to blow the nucleus apart) vs the STRONG nuclear force between ALL nucleon pairs (attractive, ~100× stronger than EM at 1 fm, but drops to zero beyond ~2–3 fm and becomes repulsive below ~0.5 fm — which is why nucleons keep spacing and nuclei have constant density). Neutrons are the 'glue spacers': extra strong force without extra repulsion — heavy nuclei need N > Z (²³⁸U: 92p, 146n).</p>
<p><b>Mass defect & binding energy:</b> mass of bound nucleus < sum of free nucleons. Δm = (Zm_p + Nm_n) − M_nucleus. The 'missing' mass was released as energy when the nucleus formed: BE = Δmc² (c² = 9×10¹⁶ J/kg²). Per nucleon BE/A is the stability index: iron-56 tops the curve (~8.8 MeV/nucleon); light nuclei (H, He) sit low (~1–7), heavy ones (U ~7.6) too.</p>
<p><b>Why the curve matters:</b> moving TOWARD iron releases energy. Light nuclei FUSE up the curve (Sun: H→He, huge energy per kg). Heavy nuclei FISSION down it (U-235 → Ba + Kr + n). Iron is nuclear ash — you can't harvest energy from burning iron; stars die when cores reach it.</p>
<p><b>Units:</b> 1 u = 1.66×10⁻²⁷ kg (= 1/12 of ¹²C); 1 eV = 1.6×10⁻¹⁹ J; nuclear masses quoted in u, energies in MeV; handy: 1 u ≡ 931.5 MeV.</p>`,
  keyTerms: [
    { term: "Nucleon", def: "Proton or neutron — a nucleus member." },
    { term: "Atomic number Z", def: "Proton count; defines the element." },
    { term: "Mass number A", def: "Total nucleons; A = Z + N." },
    { term: "Isotope", def: "Same Z, different neutron number." },
    { term: "Strong nuclear force", def: "Short-range (~2 fm) attraction between nucleons; overpowers p–p repulsion." },
    { term: "Mass defect Δm", def: "Nucleus mass below its free nucleons' total." },
    { term: "Binding energy", def: "BE = Δmc² — energy to disassemble the nucleus (or released assembling it)." },
    { term: "BE per nucleon", def: "Stability measure; peaks at iron-56." }
  ],
  formulas: [
    {
      name: "Nuclear accounting",
      formula: "N = A − Z | ᴬ_Z X",
      meaning: "Neutrons = total minus protons.",
      vars: [
        { name: "A", meaning: "nucleon number", unit: "count" },
        { name: "Z", meaning: "proton number", unit: "count" }
      ],
      units: "—",
      when: "Reading any nuclide symbol.",
      example: "²³⁵₉₂ U: 92 p, 143 n."
    },
    {
      name: "Mass defect & binding energy",
      formula: "Δm = (Zm_p + Nm_n) − M;  BE = Δm·c²",
      meaning: "Missing mass = binding energy.",
      vars: [
        { name: "Δm", meaning: "mass defect", unit: "kg or u" },
        { name: "c", meaning: "3×10⁸ m/s", unit: "m/s" }
      ],
      units: "joules (or MeV via 1 u = 931.5 MeV)",
      when: "Any nuclear energy calculation.",
      example: "Helium-4: Δm = 0.0304 u → BE = 28.3 MeV (7.1 per nucleon)."
    },
    {
      name: "Nuclear radius",
      formula: "R = R₀·A^(1/3), R₀ ≈ 1.2 fm",
      meaning: "Volume ∝ nucleon count → constant density.",
      vars: [],
      units: "metres",
      when: "Size estimates; Rutherford scattering.",
      example: "A = 27 (Al): R = 1.2×3 = 3.6 fm."
    }
  ],
  workedExamples: [
    {
      problem: "For ⁶⁴₂₉ Cu, ⁶⁴₃₀ Zn and ⁶⁵₃₀ Zn: state protons, neutrons, electrons (neutral), and identify the isotopes and isobars.",
      given: "Three nuclides.",
      formula: "N = A − Z; isotopes share Z; isobars share A.",
      substitution: "Cu: 29p, 35n. Zn-64: 30p, 34n. Zn-65: 30p, 35n.",
      calculation: "Isotopes: the two Zn (same Z = 30). Isobars: ⁶⁴Cu & ⁶⁴Zn (same A = 64).",
      answer: "Chemically Cu ≠ Zn (different Z); the Zn pair behave identically in reactions but differ in nuclear stability."
    },
    {
      problem: "Compute the binding energy of helium-4. (m_p = 1.00728 u, m_n = 1.00866 u, M_He = 4.00260 u, 1 u = 931.5 MeV)",
      given: "2p + 2n.",
      formula: "Δm = parts − whole; BE = Δm × 931.5.",
      substitution: "Parts: 2(1.00728) + 2(1.00866) = 4.03188 u. Δm = 4.03188 − 4.00260 = 0.02928 u.",
      calculation: "BE = 0.02928 × 931.5 = 27.3 MeV → 6.8 MeV/nucleon.",
      answer: "≈27–28 MeV — enormous: 7 MeV per nucleon vs a few eV per ATOM in chemical burning (million× denser energy)."
    },
    {
      problem: "A fission event releases 200 MeV. Convert to joules, and find how many fissions power a 1 GW plant for one second.",
      given: "E₁ = 200 MeV; P = 10⁹ W.",
      formula: "1 MeV = 1.6×10⁻¹³ J; n = E_total/E₁.",
      substitution: "E₁ = 200 × 1.6e-13 = 3.2×10⁻¹¹ J. n = 1e9/3.2e-11.",
      calculation: "n ≈ 3.1×10¹⁹ fissions per second.",
      answer: "3×10¹⁹/s — about 100 g of U-235 fissioned per day keeps a gigawatt running (vs thousands of tonnes of coal)."
    },
    {
      problem: "Using the BE/A curve (H-2: 1.1, He-4: 7.1, Fe-56: 8.8, U-235: 7.6 MeV/nucleon), explain why BOTH fusion of hydrogen and fission of uranium release energy.",
      given: "Curve values.",
      formula: "Energy released = BE_products − BE_reactants (more tightly bound = lower energy state).",
      substitution: "Fusion: 2H→He climbs 1.1 → 7.1 (+6/nucleon). Fission: U splits into mid-mass fragments ~8.5 vs 7.6 (+~0.9/nucleon × 235).",
      calculation: "Both move toward the iron peak.",
      answer: "Iron is the valley floor of nuclear energy — anything falling toward it pays out energy; iron itself pays nothing (dead ash of stellar burning)."
    }
  ],
  commonMistakes: [
    "Confusing A (nucleons) with Z (protons) — neutrons = A − Z, not A − 2Z.",
    "Saying isotopes have different chemistry — they're nearly identical chemically (same electrons).",
    "Thinking the strong force holds ELECTRONS to the nucleus — electrons are EM-bound; the strong force is nucleon-only.",
    "Believing mass is 'destroyed' — it converts to binding energy (total mass-energy conserved).",
    "Using kg with the 931.5 MeV/u shortcut — units must match (u with u).",
    "Forgetting the nucleus is LIGHTER than its parts (mass defect is a deficit, not surplus).",
    "Saying heavy nuclei have more neutrons because neutrons are 'heavier' — they need extra N for strong-force glue without EM repulsion."
  ],
  applications: [
    "Radiocarbon dating: ¹⁴C isotope ratio measures age of organic remains.",
    "Nuclear medicine: isotope tracers (Tc-99m) image organs; I-131 treats thyroid.",
    "Mass spectrometry: separates isotopes (uranium enrichment, stable-isotope forensics).",
    "Binding-energy curve: the physics behind reactors (fission) and stars (fusion).",
    "Neutron sources: Am-Be capsules for well-logging and reactor start-up.",
    "Deuterium/tritium fuel cycles: the fusion power roadmap (ITER)."
  ],
  summary: "Nucleus: Z protons + (A−Z) neutrons in ~fm space at 10¹⁷ kg/m³, glued by the short-range strong force (neutrons = glue spacers → heavy nuclei need N>Z). Isotopes: same Z, different N. Mass defect Δm → BE = Δmc²; BE/A peaks at iron. Toward iron = energy out: fusion (light) and fission (heavy) both roll downhill to the peak.",
  visuals: [
    { type: "barChart", config: { labels: ["H-2", "He-4", "C-12", "Fe-56", "U-235"], values: [1.1, 7.1, 7.7, 8.8, 7.6], title: "Binding Energy per Nucleon (MeV) — Iron Peaks", unit: "MeV" } }
  , {"type":"qa","config":{"title":"Quick Review — tap a question to reveal the answer","pairs":[{"q":"For ⁶⁴₂₉ Cu, ⁶⁴₃₀ Zn and ⁶⁵₃₀ Zn: state protons, neutrons, electrons (neutral), and ident…","a":"<b>Answer:</b> Chemically Cu ≠ Zn (different Z); the Zn pair behave identically in reactions but differ in nuclear stability."},{"q":"Compute the binding energy of helium-4. (m_p = 1.00728 u, m_n = 1.00866 u, M_He = 4.00260…","a":"<b>Answer:</b> ≈27–28 MeV — enormous: 7 MeV per nucleon vs a few eV per ATOM in chemical burning (million× denser energy)."},{"q":"A fission event releases 200 MeV. Convert to joules, and find how many fissions power a 1…","a":"<b>Answer:</b> 3×10¹⁹/s — about 100 g of U-235 fissioned per day keeps a gigawatt running (vs thousands of tonnes of coal)."},{"q":"Using the BE/A curve (H-2: 1.1, He-4: 7.1, Fe-56: 8.8, U-235: 7.6 MeV/nucleon), explain w…","a":"<b>Answer:</b> Iron is the valley floor of nuclear energy — anything falling toward it pays out energy; iron itself pays nothing (dead ash of stellar burning)."}]}}],
  questions: [
    { type: "calc", q: "How many neutrons in ²³⁵₉₂ U?", answer: "143", difficulty: 1, explanation: "N = A − Z = 235 − 92 = 143.", tolerance: 0.5 },
    { type: "mcq", q: "Isotopes of an element differ in:", options: ["Protons", "Electrons", "Neutrons", "Charge"], answer: 2, difficulty: 1, explanation: "Same Z, different N — different mass numbers." },
    { type: "mcq", q: "Which force overcomes proton–proton repulsion in the nucleus?", options: ["Gravity", "Weak force", "Strong nuclear force", "Magnetism"], answer: 2, difficulty: 1, explanation: "The strong force binds all nucleons at short range." },
    { type: "calc", q: "Mass defect 0.01 u. Binding energy in MeV? (1 u = 931.5 MeV)", answer: "9.315", difficulty: 2, explanation: "BE = 0.01 × 931.5 = 9.315 MeV.", tolerance: 0.1 },
    { type: "concept", q: "Why do very heavy nuclei need proportionally more neutrons than protons?", answer: "extra strong-force glue without repulsion|neutrons add attraction not repulsion|dilute proton repulsion", difficulty: 3, explanation: "Protons repel over the whole nucleus while the strong force only acts between neighbours — extra neutrons add attraction without adding repulsion." },
    { type: "mcq", q: "The most tightly bound nuclei (per nucleon) are near:", options: ["Hydrogen", "Iron", "Uranium", "Lead"], answer: 1, difficulty: 2, explanation: "The BE/A curve peaks at iron-56 (~8.8 MeV/nucleon)." },
    { type: "calc", q: "A nucleus with BE = 180 MeV has 30 nucleons. BE per nucleon (MeV)?", answer: "6", difficulty: 1, explanation: "180/30 = 6 MeV/nucleon.", tolerance: 0.1 },
    { type: "tf", q: "The mass of a helium nucleus equals the sum of two proton and two neutron masses.", answer: false, difficulty: 2, explanation: "It's LESS — the mass defect became binding energy (E = mc²)." },
    { type: "short", q: "Which particle in the nucleus carries no charge?", answer: "neutron", difficulty: 1, explanation: "Neutrons are neutral; protons are +e." },
    { type: "calc", q: "200 MeV of fission energy in joules? (1 eV = 1.6e-19 J)", answer: "3.2e-11", difficulty: 2, explanation: "200e6 × 1.6e-19 = 3.2×10⁻¹¹ J.", tolerance: 1e-12, altAnswers: ["3.2E-11"] }
  ]
};

/* --- p7-2: Radioactivity --- */
Lessons["g11-physics-up7-t2"] = {
  overview: "Unstable nuclei decay on their own schedule — randomly, spontaneously, and at a rate no chemistry or physics can hurry. Alpha, beta and gamma emissions, half-lives and the exponential decay law are the tools for dating rocks, tracing medicines and staying safe from radiation.",
  objectives: [
    "Describe alpha, beta and gamma radiation (composition, ionising power, penetration)",
    "Write balanced decay equations (A and Z conservation)",
    "Explain random spontaneous decay and the half-life concept",
    "Apply N = N₀(½)^(t/T) and read decay curves",
    "Use carbon-14 dating and tracer techniques; assess radiation safety"
  ],
  simple: "Some nuclei are wobbling-too-much versions of themselves and spit out particles until they calm down. ALPHA: a helium nucleus (2p+2n) — heavy, ionises fiercely, stopped by paper, dangerous inside you. BETA: an electron (or positron) flung out when a neutron↔proton flips — medium everything, stopped by aluminium. GAMMA: pure high-energy light from the recoiling nucleus — penetrating, needs thick lead, weak ioniser. Which atom decays next? Unknowable. But half of a sample decays in a fixed time — the half-life — perfectly predictable in bulk. Carbon-14 (5730 y) dates bones; technetium-99m (6 h) images hearts.",
  detailed: `<p><b>The three emissions:</b>
<br>• α: ⁴₂He nucleus, +2 charge, ~5–8 MeV, high mass → dense ionisation (short range cm in air; paper/skin stops it). Most dangerous INGESTED/INHALED (α emitters: radon, polonium).
<br>• β⁻: electron from n → p + e⁻ (+ antineutrino); −1 charge, continuous energy spectrum (shared with neutrino), moderate ionisation, metres in air, mm aluminium stops. β⁺: p → n + e⁺ (positron; PET scans).
<br>• γ: EM photon, no charge/mass, low ionisation, very penetrating (needs many cm lead or metres of concrete); follows α/β when the daughter nucleus is left excited. A and Z UNCHANGED by γ.
<br>Deflection: α bends slightly toward negative plate (heavy, +2); β bends sharply the other way (light, −1); γ doesn't bend.</p>
<p><b>Balancing equations:</b> ΣA and ΣZ conserved. α decay: A−4, Z−2 (²³⁸U → ²³⁴Th + ⁴He). β⁻: A same, Z+1 (¹⁴C → ¹⁴N + e⁻). β⁺: Z−1. γ: nothing changes but energy leaves.</p>
<p><b>Randomness & half-life:</b> decay is spontaneous (unaffected by T, pressure, chemistry) and random (can't predict WHICH nucleus) — but statistically exact: T½ = time for activity/count-rate to halve. N = N₀(½)^(t/T½); activity A = λN with λ = 0.693/T½. Graph: exponential curve; measure successive halvings of count rate (after background subtraction) — each takes one T½ regardless of starting point.</p>
<p><b>Applications:</b>
<br>• Carbon dating: living things fix ¹⁴C/¹²C at atmospheric ratio; death stops intake; remaining fraction → age (up to ~50,000 y).
<br>• Tracers: I-131 thyroid, Tc-99m imaging (short 6 h half-life = low dose), P-32 in plants.
<br>• Thickness gauges: β through paper/foil; γ through metal — count rate feedback controls rolling mills.
<br>• Sterilisation & radiotherapy: γ from Co-60 kills microbes / tumours.</p>
<p><b>Safety:</b> dose = absorbed energy × radiation weighting (α ×20 vs β/γ ×1) → sieverts. ALARA: time (minimise), distance (inverse square!), shielding (paper/Al/lead by type). Background radiation: radon, cosmic rays, K-40, medical — ~2–3 mSv/y typical.</p>`,
  keyTerms: [
    { term: "Radioactivity", def: "Spontaneous random nuclear decay emitting α/β/γ." },
    { term: "Alpha α", def: "⁴He nucleus; +2; stopped by paper; high ionisation." },
    { term: "Beta β⁻", def: "Electron from neutron→proton; A unchanged, Z+1." },
    { term: "Gamma γ", def: "Penetrating EM photon; no A/Z change." },
    { term: "Half-life T½", def: "Time for activity to halve; constant per nuclide." },
    { term: "Decay constant λ", def: "Probability per second; λ = ln2/T½; A = λN." },
    { term: "Tracer", def: "Radioisotope followed by its emissions through a system." },
    { term: "Background radiation", def: "Ambient ionising radiation to subtract from counts." }
  ],
  formulas: [
    {
      name: "Half-life decay law",
      formula: "N = N₀·(½)^(t/T½)",
      meaning: "Remaining nuclei (or activity) after time t.",
      vars: [
        { name: "N₀", meaning: "initial number/activity", unit: "Bq or count" },
        { name: "T½", meaning: "half-life", unit: "s, y..." },
        { name: "t", meaning: "elapsed time", unit: "same as T½" }
      ],
      units: "as N₀",
      when: "Any half-life problem.",
      example: "800 Bq, T½ = 3 d, after 12 d (4 halvings): 800/16 = 50 Bq."
    },
    {
      name: "Activity & decay constant",
      formula: "A = λN,  λ = 0.693 / T½",
      meaning: "Decays per second = probability × population.",
      vars: [{ name: "A", meaning: "activity", unit: "becquerel (Bq = 1/s)" }],
      units: "Bq",
      when: "Linking counts to atom numbers.",
      example: "T½ = 5730 y → λ = 3.8×10⁻¹² s⁻¹."
    },
    {
      name: "Inverse-square safety",
      formula: "I ∝ 1/d²",
      meaning: "Doubling distance quarters the dose rate.",
      vars: [],
      units: "—",
      when: "Handling sources with tongs.",
      example: "From 10 cm to 1 m: 100× less dose."
    }
  ],
  workedExamples: [
    {
      problem: "Complete: (a) ²²⁶₈₈Ra → ? + ⁴₂He; (b) ¹⁴₆C → ? + e⁻; (c) ²³⁴₉₀Th* → ²³⁴₉₀Th + ?",
      given: "Three decays.",
      formula: "Conserve A and Z.",
      substitution: "(a) A: 226−4 = 222; Z: 88−2 = 86 → ²²²₈₆Rn. (b) A: 14; Z: 6+1 = 7 → ¹⁴₇N. (c) excited nucleus sheds energy only → γ.",
      calculation: "Check sums: (a) 222+4 = 226 ✓, 86+2 = 88 ✓.",
      answer: "Radon-222 (α), nitrogen-14 (β⁻), gamma photon — note β⁻ raises Z because a neutron became a proton."
    },
    {
      problem: "A sample reads 640 counts/s (background 40). After 2 hours it reads 115 counts/s. Find the half-life.",
      given: "Corrected: 600 → 75.",
      formula: "Halvings: 600→300→150→75 = 3 halvings.",
      substitution: "3 T½ = 2 h.",
      calculation: "T½ = 40 min.",
      answer: "40 minutes — ALWAYS subtract background before counting halvings."
    },
    {
      problem: "Carbon dating: a bone shows ¼ the ¹⁴C/¹²C ratio of living tissue. How old is it? (T½ = 5730 y)",
      given: "Fraction remaining = 0.25.",
      formula: "(½)^(t/T½) = ¼.",
      substitution: "¼ = (½)² → t = 2 × 5730.",
      calculation: "t = 11,460 y.",
      answer: "≈11,500 years — two half-lives. (Practical limit ~10 half-lives ≈ 50,000 y: too little ¹⁴C left.)"
    },
    {
      problem: "Tc-99m (T½ = 6 h) is prepared at 8:00 with activity 400 MBq. Dose needed at 20:00? What fraction remains?",
      given: "12 h = 2 half-lives.",
      formula: "N = N₀(½)².",
      substitution: "400 × ¼.",
      calculation: "100 MBq remains.",
      answer: "¼ of the dose left — hence hospitals calibrate schedules around half-lives; short T½ = good imaging, low patient dose."
    },
    {
      problem: "A Geiger tube 10 cm from a source reads 900 cpm. Predict the reading at 30 cm (ignore background/absorption) and name the law.",
      given: "Distance ×3.",
      formula: "Inverse square: I ∝ 1/d².",
      substitution: "900 × (10/30)² = 900/9.",
      calculation: "100 cpm.",
      answer: "100 cpm — the reason radiation handlers use long tongs: distance is the cheapest shield."
    }
  ],
  commonMistakes: [
    "Saying half-life predicts WHICH nucleus decays — it's statistical; individuals stay random and unhurried.",
    "Forgetting background subtraction before counting halvings.",
    "β decay 'electrons lived in the nucleus' — no: the electron is CREATED at decay (n → p + e⁻ + ν̄).",
    "Changing A in β decay — A stays; only Z shifts (±1).",
    "γ changing the element — it doesn't; same A and Z, just less energy.",
    "Using N = N₀ − λt (linear) instead of exponential decay.",
    "Ranking penetration wrong: α stops at paper but ionises most; γ penetrates most but ionises least — ionising power and penetration are OPPOSITES.",
    "Treating α as harmless because paper stops it — internal α emitters are the worst per becquerel."
  ],
  applications: [
    "Archaeology & geology: C-14 (5730 y), K-Ar (1.3 Ga), U-Pb (4.5 Ga) date organic and rock samples.",
    "Medicine: Tc-99m imaging, I-131 thyroid therapy, Co-60 radiotherapy, PET (β⁺ tracers).",
    "Industry: β/γ thickness gauges, leak tracers in pipes, smoke detectors (Am-241 α ionises air).",
    "Agriculture: P-32 uptake studies; mutation breeding with γ.",
    "Food irradiation: γ sterilisation extends shelf life.",
    "Safety culture: dosimetry badges, ALARA, lead bricks, distance & timing protocols."
  ],
  summary: "Unstable nuclei decay randomly & spontaneously: α (⁴He, paper, high ionisation), β⁻ (e⁻ from n→p, Z+1, Al), β⁺ (Z−1), γ (photon, lead, no A/Z change). Balance A and Z. Half-life: N = N₀(½)^(t/T½), A = λN, λ = 0.693/T½ — constant per nuclide, immune to conditions. Uses: dating, tracers, gauges, therapy. Safety: time, distance (1/d²), shielding, subtract background.",
  visuals: [
    { type: "lineGraph", config: { xLabel: "Time (half-lives)", yLabel: "Activity (Bq)", points: [{ x: 0, y: 800 }, { x: 1, y: 400 }, { x: 2, y: 200 }, { x: 3, y: 100 }, { x: 4, y: 50 }, { x: 5, y: 25 }], title: "Exponential Decay: Halving Every T½", unit: "Bq" } }
  , {"type":"qa","config":{"title":"Quick Review — tap a question to reveal the answer","pairs":[{"q":"Complete: (a) ²²⁶₈₈Ra → ? + ⁴₂He; (b) ¹⁴₆C → ? + e⁻; (c) ²³⁴₉₀Th* → ²³⁴₉₀Th + ?","a":"<b>Answer:</b> Radon-222 (α), nitrogen-14 (β⁻), gamma photon — note β⁻ raises Z because a neutron became a proton."},{"q":"A sample reads 640 counts/s (background 40). After 2 hours it reads 115 counts/s. Find th…","a":"<b>Answer:</b> 40 minutes — ALWAYS subtract background before counting halvings."},{"q":"Carbon dating: a bone shows ¼ the ¹⁴C/¹²C ratio of living tissue. How old is it? (T½ = 57…","a":"<b>Answer:</b> ≈11,500 years — two half-lives. (Practical limit ~10 half-lives ≈ 50,000 y: too little ¹⁴C left.)"},{"q":"Tc-99m (T½ = 6 h) is prepared at 8:00 with activity 400 MBq. Dose needed at 20:00? What f…","a":"<b>Answer:</b> ¼ of the dose left — hence hospitals calibrate schedules around half-lives; short T½ = good imaging, low patient dose."}]}}],
  questions: [
    { type: "mcq", q: "An alpha particle is:", options: ["An electron", "A helium nucleus", "A photon", "A neutron"], answer: 1, difficulty: 1, explanation: "⁴₂He: 2 protons + 2 neutrons." },
    { type: "mcq", q: "Most penetrating radiation:", options: ["Alpha", "Beta", "Gamma", "All equal"], answer: 2, difficulty: 1, explanation: "γ needs thick lead/concrete; α stops at paper." },
    { type: "calc", q: "Sample halves from 800 to 50 Bq. How many half-lives passed?", answer: "4", difficulty: 1, explanation: "800→400→200→100→50: four halvings.", tolerance: 0.1 },
    { type: "calc", q: "T½ = 8 days; 24 days later, what FRACTION of the original activity remains?", answer: "0.125", difficulty: 2, explanation: "3 halvings: (½)³ = 1/8 = 0.125.", tolerance: 0.005, altAnswers: ["1/8"] },
    { type: "mcq", q: "In β⁻ decay, the daughter nucleus has:", options: ["Z−1", "Z+1", "A−1", "A+1"], answer: 1, difficulty: 2, explanation: "A neutron became a proton: Z increases by 1, A unchanged." },
    { type: "concept", q: "Why can't you speed up a radioactive sample by heating it?", answer: "nuclear process|unaffected by conditions|spontaneous random", difficulty: 2, explanation: "Decay is a nuclear event; temperature/pressure/chemistry affect electrons, not the nucleus." },
    { type: "calc", q: "²³⁸U (Z=92) emits an α. The daughter's Z is:", answer: "90", difficulty: 2, explanation: "92 − 2 = 90 (thorium).", tolerance: 0.1 },
    { type: "mcq", q: "Which ionises gas MOST strongly?", options: ["Alpha", "Beta", "Gamma", "None ionise"], answer: 0, difficulty: 2, explanation: "Heavy +2 charge rips electrons off — hence smoke detectors use α." },
    { type: "calc", q: "Count rate at 20 cm is 400 cpm. At 40 cm (inverse square), expected cpm?", answer: "100", difficulty: 2, explanation: "Double distance → quarter: 400/4 = 100.", tolerance: 2 },
    { type: "tf", q: "A radiation detector must subtract background counts before analysing a sample's half-life.", answer: true, difficulty: 1, explanation: "Ambient counts add a constant offset that would distort the exponential." }
  ]
};

/* --- p7-3: Nuclear Reactions --- */
Lessons["g11-physics-up7-t3"] = {
  overview: "Beyond natural decay, nuclei can be FORCED to change: bombarded, split and fused. Fission powers reactors with chain reactions; fusion powers the Sun; and the energy arithmetic — E = Δmc² — explains why nuclear fuel out-millions chemical fuel.",
  objectives: [
    "Distinguish spontaneous decay from induced nuclear reactions",
    "Balance fission and fusion reaction equations (A, Z, energy)",
    "Describe the neutron-induced fission chain reaction and criticality",
    "Explain reactor components: fuel, moderator, control rods, coolant",
    "Explain fusion conditions, the proton–proton story and fusion's promise"
  ],
  simple: "Fire a neutron at U-235 and it swallows it, becomes unstable U-236, and splits into two mid-size nuclei + 2–3 new neutrons + ~200 MeV. Those neutrons split more atoms → CHAIN reaction. Control it with rods that eat neutrons (reactor), or let it run away (bomb). The Sun does the reverse: squeeze light nuclei (fusion) until they merge — needs millions of degrees, but the fuel is seawater and the ash isn't radioactive. Both release energy because the products are more tightly bound than the starting pieces — the missing mass shows up as energy.",
  detailed: `<p><b>Induced reactions:</b> bombardment changes a nucleus: ¹⁴N + α → ¹⁷O + p (Rutherford's first transmutation, 1919). Written X(a,b)Y. Conservation: ΣA, ΣZ, energy-momentum, nucleon number.</p>
<p><b>Fission:</b> ²³⁵U + n → ²³⁶U* → Ba-141 + Kr-92 + 3n (+ ~200 MeV) — one of many split pairs. Energy source: fragments have higher BE/nucleon (~8.5 vs 7.6) — the mass difference (~0.2 u) × c² ≈ 200 MeV. Neutrons released (avg 2.4 for U-235) can trigger further fissions: multiplication factor k = neutrons causing next fission / neutrons produced. k = 1 critical (steady reactor), k > 1 supercritical (power rise/bomb), k < 1 subcritical (dies). Fast neutrons must be SLOWED (moderator: water/graphite) to be captured by U-235; control rods (boron/cadmium) absorb neutrons to tune k; coolant (water) carries heat to steam turbines; containment stops radiation; spent fuel holds long-lived actinides (waste problem).</p>
<p><b>Fusion:</b> light nuclei merge: ²H + ³H → ⁴He (3.5 MeV) + n (14.1 MeV) ≈ 17.6 MeV/event — 3–4× more energy per kg than fission, 10⁷× chemical. Barrier: both positive → must overcome Coulomb repulsion → ~10⁸ K plasma where collisions are violent enough; then confine long enough (Lawson criterion): magnetic (tokamak ITER) or inertial (laser pellets NIF). Sun: proton–proton chain, 4 ¹H → ⁴He + 2e⁺ + 2ν + 26.7 MeV, self-confining by gravity at 15 MK core. Advantages: abundant fuel (deuterium from water, lithium→tritium), no CO₂, no long-lived high-level waste, no meltdown chain (it just stops if disturbed). Challenge: net energy gain remains an engineering frontier.</p>
<p><b>Energy arithmetic (exam staple):</b> Q = (m_reactants − m_products)c². Positive Q = exothermic. Use u and 931.5 MeV/u. Compare with chemical: burning a carbon atom ≈ 4 eV vs fissioning a U-235 nucleus ≈ 200 MeV — 50 million× per event.</p>
<p><b>Applications beyond power:</b> radioisotope production (reactors breed Co-60, Mo-99), neutron sources, research, nuclear medicine isotopes; fusion → future baseload power, naval propulsion research.</p>`,
  keyTerms: [
    { term: "Nuclear reaction", def: "Induced transformation by bombardment (vs spontaneous decay)." },
    { term: "Fission", def: "Heavy nucleus splits into mid-mass fragments + neutrons + energy." },
    { term: "Chain reaction", def: "Product neutrons trigger further fissions." },
    { term: "Critical (k = 1)", def: "Exactly one neutron per fission continues the chain — steady power." },
    { term: "Moderator", def: "Water/graphite slowing neutrons to thermal energies for capture." },
    { term: "Control rods", def: "Boron/cadmium neutron absorbers regulating k." },
    { term: "Fusion", def: "Light nuclei merge; needs ~10⁸ K plasma + confinement." },
    { term: "Q-value", def: "Reaction energy = (mass in − mass out)c²." }
  ],
  formulas: [
    {
      name: "Reaction energy",
      formula: "Q = (Σm_reactants − Σm_products)·c² = Δm(u) × 931.5 MeV",
      meaning: "Mass difference converts to kinetic energy/radiation.",
      vars: [{ name: "Δm", meaning: "mass lost", unit: "u" }],
      units: "MeV (or J × 1.6e-13)",
      when: "Any fission/fusion/transmutation energy.",
      example: "U-235 fission: Δm ≈ 0.21 u → Q ≈ 196 MeV ≈ 200 MeV."
    },
    {
      name: "Fission energy per kg",
      formula: "E = (m/M)·N_A·Q",
      meaning: "Atoms in a kg × energy per fission.",
      vars: [{ name: "M", meaning: "molar mass (0.235 kg/mol)", unit: "kg/mol" }],
      units: "joules",
      when: "Fuel comparisons.",
      example: "1 kg U-235: 2.56e24 atoms × 3.2e-11 J ≈ 8.2×10¹³ J ≈ 20 kt TNT / 2700 tonnes coal."
    },
    {
      name: "D–T fusion",
      formula: "²H + ³H → ⁴He + n + 17.6 MeV",
      meaning: "The easiest fusion reaction (reactor target).",
      vars: [],
      units: "MeV",
      when: "Fusion power design; H-bomb physics.",
      example: "Per kg of D-T mix: ~3.4×10¹⁴ J — 4× fission per kg."
    }
  ],
  workedExamples: [
    {
      problem: "Complete the fission: ²³⁵U + n → ¹⁴¹Ba + ⁹²Kr + ?n. Balance A and Z.",
      given: "Fission fragments.",
      formula: "ΣA and ΣZ conserved.",
      substitution: "A: 235 + 1 = 236; products so far 141 + 92 = 233 → 3 neutrons. Z: 92 + 0 = 56 + 36 + 0 ✓.",
      calculation: "²³⁵U + n → ¹⁴¹Ba + ⁹²Kr + 3n.",
      answer: "3 neutrons — those are the chain-reaction seeds (and why k matters)."
    },
    {
      problem: "Compute the energy released in ²H + ³H → ⁴He + n. (m: ²H = 2.01410 u, ³H = 3.01605 u, ⁴He = 4.00260 u, n = 1.00866 u)",
      given: "Nuclear masses.",
      formula: "Q = (m_in − m_out) × 931.5 MeV.",
      substitution: "In: 5.03015 u. Out: 5.01126 u. Δm = 0.01889 u.",
      calculation: "Q = 0.01889 × 931.5 = 17.6 MeV.",
      answer: "17.6 MeV — 3.5 MeV to the alpha, 14.1 to the neutron (momentum: lighter particle carries most KE)."
    },
    {
      problem: "A 1000 MW reactor runs at 33% efficiency. Find its thermal power and the U-235 mass consumed per day (200 MeV/fission).",
      given: "P_elec = 10⁹ W.",
      formula: "P_th = P/η; m = (E_th/Q)·(235 g/mol)/N_A.",
      substitution: "P_th = 3.03×10⁹ W → E_day = 2.62×10¹⁴ J. Fissions = 2.62e14/3.2e-11 = 8.2×10²⁴.",
      calculation: "Moles = 8.2e24/6.02e23 = 13.6 mol → m = 13.6 × 235 g ≈ 3.2 kg.",
      answer: "~3 kg/day of U-235 — vs the ~10,000 TONNES/day of coal a fossil plant burns. The density of nuclear energy is the whole story."
    },
    {
      problem: "Explain why a reactor needs BOTH a moderator and control rods — what fails if each is removed?",
      given: "Component roles.",
      formula: "Chain-reaction physics.",
      substitution: "Moderator slows fast (fission-product) neutrons to thermal speeds where U-235 capture cross-section is high. Control rods absorb neutrons to hold k = 1.",
      calculation: "No moderator: neutrons too fast → most escape capture → chain dies (subcritical). No rods: k drifts >1 → power excursion → meltdown risk.",
      answer: "Moderator MAKES the chain possible; rods keep it SAFE — one enables, the other regulates."
    },
    {
      problem: "Why does fusion require ~10⁸ K while fission needs no heating at all?",
      given: "Coulomb barrier contrast.",
      formula: "Fusion: overcome +–+ repulsion; fission: neutron has no charge.",
      substitution: "Two nuclei must approach within ~2 fm against electrostatic repulsion → enormous KE → temperature. Fission's neutron feels no Coulomb force — it drifts in at any speed (thermal neutrons best).",
      calculation: "Barrier for D-T ≈ 0.1 MeV ↔ kT at 10⁸ K.",
      answer: "Fission is downhill once triggered; fusion is uphill — you must literally build a piece of the Sun's core on Earth."
    }
  ],
  commonMistakes: [
    "Writing fission as U → Ba + Kr alone — the initiating neutron and emitted neutrons MUST appear (chain physics).",
    "Balancing only A and forgetting Z (or vice versa) — check both.",
    "Saying control rods 'absorb the energy' — they absorb NEUTRONS (regulating k); coolant carries energy.",
    "Confusing moderator (slows neutrons) with coolant (carries heat) — in PWRs water does both, but the roles are distinct.",
    "Claiming fusion waste is as radioactive as fission waste — D-T activates structures short-term; no long-lived actinides.",
    "Thinking a reactor can 'go nuclear bomb' — fuel is ~3–5% U-235, far below weapons' 90%+; physics prevents it.",
    "Using chemical-burning intuition: 'burning uranium' — fission is a nuclear TRANSMUTATION, not combustion.",
    "Forgetting the mass-energy sign: energy released means products are LIGHTER (mass converted to energy)."
  ],
  applications: [
    "Nuclear power: ~10% of world electricity; France ~65%; SMRs (small modular reactors) next.",
    "Naval propulsion: reactor-driven carriers/submarines (decades between refuellings).",
    "Space: radioisotope thermoelectric generators (Voyager, Curiosity) and nuclear-thermal rocket research.",
    "Medicine & industry: reactors breed Mo-99 (imaging), Co-60 (sterilisation), neutron activation analysis.",
    "Fusion research: ITER (first plasma 2020s), NIF ignition (2022 net gain), private tokak/stellarator race.",
    "Weapons non-proliferation physics: enrichment levels, k-management, safeguards."
  ],
  summary: "Induced reactions: bombard and balance A & Z. FISSION: U-235 + n → fragments + 2–3n + 200 MeV; chain controlled by k (rods) and moderated neutrons; ~3 kg/day feeds a GW plant. FUSION: D+T → He+n+17.6 MeV; needs 10⁸ K to beat Coulomb repulsion; clean, dense, still hard. Both harvest the BE/A slope toward iron: Q = Δm·931.5 MeV/u.",
  visuals: [
    { type: "flowChart", config: { steps: ["Neutron strikes U-235", "U-236* forms, oscillates", "Splits: Ba + Kr + 2–3 fast neutrons + 200 MeV", "Moderator slows neutrons", "Rods absorb the surplus", "k = 1: steady chain"], title: "A Controlled Chain Reaction" } }
  , {"type":"qa","config":{"title":"Quick Review — tap a question to reveal the answer","pairs":[{"q":"Complete the fission: ²³⁵U + n → ¹⁴¹Ba + ⁹²Kr + ?n. Balance A and Z.","a":"<b>Answer:</b> 3 neutrons — those are the chain-reaction seeds (and why k matters)."},{"q":"Compute the energy released in ²H + ³H → ⁴He + n. (m: ²H = 2.01410 u, ³H = 3.01605 u, ⁴He…","a":"<b>Answer:</b> 17.6 MeV — 3.5 MeV to the alpha, 14.1 to the neutron (momentum: lighter particle carries most KE)."},{"q":"A 1000 MW reactor runs at 33% efficiency. Find its thermal power and the U-235 mass consu…","a":"<b>Answer:</b> ~3 kg/day of U-235 — vs the ~10,000 TONNES/day of coal a fossil plant burns. The density of nuclear energy is the whole story."},{"q":"Explain why a reactor needs BOTH a moderator and control rods — what fails if each is rem…","a":"<b>Answer:</b> Moderator MAKES the chain possible; rods keep it SAFE — one enables, the other regulates."}]}}],
  questions: [
    { type: "mcq", q: "A fission of U-235 typically releases:", options: ["1 neutron", "2–3 neutrons", "10 neutrons", "No neutrons"], answer: 1, difficulty: 1, explanation: "Average ~2.4 neutrons — enough to sustain a chain." },
    { type: "calc", q: "Complete: ²³⁹Pu + n → ¹⁴⁴Ba + ⁹⁴Sr + ?n. How many neutrons are released? (A: 239+1 = 240; 144+94 = 238)", answer: "2", difficulty: 2, explanation: "A: 240 − 238 = 2 neutrons. Z check: 94 = 56 + 38 ✓ (Ba + Sr).", tolerance: 0.1 },
    { type: "mcq", q: "Control rods work by:", options: ["Cooling the core", "Absorbing neutrons", "Slowing neutrons", "Adding fuel"], answer: 1, difficulty: 1, explanation: "Boron/cadmium soak up neutrons, lowering k; insert deeper → less power." },
    { type: "mcq", q: "The moderator's job is to:", options: ["Absorb neutrons", "Slow neutrons to thermal energies", "Carry heat", "Shield radiation"], answer: 1, difficulty: 2, explanation: "U-235 captures SLOW neutrons far more readily; water/graphite do the slowing." },
    { type: "calc", q: "Fission Q = 200 MeV in joules? (1 MeV = 1.6e-13 J)", answer: "3.2e-11", difficulty: 2, explanation: "200 × 1.6e-13 = 3.2×10⁻¹¹ J.", tolerance: 1e-12, altAnswers: ["3.2E-11"] },
    { type: "concept", q: "Why can't a commercial reactor explode like a nuclear bomb?", answer: "fuel too dilute|3-5% U-235 vs 90%|chain can't run supercritical that fast", difficulty: 3, explanation: "Reactor fuel is low-enriched; the runaway prompt-critical excursion of a weapon is physically impossible with it." },
    { type: "mcq", q: "Fusion releases energy because:", options: ["Mass is created", "Products are more tightly bound (higher BE/nucleon)", "Neutrons are consumed", "It needs high temperature"], answer: 1, difficulty: 2, explanation: "He-4 sits far above H isotopes on the BE/A curve — the climb releases the difference." },
    { type: "calc", q: "Q-value: reactants 5.03015 u, products 5.01126 u. Energy in MeV (×931.5)?", answer: "17.6", difficulty: 3, explanation: "Δm = 0.01889 u × 931.5 = 17.6 MeV.", tolerance: 0.2 },
    { type: "tf", q: "In the Sun, hydrogen fuses via the proton–proton chain into helium.", answer: true, difficulty: 1, explanation: "4 ¹H → ⁴He + 2e⁺ + 2ν + 26.7 MeV — the Sun's engine." },
    { type: "short", q: "Name the condition where exactly one neutron per fission continues the chain.", answer: "critical|criticality|k=1", difficulty: 2, explanation: "k = 1: steady, self-sustaining chain — a reactor at power." }
  ]
};
