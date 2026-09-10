/* Content: Grade 12 Chemistry — Unit 4: Polymers (3 topics) */
window.Lessons = window.Lessons || {};

Lessons["g12-chemistry-uc4-t1"] = {
  overview: "A polymer is a giant molecule built by repeating a small unit (monomer) thousands of times — and once you see the repeat unit, the whole plastics world unlocks: addition polymers from alkenes, condensation polymers that clip off water, and the properties (thermoplastic vs thermoset, crystalline vs rubbery) that decide whether your bucket, tyre or phone case survives a hot car.",
  objectives: [
    "Define monomer, polymer, repeat unit, degree of polymerisation",
    "Draw repeat units and monomers for common addition polymers",
    "Distinguish thermoplastics, thermosets and elastomers by structure",
    "Relate branching and intermolecular forces to density and melting",
    "Name major plastics with uses and recycling codes"
  ],
  simple: "<b>Chains long enough to matter.</b> Ethene's double bond opens thousands of times → poly(ethene). The repeat unit is the monomer minus the double bond: −(CH₂−CH₂)ₙ−. Chain length n runs 10³-10⁵; the material's strength comes from the SUM of weak dispersion forces along kilometres of chain — one link is nothing, a million hold a rope together. Polyethene branches two ways: low-pressure linear chains pack tight (HDPE: bottles, pipes), high-pressure branched chains don't (LDPE: film, squeeze bottles).",
  detailed: "<p><b>Vocabulary that unlocks everything.</b> Monomer → repeat unit → chain → material. The 'poly-' name just means many mer-units. Degree of polymerisation (DP) = n; molar mass of chain ≈ n × repeat-unit mass (why 'polymer' literally means variable-length: real samples are distributions, not single molecules). Natural polymers already lived here before plastics: cellulose, starch, proteins, DNA, natural rubber, silk — Unit 4's chemistry is the same covalent repetition biology perfected.</p><p><b>Addition (chain) polymers from alkenes.</b> The C=C π bond opens; the σ backbone grows. Ethene → PE; propene → poly(propene) (methyl side group: more rigid, hinged containers and ropes); styrene → polystyrene (bulky phenyl: amorphous and brittle, or foamed with pentane = cups and packing); chloroethene (VCM) → PVC (polar C–Cl: rigid pipes until plasticisers slide chains apart — the flexible-vs-rigidity switch is intermolecular force manipulation); tetrafluoroethene → PTFE (Teflon: the C–F bond's strength plus fluorine's smooth sheath = non-stick, chemically inert, low-friction); methyl methacrylate → PMMA (Perspex: optical clarity, shatter-resistant glass substitute); ethenyl ethanoate → PVA (glue).</p><p><b>Structure decides property.</b> Thermoplastics = separate chains with only intermolecular forces between them: soften on heating (those forces unstick), re-harden on cooling — reprocessable, mechanically recyclable. Thermosets = covalent crosslinks weld all chains into one macromolecular sheet (vulcanised rubber's S–S bridges, epoxy, Bakelite): never melt — they char; crosslink density is what turns a sticky liquid into a solid network during curing. Elastomers = lightly crosslinked + coiled and kinked chains: stretch uncoils, crosslinks remember the shape and snap it back — a rubber band is a shape-memory argument made of entropy.</p><p><b>Packing: crystallinity and density.</b> Linear PE chains stack in ordered crystallites (HDPE ~0.95 g/cm³, mp ~135 °C, strong: pipes and jerrycans); short-chain branching (LDPE, made with O₂ initiator at ~2000 atm, or comonomers like butene) destroys packing (0.92 g/cm³, soft, transparent films). Bulky side groups (PS, PMMA) freeze chains into amorphous glasses: transparent, no true mp, glass-transition Tg instead — PS is glassy at room temperature (brittle cup) and softens near 100 °C.</p><p><b>The field guide.</b> PET bottles (#1), HDPE (#2), PVC (#3), LDPE (#4), PP (#5), PS (#6), other (#7, incl. PC, nylon): the resin code is a sorting instruction, not a quality rating. Ethiopia's everyday plastics: LDPE 'sungless' bags and canes (sugarcane water pouches — sachet culture), PP ropes and sacks (coffee bags), PVC pipes, PET bottles, nylon toothbrush-to-textile fibres. Recycling codes' real story: mechanical downcycling mostly; feedstock and chemical recycling are Unit 5's problem set.</p>",
  keyTerms: [
    { term: "Monomer", def: "small molecule that repeats" },
    { term: "Repeat unit", def: "the bracketed pattern of the chain" },
    { term: "Degree of polymerisation", def: "n: repeat-units per chain" },
    { term: "Thermoplastic", def: "softens hot, hardens cold: reprocessable" },
    { term: "Thermoset", def: "crosslinked network: sets forever" },
    { term: "Elastomer", def: "light-crosslink spring: rubber" },
    { term: "Crystallinity", def: "chain-packing order (HDPE vs LDPE)" },
    { term: "Tg", def: "glass transition: amorphous softening" }
  ],
  formulas: [
    { name: "Addition generalised", formula: "n CH₂=CHR → [−CH₂−CHR−]ₙ", meaning: "π bond opens; σ backbone forms", vars: [{ name: "R", meaning: "H, CH₃, C₆H₅, Cl, F..." }], when: "all vinyl polymers" },
    { name: "Polyethene repeat", formula: "−(CH₂−CH₂)ₙ−", meaning: "simplest plastic", vars: [{ name: "n~10³⁻⁵", meaning: "DP range" }], when: "HDPE/LDPE" },
    { name: "Chain molar mass", formula: "M(chain) ≈ n × M(repeat)", meaning: "distribution, not a number", vars: [{ name: "e.g. n=10⁴ → ~280 kg/mol", meaning: "PE" }], when: "property predictions" }
  ],
  workedExamples: [
    { problem: "Draw the repeat unit of poly(propene) and name its monomer.", calculation: "Propene CH₂=CHCH₃ opens the double bond.", answer: "[−CH₂−CH(CH₃)−]ₙ." },
    { problem: "Why is PVC rigid but plasticised PVC flexible?", calculation: "C–Cl polarity pins chains together (dipole-dipole); small ester plasticisers wedge between, screening those forces.", answer: "Same molecule, different intermolecular friction: rigid pipe vs flex cable jacket." },
    { problem: "A PE chain has n = 20 000. Its molar mass?", calculation: "Repeat 28 g/mol × 20 000.", answer: "~560 kg/mol: one coil longer than a virus is wide." },
    { problem: "Why can't a thermoset be remoulded?", calculation: "Reversing needs breaking covalent crosslinks, not just unstacking forces.", answer: "Heat chars rather than flows: epoxy and tyres are one-shot shapes." }
  ],
  commonMistakes: [
    "Drawing the repeat unit WITH the double bond (addition polymers have σ backbones)",
    "Confusing the monomer's formula with the repeat unit's (mass differs: π→σ)",
    "Calling all plastics meltable (thermosets don't)",
    "Attributing HDPE/LDPE difference to chemistry (it's branching/packing)",
    "Reading recycling codes as quality or biodegradability labels"
  ],
  applications: [
    "LDPE irrigation pipe and coffee-sack PP: Ethiopian agri-plastics",
    "PTFE linings where acids and heat attack metals",
    "PMMA replacing glass in bus shelters and headlights (shatter-proof)",
    "Epoxy resins and vulcanised rubber: the crosslink economy"
  ],
  summary: "One π bond at a time: vinyl monomers → chain polymers whose properties are just intermolecular forces — branching packs, crosslinks weld, coils spring.",
  visuals: [],
  questions: [
    { type: "mcq", q: "The monomer of PVC is:", options: ["ethene", "chloroethene", "chlorine gas", "chlorobenzene"], answer: 1, difficulty: 1, explanation: "Vinyl chloride CH₂=CHCl polymerises." },
    { type: "mcq", q: "A thermoplastic is one that:", options: ["never softens", "softens on heating and rehardens on cooling", "is always transparent", "crosslinks itself"], answer: 1, difficulty: 1, explanation: "Forces unstick then re-form: remouldable." },
    { type: "mcq", q: "HDPE differs from LDPE mainly in:", options: ["monomer", "chain branching/packing", "colour", "chlorine content"], answer: 1, difficulty: 2, explanation: "Linear chains pack: denser and stronger." },
    { type: "mcq", q: "Vulcanisation crosslinks rubber with:", options: ["carbon", "sulfur", "oxygen", "hydrogen"], answer: 1, difficulty: 2, explanation: "S–S bridges at double-bond sites: tyres." },
    { type: "mcq", q: "The repeat unit of poly(styrene) is:", options: ["[−CH₂−CH(C₆H₅)−]ₙ", "[−CH=CH−]ₙ", "[−C₆H₄−]ₙ", "[−CH₂−CH₂−]ₙ"], answer: 0, difficulty: 2, explanation: "Styrene minus the π bond." },
    { type: "mcq", q: "PTFE's non-stick behaviour traces to:", options: ["its colour", "strong C–F bonds and smooth fluorine sheath", "crosslinking", "plasticisers"], answer: 1, difficulty: 2, explanation: "Nothing sticks to a chain fully armoured in F." },
    { type: "mcq", q: "A rubber band snapping back is best explained by:", options: ["crystallinity", "crosslinks + uncoiling entropy", "density", "Tg"], answer: 1, difficulty: 3, explanation: "Stretch orders the coils; the network remembers the shape." },
    { type: "mcq", q: "Polystyrene's brittleness at room T comes from:", options: ["aromatic rings freezing chains (amorphous glass)", "too many H atoms", "crosslinking", "branching"], answer: 0, difficulty: 3, explanation: "Bulky phenyl groups lock a glassy, no-slip arrangement." }
  ]
};

