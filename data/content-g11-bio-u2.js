/* Content: Grade 11 Biology — Unit 2: Animal Diversity (6 topics) */
window.Lessons = window.Lessons || {};

Lessons["g11-biology-ub2-t1"] = {
  overview: "What makes an animal an animal? The defining traits of the kingdom Animalia — multicellular heterotrophy, no cell walls, collagen, blastula development, most with nerves and muscles — and the body plans (symmetry, tissues, cavities) that organize the whole diversity.",
  objectives: [
    "List the characteristics that distinguish animals from plants, fungi and protists",
    "Explain radial vs bilateral symmetry and its biological meaning",
    "Define diploblastic and triploblastic organization",
    "Describe the three body-cavity plans: acoelomate, pseudocoelomate, coelomate",
    "Relate body plans to the major animal phyla"
  ],
  simple: "Animals are multicellular, they eat other organisms (heterotrophs with internal digestion), their cells have NO walls (which is why animals are flexible and why collagen — the structural protein — matters), and every animal develops from a blastula, a hollow ball of early embryos cells. Almost all can move at some life stage, and almost all have nerve and muscle tissue. Beyond these shared traits, animals are sorted by their body plan — the architectural blueprint. Symmetry: radial (body arranged around a central axis like a wheel — cnidarians: hydra, jellyfish; good for sessile/slow predators that meet prey from any direction) vs bilateral (a left and right mirror half — nearly all animals including humans; goes with cephalization: a head with sense organs and a brain at the front, the body moving directionally). Tissue layers: diploblastic animals (cnidarians) build from two embryonic layers (ectoderm + endoderm); triploblastic animals add a middle layer, mesoderm — the layer that makes muscles, and most organs. Body cavity: between gut and body wall, triploblasts may have none (acoelomate — flatworms: solid tissue packing), a partial fluid-filled space (pseudocoelomate — roundworms: fluid acts as a hydrostatic skeleton), or a fully mesoderm-lined cavity (coelomate — annelids to chordates: the cavity cushions organs, lets them grow and move independently, and powers a hydrostatic skeleton). The coelom is a big evolutionary deal — it's why complex, active animals are possible. Finally: most animals are protostomes (blastopore becomes the mouth — molluscs, worms, arthropods) vs deuterostomes (blastopore becomes the anus — echinoderms, chordates).",
  detailed: "<p><b>Kingdom diagnostics.</b> Animalia vs Plantae: no chloroplasts, no cellulose wall, motile gametes often flagellated, storage carbohydrate is glycogen not starch. vs Fungi: fungi digest externally and absorb (absorptive heterotrophy) with chitin walls; animals ingest and digest internally in a cavity. vs Protista: animals are strictly multicellular with developmental differentiation (the blastula stage is unique to animals). No cell walls → tissues can be flexible, contractile, and fast — the physical basis of nervous and muscular systems.</p><p><b>Symmetry.</b> Asymmetry: sponges (no regular body plan). Radial: cnidarians and adult echinoderms (secondarily radial from bilateral larvae) — the body has oral/aboral axes, multiple planes of symmetry; suits attached or drifting predators. Bilateral: one plane (sagittal) divides mirror halves → defines anterior/posterior, dorsal/ventral — the geometry of directed movement, and with it cephalization: concentration of sensory structures and a processing center (ganglia/brain) at the leading end. Bilateral + cephalization = the active-predator package that dominates the animal kingdom.</p><p><b>Germ layers.</b> Ectoderm → epidermis, nervous system. Endoderm → gut lining, associated organs (liver, lungs). Mesoderm → muscle, skeleton, circulatory system, excretory organs, gonads — the 'organ layer.' Diploblasty (two layers + mesoglea) limits cnidarians to tissue-grade organization; triploblasty enables organ-system grade.</p><p><b>Body cavities.</b> Acoelomate: flatworms — space between gut and body wall filled with mesenchyme; organs sit in solid tissue, limiting size and complexity (also why flatworms are flat — diffusion distances). Pseudocoelomate: roundworms — cavity is a persistent blastocoel, NOT lined by mesoderm; fluid under pressure = hydrostatic skeleton (the worm whips because muscles work against incompressible fluid). Coelomate: true cavity fully lined by mesodermal peritoneum; organs suspended on mesenteries, can grow and churn independently of the body wall; powers advanced hydrostatic skeletons (earthworm) and in vertebrates becomes body cavities (pericardial, pleural, peritoneal). Functions of the coelom: cushioning, organ suspension, hydrostatic skeleton, circulatory/excretory roles (fluid transports wastes), space for gametes.</p><p><b>Protostome vs deuterostome.</b> Embryological split: in protostomes ('mouth-first') the blastopore → mouth, cleavage is spiral/determinate, coelom forms by schizocoely (solid mesoderm splits). In deuterostomes ('second mouth') blastopore → anus, radial/indeterminate cleavage (basis of identical twins!), coelom by enterocoely (gut pouches). Protostomia: Ecdysozoa (molting — arthropods, nematodes) + Lophotrochozoa (annelids, molluscs, flatworms). Deuterostomia: echinoderms, hemichordates, chordates. These are the deep branches of the animal tree — body plans are phylogeny made visible.</p>",
  keyTerms: [
    { term: "Heterotroph", def: "organism that ingests organic food for energy" },
    { term: "Blastula", def: "hollow embryonic cell ball — unique to animals" },
    { term: "Cephalization", def: "head-end concentration of senses and nervous tissue" },
    { term: "Diploblastic", def: "two germ layers (ecto- + endoderm)" },
    { term: "Triploblastic", def: "three germ layers including mesoderm" },
    { term: "Coelom", def: "mesoderm-lined body cavity between gut and wall" }
  ],
  workedExamples: [
    {
      problem: "A new specimen: bilateral, triploblastic, no body cavity, dorsoventrally flattened. Assign it and justify.",
      given: "traits",
      formula: "body-plan logic",
      substitution: "acoelomate + flat = flatworm (Platyhelminthes); the flatness compensates for no cavity/circulation — diffusion serves all cells",
      calculation: "plan matches constraints",
      answer: "Platyhelminthes — acoelomate triploblast; flatness is its gas-exchange solution"
    },
    {
      problem: "Why does the absence of cell walls count as a defining animal feature, not a deficiency?",
      given: "structural logic",
      formula: "physics of movement",
      substitution: "no rigid wall → cells can change shape → muscle contraction, nerve conduction across synapses, phagocytosis, embryonic folding all become possible",
      calculation: "flexibility enables complexity",
      answer: "Animal architecture trades armor for motility — collagen matrices give strength without rigidity"
    },
    {
      problem: "Compare the hydrostatic skeleton of a nematode (pseudocoelom) and an earthworm (coelom).",
      given: "two cavities",
      formula: "fluid + muscle mechanics",
      substitution: "both: incompressible fluid + antagonistic muscles = shape change; nematode: single cavity, only longitudinal muscles → whip-like thrash; earthworm: compartmentalized coelom + circular AND longitudinal muscles → peristaltic crawling with setae grip",
      calculation: "compartmentalization = control",
      answer: "Same principle, different precision — the true coelom's septa allow segment-by-segment movement"
    },
    {
      problem: "Explain why radial symmetry suits a sea anemone but bilateral suits a wolf.",
      given: "lifestyle-geometry",
      formula: "sessile vs mobile",
      substitution: "anemone: attached, prey arrives from any direction → sensory/cnidocyte ring around the oral disc; wolf: actively hunts in one direction → head with eyes, ears, jaws leads, streamlined body follows",
      calculation: "form follows feeding",
      answer: "Radial = meet the world; bilateral = chase it"
    },
    {
      problem: "Identify the developmental evidence that humans are deuterostomes.",
      given: "embryology",
      formula: "blastopore fate",
      substitution: "the primitive streak/blastopore region → anus forms first; mouth appears later; plus radial indeterminate cleavage (why identical twins occur) and enterocoelous mesoderm",
      calculation: "our embryos carry the signature",
      answer: "Anus-before-mouth development + indeterminate cleavage = deuterostome heritage shared with starfish"
    }
  ],
  commonMistakes: [
    "'All animals move' — sponges, corals, tunicates (adults) are largely sessile; motility is at some stage",
    "Confusing radial symmetry with 'no head' — radial animals have oral/aboral axes but no cephalization",
    "Thinking the pseudocoelom is 'just a smaller coelom' — it's not mesoderm-lined; different origin",
    "Believing mesoderm = muscle only — it's skeleton, circulation, excretion, gonads too",
    "Placing adult echinoderms with 'radial = primitive' — they're secondarily radial deuterostomes",
    "Calling sponges 'diploblastic' — they lack true tissues entirely (cellular grade)",
    "Assuming bilateral always means complex — some parasites secondarily simplified"
  ],
  applications: [
    "Medical: recognizing acoelomate flatworms (tapeworms, flukes) and pseudocoelomate roundworms guides parasite diagnosis",
    "Pest control: nematode hydrostatic skeletons are targeted by nematicides disrupting molting",
    "Developmental biology: deuterostome cleavage explains identical twinning and stem-cell models",
    "Fisheries: body-plan traits (coelom, symmetry) underpin the phylum keys used to sort catch",
    "Evolution teaching: the Ethiopian Rift's invertebrate fauna illustrates radial vs bilateral life modes"
  ],
  summary: "Animals are multicellular, wall-less, ingestive heterotrophs that develop through a blastula. Their diversity is organized by body plan: symmetry (radial = meet prey from all sides; bilateral + cephalization = active pursuit), germ layers (diploblastic tissue grade vs triploblastic organ grade), and body cavity (acoelomate solid, pseudocoelomate fluid-filled, coelomate mesoderm-lined — the cavity that enabled complex active bodies). The protostome/deuterostome split completes the deep tree.",
  visuals: [
    { type: "comparison", config: { title: "Radial vs bilateral", left: { name: "Radial", items: ["wheel around axis", "no head", "sessile/drifting", "cnidarians"] }, right: { name: "Bilateral", items: ["mirror halves", "cephalization", "directed movement", "most animals"] } } },
    { type: "flowChart", config: { title: "Body cavity plans", steps: [{ label: "Acoelomate", detail: "solid — flatworm" }, { label: "Pseudocoelomate", detail: "fluid — roundworm" }, { label: "Coelomate", detail: "lined cavity — earthworm to human" }] } },
    { type: "mindMap", config: { center: "Animal traits", branches: [{ label: "Cells", items: ["no wall", "collagen", "glycogen"] }, { label: "Feeding", items: ["ingest", "internal digestion"] }, { label: "Development", items: ["blastula", "germ layers"] }] } }
  ],
  questions: [
    { type: "mcq", q: "Which is NOT a characteristic of animals?", options: ["multicellular", "cellulose cell walls", "heterotrophic", "blastula stage"], answer: 1, difficulty: 1, explanation: "Animals lack cell walls entirely" },
    { type: "mcq", q: "The germ layer that forms muscles is:", options: ["ectoderm", "endoderm", "mesoderm", "mesoglea"], answer: 2, difficulty: 1, explanation: "Mesoderm — the middle layer" },
    { type: "mcq", q: "A body cavity NOT lined by mesoderm is a:", options: ["coelom", "pseudocoelom", "blastocoel", "peritoneum"], answer: 1, difficulty: 2, explanation: "Pseudocoelom — false cavity" },
    { type: "mcq", q: "Cephalization is associated with:", options: ["radial symmetry", "bilateral symmetry", "asymmetry", "diploblasty"], answer: 1, difficulty: 1, explanation: "A head leads directional movement" },
    { type: "tf", q: "All adult animals are capable of active movement.", answer: false, difficulty: 2, explanation: "Sponges, corals, adult tunicates are sessile" },
    { type: "tf", q: "In deuterostomes the blastopore becomes the anus.", answer: true, difficulty: 2, explanation: "'Second mouth' — mouth forms later" },
    { type: "short", q: "Structural protein unique to animals that replaces the cell wall's role:", answer: "collagen", difficulty: 2, explanation: "Collagen" },
    { type: "calc", q: "A flatworm cell is never farther than 0.5 mm from the surface. If thickness doubles, diffusion distance changes by what factor?", answer: "2|two", difficulty: 2, explanation: "Distance from surface scales with thickness" },
    { type: "concept", q: "Why is the coelom considered an enabler of larger, more active animals?", answer: "organ suspension|cushioning|independent growth|hydrostatic skeleton|circulation", difficulty: 3, explanation: "The lined cavity lets organs grow and move independently of the body wall, cushions them, provides a fluid skeleton for powerful muscle action, and can distribute nutrients/wastes — removing the size and activity limits of solid-bodied acoelomates" },
    { type: "concept", q: "Explain why bilateral symmetry and predation evolved together.", answer: "directional movement|head|senses forward|streamlining|pursuit", difficulty: 3, explanation: "Moving head-first through the environment favors concentrating sensors and feeding structures at the front (cephalization) and streamlining the body — the same geometry that makes pursuit predation effective, so the two innovations reinforce each other" }
  ]
};

