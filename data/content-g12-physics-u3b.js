/* Content: Grade 12 Physics — Unit 3 (part B): topics 3-5 */
window.Lessons = window.Lessons || {};

Lessons["g12-physics-up3-t3"] = {
  overview: "Every object in a fluid gets pushed up — by exactly the weight of fluid it displaces. Archimedes' principle explains floating ships, sinking stones, balloons and hydrometers, and its discovery story is the most famous bath in science.",
  objectives: [
    "State Archimedes' principle and locate the upthrust",
    "Compute buoyant force F = ρ_fluid g V_displaced",
    "Apply float/sink conditions via densities",
    "Explain apparent weight loss in fluids",
    "Analyse ships, balloons, hydrometers and lactometers"
  ],
  simple: "<b>The fluid pushes back by the displaced weight.</b> A 1 kg metal piece (ρ 8 000) displaces 125 cm³ of water weighing 1.25 N — it 'loses' 1.25 N when immersed: apparent weight 8.55 N instead of 9.8. Steel ships float because the hull shape displaces enough WATER weight (not because steel is light); helium balloons float because the air they displace outweighs them.",
  detailed: "<p><b>The principle.</b> Upthrust = weight of displaced fluid: F_b = ρ_fluid × g × V_submerged. Cause: bottom faces sit deeper than top faces, and pressure rises with ρgh — the pressure difference integrated over the surface nets exactly the missing fluid's weight. Direction: vertically upward through the centre of buoyancy (centroid of the displaced volume).</p><p><b>Float or sink.</b> Compare weights: object W vs F_b when fully submerged ⇒ compare densities. ρ_object < ρ_fluid: rises and floats partially submerged. Equal: neutral (fish swim bladders, submarines' ballast). Greater: sinks (steel lump — until you shape it into a hull that encloses air and lowers mean density).</p><p><b>Fraction submerged.</b> A floater displaces its own weight: ρ_obj V g = ρ_fluid V_sub g ⇒ V_sub/V = ρ_obj/ρ_fluid. Ice (917) in seawater (1 025) shows only ~11% above — hence 'tip of the iceberg'.</p><p><b>Apparent weight.</b> Weigh a stone in air (W) then immersed (W′): loss = F_b = weight of displaced water. Density = W/(W−W′) × ρ_water — the balance method that allegedly caught the goldsmith adulterating the king's crown (Eureka!).</p><p><b>Instruments.</b> Hydrometers: weighted tubes sinking to a depth set by ρ_fluid (battery acid check, ethanol proofing). Lactometers test milk density for water adulteration — routine in Ethiopian dairy trade. Hot-air balloons: heated inside air is lighter than outside; lift = (ρ_out − ρ_in)Vg — same physics as helium.</p>",
  keyTerms: [
    { term: "Upthrust", def: "net upward fluid force = displaced weight" },
    { term: "Centre of buoyancy", def: "centroid of displaced volume" },
    { term: "Apparent weight", def: "true weight minus upthrust" },
    { term: "Displacement", def: "volume of fluid moved aside" },
    { term: "Hydrometer", def: "floating density meter" },
    { term: "Neutral buoyancy", def: "mean density exactly equals fluid's" }
  ],
  formulas: [
    { name: "Archimedes", formula: "F_b = ρ_fluid g V_displaced", meaning: "lift equals the weight of fluid moved", vars: [{ name: "V", meaning: "SUBMERGED volume only" }], when: "everything buoyant" },
    { name: "Floating fraction", formula: "V_sub/V = ρ_obj/ρ_fluid", meaning: "density ratio sets how low you ride", vars: [{ name: "ρ", meaning: "mean object density" }], when: "ships loading, icebergs" },
    { name: "Density by weighing", formula: "ρ_obj = W ρ_w/(W − W′)", meaning: "air weight over immersed weight loss", vars: [{ name: "W′", meaning: "apparent weight in water" }], when: "Archimedes' crown test" }
  ],
  workedExamples: [
    { problem: "2 kg block, volume 3 000 cm³, in water. Float or sink?", calculation: "ρ_block = 2/0.003 = 667 kg/m³ < 1000.", answer: "Floats; submerged fraction = 667/1000 ≈ ⅔." },
    { problem: "Crate (50 N, ρ 800) fully held under water: holding force?", calculation: "V = W/(ρg) = 50/8 000 = 6.25 L; F_b = 1000×10×6.25×10⁻³ = 62.5 N; hold = 62.5 − 50.", answer: "12.5 N downward — it wants to rise." },
    { problem: "Stone weighs 20 N in air, 15 N in water. Its density?", calculation: "loss 5 N = displaced water weight ⇒ V = 5/(1000×10); ρ = (20/10)/V... use formula ρ = W/(W−W′)×ρ_w = 20/5 × 1000.", answer: "4 000 kg/m³." },
    { problem: "Hot-air balloon lift per m³ (ρ_out 1.2, ρ_in 0.9 kg/m³)?", calculation: "(1.2−0.9)×9.8 = 2.94 N/m³.", answer: "≈ 3 N/m³ — a 1 700 m³ envelope lifts ~5 kN before envelope weight." }
  ],
  commonMistakes: [
    "Using total object volume when only part is submerged",
    "Using the object's density instead of the FLUID's in F_b",
    "Saying floating objects 'have no weight' — they weigh exactly what they displace",
    "Forgetting a ship's mean density includes the air inside its hull",
    "Calling upthrust a property of the object — it is the fluid's push"
  ],
  applications: [
    "Ship loading marks (Plimsoll lines) — freshwater vs seawater freeboard",
    "Submarine ballast tanks changing mean density on command",
    "Lactometers/hydrometers policing milk and battery acid in local trade",
    "Hot-air balloons and airships (lift = displaced air weight)"
  ],
  summary: "Fluid lifts by displaced weight: F_b = ρgV_sub, float when ρ_obj < ρ_fluid, ride low when close.",
  visuals: [],
  questions: [
    { type: "mcq", q: "The buoyant force equals the weight of the:", options: ["object", "displaced fluid", "container", "air above"], answer: 1, difficulty: 1, explanation: "Archimedes in one line." },
    { type: "mcq", q: "An object sinks when:", options: ["it is heavy", "its density exceeds the fluid's", "it is small", "its volume is large"], answer: 1, difficulty: 1, explanation: "Density comparison, not absolute weight." },
    { type: "mcq", q: "A wood block (ρ 600) in water submerges what fraction?", options: ["1/3", "1/2", "3/5", "4/5"], answer: 2, difficulty: 1, explanation: "V_sub/V = 600/1000 = 0.6." },
    { type: "mcq", q: "A steel ship floats because:", options: ["steel is lighter than water", "its hull encloses air, lowering mean density", "paint seals it", "its speed"], answer: 1, difficulty: 2, explanation: "Displacing a huge volume beats the solid-lump case." },
    { type: "mcq", q: "Iceberg fraction above seawater (917 vs 1025) ≈:", options: ["5%", "11%", "25%", "50%"], answer: 1, difficulty: 2, explanation: "1 − 917/1025 ≈ 0.105." },
    { type: "mcq", q: "A hydrometer sinks DEEPER in:", options: ["denser liquids", "less dense liquids", "warm air", "any liquid equally"], answer: 1, difficulty: 2, explanation: "Less density demands more displaced volume for the same weight." },
    { type: "mcq", q: "A balloon rises while upthrust exceeds its weight; it stops when:", options: ["air runs out", "outside air density fell enough that ρgV equals its weight", "gravity weakens", "it cools instantly"], answer: 1, difficulty: 3, explanation: "Equilibrium level: thinner air ⇒ thinner lift." },
    { type: "mcq", q: "Same key weighed in water then salt water. Apparent loss is:", options: ["greater in salt water", "greater in pure water", "equal", "zero both"], answer: 0, difficulty: 3, explanation: "Denser fluid ⇒ greater displaced weight ⇒ bigger apparent loss." }
  ]
};

