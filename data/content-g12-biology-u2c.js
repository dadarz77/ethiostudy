/* Content: Grade 12 Biology — Unit 2 (part C): topics 7-10 */
window.Lessons = window.Lessons || {};

Lessons["g12-biology-ub2-t7"] = {
  overview: "Infectious disease is a transmission problem: a pathogen must leave a reservoir, cross a route, and enter a susceptible host — break any link and the chain dies. This topic maps the routes (contact, droplet/air, vehicle water-food, vector, soil, vertical, sexual), the epidemiological arithmetic (R₀, incubation vs latent periods, herd thresholds), and the Ethiopian burden split: diarrheal and respiratory diseases of water and air, HIV through fluid exchange, TB's airborne comeback, and the One Health zoonoses at the human-livestock interface.",
  objectives: [
    "Diagram the infection chain: reservoir → portal → route → host",
    "Classify transmission: contact, droplet, airborne, vehicle, vector, vertical, iatrogenic",
    "Distinguish incubation vs latent vs infectious periods",
    "Use R₀ and herd immunity thresholds for control logic",
    "Design layered prevention for waterborne, airborne, vector and STI routes"
  ],
  simple: "<b>Every outbreak is a broken chain waiting to be repaired.</b> Cholera: feces → water → mouth (vehicle): chlorination and ORS end it. Malaria: blood → mosquito → blood (vector): nets, indoor spraying, draining. TB: lungs → cough droplets → lungs (airborne): DOTS treatment IS prevention — cured patients stop shedding. HIV: blood/semen/milk → mucosa or needle (contact/vertical/iatrogenic): safe sex, screened blood, PMTCT. The route dictates the tool: never the other way around. Population math: if each case infects R₀ others in a fully susceptible crowd, vaccinate past 1−1/R₀ and the chain starves (measles 95%, polio 80%).",
  detailed: "<p><b>The chain, link by link.</b> Reservoir (humans — measles has no animal backup; animals — rabies dogs, leishmaniasis rodents; environment — tetanus soil, Legionnaire's water systems) → portal of exit (respiratory tract, gut, blood, skin lesions) → route of transmission → portal of entry → susceptible host (age, nutrition, vaccination, genetics, HIV status). Ethiopian load reads straight off the first three links: 7 in 10 households' diarrheal episodes trace to water/sanitation failures; acute respiratory infections are a top under-5 killer (indoor smoke + crowded classrooms); vaccine-preventable resurgences track coverage dips (the 2022-23 and 2025 measles waves in under-immunized woredas).</p><p><b>Route taxonomy.</b> Direct contact (skin, sexual — HSV, HPV, gonorrhea, HIV; Ethiopia's HIV prevalence now ~0.9% adult, the fight shifted to key populations and new adolescent infections in high-prevalence pockets). Indirect contact/fomites (norovirus on hands, hospital MRSA on stethoscopes). Droplet (influenza, pertussis, meningococcus: <1 m, heavy, quick to fall — masks work). Airborne (TB, measles, varicella: droplet NUCLEI float for hours in unventilated rooms — N95s and open windows, not masks-any). Vehicle (water: cholera, typhoid, hepatitis A/E; food: staph food poisoning preformed toxin, tapeworm from undercooked beef — taeniosis is endemic across Orthodox fasting-adjacent cattle regions). Vector (biological — pathogen develops inside: malaria, leishmaniasis; mechanical — feet carry it: flies and shigellosis). Vertical (mother→fetus: HIV, hepatitis B, rubella's congenital syndrome). Iatrogenic (needles, transfusion, dental: HBV's historical route; Ethiopia's blood-screening reform cut it). Soil contact (hookworm larvae through bare feet; tetanus spores in wounds).</p><p><b>Timing windows that decide outbreaks.</b> Incubation period = exposure → symptoms; latent = exposure → infectiousness; infectious = how long shedding lasts. Measles is infectious BEFORE the rash (the diagnostic sign arrives after the damage: why case isolation must start at fever, not spots) and its 10-14-day incubation sets quarantine length. Ebola's infectious window opens only after symptoms (quarantine-and-trace CAN end it — smallpox's pre-symptomatic scarcity vs measles' profligacy explains their different fates). Serial interval (case-to-next-case) < incubation means exponential surprises (the 2020 lesson). For TB, latency is the reservoir: 10-25% of Ethiopians carry dormant mycobacteria — the reactivation pipeline that makes case-finding a long war.</p><p><b>The arithmetic.</b> R_eff = R₀ × fraction susceptible: control pushes R_eff below 1. Tools multiply: a net (halves bites) × a vaccine (removes hosts) × drainage (removes vectors) gives 0.5×0.3×0.5 = 0.075 R₀ — layered. Herd threshold 1−1/R₀: measles (15-18) needs 93-95%; pertussis (12-17) ~90-94%; a first-dose MR coverage of 86% is BELOW threshold — the 2023 outbreaks' arithmetic was settled before the virus arrived. Effective reproduction under surveillance is estimated from case growth: doubling time → r → R_eff — the same math the emergency response rooms run weekly on cholera line lists.</p><p><b>Prevention, layered Ethiopian-style.</b> Upstream: water infrastructure and chlorine at the tap (cholera's end), indoor air (clean cookstoves), veterinary dog-rabies campaigns (anthrax and rabies are cattle-and-dog diseases first — One Health), food-vet inspection (bovine TB from unpasteurized milk). Midstream: ITNs + IRS + rDTc rapid test + ACT treatment (malaria's four-link attack), ORS + zinc at health posts, DOTS and the private labs' TB notification. Downstream: PMTCT (mother→child HIV nearly eliminated where ART coverage holds), cervical screening catching HPV's endpoint, STI syndromic management, and infection prevention at facilities (WASH in health centers: the hand-hygiene campaign Ethiopia's hospitals now audit). The individual's role is never 'avoid germs' — it's understanding WHICH link you can break for YOUR chain: the bed net, the boiling, the vaccine, the bednet hole you patch.</p>",
  keyTerms: [
    { term: "Reservoir", def: "where the pathogen persists between hosts" },
    { term: "Vehicle transmission", def: "abiotic carrier: water, food, air, fomites" },
    { term: "Biological vector", def: "pathogen develops inside the carrier" },
    { term: "Incubation period", def: "infection → symptoms" },
    { term: "Infectious period", def: "window of shedding" },
    { term: "R₀ / R_eff", def: "secondary cases in naive / current crowd" },
    { term: "Herd threshold", def: "1 − 1/R₀ immune needed" },
    { term: "PMTCT", def: "preventing mother-to-child transmission" }
  ],
  formulas: [
    { name: "Chain collapse", formula: "R_eff = R₀ × S × (1−vacc) × Π tools", meaning: "multiplicative prevention", vars: [{ name: "S", meaning: "susceptible fraction" }], when: "any control plan" },
    { name: "Herd immunity", formula: "p_c = 1 − 1/R₀", meaning: "coverage that starves transmission", vars: [{ name: "measles ~95%", meaning: "polio ~80%" }], when: "vaccine policy" },
    { name: "Growth rate", formula: "R ≈ 2^(g × serial interval)", meaning: "estimate spread from case doubling", vars: [{ name: "g", meaning: "doublings per unit time" }], when: "outbreak response" }
  ],
  workedExamples: [
    { problem: "MR vaccine 1st-dose coverage 86% in a woreda; R₀ ≈ 15. Outbreak?", calculation: "Threshold = 1 − 1/15 ≈ 93%.", answer: "Susceptible pool >7%: the epidemic was mathematically licensed — coverage, not the virus, failed." },
    { problem: "A cholera ward's staff wash hands with plain water. Which link survives?", calculation: "Fecal-oral via hands/fomites: water alone doesn't break Vibrio transfer.", answer: "Chlorinated soap-and-water protocols at the bedside: the exit and entry portals close together." },
    { problem: "Treat every TB case fully under DOTS. Why is that ALSO prevention?", calculation: "Cured patients stop shedding; each untreated case infects ~10-15/yr in crowded settings.", answer: "Case-finding and cure = transmission control: the therapy IS the vaccine substitute." },
    { problem: "Rabies: 5 000 dog bites/yr in a district. Cheapest prevention?", calculation: "Dogs transmit, dogs are vaccinated easier than humans are treated; PEP is costly and often too late in rural access.", answer: "Mass dog vaccination (canine coverage >70%) — the human cases fall years later: One Health economics." }
  ],
  commonMistakes: [
    "Confusing reservoir with vector (dogs reservoir rabies, mosquitoes vector malaria)",
    "Isolating at symptom onset for diseases infectious BEFORE symptoms (measles)",
    "Calling condoms 'vector control' (they are route control for contact/sexual)",
    "Ignoring that treated cases are non-infectious cases (TB math)",
    "One-size tools: nets do nothing for cholera, chlorine does nothing for TB"
  ],
  applications: [
    "EPHI's integrated surveillance and early-response woreda system",
    "Cholera task forces: chlorine, ORS, water trucking, risk communication",
    "National Malaria Program's ITN mass campaigns + IRS in highlands",
    "HAPCO's harm-reduction network + PMTCT at health posts"
  ],
  summary: "Infection chains break at their weakest link: identify the reservoir, map the route, do the R₀ math, and layer tools — nets for vectors, chlorine for vehicles, vaccines for hosts, cure for shedding.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Cholera's chief transmission route is:", options: ["airborne", "fecal-oral vehicle (water)", "vector", "vertical"], answer: 1, difficulty: 1, explanation: "The water link: treat the water, end the chain." },
    { type: "mcq", q: "An airborne disease spreads by:", options: ["droplets that fall within a meter", "fine droplet nuclei suspended for hours", "contaminated food", "bee stings"], answer: 1, difficulty: 2, explanation: "TB/measles ride nuclei: ventilation and respirators." },
    { type: "mcq", q: "A disease infectious before symptoms is controlled best by:", options: ["isolating rash cases only", "quarantine/contact tracing + high coverage vaccination", "treating the sick", "closing schools never"], answer: 1, difficulty: 3, explanation: "The silent shedding window defeats symptom-based screening." },
    { type: "mcq", q: "Herd immunity threshold for R₀ = 10 is:", options: ["50%", "90%", "99%", "10%"], answer: 1, difficulty: 2, explanation: "1 − 1/10 = 90%." },
    { type: "mcq", q: "Biological vectors differ from mechanical ones because the pathogen:", options: ["hides on their feet", "develops/reproduces inside them", "avoids them", "is killed by them"], answer: 1, difficulty: 2, explanation: "Malaria needs the mosquito's body for its cycle." },
    { type: "mcq", q: "Why is rabies best cut at the dog stage?", options: ["dogs are cheaper to treat", "canine vaccination removes the reservoir and bite route", "humans cannot be vaccinated", "rabies is waterborne"], answer: 1, difficulty: 2, explanation: "One Health: stop it in the reservoir." },
    { type: "mcq", q: "Barefoot children on contaminated soil risk:", options: ["hookworm", "measles", "TB", "HIV"], answer: 0, difficulty: 2, explanation: "Larvae penetrate skin: footwear and sanitation." },
    { type: "mcq", q: "Full TB treatment prevents onward spread because:", options: ["drugs kill future infections", "cured patients stop producing infectious droplets", "patients gain immunity", "BCG cures it"], answer: 1, difficulty: 3, explanation: "Treatment cuts shedding: cure is prevention." }
  ]
};