Lessons["g11-biology-ub2-t2"] = {
  overview: "The two great halves of the animal kingdom: invertebrates — the 95% majority (sponges to molluscs to arthropods) — and vertebrates — the notochord-to-backbone chordates (fish to mammals) — with the defining traits and representatives of each major phylum/class.",
  objectives: [
    "Contrast invertebrates and vertebrates at the level of the notochord/vertebral column",
    "Summarize the major invertebrate phyla with one diagnostic trait each",
    "List the five vertebrate classes with their key adaptations",
    "Explain why arthropods dominate animal diversity",
    "Trace the water-to-land transitions in vertebrates"
  ],
  simple: "About 95–97% of animal species have no backbone — they're invertebrates. The major phyla, simplest first: Porifera (sponges — no tissues, filter through pores), Cnidaria (hydra, jellyfish, corals — stinging cnidocytes, radial), Platyhelminthes (flatworms — acoelomate; planaria, tapeworms, flukes), Nematoda (roundworms — pseudocoelom, cosmopolitan; Ascaris, hookworm), Mollusca (snails, clams, octopus — muscular foot + mantle shell; the octopus is the smartest invertebrate), Annelida (segmented worms — earthworm, leech), Arthropoda (exoskeleton + jointed legs — insects, spiders, crustaceans; MORE THAN HALF of all animal species are insects), Echinodermata (starfish — radial water-vascular system; deuterostome!). Arthropods win at life because their jointed exoskeleton + segmented bodies + often wings allow every habitat and diet, and their small size lets them exploit micro-worlds. Vertebrates (phylum Chordata — notochord, dorsal hollow nerve cord, pharyngeal slits, post-anal tail at some stage) split into five classes: Pisces (fish — fins, gills, lateral line; the Ethiopian Rift's endemic Labeobarbus flock), Amphibia (frogs, salamanders — dual water/land life, moist skin, metamorphosis), Reptilia (lizards, snakes, crocodiles — amniotic egg + scales = full land independence; the Nile crocodile), Aves (birds — feathers, wings, endothermy; Ethiopia has 850+ species, 17 endemic like the Rouget's rail), Mammalia (hair, milk, endothermy — from the endemic Bale monkey to us). The amniotic egg and (later) lactation are the two reproductive revolutions.",
  detailed: "<p><b>Invertebrate tour.</b> Porifera: cellular grade, choanocyte collars drive filter flow, spicules/spongin skeleton — the 'living sponges' of the Red Sea and Rift lakes. Cnidaria: tissue grade, cnidocytes (nematocyst sting), polyp (sessile) vs medusa (mobile) body forms, extracellular + intracellular digestion in a gastrovascular cavity. Platyhelminthes: organ-system grade, protonephridia (flame cells), most hermaphroditic; parasitic lineages (Cestoda tapeworms, Trematoda flukes — Schistosoma causes bilharzia, a real Ethiopian health issue) show secondary simplification. Nematoda: complete gut (mouth→anus — a tube-within-a-tube upgrade), tough cuticle molted under pressure (ecdysis — Ecdysozoa), pseudocoelom hydrostatic skeleton; free-living (soil nutrient cycling) and parasitic (Ascaris, Wuchereria — elephantiasis, hookworm). Mollusca: mantle/shell/foot/visceral mass/radula; classes Gastropoda (snails — also the intermediate host of bilharzia's snail!), Bivalvia (filter clams), Cephalopoda (octopus, squid — closed circulation, large brain, camera eyes, chromatophore camouflage — invertebrate intelligence peak). Annelida: true coelom, metamerism (repeated segments — setae, ganglia, nephridia per segment), closed circulation; earthworms as ecosystem engineers (Darwin's verdict), leeches' anticoagulant hirudin (modern medicine's blood-flow drug inspiration). Arthropoda: tagmosis (segments fused into head/thorax/abdomen), chitinous exoskeleton molt (ecdysis), jointed appendages; subphyla: Chelicerata (spiders, scorpions — 8 legs, no antennae), Crustacea (crabs, crayfish — biramous legs, 2 antennae), Myriapoda (centipedes, millipedes), Hexapoda (insects — 6 legs, most with wings — the only invertebrates to fly). Echinodermata: water-vascular system with tube feet, calcareous endoskeleton, radial adults/bilateral larvae, astonishing regeneration.</p><p><b>Chordate/vertebrate organization.</b> Chordata synapomorphies: notochord, dorsal hollow nerve cord, pharyngobranchial slits, endostyle/thyroid, post-anal tail. Vertebrata: notochord replaced by vertebrae + cranium; neural crest cells ('the fourth germ layer') build jaws, face, pigment, peripheral nerves. Classes: Osteichthyes (bony fish — swim bladder, operculum, scales; the Rift lakes' Labeobarbus species flock = adaptive radiation textbook; catfish Clarias); Amphibia — the water-to-land pioneers: lungs + moist skin respiration, double circulation, gelatinous eggs need water, metamorphosis (tadpole→frog); Reptilia — the amniote breakthrough: shell + internal fertilization + dry scales + thoracic breathing freed reproduction from water (the first truly terrestrial vertebrates); Aves — endothermy + flight: feathers (insulation + airfoils), pneumatic bones, air sacs (unidirectional flow — the most efficient lungs of any vertebrate), high metabolic rate; Mammalia — endothermy + lactation + hair: three middle-ear bones, differentiated teeth (heterodont), diaphragm, large neocortex; three reproductive modes — monotremes (egg-laying), marsupials (pouch), placentals (internal nourishment via placenta). Ethiopia's mammals: endemic Bale monkey, Ethiopian wolf (canid — the world's rarest), gelada, walie ibex.</p>",
  keyTerms: [
    { term: "Invertebrate", def: "animal without a vertebral column (~97% of species)" },
    { term: "Cnidocyte", def: "stinging cell — the cnidarian diagnostic" },
    { term: "Ecdysis", def: "molting of the cuticle (Ecdysozoa)" },
    { term: "Metamerism", def: "repeated body segments (annelids, arthropods, vertebrates)" },
    { term: "Amniotic egg", def: "shell + membranes — reproduction free of water" },
    { term: "Neural crest", def: "embryonic cell population building jaws, face, PNS" }
  ],
  workedExamples: [
    {
      problem: "Key out: soft body, external shell, muscular foot, radula.",
      given: "traits",
      formula: "phylum diagnosis",
      substitution: "mantle + shell + foot + radula = Mollusca; with a single coiled shell + head tentacles → gastropod (snail)",
      calculation: "class-level ID",
      answer: "Phylum Mollusca, class Gastropoda"
    },
    {
      problem: "A worm-like animal has segments, setae, and a true coelom. Annelid or nematode? Give three checks.",
      given: "two candidates",
      formula: "metamerism + cavity + appendages",
      substitution: "annelid: septa/segments visible, setae, closed circulation; nematode: unsegmented, no setae, cuticle molted, pseudocoelom",
      calculation: "segmentation decides",
      answer: "Annelid — segmentation + setae + true coelom are the annelid triad"
    },
    {
      problem: "Explain why insects are the only invertebrates that fly and why that matters for diversity.",
      given: "wing + exoskeleton",
      formula: "structural opportunity",
      substitution: "exoskeletal thorax provides anchor points for flight muscles; small size + light chitin wings = cheap flight; flight → dispersal, escape, new niches, host-plant specialization → speciation",
      calculation: "wings = radiation engine",
      answer: "Jointed exoskeleton made wings possible; flight drove the insect explosion (~1 M described species)"
    },
    {
      problem: "Order the vertebrate land-colonization steps with their adaptations.",
      given: "fish → amphibian → reptile",
      formula: "constraint removal",
      substitution: "fish: fins/lateral line in water; amphibian: limbs + lungs but eggs/skin still need water; reptile: amniotic egg + dry skin + internal fertilization = full independence",
      calculation: "each step removes one water tether",
      answer: "Limbs, then lungs, then the amniotic egg — reproduction was the last chain to break"
    },
    {
      problem: "The Rift lake Labeobarbus flock: 15+ species from one ancestor. Which invertebrate/vertebrate principle does it show?",
      given: "adaptive radiation",
      formula: "ecological release",
      substitution: "isolated lake + empty niches + rapid speciation (jaw/mouth morphologies for different foods) — vertebrate evolution in action, like Darwin's finches",
      calculation: "speciation rate visible",
      answer: "Adaptive radiation within vertebrates — the same process that built most fish diversity"
    }
  ],
  commonMistakes: [
    "'Invertebrate' treated as a taxonomic group — it's a paraphyletic convenience label, not a clade",
    "Calling spiders 'insects' — 8 legs, no antennae, 2 body regions = arachnid",
    "Thinking worms are all one kind — flatworms, roundworms and segmented worms are three different phyla",
    "Believing all fish have the same skeleton — cartilaginous (sharks) vs bony fish differ fundamentally",
    "Amphibians 'evolved into reptiles' — both lineages share amniote ancestry; amphibians are a surviving branch",
    "Octopus 'bonelessness = simple' — cephalopods have large brains, camera eyes and closed circulation",
    "Sponges called 'simple animals with tissues' — they have NO true tissues at all"
  ],
  applications: [
    "Public health: snail intermediate hosts of Schistosoma (bilharzia) — breaking the cycle needs mollusc ecology",
    "Agriculture: earthworms as soil-fertility indicators; insect pollination underpins crop yields",
    "Fisheries: Labeobarbus and Clarias management in Rift lakes — vertebrate diversity as food security",
    "Forensic entomology: blowfly development stages estimate time of death — insects as evidence",
    "Biomimetics: insect eye optics, cephalopod camouflage, spider silk strength — invertebrate engineering"
  ],
  summary: "Invertebrates — sponges (no tissues), cnidarians (stingers), flatworms (acoelomate), roundworms (pseudocoelom), molluscs (mantle + foot), annelids (segments + coelom), arthropods (exoskeleton + jointed legs; insects alone >half of animal species) and echinoderms (water-vascular) — hold ~97% of animal species. Vertebrates, the chordate branch with backbones, run fish → amphibian → reptile → bird/mammal, with the amniotic egg, feathers/endothermy and lactation as the landmark innovations. Body-plan logic explains who dominates where.",
  visuals: [
    { type: "flowChart", config: { title: "Invertebrate complexity ladder", steps: [{ label: "Porifera", detail: "no tissues" }, { label: "Cnidaria", detail: "tissues + sting" }, { label: "Platy/Nema", detail: "organs; cavities" }, { label: "Annelid/Mollusc", detail: "coelom, heads" }, { label: "Arthropoda", detail: "exoskeleton, flight" }] } },
    { type: "comparison", config: { title: "Arthropod vs vertebrate success", left: { name: "Arthropoda", items: ["exoskeleton + molt", "small + jointed", "wings (insects)", "~80% of species"] }, right: { name: "Vertebrata", items: ["endoskeleton grows", "large active bodies", "jaws + brains", "dominant megafauna"] } } },
    { type: "mindMap", config: { center: "Vertebrates", branches: [{ label: "Water", items: ["fish — gills/fins"] }, { label: "Both", items: ["amphibia — moist skin"] }, { label: "Land", items: ["reptile — amniote", "bird — feather", "mammal — milk"] }] } }
  ],
  questions: [
    { type: "mcq", q: "The largest animal phylum by species number is:", options: ["Mollusca", "Arthropoda", "Chordata", "Nematoda"], answer: 1, difficulty: 1, explanation: "Arthropods — insects alone ~1 M species" },
    { type: "mcq", q: "The chordate feature replaced by vertebrae in adults:", options: ["tail", "notochord", "nerve cord", "slits"], answer: 1, difficulty: 1, explanation: "The notochord becomes the vertebral column" },
    { type: "mcq", q: "Which made reptile land-independence possible?", options: ["scales only", "amniotic egg", "claws", "endothermy"], answer: 1, difficulty: 2, explanation: "Shell + membranes freed reproduction from water" },
    { type: "mcq", q: "Starfish belong to:", options: ["Cnidaria", "Echinodermata", "Mollusca", "Annelida"], answer: 1, difficulty: 1, explanation: "Echinoderms — water-vascular, deuterostome" },
    { type: "tf", q: "All invertebrates are cold-blooded.", answer: true, difficulty: 2, explanation: "Endothermy evolved only within vertebrates (birds/mammals)" },
    { type: "tf", q: "Cephalopods are the most neurologically complex invertebrates.", answer: true, difficulty: 1, explanation: "Octopus/squid — large brains, camera eyes" },
    { type: "short", q: "Stinging cells of cnidarians:", answer: "cnidocytes", difficulty: 1, explanation: "Cnidocytes (nematocysts)" },
    { type: "short", q: "The mollusc rasping tongue-like organ:", answer: "radula", difficulty: 2, explanation: "Radula" },
    { type: "calc", q: "~1.5 M described animal species, ~97% invertebrate. How many invertebrate species described?", answer: "1455000|~1.45 million", difficulty: 2, explanation: "1.5 M × 0.97 ≈ 1.45 M" },
    { type: "concept", q: "Why is the exoskeleton both the arthropod's greatest strength and a growth constraint?", answer: "protection|must molt|vulnerable|size limit|respiration", difficulty: 3, explanation: "The chitin cuticle armor-plants, prevents water loss and anchors muscles — but it cannot stretch, so growth requires molting (vulnerable soft hours) and limits maximum size (weight scales with the cube while the exoskeleton's support scales with area); tracheal respiration further caps body size" }
  ]
};