Lessons["g12-physics-up3-t4"] = {
  overview: "Fluids in motion trade pressure for speed in exact accountancy: Bernoulli's equation is energy conservation for a flowing ideal fluid. It explains airplane wings, chimney drafts, spray bottles and why two ships drifting close attract.",
  objectives: [
    "Define streamlines and ideal (incompressible, non-viscous) flow",
    "Apply the continuity equation A₁v₁ = A₂v₂",
    "State Bernoulli: P + ½ρv² + ρgh = constant",
    "Explain lift, atomisers and venturi effects",
    "Solve pipe-constriction speed/pressure problems"
  ],
  simple: "<b>Fast fluid, low pressure.</b> Same water, half the pipe: it must double speed (continuity). Getting that extra kinetic energy costs pressure (Bernoulli). Wings curve and tilt so air accelerates over the top: lower pressure above helps push the plane up. Perfume atomisers drag air over a tube: low pressure lifts the liquid into the spray. One energy trade, a hundred machines.",
  detailed: "<p><b>Steady flow and streamlines.</b> Ideal-flow picture: each particle traces a streamline; velocity at any point is constant in time. Turbulence breaks streamlines into eddies (transition when Reynolds number ρvL/η passes ~2 000) — smoke rising laminar then chaotic is the visible switch.</p><p><b>Continuity.</b> Incompressible flow conserves volume: A v = constant. Blood through a narrowed vessel speeds up; rivers race through gorges. For compressible flow the rule becomes mass flow: ρ₁A₁v₁ = ρ₂A₂v₂.</p><p><b>Bernoulli derived.</b> Pressure forces doing net work on a fluid element change its kinetic + potential energy per volume: P + ½ρv² + ρgh = constant along a streamline. Terms: static pressure P, dynamic pressure ½ρv², hydrostatic ρgh. It is conservation of energy, not a new force.</p><p><b>Lift (exam-honest version).</b> Curved/tilted wing: flow over the cambered top gains speed ⇒ reduced pressure; angle of attack also deflects air downward (Newton's 3rd). Real wings need BOTH explanations — the pressure difference integrates into lift L = ½ρv²S C_L; stall occurs when attack exceeds ~15° and flow separates.</p><p><b>Applications.</b> Venturi: constriction speeds flow, drops pressure — aspirators, carburettors, flow meters. Atomiser/spray: an air jet over a tube lifts liquid into the stream (perfume; knapsack sprayers on Ethiopian farms). Chimney draft: wind across the top lowers P, pulling smoke out. Two trains passing: constricted air accelerates, pressure drops, coaches lurch together — stand behind the yellow line. Beware the 'equal transit time' myth: air over the top is genuinely faster due to curvature and circulation, not because parcels promised to meet at the trailing edge.</p><p><b>Torricelli.</b> A tank hole at depth h: v = √(2gh) — free-fall speed, Bernoulli with equal pressures at surface and outlet. Full-drain time scales as √H: keep it in mind when emptying reservoirs.</p>",
  keyTerms: [
    { term: "Streamline", def: "tangent = velocity everywhere; no crossings in steady flow" },
    { term: "Continuity", def: "A v constant for incompressible flow" },
    { term: "Dynamic pressure", def: "½ρv² — the speed's pressure account" },
    { term: "Venturi", def: "constriction metering flow via pressure drop" },
    { term: "Stall", def: "flow separation killing lift at high attack angle" },
    { term: "Torricelli speed", def: "v = √(2gh) from a tank outlet" }
  ],
  formulas: [
    { name: "Continuity", formula: "A₁v₁ = A₂v₂", meaning: "same volume, smaller pipe = faster", vars: [{ name: "A", meaning: "cross-section" }], when: "pipes, vessels, rivers" },
    { name: "Bernoulli", formula: "P + ½ρv² + ρgh = const", meaning: "pressure vs speed vs height trade", vars: [{ name: "½ρv²", meaning: "dynamic term" }], when: "along one streamline, ideal fluid" },
    { name: "Torricelli", formula: "v = √(2gh)", meaning: "efflux = free-fall from head", vars: [{ name: "h", meaning: "surface-to-hole depth" }], when: "tank drainage, fountains" }
  ],
  workedExamples: [
    { problem: "Pipe halves in area. Speed factor?", calculation: "A v = const: v₂ = v₁A₁/A₂ = 2v₁.", answer: "Doubles; pressure falls by ½ρ(v₂²−v₁²) = 1.5ρv₁²." },
    { problem: "Water exits a hole 5 m below the surface. Speed?", calculation: "v = √(2×10×5) = √100.", answer: "10 m/s." },
    { problem: "Aircraft: 250 m/s at sea level (ρ 1.225), wing area 30 m², C_L = 0.5. Lift?", calculation: "L = ½×1.225×250²×30×0.5 ≈ 287 kN.", answer: "≈ 29 tonnes-force — airliner-scale cruise lift." },
    { problem: "Venturi in water: P drops 3 kPa into a 10 m/s throat. Upstream speed?", calculation: "½ρ(v₂²−v₁²) = 3000 ⇒ 500(100−v₁²) = 3000 ⇒ v₁² = 94.", answer: "v₁ ≈ 9.7 m/s — pressure gauging a speed." }
  ],
  commonMistakes: [
    "Applying Bernoulli across streamlines fed by fans/pumps (energy added)",
    "Repeating the equal-transit myth as fact",
    "Forgetting continuity presumes incompressibility (breaks beyond ~Mach 0.3)",
    "Mixing absolute and gauge pressure between Bernoulli points",
    "Ignoring viscosity: real pipes lose head to friction"
  ],
  applications: [
    "Aircraft wings and racing-car downforce (inverted wings)",
    "Pesticide sprayers and perfume atomisers",
    "Venturi flow meters in water works and fuel injection",
    "Roof wind scour and chimney drafting"
  ],
  summary: "Speed costs pressure: A v conserved; P + ½ρv² + ρgh conserved. Wings, sprays, drafts — one trade.",
  visuals: [],
  questions: [
    { type: "mcq", q: "The continuity equation expresses conservation of:", options: ["energy", "mass (volume flow rate)", "momentum", "pressure"], answer: 1, difficulty: 1, explanation: "Incompressible: volume in = volume out per second." },
    { type: "mcq", q: "Where fluid speed is highest, static pressure is:", options: ["highest", "lowest", "unchanged", "always zero"], answer: 1, difficulty: 1, explanation: "Bernoulli's headline." },
    { type: "mcq", q: "Water through a nozzle with 10× smaller area exits:", options: ["10× faster", "10× slower", "same speed", "100× faster"], answer: 0, difficulty: 1, explanation: "v ∝ 1/A." },
    { type: "mcq", q: "Tank hole at 20 m head: efflux speed ≈ (g = 10):", options: ["10 m/s", "20 m/s", "40 m/s", "200 m/s"], answer: 1, difficulty: 2, explanation: "√(2×10×20) = 20 m/s." },
    { type: "mcq", q: "Two ships passing close are drawn together because:", options: ["wake tides", "fast water between them lowers pressure", "magnetic hulls", "propeller suction"], answer: 1, difficulty: 2, explanation: "Constricted flow accelerates; the pressure gap pushes hulls inward." },
    { type: "mcq", q: "The dynamic pressure term in Bernoulli is:", options: ["ρgh", "½ρv²", "P only", "v²/2g"], answer: 1, difficulty: 2, explanation: "Kinetic energy per unit volume." },
    { type: "mcq", q: "A roof lifts off in a storm mainly because:", options: ["rain weight", "fast wind above drops pressure vs still air inside", "heat", "antennas"], answer: 1, difficulty: 3, explanation: "Indoor ~1 atm vs reduced outdoor P: net upward load per m²." },
    { type: "mcq", q: "Bernoulli's clean form fails for real fast fluids mainly due to:", options: ["viscous dissipation", "gravity", "excess pressure", "incompressibility"], answer: 0, difficulty: 3, explanation: "Friction converts mechanical energy to heat along the path." }
  ]
};

