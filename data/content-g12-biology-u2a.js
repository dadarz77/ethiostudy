/* Content: Grade 12 Biology — Unit 2 (part A): topics 1-3 */
window.Lessons = window.Lessons || {};

Lessons["g12-biology-ub2-t1"] = {
  overview: "Eubacteria are the 'true bacteria' — prokaryotes whose cell walls contain peptidoglycan, whose genes sit on a circular chromosome plus plasmids, and whose numbers, metabolic range and adaptability make them Earth's dominant biomass. Almost every microbiology concept (structure, staining, reproduction, metabolism, disease) runs through them, and they include both our worst pathogens and our best allies.",
  objectives: [
    "Describe prokaryotic cell structure vs eukaryotic",
    "Classify bacteria by shape, arrangement, Gram reaction",
    "Explain binary fission, conjugation, transformation, transduction",
    "Summarise bacterial metabolisms (aerobe/anaerobe, autotroph/heterotroph)",
    "Name bacterial diseases and benefits with Ethiopian relevance"
  ],
  simple: "<b>No nucleus, no problem — the oldest success story.</b> A bacterium is a cell without compartments: nucleoid (circular DNA), ribosomes (70S), plasma membrane, and a peptidoglycan wall (the Gram-stain target: thick purple wall = Gram+, thin pink wall + outer membrane = Gram−). Extras: capsule (stick and shield), flagella (swim), pili (attach, conjugate), plasmids (bonus genes, often resistance). Shapes: cocci (spheres, clusters/strepto), bacilli (rods), spirilla/vibrio (curved). Reproduction is binary fission — one into two, E. coli every 20 minutes in comfort — and genetic mixing (not sex) via conjugation (pilus bridge), transformation (naked DNA pickup), transduction (phorus delivery, topic t5).",
  detailed: "<p><b>The prokaryote inventory.</b> Compared with eukaryotes: no nuclear membrane (transcription and translation share a compartment — so they happen simultaneously), no membrane organelles, single circular chromosome (some bacteria carry a second or linear one), 70S ribosomes (the antibiotic target class: tetracyclines and streptomycin jam bacterial ribosomes without touching our 80S ones, selective toxicity in one sentence). The envelope: plasma membrane (respiration in bacteria — no mitochondria needed, the membrane carries the electron transport), peptidoglycan (NAM-NAG sugars crosslinked by peptide bridges; lysozyme in tears cuts the bonds, penicillin blocks the crosslinking — walls are architecture you can attack), and in Gram− an outer membrane whose lipopolysaccharide (endotoxin) triggers fever/shock; mycolic-acid waxy walls make Mycobacterium tuberculosis acid-fast and slow-growing — why TB treatment runs six months.</p><p><b>Enumeration by shape and stain.</b> Cocci: Staphylococcus (grape clusters, skin boils), Streptococcus (chains, throat), Diplococcus (pairs, pneumonia). Bacilli: rod-shaped — E. coli (gut, some strains deadly), Bacillus anthracis (spores, cattle disease in Afar lowlands), Lactobacillus (ergo yoghurt). Curved: Vibrio cholerae (comma; recent cholera waves in Ethiopia), Helicobacter pylori (stomach ulcers). Gram staining (crystal violet → iodine → alcohol → safranin) still guides first-line antibiotic choice, while culture on selective media (MacConkey, blood agar) and biochemical tests (catalase, coagulase) identify; 16S rRNA sequencing is now the taxonomic referee.</p><p><b>Genetics without sex — the three H-borrowers.</b> Conjugation: a plasmid (F factor) builds a pilus, copies itself into the receiver — resistance genes spread bacterial-to-bacterial like a shared file. Transformation: naked DNA from dead neighbours is picked up (Griffith's 1928 pneumococcus experiment: the dead smooth strain revived the mice-killer coat — the first DNA-as-gene evidence). Transduction: a bacteriophage mispacks host DNA and delivers it. None recombines two parents 50/50; they move pieces — lateral gene transfer, the reason antibiotic resistance races across species.</p><p><b>Metabolism: every energy source exploited.</b> Energy: phototrophs (cyanobacteria: oxygenic photosynthesis — the architects of Earth's atmosphere) vs chemotrophs. Carbon: autotrophs (CO₂) vs heterotrophs (organics). Electrons: lithotrophs (inorganic) vs organotrophs. The grid gives niches: nitrifiers (NH₃→NO₂→NO₃, the soil fertility engine), sulfate reducers (rotten-egg wetlands), methanogens are archaea (t5b), iron oxidizers (the orange streams of acid mine drainage). Oxygen fates: obligate aerobes (TB's lungs), obligate anaerobes (Clostridium tetani deep in wounds), facultative (E. coli, switchable), microaerophilic (H. pylori's mucus gradient). Endospores (Bacillus, Clostridium): dehydration + dipicolinic acid + coats = radiation, boiling-adjacent and decades survival — sterilization autoclaves exist at 121 °C FOR THE SPORES.</p><p><b>Pathogens and partners in the same kingdom.</b> Disease list the curriculum demands: tuberculosis (airborne), cholera (water), typhoid (Salmonella Typhi, the Ethiopian recurrent outbreaks), leprosy (Mycobacterium leprae), anthrax (zoonotic livestock), bacterial dysentery (Shigella), tetanus and botulism (toxin-driven), gonorrhoea and syphilis (STIs — Unit 2's transmission web). Partners: gut microbiota (vitamin K, training immunity — topic t6), nitrogen fixers (Rhizobium in legume nodules: the shiro bean's fertiliser bill paid in ammonia), silage and yoghurt fermenters, decomposers closing every cycle in Unit 3.</p>",
  keyTerms: [
    { term: "Peptidoglycan", def: "bacterial wall polymer; Gram-stain basis" },
    { term: "Nucleoid", def: "unbound circular chromosome region" },
    { term: "Plasmid", def: "small circular accessory DNA" },
    { term: "Binary fission", def: "one cell splits into two clones" },
    { term: "Conjugation", def: "plasmid transfer via pilus" },
    { term: "Endospore", def: "dormant, extreme-resistant body" },
    { term: "Lipopolysaccharide", def: "Gram− outer membrane endotoxin" },
    { term: "70S ribosome", def: "prokaryotic ribosome; antibiotic target" }
  ],
  formulas: [
    { name: "Binary growth", formula: "N = N₀ × 2ⁿ (n generations)", meaning: "exponential in comfort", vars: [{ name: "E. coli: 20 min/gen", meaning: "1 cell → ~10⁹ in 10 h" }], when: "infection and food spoilage timing" },
    { name: "Gram logic", formula: "thick wall = violet / thin + outer = pink", meaning: "structure → stain → drug choice", vars: [], when: "diagnostics" },
    { name: "Generation math", formula: "1 → 2ⁿ in n doublings", meaning: "24 h at 20 min ≈ 72 doublings = 10²¹", vars: [{ name: "reality capped by", meaning: "nutrients + waste" }], when: "why food left out spoils fast" }
  ],
  workedExamples: [
    { problem: "A wound contaminated with Clostridium tetani soil is stitched tight. Why does that cause tetanus?", calculation: "Obligate anaerobe: deep low-oxygen tissue is its growth condition; toxin (tetanospasmin) blocks inhibitory neurotransmitters.", answer: "The treatment created the habitat; debridement (opening, oxygenating) is part of the cure." },
    { problem: "Gram+ Staphylococcus vs Gram− E. coli: which stain survives alcohol decolorization?", calculation: "Thick peptidoglycan traps the crystal violet-iodine complex; the thin Gram− wall is washed out and takes the safranin counterstain.", answer: "Purple = Staph, pink = E. coli — same slide, two therapy paths." },
    { problem: "Milk left at 30 °C: 10 cells to 10⁸. How long at 20-min doubling?", calculation: "10⁷ fold = ~23 doublings × 20 min.", answer: "~8 h: the souring is a bacterial calendar." },
    { problem: "Why does penicillin hurt bacteria but not you?", calculation: "Target = peptidoglycan crosslink synthesis; human cells have no walls.", answer: "Selective toxicity: the drug's address doesn't exist in you." }
  ],
  commonMistakes: [
    "Saying bacteria 'have no DNA' (they do — one circular chromosome plus plasmids)",
    "Calling conjugation 'sex' (one-way plasmid copy, not fusion of parents)",
    "Thinking antibiotics kill viruses (targets are bacterial structures)",
    "Assuming all bacteria need oxygen — or fear it (the grid of aerobe/anaerobe)",
    "Boiling as sterilization (endospores laugh at 100 °C; autoclave 121 °C)"
  ],
  applications: [
    "Cholera and typhoid water surveillance in Ethiopian outbreaks",
    "Rhizobium inoculants and legume rotation: fertiliser by biology",
    "Milk quality: Gram stains and culture deciding pasteurization failures",
    "TB DOTS strategy: six months because of the waxy acid-fast wall"
  ],
  summary: "True bacteria = wall + nucleoid + plasmids, counted by shape and Gram, multiplying by fission, mixing genes by pilus/DNA/phage, feeding on nearly anything — pathogens and the planet's processors in one kingdom.",
  visuals: [],
  questions: [
    { type: "mcq", q: "The bacterial cell wall is made of:", options: ["cellulose", "peptidoglycan", "chitin", "protein only"], answer: 1, difficulty: 1, explanation: "NAM-NAG + peptides: the Gram and penicillin target." },
    { type: "mcq", q: "Bacteria reproduce mainly by:", options: ["meiosis", "binary fission", "spores only", "conjugation"], answer: 1, difficulty: 1, explanation: "Clonal split; conjugation only shares plasmids." },
    { type: "mcq", q: "Gram-negative bacteria stain:", options: ["purple", "pink/red", "black", "green"], answer: 1, difficulty: 1, explanation: "Thin wall loses crystal violet; takes safranin." },
    { type: "mcq", q: "Griffith's transformation experiment showed:", options: ["phages infect", "a 'transforming principle' (DNA) carries heredity", "bacteria mutate on purpose", "heat kills capsules"], answer: 1, difficulty: 3, explanation: "Dead smooth cells re-coated live rough ones." },
    { type: "mcq", q: "Clostridium tetani grows in deep wounds because it is:", options: ["aerobic", "an obligate anaerobe", "photosynthetic", "a virus"], answer: 1, difficulty: 2, explanation: "Oxygen-free tissue is its niche." },
    { type: "mcq", q: "Antibiotic resistance plasmids spread between bacteria chiefly via:", options: ["transformation of any DNA", "conjugation", "binary fission", "capsules"], answer: 1, difficulty: 2, explanation: "The pilus bridge moves R-plasmids fast." },
    { type: "mcq", q: "Sterilization uses 121 °C autoclave rather than boiling because:", options: ["boiling is slow", "endospores survive 100 °C", "steam is cheaper", "media burn"], answer: 1, difficulty: 2, explanation: "Sporicidal heat needs pressure steam." },
    { type: "mcq", q: "Cyanobacteria's planet-scale contribution was:", options: ["nitrogen fixation only", "oxygenic photosynthesis that built the atmosphere", "decomposing lignin", "making antibiotics"], answer: 1, difficulty: 3, explanation: "The Great Oxidation came from them." }
  ]
};

