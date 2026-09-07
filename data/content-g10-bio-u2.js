/* ============================================================
   Content: Grade 10 Biology — Unit 2: Plants
   4 topics. Rich format + 3 visuals per lesson.
   ============================================================ */
window.Lessons = window.Lessons || {};

/* --- b2-1: Plant Tissues --- */
Lessons["g10-biology-ub2-t1"] = {
  overview: "A tree is a construction project: waterproof skin, load-bearing beams, sugar pipelines and living packing material — all made of tissues. Plant tissues split into MERISTEMATIC (growing) and PERMANENT (matured: epidermis, ground, vascular), each with cells built for exactly one job.",
  objectives: [
    "Distinguish meristematic from permanent tissues by location and function",
    "Name the three meristem types (apical, lateral, intercalary) and their growth effects",
    "Describe simple permanent tissues: parenchyma, collenchyma, sclerenchyma",
    "Describe protective tissues: epidermis, cuticle, stomata, cork",
    "Identify complex vascular tissues: xylem and phloem components"
  ],
  simple: "Plant bodies are built from tissues grouped by whether they still divide. Meristematic tissue = the growing tips: apical meristems at root/shoot tips make the plant LONGER; lateral meristem (cambium) makes it WIDER; intercalary meristem at grass nodes lets lawns regrow after mowing. Once cells stop dividing they mature into permanent tissues: epidermis (skin, waxy cuticle, stomata pores), ground tissue (parenchyma — packing + photosynthesis + storage; collenchyma — flexible props; sclerenchyma — dead fibre armour), and vascular tissue (xylem — dead water pipes; phloem — living sugar tubes).",
  detailed: `<p><b>Meristematic tissue:</b> undifferentiated, thin-walled, dense cytoplasm, no large vacuoles, dividing constantly. Apical meristems (root and shoot tips) → primary growth (length); protected by root cap. Lateral meristems (vascular cambium, cork cambium) → secondary growth (girth/wood). Intercalary meristems (bases of nodes/internodes in grasses) → regrowth after grazing/mowing — why teff and wheat survive being cut.</p>
<p><b>Simple permanent tissues (one cell type each):</b>
<br>• Parenchyma: thin cellulose walls, living, large vacuoles — cortex/pith packing, chlorenchyma photosynthesises, aerenchyma (air spaces) floats aquatic plants, storage in roots/tubers/teff grain.
<br>• Collenchyma: unevenly thickened corners (pectin/cellulose), living — flexible support in young stems, petioles, leaf veins (the 'stringy' celery ribs).
<br>• Sclerenchyma: thick LIGNIFIED walls, DEAD at function — fibres (flax/linen, hemp, jute — textile industry!) and sclereids (grit in pears, seed coats).</p>
<p><b>Protective tissues:</b> Epidermis — single outer layer, often waxy CUTICLE reducing water loss; guard cells form stomata (gas exchange + transpiration pores, usually more on leaf underside); root epidermal cells form root hairs (absorption surface). Periderm/cork — replaces epidermis in woody stems (dead, suberin-sealed = bark's outer skin).</p>
<p><b>Complex vascular tissues (several cell types):</b>
<br>• XYLEM (water + minerals up; dead at function): tracheids (pitted tubes, also in ferns/conifers), vessel elements (open pipes, angiosperms), xylem parenchyma (storage), xylem fibres (strength). Lignin walls make wood.
<br>• PHLOEM (sugars — translocation, living): sieve-tube elements (perforated end plates, no nucleus), companion cells (the 'brains' — ATP for loading), phloem parenchyma, fibres.
<br>Vascular bundles: in stems often scattered (monocot teff) or ringed (dicot); in roots central stele. Cambium between xylem and phloem adds new pipe layers each year → annual rings.</p>`,
  keyTerms: [
    { term: "Meristematic tissue", def: "Continuously dividing cells — growth regions." },
    { term: "Apical meristem", def: "Tip of root/shoot — primary (length) growth." },
    { term: "Cambium (lateral meristem)", def: "Side-adding meristem — secondary growth (wood/bark)." },
    { term: "Intercalary meristem", def: "At grass nodes — regrowth after cutting/grazing." },
    { term: "Parenchyma", def: "Thin-walled living packing: photosynthesis, storage, floatation." },
    { term: "Collenchyma", def: "Corner-thickened living flexible support." },
    { term: "Sclerenchyma", def: "Lignified dead fibres/sclereids — strength (linen, jute)." },
    { term: "Stomata", def: "Guard-cell pores — gas exchange and transpiration." },
    { term: "Xylem", def: "Dead vascular tissue: water/minerals upward; makes wood." },
    { term: "Phloem", def: "Living vascular tissue: sugar translocation (sieve tubes + companion cells)." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "A lawn is mowed; within days the same grass blade base keeps pushing growth. Which tissue explains this, and why can't a mango sapling do the same?",
      given: "Grass vs tree regrowth.",
      formula: "Intercalary vs apical meristems.",
      substitution: "Grasses have intercalary meristems at node bases BELOW the cut zone — growth continues after the tip is removed. Mango's only length-growth is at shoot TIP; mow the tip and you remove the meristem (that's why hedge-cutting makes bushes branch from buds, not 'regrow the cut leaf').",
      calculation: "Adaptation to grazing herbivores.",
      answer: "Intercalary meristems — the reason grazing and mowing don't kill grasses."
    },
    {
      problem: "Identify the tissues: (a) the gritty cells in a ripe pear, (b) celery's stringy ribs, (c) the storage bulk of a potato, (d) flax fibres woven into linen.",
      given: "Four everyday plant materials.",
      formula: "Sclereids / collenchyma / parenchyma / sclerenchyma fibres.",
      substitution: "(a) sclereids (sclerenchyma). (b) collenchyma (flexible support strands). (c) parenchyma (storage). (d) sclerenchyma fibres.",
      calculation: "All are permanent simple tissues — different walls, different jobs.",
      answer: "Grit = sclereids; strings = collenchyma; flesh = parenchyma; linen = sclerenchyma."
    },
    {
      problem: "A ring of bark is stripped around a tree trunk (girdling); the leaves stay green for weeks, then the whole tree dies. Explain with tissue logic.",
      given: "Girdling experiment.",
      formula: "Phloem in bark, xylem in wood.",
      substitution: "Bark removal takes the PHLOEM — sugars can't move down to roots → roots starve in days-weeks. Xylem (inner wood) still carries water UP, so leaves look fine — until roots die, water stops, canopy dies.",
      calculation: "Death from the roots up.",
      answer: "Phloem transports food downward; cutting it starves roots while xylem keeps leaves temporarily green."
    },
    {
      problem: "Why are xylem vessels 'elegant engineering' even though they are dead?",
      given: "Dead cells as pipes.",
      formula: "Structure-function.",
      substitution: "Dead = hollow (no cytoplasm blocking flow) + lignified walls = won't collapse under the strong tension of transpiration pull; pits allow side-to-side water movement; narrow lumens resist cavitation.",
      calculation: "Living cells couldn't be open pipes — their contents would block flow.",
      answer: "Death is the design: hollow, reinforced, low-resistance water conduits."
    }
  ],
  commonMistakes: [
    "Saying meristems are at 'the top of the plant' only — roots have them too (and grasses at nodes).",
    "Calling all permanent tissues dead — parenchyma, collenchyma and phloem are LIVING; xylem and sclerenchyma are dead.",
    "Confusing collenchyma (uneven corner thickening, living, flexible) with sclerenchyma (uniform lignified walls, dead, rigid).",
    "Thinking stomata are only for photosynthesis gases — they're also the main water-LOSS route (transpiration).",
    "Saying phloem carries 'sap' vaguely — it carries sugar solution (sucrose) made in leaves, bidirectionally.",
    "Believing wood IS the cambium — wood is secondary XYLEM; the cambium is the thin dividing layer between bark and wood.",
    "Calling guard cells 'epidermal cells like the rest' — they're specialised, chloroplast-bearing, shape-shifting."
  ],
  applications: [
    "Teff and wheat survival of grazing/harvest = intercalary meristems — pastoral agriculture depends on it.",
    "Linen (flax), jute, sisal = sclerenchyma fibres — Ethiopia's traditional textile fibres.",
    "Grafting success requires aligning CAMBIUM of scion and stock — commercial fruit-tree technique.",
    "Wood = xylem: teff-storage beams, construction; grain rings record rainfall years (dendrochronology).",
    "Transpiration through stomata drives cooling and water uptake — greenhouse and irrigation management.",
    "Potato/tapioca storage parenchyma = food security crops; aerenchyma lets rice grow flooded."
  ],
  summary: "Growth tissues: apical (length), lateral/cambium (girth), intercalary (grass regrowth). Permanent tissues: epidermis + cuticle + stomata (protection/gas), parenchyma (packing/photosynthesis/storage), collenchyma (flexible props), sclerenchyma (dead armour — fibres), xylem (dead water pipes, lignin = wood) and phloem (living sugar tubes with companion cells). Structure always matches job — living vs dead, thick vs thin walls.",
  visuals: [
    { type: "comparison", config: { title: "Xylem vs Phloem", left: { name: "Xylem", items: ["Dead at function", "Hollow lignified tubes", "Water + minerals UP", "One-way flow", "Also = structural wood"] }, right: { name: "Phloem", items: ["Living (no nucleus)", "Sieve plates + companion cells", "Sugar solution, source → sink", "Bidirectional", "In the bark"] } } },
    { type: "mindMap", config: { branches: [{ items: ["Apical — length", "Lateral — girth", "Intercalary — grass nodes"], label: "Meristematic" }, { items: ["Parenchyma", "Collenchyma", "Sclerenchyma"], label: "Simple permanent" }, { items: ["Epidermis + cuticle", "Stomata", "Cork"], label: "Protective" }, { items: ["Xylem", "Phloem"], label: "Vascular" }], center: "Plant Tissues" } },
    { type: "qa", config: { title: "Tissue Detectives — tap to reveal", pairs: [{ q: "Why does a cut lawn regrow but a cut tree top doesn't?", a: "Grasses keep intercalary meristems at their nodes; trees' length growth lives only at the removed tip." }, { q: "Which tissue makes pear flesh gritty?", a: "Sclereids — dead sclerenchyma cells with stone-hard lignified walls." }, { q: "Why do girdled trees die from the roots first?", a: "Bark carries phloem downward; roots starve of sugar while xylem (in wood) keeps leaves watered — temporarily." }] } }
  ],
  questions: [
    { type: "mcq", q: "Which tissue is responsible for a plant growing TALLER?", options: ["Lateral meristem", "Apical meristem", "Parenchyma", "Cork"], answer: 1, difficulty: 1, explanation: "Apical meristems at shoot/root tips add length (primary growth)." },
    { type: "mcq", q: "All of these are living tissues EXCEPT:", options: ["Parenchyma", "Collenchyma", "Xylem vessels", "Phloem sieve tubes"], answer: 2, difficulty: 2, explanation: "Functional xylem is dead — hollow pipes. The others are living cells." },
    { type: "short", q: "The waxy layer on leaf surfaces that limits water loss is the ____.", answer: "cuticle", difficulty: 1, explanation: "Cuticle = epicuticular wax over epidermis." },
    { type: "concept", q: "Why are sclerenchyma fibres useful to humans, and give one fibre crop?", answer: "strong threads textile|flax linen|jute hemp", difficulty: 2, explanation: "Long dead lignified cells = natural high-strength threads — flax→linen, jute, hemp." },
    { type: "mcq", q: "Girdling kills a tree because it removes:", options: ["Xylem water supply", "Phloem sugar transport to roots", "Apical meristem", "Cuticle"], answer: 1, difficulty: 3, explanation: "Bark = phloem; roots starve of leaf sugar while water still rises through wood." },
    { type: "tf", q: "Guard cells contain chloroplasts and change shape to open/close stomata.", answer: true, difficulty: 2, explanation: "They photosynthesise, pump ions, swell (open) or shrink (close)." },
    { type: "short", q: "Annual tree rings are layers of which tissue?", answer: "xylem|secondary xylem|wood", difficulty: 2, explanation: "Cambium adds a xylem ring each season." },
    { type: "concept", q: "Explain why 'dead' xylem is actually BETTER for water transport.", answer: "hollow no cytoplasm|lignin resists collapse|open pipes", difficulty: 3, explanation: "Dead cells leave hollow, lignin-reinforced tubes — no cytoplasm blocking flow, walls resist tension collapse." },
    { type: "ordering", q: "Pick the correct tissue→function pairing order (protection, packing, flexible support, rigidity):", options: ["Epidermis, parenchyma, collenchyma, sclerenchyma", "Parenchyma, epidermis, sclerenchyma, collenchyma", "Collenchyma, sclerenchyma, epidermis, parenchyma", "Sclerenchyma, collenchyma, parenchyma, epidermis"], answer: [0], difficulty: 2, explanation: "Skin → packing/storage → bendy props → dead armour." }
  ]
};