Lessons["g12-biology-ub2-t8"] = {
  overview: "Microorganisms are the largest workforce on Earth and the cheapest: bakeries and breweries, yoghurt and injera batter, cheese and vinegar, sewage treatment, biogas, enzymes and antibiotics, nitrogen fertiliser, bioleaching of ore, and the molecular factories making insulin and vaccines. This topic is Unit 2's balance sheet — microbes employed.",
  objectives: [
    "Explain fermentation products: bread, injera, tej, ergo, cheese, vinegar",
    "Describe waste treatment and biogas engineering",
    "Name industrial microbial products (enzymes, antibiotics, solvents)",
    "Summarise agricultural microbes (Rhizobium, biocontrol, compost)",
    "Assess microbes as molecular factories (insulin, vaccines)"
  ],
  simple: "<b>Hire what evolution already mastered.</b> Bread and injera: yeast CO₂ leavens; LAB sour (the injera batter's two-week fermentation is a managed microbial consortium). Ergo/yoghurt: Streptococcus thermophilus + Lactobacillus delbrueckii make the lactic acid that sets it. Tej: wild yeast honey-wine. Vinegar: Acetobacter adds oxygen to ethanol. Cheese: rennet (calf enzyme — now microbial chymosin) + cultures; Italian grana's holes are propionic bacteria. Sewage: activated sludge = an aerated microbial soup eating organic matter; anaerobic digesters then harvest the sludge's methane (biogas stoves). Nitrogen: Rhizobium inside legume nodules delivers free fertiliser; Azotobacter and cyanobacteria fix more. Compost = thermophilic bacterial and fungal heating: 65 °C kills weed seeds and pathogens — a managed fever.",
  detailed: "<p><b>The food microbiology shelf.</b> Fermentation is preservation by acid, alcohol, or salt-tolerant winners: injera batter's fermentation ( LAB-dominated souring, yeast leavening; the ergo starter's strains are under Ethiopian bioprospecting — genome work published on isolates from traditional fermentations) improves teff's mineral availability (phytase and acid degrade phytate — the 'why traditional methods win' nutrition case), tej (honey + gesho hops' antimicrobial balances wild yeasts), niter kibbeh's spiced fermentation cousins, kocho (enset's underground pit fermentation: the tannin-leaching anaerobic work of weeks), ayib/ergo dairy successions, and silage for dairy farms (ensiled maize: LAB acidifying the fodder in sealed trenches — the same science the dairy cooperatives now run at intensifying farms). Each tradition is an empirical process-control chart: time, temperature, vessel, and starter carry the know-how a factory writes in manuals.</p><p><b>Environmental engineers.</b> Activated sludge: flocs of bacteria + protozoa + rotifers in aerated basins, BOD stripped in hours that rivers would take days; secondary clarification, then disinfection — Addis Kality's treatment wetlands are the sun-powered version. Anaerobic digestion: the t2 methanogen chain — hydrolysis → acidogenesis → acetogenesis → methanogenesis — converting manure, slaughterhouse waste and market organics into CH₄ (cooking fuel; institutional digesters at universities and hotels) plus digestate fertilizer. Composting's thermophilic phase (Bacillus, Thermus-analogs, actinomycetes: the earthy geosmin smell) sanitizes. Landfill and wetland methanogenesis are the unmanaged twins — the reason waste dumps heat the climate for decades.</p><p><b>The product catalog.</b> Beverages and foods above; then the submerged vats: citric acid (Aspergillus niger — most of the world's food-souring acid is fungal), enzymes (amylases for brewing and starch, cellulases for detergents, lipases, rennet chymosin from GM microbes), antibiotics (penicillin from Penicillium chrysogenum deep-tank culture; streptomycin from Streptomyces — the genus that gives more antibiotics than any other), solvents (acetone-butanol: the first industrial fermentation, weizmann), vitamins (B2/B12 bacterial), and bioplastics (PHA granules stored by engineered bacteria from sugar waste). Pharmaceutical biotech (t4's methods employed): human insulin (E. coli, 1982), hepatitis-B vaccine (yeast secretion particles), interferons, monoclonal antibodies (now cell-culture, not microbes, but the same logic). Ethiopia's node: the pharmaceutical factory era (coalition and domestic plants) plus the vaccine-manufacturing ambition (Ethiopia's first mRNA and viral-vaccine ventures) — industrial microbiology as national policy.</p><p><b>Agriculture's invisible inputs.</b> Rhizobium-legume symbiosis: nodules fix N₂ at the plant's photosynthetic price (inoculant trials on Ethiopian faba bean and chickpea show yield gains rivaling a bag of urea); cyanobacteria and Azolla feed rice paddies; mycorrhizae (t3) extend phosphate hunting; Trichoderma and Bacillus thuringiensis as biocontrol (Bt's crystal protein is a bacterial pesticide that killed the chemical-spray image of 'pesticides'); the Fusarium-wilt and banana scenarios (where biocontrol agents are the only rotation left). Compost tea, farmyard manure's microbial load, and soil-suppressive disease 'immune' fields: the farmer's microbiome management, unrecognized.</p><p><b>Forensics of the hired workforce.</b> Quality control IS microbiology: milk pasteurization verified by phosphatase and culture counts; brewing's wild-spoilage (Lactobacillus, Pediococcus) tracked by plating; aflatoxin's pre-harvest Aspergillus managed by atoxigenic displacement (the biocontrol t3's dark mirror: using microbes against microbes). The balance sheet ends where it started — Unit 2's enemies are mostly the same species, just un-hired.</p>",
  keyTerms: [
    { term: "Starter culture", def: "selected microbial workforce" },
    { term: "Activated sludge", def: "aerated microbial waste-eating floc" },
    { term: "Biogas", def: "methane from managed anaerobic digestion" },
    { term: "Submerged fermentation", def: "aerated vat product manufacturing" },
    { term: "Biocontrol", def: "microbes suppressing pests/diseases" },
    { term: "Inoculant", def: "commercial Rhizobium seed coating" },
    { term: "Chymosin", def: "rennet enzyme (now microbial)" }
  ],
  formulas: [
    { name: "Digester recipe", formula: "manure + water, C:N ~25-30, sealed, ~30-37 °C", meaning: "managed methanogenesis", vars: [{ name: "0.03-0.05 m³ gas/kg manure", meaning: "daily design yield" }], when: "biogas domestic units" },
    { name: "BOD removal", formula: "organic C + O₂ → microbes → CO₂ + biomass", meaning: "sludge 'digests' the sewage", vars: [{ name: "aeration", meaning: "the energy bill" }], when: "waste plants" }
  ],
  workedExamples: [
    { problem: "A 6-cow digester gets 60 kg fresh manure/day (~15 kg dry). Approx gas?", calculation: "~0.3 m³/kg dry volatile solids × ~12 kg VS.", answer: "~3-4 m³: cooking fuel for a large household — plus fertilizer slurry: two products from one feed." },
    { problem: "Injera batter ferments 2-3 days. What is happening in order?", calculation: "LAB acidify (pH ↓), yeasts gas, phytase activity + acid free minerals.", answer: "Preservation, leavening AND nutrition gain in one managed vat." },
    { problem: "A faba-bean field inoculated with Rhizobium matches urea plots. Why economically strategic?", calculation: "Fixation replaces imported nitrogen at ~150-200 kg N/ha potential; inoculant costs pennies per hectare.", answer: "Fertiliser sovereignty grows underground." },
    { problem: "Cheese vats switched to microbial chymosin. What changed?", calculation: "Recombinant enzyme (t4's technology) vs calf-stomach extraction: identical specificity.", answer: "Scale, cost, and ethics: a GM-microbe product in a traditional food." }
  ],
  commonMistakes: [
    "Saying all fermentation needs yeast (LAB do most of the world's souring)",
    "Calling biogas 'just manure': it's a four-stage microbial consortium",
    "Composting = rotting (managed thermophilic sanitization vs anaerobic stink)",
    "Bt spray as a chemical pesticide (it's a bacterial protein with species-specific targets)",
    "Judging pasteurization by taste alone (microbial verification is the standard)"
  ],
  applications: [
    "Ergo, injera, tej, kocho, niter-kibbeh-adjacent fermentations: national food microbiology",
    "Household and institutional biogas digesters across the highlands",
    "Rhizobium inoculants on pulses in the cereal-legume rotation",
    "Addis's activated-sludge and treatment-wetland works"
  ],
  summary: "Employed microbes: fermenters of food, engineers of sewage and biogas, factories of acids/enzymes/drugs, and the underground fertiliser plant in every legume nodule.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Yoghurt's setting acid is made by:", options: ["yeast", "lactic acid bacteria", "Acetobacter", "moulds"], answer: 1, difficulty: 1, explanation: "LAB: lactose → lactic acid." },
    { type: "mcq", q: "Activated sludge cleans sewage by:", options: ["settling solids", "aerated microbial oxidation of organics", "chlorine", "boiling"], answer: 1, difficulty: 2, explanation: "The floc is the workforce." },
    { type: "mcq", q: "Biogas is mainly:", options: ["CO₂", "methane", "hydrogen", "ethanol"], answer: 1, difficulty: 1, explanation: "Methanogens' CH₄ harvest." },
    { type: "mcq", q: "Citric acid for soft drinks industrially comes from:", options: ["lemons", "Aspergillus niger fermentation", "mining", "cracking oil"], answer: 1, difficulty: 2, explanation: "Fungal vats: the hidden fermentation economy." },
    { type: "mcq", q: "Rhizobium lives in:", options: ["cereal grains", "legume root nodules", "leaf spots", "soil water only"], answer: 1, difficulty: 1, explanation: "Nodule symbiosis: ammonia delivered." },
    { type: "mcq", q: "Bt biocontrol works because its protein:", options: ["poisons all insects", "activates only in target larval guts", "is acidic", "blocks smell"], answer: 1, difficulty: 3, explanation: "Species-specific gut receptor + pH: selectivity." },
    { type: "mcq", q: "Bread rises because yeast produces:", options: ["lactic acid", "CO₂", "oxygen", "ethanol only"], answer: 1, difficulty: 1, explanation: "Fermentation gas trapped in gluten." },
    { type: "mcq", q: "Microbial chymosin demonstrates:", options: ["fermentation souring", "GM-microbe enzymes in traditional foods", "waste treatment", "nitrogen fixation"], answer: 1, difficulty: 3, explanation: "Recombinant rennet: t4's tech in a cheese vat." }
  ]
};