Lessons["g12-biology-ub2-t2"] = {
  overview: "Archaea are the third domain — prokaryote-shaped but genetically and biochemially a separate lineage, discovered only in 1977 by rRNA. Many thrive where life shouldn't (hot springs, the Dead Sea's salt crust, cow guts, deep sediments), their membranes and enzymes built for it — and their methanogens are the methane half of Ethiopia's biogas stoves and a climate accounting line.",
  objectives: [
    "Place archaea as a domain distinct from bacteria",
    "Contrast archaeal vs bacterial membranes and walls",
    "Name extremophile guilds (thermo-, halo-, methanogens)",
    "Explain methanogenesis and its carbon-cycle role",
    "Cite applications: biogas digesters, extremozymes"
  ],
  simple: "<b>Looks like bacteria, built differently.</b> Same size and shape game; different parts: ether-linked isoprenoid lipids (not ester-linked fatty acids), some monolayer membranes (one molecule spanning the sheet: heat-proof), NO peptidoglycan (pseudomurin or protein walls; never targeted by lysozyme/penicillin). No pathogens known — archaea are the domain that never learned to invade us. Habitat stars: thermophiles in hot springs (the Danakil hydrothermals; source of Taq-like polymerases), halophiles in salt (their bacteriorhodopsin pumps light-driven proton gradients), methanogens in every oxygen-free carbon dump — cow rumen, rice paddy, landfill, your biogas digester — exhaling CH₄ as their waste.",
  detailed: "<p><b>How the third domain was found.</b> Carl Woese (1977) compared 16S/18S rRNA sequences and split 'bacteria' into two lineages as different from each other as either is from us: Bacteria and Archaea (archaebacteria then; 'ancient ones' misnamed — they're not older, just deeply diverged). Evidence stacking: archaeal transcription and translation machinery (RNA polymerases with many subunits, histones, ribosome inhibitors like anisomycin that hit archaea/eukaryotes but not bacteria) are EUKARYOTE-like; their metabolism is often bacterial-like; their membrane chemistry belongs to neither. Domains, not a bacterial subtype.</p><p><b>Membrane engineering.</b> Bacterial/eukaryote membranes: fatty acids ester-linked to glycerol, bilayer. Archaea: isoprenoid chains ETHER-linked to (mirror-image) glycerol; in hyperthermophiles the chains from both leaflets fuse into a monolayer — a chainmail sheet that doesn't peel apart at 100 °C. Halophiles keep the bilayer but pack acidic proteins (halorhodins) needing multi-molar salt to fold — drop them into fresh water and they literally fall apart. Wall chemistry: no NAM ever; pseudomurin (NAT + NAG) in some, pure protein S-layers in others. The lesson: same problem (compartmentalise), three independent molecular solutions — evolution's engineering review.</p><p><b>Methanogens: the only major CH₄-makers.</b> Strictly anaerobic archaea finishing fermentation: H₂ + CO₂ → CH₄ (or acetate → CH₄ + CO₂), the obligatory last step of decomposition in oxygen-free places — nothing else can do the final step, so when methanogens stall, organic matter piles up (that's why sealed manure liquefies and open dung just dries). Rumen: cows host methanogens that eat the H₂ from fermentation and burp the CH₄ (livestock's ~400 ppm atmospheric share — why the climate ledger counts belches). Wetlands and rice paddies: same chemistry in flooded soil. Landfills: capture or vent. Biogas digesters (Ethiopia's domestic and institutional plants, e.g., the sugar-factory and dairy digesters): a sealed tank = managed methanogen farm; effluent is the 'slurry fertilizer' bonus.</p><p><b>Extemozymes and applications.</b> Enzymes from extremes work where normal proteins denature: Taq-like polymerases (thermophiles) drove PCR (t4's toolbox owes archaeal relatives their heat-stability logic too); haloarchaeal pumps underpin optogenetics (light-controlled ion channels); thermostable amylases and pullulanases for starch and food processing; cold-adapted proteases in detergents. Biogas economics in Ethiopia: 1 m³ digester gas ≈ replacing a day's firewood collection for a household — methane as managed archaeal agriculture.</p><p><b>Where archaea live quietly.</b> Marine and soil plankton: ammonia-oxidizing archaea (Nitrosopumilus) may out-number bacterial nitrifiers — the nitrogen cycle's hidden majority (Unit 3's N loop runs substantially on them). Human skin and gut host methanogens (Methanobrevibacter smithii — the gas behind some bloating). No archaeal disease ever confirmed: an entire domain cohabiting without invading.</p>",
  keyTerms: [
    { term: "Domain", def: "highest taxonomic rank: Bacteria, Archaea, Eukarya" },
    { term: "Ether-linked lipids", def: "archaeal membrane chemistry" },
    { term: "Monolayer membrane", def: "fused-spanning lipids for hyperthermy" },
    { term: "Methanogen", def: "CH₄-producing strict anaerobe" },
    { term: "Halophile", def: "salt-lover (multi-molar NaCl)" },
    { term: "Thermophile", def: "heat-lover (>45 °C optimum)" },
    { term: "Extemozyme", def: "enzyme from extremophile" },
    { term: "Bacteriorhodopsin", def: "light-driven proton pump in haloarchaea" }
  ],
  formulas: [
    { name: "Methanogenesis", formula: "4H₂ + CO₂ → CH₄ + 2H₂O", meaning: "the anaerobic final step", vars: [{ name: "strict anaerobe", meaning: "O₂ kills them" }], when: "digesters, rumen, wetlands" },
    { name: "Biogas yield", formula: "~0.3 m³ CH₄/kg dry manure (managed)", meaning: "cow dung → cookable gas", vars: [{ name: "C:N ~25:1", meaning: "recipe range" }], when: "household digester sizing" }
  ],
  workedExamples: [
    { problem: "A sealed biogas digester's flame dies when the farmer stirs in fresh antimicrobial-laced slurry. Why?", calculation: "Antibiotics/air both target the community; methanogens are the most sensitive step.", answer: "Kill the archaea → CH₄ production stalls first; restart needs recolonization." },
    { problem: "Why do hyperthermophiles monolayers beat our bilayers at 100 °C?", calculation: "Bilayers rely on weak hydrophobic stacking; monolayer chains are covalently fused across.", answer: "No leaflet to peel: the membrane survives where a bacterium's would dissolve." },
    { problem: "Cows emit ~500 L CH₄/day; methane is ~28× CO₂ (100 yr) in warming. One cow's CO₂-equivalent?", calculation: "500 L ≈ 0.5 m³ ≈ 0.36 kg CH₄ × 28.", answer: "~10 kg CO₂-eq/day: the rumen archaea on the climate sheet." },
    { problem: "Halophile proteins denature in lab buffer. Fix?", calculation: "Their folds need salt-screened charges: assay in 2-4 M NaCl or engineer surface charges.", answer: "Extremozymes need extremophile conditions — or protein surgery." }
  ],
  commonMistakes: [
    "Calling archaea 'primitive bacteria' (distinct domain; eukaryote-like information machinery)",
    "Expecting antibiotics/lysozyme to work on them (no peptidoglycan)",
    "Attributing methane to bacteria (methanogenesis is archaeal)",
    "Assuming all archaea are extremophiles (plankton and soil archaea are abundant and mild)",
    "Confusing biogas CO₂ removal with the methane step"
  ],
  applications: [
    "Household and institutional biogas digesters across the highlands",
    "Dairy/factory effluent plants turning manure into cooking fuel",
    "Polymerases from thermophiles powering molecular diagnostics",
    "Wetland and paddy methane accounting in climate policy"
  ],
  summary: "Archaea = the third domain: ether lipids, no walls we can drug, methanogens closing every anaerobic carbon pipeline — from a cow's stomach to a biogas flame.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Archaea differ from bacteria chiefly in:", options: ["size", "membrane and wall chemistry plus rRNA lineage", "having DNA", "reproducing by fission"], answer: 1, difficulty: 1, explanation: "Ether isoprenoids, no peptidoglycan, own domain." },
    { type: "mcq", q: "Methanogens produce:", options: ["CO₂ only", "CH₄", "ethanol", "H₂S"], answer: 1, difficulty: 1, explanation: "H₂+CO₂ → methane: their signature waste." },
    { type: "mcq", q: "Woese separated Archaea using:", options: ["microscope shape", "rRNA sequence comparison", "staining", "motility"], answer: 1, difficulty: 2, explanation: "Molecular phylogeny founded the domain." },
    { type: "mcq", q: "Which would a penicillin-type wall drug NOT affect?", options: ["Gram+ cocci", "archaea", "Gram− rods", "streptococci"], answer: 1, difficulty: 2, explanation: "No peptidoglycan target in archaea." },
    { type: "mcq", q: "Hyperthermophile membranes resist heat by:", options: ["thick walls", "monolayer fused lipids", "capsules", "spores"], answer: 1, difficulty: 3, explanation: "Covalent cross-leaflet chains can't peel apart." },
    { type: "mcq", q: "Rumen methanogens matter because:", options: ["they digest cellulose", "they consume fermentation H₂ and emit CH₄", "they make protein", "they kill pathogens"], answer: 1, difficulty: 3, explanation: "The H₂-scavengers behind livestock's methane burps." },
    { type: "mcq", q: "A digester stops after antibacterial additives because:", options: ["gas leaks", "methanogens are the most antibiotic-sensitive step", "CO₂ rises", "water boils"], answer: 1, difficulty: 3, explanation: "Stall the archaeal last step and the chain backs up." },
    { type: "mcq", q: "Bacteriorhodopsin in haloarchaea:", options: ["fixes N₂", "pumps protons using light", "makes salt", "moves flagella"], answer: 1, difficulty: 3, explanation: "Light-driven proton gradient: an alternate photosynthesis." }
  ]
};

