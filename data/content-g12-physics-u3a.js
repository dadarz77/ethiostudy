/* Content: Grade 12 Physics — Unit 3 (part A): Fluid Statics, topics 1-2 */
window.Lessons = window.Lessons || {};

Lessons["g12-physics-up3-t1"] = {
  overview: "Fluids — liquids and gases — share one defining weakness: they cannot resist a shear at rest. Everything about stationary fluids follows: density as the basic property, pressure acting equally in all directions, and pressure growing with depth.",
  objectives: [
    "Define density ρ = m/V with typical values",
    "Distinguish solids, liquids and gases by arrangement and compressibility",
    "Define pressure as normal force per area (Pascal)",
    "State that pressure at a point in a static fluid is isotropic",
    "Relate upthrust origins to the pressure gradient"
  ],
  simple: "<b>What makes a fluid a fluid.</b> Solids hold shape; fluids yield to any push and take their container's form. Liquids are nearly incompressible (one fixed volume), gases squeeze and expand freely. Inside a still fluid, pressure at a point pushes equally in every direction — otherwise the fluid would be flowing, not resting. Density (mass per volume) says how much stuff is packed in; pressure (force per area) says how hard it pushes.",
  detailed: "<p><b>States compared.</b> Solids: fixed shape and volume, shear-resistant. Liquids: fixed volume, no fixed shape, tiny compressibility — hydraulic oil changes volume <1% under 10 MPa. Gases: fill any container, highly compressible, density tracks pressure and temperature (air at sea level 1.2 kg/m³, at 5 km about 0.7). The Ethiopian highlands (2 400 m) hold ~25% thinner air: engines breathe less, boiling point drops to ~92 °C — everyday fluid-physics consequences of altitude.</p><p><b>Density.</b> ρ = m/V (kg/m³): water 1 000, air 1.2, mercury 13 600, gold 19 300. Relative density compares with water (dimensionless): a rock with RD 2.6 has ρ 2 600 kg/m³. Measurement: mass on a balance, volume by displacement for irregular shapes — the quantity Archimedes exploited for the crown (next-next topic).</p><p><b>Pressure at a point.</b> P = F⊥/A, unit Pa = N/m². A 70 kg person on one high-heel (0.5 cm² tip) presses ~1.4 MPa — more than a car tyre's 200 kPa×7. Isotropy: a tiny submerged prism feels identical pressure from every face at the same depth; any imbalance would immediately flow. Pressure is thus a scalar field in statics, not a directional force — the FORCE on a surface is P×A perpendicular to that surface.</p><p><b>Depth dependence.</b> Descending adds the weight of the layer above: ΔP = ρgΔh. The full law P = P₀ + ρgh and its devices come in the next topic; here know the shape: pressure rises linearly with depth, proportional to density — 10 m of water ≈ one atmosphere, so a diver at 10 m breathes under twice the sea-level pressure.</p><p><b>Why things float (preview).</b> Because pressure grows with depth, the underside of a immersed body is pushed harder than its topside. The unbalanced force — upthrust — equals the displaced fluid's weight. That is Archimedes' principle; the cause is the pressure gradient you now own.</p>",
  keyTerms: [
    { term: "Fluid", def: "substance that flows; liquid or gas" },
    { term: "Density", def: "mass per volume, ρ (kg/m³)" },
    { term: "Pressure", def: "normal force per area, P (Pa)" },
    { term: "Isotropic pressure", def: "equal in all directions at rest" },
    { term: "Incompressible", def: "volume nearly fixed (liquids)" },
    { term: "Relative density", def: "density compared to water" }
  ],
  formulas: [
    { name: "Density", formula: "ρ = m/V", meaning: "compactness of matter", vars: [{ name: "water", meaning: "1000 kg/m³" }], when: "material identification" },
    { name: "Pressure", formula: "P = F/A", meaning: "spread the same force over less area, hurt more", vars: [{ name: "F", meaning: "component normal to surface" }], when: "all statics" },
    { name: "Pressure increment", formula: "ΔP = ρgΔh", meaning: "each deeper metre adds weight per area", vars: [{ name: "g", meaning: "9.8 N/kg" }], when: "depth problems, buoyancy cause" }
  ],
  workedExamples: [
    { problem: "A 2 kg metal piece displaces 500 cm³. Its density and RD?", calculation: "ρ = 2/5×10⁻⁴ = 4 000 kg/m³; RD = 4 000/1 000.", answer: "4 000 kg/m³, RD 4." },
    { problem: "Force on a dam gate 2 m × 3 m with mean water depth pressure 30 kPa?", calculation: "F = P×A = 30 000 × 6.", answer: "180 kN — the reason dams are thicker at the base." },
    { problem: "A 600 N person stands on both feet (240 cm² total). Footprint pressure?", calculation: "P = 600/0.024 = 25 000 Pa.", answer: "25 kPa — a third of an atmosphere; high heels multiply this ~10×." },
    { problem: "Brine sample 1.03 kg/L. RD and mass of 5 L?", calculation: "ρ = 1 030 kg/m³, RD 1.03; m = ρV = 1.03×5.", answer: "RD 1.03, 5.15 kg." }
  ],
  commonMistakes: [
    "Thinking liquids resist shear like solids — at rest they cannot; they flow until they can't",
    "Saying pressure at a point has a direction (force on a surface does)",
    "Using total force instead of normal component in P = F/A",
    "Mixing kg and newtons in weight-pressure problems",
    "Assuming gases are 'weightless' — the atmosphere's weight is 10⁵ Pa on every surface"
  ],
  applications: [
    "Dam and tank design: pressure load grows linearly with depth",
    "Hydrometers and dairy quality (RD of milk detects water adulteration)",
    "Highland cooking: lower air pressure → lower boiling point → longer stew times",
    "Scuba fundamentals: every 10 m of seawater adds an atmosphere"
  ],
  summary: "Fluids flow; density packs, pressure pushes: P = F/A, isotropic at rest, ΔP = ρgΔh with depth.",
  visuals: [],
  questions: [
    { type: "mcq", q: "A fluid at rest cannot resist:", options: ["compression", "shear", "gravity", "any force"], answer: 1, difficulty: 1, explanation: "Shear stress makes it flow — the defining property." },
    { type: "mcq", q: "SI unit of pressure:", options: ["N/m", "Pa", "J/m³ only", "kg/m³"], answer: 1, difficulty: 1, explanation: "Pascal = N/m²." },
    { type: "mcq", q: "Pressure at a point in a static fluid is:", options: ["downward", "upward", "equal in all directions", "sideways"], answer: 2, difficulty: 1, explanation: "Isotropy: imbalance would mean flow." },
    { type: "mcq", q: "Which is nearly incompressible?", options: ["air", "water", "steam", "helium"], answer: 1, difficulty: 2, explanation: "Liquids: fixed volume under ordinary pressure." },
    { type: "mcq", q: "Same force, smaller area → pressure:", options: ["smaller", "larger", "same", "zero"], answer: 1, difficulty: 2, explanation: "P = F/A — the tack's bite." },
    { type: "mcq", q: "Water density 1000 kg/m³ in g/cm³ is:", options: ["1", "10", "0.1", "1000"], answer: 0, difficulty: 2, explanation: "1 g/cm³ = 1000 kg/m³." },
    { type: "mcq", q: "Upthrust on a submerged body comes from:", options: ["surface tension", "pressure being greater at the deeper bottom face", "magnetism", "viscosity"], answer: 1, difficulty: 3, explanation: "ΔP = ρgΔh across the body nets an upward force." },
    { type: "mcq", q: "On the Entoto hills (3 200 m), air pressure is roughly:", options: ["double sea level", "the same", "about 70% of sea level", "zero"], answer: 2, difficulty: 3, explanation: "Pressure falls exponentially with altitude — ~0.7 atm at 3 km." }
  ]
};

