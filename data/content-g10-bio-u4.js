/* ============================================================
   Content: Grade 10 Biology — Unit 4: Cell Reproduction
   3 topics. Rich format + 3 visuals per lesson.
   ============================================================ */
window.Lessons = window.Lessons || {};

/* --- b4-1: The Cell Cycle --- */
Lessons["g10-biology-ub4-t1"] = {
  overview: "A cell's life is a timed loop: grow, copy its DNA, divide — the cell cycle. Interphase is the long busy preparation (90% of the cycle); mitosis (M phase) is the precise division. Checkpoints guard the loop, and when they fail, cells divide without permission — that failure is cancer.",
  objectives: [
    "Describe the cell cycle phases: G1, S, G2, M",
    "State what happens in each interphase sub-phase",
    "Explain the three checkpoints (G1, G2, M) and their purpose",
    "Relate uncontrolled division to cancer",
    "Estimate phase durations from microscope data"
  ],
  simple: "Think of a cell like a factory that must duplicate itself completely: G1 = grow and do its normal job; S = SYNTHESISE a full copy of its DNA (each chromosome becomes two sister chromatids); G2 = final growth + quality check; M = mitosis (nucleus divides) + cytokinesis (cytoplasm splits) → two identical daughter cells. The loop is policed by checkpoints: G1 ('should I divide? — size, nutrients, DNA intact?'), G2 ('was DNA copied perfectly?'), M ('are all chromosomes attached?'). Cancer = checkpoint genes mutated → division ignores the brakes.",
  detailed: `<p><b>Interphase (≈90% of cycle):</b> G1 — cell grows, makes organelles and proteins, performs its specialised function; the RESTRICTION POINT (G1 checkpoint) decides 'divide or exit to G0' (nerve/muscle cells live long in G0). S — DNA replication (semi-conservative, covered in G11 genetics): each chromosome duplicates into two sister chromatids joined at the centromere; centrosomes duplicate too. G2 — more growth, protein synthesis for spindle, DNA-error checking (G2 checkpoint repairs replication mistakes).</p>
<p><b>M phase:</b> mitosis (nuclear division — next lesson) + cytokinesis (cytoplasm division: animal cells pinch via actin ring; plant cells build a CELL PLATE from vesicles → new wall). One cycle → two genetically IDENTICAL diploid daughters.</p>
<p><b>Checkpoints & control:</b> G1 checkpoint (unfed/unwanted cells blocked by p53 'guardian of the genome' — damaged DNA → repair or apoptosis); G2 checkpoint (incomplete/damaged replication → halt); M/spindle checkpoint (every kinetochore attached to spindle before anaphase — prevents wrong chromosome numbers). Cyclins + CDKs (cyclin-dependent kinases) are the molecular engines driving each transition; cyclin levels rise/fall like a clock.</p>
<p><b>When control fails — cancer:</b> mutations in proto-oncogenes (→ oncogenes: stuck accelerator, e.g. RAS) and tumour-suppressor genes (→ broken brakes, e.g. p53 in >50% of cancers) → uncontrolled division → tumour; metastasis = cells break away and spread. Risk factors: UV, tobacco smoke, asbestos, some viruses (HPV), radiation — all mutagens. Modern treatments target the cycle: chemotherapy hits dividing cells; checkpoint/pathway drugs (link to G11 gene therapy).</p>
<p><b>Why cells divide at all:</b> surface-area:volume limits growth (big cells starve — diffusion too slow); replacement (skin, gut lining, blood cells renew constantly); growth (embryo → adult); repair (wound healing); asexual reproduction (yeast budding, plant cuttings — mitosis makes clones).</p>`,
  keyTerms: [
    { term: "Cell cycle", def: "G1 → S → G2 → M — the growth-and-division loop." },
    { term: "Interphase", def: "G1+S+G2 — the long preparation (~90%)." },
    { term: "S phase", def: "DNA synthesis — chromosomes duplicate to sister chromatids." },
    { term: "G0", def: "Exit lane — cells that don't divide (neurons, muscle)." },
    { term: "Checkpoint", def: "Quality gate: G1, G2, M — proceed only if all is well." },
    { term: "p53", def: "Tumour-suppressor 'guardian of the genome' — halts damaged cells." },
    { term: "Cyclin/CDK", def: "Protein clock pair driving cycle transitions." },
    { term: "Apoptosis", def: "Programmed cell death — the final safety option." },
    { term: "Cancer", def: "Uncontrolled division from checkpoint/gene failure." },
    { term: "Metastasis", def: "Cancer spread via blood/lymph to new sites." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "In an onion-root-tip count, 80 of 1000 cells show visible chromosomes (dividing). Estimate M-phase duration if the whole cycle is 24 h.",
      given: "Fraction of cells in mitosis.",
      formula: "time in phase ≈ (cells in phase / total) × cycle length.",
      substitution: "80/1000 = 0.08 → 0.08 × 24 h = 1.92 h.",
      calculation: "≈ 1 h 55 min — mitosis is short; interphase dominates.",
      answer: "~2 hours of the 24 — the snapshot method works because more cells in a phase = longer phase."
    },
    {
      problem: "A nerve cell and a skin cell: which spends time in the cycle and which sits in G0? Justify with function.",
      given: "Two cell types.",
      formula: "Division need vs specialisation.",
      substitution: "Neuron: mature, post-mitotic — exits to G0 permanently (dividing would break its connections). Skin basal cells: cycle continuously — surface cells shed constantly and must be replaced.",
      calculation: "Gut lining ~every 2-3 days; red-cell precursors divide then lose nucleus.",
      answer: "Skin cycles, nerve rests in G0 — division matches tissue turnover need."
    },
    {
      problem: "UV radiation damages DNA in a skin cell's G1 phase. Walk through the p53 response and its two possible outcomes.",
      given: "Damage at the checkpoint.",
      formula: "G1 checkpoint logic.",
      substitution: "Damaged DNA → p53 activated → cycle HALTS at G1 → repair enzymes attempt fixes. Outcome 1: repaired → proceed to S. Outcome 2: damage too great → APOPTOSIS (self-destruct, removed cleanly).",
      calculation: "If p53 itself is mutated: damaged DNA replicates → mutation fixed → possible cancer.",
      answer: "p53 = the brake + judge: repair or die — never copy broken instructions."
    },
    {
      problem: "A chemotherapy drug blocks cyclin-CDK activity at the G2 checkpoint. Predict which tissues suffer side effects and why.",
      given: "Drug mechanism.",
      formula: "Rapidly dividing cells most affected.",
      substitution: "Blocking G2→M stops division in ALL cycling cells — worst hit: hair follicles (hair loss), gut lining (nausea), bone marrow (immunity drop) — because they divide fastest; neurons/muscle (G0) largely spared.",
      calculation: "This is also why chemo WORKS: tumours are hyper-cycling.",
      answer: "Side effects map onto the body's fast-cycling tissues — the same property the drug exploits against tumours."
    }
  ],
  commonMistakes: [
    "Saying interphase is 'resting' — it's the BUSIEST phase (growth + DNA copying).",
    "Placing DNA replication in G2 — it's S phase (G2 is checking/prep).",
    "Thinking chromosomes duplicate 'during mitosis' — by prophase they're ALREADY doubled chromatids.",
    "Confusing checkpoints (quality gates) with phases (work stages).",
    "Believing cancer is one runaway cell type — it's many diseases of the cycle controls (different genes).",
    "Saying all cells divide — neurons/muscle exit to G0; red blood cells lose nuclei entirely.",
    "Calling apoptosis 'cell accident' — it's PROGRAMMED, clean self-destruction (necrosis is the messy accident)."
  ],
  applications: [
    "Cancer biology & treatment: chemo/targeted therapy exploit cycle control (Ethiopian oncology centers: Black Lion Hospital).",
    "Wound healing: skin and liver regenerate via the cycle; liver cells re-enter from G0 after partial hepatectomy.",
    "Growth: a seedling's millions of cells = cycles of division + expansion.",
    "Agriculture: meristem activity (Unit 2) IS the cell cycle in plants — why intercalary meristems regrow grazed teff.",
    "Forensics/medicine: cell-turnover markers measure tissue health; radiation sickness = destroyed gut/marrow cycling cells.",
    "UV safety: sunscreen and shade protect checkpoint genes — cancer prevention is cell-biology literacy."
  ],
  summary: "Cell cycle = G1 (grow) → S (DNA copies → sister chromatids) → G2 (prep + check) → M (mitosis + cytokinesis). Checkpoints (G1/p53, G2, M-spindle) enforce quality; cyclin-CDK engines drive transitions; G0 is the exit. Cancer = accelerator genes stuck + brake genes broken; treatments target dividing cells.",
  visuals: [
    { type: "cycleDiagram", config: { title: "The Cell Cycle", nodes: ["G1 — grow", "S — DNA copies", "G2 — check + prep", "M — divide", "2 daughters"] } },
    { type: "flowChart", config: { steps: ["DNA damage detected (G1)", "p53 activates — cycle halts", "Repair attempted", "Fixed? → proceed to S", "Too broken? → apoptosis", "p53 mutated? → damaged copy made → cancer risk"], title: "The G1 Checkpoint Decision" } },
    { type: "qa", config: { title: "Cycle Questions — tap to reveal", pairs: [{ q: "Why is interphase ~90% of the cycle?", a: "Copying DNA and rebuilding a full cell takes far longer than splitting it — preparation dominates." }, { q: "Why don't neurons divide?", a: "They exit to G0 — their connections would be destroyed by division; lost neurons aren't replaced." }, { q: "Why does chemo cause hair loss?", a: "It attacks fast-cycling cells — hair follicles cycle constantly and get caught in the blast." }] } }
  ],
  questions: [
    { type: "mcq", q: "DNA replication occurs during:", options: ["G1", "S", "G2", "M"], answer: 1, difficulty: 1, explanation: "S = Synthesis — the only phase where DNA is copied." },
    { type: "mcq", q: "The 'resting' label for interphase is wrong because interphase is when the cell:", options: ["Divides", "Grows and copies DNA", "Dies", "Stops all activity"], answer: 1, difficulty: 1, explanation: "It's the busiest phase — growth + replication + checks." },
    { type: "short", q: "The tumour-suppressor protein nicknamed 'guardian of the genome' is ____.", answer: "p53", difficulty: 2, explanation: "p53 halts damaged cells at G1 for repair or apoptosis." },
    { type: "concept", q: "Why do cells STOP growing and divide instead of getting bigger and bigger?", answer: "surface volume diffusion|too big starves|SA:V limit", difficulty: 2, explanation: "Volume grows faster than surface — big cells can't exchange enough material; division restores a workable SA:V." },
    { type: "tf", q: "Neurons normally remain in G0 and do not divide.", answer: true, difficulty: 2, explanation: "Most mature neurons are post-mitotic — brain injury damage is largely permanent." },
    { type: "mcq", q: "The M (spindle) checkpoint ensures:", options: ["DNA is replicated", "All chromosomes attach to spindle before anaphase", "The cell has grown enough", "Nutrients suffice"], answer: 1, difficulty: 3, explanation: "It blocks anaphase until every kinetochore is attached — prevents wrong chromosome numbers." },
    { type: "calc", q: "Cycle = 20 h; 5% of cells are in M phase. Approximate M duration in hours?", answer: "1", difficulty: 2, explanation: "0.05 × 20 = 1 h.", tolerance: 0.1 },
    { type: "short", q: "Programmed, clean cell death is called ____.", answer: "apoptosis", difficulty: 2, explanation: "The safety option when damage is beyond repair." },
    { type: "ordering", q: "Pick the correct phase order:", options: ["S → G1 → G2 → M", "G1 → S → G2 → M", "G2 → G1 → S → M", "M → G1 → S → G2"], answer: [1], difficulty: 1, explanation: "G1 grow → S copy → G2 check → M divide." },
    { type: "concept", q: "Explain why a p53 mutation so often leads to cancer.", answer: "no brake|damaged DNA replicated|checkpoint fails", difficulty: 3, explanation: "Without p53, damaged cells skip the G1 halt, replicate mutations, and accumulate the driver changes of cancer." }
  ]
};