Lessons["g12-biology-ub2-t3"] = {
  overview: "Fungi are the eukaryotic decomposers with chitin walls and absorptive living: spore-bearing filaments (hyphae) that digest the world outside the body then suck it in. They run bread, injera batter's sour partners, beer and cheese; they also run athlete's foot, the aflatoxin problem on maize, and the wheat rusts that keep Ethiopia's cereals on a fungicide watchlist.",
  objectives: [
    "Describe fungal cell and body organization (hyphae, mycelium, chitin)",
    "Contrast yeast vs mould vs mushroom life-styles",
    "Summarise reproduction: spores, sexual + asexual cycles",
    "Explain nutrition: absorptive heterotrophy, saprotrophs/parasites/mycorrhizae",
    "List benefits and diseases, incl. aflatoxin and Ethiopian crop fungi"
  ],
  simple: "<b>Eat outside, then absorb.</b> A fungus is a network of hyphae — tubes of chitin-walled cells — secreting digestive enzymes and absorbing the soup (the mycelium is a stomach turned inside out). Body plans: yeasts = single cells budding (Saccharomyces: bread, beer, wine); moulds = visible felts (Aspergillus and Rhizopus: bread rot; Penicillium: penicillin AND cheese); mushrooms = fruiting bodies of a vast underground web. Reproduction = spores everywhere: light, wind-borne, and stubborn — mould on your injera, the black powders of smuts, and the rusts that ride Ethiopian highland winds onto wheat.",
  detailed: "<p><b>The hypha advantage.</b> Tip-growing tubes thread soil and food; septate hyphae (crosswalls with pores, ascomycetes and basidiomycetes) vs coenocytic (multinucleate, no septa, zygomycetes like Rhizopus); the wall is chitin (animals' exoskeleton molecule, bacteria's peptidoglycan's functional cousin — so antifungals must target chitin synthesis or the ergosterol membrane, human cells having neither: again selective toxicity, e.g. fluconazole jams ergosterol). Their growth tip pumps a cellulose/chitin synthase cloud and wall-softening enzymes — the reason they penetrate: a mould can push through a tomato skin; a bacterium generally can't (lignin is the hard food: fungi and a few bacteria are nearly the only lignin eaters — the white-rot peroxidases that keep carbon cycling).</p><p><b>Saprotrophs, parasites, mutualists.</b> Saprotrophs: dead-organic decomposers — the nutrient cyclers (Unit 3 owes its arrows to fungi); lignin and cellulose specialists. Parasites: on living tissue — human: athlete's ringworm dermatophytes, candidiasis, pneumocystis in AIDS; crop: Puccinia rusts and smuts, Fusarium head blight, coffee berry disease (Colletotrichum). Mycorrhizae: fungal sheaths on plant roots (arbuscular types penetrate root cell folds; ectomycorrhizae sheath them) — the plant trades sugar for a hyphal internet reaching 100× farther for phosphate and water; the forest's underground economy, and teff's own fertility partly rented.</p><p><b>Spore sex.</b> Asexual: mitospores (conidia blown off Aspergillus chains, sporangiospores from Rhizopus caps, yeast budding) — clone machines. Sexual cycles (the textbook ones): Zygomycota — two hyphae fuse tips → zygosporangium (thick-walled resting spore (zygospore)) → meiosis spores; Ascomycota — sac (ascus) of ascospores: yeasts, Penicillium, morels, truffles (the high-altitude wild-harvested edible fungi traded at premium prices in northern markets), plus the cup fungi and the lichen partners; Basidiomycota — club-shaped basidia on mushroom gills: shelf brackets, field mushrooms, the rusts and smuts (their absurd multi-host spore stages explain rust epidemics). Fungi imperfecti: the asexual-only labels that rRNA later adopted into ascomycetes.</p><p><b>Fungi in the Ethiopian kitchen and warehouse.</b> Injera batter is a consortium (LAB + yeasts, incl. Saccharomyces cerevisiae strains isolated from ergo fermentations): acidify, leaven, flavor. Tej (honey wine): wild yeasts. Kolo, qocho roasting — heat management IS mould management. Post-harvest failure mode: maize/groundnut Aspergillus flavus aflatoxins (topic t2's t7 prevention list — drying below 12-14% breaks fungal growth first, the toxin's carcinogen second). Cheese-style ripening with Penicillium roqueforti (imported industry; local Ayib cheese uses LAB, not mould — the difference shows in holes and veins).</p><p><b>Fungal pharmacy and plague.</b> Penicillium chrysogenum gave penicillin (the Fleming story on every lab wall); other moulds gave cyclosporine (transplant tolerance), statins (lovastatin from Aspergillus), griseofulvin. Plagues: the Irish potato famine Phytophthora (an oomycete fungus-impostor), the Dutch elm, the bat-killing white-nose, wheat stem rust Ug99 (identified in Uganda 1999 and marching east — the reason Ethiopia runs national rust surveillance on its wheat belt). One kingdom, half the pantry and half the pharmacy.</p>",
  keyTerms: [
    { term: "Hypha / mycelium", def: "tube / the feeding network" },
    { term: "Chitin wall", def: "fungal structural polymer" },
    { term: "Septate vs coenocytic", def: "crosswalled vs multinucleate tubes" },
    { term: "Absorptive heterotroph", def: "digest outside, absorb inside" },
    { term: "Conidium", def: "asexual spore (chain)" },
    { term: "Ascus / basidium", def: "sac / club: spore chambers" },
    { term: "Mycorrhiza", def: "root-fungus trade partnership" },
    { term: "Ergosterol", def: "fungal membrane steroid; drug target" }
  ],
  formulas: [
    { name: "Extracellular digestion", formula: "enzymes out → monomers in", meaning: "the absorptive scheme", vars: [{ name: "surface area", meaning: "why filaments, not blobs" }], when: "every saprotrophic step" },
    { name: "Rust spread", formula: "spore load ∝ wind × susceptible area", meaning: "epidemics are meteorology", vars: [{ name: "Ug99", meaning: "the new race" }], when: "highland wheat belts" }
  ],
  workedExamples: [
    { problem: "Bread kept in a plastic bag grows blue-green powdery patches; on dry stone, nothing. Explain.", calculation: "Aspergillus/Penicillium conidia land everywhere; growth needs water activity > ~0.8 — the bag holds it.", answer: "The mould is the same; the moisture history differs: storage is ecology." },
    { problem: "Why does an antifungal avoid your cells?", calculation: "Targets: ergosterol membrane and chitin walls — vertebrates use cholesterol, no chitin.", answer: "The selectivity table again: different walls, different drug." },
    { problem: "A pine without its mycorrhizae grows poorly in sterile soil; same soil + fungal sheath, it thrives. Which services?", calculation: "Hyphal reach exceeds root hairs: phosphate, water, plus pathogen exclusion at the sheath.", answer: "The plant's nutrient radius is rented from the fungus." },
    { problem: "Groundnuts at 16% moisture shipped sealed. Aflatoxin later? Why?", calculation: "Aspergillus flavus grows >14% and makes toxin; sealed = humidity locked in.", answer: "A carcinogen timeline: dry before store — the toxin survives the cook." }
  ],
  commonMistakes: [
    "Calling fungi plants (no photosynthesis, chitin not cellulose, absorptive not ingestive)",
    "Seeing only mushrooms (the fruit body; the mycelium is the organism)",
    "Confusing yeast mould life-styles (Saccharomyces is a fungus that chose unicellular)",
    "Lichen = single organism (it's a fungus farming an alga/cyanobacterium)",
    "Treating all fungi as pathogens (decomposer economy runs on them)"
  ],
  applications: [
    "Injera batter and tej: fungal leavening in the national diet",
    "Rust and smut surveillance protecting Ethiopian wheat",
    "Penicillin, cyclosporine, statins: the mould pharmacy",
    "Mycorrhizal inoculants in reforestation and orchards"
  ],
  summary: "Fungi: chitin-tube networks that digest the world externally — decomposers, partners, pantries and plagues — reproducing by wind-borne spores and trading roots for minerals underground.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Fungal nutrition is best described as:", options: ["photosynthetic", "ingestive", "absorptive after external digestion", "parasitic always"], answer: 2, difficulty: 1, explanation: "Enzymes out, monomers in." },
    { type: "mcq", q: "The fungal wall contains:", options: ["cellulose", "chitin", "peptidoglycan", "silica"], answer: 1, difficulty: 1, explanation: "Chitin — same as arthropod cuticle." },
    { type: "mcq", q: "Bread mould Rhizopus reproduces asexually by:", options: ["budding", "sporangiospores", "seeds", "fission"], answer: 1, difficulty: 2, explanation: "Black caps burst with mitospores." },
    { type: "mcq", q: "Mycorrhizae benefit the plant by:", options: ["fixing N₂", "extending water/phosphate uptake", "making sugar", "repelling light"], answer: 1, difficulty: 2, explanation: "Hyphae out-reach roots; sugar pays them." },
    { type: "mcq", q: "Aflatoxin comes from:", options: ["yeast", "Aspergillus flavus on stored maize", "bacteria", "mushrooms"], answer: 1, difficulty: 2, explanation: "Mould toxin on damp grain/groundnut." },
    { type: "mcq", q: "Mushrooms are:", options: ["the whole fungus", "spore-producing fruit bodies", "fungal eggs", "bacterial colonies"], answer: 1, difficulty: 1, explanation: "The mycelium underground is the body." },
    { type: "mcq", q: "Antifungals like fluconazole target:", options: ["peptidoglycan", "ergosterol synthesis", "70S ribosomes", "DNA gyrase"], answer: 1, difficulty: 3, explanation: "Fungal membrane steroid, not ours." },
    { type: "mcq", q: "Wheat stem rust epidemics spread mainly by:", options: ["soil", "wind-borne urediniospores", "insects", "water"], answer: 1, difficulty: 3, explanation: "Spore rain downwind: why borders don't stop rust." }
  ]
};