Lessons["g11-biology-ub2-t3"] = {
  overview: "How animals reproduce: asexual strategies (fission, budding, parthenogenesis) vs sexual (gametes, fertilization external/internal), the parental-investment trade-off from thousands of eggs to a single calf, and the courtship, mating and brood-care behaviors seen across the animal kingdom.",
  objectives: [
    "Compare asexual and sexual reproduction with examples",
    "Explain external vs internal fertilization and their trade-offs",
    "Describe oviparous, ovoviviparous and viviparous strategies",
    "Relate gamete size (anisogamy) to sex roles",
    "Summarize courtship, mating systems and parental care"
  ],
  simple: "Asexual reproduction: one parent, genetically identical offspring — binary fission in simple invertebrates, budding in hydra (a miniature pinches off), fragmentation/regeneration in flatworms and sponges, and parthenogenesis ('virgin birth' — unfused eggs develop; in aphids, some lizards and bees' males). Fast and cheap when conditions are good — but zero genetic variety, so a changed environment or one disease can wipe out the whole clone. Sexual reproduction: two parents, gametes fuse (fertilization) → genetically unique offspring — the engine of variation and adaptation, at the cost of finding a mate and only half your genes per offspring. Fertilization: external (aquatic spawners — corals, fish — broadcast millions of gametes into water; cheap eggs, huge losses, needs water and timing) vs internal (land animals — copulation; costly courtship + organs, but protected gametes and higher success — the price of living dry). Three birth strategies: oviparous (eggs laid with yolk — birds, most reptiles, fish), ovoviviparous (eggs hatch inside the mother — some sharks, garter snakes), viviparous (live young nourished by placenta-like structures — most mammals). Gametes define the sexes: small mobile sperm vs large yolk-rich eggs (anisogamy) — the egg is the expensive gamete, which is why females everywhere invest more per offspring and males compete. That asymmetry drives courtship displays (bird-of-paradise dances, the Ethiopian endemic's songs), mating systems (monogamy, polygyny, polyandry), and parental care — from none (sea turtles: 100+ eggs, no care) to extreme (elephants: one calf, years of nursing and protection).",
  detailed: "<p><b>Asexual modes.</b> Fission (symmetric split — lower invertebrates), budding (asymmetric outgrowth — hydra, corals forming colonies), fragmentation + regeneration (planaria: pieces regrow heads/tails; sponges: cells reaggregate!), parthenogenesis (automictic/apomictic — aphids' cyclical parthenogenesis: clones in summer, sexuals in autumn; Komodo dragons and some sharks facultatively; honeybee drones are haploid parthenotes). Advantages: no mate needed, rapid population explosion, preserves a well-adapted genotype. Costs: no recombination → Muller's ratchet (deleterious mutations accumulate), vulnerability to parasites/co-evolution (the Red Queen logic for why sex persists).</p><p><b>Sexual mechanics.</b> Anisogamy: the gamete-size split — eggs carry cytoplasm + yolk (the investment), sperm are minimal motile DNA packets — the root of sex differences in parental investment (Bateman/Trivers theory). External fertilization: requires water, synchrony (coral spawning cued by lunar cycles!), huge gamete numbers, low per-egg survival — r-selection logic. Internal: copulatory organs, courtship to ensure species recognition + receptivity, fewer but better-provisioned gametes, often parental care follows. Fertilization biology: acrosome reaction, cortical block to polyspermy.</p><p><b>Birth strategies.</b> Oviparity: egg + shell/membranes; yolk = all nutrition; protection by nest/camouflage/number (turtles ~100 eggs; birds 1–12 with incubation). Ovoviviparity: retained eggs hatch internally; mother provides protection not nutrition (some sharks — oophagy: the strongest embryo eats siblings!). Viviparity: placental/matrotrophic nourishment — eutherian mammals (the placenta: hemochorial exchange, hormones), marsupials (brief placenta + long lactation). The trade-off axis: offspring number vs offspring quality — r vs K selection: a fish's 100,000 eggs vs an elephant's 4-year interval and 20-year dependency.</p><p><b>Mating systems and care.</b> Monogamy (pair bonds — ~90% of birds; when biparental care is essential or paternity certain), polygyny (one male many females — resource-defense or harem defense: geladas' one-male units; elephant seals), polyandry (rare — sex-role reversed: jacanas), promiscuity. Courtship: species-specific signals (bird-of-paradise plumage, firefly flash codes, frog calls — the Ethiopian endemic's breeding chorus) — selection for detectability and honest quality indicators. Parental care forms: nest building, incubation (birds' brood patch; crocodilian sex-determining temperature), feeding (crop milk in pigeons! lactation in mammals), protection (crocodile guard of the nest and hatchlings), teaching (meerkat pups and scorpions). Brood parasitism as the cheater strategy: the hadohida/Village indigbird — Africa's brood parasite, laying in other birds' nests (Ethiopia's endemic races).</p>",
  keyTerms: [
    { term: "Parthenogenesis", def: "development from an unfertilized egg" },
    { term: "Anisogamy", def: "unequal gametes — small sperm, large eggs" },
    { term: "Oviparous", def: "egg-laying with yolk as sole nutrition" },
    { term: "Viviparous", def: "live birth with maternal nourishment" },
    { term: "Polygyny", def: "one male mates with multiple females" },
    { term: "Brood parasitism", def: "laying eggs in another's nest" }
  ],
  workedExamples: [
    {
      problem: "A hydra population explodes in a warm, food-rich pond with no males present. Explain the mode and why it's optimal here.",
      given: "condition",
      formula: "asexual advantage",
      substitution: "budding — no mate search needed, all individuals reproduce, clones of a genotype already suited to stable conditions",
      calculation: "exponential growth",
      answer: "Budding maximizes growth rate when the environment is good and stable"
    },
    {
      problem: "Coral spawning releases gametes of all species on one post-full-moon night. Analyze the external-fertilization logic.",
      given: "synchrony",
      formula: "numbers + timing",
      substitution: "water can't carry chemical cues far → mass simultaneity raises egg-sperm encounter odds; predator satiation (saturation spawning); lunar/temperature cues align the whole reef",
      calculation: "bet on numbers",
      answer: "External fertilization in open water = broadcast huge numbers at exactly the same time"
    },
    {
      problem: "Compare energy allocation: sea turtle (150 eggs, no care) vs Ethiopian wolf (4–6 pups, 1 yr care). Predict survivorship curves.",
      given: "two strategies",
      formula: "r vs K",
      substitution: "turtle: Type III curve — massive early mortality, a few survive to adulthood; wolf: Type I — high juvenile survival due to care, mortality later",
      calculation: "150 × ~0.001 vs 5 × ~0.5",
      answer: "Number-quantity vs few-quality strategies produce opposite survivorship shapes"
    },
    {
      problem: "Why do females of most species choose mates more carefully than males?",
      given: "anisogamy",
      formula: "investment asymmetry",
      substitution: "eggs are costly (yolk, limited number); sperm cheap and abundant → female's reproductive rate is capped by resources, so a bad mate is expensive; male's is capped by access, so he competes",
      calculation: "Trivers' parental-investment theory",
      answer: "The expensive gamete is the choosy sex — the logic runs from egg size to courtship displays"
    },
    {
      problem: "A female jacana has a territory with three attending males each incubating a clutch. Classify the system.",
      given: "sex-role reversal",
      formula: "mating system ID",
      substitution: "polyandry — female defends resources/mates with multiple males; males provide care (able to reproduce while incubating)",
      calculation: "role reversal proves the investment rule",
      answer: "Polyandry — where female care isn't essential, males become the choosy investor"
    }
  ],
  commonMistakes: [
    "'Asexual = primitive' — many 'higher' invertebrates use it facultatively (aphids); it's a strategy, not a stage",
    "Parthenogenesis confused with self-fertilization (hermaphrodites) — parthenogenesis involves NO fusion of gametes",
    "Thinking internal fertilization = live birth — birds fertilize internally but lay eggs",
    "Ovoviviparity vs viviparity conflated — retained eggs ≠ placental nourishment",
    "Assuming males always compete because they're 'aggressive' — the root is gamete economics, not temperament",
    "Courtship seen as 'just romance' — it's species recognition, synchrony and quality assessment",
    "Brood parasitism treated as rare curiosity — it's a major evolutionary arms race (egg mimicry vs detection)"
  ],
  applications: [
    "Aquaculture: induced spawning of tilapia and Labeobarbus — external-fertilization timing for fingerlings",
    "Pest management: understanding aphid parthenogenetic explosions predicts outbreak seasons",
    "Conservation: Ethiopian wolf's low pup numbers + habitat loss = population recovery math",
    "Livestock: artificial insemination exploits internal-fertilization biology for genetic gain",
    "Medicine: parthenogenesis research informs egg-activation and stem-cell studies"
  ],
  summary: "Animals reproduce asexually (fission, budding, fragmentation, parthenogenesis — fast, clonal, no variation) or sexually (gamete fusion — costly, variable, adaptive). Fertilization is external (water, synchrony, huge numbers) or internal (courtship, protection, higher success). Birth strategies trade egg number against offspring quality: oviparity, ovoviviparity, viviparity. Anisogamy — the expensive egg — explains choosy females, competing males, courtship displays, mating systems and parental-care patterns across the kingdom.",
  visuals: [
    { type: "comparison", config: { title: "Asexual vs sexual", left: { name: "Asexual", items: ["one parent", "clones", "fast, no mate", "no variation"] }, right: { name: "Sexual", items: ["two parents", "unique offspring", "costly courtship", "variation → adaptation"] } } },
    { type: "flowChart", config: { title: "From gamete to young", steps: [{ label: "Courtship", detail: "species + quality" }, { label: "Fertilization", detail: "external or internal" }, { label: "Egg/embryo", detail: "yolk or placenta" }, { label: "Birth", detail: "egg, hatch, live" }, { label: "Care", detail: "none → years" }] } },
    { type: "barChart", config: { title: "Offspring per event (log-ish)", labels: ["Ocean sunfish", "Cod", "Sea turtle", "Wolf", "Elephant"], values: [300000000, 6000000, 150, 5, 1] } }
  ],
  questions: [
    { type: "mcq", q: "Budding is characteristic of:", options: ["planaria", "hydra", "aphids", "sponges"], answer: 1, difficulty: 1, explanation: "Hydra buds miniature clones" },
    { type: "mcq", q: "Parthenogenesis produces offspring from:", options: ["two parents", "unfertilized eggs", "fragmented bodies", "spores"], answer: 1, difficulty: 1, explanation: "Virgin development — no fusion" },
    { type: "mcq", q: "Sharks with eggs hatching inside the mother are:", options: ["oviparous", "ovoviviparous", "viviparous", "ovulate"], answer: 1, difficulty: 3, explanation: "Ovoviviparity — retained eggs, no placenta" },
    { type: "mcq", q: "The anisogamous 'expensive' gamete is:", options: ["sperm", "egg", "both equal", "neither"], answer: 1, difficulty: 2, explanation: "The egg carries cytoplasm and yolk" },
    { type: "tf", q: "Internal fertilization always results in live birth.", answer: false, difficulty: 2, explanation: "Birds and reptiles: internal fertilization, egg-laying" },
    { type: "tf", q: "Coral mass spawning synchronizes with lunar cycles.", answer: true, difficulty: 2, explanation: "Post-full-moon gamete release" },
    { type: "short", q: "Aphids' summer reproduction mode:", answer: "parthenogenesis", difficulty: 2, explanation: "Cyclical parthenogenesis" },
    { type: "calc", q: "A turtle lays 150 eggs; 1 in 1000 survives to breed. Expected breeders per nest?", answer: "0.15|0.15", difficulty: 2, explanation: "150/1000 = 0.15" },
    { type: "concept", q: "Why does external fertilization almost always require an aquatic medium?", answer: "sperm swimming|drying|dilution|timing", difficulty: 3, explanation: "Sperm need water to swim to eggs, gametes desiccate in air, and water carries/dilutes them — so spawning species must release into a fluid medium, usually synchronously, to make encounters likely" },
    { type: "concept", q: "Explain how the egg-sperm cost asymmetry predicts which sex competes and which chooses.", answer: "anisogamy|investment|choosy female|competing male|bateman", difficulty: 3, explanation: "Because eggs are few and costly while sperm are cheap and abundant, female reproductive success is limited by resources (so she must choose quality mates), male success by access to females (so males compete with each other) — Bateman's measurements and Trivers' investment theory confirm the pattern across taxa" }
  ]
};