Lessons["g12-biology-ub2-t9"] = {
  overview: "Controlling microorganisms is a physics, chemistry and protocol problem: sterilization (kill everything, spores included), disinfection (kill most on surfaces), antisepsis (on living tissue), sanitation (reduce to safe), and biostasis (halt growth by cold/drying/chemistry). This topic learns the kill-curve logic — temperature, time, concentration, bioburden — and reads Ethiopia's practice: autoclaves in hospitals, chlorine at the tap, boiling at home, pasteurization at the dairy.",
  objectives: [
    "Define sterilization, disinfection, antisepsis, sanitation, biostasis",
    "Explain thermal death time and D-values in kill curves",
    "Rank methods: autoclave, dry heat, pasteurization, filtration, radiation, chemicals",
    "Match chemical agents to targets (alcohol, chlorine, H₂O₂, phenolics)",
    "Apply the Spaulding hierarchy to clinical practice"
  ],
  simple: "<b>Heat is the old reliable; chemistry fills the gaps.</b> Sterilization kills ALL life including endospores: autoclave at 121 °C for 15 min under pressure (steam's latent heat — boiling at 100 °C does NOT sterilize). Pasteurization (63 °C/30 min or 72 °C/15 s) is a deliberate trade: kill pathogens (TB, brucella) without cooking the milk — biostasis by refrigeration finishes the job. Dry heat (160 °C/2 h) for glass and powders; filtration for heat-labile media (0.22 µm traps bacteria); UV for surfaces and air; ionizing radiation for disposable syringes. Chemicals: alcohol (70% best — needs water to denature proteins), chlorine (bleach: oxidizes everything it touches, inactivated by dirt), H₂O₂, phenolics for benches, glutaraldehyde for scopes. Spaulding rule: critical (into sterile tissue) → sterilize; semi-critical (mucous membranes) → high-level disinfect; non-critical (skin contact) → clean + low-level.",
  detailed: "<p><b>Kill-curve logic.</b> Microbial death under a lethal agent is logarithmic: a D-value is the minutes (or dose) to kill 90% (one log) at a condition. Bioburden matters: 10⁶ cells at D=1 min needs 6 logs = 6 min for a 10⁻⁶ survival (a 'sterility assurance level' target for industry). Heat resistance ranking: prions > bacterial endospores > mycobacteria (waxy walls shrug off aqueous agents and alcohol) > vegetative bacteria > enveloped viruses (the easiest — their lipid coat dissolves in soap). The Spaulding mapping follows the ranking: instruments meeting blood or sterile tissue carry the toughest possible contaminants and must meet the toughest processes.</p><p><b>Physical methods, engineering detail.</b> Moist heat (autoclave 121 °C/15 min at 15 psi; the latent heat of condensing steam delivers energy fast — the same physics that makes a steam burn worse than boiling water; wrapped loads need air removal — gravity displacement vs pre-vacuum) vs dry heat (oven 160-180 °C/2 h — conduction only: slower, for glass, metal, oils, powders). Filtration: HEPA for air (0.3 µm particles at 99.97%), membrane 0.22 µm for antibiotic solutions and culture media. Radiation: UV-C 254 nm (thymine dimers — surface/shadow-limited, the TB ward's upper-air UV fixture uses it); gamma/e-beam (sterilizing single-use medical goods and spice decontamination — the irradiation controversy is Unit 1's risk-literacy question again). Gas plasma (H₂O₂) and ethylene oxide (historic, carcinogenic-plagued) for heat-sensitive devices.</p><p><b>Chemical agents' mechanisms.</b> Alcohols (ethanol/isopropanol 60-80%): denature proteins and dissolve lipids — need water, don't spore-kill, flash off (contact time is the weak link). Halogens: chlorine (NaOCl: oxidizes sulfhydryls and nucleic acids; 0.5% for benches, 0.05% for drinking water after-contact time 30 min; neutralized by organic matter — why bleach must be mixed fresh and dirt removed first; chlorination's Ethiopian face: the household Aqua-tabs and municipal residual monitoring during cholera response); iodine (tincture/sporidic at long contact, thyroid caution). Oxidizers: H₂O₂ (6-25%, wound and surface), peracetic acid (endoscope reprocessing). Phenolics (bench disinfectants, tuberculocidal). Quaternary ammonium (benzalkonium: cationic surfactant, good on clean surfaces, defeated by soap residue and some Gram-negatives that grow in the bottle — dilution discipline is a real failure mode). Aldehydes (glutaraldehyde/OPA: high-level disinfection, 20-45 min, the scope-reprocessing workhorse — ventilation required). Biguanides (chlorhexidine: skin prep, persists). Mechanism dictates spectrum dictates use — no 'one spray for everything'.</p><p><b>Hospital and lab practice (the real exam).</b> Hand hygiene (the single highest-yield infection control measure; WHO's 5 moments). Clean → disinfect → sterilize sequence: organic soil blocks every agent (why decontamination precedes). Monitoring: autoclave biological indicators (Geobacillus stearothermophilus spore ampoules — the canary: if a surviving spore germinates, the load failed), chemical indicator tape (process marker only), Bowie-Dick for air removal. Aseptic technique and laminar flow in the microbiology lab; needle-stick and sharps-boxes; waste segregation (the incinerator vs landfill stream). Community parallels: boiling water (rolling boil = disinfection by time×temperature — the Ethiopian household standard), sun-drying and solar water disinfection (UV + heat in PET bottles: appropriate technology), handwashing with soap at critical times, and the milk chain (pasteurize or boil; cold storage; the brucellosis-from-raw-milk lesson — zoonotic control through the dairy pipe).</p><p><b>Antimicrobial stewardship: control's second front.</b> Choosing agents and doses that clear the infection while starving resistance (Unit 1's hygiene + t1's plasmid biology meet here): narrow-spectrum when diagnosable, complete-course adherence (TB's 6 months, DOTS's directly observed therapy), and the 'sub-inhibitory gradients' warning — drug residues in farm and hospital effluent are evolution laboratories where partial killing selects partial resistance. Ethiopia's national action plan on AMU (antimicrobial use) and AMR surveillance mirrors the same physics of failure: every unmanaged dose is a selection experiment on someone else's infection.</p>",
  keyTerms: [
    { term: "Sterilization", def: "complete kill incl. spores (SAL 10⁻⁶)" },
    { term: "Disinfection", def: "agents on inanimate surfaces" },
    { term: "Antisepsis", def: "agents on living tissue" },
    { term: "D-value", def: "time for a 90% (1-log) kill" },
    { term: "Bioburden", def: "starting contamination load" },
    { term: "Spaulding hierarchy", def: "critical/semi-critical/non-critical matching" },
    { term: "Pasteurization", def: "pathogen kill, food quality kept" },
    { term: "SAL", def: "sterility assurance level" }
  ],
  formulas: [
    { name: "Log kill", formula: "survivors = N₀ × 10^(−t/D)", meaning: "death is exponential", vars: [{ name: "D", meaning: "minutes per log" }], when: "cycle design" },
    { name: "Autoclave standard", formula: "121 °C × 15 min × saturated steam", meaning: "sporicidal trio", vars: [{ name: "air removal", meaning: "the hidden requirement" }], when: "every instrument load" },
    { name: "Chlorine CT", formula: "residual ≥0.2-0.5 mg/L after 30 min", meaning: "concentration × contact time", vars: [{ name: "organics consume", meaning: "pre-clean matters" }], when: "water safety" }
  ],
  workedExamples: [
    { problem: "10⁷ cells with D=2 min; target 10⁻⁶ survival probability. Time?", calculation: "7 logs kill + 6 safety = 13 logs × 2 min.", answer: "26 min at that temperature: process design in one line." },
    { problem: "A wound swabbed with 95% alcohol stings but under-disinfects. Why?", calculation: "Protein denaturation needs water; 95% fixes the surface crust instantly.", answer: "70% is the standard — dilution makes it stronger." },
    { problem: "Milk pasteurized 72 °C/15 s still spoils. Failed process?", calculation: "Pasteurization kills vegetative pathogens; thermoduric and spore-formers survive and grow with time.", answer: "A shelf-life, not a sterilization: cold chain and use-by dates are the rest of the process." },
    { problem: "An autoclave's chemical tape all turned but the spore ampoules grew. Verdict?", calculation: "Tape marks exposure (often to heat); biological indicators test whether the sporicidal condition was truly achieved.", answer: "Load failed — likely air trapping or overloading: trust the biology over the chemistry." }
  ],
  commonMistakes: [
    "Boiling = sterilizing (spores survive 100 °C)",
    "Stronger alcohol is better (70% beats 95%)",
    "Bleach works on dirty surfaces equally (organics neutralize it: clean first)",
    "Disinfectants on wounds (antisepsis agents differ; bleach is not wound wash)",
    "UV shadowed corners 'disinfected' (it only treats line-of-sight surfaces)"
  ],
  applications: [
    "Hospital CSSD autoclave practice with spore-ampoule monitoring",
    "Household boiling and Aqua-tabs during cholera response",
    "Dairy pasteurization and cold-chain in the milk-shed system",
    "Upper-room UVGI in TB clinics and school ventilation"
  ],
  summary: "Control is physics + protocol: match the agent's mechanism to the target's resistance (spores hardest), clean before killing, log-kill by time×condition, and let biology indicators, not tape, certify the sterilizer.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Sterilization requires killing:", options: ["only pathogens", "bacterial endospores too", "only vegetative cells", "viruses only"], answer: 1, difficulty: 1, explanation: "Spores are the resistance ceiling." },
    { type: "mcq", q: "The standard autoclave cycle is:", options: ["100 °C/30 min", "121 °C/15 min steam under pressure", "160 °C/2 h dry air", "72 °C/15 s"], answer: 1, difficulty: 1, explanation: "Moist heat + pressure for the latent-heat kill." },
    { type: "mcq", q: "Hand sanitizing alcohol works best at:", options: ["95%", "70%", "50%", "100%"], answer: 1, difficulty: 2, explanation: "Water is needed for protein denaturation." },
    { type: "mcq", q: "Pasteurization is designed to:", options: ["sterilize milk", "kill pathogens while keeping food quality", "add preservatives", "concentrate nutrients"], answer: 1, difficulty: 1, explanation: "The deliberate trade: safety without cooking." },
    { type: "mcq", q: "Which is easiest to kill?", options: ["prions", "endospores", "mycobacteria", "enveloped viruses"], answer: 3, difficulty: 3, explanation: "The fragile lipid coat: soap ends them." },
    { type: "mcq", q: "Chemical tape on a packet shows:", options: ["sterility achieved", "the packet saw the process (not full sterilization)", "spore kill", "cleaning done"], answer: 1, difficulty: 3, explanation: "A process marker; biology indicators certify." },
    { type: "mcq", q: "Chlorine disinfection fails on dirty water mainly because:", options: ["it evaporates", "organic matter consumes the free chlorine", "it freezes", "dirt repels water"], answer: 1, difficulty: 2, explanation: "Oxidation demand: pre-clean or overdoses." },
    { type: "mcq", q: "UV-C disinfects by:", options: ["heating", "thymine dimers in DNA", "dissolving membranes", "adding salt"], answer: 1, difficulty: 3, explanation: "Nucleic acid crosslinks — shadow-limited." }
  ]
};