/* --- b4-2: Mitosis --- */
Lessons["g10-biology-ub4-t2"] = {
  overview: "Mitosis is the cell's photocopier with perfect binding: one mother cell → two identical daughters, same chromosome number, same genetic instructions. It powers growth, repair and asexual reproduction — and its stages (prophase, metaphase, anaphase, telophase) are exam favourites under the microscope.",
  objectives: [
    "Name and describe the four mitotic stages in order",
    "Explain chromosome/chromatid behaviour at each stage",
    "State mitosis's outcome: 2n → 2 identical 2n cells",
    "Compare animal vs plant mitosis/cytokinesis",
    "Identify stages in microscope slides and link mitosis to growth/repair/cloning"
  ],
  simple: "Before mitosis, every chromosome is a duplicated pair of sister chromatids holding hands at the centromere. PROPHASE: chromosomes condense (visible), nuclear envelope dissolves, spindle fibres form. METAPHASE: chromosomes line up single-file at the cell's equator, each grabbed by spindle fibres from both poles. ANAPHASE: hands release — sister chromatids are pulled apart to opposite poles (now each is its own chromosome). TELOPHASE: nuclear envelopes rebuild around the two sets, chromosomes uncoil. Then CYTOKINESIS splits the cytoplasm — pinch in animals, cell-plate wall in plants — giving two IDENTICAL daughter cells with the same chromosome number as the mother.",
  detailed: `<p><b>Why condense?</b> Interphase DNA is loose chromatin (reading access); division requires packing it into tight, portable chromosomes (10,000× compaction) so long strands don't tangle or tear — like coiling a rope before hauling it.</p>
<p><b>Stage mechanics:</b>
<br>• Prophase: condensation; centrosomes (animal) move apart building spindle microtubules; nucleolus fades; prometaphase — envelope fragments, kinetochores assemble on centromeres.
<br>• Metaphase: spindle pulls chromosomes into the METAPHASE PLANE (equator); maximum condensation — best stage for karyotyping/counting.
<br>• Anaphase: cohesin glue is cut (separase enzyme, after the M checkpoint passes); chromatids separate and move poleward — kinetochore microtubules shorten; now each chromatid counts as a full chromosome (chromosome number DOUBLES transiently: 46 → 92 moving apart, then back to 46 per cell).
<br>• Telophase: envelopes re-form, chromosomes decondense, nucleoli return — two nuclei, one cell still.</p>
<p><b>Cytokinesis differences:</b> Animal: actin-myosin CONTRACTILE RING pinches a cleavage furrow. Plant: rigid wall forbids pinching → Golgi vesicles ferry wall material to the centre, fusing into a CELL PLATE that grows outward into two walls (with plasmodesmata channels left between).</p>
<p><b>Outcome & significance:</b> 2n → 2 × 2n (diploid human: 46 → 46 → 46). Functions: growth (zygote → trillions), cell replacement (blood, skin, gut), repair (wound healing), asexual reproduction (yeast buds, plant cuttings, hydra budding — mitosis IS cloning), regeneration (lizard tail, planar flatworms).</p>
<p><b>Errors & medicine:</b> nondisjunction in mitosis → mosaic cell lines (some cancers); colchicine (chemical) freezes metaphase spindles → polyploid plants (seedless watermelon) and karyotype slides; cancer = mitosis without permission (checkpoint failure — previous lesson).</p>`,
  keyTerms: [
    { term: "Sister chromatids", def: "Identical DNA copies joined at the centromere." },
    { term: "Centromere / kinetochore", def: "Chromatid handshake point / protein anchor for spindle." },
    { term: "Spindle fibres", def: "Microtubule ropes that move chromosomes." },
    { term: "Metaphase plate", def: "Equatorial line-up — counting/karyotype stage." },
    { term: "Prophase-Metaphase-Anaphase-Telophase", def: "PMAT — condense, align, separate, rebuild." },
    { term: "Cytokinesis", def: "Cytoplasm division: furrow (animal) vs cell plate (plant)." },
    { term: "2n → 2n", def: "Mitosis preserves chromosome number." },
    { term: "Cell plate", def: "Vesicle-built new wall between plant daughters." },
    { term: "Karyotype", def: "Photographed chromosome set — made from arrested metaphase." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "A human cell in G2 has how many chromosomes and how many chromatids? After anaphase, before cytokinesis?",
      given: "Counting practice.",
      formula: "Replication doubles chromatids, not chromosome count.",
      substitution: "G2: 46 chromosomes, each doubled = 92 chromatids. Anaphase (post-split): each chromatid is now its own chromosome → 92 chromosomes in the one cell (46 migrating to each pole). After cytokinesis: 46 per daughter.",
      calculation: "Rule: count chromosomes by CENTROMERES.",
      answer: "G2: 46 chr/92 chromatids; anaphase cell: 92 chr; daughters: 46 each."
    },
    {
      problem: "You view an onion root-tip slide: cells show chromosomes at the equator. Which stage, and why is this stage chosen for chromosome studies?",
      given: "Microscope practical.",
      formula: "Metaphase = maximum condensation + alignment.",
      substitution: "Stage: metaphase (single-file at equator). Chosen because chromosomes are thickest, most distinct and lined up — easiest to count/photograph (karyotypes use colchicine-arrested metaphase).",
      calculation: "Root tip = meristem = many cycling cells (Unit 2 link).",
      answer: "Metaphase — the 'posed family photo' stage of the cycle."
    },
    {
      problem: "Compare cytokinesis in a white-blood cell vs a teff root cell.",
      given: "Animal vs plant division.",
      formula: "Furrow vs cell plate.",
      substitution: "WBC (animal): actin ring pinches a cleavage furrow inward until two cells separate — fast, flexible membrane. Teff root (plant): vesicles from Golgi align at centre, fuse into cell plate, wall material (pectin/cellulose) builds outward to the existing wall — new wall + middle lamella between daughters.",
      calculation: "Plant plate also leaves plasmodesmata connections.",
      answer: "Pinch from outside (animal) vs build from inside (plant) — the wall dictates the method."
    },
    {
      problem: "A cuttings nursery clones a superior rose by stem cuttings. Explain the cell-biology behind 'the new plant is genetically identical'.",
      given: "Asexual propagation.",
      formula: "Mitosis = faithful copying.",
      substitution: "Cutting's cells re-enter the cycle at the wound; mitosis duplicates each chromosome (S) and splits sisters equally (PMAT) → every new cell inherits the SAME 2n genome as the parent cell → whole plant = clone.",
      calculation: "Contrast seeds: meiosis + fertilisation reshuffle genes (next lesson).",
      answer: "Mitotic cloning — cuttings keep the parent's exact genotype (why cultivars stay true)."
    }
  ],
  commonMistakes: [
    "Saying chromosomes duplicate 'in prophase' — duplication happened in S phase; prophase only CONDENSES them.",
    "Confusing metaphase (line up) with anaphase (pull apart) — PMAT order is the classic slip.",
    "Counting chromatids as chromosomes — one doubled chromosome = 2 chromatids, 1 chromosome (count centromeres).",
    "Thinking the nuclear envelope stays intact — it BREAKS DOWN in prophase and REFORMS in telophase.",
    "Saying plant cells pinch — they build a cell plate; animal cells pinch (no wall).",
    "Believing mitosis halves chromosomes — that's meiosis; mitosis PRESERVES number.",
    "Calling cytokinesis part of mitosis — mitosis = nuclear division; cytokinesis = cytoplasm division (separate step, same M phase).",
    "Saying daughter cells are 'half the size forever' — G1 growth restores full size."
  ],
  applications: [
    "Growth from a zygote: one cell → ~37 trillion by mitotic repetition.",
    "Wound healing & skin turnover: basal cells mitose to replace shed layers.",
    "Agricultural cloning: teff seed is fine, but rose/coffee/banana cuttings and tissue culture (EBI) rely on mitotic fidelity.",
    "Karyotype diagnostics: metaphase arrests detect chromosome disorders (before G11 genetics).",
    "Cancer pathology: tumour grading counts mitotic figures — many dividing cells = aggressive.",
    "Regeneration research: planaria and lizard tails regrow via mitosis; medical goal = unlocking it in humans."
  ],
  summary: "Mitosis (PMAT): prophase condense + envelope gone + spindle; metaphase equator line-up (counting stage); anaphase sisters split (chromatid → chromosome); telophase nuclei rebuild. Cytokinesis: furrow (animal) / cell plate (plant). Result: 2n → two genetically identical 2n daughters — the engine of growth, repair and cloning.",
  visuals: [
    { type: "steps", config: { steps: [{ detail: "Chromosomes condense; envelope dissolves; spindle forms", label: "Prophase" }, { detail: "Chromosomes line up at the equator on spindle fibres", label: "Metaphase" }, { detail: "Sister chromatids split — pulled to opposite poles", label: "Anaphase" }, { detail: "Two nuclear envelopes rebuild; chromosomes uncoil", label: "Telophase" }, { detail: "Furrow (animal) or cell plate (plant) → two cells", label: "Cytokinesis" }], title: "PMAT — Step by Step" } },
    { type: "comparison", config: { title: "Animal vs Plant Division", left: { name: "Animal cell", items: ["Centrosomes/centrioles", "Actin ring pinches furrow", "No wall — flexible", "Round cells"] }, right: { name: "Plant cell", items: ["No centrioles (spindle from poles)", "Golgi vesicles → cell plate", "New wall built outward", "Fixed rectangular cells"] } } },
    { type: "qa", config: { title: "Counting Chromosomes — tap to reveal", pairs: [{ q: "46 chromosomes before S; how many after S?", a: "Still 46 — but each now has 2 chromatids (92 chromatids). Count centromeres, not arms." }, { q: "Why does anaphase briefly have 92 chromosomes?", a: "The moment sisters separate, each becomes its own chromosome — 92 total until the cell splits into 46 + 46." }, { q: "Which stage for counting in a lab?", a: "Metaphase — maximum condensation, neat equatorial line-up (karyotypes)." }] } }
  ],
  questions: [
    { type: "mcq", q: "The correct mitosis order is:", options: ["Metaphase, prophase, anaphase, telophase", "Prophase, metaphase, anaphase, telophase", "Anaphase, prophase, metaphase, telophase", "Prophase, anaphase, metaphase, telophase"], answer: 1, difficulty: 1, explanation: "PMAT — the mnemonic that never fails." },
    { type: "mcq", q: "Sister chromatids separate during:", options: ["Prophase", "Metaphase", "Anaphase", "Telophase"], answer: 2, difficulty: 1, explanation: "Anaphase: cohesin cut, chromatids pulled poleward." },
    { type: "short", q: "The structure where two sister chromatids join is the ____.", answer: "centromere", difficulty: 1, explanation: "The centromere — the 'handshake' point." },
    { type: "concept", q: "Why is metaphase the best stage to photograph chromosomes for a karyotype?", answer: "most condensed|lined up equator|easy count", difficulty: 2, explanation: "Maximum condensation + single-file alignment = clear, countable chromosomes." },
    { type: "mcq", q: "Plant cells complete cytokinesis by building a:", options: ["Cleavage furrow", "Cell plate", "Centriole ring", "Spindle wall"], answer: 1, difficulty: 2, explanation: "Vesicles fuse into a cell plate that becomes the new wall." },
    { type: "calc", q: "A dog cell (2n = 78) completes mitosis. Chromosomes per daughter cell?", answer: "78", difficulty: 2, explanation: "Mitosis preserves number: 78 → 78 + 78.", tolerance: 0.1 },
    { type: "tf", q: "The nuclear envelope dissolves during prophase/prometaphase.", answer: true, difficulty: 2, explanation: "It must break down for spindle fibres to reach chromosomes." },
    { type: "concept", q: "How does mitosis explain why a rose cutting flowers exactly like the parent?", answer: "identical copies|same genes|clone", difficulty: 2, explanation: "Mitotic daughters inherit the parent's identical genome — the cutting is a genetic clone." },
    { type: "ordering", q: "Pick the correct chromatid/chromosome count story for a human cell:", options: ["G2: 46 chr, 92 chromatids → anaphase: 92 chr → daughters: 46 each", "G2: 92 chr → anaphase: 46 chr → daughters: 92", "G2: 46 chr, 46 chromatids → daughters: 23", "G2: 23 chr → daughters: 46"], answer: [0], difficulty: 3, explanation: "Replication doubles chromatids; separation doubles countable chromosomes briefly; cytokinesis restores 46." }
  ]
};