Lessons["g12-physics-up3-t2"] = {
  overview: "This topic turns the depth law P = ρgh into tools: hydraulic multiplication (Pascal's principle), barometers and manometers for measuring pressure, and the gauge/absolute distinction that governs tyres, tanks and diving.",
  objectives: [
    "Derive and apply P = ρgh for liquids at rest",
    "State Pascal's principle and compute hydraulic forces",
    "Distinguish absolute, gauge and atmospheric pressure",
    "Read a mercury barometer and U-tube manometer",
    "Solve multi-fluid and depth problems"
  ],
  simple: "<b>Depth is weight; confinement is a lever.</b> A 10 m water column adds one atmosphere of pressure — P = ρgh is the whole ruler. Trap fluid in a closed system and any applied pressure travels undiminished everywhere (Pascal): a foot on a small piston lifts a car on a big one, force multiplied by the area ratio, distance sacrificed to match.",
  detailed: "<p><b>The liquid pressure law.</b> A column of height h, area A weighs ρAhg; spread over A it presses ρgh — independent of container shape or total volume (the hydrostatic paradox: a thin spire and a wide lake exert the same pressure at the same depth). Full pressure at depth: P = P₀ + ρgh, P₀ usually atmospheric. Water: +1 atm per ~10 m; mercury: per 0.76 m.</p><p><b>Pascal's principle and hydraulics.</b> In a confined fluid, externally applied pressure transmits undiminished. Two pistons: F₁/A₁ = F₂/A₂ ⇒ F₂ = F₁(A₂/A₁). A 200 N pedal force on a 2 cm² master cylinder drives 20 cm² calipers at 2 000 N — tenfold, and the brake lines merely carry pressure. Work stays balanced: the small piston travels 10× farther. Jacks, excavator arms, aircraft controls, hydraulic brakes: one principle, everywhere.</p><p><b>Atmospheric pressure & the barometer.</b> Torricelli's tube: mercury stands 760 mm because air presses the reservoir with 101.3 kPa = ρ_Hg g × 0.76. Vacuum crowns the tube. Aneroid barometers use a collapsed capsule; falling readings warn of storms. 1 atm = 101 325 Pa = 76 cmHg = 1.013 bar. Suction pumps cannot lift water above ~10.3 m — atmosphere, not the pump, does the lifting.</p><p><b>Manometers and gauges.</b> A U-tube compares pressures: ΔP = ρgΔh reads the height difference directly (that's how blood-pressure cuffs once read mm-of-mercury). Gauge pressure = above atmosphere (tyre 220 kPa gauge = 321 kPa absolute); absolute includes the air. Vacuum gauges read how far below atmosphere.</p><p><b>Everyday checks.</b> Pressure cooker: sealing lets gauge pressure reach ~100 kPa, so water boils near 120 °C and beans soften in half the time — a kitchen-applied ρgh/phase story. Diver at 20 m: 3 atm absolute; ears ache because tissue pressure lags the water's.</p>",
  keyTerms: [
    { term: "Hydrostatic law", def: "P = P₀ + ρgh" },
    { term: "Pascal's principle", def: "confined fluid transmits pressure equally" },
    { term: "Gauge pressure", def: "measured above atmosphere" },
    { term: "Absolute pressure", def: "gauge + 101.3 kPa" },
    { term: "Barometer", def: "atm pressure from a mercury column height" },
    { term: "Manometer", def: "U-tube reading pressure differences" }
  ],
  formulas: [
    { name: "Depth pressure", formula: "P = P₀ + ρgh", meaning: "column weight per area, added to surface", vars: [{ name: "h", meaning: "depth below free surface" }], when: "every stationary liquid" },
    { name: "Hydraulic press", formula: "F₁/A₁ = F₂/A₂", meaning: "equal pressure, unequal pistons", vars: [{ name: "A", meaning: "piston face area" }], when: "jacks, brakes, lifts" },
    { name: "Manometer", formula: "ΔP = ρgΔh", meaning: "height gap = pressure gap", vars: [{ name: "Δh", meaning: "column difference" }], when: "gas lines, blood pressure" }
  ],
  workedExamples: [
    { problem: "Gauge pressure at the bottom of a 6 m tank (water)?", calculation: "ρgh = 1000×9.8×6 = 58 800 Pa.", answer: "58.8 kPa gauge, ≈160 kPa absolute." },
    { problem: "Car lift: master piston 1 cm², wheel cylinder 10 cm², pedal force 300 N. Clamp force?", calculation: "F₂ = 300×10/1.", answer: "3 kN per wheel cylinder — times area ratio, split by leverage." },
    { problem: "A manometer shows 40 cm water column above atmosphere. Gas pressure absolute?", calculation: "ΔP = 1000×10×0.4 = 4 kPa; total = 101.3 + 4.", answer: "≈ 105.3 kPa." },
    { problem: "Maximum suction-lift height for a pump (atm = 101 kPa)?", calculation: "h = P/(ρg) = 101 000/(1000×9.8).", answer: "≈ 10.3 m — deeper wells need submersible pumps instead." }
  ],
  commonMistakes: [
    "Using height from the bottom instead of depth from the surface in ρgh",
    "Adding the area ratio the wrong way (big force needs big area)",
    "Confusing gauge and absolute (gas laws and diving need absolute)",
    "Believing suction 'pulls' water — the atmosphere pushes it up",
    "Forgetting manometer fluid density (40 cm of mercury ≠ 40 cm of water)"
  ],
  applications: [
    "Hydraulic excavators and bulldozer arms (multiplication by ×100)",
    "Brake systems in every car and motorbike",
    "Water supply: towers give 200 kPa per 20 m of height — gravity instead of pumps",
    "Pressure cookers halting the highland boiling-point penalty"
  ],
  summary: "Depth presses (ρgh), confinement multiplies (Pascal), atmosphere supports (76 cmHg), gauges read above air. Hydraulics = area ratio.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Liquid pressure at depth h depends on:", options: ["container shape", "ρ, g, h", "total volume", "surface area"], answer: 1, difficulty: 1, explanation: "P = ρgh — the hydrostatic paradox ignores shape." },
    { type: "mcq", q: "Pascal's principle says confined-fluid pressure is transmitted:", options: ["to the bottom only", "equally everywhere", "with loss", "to the surface"], answer: 1, difficulty: 1, explanation: "Undiminished in all directions." },
    { type: "mcq", q: "Tyre gauges read 220 kPa. Absolute pressure ≈:", options: ["119 kPa", "220 kPa", "321 kPa", "440 kPa"], answer: 2, difficulty: 2, explanation: "Add 1 atm: 220 + 101 = 321 kPa." },
    { type: "mcq", q: "760 mm of mercury balances approximately:", options: ["10 kPa", "101 kPa", "1 MPa", "1 kPa"], answer: 1, difficulty: 2, explanation: "It IS one atmosphere: 101.3 kPa." },
    { type: "mcq", q: "A hydraulic jack multiplies force at the cost of:", options: ["energy", "distance moved", "fluid mass", "pressure"], answer: 1, difficulty: 2, explanation: "Work conserved: less force over more distance in, more force over less out." },
    { type: "mcq", q: "A suction pump fails beyond ~10 m because:", options: ["hoses leak", "atmosphere can only support a 10 m water column", "pumps weaken", "water sticks"], answer: 1, difficulty: 3, explanation: "P_atm = ρg×10.3 m is the push doing the lift." },
    { type: "mcq", q: "Water tower 25 m above a tap delivers gauge pressure ≈ (g=10):", options: ["25 kPa", "250 kPa", "2 500 kPa", "2.5 kPa"], answer: 1, difficulty: 3, explanation: "1000×10×25 = 250 kPa — one strong city-supply pressure." },
    { type: "mcq", q: "A pressure cooker cooks faster mainly because:", options: ["sealing raises boiling point via higher pressure", "it shrinks pots", "steam is hotter than fire", "salt enters"], answer: 0, difficulty: 3, explanation: "~2 atm absolute → water at ~120 °C before it boils — reaction rates climb." }
  ]
};