/* --- b2-2: Plant Organs --- */
Lessons["g10-biology-ub2-t2"] = {
  overview: "Roots, stems, leaves, flowers, fruits — plant organs are tissue-coalitions with jobs: anchor + absorb, support + transport, make food, reproduce. This lesson maps each organ's structure to its function and shows the modifications plants use to survive drought, cold and crowds.",
  objectives: [
    "List the six plant organs and their primary functions",
    "Describe root, stem and leaf internal structure (tissue layers)",
    "Distinguish taproot vs fibrous roots and monocot vs dicot stems/leaves",
    "Explain leaf adaptation for photosynthesis (shape, tissues, stomata)",
    "Give modified roots/stems/leaves with survival logic"
  ],
  simple: "Three vegetative organs: ROOT (anchors, absorbs water/minerals — taproot like carrot's deep main root vs fibrous mats like teff/grass), STEM (the highway + scaffold — nodes, internodes, buds; lifts leaves to light, pipes water up and sugar down), LEAF (the food factory — flat blade for light capture, veins for plumbing, stomata for gas doors). Then the reproductive organs: FLOWER (male stamen makes pollen, female carpel holds ovules → seed after fertilisation), FRUIT (ripened ovary — protects and disperses seeds), SEED (embryo + food store + tough coat, waiting to germinate). Every plant you eat is one of these organs or a modified version: carrot = root, potato = stem, onion = leaf bases.",
  detailed: `<p><b>Root system:</b> Taproot (dicots: one dominant main root — carrot, bean; deep access) vs fibrous (monocots: many equal roots from stem base — grasses/teff; erosion control, quick surface uptake). Root zones from tip: root cap (protection) → meristematic → elongation → maturation with ROOT HAIRS (single-cell extensions ×10 absorption area). Internal: epidermis → cortex (storage) → endodermis (Casparian strip forces water through cell membranes — selective gate) → stele with xylem/phloem.</p>
<p><b>Stem:</b> nodes (leaf/bud attach) + internodes. Dicot stem: vascular bundles in a RING (cambium between → secondary wood); monocot: bundles SCATTERED (no cambium → grasses don't thicken like trees). Functions: support, transport, storage (sugarcane stems store sucrose), photosynthesis in cacti (modified stems).</p>
<p><b>Leaf — the photosynthesis machine:</b> broad thin blade = max light, short diffusion paths; upper epidermis transparent; PALISADE mesophyll (columnar, chloroplast-dense — main factory); SPONGY mesophyll (air spaces = CO₂ circulation); lower epidermis with stomata (fewer water-loss trade-offs); veins (xylem delivers water, phloem exports sugar). Modified leaves: tendrils (pea — climbing), spines (cactus — defence + water saving), storage leaves (onion scales), insect-trapping (Venus flytrap).</p>
<p><b>Flower anatomy:</b> sepals (bud protection) → petals (pollinator advertising: colour, scent, nectar guides) → stamens (filament + anther; anther = pollen factory, microspores) → carpel/pistil (stigma — pollen catcher; style — tube; ovary — ovules = megaspores → egg). Bisexual flowers carry both; unisexual separate (maize: tassel male, ear female).</p>
<p><b>Fruit & seed:</b> Fruit = mature ovary wall (pericarp) — fleshy (mango, tomato) or dry (teff grain's husk, bean pod); purpose = seed protection + dispersal (animals eat and spread, wind wings, hooks). Seed = embryo (mini plant: radicle, plumule, cotyledons) + food store (cotyledon in bean, endosperm in teff/maize) + seed coat (testa) — dormancy until water, warmth, oxygen arrive.</p>
<p><b>Modifications (survival engineering):</b> storage roots (carrot, sugar beet — food banks), prop roots (maize), adventitious; modified stems: potato tubers (eyes = buds!), onion bulb (compressed stem + leaf bases), ginger rhizome,_runner stems (strawberry runners); modified leaves as above. Same organ, different job — structure follows function.</p>`,
  keyTerms: [
    { term: "Taproot / fibrous", def: "Single dominant root (dicots) vs equal mat (monocots/grasses)." },
    { term: "Root hair", def: "Epidermal extension — ×10 absorption surface." },
    { term: "Endodermis", def: "Selective root gate (Casparian strip)." },
    { term: "Node / internode", def: "Leaf-attach point / segment between." },
    { term: "Palisade mesophyll", def: "Chloroplast-packed columnar leaf layer — main photosynthesis site." },
    { term: "Stamen / carpel", def: "Male (anther+filament) / female (stigma+style+ovary) flower parts." },
    { term: "Ovule", def: "In ovary; becomes SEED after fertilisation." },
    { term: "Pericarp", def: "Fruit wall from ovary wall." },
    { term: "Cotyledon", def: "Seed leaf — embryo's food/green organ." },
    { term: "Tuber", def: "Underground stem (potato) with buds ('eyes')." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "Classify these foods by organ (and modification): carrot, potato, onion, mango, teff grain, ginger.",
      given: "Six market items.",
      formula: "Organ + modification logic.",
      substitution: "Carrot = taproot (storage). Potato = stem tuber (storage; eyes = buds). Onion = bulb (compressed stem + fleshy leaf bases). Mango = fruit (fleshy pericarp). Teff grain = fruit/seed (caryopsis — seed fused with fruit wall). Ginger = rhizome (underground stem).",
      calculation: "Proof: potato eyes sprout = buds = stem evidence.",
      answer: "Root, stem, stem+leaf, fruit, seed/fruit, stem — a whole organ zoo in one shopping basket."
    },
    {
      problem: "Why do most leaves have more stomata on the LOWER surface?",
      given: "Leaf anatomy fact.",
      formula: "Water-loss vs gas-exchange trade-off.",
      substitution: "Upper surface takes direct sun → open stomata there would lose water fast and overheat; lower surface is shaded/cooler → same gas exchange with less transpiration cost.",
      calculation: "Floating leaves (water lily) flip the rule: stomata on TOP (air side).",
      answer: "Shade saves water — stomata hide underneath; exceptions prove the logic (aquatics put them up top)."
    },
    {
      problem: "A monocot (grass) stem and dicot (bean) stem in cross-section — name three differences.",
      given: "Two anatomy slides.",
      formula: "Scattered vs ringed bundles; cambium presence.",
      substitution: "(1) Bundle arrangement: scattered (monocot) vs ring (dicot). (2) Cambium: absent in monocot bundles (no secondary thickening) vs present in dicot (ring → wood). (3) Ground tissue: monocot bundles in uniform ground; dicot has clear cortex/pith zones.",
      calculation: "Practical test: a grass stem can't grow a tree-ring.",
      answer: "Scattered bundles, no cambium, no annual rings = monocot; ringed bundles + cambium = dicot."
    },
    {
      problem: "Trace the flower→fruit→seed chain: which flower part becomes what after fertilisation?",
      given: "Post-pollination transformation.",
      formula: "Ovary→fruit, ovule→seed, petals/sepals fall.",
      substitution: "Fertilised ovule → seed (embryo + food + testa); ovary wall → pericarp (fruit); petals, stamens, style, stigma wither. In mango: fleshy pericarp around the stone (endocarp hard) enclosing ONE seed.",
      calculation: "A fruit is literally a flower's ovary with a purpose.",
      answer: "Ovary→fruit, ovules→seeds — everything else is scaffolding that falls away."
    }
  ],
  commonMistakes: [
    "Calling a potato a 'root' — it's a STEM tuber (eyes = buds; roots are the thin threads).",
    "Saying onion is a stem — it's a compressed stem with modified LEAF bases as the edible layers.",
    "Thinking root hairs are separate hairs 'on' roots — they're single elongated EPIDERMAL cells.",
    "Confusing ovule (in ovary, becomes seed) with ovary (becomes fruit).",
    "Believing monocots never thicken at all — palms do (unusual primary thickening), but no cambium rings.",
    "Saying petals' job is photosynthesis — petals advertise; chloroplast work is the leaf's.",
    "Placing palisade layer in the LOWER half — it's the upper side (light first).",
    "Calling teff a 'seed' loosely — technically a caryopsis fruit with seed fused to wall (fine to say grain)."
  ],
  applications: [
    "Teff's fibrous root mat holds soil — erosion control on Ethiopian highland slopes.",
    "Irish-potato and sweet-potato (root tuber!) storage organs = calorie security crops.",
    "Grafting and cutting propagation exploit stem nodes/buds — fruit nursery practice in the Rift.",
    "Flower biology = pollination services: bees and coffee/cherry yields; Ethiopia's honey industry rides flower cycles.",
    "Seed banking: dormancy knowledge keeps gene banks (EIAR) viable for decades.",
    "Leaf transpiration drives cooling — urban tree planting lowers Addis microclimate."
  ],
  summary: "Vegetative organs: root (anchor/absorb; taproot vs fibrous; root hairs, endodermis), stem (support/transport; monocot scattered vs dicot ringed bundles), leaf (photosynthesis; palisade/spongy mesophyll, stomata trade-offs). Reproductive: flower (stamens/carpels), fruit (ripened ovary for dispersal), seed (embryo + store + coat). Modifications (carrot root, potato stem, onion leaf) show structure following survival.",
  visuals: [
    { type: "flowChart", config: { steps: ["Seed germinates (radicle first)", "Root system anchors + absorbs", "Stem lifts leaves, pipes fluids", "Leaves photosynthesise", "Flower forms — pollination", "Fertilisation: ovule → seed", "Fruit ripens — dispersal"], title: "Organ by Organ: A Plant's Life" } },
    { type: "comparison", config: { title: "Monocot vs Dicot", left: { name: "Monocot (teff, maize)", items: ["One seed leaf", "Fibrous roots", "Scattered stem bundles", "Parallel leaf veins", "Flower parts in 3s"] }, right: { name: "Dicot (bean, mango)", items: ["Two seed leaves", "Taproot", "Ringed stem bundles + cambium", "Net leaf veins", "Flower parts in 4-5s"] } } },
    { type: "qa", config: { title: "Organ or Impostor? — tap to reveal", pairs: [{ q: "Carrot — root or stem?", a: "Root: a swollen taproot (storage). No nodes, no buds." }, { q: "Potato — root or stem?", a: "Stem: a tuber with 'eyes' = buds; roots are the thin threads only." }, { q: "Mango's fleshy part?", a: "Fruit wall (pericarp) from the ovary — the stone is hard endocarp around one seed." }, { q: "Onion layers?", a: "Modified leaf bases around a compressed stem." }] } }
  ],
  questions: [
    { type: "mcq", q: "The deep, single dominant root system of dicots is called:", options: ["Fibrous", "Adventitious", "Taproot", "Rhizome"], answer: 2, difficulty: 1, explanation: "Taproot: one main root with side branches (carrot, bean)." },
    { type: "mcq", q: "Most photosynthesis in a leaf happens in the:", options: ["Upper epidermis", "Palisade mesophyll", "Spongy mesophyll", "Xylem"], answer: 1, difficulty: 1, explanation: "Palisade cells pack the most chloroplasts, just under the transparent top." },
    { type: "short", q: "After fertilisation, the ovary of a flower develops into the ____.", answer: "fruit", difficulty: 1, explanation: "Ovary → fruit; ovules → seeds." },
    { type: "concept", q: "Prove a potato is a stem, not a root.", answer: "eyes are buds|nodes|sprouts from buds", difficulty: 2, explanation: "Potato 'eyes' are buds at nodes — only stems have buds; roots never do." },
    { type: "mcq", q: "Root hairs increase absorption mainly by:", options: ["Pumping water actively", "Multiplying surface area", "Storing sugar", "Blocking toxins"], answer: 1, difficulty: 2, explanation: "Single-cell extensions multiply epidermal surface ~10×." },
    { type: "tf", q: "Monocot stems have vascular bundles arranged in a ring with cambium between.", answer: false, difficulty: 2, explanation: "That's dicots; monocots scatter their bundles and lack cambium (no tree rings)." },
    { type: "short", q: "The male part of a flower (filament + anther) is the ____.", answer: "stamen", difficulty: 1, explanation: "Stamen = pollen factory; female = carpel/pistil." },
    { type: "concept", q: "Why do cacti have spines instead of broad leaves?", answer: "reduce water loss|surface area|desert adaptation", difficulty: 3, explanation: "Broad leaves transpire hugely; spines = minimal surface + defence; the stem takes over photosynthesis." },
    { type: "ordering", q: "Pick the correct flower structure order (outside → inside):", options: ["Petal, sepal, carpel, stamen", "Sepal, petal, stamen, carpel", "Carpel, stamen, petal, sepal", "Sepal, stamen, petal, carpel"], answer: [1], difficulty: 2, explanation: "Sepals protect, petals advertise, stamens ring the central carpel." },
    { type: "mcq", q: "The selective barrier forcing water through cell membranes in roots is the:", options: ["Epidermis", "Cortex", "Endodermis (Casparian strip)", "Stele"], answer: 2, difficulty: 3, explanation: "Suberin strip in endodermis blocks cell-wall bypass — root controls what enters xylem." }
  ]
};