Lessons["g12-chemistry-uc4-t2"] = {
  overview: "Polymerization is mechanism, not magic: chain-growth addition (initiate → propagate → terminate: every π bond an opening) versus step-growth condensation (any two end-groups react, clipping off water or HCl: polyesters, polyamides, polycarbonates). Write the two mechanisms once and you can predict what any monomer mixture makes — and what it won't.",
  objectives: [
    "Describe free-radical addition: initiation, propagation, termination",
    "Explain why addition polymers keep all monomer mass",
    "Write condensation reactions between diols + diacids and diamines + diacids",
    "Draw PET, nylon-6,6 and Kevlar-type repeat units from monomer pairs",
    "Contrast the two growth modes and their stoichiometric demands"
  ],
  simple: "<b>Two ways to build a chain.</b> ADDITION: an initiator radical attacks an alkene, the new radical attacks the next alkene — thousands of times — until two radicals meet and die (combine/disproportionate). Nothing is lost: chain mass = monomer mass. CONDENSATION: a diol's OH meets a diacid's COOH, they esterify and lose water — at BOTH ends simultaneously — so step by step dimers make tetramers make macromolecules. Lose a small molecule every bond: nylon, PET, polycarbonate, kevlar are all step-growth winners.",
  detailed: "<p><b>Free-radical chain growth.</b> Initiation: a peroxide or AIBN splits (heat/light) to R•; R• + CH₂=CHX → R−CH₂−ĊHX. Propagation: that carbon radical adds the next vinyl, moving the radical to the chain end — each step identical, activation just tens of kJ. Termination: combination (two ends couple) or disproportionation (H shuffle gives one saturated + one vinyl-terminated chain). Trace oxygen KILLS radicals (induction periods), why emulsions are nitrogen-purged. Control knobs: temperature (rate and branching), pressure, chain-transfer agents (limit n on purpose), Ziegler-Natta catalysts (TiCl₄/AlEt₃: coordinate-insertion growth that LINEARISES polyethene — the HDPE low-pressure route and a Nobel in 1963) and metallocenes beyond them.</p><p><b>Emulsion and bulk realities.</b> Industrial addition polymerization lives in water: monomer droplets + soap micelles = emulsion polymerization (SBR car tyres, PVC suspension beads, house paint = polymer latex by design — the water is solvent and heat sink, the polymer arrives as a dispersion you can pour onto a wall). Bulk (mass) makes PMMA sheets and PS beads; suspension makes PVC beads. This is Unit 3's flowsheet thinking in polymer dress.</p><p><b>Step growth's arithmetic.</b> Any OH + COOH pair reacts anywhere along the mix — dimer + dimer → tetramer + H₂O. High DP demands >99% CONVERSION and exact 1:1 stoichiometry (Carothers: DP ≈ 1/(1−p) — p=0.99 → only ~100 repeats; a 1% imbalance or impurity caps chain length hard). Water must be driven OFF (vacuum, N₂ sweep, excess heat): equilibrium esters don't self-concentrate. Diol + diacid → polyester; diamine + diacid → polyamide (nylon); diacid chloride + diamine at a cold interface → the classroom nylon rope: interfacial polycondensation, driven by HCl escape into water.</p><p><b>The repeat-unit drawing skill.</b> From monomers: line them up, clip the small molecule, join the stubs — PET: HOCH₂CH₂OH + HOOC−C₆H₄−COOH → [−OCH₂CH₂O−OC−C₆H₄−CO−]ₙ + 2n H₂O. Nylon-6,6: hexamethylenediamine + adipic acid → [−NH(CH₂)₆NH−CO(CH₂)₄CO−]ₙ. Kevlar: para-phenylenediamine + terephthaloyl chloride → rigid-rod aramid whose flat chains H-bond into sheets that stop bullets. Nomex (meta-linkage: kinked rods = flame-resistant fabric). Nylon-6 is a trick: caprolactam ring-opens — addition-style growth, condensation-style amide bond (ring-opens don't lose anything: why 'polycaprolactam' is nylon-6 with no water).</p><p><b>Polyurethanes and the exception pile.</b> Diisocyanate + diol → urethane links with NOTHING lost: step-growth without condensation byproduct (foams flexible and rigid, elastomers, varnishes; the 'PUR' in Ethiopian mattress factories). Silicones: alternating Si–O backbone from hydrolysed chlorosilanes — inorganic backbone, organic side groups: from lubricants to medical tubing to the RTV sealant on every window frame.",
  keyTerms: [
    { term: "Free radical", def: "odd-electron species: chain starter" },
    { term: "Initiator", def: "peroxide/AIBN: radical source" },
    { term: "Termination", def: "radical pair combine/disproportionate" },
    { term: "Ziegler-Natta", def: "TiCl₄/AlEt₃: linear PE, stereocontrol" },
    { term: "Step growth", def: "any end-groups react, anytime" },
    { term: "Carothers", def: "DP ≈ 1/(1−p): conversion tyranny" },
    { term: "Aramid", def: "aromatic polyamide: Kevlar" },
    { term: "Polyurethane", def: "step growth with no byproduct" }
  ],
  formulas: [
    { name: "Radical propagation", formula: "R−CH₂−ĊHX + n CH₂=CHX → R−(CH₂−CHX)ₙ₊₁−ĊHX", meaning: "the radical walks down the line", vars: [{ name: "X", meaning: "the side group" }], when: "every vinyl plastic" },
    { name: "Ester condensation", formula: "HO−R−OH + HOOC−R′−COOH → [−O−R−O−CO−R′−CO−]ₙ + H₂O", meaning: "the polyester engine", vars: [{ name: "remove water", meaning: "or equilibrium stops it" }], when: "PET" },
    { name: "Amide condensation", formula: "H₂N−R−NH₂ + HOOC−R′−COOH → [−NH−R−NH−CO−R′−CO−]ₙ + H₂O", meaning: "polyamide bond", vars: [{ name: "nylon-6,6", meaning: "C6 diamine + C6 diacid" }], when: "nylons, aramids" }
  ],
  workedExamples: [
    { problem: "Write the propagation step of styrene radical growth.", calculation: "ĊH₂−CH(Ph) chain-end + CH₂=CHPh → chain-end now on the new unit.", answer: "Radical migrates to the terminal carbon each addition: the growing end stays primary-benzylic-ish and reactive." },
    { problem: "Step growth wants 99.5% conversion. What does a 1% water leftover do?", calculation: "Reverse hydrolysis caps p; DP ≈ 1/(1−0.99) = 100 vs 200.", answer: "Halves chain length: PET dryers and vacuum exist for exactly this." },
    { problem: "Nylon-6,6 name decoded?", calculation: "6,6 = carbons in diamine and diacid.", answer: "Hexamethylenediamine + adipic acid — the numbers are a recipe." },
    { problem: "Kevlar vs nylon-6,6 strength at equal bonds — why?", calculation: "Aromatic rods are flat and rigid: dense H-bond sheets + stacking.", answer: "Chain packing (crystalline order) not just bond count: bullets meet a laminated wall." }
  ],
  commonMistakes: [
    "Putting the radical mid-chain (propagation keeps it on the growing end)",
    "Losing water twice: repeat-unit drawing vs byproduct bookkeeping",
    "Forgetting exact stoichiometry (1% mono-functional impurity caps DP at ~100)",
    "Calling nylon-6,6 made while water stays in the reactor (it must be REMOVED)",
    "Assuming all step growth sheds a small molecule (polyurethanes don't)"
  ],
  applications: [
    "PET bottle resin: ester condensation at 10⁴ t/day",
    "Nylon ropes and coffee-bag PP vs PE: fibre selection is chemistry",
    "Kevlar/Nomex: aramid body armour and firefighter suits",
    "PUR mattresses and emulsion paints: Ethiopian polymer consumption"
  ],
  summary: "Addition = a radical walking a vinyl queue (mass conserved); condensation = end-groups meeting everywhere (mass shed); DP follows mechanism and stoichiometry.",
  visuals: [],
  questions: [
    { type: "mcq", q: "In radical polymerization, the active site during propagation is:", options: ["the initiator fragment", "the chain end", "mid-chain", "the monomer only"], answer: 1, difficulty: 1, explanation: "The radical stays on the growing terminus." },
    { type: "mcq", q: "Termination by disproportionation gives:", options: ["one longer chain", "two dead chains, one with a vinyl end", "a crosslink", "an initiator"], answer: 1, difficulty: 2, explanation: "H transfer: one saturated, one unsaturated end." },
    { type: "mcq", q: "Condensation polymers always:", options: ["use alkenes", "lose a small molecule (or are made from acid derivatives)", "need UV", "are transparent"], answer: 1, difficulty: 2, explanation: "Water/HCl shed at every bond (PU the noted exception: no byproduct)." },
    { type: "mcq", q: "PET is made from:", options: ["ethene + terephthalic acid only", "ethylene glycol + terephthalic acid", "glycerol + phthalic", "styrene + ethene"], answer: 1, difficulty: 2, explanation: "Diol + diacid: a polyester." },
    { type: "mcq", q: "Nylon-6 differs from nylon-6,6 because it comes from:", options: ["a diacid", "caprolactam ring-opening", "hexane", "a diol"], answer: 1, difficulty: 3, explanation: "One monomer; no water lost." },
    { type: "mcq", q: "Ziegler-Natta catalysts deliver:", options: ["radical branching", "linear chains and stereocontrol", "crosslinks", "foams"], answer: 1, difficulty: 3, explanation: "HDPE + isotactic PP: coordination-insertion." },
    { type: "mcq", q: "p = 0.990 step growth gives DP about:", options: ["10", "100", "1000", "1 000 000"], answer: 1, difficulty: 3, explanation: "1/(1−p) = 100: the conversion cliff." },
    { type: "mcq", q: "Interfacial nylon rope forms because:", options: ["heat melts it", "HCl escapes to water and diamine+diacid chloride react at the boundary", "air oxidises", "solvent evaporates"], answer: 1, difficulty: 3, explanation: "Irreversible acid-chloride coupling at the interface." }
  ]
};