/* --- b4-3: Meiosis --- */
Lessons["g10-biology-ub4-t3"] = {
  overview: "Meiosis is the special division that makes GAMETES: one diploid cell → four haploid cells, each genetically UNIQUE thanks to crossing over and independent assortment. It halves chromosome number so fertilisation restores it — and its shuffling is why siblings differ and evolution has variation to select.",
  objectives: [
    "Describe meiosis I vs II stages and their key events",
    "Explain homologous pairing, crossing over and independent assortment",
    "State the outcome: 1 (2n) → 4 (n) genetically different cells",
    "Compare mitosis vs meiosis (number, identity, purpose)",
    "Link meiosis to variation and to chromosome-number disorders"
  ],
  simple: "Meiosis = two divisions, one replication. Before it, DNA copies (like mitosis). MEIOSIS I: homologous chromosomes (mum-set and dad-set pairs) FIND each other, swap pieces (crossing over — prophase I), then line up as pairs at the equator and get separated to opposite poles — the chromosome number HALVES (46 → 23). MEIOSIS II: no new copying — sister chromatids split like mitosis → FOUR haploid cells, each a unique mix. Fertilisation (23 + 23 → 46) restores the diploid number, and the shuffling means every gamete — and every child — is genetically new.",
  detailed: `<p><b>Meiosis I (reductional):</b> Prophase I (long, five substages): leptotene condensation; ZYGOTENE — homologues PAIR gene-for-gene (bivalents/tetrads); PACHYTENE — CROSSING OVER: non-sister chromatids exchange segments at chiasmata — alleles recombine; DIPLIETENE — chiasmata hold pairs; diakinesis — envelope gone. Metaphase I: pairs line up at the equator INDEPENDENTLY (maternal/paternal orientation random — 2²³ ≈ 8.4 million combinations in humans). Anaphase I: homologues separate (sisters STAY together — the mirror-image of mitosis). Telophase I: two haploid cells (n), each chromosome still doubled.</p>
<p><b>Meiosis II (equational, mitosis-like):</b> no DNA synthesis. Prophase II spindle reforms; Metaphase II chromosomes line up singly; Anaphase II centromeres split, sisters separate; Telophase II → four haploid nuclei → cytokinesis → 4 cells (sperm: 4 functional; eggs: 1 + polar bodies).</p>
<p><b>Why it matters — variation engines:</b> (1) Crossing over: new allele combinations WITHIN chromosomes. (2) Independent assortment: new combinations BETWEEN chromosomes. (3) Random fertilisation: any sperm × any egg → 70+ trillion diploid combinations per couple. Variation is the raw material natural selection acts on (Unit 1 evolution link) — clones vs sexually-produced offspring is survival-of-the-fittest's great trade-off (sex costs energy and 'half your genes' but buys adaptability).</p>
<p><b>Errors:</b> nondisjunction (homologues or sisters fail to separate) → aneuploidy: trisomy 21 (Down, 47 chr), monosomy X (Turner), XXY (Klinefelter); advanced maternal age raises risk (oocytes pause for decades in prophase I). Structural errors from unequal crossing over: deletions/duplications (some disease genes).</p>
<p><b>Life-cycle context:</b> animals: meiosis → gametes directly (spermatogenesis/oogenesis); plants: alternation of generations (spores → gametophyte — G11); fungi/algae: zygotic meiosis. The universal trio: meiosis halves, fertilisation restores, mitosis builds.</p>`,
  keyTerms: [
    { term: "Homologous chromosomes", def: "Matching pair (one maternal, one paternal) — same genes, maybe different alleles." },
    { term: "Diploid (2n) / haploid (n)", def: "Two sets / one set — human 46 vs 23." },
    { term: "Bivalent / tetrad", def: "Paired homologues (4 chromatids visible)." },
    { term: "Crossing over / chiasma", def: "Segment swap between non-sister chromatids / the X-shaped junction." },
    { term: "Independent assortment", def: "Random orientation of pairs at metaphase I — 2ⁿ combinations." },
    { term: "Reductional division", def: "Meiosis I — halves chromosome number." },
    { term: "Equational division", def: "Meiosis II — splits sisters like mitosis." },
    { term: "Gametogenesis", def: "Making gametes: 4 sperm vs 1 egg + polar bodies." },
    { term: "Nondisjunction", def: "Failure to separate → aneuploid gametes (e.g. trisomy 21)." },
    { term: "Aneuploidy", def: "Wrong chromosome number — Down/Turner/Klinefelter syndromes." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "Track human chromosome numbers: germ cell (2n) → after meiosis I → after meiosis II → after fertilisation. Give numbers at each step.",
      given: "2n = 46.",
      formula: "Reduction then restoration.",
      substitution: "Start: 46 (each doubled: 92 chromatids). After MI: 23 per cell (still doubled chromatids). After MII: 23 undoubled (sperm/egg). After fertilisation: 23 + 23 = 46.",
      calculation: "The cycle: 46 → 23 → 23 → 46 — halve then restore keeps the species number constant.",
      answer: "46 → 23 → 23 → 46 — meiosis and fertilisation are complementary halves of the cycle."
    },
    {
      problem: "An organism has 2n = 6. How many independent-assortment gamete types are possible (ignoring crossing over)? Show the logic.",
      given: "Three homologous pairs.",
      formula: "2ⁿ combinations.",
      substitution: "Each pair orients maternally-left or paternally-left randomly: 2 × 2 × 2 = 2³ = 8.",
      calculation: "Humans: 2²³ ≈ 8.4 million — before crossing over multiplies it further.",
      answer: "8 gamete types — and fertilisation squares that (64 zygote types from one pair)."
    },
    {
      problem: "A child has Down syndrome (trisomy 21). Explain two meiotic errors that could produce it.",
      given: "47, +21.",
      formula: "Nondisjunction in MI or MII.",
      substitution: "(1) MI: the two chromosome-21 homologues fail to separate → one cell gets both (n+1 = 24) → MII makes sperm/egg with TWO 21s. (2) MII: sister chromatids of 21 fail to split → same n+1 gamete. Fertilisation by a normal n gamete → 2n+1 = 47.",
      calculation: "Maternal age risk: oocytes have waited decades in prophase I — cohesion deteriorates.",
      answer: "Either division can mis-segregate — the result is a 24-chromosome gamete + 23 = trisomy."
    },
    {
      problem: "Compare the products: mitosis of a spermatogonium vs meiosis of a primary spermatocyte.",
      given: "Two testis divisions.",
      formula: "Somatic maintenance vs gamete production.",
      substitution: "Mitosis: 2 identical 2n spermatogonia (stem-cell self-renewal — keeps the factory stocked). Meiosis: 1 primary spermatocyte (2n) → 4 haploid spermatids → sperm, each genetically UNIQUE (crossing over + assortment).",
      calculation: "Oogenesis contrast: 1 egg + polar bodies (uneven cytokinesis keeps cytoplasm for the embryo).",
      answer: "Mitosis = copy the workforce; meiosis = shuffle and halve for fertilisation."
    },
    {
      problem: "Explain why siblings (same parents) look different, naming the three shuffling events.",
      given: "Family variation.",
      formula: "Crossing over + assortment + random fertilisation.",
      substitution: "(1) Prophase I crossing over rewrites each chromosome's allele mix. (2) Metaphase I independent assortment picks a random 23-of-46 set per gamete (8.4 M options). (3) Which of ~millions of sperm meets the egg: another 8.4 M × — ~70 trillion zygote combinations per pregnancy.",
      calculation: "Only identical twins escape (post-zygotic split).",
      answer: "Three lotteries stacked — meiosis guarantees no two gametes (and rarely two siblings) match."
    }
  ],
  commonMistakes: [
    "Saying DNA copies before meiosis II — it copies ONCE, before meiosis I only.",
    "Confusing anaphase I (homologues separate, sisters stay) with anaphase II (sisters separate).",
    "Thinking crossing over happens between sister chromatids — it's between NON-SISTER chromatids of homologues.",
    "Believing meiosis makes 'half the DNA' cells that are otherwise identical — the products are genetically UNIQUE.",
    "Saying 2n → n happens in meiosis II — the reduction is meiosis I (hence 'reductional').",
    "Mixing chromosome counts: after MI cells are haploid (23) but chromosomes are still doubled (2 chromatids).",
    "Thinking only eggs carry chromosome errors — sperm errors cause Klinefelter (XXY) and others too.",
    "Calling polar bodies 'failed sperm' — they're the egg pathway's cytoplasm-conservation by-products."
  ],
  applications: [
    "Fertility & medicine: IVF embryo chromosome screening (aneuploidy), maternal-age counselling.",
    "Breeding: meiotic shuffling creates the variation breeders SELECT — teff/wheat crossing programs (EIAR).",
    "Evolution: sex's advantage — variation against changing environments/parasites (why species don't just clone).",
    "Genetics foundation: Mendel's laws (Unit 1 G11) ARE meiosis behaviour — segregation = anaphase I, assortment = metaphase I.",
    "DNA fingerprinting & paternity: the uniqueness meiosis creates is what makes identification possible.",
    "Agriculture: apomixis research (seeds without meiosis) would clone hybrid vigour — a frontier crop scientists chase."
  ],
  summary: "Meiosis = one replication, two divisions. MI (reductional): pairing → crossing over (chiasmata) → independent assortment → homologues split → 2 haploid (doubled) cells. MII (equational): sisters split → 4 UNIQUE haploid gametes. 2n→n halves; fertilisation restores 2n. Variation engines: crossing over, assortment, random fertilisation. Errors: nondisjunction → trisomies (Down 2n+1).",
  visuals: [
    { type: "steps", config: { steps: [{ detail: "Homologues pair; crossing over at chiasmata", label: "Prophase I" }, { detail: "Pairs line up at equator — random orientation", label: "Metaphase I" }, { detail: "Homologues separate; sisters stay together", label: "Anaphase I" }, { detail: "Two haploid cells, chromosomes still doubled", label: "Telophase I" }, { detail: "Sisters split (no copying) → four unique n cells", label: "Meiosis II" }], title: "Meiosis in Five Moves" } },
    { type: "comparison", config: { title: "Mitosis vs Meiosis", left: { name: "Mitosis", items: ["One division", "2 identical daughters", "2n → 2n", "Somatic: growth/repair", "No pairing/swap"] }, right: { name: "Meiosis", items: ["Two divisions", "4 unique gametes", "2n → n", "Germ cells only", "Crossing over + assortment"] } } },
    { type: "flowChart", config: { steps: ["2n germ cell (46)", "DNA copies (still 46, doubled)", "MI: homologues split → 23 each", "MII: sisters split → 23 undoubled", "Gametes: sperm ×4 / egg ×1", "Fertilisation: 23 + 23 → 46"], title: "The Chromosome Number Cycle" } }
  ],
  questions: [
    { type: "mcq", q: "Crossing over occurs during:", options: ["Metaphase II", "Prophase I", "Anaphase I", "Interphase"], answer: 1, difficulty: 2, explanation: "Prophase I — paired homologues swap segments at chiasmata." },
    { type: "mcq", q: "The chromosome-number reduction (2n → n) happens in:", options: ["Meiosis I", "Meiosis II", "Mitosis", "Fertilisation"], answer: 0, difficulty: 1, explanation: "MI separates homologues — the reductional division." },
    { type: "short", q: "A human sperm contains ____ chromosomes.", answer: "23", difficulty: 1, explanation: "Haploid gamete; 23 + 23 at fertilisation = 46.", tolerance: 0.1 },
    { type: "concept", q: "Why does meiosis produce FOUR cells but oogenesis yields only ONE functional egg?", answer: "polar bodies|cytoplasm for embryo|uneven division", difficulty: 3, explanation: "Eggs need cytoplasm/yolk for early development — unequal cytokinesis packs it into one cell; the rest become polar bodies." },
    { type: "mcq", q: "Independent assortment means:", options: ["Sisters separate in anaphase II", "Homologue pairs orient randomly at metaphase I", "DNA copies twice", "Chromosomes mutate"], answer: 1, difficulty: 2, explanation: "Each pair's maternal/paternal side faces either pole randomly → 2²³ combinations." },
    { type: "calc", q: "An organism with 2n = 8: how many independent-assortment gamete types (no crossing over)?", answer: "16", difficulty: 3, explanation: "n = 4 pairs → 2⁴ = 16.", tolerance: 0.1 },
    { type: "tf", q: "DNA replication occurs before both meiosis I and meiosis II.", answer: false, difficulty: 2, explanation: "Only once — before meiosis I; interkinesis has no S phase." },
    { type: "concept", q: "A child has trisomy 21. Describe the meiotic error that could cause it.", answer: "nondisjunction|homologues or sisters fail to separate|24-chromosome gamete", difficulty: 3, explanation: "Nondisjunction in MI or MII → gamete with two chr-21 (n+1 = 24) + normal gamete (23) = 47, +21." },
    { type: "ordering", q: "Pick the correct meiosis-I sequence:", options: ["Pairing → crossing over → alignment as pairs → homologue separation", "Alignment → pairing → sisters split → crossing over", "Sisters split → pairing → alignment", "Crossing over → sisters split → pairing"], answer: [0], difficulty: 2, explanation: "Prophase I pairing + swap → metaphase I pairs align → anaphase I homologues part." },
    { type: "mcq", q: "Genetic uniqueness of gametes comes from:", options: ["Only mutation", "Crossing over + independent assortment + random fertilisation", "Mitosis errors", "DNA copying"], answer: 1, difficulty: 2, explanation: "Three stacked shuffling events — meiosis is variation engineering." }
  ]
};