Lessons["g11-biology-ub2-t4"] = {
  overview: "Animals in the human economy: direct uses (food, fiber, draft, transport), ecosystem services (pollination, pest control, seed dispersal, soil formation), harmful roles (pests, disease vectors, reservoirs), and the sustainable-use balance that keeps animal resources productive.",
  objectives: [
    "Categorize animals' economic importance: productive, services, destructive",
    "Give examples of animals as food, fiber and industrial resources",
    "Explain pollination and biological-control economics",
    "Describe disease vectors and pests with Ethiopian examples",
    "Argue for sustainable use and conservation as economic policy"
  ],
  simple: "Animals earn their keep in the human economy four ways. Direct products: food — fish (Lake Tana's endemic Labeobarbus and the Awash/Rek'y fisheries; aquaculture of tilapia and African catfish), livestock meat/milk/eggs (Ethiopia holds Africa's largest livestock herd — ~60 M+ animals: cattle, sheep, goats, camels, poultry), honey and beeswax (Ethiopia is Africa's top beekeeper — forest honey, white wax export); fiber — wool, silk (sericulture), leather (the historic tanneries — but see the pollution cost below); draft and transport — oxen plough 95% of Ethiopia's farmland, mules and camels move goods, horses in highland culture; industry — shellac, cochineal dye, gelatin, cantharidin medicines, laboratory animals (rats, mice, zebrafish) and even forensic insects. Ecosystem services (free, invisible): pollination — bees, butterflies, birds, bats move 75% of crop flowers (coffee! Ethiopia's wild coffee depends on pollinators); pest control — birds and bats eat insects (a bat colony saves a farm thousands in pesticide); seed dispersal and dung burial — dung beetles bury cattle waste (worth ~$380 M/yr in Australia alone), birds and monkeys plant forests; soil formation — earthworms; nutrient cycling — aquatic invertebrates. Harmful roles: crop pests (quelea birds — millions strong, locust swarms — the 2020 desert locust invasion, rodents, weaver birds on grain), disease vectors — mosquitoes (malaria — still Ethiopia's top killer; Anopheles), tsetse fly (nagana — animal trypanosomiasis blocking livestock in the west), sandfly (kala-azar), snails (bilharzia), and parasites themselves (tapeworm from undercooked beef/pork). The economic verdict: services outweigh harms massively — but only when managed: integrated pest management, pollinator protection, vector control, and sustainable harvest (the fisheries collapse lesson: catch within the lake's regeneration).",
  detailed: "<p><b>Production.</b> Protein: capture fisheries (~4.5 M t globally; Ethiopia's lakes Tana, Abaya, Chamo, Afala, Zuai supply the Rift's protein — Labeobarbus, Clarias, varicorhinus; overfishing + siltation are the threats), aquaculture (the fastest-growing food sector — tilapia, catfish ponds; Ethiopia's fish-consumption gap vs global average is a nutrition policy target). Livestock: cattle (Boran, Arsi — milk/meat/draft/wealth-store), small ruminants (cash for pastoralists), camel (the Sahel's multi-use engine), poultry (eggs + income), apiary (honey/wax — forest coffee pollination synergy). Fiber/industrial: wool (highland sheep), silk (sericulture trials), leather (Ethiopia's leather exports — shoes to Europe; the industry's water/chrome footprint is the counter-story), bone/horn, glues, dyes (cochineal), shellac (lac insects). Lab/medicine: model organisms, horseshoe-crab blood (not local but instructive), leech hirudin, venom pharmacology (snake-antivenom production).</p><p><b>Services (the invisible economy).</b> Pollination: global crop pollination value ~$235–577 B/yr; coffee yield +25% with bee visits — Ethiopia's wild Arabica forests (Bonga, Harenna) are the genetic home of the world's coffee AND a pollination-dependent system; also teff? (self-pollinated — but sesame, sunflower, fruits, khat, chat all benefit). Biological control: birds/bats consume insect biomass equal to their own weight daily; the hadeda ibis's tick removal from livestock; bats vs cutworms. Seed dispersal: frugivorous birds/monkeys (geladas disperse grasses; forest birds plant timber). Waste recycling: dung beetles (the Australian introduction story — 500 M beetles, $380 M/yr benefit), vultures as sanitary agents (their collapse in South Asia = feral-dog rabies surge — a service priced in disease). Soil: earthworms' burrowing + casting (Darwin: 'ploughing with no other animal as useful'). Flood control and water purification by wetland fauna (mussels filter liters/day).</p><p><b>Destruction.</b> Vertebrate pests: quelea (Africa's most abundant bird — grain losses in the Rift; control by aerial insecticide with ecological side-effects), rodents (grain stores + plague cycles), primates (baboon-crop conflict — the human-wildlife balance question), locusts (2003 and 2020 desert locust upsurges — 1 swarm eats a town's day of food). Invertebrate crop pests: fall armyworm (maize — since 2018 in Ethiopia), aphids, stem borers, root-knot nematodes. Vectors: Anopheles mosquito → malaria (Plasmodium falciparum — Ethiopia's leading cause of outpatient visits and child death; control: ITNs, IRS, larvivorous fish), Glossina tsetse → animal trypanosomiasis (nagana — 300 M cattle at risk in Africa; sterile-insect technique releases in the Rift), sandfly → visceral leishmaniasis (kala-azar — Amhara outbreaks), snails → schistosomiasis, ticks → East Coast fever (theileriosis — a major cattle killer; the East Coast fever vaccine is a veterinary milestone). Parasites direct: tapeworm (Taenia saginata — beef), hydatid (dog-sheep cycle), Ascaris.</p><p><b>Sustainable-use economics.</b> The resource question: animals are renewable only within their yield. Fisheries: maximum sustainable yield vs open-access overfishing (the Tana Labeobarbus decline — mesh size, closed seasons, breeding refuges); livestock: carrying capacity (rangeland overstocking → degradation — the stocking-rate debate); wildlife: the trophy-hunting/phototourism revenue model (community concessions — animals worth more alive) vs poaching (the elephant ivory math); pollinators: pesticide stewardship (neonicotinoid bans), habitat corridors. The accounting frame: total economic value = use + non-use (existence) values; services that never touch a market (wild coffee pollination) are the ones most at risk of being 'priced at zero' until they collapse.</p>",
  keyTerms: [
    { term: "Ecosystem services", def: "free benefits from nature: pollination, control, cycling" },
    { term: "Biological control", def: "using natural enemies to suppress pests" },
    { term: "Vector", def: "organism transmitting a pathogen" },
    { term: "Maximum sustainable yield", def: "largest catch matching regeneration" },
    { term: "IPM", def: "integrated pest management — mixed, minimal-pesticide strategy" },
    { term: "Total economic value", def: "use + existence + option values of a resource" }
  ],
  workedExamples: [
    {
      problem: "A coffee cooperative reports +25% yield when hives sit nearby. Explain the mechanism and the economic logic.",
      given: "pollination service",
      formula: "bee visitation → fruit set",
      substitution: "coffee flowers need insect pollination for full fruit set; hives supply pollinators + honey income; the service is free until it's lost",
      calculation: "yield premium + honey = double revenue",
      answer: "Pollination is an input the farm gets for free from bees — protecting it is cheaper than replacing it"
    },
    {
      problem: "Tsetse belt blocks cattle in western lowlands. Quantify the economic effect and name two controls.",
      given: "nagana",
      formula: "disease → livestock constraint",
      substitution: "trypanosomiasis kills/milk-reduces cattle → the fertile land can't hold draft animals → shifting cultivation persists; controls: insecticide traps/ODT (pour-ons), sterile-insect releases, trypanocides + resistant breeds",
      calculation: "land value vs disease cost",
      answer: "A fly that takes a bite taxes an entire region's agriculture — control unlocks the economy"
    },
    {
      problem: "Quelea control by aerial insecticide kills non-target insects. Propose an IPM alternative package.",
      given: "pest + side-effects",
      formula: "integrate tactics",
      substitution: "habitat: destroy roosting trees, timed tillage to expose nests; biological: encourage natural predators (raptors, weaver competitors); monitoring: early detection at roosts before swarming; targeted/low-toxicity chemicals only at threshold; community grain-storage protection",
      calculation: "threshold-based = less poison",
      answer: "IPM: monitor → act at economic threshold → combine ecology + targeted chemicals, not blanket spraying"
    },
    {
      problem: "Vulture collapse in South Asia → rabies rise. Trace the service chain.",
      given: "sanitation service",
      formula: "scavenger removal → carcass persistence → feral dogs",
      substitution: "vultures ate livestock carcasses within hours; without them carcasses lingered → feral dog populations exploded → dog-malaria... dog-rabies transmission to humans rose; the cost: millions of additional rabies deaths",
      calculation: "a service priced in lives",
      answer: "Scavengers are nature's waste disposal — removing them externalizes disease onto people"
    },
    {
      problem: "Lake Tana fishery: catch rose 20 years then fell despite more effort. Diagnose and prescribe.",
      given: "effort/catch pattern",
      formula: "overfishing signature",
      substitution: "declining catch-per-unit-effort = stock depletion past MSY; small mesh + breeding-season fishing + siltation compound it; prescription: closed seasons, mesh minimums, gear limits, enforce with co-management, restore watersheds (silt)",
      calculation: "yield vs regeneration",
      answer: "Classic overshoot — the fishery must harvest the interest, not the capital"
    }
  ],
  commonMistakes: [
    "Valuing animals only by what we kill/eat — services (pollination, control) dwarf harvest values",
    "Calling all insects 'pests' — most are neutral or beneficial; pests are a few species in the wrong place",
    "Pest control = spray more — resistance, resurgence and pollinator loss follow; IPM is the standard",
    "Livestock numbers = wealth — without carrying-capacity management, herd growth mines the rangeland",
    "Conservation vs development framing — depleted animal resources ARE underdevelopment",
    "Thinking malaria is a 'poor-person disease' of negligence — it's an ecological/economic trap with vector biology",
    "Assuming fisheries are inexhaustible because fish 'breed fast' — recruitment overfishing collapses them anyway"
  ],
  applications: [
    "Ethiopian apiary: 15 M+ hives — honey/wax export + the coffee pollination synergy",
    "Leather industry: export income vs the Akaki chrome legacy — the value-chain trade-off",
    "East Coast fever vaccine: the first veterinary vaccine that changed an industry's economics",
    "Sterile tsetse releases: area-wide insect birth control as economic development",
    "Dung-beetle introductions: the Australian case — importing a service worth hundreds of millions"
  ],
  summary: "Animal economics has four ledgers: direct products (food, fiber, draft, industry), ecosystem services (pollination, pest control, dispersal, decomposition — worth trillions, mostly unpriced), destructive roles (crop pests, vectors of malaria/nagana/East Coast fever, parasites), and the sustainability constraint (renewable only within yield — the fisheries and rangeland lessons). The honest accounting: services outweigh harms, and conservation is economic policy, not charity.",
  visuals: [
    { type: "mindMap", config: { center: "Animal economics", branches: [{ label: "Products", items: ["fish, livestock", "honey, wool", "draft power"] }, { label: "Services", items: ["pollination", "pest control", "waste recycling"] }, { label: "Harms", items: ["quelea, armyworm", "mosquito, tsetse"] }] } },
    { type: "comparison", config: { title: "Pest: spray vs IPM", left: { name: "Blanket spray", items: ["resistance", "kills beneficials", "resurgence", "pollution"] }, right: { name: "IPM", items: ["monitor thresholds", "biocontrol first", "targeted chemicals", "durable + cheaper"] } } },
    { type: "barChart", config: { title: "Value of a bee visit (relative)", labels: ["Coffee yield", "Sesame", "Fruits", "Honey", "Wild plants"], values: [25, 20, 30, 10, 15] } }
  ],
  questions: [
    { type: "mcq", q: "Ethiopia's livestock population is roughly:", options: ["10 million", "60 million+", "200 million", "5 million"], answer: 1, difficulty: 2, explanation: "Africa's largest herd — 60 M+ cattle/sheep/goats/camels" },
    { type: "mcq", q: "The tsetse fly transmits:", options: ["malaria", "animal trypanosomiasis", "kala-azar", "bilharzia"], answer: 1, difficulty: 2, explanation: "Nagana in cattle — the west-Lowland constraint" },
    { type: "mcq", q: "Dung beetles' economic service is:", options: ["pollination", "waste burial + pasture sanitation", "silk", "food"], answer: 1, difficulty: 1, explanation: "Bury dung → flies down, pasture up" },
    { type: "mcq", q: "Africa's most abundant bird and grain pest:", options: ["hadeda ibis", "quelea", "lilac-breasted roller", "vulture"], answer: 1, difficulty: 2, explanation: "Quelea — millions-strong swarms" },
    { type: "tf", q: "Most insect species are crop pests.", answer: false, difficulty: 1, explanation: "A tiny fraction are; most are neutral/beneficial" },
    { type: "tf", q: "Pollination services are traded on commodity markets.", answer: false, difficulty: 2, explanation: "Mostly free and unpriced — hence undervalued" },
    { type: "short", q: "The 2018 maize invader now across Ethiopia:", answer: "fall armyworm", difficulty: 2, explanation: "Spodoptera frugiperda" },
    { type: "short", q: "Ethiopia's leading insect-borne disease killer:", answer: "malaria", difficulty: 1, explanation: "Anopheles → Plasmodium falciparum" },
    { type: "calc", q: "A hive boosts coffee yield 25% on a 1000 kg farm (price 50/kg). Extra income?", answer: "12500", difficulty: 2, explanation: "250 kg × 50 = 12,500" },
    { type: "concept", q: "Explain why 'animals worth more alive than dead' is the core of community wildlife economics.", answer: "tourism revenue|services|living value|poaching incentive", difficulty: 3, explanation: "A live elephant generates recurring photo-tourism income and keeps its ecological service; a dead one pays once (ivory) — when communities capture the recurring value (jobs, revenue-sharing), protection becomes self-interest and poaching loses its economic base" }
  ]
};