Lessons["g12-chemistry-uc4-t3"] = {
  overview: "How do you sort the polymer zoo? By source (natural/synthetic/semi), by reaction type (addition/condensation), by behaviour (thermoplastic/thermoset/elastomer/fibre), by application, and by chain architecture (linear, branched, crosslinked) — and the same bottle lands in four different classes at once. This topic installs the taxonomy and the reasoning: structure → class → property → use, with biodegradable and conducting polymers as the frontiers.",
  objectives: [
    "Classify by source: natural, semi-synthetic, synthetic",
    "Classify by mechanism: addition vs condensation",
    "Classify by thermal behaviour: thermoplastic/thermoset/elastomer/fibre",
    "Explain architecture classes (linear/branched/crosslinked) via property",
    "Discuss biodegradable, conducting and smart polymer frontiers"
  ],
  simple: "<b>Every plastic wears several hats.</b> Cotton: natural, condensation (cellulose = β-glucose polymer), fibre polymer. PET: synthetic, condensation, thermoplastic fibre/bottle. Tyre rubber: lightly crosslinked elastomer (natural or SBR). Bakelite: synthetic thermoset. The classification IS the analysis — pick the axis the question cares about. Frontiers: PLA and PHA biodegrade by design; PANi and PEDOT conduct when doped; hydrogels swell on command.",
  detailed: "<p><b>Source axis.</b> Natural: rubber (polyisoprene), cellulose + starch + proteins + DNA (biology's addition/condensation hybrids), silk, chitin. Semi-synthetic: nature modified — viscose rayon (cellulose dissolved in CS₂/NaOH and regenerated), cellulose acetate (film and filters), vulcanised rubber (chemically 'finished' natural). Synthetic: from petroleum or gas feedstocks (Unit 3) — the vinyls, nylons, polyesters, silicones. Ethiopia reads on this axis directly: coffee pulp and cotton = natural polymer streams; textile viscose imports = semi-synthetics; the plastics trade = synthetics.</p><p><b>Mechanism axis.</b> Addition: chain-growth, no byproduct, vinyls/alkenes — PE, PP, PVC, PS, PTFE, PAN (polyacrylonitrile, the nylon-6,6's fibre cousin). Condensation (step-growth): small molecule shed — PET, nylons, aramids, PC, urea-formaldehyde glues (particleboard — the formaldehyde story). Ring-opening sits on the mechanism map as the hyphen: nylon-6 and PLA grow by opened rings, no byproduct, condensation-looking linkages.</p><p><b>Behaviour axis (the one engineering uses).</b> Thermoplastics: linear/branched, no covalent links between chains → remouldable (80-90% of world production). Thermosets: cured networks — PF/urea glues, epoxies, unsaturated polyester resins (fibreglass boat hulls), polyurethane foams. Elastomers: light crosslinks + coiled chains (rubber, silicone rubbers). Fibres: high-crystallinity, strong intermolecular bonding, drawn into threads — polyester, nylon (H-bond sheets), aramid, and natural cotton/wool — the fibre class is a PROPERTY definition: drawability + tenacity, not a chemistry family. This axis answers 'which plastic can be remelted' and 'why the bumper is thermoset' in one breath.</p><p><b>Architecture axis.</b> Linear (HDPE, UHMWPE: draw it and it crystallises into rope strong enough to cut-proof gloves), branched/star (LDPE, hyperbranched adhesives and rheology modifiers), crosslinked (vulcanised rubber, gels), network (thermoset, glass-like). Dendrimers: tree-perfect architecture made generation by generation — drug carriers because their surface is 100% functional groups. Architecture explains why the SAME formula (PE) spans cling film to bulletproof panel: n and branch pattern.</p><p><b>Frontier classes.</b> Biodegradable: hydrolysable backbones (esters!) — PLA (lactic acid condensation/ring-open, compostable cutlery), PHA (bacteria-made: sugar → granules inside microbes → spun), PBS/polyester blends; note 'biodegradable' is CONDITIONAL (industrial compost vs your garden vs the ocean where cold+dark means centuries). Conducting: conjugated backbones (alternating double bonds) doped into charge mobility — polyacetylene (Nobel 2000), polyaniline, PEDOT:PSS (antistatic coatings, flexible electrodes — the touchscreens); smart: hydrogels (nappy absorbency, contact lenses), shape-memory polymers (stents that unfold at body heat). Circular-economy lens: classification by end-of-life too — mechanically recyclable (thermoplastics), chemically depolymerisable (PET → monomers, nylon-6 → caprolactam), energy-recovery (mixed thermosets), and landfill-indefinite (the aramids, the crosslinked).",
  keyTerms: [
    { term: "Semi-synthetic", def: "natural polymer chemically modified" },
    { term: "Viscose/rayon", def: "regenerated cellulose fibre" },
    { term: "Fibre (class)", def: "high-orientation, crystalline, strong threads" },
    { term: "UHMWPE", def: "huge-DM linear PE: ropes, joint liners" },
    { term: "Dendrimer", def: "tree-perfect branched macromolecule" },
    { term: "PHA/PLA", def: "biological/compostable polyesters" },
    { term: "Conjugated", def: "alternating bonds = electron highway when doped" },
    { term: "Hydrogel", def: "crosslinked water sponge" }
  ],
  formulas: [
    { name: "Cellulose repeat", formula: "[−C₆H₁₀O₅−]ₙ β-glucose, β-1,4 links", meaning: "nature's most abundant polymer", vars: [{ name: "straight chains", meaning: "H-bond fibres = plant strength" }], when: "cotton, paper, viscose" },
    { name: "Natural rubber", formula: "cis-1,4-polyisoprene", meaning: "kinked coil = elastic", vars: [{ name: "trans (gutta)", meaning: "straight = hard: the geometry demo" }], when: "elastomers" },
    { name: "PLA formation", formula: "n lactic acid → [−O−CH(CH₃)−CO−]ₙ + n H₂O", meaning: "compostable polyester", vars: [{ name: "ester links", meaning: "hydrolyseable = the biodegradation handle" }], when: "bioplastics" }
  ],
  workedExamples: [
    { problem: "Classify PET on all four axes.", calculation: "Make, mechanism, behaviour, architecture.", answer: "Synthetic; condensation; thermoplastic; linear semi-crystalline (drawn: fibre or bottle)." },
    { problem: "Why does cis-rubber stretch but trans gutta-percha doesn't?", calculation: "cis double-bond kinks the chain (coil: uncoil + spring back); trans packs straight (crystalline: plastic rigid).", answer: "Stereochemistry as engineering spec." },
    { problem: "Why are all fibres polyesters or polyamides or aramids? (pattern)", calculation: "Regular backbone + strong IMFs (dipole, H-bond) + crystallinity = drawability and tenacity.", answer: "Fibre = architecture property, not a chemical family: cotton included." },
    { problem: "'Biodegradable' plastic in an ocean: likely?", calculation: "Cold, dark, low microbial load, thin articles hydrolyse slowly.", answer: "Mostly no: certification conditions (58 °C industrial compost) rarely met: a Unit 5 systems point." }
  ],
  commonMistakes: [
    "Treating classes as exclusive (PET is 3-4 of them at once)",
    "Treating 'thermoset/fibre/elastomer' as chemistry families (they are behaviour classes)",
    "Confusing 'bioplastic' (from biomass) with 'biodegradable' (end-of-life): a corn-based PE is neither extra green nor compostable",
    "Naming rayon 'synthetic' (regenerated natural: semi-synthetic)",
    "Believing conductive plastics conduct as-made (doping required)"
  ],
  applications: [
    "Cotton/wool/silk (natural fibres) vs Ethiopia's apparel imports of viscose and PET blends",
    "UHMWPE: cut-resistant gloves and hip-joint liners",
    "PEDOT antistatic and organic-solar layers",
    "PLA packaging pilots + the honest-compost caveat"
  ],
  summary: "Sort polymers by source, mechanism, thermal behaviour, or architecture — same bottle in four drawers — and remember: properties are structure, and 'biodegradable' is a condition, not a promise.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Rayon (viscose) is best classed:", options: ["fully synthetic", "semi-synthetic (regenerated cellulose)", "natural protein", "synthetic polyester"], answer: 1, difficulty: 1, explanation: "Nature's polymer, dissolved and rebuilt." },
    { type: "mcq", q: "Thermoset plastics are:", options: ["remeltable", "covalently crosslinked networks", "always fibres", "from alkenes"], answer: 1, difficulty: 1, explanation: "Set during curing: never reflows." },
    { type: "mcq", q: "Nylon and PET share being:", options: ["addition polymers", "condensation polymers", "elastomers", "natural"], answer: 1, difficulty: 2, explanation: "Both step-growth amide/ester condensations." },
    { type: "mcq", q: "Fibres as a class are defined by:", options: ["monomer type", "drawability and tenacity (crystalline orientation)", "colour", "transparency"], answer: 1, difficulty: 2, explanation: "A property class: cotton qualifies." },
    { type: "mcq", q: "PLA biodegrades because:", options: ["it is aromatic", "its ester backbone hydrolyses", "it absorbs light", "it has chlorine"], answer: 1, difficulty: 2, explanation: "Hydrolysable links: the biodegradation handle." },
    { type: "mcq", q: "cis vs trans polyisoprene differ in:", options: ["formula", "chain coiling (elasticity)", "crosslink type", "monomer"], answer: 1, difficulty: 3, explanation: "Same atoms: kinked coil vs straight crystal." },
    { type: "mcq", q: "'Bioplastic' made from corn sugar but pure polyethene is:", options: ["biodegradable", "bio-based but NOT compostable", "a polyester", "a fibre"], answer: 1, difficulty: 3, explanation: "Source vs end-of-life: two different axes." },
    { type: "mcq", q: "Conducting polymers (PANi, PEDOT) require:", options: ["metals blended", "conjugated backbone + doping", "crosslinks", "fillers only"], answer: 1, difficulty: 3, explanation: "Delocalised π system, charges created by dopants." }
  ]
};