/* --- b2-3: Photosynthesis --- */
Lessons["g10-biology-ub2-t3"] = {
  overview: "Photosynthesis is the factory that feeds almost every food chain and built Earth's oxygen atmosphere: 6CO₂ + 6H₂O →(light, chlorophyll) C₆H₁₂O₆ + 6O₂. This lesson breaks it into light and dark stages, the factors that speed or stall it, and why teff and sugarcane run a turbo-charged version (C4).",
  objectives: [
    "State the photosynthesis equation and where each stage occurs",
    "Describe light-dependent reactions (water splitting, ATP, NADPH, O₂)",
    "Describe the Calvin cycle (carbon fixation, reduction, RuBP regeneration)",
    "Explain limiting factors: light intensity, CO₂, temperature",
    "Relate chloroplast structure to function and compare C3/C4 briefly"
  ],
  simple: "Inside leaf chloroplasts, chlorophyll captures sunlight and uses its energy to SPLIT WATER (releasing O₂ — the oxygen you're breathing right now is photosynthesis exhaust) and charge two energy carriers: ATP and NADPH. Then, in a light-independent cycle (Calvin cycle), the plant uses that charge to bolt CO₂ from air onto a 5-carbon starter (RuBP), building sugar (G3P → glucose). Two stages: 'light reactions' need sun directly; 'dark reactions' need the light reactions' products, not darkness. Everything alive either eats the sugar or eats something that did — and the CO₂ we 'waste' is their food input.",
  detailed: `<p><b>Chloroplast engineering:</b> double membrane; thylakoids (flattened sacs) stacked into grana — membranes hold chlorophyll photosystems + electron transport chains (light reactions); stroma (fluid) holds Calvin-cycle enzymes. Chlorophyll a absorbs red+blue, reflects green; accessory pigments (carotenes, xanthophylls) widen the spectrum. Granal stacking = huge membrane area for more photosystems.</p>
<p><b>Light-dependent stage (thylakoid membrane):</b> Photosystem II absorbs light → energised electrons replaced by SPLITTING WATER (photolysis: 2H₂O → 4H⁺ + 4e⁻ + O₂↑ — O₂ is waste). Electrons cascade through an ETC (pumping H⁺ into thylakoid lumen) to Photosystem I (re-energised) → finally reduce NADP⁺ → NADPH. The H⁺ gradient drives ATP synthase → ATP (photophosphorylation). Products: ATP + NADPH (to stroma) + O₂ (out stomata/atmosphere).</p>
<p><b>Light-independent stage — Calvin cycle (stroma):</b> (1) FIXATION: CO₂ + RuBP (5C) →(RuBisCO) two 3C (PGA). (2) REDUCTION: ATP + NADPH convert PGA → G3P (3C sugar phosphate). (3) REGENERATION: most G3P recharges RuBP (more ATP); one G3P per 3 CO₂ exits → glucose/starch/cellulose. Needs no light DIRECTLY but stops in the dark when ATP/NADPH run out.</p>
<p><b>Limiting factors:</b> light intensity (rate rises then plateaus — another factor limits), CO₂ (same curve shape), temperature (rises to optimum ~25-35 °C then crashes — enzymes denature). The SLOWEST available factor limits (Blackman's law) — greenhouses exploit this: boost CO₂ to 0.1% + light + warmth → much higher yields.</p>
<p><b>C3 vs C4:</b> RuBisCO sometimes grabs O₂ instead of CO₂ (photorespiration — wasteful, hot/dry days). C4 plants (sugarcane, maize, teff is actually C4!) pre-fix CO₂ into 4C acids in mesophyll, then deliver concentrated CO₂ to bundle-sheath Calvin factories — no photorespiration, efficient in hot bright climates. CAM (succulents): open stomata at NIGHT, store CO₂ as acid, use by day — desert water saving.</p>
<p><b>Significance:</b> food-chain base; O₂ atmosphere (and ozone shield); carbon sink (fossil fuels = ancient photosynthesis); the energy in every calorie you eat is captured sunlight.</p>`,
  keyTerms: [
    { term: "Photosynthesis", def: "6CO₂ + 6H₂O →(light/chlorophyll) C₆H₁₂O₆ + 6O₂." },
    { term: "Chlorophyll", def: "Green pigment absorbing red+blue light." },
    { term: "Thylakoid / granum", def: "Light-reaction membrane sacs / their stacks." },
    { term: "Photolysis", def: "Light-driven water splitting — source of released O₂." },
    { term: "ATP / NADPH", def: "Energy currency / reducing power made by light stage." },
    { term: "Calvin cycle", def: "Stroma cycle fixing CO₂ into G3P sugar using ATP+NADPH." },
    { term: "RuBisCO", def: "CO₂-fixing enzyme (also the O₂-grabbing photorespiration culprit)." },
    { term: "Limiting factor", def: "The scarcest input caps the rate (Blackman)." },
    { term: "C4 pathway", def: "CO₂ pre-concentration (teff, maize, cane) beating photorespiration." },
    { term: "Stomata", def: "CO₂ entry / O₂ + water exit gates." }
  ],
  formulas: [
    {
      name: "Overall equation",
      formula: "6CO₂ + 6H₂O →(light energy, chlorophyll) C₆H₁₂O₆ + 6O₂",
      meaning: "Carbon + water + sunlight → sugar + oxygen.",
      vars: [],
      units: "—",
      when: "Every photosynthesis question.",
      example: "The O₂ released comes from WATER (proved with isotope ¹⁸O), not CO₂."
    },
    {
      name: "Photolysis",
      formula: "2H₂O → 4H⁺ + 4e⁻ + O₂",
      meaning: "Water split to replace PSII's excited electrons.",
      vars: [],
      units: "—",
      when: "Light-dependent stage.",
      example: "Every O₂ molecule exhaled by a leaf = 2 water molecules sacrificed."
    }
  ],
  workedExamples: [
    {
      problem: "A greenhouse grower has strong light and warm 30 °C air, yet tomato growth stalls. Using limiting-factor logic, what's the most likely missing input and the fix?",
      given: "Light ✓, temperature ✓.",
      formula: "Blackman's law — find the scarcest factor.",
      substitution: "Sealed greenhouse: plants deplete CO₂ below the outside 0.04% → carbon fixation rate caps regardless of light.",
      calculation: "Fix: CO₂ enrichment (burners/tanks) to ~0.1%.",
      answer: "CO₂ starvation — enrich the air and the unused light capacity converts to yield."
    },
    {
      problem: "Explain why the 'dark reaction' name is misleading, using the ATP/NADPH dependency.",
      given: "Terminology critique.",
      formula: "Stage coupling.",
      substitution: "Calvin cycle needs ATP + NADPH made ONLY by light reactions; in darkness those run out within seconds and the cycle halts — it doesn't prefer dark, it just doesn't use photons directly.",
      calculation: "Also: many Calvin enzymes are LIGHT-ACTIVATED (pH/Mg²⁺ shifts from thylakoid activity).",
      answer: "Better name: light-INDEPENDENT stage — indirectly it depends on light completely."
    },
    {
      problem: "Design an experiment proving chlorophyll is needed for starch formation (use a variegated leaf).",
      given: "Green-and-white leaf, iodine.",
      formula: "Control by tissue, destarch first.",
      substitution: "Destarch plant in dark 48 h → light 6 h → boil leaf in ethanol (remove pigment), rinse, iodine.",
      calculation: "Prediction: green areas → blue-black (starch); white areas → brown (no starch).",
      answer: "Only chlorophyll-containing patches made starch — pigment is essential."
    },
    {
      problem: "Teff thrives in the hot, bright Ethiopian highlands. Which photosynthetic adaptation helps it, and what problem does it solve?",
      given: "Teff = C4 grass.",
      formula: "C4 anatomy vs photorespiration.",
      substitution: "Hot + bright → stomata partly closed (water saving) → low internal CO₂ → C3 RuBisCO grabs O₂ (photorespiration wastes energy). Teff's C4 pump concentrates CO₂ in bundle-sheath cells so RuBisCO always works at full CO₂.",
      calculation: "Result: high water-use AND carbon-use efficiency.",
      answer: "C4 CO₂-concentrating mechanism — efficiency under heat, light and drought."
    },
    {
      problem: "A pond weed in bright light bubbles faster. What gas, from which reaction, and how could you QUANTIFY the rate?",
      given: "Aquarium plant experiment.",
      formula: "Photolysis → O₂ bubbles.",
      substitution: "Gas = O₂ from water splitting in light reactions. Quantify: count bubbles/min (rough) or collect gas in inverted measuring cylinder over water and measure volume per minute (proper).",
      calculation: "Vary light distance → rate vs intensity curve with plateau.",
      answer: "O₂ output is a direct photosynthesis-rate meter — the classic Elodea practical."
    }
  ],
  commonMistakes: [
    "Writing the equation backwards (sugar + O₂ → CO₂ + H₂O is RESPIRATION).",
    "Saying dark reactions happen at night — they happen by day too; they just don't use photons directly.",
    "Claiming plants 'breathe in CO₂ and breathe out O₂' 24/7 — at night photosynthesis stops but respiration continues (O₂ in, CO₂ out).",
    "Thinking the released O₂ comes from CO₂ — it comes from WATER (photolysis; isotope-labelled proof).",
    "Placing the Calvin cycle in thylakoids — it's in the STROMA; light reactions in thylakoid membranes.",
    "Believing more light ALWAYS means more growth — curves plateau at the next limiting factor.",
    "Confusing chlorophyll (pigment) with chloroplast (organelle).",
    "Saying photorespiration is 'respiration' — it's RuBisCO's O₂-grabbing wasteful side-reaction, not mitochondrial energy release."
  ],
  applications: [
    "Food security: every crop yield is captured sunlight — teff, maize, wheat breeding targets photosynthetic efficiency (IRRI's C4-rice project).",
    "Greenhouse technology: CO₂ enrichment + supplemental light = flower and vegetable exports (Ethiopian rose industry).",
    "Climate: photosynthesis is the land carbon sink — forest regeneration (Green Legacy) pulls CO₂ via this equation.",
    "O₂ atmosphere and ozone layer: 2.4 Ga of photosynthetic exhaust made aerobic life possible.",
    "Fossil fuels = stored ancient photosynthesis; biofuels (sugarcane ethanol) = current-day capture.",
    "Algae bioreactors: fastest photosynthesizers → feed, oil, carbon capture experiments."
  ],
  summary: "Light reactions (thylakoid): chlorophyll captures photons, water splits (O₂ waste), ATP + NADPH charged. Calvin cycle (stroma): RuBisCO fixes CO₂ onto RuBP, ATP/NADPH reduce it to G3P → glucose; regeneration consumes more ATP. Rate is capped by the scarcest factor (light/CO₂/temp); C4 (teff, maize) and CAM beat photorespiration in hot/dry light. Photosynthesis = the energy and oxygen base of nearly all life.",
  visuals: [
    { type: "flowChart", config: { steps: ["Light hits chlorophyll (PSII)", "Water split → O₂ released", "Electrons cascade → ATP made", "PSI re-energises → NADPH", "Calvin cycle: CO₂ + RuBP", "ATP+NADPH reduce → G3P", "Sugar exits; RuBP regenerated"], title: "From Photon to Sugar" } },
    { type: "lineGraph", config: { points: [{ x: 0, y: 0 }, { x: 20, y: 18 }, { x: 40, y: 32 }, { x: 60, y: 40 }, { x: 80, y: 42 }, { x: 100, y: 42 }], title: "Photosynthesis Rate vs Light Intensity", xLabel: "Light intensity (%)", yLabel: "Rate (arb. units)" } },
    { type: "qa", config: { title: "The Oxygen Question — tap to reveal", pairs: [{ q: "Where does the O₂ you breathe actually come from?", a: "From SPLIT WATER inside leaf chloroplasts — every breath is borrowed photosynthesis exhaust." }, { q: "Why do leaves look green?", a: "Chlorophyll absorbs red + blue and reflects green; accessory pigments catch some leftovers (autumn reveals them)." }, { q: "Why do hot dry days slow C3 plants but not teff?", a: "C3s close stomata → low CO₂ → RuBisCO wastes energy on photorespiration; teff's C4 pump keeps bundle-sheath CO₂ high anyway." }] } }
  ],
  questions: [
    { type: "mcq", q: "The raw materials of photosynthesis are:", options: ["Glucose + O₂", "CO₂ + H₂O", "O₂ + H₂O", "CO₂ + glucose"], answer: 1, difficulty: 1, explanation: "Carbon dioxide + water, driven by light → sugar + oxygen." },
    { type: "short", q: "The green pigment that absorbs light energy is ____.", answer: "chlorophyll", difficulty: 1, explanation: "Chlorophyll a — in thylakoid membranes." },
    { type: "mcq", q: "The O₂ released in photosynthesis comes from:", options: ["CO₂", "Glucose", "H₂O", "RuBP"], answer: 2, difficulty: 3, explanation: "Photolysis of water — proven with ¹⁸O isotope experiments." },
    { type: "mcq", q: "The Calvin cycle takes place in the:", options: ["Thylakoid membrane", "Stroma", "Cytoplasm", "Mitochondria"], answer: 1, difficulty: 2, explanation: "Stroma fluid holds the fixation enzymes." },
    { type: "concept", q: "A plant gets plenty of light and water but grows poorly in a sealed, cooled box. Name the likely limiting factor and why.", answer: "co2 low|carbon dioxide limited|temperature too low enzyme", difficulty: 2, explanation: "Sealed = CO₂ runs out; cold = enzyme rates drop — either caps the rate despite light." },
    { type: "tf", q: "Dark reactions occur only at night.", answer: false, difficulty: 2, explanation: "They run by day using ATP/NADPH from light reactions; they just don't use photons directly." },
    { type: "calc", q: "How many CO₂ molecules must enter the Calvin cycle to export ONE G3P (3-carbon sugar)?", answer: "3", difficulty: 3, explanation: "Each CO₂ adds 1 carbon; 3 turns per G3P exported.", tolerance: 0.1 },
    { type: "short", q: "The enzyme that fixes CO₂ onto RuBP is abbreviated ____.", answer: "rubisco", difficulty: 2, explanation: "Ribulose bisphosphate carboxylase — Earth's most abundant protein." },
    { type: "mcq", q: "Which is NOT a product of the light-dependent reactions?", options: ["ATP", "NADPH", "O₂", "Glucose"], answer: 3, difficulty: 2, explanation: "Glucose (G3P) comes from the Calvin cycle, not the light stage." },
    { type: "ordering", q: "Pick the correct Calvin-cycle order:", options: ["Reduction → fixation → regeneration", "Fixation → reduction → regeneration", "Regeneration → reduction → fixation", "Fixation → regeneration → reduction"], answer: [1], difficulty: 3, explanation: "CO₂ fixed to RuBP → reduced by ATP/NADPH → RuBP regenerated." }
  ]
};