Lessons["g12-biology-ub2-t10"] = {
  overview: "The Ethiopian microbiology story is not a footnote — the country trained field-recognized scientists who built its labs, ran its epidemics responses, published its disease science, and mentored its generations: from the Armauer Hansen Research Institute's TB and leprosy immunology to the Ethiopian Public Health Institute's polio and surveillance eras. This topic profiles the people behind the institutions and the institution-building itself.",
  objectives: [
    "Name key Ethiopian microbiologists and their institutions",
    "Summarise each scientist's research contributions",
    "Connect EHRI/AMC/EPHI/ICHMR legacies to national health",
    "Describe landmark Ethiopian microbiology research outputs",
    "Relate mentorship and capacity building to today's system"
  ],
  simple: "<b>The scientists who built the labs.</b> The Public Health College and Training Centre (1958) trained the first generations of laboratory technicians and health officers who staffed the regional labs; the University of Gondar parasitology school carried the helminth and bilharzia survey era forward; the EPHI virology generation kept the national polio laboratory network WHO-accredited through the 2000s-2010s campaigns. Professor Abraham Aseffa — the immunology leader who directed the Armauer Hansen Research Institute (AHRI) and drove TB/leprosy/T-cell immunology research and Africa-wide mentoring. Add the WHO-era epidemiologists of cholera and measles campaigns and the women who built the lab-network quality movement (the EPHI metrology and BSL-3 expansion for TB culture work), and Unit 2 closes where it began: microbiology is a people practice.",
  detailed: "<p><b>The institution scaffolding.</b> Ethiopian laboratory medicine grew on four pillars: the former Public Health College and Training Centre (1958, the technician and health-officer pipeline), the University of Addis Ababa's faculty of medicine and later the College of Health Sciences' biomedical sciences programs, the National Laboratory (→ Ethiopian Public Health Institute, EPHI, 2010) running reference diagnostics and the epidemic-response labs, and the research institutes — AHRI (Armauer Hansen Research Institute, 1964, a Norway-Ethiopia joint venture named after the leprosy-bacillus discoverer Gerhard Armauer Hansen: leprosy and TB immunology from day one), the Ethiopian Helminth Research/Parasitology legacy (the University of Gondar line), the Institute of Immunological and Serum Production (IISP, later the Ethiopian Biologicals/Ethiopian Immunization and Vaccine Development Enterprise: the domestic rabies and tetanus vaccine line from the 1980s), and the Aklilu Lemma Institute of Pathobiology (ALIPB, the snail-biology and schistosomiasis plant-chemistry heritage — Aklilu Lemma himself, the Ethiopian scientist who discovered the molluscicide in Phytolacca dodecandra seeds ('endod'), the world's first plant-based schistosomiasis control: snail host of the parasite, and the detergent berries washing away the intermediate host — a Unit 2 + Unit 1 bridge built by one man's field observation in the 1960s, honored with the naming of the institute).</p><p><b>Aklilu Lemma (1933-1997).</b> Field parasitologist: while surveying schistosomiasis (bilharzia) in Awash stations, he learned village children washed in the endod berry river pools and never caught the snail-borne disease; he tested the berry (Phytolacca dodecandra, saponin-rich) on bulinus snails, published the molluscicidal activity (Bulletin WHO, 1967), and pushed the primary-health-care-era mass washing campaigns — plant chemistry defeating a parasite's life cycle (the t4 transmission web logic, 1960s-style) with an indigenous resource. The Nobel-consideration debate, the national honors, the Aklilu Lemma International Prize, and ALIPB carry the record straight.</p><p><b>Abraham Aseffa.</b> Immunologist who directed AHRI (and led the Ethiopia-Norway research bridge twice): the T-cell and cytokine studies of TB and leprosy cohorts (the PBMC, lepromin and antigen-panel work that placed Ethiopian labs inside the global immunology conversation), the post-kala-azar dermal leishmaniasis immunology programs, and the capacity multiplication — dozens of PhDs supervised, the Ethiopian Society of Immunology's founding push, and AHRI's training-of-trainers that seeded hospital immunology and lab-network leadership. The 'Ethiopian TB vaccine' conversation and the schistosomiasis/immunology school carry his cohort's fingerprints.</p><p><b>The public-health microbiology generation.</b> the University of Gondar's parasitology and public-health schools (the national bilharzia, kala-azar and malaria epidemiology lines); the EPHI polio-virology lab leadership (the national/accreditation-era directors who kept the Horn's surveillance running through the 2004-06 outbreak and the certification push); the cholera task-force epidemiologists and lab diagnosticians (the 2009, 2015 and 2023-25 responses ran on the same reference network); the national TB reference laboratory's BSL-3 expansion (culture, drug-susceptibility and whole-genome sequencing entering Ethiopian TB care); the quality-management generation (ISO 15189 accreditation cohorts across the reference and regional labs) — Unit 2's 'renowned' name-list is really the institution roster, and naming students is how the curriculum wants the era recorded.</p><p><b>Why a topic on people.</b> Microbiology is a craft tradition: aseptic technique learned at a mentor's bench, an epidemic response drilled as a team sport, a surveillance network maintained as an institutional memory. Ethiopia's share of the microbiological century — endod's molluscicide, AHRI's immunology, the accredited polio labs — sits with the named scientists AND the unnamed bench generations. The curriculum's ask ('renowned microbiologists in Ethiopia') is the entry point to the honest answer: list the people, but teach the network.</p>",
  keyTerms: [
    { term: "Aklilu Lemma", def: "endod molluscicide; ALIPB namesake" },
    { term: "AHRI", def: "Armauer Hansen Research Institute (1964)" },
    { term: "EPHI", def: "Ethiopian Public Health Institute (reference + surveillance)" },
    { term: "Endod", def: "Phytolacca dodecandra: plant snail-killer" },
    { term: "IIN/Serum Institute", def: "vaccine and biologicals heritage" },
    { term: "Abraham Aseffa", def: "AHRI TB/leprosy immunology director" },
    { term: "Bench tradition", def: "craft transmission via mentorship" }
  ],
  formulas: [],
  workedExamples: [
    { problem: "Endod berry controls bilharzia at which chain link?", calculation: "Bulinus snail = the parasite's intermediate host (t7 route logic).", answer: "The environmental reservoir link: a plant molluscicide instead of a chemical, local and renewable." },
    { problem: "AHRI's leprosy work follows the 'renowned microbiologist' pattern. What is the model?", calculation: "A joint-venture institute (1964) + Norwegian partnership + local cohorts = world-class immunology from an endemic site.", answer: "Endemic-area advantage: the patients and the questions live where the answers are built." },
    { problem: "Why does a polio lab's WHO accreditation matter to an outbreak?", calculation: "Confirmed serotyping and sequencing route vaccine-derived vs wild — the response differs completely.", answer: "Diagnostics decide epidemiology: accredited reference labs are surveillance infrastructure." },
    { problem: "The Ethiopian Serum Institute lineage (IIN) produced which vaccine era?", calculation: "Rabies and tetanus production from the 1980s, the vaccine-sovereignty thread to modern mRNA ventures.", answer: "Import-substitution for biologics: Unit 1's biotech topic in national dress." }
  ],
  commonMistakes: [
    "Listing names without institutions (the labs are the memory)",
    "Confusing AHRI's Norwegian namesake (Hansen, the leprosy bacillus discoverer) with Ethiopian staff",
    "Reducing Aklilu Lemma to 'a berry' (it's a full field-science method: observation → test → policy)",
    "Treating the EPHI network as one lab (it is a reference + regional network, the accreditation matters)",
    "Writing 'no Ethiopian microbiology' out of habit (the record is in the journals and the outbreaks)"
  ],
  applications: [
    "Endod molluscicide: the plant-chemistry schisto-control heritage",
    "AHRI/TB-ELISA immunology cohorts feeding national treatment guidelines",
    "EPHI reference labs underpinning cholera, polio and measles responses",
    "The Serum Institute line toward Ethiopia's vaccine-manufacturing future"
  ],
  summary: "Ethiopian microbiology's roll-call: Aklilu Lemma's endod, AHRI's immunology school, the accredited reference-lab network, the vaccine-works lineage — scientists plus the institutions that outlive them.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Aklilu Lemma is famed for discovering:", options: ["the TB vaccine", "a plant molluscicide (endod) against bilharzia snails", "HIV", "penicillin in Ethiopia"], answer: 1, difficulty: 1, explanation: "Phytolacca dodecandra's anti-snail saponins." },
    { type: "mcq", q: "AHRI (Armauer Hansen) researches chiefly:", options: ["maize genetics", "TB and leprosy immunology", "coffee chemistry", "hydrology"], answer: 1, difficulty: 1, explanation: "The 1964 Norway-Ethiopia immunology institute." },
    { type: "mcq", q: "EPHI's core role includes:", options: ["importing cereals", "reference diagnostics and public-health surveillance labs", "voter education", "road maintenance"], answer: 1, difficulty: 2, explanation: "The national lab network behind outbreak confirmation." },
    { type: "mcq", q: "Endod controls schistosomiasis by killing:", options: ["the adult worm in humans", "the Bulinus snail intermediate host", "the mosquito", "contaminated water"], answer: 1, difficulty: 2, explanation: "A transmission-link attack with a local plant." },
    { type: "mcq", q: "Abraham Aseffa's leadership at AHRI centered on:", options: ["polio vaccines", "mycobacterial immunology and training networks", "teff breeding", "hydro-power"], answer: 1, difficulty: 3, explanation: "T-cell studies, mentoring, and the Africa-wide school." },
    { type: "mcq", q: "A WHO-accredited national polio laboratory matters because:", options: ["it runs the campaigns", "it distinguishes wild vs vaccine-derived virus for the response", "it makes vaccines", "it licenses doctors"], answer: 1, difficulty: 3, explanation: "Sequencing and serotyping decide the epidemiology." },
    { type: "mcq", q: "The Ethiopian Serum Institute lineage produced:", options: ["insulin", "rabies and tetanus vaccines", "antibiotics", "honey wine"], answer: 1, difficulty: 2, explanation: "The biologics-import-substitution heritage." },
    { type: "mcq", q: "The 'bench tradition' idea means:", options: ["labs need furniture", "microbiology skill transfers through mentorship and institutions", "research is solo", "equipment equals science"], answer: 1, difficulty: 3, explanation: "Craft transmission: the network is the achievement." }
  ]
};