Lessons["g11-biology-ub2-t5"] = {
  overview: "Animal behavior: innate (instinct, fixed action patterns, imprinting) vs learned (habituation, conditioning, insight, tool use), the signaling systems animals use, and the evolutionary logic of social behavior — kin selection and reciprocal altruism.",
  objectives: [
    "Distinguish innate from learned behavior with examples",
    "Explain fixed action patterns and sign stimuli",
    "Describe learning types: habituation, classical/operant conditioning, insight",
    "Summarize communication: visual, acoustic, chemical, tactile",
    "Apply kin selection and reciprocity to altruism and eusociality"
  ],
  simple: "Behavior is how animals respond to their world — and it's shaped by genes, experience, or both. Innate behaviors are born-in: a spider's web without a teacher, a newborn's rooting reflex, the three-spined stickleback's red-belly aggression trigger. The classic unit is the fixed action pattern (FAP): a hard-wired sequence triggered by a sign stimulus and run to completion — a greylag goose rolling an egg back with its neck: remove the egg mid-roll and it keeps rolling the air, because the program, not the egg, is running. Imprinting: a critical-period learning — ducklings follow the first big moving thing (Lorenz and his geese — he became their 'mother'). Learned behaviors: habituation (stop responding to a harmless repeated stimulus — the birds that ignore a scarecrow after week two), classical conditioning (Pavlov's dog — associate a bell with food → salivate at the bell), operant conditioning (trial-and-error with rewards/punishments — the rat pressing a lever, the chick learning which berry makes it sick), insight (sudden problem-solving without trial-and-error — the chimp stacking boxes for a banana; Köhler's apes), and tool use (crows bending hooks, chimps fishing termites, otters with rocks). Communication: visual (peacock tails, cuttlefish color, bee waggle dance — direction + distance to flowers!), acoustic (bird song — territory + mate; frog choruses; the Ethiopian wolf's howls), chemical (pheromones — ant trails, moth sex pheromones detected molecule-by-molecule), tactile (grooming bonds — gelada social grooming is the 'language' of their troops). The deep question: why be nice? Altruism (cost to self, benefit to other) evolves when genes help copies of themselves — kin selection (Hamilton's rule: help relatives when rB > C — a bee dies for the queen because her sisters share 75% of her genes; eusociality: sterile workers raising siblings) and reciprocal altruism (today's grooming is tomorrow's backup — vampire bats regurgitate blood for roost-mates who fed them). Behavior is evolution's playbook: what works gets copied.",
  detailed: "<p><b>Innate architecture.</b> Ethology's founding concepts (Tinbergen's four questions: mechanism, development, function, evolution). Sign stimuli/supernormal stimuli: fixed action patterns fire on simple releasers — herring gull chicks peck a red spot on the parent's bill (the red spot IS the food signal); exaggerated models get exaggerated responses. FAPs are species-typical, stereotyped, released not taught. Imprinting: Lorenz — attachment during a sensitive period, largely irreversible, sexual preference later follows the imprinted model (why hand-raised birds court humans). Innate releasing mechanisms: the nervous system's 'key' for the sign stimulus.</p><p><b>Learning types.</b> Habituation: simplest — decreased response to repeated irrelevant stimulus (saves attention; the sea slug Aplysia's synaptic depression is the model mechanism — Kandel's Nobel work). Sensitization: opposite — heightened response after a strong stimulus. Classical (Pavlovian) conditioning: neutral stimulus paired with unconditioned stimulus → conditioned response (bell→saliva; taste aversion — one-trial, biological preparedness: rats learn to fear flavors, not lights — Garcia effect). Operant (Skinner) conditioning: behavior shaped by consequences — reinforcement (positive/negative), punishment, schedules (variable-ratio = most persistent — the slot-machine logic; why intermittent rewards make stubborn habits). Insight learning: Gestalt reorganization — the chimpanzee solving the banana-on-the-ceiling problem by stacking boxes suddenly (Köhler on Tenerife); no trial-and-error streaks. Social/cultural learning: imitation and teaching (meerkats teach pups scorpion handling; monkey potato-washing — the Japanese macaque culture that spread through the troop — 'the 100th monkey' as real cultural transmission, not mysticism). Cognitive maps (rats), navigation (bird magnetoreception — the Rift's migratory species use it).</p><p><b>Communication.</b> Signals evolved to modify the receiver's behavior in the sender's interest (with conflicts — deception: the female mantis's false courtship signals). Visual: color patterns (warning coloration — aposematism; mimicry — Batesian/Müllerian), displays (bird-of-paradise), bioluminescence. Acoustic: songs (territory + mate quality — the nightingale's repertoire size honestly signals fitness), alarm calls ( vervet monkeys' distinct eagle/leopard/snake calls — semantic! — and the different escape each triggers), echolocation (bats — the Rift's insectivorous bats). Chemical: pheromones — trail-marking (ants), alarm (aphids), sex (bombbykol — the first identified pheromone), queen substance (honeybee). Tactile: allogrooming (gelada troops — social glue + tension reduction), honeybee waggle dance (symbolic! — angle = direction to sun, duration = distance — a language about space). Multimodal signals: frog calls + visual foot-spashing.</p><p><b>Social evolution.</b> Hamilton's rule: altruism spreads when rB > C (r = relatedness: 0.5 siblings/parent-offspring, 0.75 in Hymenoptera sisters due to haplodiploidy — why worker bees are ultra-related). Kin selection → eusociality (reproductive division, overlapping generations, cooperative care): naked mole rats (mammalian eusociality!), termites, ants, bees/wasps. Reciprocal altruism: repeated interactions + recognition + memory → cooperation among non-kin (vampire bat blood-sharing; cleaner fish and their 'client policing'; tit-for-tat in sticklebacks — the game theory matches). Group selection vs individual selection debates resolved by inclusive fitness + multilevel selection. Dominance hierarchies (chicken peck-orders; gelada one-male units — coalitions of bachelor males overthrow the leader), territoriality (resource defense when defendable), mating systems (see U2-t3). Behavior's function lens: every display, dance and duty is a hypothesis about fitness — and ethologists test them.</p>",
  keyTerms: [
    { term: "Fixed action pattern", def: "stereotyped innate sequence triggered by a sign stimulus" },
    { term: "Imprinting", def: "critical-period attachment learning" },
    { term: "Habituation", def: "learned decrease of response to repeated irrelevant stimulus" },
    { term: "Operant conditioning", def: "learning by consequences (reinforcement/punishment)" },
    { term: "Pheromone", def: "chemical signal between individuals of a species" },
    { term: "Kin selection", def: "altruism toward relatives — inclusive fitness (rB > C)" }
  ],
  workedExamples: [
    {
      problem: "A goose rolls an egg back; you remove the egg halfway — it continues the motion. What does this prove?",
      given: "FAP signature",
      formula: "program vs feedback",
      substitution: "the behavior runs open-loop once released by the sign stimulus (round object outside nest) — not controlled by continuous feedback",
      calculation: "classic Tinbergen result",
      answer: "Fixed action patterns are innate motor programs, not goal-corrected actions"
    },
    {
      problem: "Design a test of whether a bird's alarm call is referential (about the predator) rather than just arousal.",
      given: "experimental logic",
      formula: "stimulus control",
      substitution: "play eagle-alarm recordings while NO predator is present and observe: do listeners perform eagle-specific behavior (look up, dive to cover)? Vervets do — proving the call carries predator information, not just excitement",
      calculation: "playback experiment",
      answer: "If receivers respond with the predator-appropriate escape to the call alone, the signal is semantic"
    },
    {
      problem: "Worker bees share 75% of genes with their sisters but 50% with their own potential offspring. Apply Hamilton's rule.",
      given: "haplodiploidy",
      formula: "rB > C",
      substitution: "raising a sister: r = 0.75; raising own daughter: r = 0.5 — with B (survival benefit) roughly equal, the sister strategy passes MORE of the worker's genes; sterility evolves",
      calculation: "0.75 > 0.5",
      answer: "Kin selection explains why worker bees 'choose' to be aunts instead of mothers"
    },
    {
      problem: "Vampire bats regurgitate blood to hungry roost-mates. What three conditions make this reciprocal altruism stable?",
      given: "game theory",
      formula: "repetition + recognition + memory",
      substitution: "long-lived colony members meet repeatedly (iterated game), recognize individuals (and cheaters), remember past donations (and withhold from non-donors)",
      calculation: "tit-for-tat equilibrium",
      answer: "Without any of the three, cheaters invade and cooperation collapses"
    },
    {
      problem: "A rat learns to avoid a flavored drink after one pairing with nausea but can't learn to fear a light+noise with nausea. Explain.",
      given: "Garcia effect",
      formula: "biological preparedness",
      substitution: "natural selection pre-wires associations that matter for survival — taste→illness (poison detection) is easy; light/noise→illness is irrelevant to a gut problem — learning isn't a blank slate",
      calculation: "preparedness beats contiguity",
      answer: "Conditioning is biased by evolution toward ecologically meaningful pairings"
    }
  ],
  commonMistakes: [
    "'Innate = unchangeable' — FAPs are modified by experience and hormones; the innate/learned split is a spectrum",
    "Imprinting confused with attachment in general — it has a critical period and is often irreversible",
    "Reading animal behavior as purposeful teaching everywhere — anthropomorphism risk; test the function",
    "Operant vs classical conditioning mixed up — consequences-shape-behavior vs stimulus-pairing",
    "The waggle dance treated as 'just a signal' — it's symbolic: a displaced reference to food location",
    "Altruism seen as 'nice' — kin/reciprocal altruism are gene-level strategies with testable math",
    "Dominance hierarchies assumed to be pure strength — coalitions and social bonds decide in primates"
  ],
  applications: [
    "Animal training & welfare: operant principles (positive reinforcement) replace punishment-based handling",
    "Pest control: pheromone traps and mating disruption use insect communication against itself",
    "Conservation: understanding gelada troop structure and wolf den behavior guides protected-area design",
    "Agriculture: honeybee waggle-dance research underpins hive placement for pollination",
    "Medicine: Aplysia habituation studies built the molecular basis of memory research"
  ],
  summary: "Behavior splits into innate (FAPs released by sign stimuli, imprinting in critical periods) and learned (habituation, classical and operant conditioning, insight, social transmission), with most real behavior an interaction of both. Animals communicate visually, acoustically, chemically and tactile — the bee waggle dance even encodes space symbolically. Social behavior, including apparent altruism, follows Hamilton's rule (rB > C — help relatives) and reciprocity (repeat, recognize, remember). Behavior is evolution's playbook, and ethology reads it with experiments.",
  visuals: [
    { type: "comparison", config: { title: "Innate vs learned", left: { name: "Innate", items: ["born-in", "FAP + sign stimulus", "species-typical", "imprinting window"] }, right: { name: "Learned", items: ["experience", "conditioning, insight", "flexible", "habituation"] } } },
    { type: "flowChart", config: { title: "Hamilton's logic", steps: [{ label: "Genes shared", detail: "r with relatives" }, { label: "Cost vs benefit", detail: "rB > C" }, { label: "Altruism spreads", detail: "inclusive fitness" }, { label: "Eusociality", detail: "sterile workers" }] } },
    { type: "mindMap", config: { center: "Signals", branches: [{ label: "Visual", items: ["plumage", "dance"] }, { label: "Acoustic", items: ["song", "alarm"] }, { label: "Chemical", items: ["pheromones"] }, { label: "Tactile", items: ["grooming"] }] } }
  ],
  questions: [
    { type: "mcq", q: "A fixed action pattern is best described as:", options: ["learned by reward", "innate stereotyped sequence", "random movement", "conditioned reflex"], answer: 1, difficulty: 2, explanation: "Innate, runs to completion once released" },
    { type: "mcq", q: "Pavlov's bell→salivation is:", options: ["operant", "classical conditioning", "insight", "habituation"], answer: 1, difficulty: 1, explanation: "Stimulus-stimulus pairing" },
    { type: "mcq", q: "The bee waggle dance communicates:", options: ["danger", "food direction and distance", "queen identity", "nest site"], answer: 1, difficulty: 2, explanation: "Symbolic: angle + duration" },
    { type: "mcq", q: "Hamilton's rule states altruism spreads when:", options: ["rB > C", "B > 0", "C < B", "r = 1"], answer: 0, difficulty: 3, explanation: "Relatedness × benefit > cost" },
    { type: "tf", q: "Imprinting occurs during a critical early period.", answer: true, difficulty: 1, explanation: "Sensitive window — Lorenz's ducks" },
    { type: "tf", q: "All animal communication benefits the receiver.", answer: false, difficulty: 2, explanation: "Signals evolve for the sender's interest — receivers may be manipulated" },
    { type: "short", q: "Learning where behavior is shaped by consequences:", answer: "operant conditioning", difficulty: 2, explanation: "Operant (Skinnerian) conditioning" },
    { type: "short", q: "Chemical signals between individuals of a species:", answer: "pheromones", difficulty: 1, explanation: "Pheromones" },
    { type: "calc", q: "rB > C: r = 0.5, B = 4, C = 3. Is the altruistic act favored?", answer: "yes", difficulty: 2, explanation: "0.5×4 = 2 < 3 — NOT favored (trick: 2 < 3)" },
    { type: "concept", q: "Why do vervet monkeys have different alarm calls for eagles, leopards and snakes?", answer: "referential|predator-specific escape|semantic|selection", difficulty: 3, explanation: "Each call triggers the correct escape (look up, climb, stand tall) — referential signals that give listeners the right response raise survival, and senders gain indirect fitness; the specificity is evidence the calls carry meaning, not just arousal" },
    { type: "concept", q: "Explain how a sterile worker ant can be 'selected for' despite never reproducing.", answer: "haplodiploidy|kin selection|sisters|inclusive fitness|queen", difficulty: 3, explanation: "Because of haplodiploidy, sisters share 75% of genes; by helping the queen raise sisters, a worker passes more of her own genes than by reproducing herself (rB > C) — inclusive fitness makes sterility a gene-spreading strategy" }
  ]
};