/* --- b2-4: Transport in Plants --- */
Lessons["g10-biology-ub2-t4"] = {
  overview: "A 30-metre tree moves hundreds of litres of water upward daily with no pump — using sun-powered transpiration pull and cohesion. Sugars travel the other way in phloem by pressure flow. This lesson covers the xylem highway (transpiration stream), the phloem pipeline (translocation), and the root pressure that tops them off.",
  objectives: [
    "Explain transpiration and the cohesion-tension water column",
    "List factors affecting transpiration rate (light, temp, humidity, wind, water)",
    "Describe mineral uptake: diffusion, active transport, root pressure",
    "Explain phloem translocation by the mass-flow (pressure-flow) mechanism",
    "Distinguish xylem vs phloem transport in direction, mechanism and living status"
  ],
  simple: "Water's journey: soil → root hairs → cortex → xylem → stem → leaf → evaporates from mesophyll out the stomata (TRANSPIRATION). That evaporation creates tension (negative pressure) that pulls the whole water column up — possible because water molecules stick together (cohesion) and to walls (adhesion). It's a sun-powered elevator: no energy spent by the plant. Sugar's journey: leaves (source) load sucrose into phloem → water osmoses in → high pressure pushes sap toward roots/fruits (sinks) where sugar is unloaded — the mass-flow hypothesis. Xylem = one-way up, dead pipes; phloem = source-to-sink, living tubes, both directions.",
  detailed: `<p><b>Root water uptake:</b> Soil water (dilute) → root hair cytoplasm (concentrated) by OSMOSIS; apoplast (cell walls) and symplast (cytoplasm-via-plasmodesmata) routes to endodermis, where the Casparian strip forces symplast crossing (selective control) → into xylem. ROOT PRESSURE: minerals actively pumped into stele lower its water potential → water follows → pushes xylem sap up modestly (guttation droplets on grass tips at dawn prove it).</p>
<p><b>Transpiration pull (cohesion-tension theory, Dixon):</b> Water evaporates from moist mesophyll walls into air spaces (evaporation from cell walls, not 'boiling'), exits stomata. Each escaping molecule tugs the next via hydrogen-bond COHESION; adhesion to lignified xylem walls stops collapse; narrow vessels resist cavitation. Tension (negative pressure) pulls the continuous column — tall trees lift water >100 m with zero metabolic cost. Transpiration stream also delivers minerals and cools the leaf (evaporative cooling — a leaf in full sun without transpiration would overheat by ~10-15 °C).</p>
<p><b>Transpiration factors:</b> light (stomata open → faster), temperature (faster evaporation), humidity (gradient steeper in dry air → faster), wind (removes boundary-layer humid air → faster), water availability (roots short → stomata close via guard-cell ABA signals). Wilting = loss of turgor when transpiration exceeds uptake.</p>
<p><b>Mineral transport:</b> N (protein/chlorophyll — deficiency: yellow old leaves), P (ATP/DNA — stunted, purple), K (enzyme activation/stomata — scorched leaf edges), Mg (chlorophyll centre — interveinal chlorosis), Ca (cell walls — tip/fruit rot), Fe (chlorophyll synthesis — young-leaf yellowing). Uptake: ions as dissolved salts; many taken up by ACTIVE TRANSPORT against gradient (root hairs burn ATP).</p>
<p><b>Phloem translocation (Münch pressure-flow):</b> Source (leaf) companion cells actively load sucrose into sieve tubes → water potential drops → xylem water osmoses in → high hydrostatic pressure. At sink (root, fruit, growing tip) sucrose is UNloaded → water leaves → low pressure. Pressure gradient drives bulk mass flow (≈1 m/h). Evidence: sieve-plate pores, aphid-styled experiments (sap spurts under pressure), bidirectional flow in different tubes, metabolic inhibitors stop loading. Unlike xylem: living, uses ATP (at loading), moves both directions seasonally (spring: sugar DOWN from stem to new shoots).</p>`,
  keyTerms: [
    { term: "Transpiration", def: "Water-vapour loss from leaf surfaces via stomata — the pull engine." },
    { term: "Cohesion / adhesion", def: "Water-water sticking / water-wall sticking — keeps the column intact." },
    { term: "Transpiration stream", def: "Continuous soil→root→xylem→leaf→air water flow." },
    { term: "Root pressure", def: "Osmotic push of sap upward from mineral loading (guttation)." },
    { term: "Casparian strip", def: "Endodermal suberin band forcing selective symplast uptake." },
    { term: "Source / sink", def: "Sugar exporter (leaf) / importer (root, fruit, tip)." },
    { term: "Translocation", def: "Phloem transport of sucrose solution." },
    { term: "Pressure-flow (Münch)", def: "Osmotically generated pressure pushes phloem sap source→sink." },
    { term: "Turgor / wilting", def: "Cell pressure from water; loss = drooping." },
    { term: "Guttation", def: "Root-pressure water drops at leaf edges (dawn) — not dew." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "A pot plant is sealed in a clear plastic bag; after an hour the bag walls fog with droplets and the plant stops wilting. Explain both effects with transpiration logic.",
      given: "Humidity chamber around leaves.",
      formula: "Humidity gradient controls transpiration.",
      substitution: "Evaporated water saturates the bag → gradient leaf-air collapses → transpiration nearly stops → plant conserves water (no wilting) but also slows its water/mineral stream and leaf cooling.",
      calculation: "Fog = condensed transpired water — direct proof water exits leaves.",
      answer: "High humidity kills the transpiration gradient — the classic 'bag test' shows leaves emit water vapour."
    },
    {
      problem: "Why can a 100 m redwood lift water without any pump, and why must its xylem vessels be NARROW?",
      given: "Cohesion-tension physics.",
      formula: "Tension + column strength.",
      substitution: "Transpiration creates tension pulling an unbroken water column; H-bond cohesion keeps molecules linked, adhesion braces against walls. Narrow tubes: (1) limit cavitation (an air bubble breaks the whole column — narrow tubes resist bubble expansion), (2) increase wall-adhesion support per volume.",
      calculation: "Energy source = the sun evaporating leaf water, not the tree.",
      answer: "Sun-powered tension + water's stickiness; narrow vessels keep the column bubble-proof."
    },
    {
      problem: "Aphids feed by stabbing stylets into sieve tubes; when the aphid is cut away, sap keeps spurting from the stylet for hours. What does this prove about phloem transport?",
      given: "Classic aphid-stilet experiment.",
      formula: "Pressure-flow evidence.",
      substitution: "Continuous spurting = phloem sap under positive hydrostatic PRESSURE (from osmotic loading at source) — exactly what Münch's mass-flow predicts; not capillarity, not active pumping at the sieve tube itself.",
      calculation: "Collect the sap: it's sucrose-rich — confirming sugar loading drives the pressure.",
      answer: "Phloem sap is pushed by pressure generated at the source — direct evidence for mass flow."
    },
    {
      problem: "In spring, maple trees move sugar from stored roots UP to new buds; in summer, leaves send sugar DOWN to roots. How does one phloem system do both?",
      given: "Seasonal source-sink reversal.",
      formula: "Source/sink definition.",
      substitution: "Flow direction is set by WHERE sugar is loaded (source) and unloaded (sink) — in spring storage roots become the source (starch → sugar) and buds the sink; in summer leaves are source, roots sink. Different sieve tubes (or reversed loading) handle each direction.",
      calculation: "Xylem can't do this — it's one-way up only.",
      answer: "Phloem is bidirectional because pressure gradients follow the season's source-sink map."
    },
    {
      problem: "A farmer sees old maize leaves yellowing from the tips inward while veins stay green. Diagnose the likely mineral and justify.",
      given: "Interveinal chlorosis on OLD leaves.",
      formula: "Deficiency symptom patterns (mobile vs immobile).",
      substitution: "N and Mg are PHLOEM-MOBILE: plants rescue old leaves to feed new growth → old leaves yellow first. Interveinal green veins with yellow between = classic Mg (chlorophyll's central atom); uniform yellowing tip-inward = N. Either: N or Mg deficiency; soil test confirms.",
      calculation: "Fix: N fertiliser (urea) or Epsom salts (MgSO₄).",
      answer: "Mobile-nutrient deficiency — Mg or N; the plant cannibalised its old leaves."
    }
  ],
  commonMistakes: [
    "Saying roots 'pump' water to the top — the pull comes from leaves (transpiration); root pressure only assists at night/small plants.",
    "Thinking water evaporates FROM the xylem — it evaporates from mesophyll cell WALLS into air spaces, then exits stomata.",
    "Confusing guttation (root pressure, dawn, mineral water at leaf margins) with dew (condensed atmospheric water).",
    "Claiming phloem transports 'up' — it's source→sink, which can be up OR down.",
    "Saying xylem transport needs ATP from the plant — the engine is solar evaporation; xylem cells are dead.",
    "Believing stomata open when water is scarce — they CLOSE (ABA signal) to save water, sacrificing CO₂ intake.",
    "Mixing cohesion (water-water) with adhesion (water-surface).",
    "Thinking minerals travel in phloem to the shoot — mineral stream rides the XYLEM upward (phloem recycles some mobile ones down→up)."
  ],
  applications: [
    "Irrigation timing: transpiration peaks midday — drip at dawn/dusk reduces losses; mulching keeps soil humidity gradient shallow.",
    "Wilting as a diagnostic: midday wilt (recovering) vs permanent wilt (soil dry or root damage) guides watering.",
    "Transplant shock: root hairs are torn → uptake crippled → shade + water plants until new hairs grow.",
    "Maple syrup = tapping phloem/xylem sugar flow in spring — pressure-flow monetised.",
    "Grafting alignment of vascular tissue (cambium) reconnects xylem+phloem highways — nursery success.",
    "Ethiopian highland soils often N-deficient: teff/wheat fertiliser recommendations (NPS blends) target exactly these transport/deficiency patterns."
  ],
  summary: "Water: osmosis into root hairs → Casparian-selected → xylem → transpiration pull (cohesion-tension, sun-powered, narrow vessels prevent cavitation) + root pressure assist. Minerals ride the xylem stream; deficiencies show mobile-first in old leaves. Sugar: source loads sucrose → osmotic pressure → mass flow to sinks (Münch) — living, bidirectional, ATP at loading. Xylem = dead, one-way up; phloem = living, source→sink.",
  visuals: [
    { type: "flowChart", config: { steps: ["Soil water → root hair (osmosis)", "Cortex → endodermis (Casparian gate)", "Xylem up the stem", "Leaf veins → mesophyll walls", "Evaporation into air spaces", "Vapour out stomata = transpiration"], title: "The Transpiration Stream" } },
    { type: "comparison", config: { title: "Xylem vs Phloem Transport", left: { name: "Xylem", items: ["Water + minerals", "One-way: root → leaf", "Driven by transpiration pull", "Dead tubes", "No ATP by plant"] }, right: { name: "Phloem", items: ["Sucrose solution", "Source → sink (both ways)", "Osmotic pressure flow", "Living sieve tubes", "ATP for loading"] } } },
    { type: "barChart", config: { labels: ["Dark", "Dim", "Bright", "Full sun"], title: "Transpiration Rate vs Light (relative)", unit: "arb. units", values: [5, 20, 60, 100] } }
  ],
  questions: [
    { type: "mcq", q: "The main force pulling water up a tall tree is:", options: ["Root pumping", "Transpiration tension", "Stem muscles", "Leaf pressure"], answer: 1, difficulty: 1, explanation: "Evaporation at leaves creates tension on the cohesive water column." },
    { type: "short", q: "Water molecules sticking to each other is called ____.", answer: "cohesion", difficulty: 1, explanation: "Cohesion (H-bonds) keeps the xylem column unbroken." },
    { type: "mcq", q: "Phloem sap moves:", options: ["Only upward", "Only downward", "Source to sink, either direction", "By transpiration only"], answer: 2, difficulty: 2, explanation: "Pressure-flow follows loading/unloading sites — seasonal direction changes." },
    { type: "concept", q: "Why do stomata close during drought even though it starves the leaf of CO₂?", answer: "save water priority|turgor loss|ABA closes", difficulty: 2, explanation: "Water loss would kill faster than CO₂ shortage; guard cells lose turgor (ABA signal) and seal the pores." },
    { type: "tf", q: "Guttation droplets are the same as morning dew.", answer: false, difficulty: 2, explanation: "Guttation = xylem sap pushed by root pressure (mineral water from inside); dew = condensed air." },
    { type: "mcq", q: "The Casparian strip forces water/minerals to cross cell membranes in the:", options: ["Epidermis", "Endodermis", "Cortex", "Stele xylem"], answer: 1, difficulty: 3, explanation: "Suberin band blocks the apoplast route — selective control point." },
    { type: "short", q: "Yellowing of OLD leaves with green veins suggests a deficiency of which mobile element (symbol)?", answer: "mg|magnesium", difficulty: 3, explanation: "Mg is chlorophyll's centre and phloem-mobile — old leaves are cannibalised first; interveinal pattern." },
    { type: "concept", q: "How does an aphid stylet experiment support the pressure-flow theory?", answer: "sap spurts under pressure|positive pressure|osmotic loading", difficulty: 3, explanation: "Sap keeps flowing from the severed stylet — phloem is under positive hydrostatic pressure from source osmotic loading." },
    { type: "ordering", q: "Pick the correct water pathway:", options: ["Root hair → cortex → endodermis → xylem → leaf", "Xylem → root hair → leaf → cortex", "Leaf → phloem → root hair → soil", "Cortex → root hair → xylem → leaf"], answer: [0], difficulty: 2, explanation: "Soil → hair → cortex → endodermis gate → xylem highway → leaf." }
  ]
};
