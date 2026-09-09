/* Content: Grade 9 Physics — Unit 7: Temperature and Thermometry (1 topic) */
window.Lessons = window.Lessons || {};

Lessons["g9-physics-up7-t1"] = {
  overview: "Hot and cold are feelings; temperature is a measurement — the average kinetic energy of a substance's particles, read off a calibrated instrument. This lesson builds the scale (Celsius and Kelvin), the tool (the liquid-in-glass thermometer and its fixed points), and heat's three escape routes: conduction, convection, radiation.",
  objectives: [
    "Define temperature and distinguish it from heat energy",
    "Convert between Celsius and Kelvin",
    "Explain how a liquid-in-glass thermometer works and is calibrated (fixed points)",
    "Compare thermal expansion in solids, liquids and gases",
    "Describe conduction, convection and radiation with everyday examples"
  ],
  simple: "<b>Temperature</b> = how hot (average particle kinetic energy, °C or K); <b>heat</b> = energy flowing FROM hot to cold (joules) — a bath at 40°C holds far more heat energy than a spark at 1,000°C because there's more of it. <b>K = °C + 273</b>; 0 K = absolute zero (particles at minimum motion). A thermometer reads by <b>thermal expansion</b>: alcohol/mercury squirts up the bore as it warms; calibrated at ice point (0°C) and steam point (100°C), split into 100. Heat travels three ways: <b>conduction</b> (solids — particle-to-particle jostle; metals fast, free electrons help), <b>convection</b> (fluids — warm stuff expands, goes light, rises: boiling water, room heaters, sea breezes), <b>radiation</b> (no medium at all — infrared from the Sun; matte black absorbs/emits best, shiny reflects).",
  detailed: "<p><b>Temperature vs heat:</b> temperature is a state — the average kinetic energy of the random particle motion, measurable with an instrument, independent of amount. Heat is energy IN TRANSFER because of a temperature difference, measured in joules, and it depends on how much stuff you have: a spark from a fire at ~1,200°C has a tiny total energy; a bathtub of 40°C water stores millions of joules — the bath warms you, the spark stings harmlessly. The direction of spontaneous heat flow is always hot → cold (Second Law shorthand); 'cold' never flows anywhere.</p><p><b>Thermal expansion:</b> heating makes particles vibrate harder and push slightly farther apart — everything expands, gases most, liquids next, solids least (bonded lattice stretches only marginally: a 100 m steel rail grows ~4 cm over a hot day — hence expansion gaps in bridges and rail joints, buckling ('sun kinks') when they're missing). Water misbehaves near freezing: it CONTRACTS warming 0→4°C, then expands — its 4°C maximum density makes lakes freeze top-down and pipes burst. Bimetal strips (two bonded metals expanding differently) bend with heat — old thermostats and circuit-breakers.</p><p><b>Thermometry:</b> any physical property that varies with temperature can be a thermometer: liquid volume (alcohol-dyed-red for school use — safe, freezes at −115°C; mercury for precision — liquid −39 to 357°C, silvery, toxic), electrical resistance (digital probes, thermocouples), gas pressure (constant-volume gas thermometer — the most fundamental), infrared radiation (non-contact fever guns). <b>Calibration</b> uses fixed points: pure melting ice = 0°C, steam above boiling water at 1 atm = 100°C — mark both, divide by 100. Features of a good school thermometer: thin-walled bulb (fast response), fine bore (visible movement), alcohol over mercury (safety), and NO kink — that constriction belongs to clinical thermometers, which hold the reading while you read it and shake it down (a favorite comparison question). The <b>Kelvin</b> scale: same degree size, zero at absolute zero (−273.15°C) where motion is minimal: T(K) = T(°C) + 273; science formulas (gas laws) demand K.</p><p><b>Conduction:</b> through solids with no material flow: hot end's particles vibrate harder, jostle neighbors, pass energy along; METALS also flood free electrons across the lattice — why metals feel cold (they steal your heat fast) and conduct 100-10,000× better than wood, plastic, air (insulators; trapped air is the trick in wool, foam, fiberglass and a traditional 'gabar' rug). Real-life stack: a saucepan (metal base conducts, plastic handle doesn't), a cool floor that feels colder in socks vs barefoot.</p><p><b>Convection:</b> heat carried by MOVING fluid: warmed regions expand, density falls, buoyancy lifts them; cooler fluid sinks to replace — a current. Boiling water circulates (heat the pot at the bottom, never the top), room heaters warm whole spaces via air loops, refrigerators coil at the top so sinking cold air chases shelves, sea breezes: land heats first by day → warm air rises → cool ocean air flows in (reversed at night). Boiling itself: at the boiling point, vapor bubbles survive inside the liquid and rise (versus surface-only evaporation below it — evaporation cools: sweat stealing heat as it leaves).</p><p><b>Radiation:</b> energy as electromagnetic infrared — needs NO medium (the Sun's 150-million-km commute), travels at light speed, absorbed by what it strikes. Surface rules: dull matte BLACK absorbs AND emits best (black tire-covers hotter than white; radiator paint choices); shiny SILVER reflects and emits worst (emergency foil blankets, thermos flasks' mirrored walls). All bodies radiate always — hotter ones far more (and bluer: stove coils glow red then yellow-white). Thermos design is the unit's finale: vacuum gap kills conduction+convection, silvered walls kill radiation, stopper cuts convection+evaporation — every one of the three routes engineered out of a cup of coffee.</p>",
  keyTerms: [
    { term: "Temperature", def: "Average particle KE — a state, °C/K, size-independent" },
    { term: "Heat", def: "Energy transferred because of a temperature difference (J)" },
    { term: "Absolute zero", def: "0 K = −273°C — minimal particle motion" },
    { term: "Thermal expansion", def: "Size grows with temperature; gases > liquids > solids" },
    { term: "Fixed points", def: "Ice point 0°C, steam point 100°C — calibration anchors" },
    { term: "Conduction", def: "Heat through matter, no flow of matter (electron-boosted in metals)" },
    { term: "Convection", def: "Heat by moving fluid, driven by density differences" },
    { term: "Radiation", def: "Heat as EM waves — no medium needed" }
  ],
  formulas: [
    { name: "Celsius–Kelvin", formula: "T(K) = T(°C) + 273", meaning: "shifted zero, same step", when: "science formulas requiring K", example: "body 37°C = 310 K; water boils at 373 K" },
    { name: "Expansion (linear sense)", formula: "ΔL = α L₀ ΔT", meaning: "length grows with size × material × ΔT", when: "gaps, rails, sagging lines", example: "steel α ≈ 12×10⁻⁶/°C: 100 m × 30°C → 3.6 cm" }
  ],
  workedExamples: [
    {
      problem: "A clinical thermometer reads 39°C after leaving the mouth. Why does it keep the reading, and why can't a lab thermometer do this?",
      answer: "The constriction above its bulb snaps the mercury column on cooling, holding the max; lab thermometers follow temperature live (and are shaken down manually before use)"
    },
    {
      problem: "37°C in kelvin; and −273°C in kelvin?",
      calculation: "+273",
      answer: "310 K; 0 K (absolute zero — unreachable, but the scale's floor)"
    },
    {
      problem: "Explain why a metal spoon handle in hot tea burns while a wooden stirrer's doesn't.",
      answer: "Metal's free electrons conduct energy up the handle quickly; wood conducts slowly AND traps air — insulator, same temperature difference, very different heat rate"
    },
    {
      problem: "Why does the sea breeze blow inland by day?",
      answer: "Land heats (and conducts poorly, so its surface gets very hot) faster than the sea's big, mixed water mass; warm land air rises (convection), cool dense sea air flows in to replace it"
    },
    {
      problem: "Which cools a hot drink faster — a black matte cup or a shiny silver one, and why?",
      answer: "The matte black emits infrared best (and the shiny one reflects its own heat back), so radiation drains the black cup faster — same reason hot pipes in labs are painted matt black to shed heat"
    }
  ],
  commonMistakes: [
    "Using 'heat' and 'temperature' as synonyms (J vs °C; amount-dependent vs not)",
    "Thinking a hot small object has 'more heat' than a warm big one (energy totals differ)",
    "Kelvin step size ≠ Celsius (they're equal; only zero shifts — a +1 K change IS +1°C)",
    "Calibrating against salt ice or flat tap water (use PURE ice and steam at 1 atm)",
    "Expecting thermometers to measure instantly (thermal equilibrium takes contact time)",
    "Saying 'cold enters the room' (heat flows in — out of the room when you cool it)",
    "Believing radiation needs air (it's how the Sun arrives through vacuum)"
  ],
  applications: [
    "Fever diagnosis: clinical vs lab thermometer design differences save lives daily",
    "Cooking: convection ovens, dark pot bases, wooden handles — every kitchen is a heat-transfer lab",
    "Building comfort: gabat/wool insulation = trapped-air conduction blocker; whitewash reflects radiation",
    "Infrastructure: bridge expansion joints, sagging power lines in summer heat",
    "Climate: land–sea breezes, hot-air balloons, chimneys and solar water heaters (black tanks!)"
  ],
  summary: "Temperature averages particle motion (°C/K, K = °C + 273); heat is the joules that flow hot→cold. Matter expands when warmed (water's 4°C twist included), and thermometers exploit expansion or resistance calibrated between the ice and steam fixed points — clinical versions keep the max via a kink. Heat escapes by conduction (metals via electrons), convection (rising warm fluid currents) and radiation (infrared; black emits/absorbs, silver reflects). The thermos blocks all three — proof the model works.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Temperature measures:", options: ["total heat energy", "average particle kinetic energy", "mass of a body", "volume expansion"], answer: 1, difficulty: 1, explanation: "A state, independent of amount." },
    { type: "mcq", q: "300 K equals:", options: ["27°C", "30°C", "273°C", "−27°C"], answer: 0, difficulty: 2, explanation: "300 − 273." },
    { type: "mcq", q: "Heat ALWAYS flows spontaneously:", options: ["cold to hot", "hot to cold", "between equal temps", "only in metals"], answer: 1, difficulty: 1, explanation: "The Second Law in one arrow." },
    { type: "mcq", q: "A bathtub at 40°C vs a 1,200°C spark — more total heat energy in:", options: ["the spark", "the bath", "equal", "neither has heat"], answer: 1, difficulty: 3, explanation: "Energy scales with mass as well as temperature." },
    { type: "mcq", q: "The ice and steam fixed points on the Celsius scale are:", options: ["0 and 50", "0 and 100", "32 and 212", "−273 and 0"], answer: 1, difficulty: 1, explanation: "Pure ice / steam at 1 atm." },
    { type: "mcq", q: "The kink in a clinical thermometer:", options: ["speeds response", "holds the maximum reading", "prevents breakage", "calibrates it"], answer: 1, difficulty: 2, explanation: "Snaps the mercury on cooling — read after removal." },
    { type: "mcq", q: "Convection can occur in:", options: ["solids only", "fluids (liquids & gases)", "vacuum", "any material"], answer: 1, difficulty: 1, explanation: "Matter must FLOW — solids can't." },
    { type: "mcq", q: "Metals conduct heat especially well because of:", options: ["dense atoms", "free electrons carrying energy", "their shine", "trapped air"], answer: 1, difficulty: 2, explanation: "Electron motion beats lattice jostling." },
    { type: "mcq", q: "The Sun warms Earth by:", options: ["conduction", "convection", "radiation", "none reaches space"], answer: 2, difficulty: 1, explanation: "EM waves cross the vacuum." },
    { type: "mcq", q: "Best absorber of radiant heat is a:", options: ["shiny white surface", "dull black surface", "mirror", "transparent glass"], answer: 1, difficulty: 1, explanation: "Matte black — and best emitter too." }
  ]
};