Lessons["g12-physics-up3-t5"] = {
  overview: "High pressure is a quiet hazard with loud consequences: dams, gas cylinders, tyres, scuba hoses, hydraulic lines and blood vessels all live by the same safety rules — know the rating, respect the stored energy, and design a way for pressure to escape before it escapes for you.",
  objectives: [
    "Relate stored energy to pressure × volume (why cylinders are bombs)",
    "Read pressure ratings, factors of safety and test pressures",
    "Explain relief valves, bursts discs and fuses in systems",
    "Analyse gas-cylinder and tyre safety practice",
    "Discuss diving injuries from pressure (bends, barotrauma)"
  ],
  simple: "<b>Pressure is money in a bank — with interest in explosions.</b> A filled scuba bottle stores ~11 000 kPa × 12 L ≈ 1.3 MJ of compressive energy: the same discipline that keeps a hydraulic press working keeps it from becoming a grenade. Safety = rate it, test it above working pressure, and give the pressure a planned exit (relief valve) instead of the weakest joint.",
  detailed: "<p><b>Stored energy.</b> Compressed gas energy ≈ P·V (times a factor ~3.5 for air at high ratio): a 12 L dive bottle at 200 bar holds ~800 kJ — comparable to a hand grenade's blast. That is why cylinders are steel or carbon-wrapped, hydrostatically tested every 5 years, and never used past inspection dates. Fractured cylinders in Ethiopian welding shops (oxygen/acetylene) historically caused accidents through abuse: dropped valves become torpedoes.</p><p><b>Ratings and margins.</b> Every vessel carries a working pressure (WP) well below its burst pressure; codes demand safety factors (often ≥ 2–4) and proof tests at 1.5×WP. Tyres: max inflation molded on the sidewall; a hot tyre reads high gauge pressure (gas laws: P ∝ T at fixed V) — never bleed hot air, or it runs low and overheats when cold. Overloaded vehicles under-inflated tyres are a top Ethiopian road-fatality physics chain: flexing heat → burst → loss of control.</p><p><b>Planned escapes.</b> Relief valves (boilers, refrigerators, pressure cookers) lift at set pressure; the cooker's weight jiggles at ~100 kPa gauge on purpose — the hissing IS the safety working. A blocked vent converts the cooker to a bomb: clean the pipe every use. Burst discs (gas cylinders) and fuse plugs (old air-conditioners, melting at ~100 °C) fail deliberately, once. Hydraulic systems carry pressure accumulators and gauges so leaks are visible before joints fail.</p><p><b>Diving and physiology.</b> +1 atm per 10 m of seawater. Air spaces equalise or barotrauma results (ears, lungs — never hold your breath ascending: expanding lung air tears). At depth, more gas dissolves in blood (Henry's law); rising too fast bubbles it out in tissues — decompression sickness, the bends. Treatment: recompression. High-pressure air also becomes narcotic and, past ~40 m, oxygen poisons — depth ratings exist for bodies as well as tanks.</p><p><b>Bigger structures.</b> Dams hold ρgh against enormous area: total force = mean pressure × area (a 60 m dam face feels tens of meganewtons) — hence the triangular thick base, seepage drainage galleries and spillways that never let water overtop the crest. The 2020s global reminder: Gibe dams were engineered exactly around these statics.</p>",
  keyTerms: [
    { term: "Working pressure", def: "rated maximum normal use pressure" },
    { term: "Safety factor", def: "burst strength ÷ working pressure" },
    { term: "Relief valve", def: "opens at set pressure: the planned escape" },
    { term: "Burst disc / fuse plug", def: "one-shot deliberate failure element" },
    { term: "Barotrauma", def: "pressure-difference tissue injury" },
    { term: "Decompression sickness", def: "coming out of solution: the bends" },
    { term: "Hydrostatic test", def: "periodic proof-pressurising of cylinders" }
  ],
  formulas: [
    { name: "Stored gas energy", formula: "E ≈ 3.5 P V (air, high ratio)", meaning: "pressure × volume is money and danger", vars: [{ name: "P", meaning: "gauge, in Pa" }, { name: "V", meaning: "internal volume" }], when: "cylinder hazard sizing" },
    { name: "Gas-law warning", formula: "P ∝ T (fixed V)", meaning: "heat a sealed tank, raise its pressure", vars: [{ name: "T", meaning: "kelvin!" }], when: "cylinders in sun, tyres on hot roads" },
    { name: "Dam load", formula: "F = ½ρgH² × width", meaning: "triangular pressure profile ⇒ half the base pressure over the height", vars: [{ name: "H", meaning: "water depth" }], when: "structures holding water" }
  ],
  workedExamples: [
    { problem: "A 12 L dive bottle at 200 bar stores roughly what energy?", calculation: "E ≈ 3.5 × 2×10⁷ Pa × 0.012 m³ = 840 kJ.", answer: "≈ 0.8 MJ — grenade-class if the shell fails." },
    { problem: "Tyre at 220 kPa gauge, 20 °C. Heated to 60 °C sealed. New gauge pressure?", calculation: "Absolute 321 kPa × (333/293) = 365 kPa absolute.", answer: "≈ 264 kPa gauge (+20%): never bleed hot tyres." },
    { problem: "Gas cylinder (40 L, 150 bar) vented through a relief valve at full flow. How much atmosphere's worth?", calculation: "150 bar × 40 L = 6 000 L at 1 atm equivalent.", answer: "Six cubic metres of stored air: enough to burst a sealed room's weak wall if confined." },
    { problem: "A 20 m-wide dam retaining 10 m water. Total horizontal force?", calculation: "F = ½×1000×10×10²×20 = 10⁷ N.", answer: "10 MN — as if 1 000 tonnes pressed sideways." }
  ],
  commonMistakes: [
    "Bleeding hot tyres to 'fix' a high reading (loses correct cold inflation)",
    "Using oxygen cylinders near grease (high-pressure O₂ ignites oil explosively)",
    "Blocking or weighting down a relief valve to stop hissing",
    "Holding breath while scuba-diving ascending (expanding air lung injury)",
    "Assuming pressure ratings care about age — metal fatigues; test dates matter"
  ],
  applications: [
    "Ethiopian highways: tyre-burst prevention culture (pressure gauges at every fuelling stop)",
    "Hospital oxygen: regulators, flowmeters and fire discipline",
    "Cooking with pressure where water boils cold (highlands + cookers)",
    "Micro-hydropower penstocks rated for their head (Gibe-style engineering)"
  ],
  summary: "Pressure stores energy; safety rates it, tests it, and plans its escape (valves/discs). The hiss you hear is the system obeying its design.",
  visuals: [],
  questions: [
    { type: "mcq", q: "A sealed gas cylinder left in strong sun risks:", options: ["freezing", "pressure rising with temperature past its rating", "losing mass", "rusting instantly"], answer: 1, difficulty: 1, explanation: "P ∝ T at constant V: heat pressurises." },
    { type: "mcq", q: "The hissing weight on a pressure cooker is:", options: ["a defect", "the relief valve doing its safety job", "a whistle toy", "a pressure gauge"], answer: 1, difficulty: 1, explanation: "It vents above the set gauge pressure — by design." },
    { type: "mcq", q: "Safety factor 3 on a vessel means burst pressure is:", options: ["3× the working pressure", "⅓ of it", "equal", "zero"], answer: 0, difficulty: 1, explanation: "Strength margin above service pressure." },
    { type: "mcq", q: "The bends in divers result from:", options: ["cold", "gas bubbles coming out of solution during fast ascent", "salt", "bright light"], answer: 1, difficulty: 2, explanation: "Henry's law in reverse: dropping pressure releases dissolved gas." },
    { type: "mcq", q: "Why never bleed a hot tyre's air?", options: ["wastes money", "the high reading is thermal; bleeding leaves it under-inflated when cold", "flattens permanently", "cuts tubes"], answer: 1, difficulty: 2, explanation: "Restore cold pressure after cooling; correct inflation is judged cold." },
    { type: "mcq", q: "Oxygen cylinders forbid grease because:", options: ["messy", "grease burns violently in high-pressure oxygen", "smell", "it rusts valves"], answer: 1, difficulty: 2, explanation: "PRESSURE + O₂ + fuel = fire, no spark needed." },
    { type: "mcq", q: "Scuba divers must breathe out while ascending because:", options: ["buoyancy drops", "lung air expands ~1/3 per 10 m and can rupture tissue", "water enters", "nitrogen is heavy"], answer: 1, difficulty: 3, explanation: "Boyle's law inside the body — equalise or tear." },
    { type: "mcq", q: "Hydrostatic cylinder testing checks:", options: ["paint", "shell integrity and leaks at proof pressure", "gas content", "weight"], answer: 1, difficulty: 3, explanation: "Water pressurised above WP: safe medium (nearly incompressible ⇒ low stored energy)." }
  ]
};