Lessons["g11-biology-ub2-t6"] = {
  overview: "Homeostasis: the self-regulating stability of the internal environment — temperature, water, glucose, pH — maintained by negative-feedback loops (receptor → control center → effector), with the endocrine and nervous systems as the communication network and ectothermy/endothermy as the two thermal strategies.",
  objectives: [
    "Define homeostasis and the internal environment",
    "Diagram a negative-feedback loop with its three components",
    "Explain thermoregulation in ectotherms vs endotherms",
    "Describe osmoregulation and excretory organs",
    "Summarize blood-glucose regulation (insulin/glucagon)"
  ],
  simple: "Your cells expect conditions to stay steady: ~37 °C, pH ~7.4, salt and sugar within narrow bands — even as the world outside swings. Homeostasis is that self-stabilization, and its mechanism is negative feedback: a receptor detects a deviation, a control center (usually the brain) compares it to the set point, an effector (muscle or gland) acts to reverse the change, and once corrected the loop quiets down. The thermostat is the perfect analogy — and like a thermostat, most systems overshoot slightly and oscillate around the set point. Temperature: endotherms (birds, mammals) burn metabolism for heat — when cold: shivering (muscles generate heat), vasoconstriction (skin vessels narrow to save heat), goosebumps (hair traps insulation — vestigial in us), and thyroid/adrenal hormones raise metabolic rate; when hot: vasodilation, sweating/evaporation (1 L of sweat evaporated removes a lot of heat), panting (dogs — evaporate from the tongue), and behavior (shade, burrows). Ectotherms (reptiles, insects, fish) run on external heat — a lizard shuttles between sun and shade to hold its preferred temperature; cheaper energy but less activity in the cold. Water and solutes (osmoregulation): freshwater fish constantly gain water (dilute urine, active salt uptake); marine fish constantly lose it (drink seawater, excrete concentrated salts via gills); desert animals conserve fiercely (kangaroo rat — never drinks, hyper-concentrated urine, nasal countercurrent recovery); our kidneys do the same job — nephrons filter and reabsorb under hormonal command (ADH = antidiuretic hormone: when dehydrated, more water reabsorbed, urine concentrated). Glucose: after a meal, insulin (pancreas β-cells) tells cells to take up glucose and the liver to store it as glycogen → blood sugar falls; between meals, glucagon (α-cells) releases stored glucose → rises. Diabetes is the loop's failure: type 1 — no insulin; type 2 — cells ignore it. pH: buffers (bicarbonate), lungs (exhale CO₂), kidneys (excrete H⁺) hold blood at 7.35–7.45. The unifying idea: the body is a network of feedback loops, and health is their stability.",
  detailed: "<p><b>Framework.</b> Claude Bernard's 'milieu intérieur' — cells bathe in extracellular fluid whose composition must be constant. Homeostasis = dynamic equilibrium (steady state with continuous turnover, not static). Components: controlled variable (T, [glucose], osmolarity, pH), receptor/sensor (thermoreceptors in skin + hypothalamus; osmoreceptors; pancreatic islet cells; chemoreceptors), integrator/control center (hypothalamus = the master; pancreas for glucose), set point, effector (effectors: sweat glands, skeletal muscle, blood vessels, liver, kidneys, endocrine glands), and the error signal that drives correction. Negative feedback: output opposes the input change (the loop's gain determines precision). Positive feedback exists but is for endpoints, not stability: oxytocin in birth, blood clotting cascade, the nerve-action-potential Na⁺ channel — run to completion then stop.</p><p><b>Thermoregulation.</b> Heat balance: metabolic heat + environmental gain/loss (radiation, conduction, convection, evaporation). Endothermy: high basal metabolism (thyroid hormones set it), insulation (fur, feathers, fat), and the hypothalamic set point (~37 °C); cold defense: shivering (involuntary muscle oscillation), non-shivering thermogenesis (brown fat — infants and mammals; uncoupling protein burns fuel to heat), piloerection, vasoconstriction (countercurrent heat exchange in limbs — the human hands and the arctic fox's paws), behavioral (huddling, nests). Heat defense: vasodilation + sweating (1 g sweat evaporated = 0.58 kcal removed), panting (dogs — dead-space evaporation), sweating limits (humidity blocks evaporation — heat stroke risk), behavioral (noontime rest — the Ethiopian midday siesta is thermoregulation). Ectothermy: behavioral thermoregulation (basking, shuttling, burrowing), metabolic rate tracks environment, gigantism as thermal inertia (the large tortoise holds heat), and the trade-off: ~10× less energy → survive famines, but cold-night inactivity. Fever: the set point itself is raised (pyrogens → prostaglandins) — regulated, not failed — to hinder pathogens.</p><p><b>Osmoregulation & excretion.</b> Osmoconformers (most marine invertebrates) vs osmoregulators (all discussed here). Nitrogenous waste strategy tracks water: ammonia (toxic, needs dilution — bony fish), urea (mammals — moderate), uric acid (birds/reptiles/insects — paste, saves water). Organs: protonephridia/flame bulbs (flatworms), metanephridia (annelids), Malpighian tubules (insects — dump into gut, reabsorb water in hindgut — the desert design), kidneys (vertebrates — nephrons: glomerular filtration → selective reabsorption (glucose, ions, water — countercurrent multiplier in the loop of Henle creates the medullary gradient) → secretion; ADH (vasopressin) inserts aquaporins in collecting ducts → concentrated urine when dehydrated; aldosterone holds Na⁺; the renin-angiotensin system reads blood pressure/volume). The camel lesson: oval RBCs tolerate osmotic swings; dehydration to 25% body-weight water loss without shock; rehydrate at 10 L in minutes.</p><p><b>Glucose & calcium.</b> Blood glucose ~5.5 mM (1 g/L): insulin (fed state — uptake by muscle/fat via GLUT4, glycogenesis in liver/muscle, lipogenesis) vs glucagon (fasted — glycogenolysis, gluconeogenesis); the antagonistic pair holds the band; failure = diabetes mellitus (type 1 autoimmune β-cell loss; type 2 receptor resistance — obesity-linked; Ethiopia's rising NCD burden). Calcium: PTH (bone resorption, kidney retention, vitamin-D activation) vs calcitonin (bone deposition) — another antagonistic loop; the parathyroid's set-point sensing is literally a calcium receptor.</p>",
  keyTerms: [
    { term: "Homeostasis", def: "maintenance of a stable internal environment" },
    { term: "Negative feedback", def: "response that reverses the initiating change" },
    { term: "Set point", def: "the value a control system defends" },
    { term: "Endotherm", def: "regulates body heat by metabolism" },
    { term: "Ectotherm", def: "body heat governed by the environment" },
    { term: "ADH", def: "antidiuretic hormone — kidney water reabsorption" }
  ],
  workedExamples: [
    {
      problem: "Map the loop: you enter a cold wind. Name receptor → control center → effectors → response.",
      given: "thermoregulation",
      formula: "negative-feedback components",
      substitution: "cold receptors (skin) + deep-body thermoreceptors → hypothalamus compares to 37 °C → effectors: skin vasoconstriction, skeletal muscle (shivering), adrenal/thyroid (metabolic rate), behavior (seek shelter) → heat conserved + generated → temperature restored → loop quiets",
      calculation: "error signal drives it",
      answer: "A textbook negative-feedback arc with multiple parallel effectors"
    },
    {
      problem: "A freshwater fish and a marine fish both live in water. Compare their osmotic problems and solutions.",
      given: "opposite gradients",
      formula: "osmoregulation logic",
      substitution: "freshwater: body saltier than water → water floods in, salts leak out → dilute urine lots + active salt uptake at gills; marine: body fresher than seawater → water leaves, salts flood in → drink seawater + excrete salts via gill chloride cells + little concentrated urine",
      calculation: "same problem, inverted",
      answer: "Each fights its own gradient — the gills are the battlefield"
    },
    {
      problem: "After a high-sugar meal, trace the hormonal correction of blood glucose.",
      given: "glucose spike",
      formula: "insulin loop",
      substitution: "pancreas β-cells sense glucose → insulin released → GLUT4 transporters move glucose into muscle/fat; liver converts glucose→glycogen → blood glucose falls → insulin secretion decreases (negative feedback)",
      calculation: "set point ~5.5 mM",
      answer: "Insulin is the 'store it' signal; the loop shuts itself off as glucose normalizes"
    },
    {
      problem: "Why does humid heat kill while dry 45 °C is survivable? Use the evaporation physics.",
      given: "sweat limit",
      formula: "evaporative cooling",
      substitution: "sweat cools only if it evaporates; evaporation needs a vapor-pressure gradient (dry air); humid air is saturated → sweat drips uselessly → core temperature rises → heat stroke (enzymes denature, membranes fail)",
      calculation: "wet-bulb ~35 °C = human limit",
      answer: "Endothermy's price: we depend on evaporation — humidity disables our main radiator"
    },
    {
      problem: "A dehydrated hiker: predict ADH, urine volume, urine osmolarity, thirst.",
      given: "water deficit",
      formula: "osmoreceptor-ADH axis",
      substitution: "osmoreceptors fire → posterior pituitary releases ADH → aquaporins in collecting ducts → water reabsorbed → urine small-volume + hyperosmotic; thirst center activated; aldosterone retains Na⁺ (and water follows)",
      calculation: "concentrated urine = working loop",
      answer: "High ADH, low volume, high osmolarity, intense thirst — the system defending osmolarity"
    }
  ],
  commonMistakes: [
    "Homeostasis = 'unchanging' — it's dynamic steady state with small oscillations around the set point",
    "Sweating 'creates cold' — it only cools by evaporation; blocking evaporation (occlusive clothing, humidity) makes it useless",
    "Fever treated as system failure — it's a regulated set-point raise (defense), though dangerous if extreme",
    "Ectotherms called 'cold-blooded = no regulation' — they regulate behaviorally to precise preferred temperatures",
    "Positive feedback confused with 'good feedback' — it amplifies change (clotting, birth), not stability",
    "Insulin thought to 'destroy' glucose — it moves/stores it; the glucose is accounted for elsewhere",
    "Kidneys seen as 'waste filters only' — they're the osmoregulatory computer (volume, ions, pH, pressure)"
  ],
  applications: [
    "Medicine: diabetes management is applied glucose-loop theory (insulin dosing = feedback control)",
    "Dehydration therapy: ORS (oral rehydration solution) exploits gut salt-glucose coupling — the Nobel-era lifesaver",
    "Livestock in the Rift: heat-stress management (shade, night milking) protects milk yields",
    "Sports science: pacing and hydration strategies are thermoregulation engineering",
    "High-altitude Addis Ababa: acclimatization (breathing, erythropoietin) is homeostasis in low oxygen"
  ],
  summary: "Homeostasis keeps the internal environment stable via negative-feedback loops: receptor → control center (hypothalamus) → effector → correction → quiet. Temperature: endotherms generate and defend heat metabolically (shivering, sweating, vasomotor control); ectotherms behaviorally shuttle between sun and shade. Osmoregulation: gills and kidneys fight water/salt gradients (ADH concentrates urine; the camel and kangaroo rat are conservation masterpieces). Glucose: insulin stores, glucagon releases — diabetes is the broken loop. Health is the stability of these networks.",
  visuals: [
    { type: "flowChart", config: { title: "Negative feedback loop", steps: [{ label: "Stimulus", detail: "temp/glucose rises" }, { label: "Receptor", detail: "senses deviation" }, { label: "Control center", detail: "compares to set point" }, { label: "Effector", detail: "acts to reverse" }, { label: "Correction", detail: "loop quiets" }] } },
    { type: "comparison", config: { title: "Endotherm vs ectotherm", left: { name: "Endotherm", items: ["metabolic heat", "constant T", "high energy cost", "active at night/cold"] }, right: { name: "Ectotherm", items: ["behavioral T", "tracks environment", "10× cheaper", "basks to perform"] } } },
    { type: "lineGraph", config: { title: "Blood glucose after a meal", xLabel: "hours", yLabel: "mmol/L", series: [{ label: "glucose", points: [[0, 5.5], [0.5, 9], [1, 7.5], [2, 5.8], [3, 5.5]] }] } }
  ],
  questions: [
    { type: "mcq", q: "The body's master thermoregulatory control center is the:", options: ["cerebellum", "hypothalamus", "medulla", "thyroid"], answer: 1, difficulty: 1, explanation: "The hypothalamus — the set-point integrator" },
    { type: "mcq", q: "Which hormone lowers blood glucose?", options: ["glucagon", "insulin", "ADH", "PTH"], answer: 1, difficulty: 1, explanation: "Insulin — the storage signal" },
    { type: "mcq", q: "In dehydration, ADH causes the kidney to:", options: ["lose water", "reabsorb water", "excrete salt", "filter more"], answer: 1, difficulty: 2, explanation: "Aquaporins insert → water returns to blood" },
    { type: "mcq", q: "A marine bony fish deals with water loss by:", options: ["dilute urine", "drinking seawater + salt excretion", "not drinking", "absorbing through skin"], answer: 1, difficulty: 3, explanation: "It drinks and pumps salts out via gills" },
    { type: "tf", q: "Homeostasis means internal conditions never change.", answer: false, difficulty: 2, explanation: "Dynamic steady state with small oscillations" },
    { type: "tf", q: "Blood clotting is an example of positive feedback.", answer: true, difficulty: 2, explanation: "Amplifies to completion — then stops" },
    { type: "short", q: "The heat-generating muscle response to cold:", answer: "shivering", difficulty: 1, explanation: "Shivering thermogenesis" },
    { type: "short", q: "The bird/reptile nitrogen waste that saves water:", answer: "uric acid", difficulty: 2, explanation: "Uric acid — paste, not solution" },
    { type: "calc", q: "Sweat evaporation removes 0.58 kcal/g. Cooling 70 kg by 1 °C needs 17 kcal (≈70×0.24). Grams of sweat?", answer: "~29", difficulty: 3, explanation: "17/0.58 ≈ 29 g" },
    { type: "concept", q: "Why is fever described as a 'reset set point' rather than a failure of thermoregulation?", answer: "pyrogens|prostaglandins|defence|chills|regulated", difficulty: 3, explanation: "Pyrogens raise the hypothalamic set point; the body then defends the higher temperature (chills to generate heat) — the loop works perfectly at a new setting, because the elevated temperature hinders pathogens and speeds immune reactions" },
    { type: "concept", q: "Explain why an ectotherm can survive a month without food while a shrew-like endotherm dies in a day.", answer: "metabolic rate|energy cost|thermoregulation|fuel", difficulty: 3, explanation: "Endothermy burns fuel continuously to hold temperature (the shrew's basal rate is enormous — food is its furnace feed); an ectotherm's metabolism tracks ambient temperature and spends almost nothing on heat, so its stored energy lasts orders of magnitude longer" }
  ]
};
