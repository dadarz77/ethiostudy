/* Content: Grade 12 Physics — Unit 2 (part B): topics 3-5 */
window.Lessons = window.Lessons || {};

Lessons["g12-physics-up2-t3"] = {
  overview: "Torque is the turning effect of a force, and Newton's second law has a rotational twin: net torque changes angular momentum just as net force changes momentum. Flywheels, wrenches, seesaws and spinning skaters all obey this single extension of mechanics.",
  objectives: [
    "Define torque τ = rF sinθ and its sign convention",
    "State rotational equilibrium: ΣF = 0 and Στ = 0",
    "Apply τ = Iα with moments of inertia",
    "Use angular momentum L = Iω and its conservation",
    "Solve seesaw, ladder and wheel problems"
  ],
  simple: "<b>Push at the right lever arm.</b> The same 20 N on a 0.4 m wrench turns twice as hard as on a 0.2 m one — torque is force times perpendicular distance. A body at rest stays unrotating only if BOTH net force and net torque vanish. And a skater pulling arms in spins faster because angular momentum Iω refuses to change.",
  detailed: "<p><b>Torque defined.</b> τ = rF sinθ, where r runs from pivot to the point of force application and θ is the angle between them; equivalently τ = F × lever arm (perpendicular distance from pivot to the force line). Unit N·m — deliberately named joule-free to avoid confusion with energy: torque is a vector along the axis (right-hand rule), energy is a scalar.</p><p><b>Equilibrium (statics).</b> Two conditions for no rotation and no translation: ΣF = 0 and Στ = 0 about ANY point. Classic seesaw: m₁gx₁ = m₂gx₂ — a 30 kg child sits 2 m out, balancing a 60 kg child at 1 m. Ladder problems add friction at the floor; beam problems choose the pivot at an unknown reaction to delete it from the torque equation.</p><p><b>Newton's second law, rotated.</b> τ_net = Iα, with moment of inertia I = Σmr² encoding how far mass sits from the axis: solid disc ½MR², hoop MR², sphere ⅖MR². Bigger I = harder to spin up, exactly like mass resists linear acceleration.</p><p><b>Angular momentum.</b> L = Iω is conserved when net external torque is zero. The figure skater: arms out I large ω small; arms in I halves, ω doubles. L = mvr works for point masses too (a planet's orbital L), which foreshadows Kepler's second law.</p><p><b>Rotational energy.</b> KE = ½Iω² — rolling bodies split it between translation and rotation, so a hoop (I = MR²) accelerates down slopes slower than a disc (½MR²): the race of the rolling shapes is an I-value contest, not a mass one.</p>",
  keyTerms: [
    { term: "Torque", def: "turning effect τ = rF sinθ" },
    { term: "Lever arm", def: "perpendicular pivot-to-line-of-force distance" },
    { term: "Moment of inertia", def: "rotational mass I = Σmr²" },
    { term: "Angular acceleration", def: "α, rate of spin change" },
    { term: "Angular momentum", def: "L = Iω, conserved without external torque" },
    { term: "Couple", def: "equal opposite forces: pure torque, zero net force" }
  ],
  formulas: [
    { name: "Torque", formula: "τ = rF sinθ", meaning: "force × distance × angle factor", vars: [{ name: "r", meaning: "pivot to force point" }, { name: "θ", meaning: "90° maximises" }], when: "all turning problems" },
    { name: "Rotational 2nd law", formula: "τ = Iα", meaning: "torque spawns angular acceleration", vars: [{ name: "I", meaning: "kg·m²" }], when: "spinning-up and braking" },
    { name: "Conservation", formula: "I₁ω₁ = I₂ω₂", meaning: "spin trades with shape", vars: [{ name: "—", meaning: "only if τ_ext = 0" }], when: "skaters, divers, collapsing stars" },
    { name: "Rotational KE", formula: "KE = ½Iω²", meaning: "energy stored in spin", vars: [{ name: "ω", meaning: "rad/s" }], when: "flywheels, rolling races" }
  ],
  workedExamples: [
    { problem: "A 40 N force at 0.25 m from a hinge, perpendicular. Torque?", calculation: "τ = 0.25 × 40 × sin90° = 10 N·m.", answer: "10 N·m opening the door." },
    { problem: "Seesaw: 25 kg at 1.6 m from fulcrum balances a 20 kg child at?", calculation: "25×1.6 = 20×d → d = 2 m.", answer: "2 m — the lighter sits farther out." },
    { problem: "Skater: I = 3.6 kg·m² at ω = 2 rad/s pulls in to I = 1.2. New ω?", calculation: "L = Iω = 3.6×2 = 7.2 kg·m²/s conserved; ω = 7.2/1.2 = 6 rad/s.", answer: "6 rad/s — three-fold spin-up, energy came from her muscles." },
    { problem: "A 2 kg solid disc (R = 0.1 m) spun up to 100 rad/s. Stored energy?", calculation: "I = ½MR² = 0.01 kg·m²; KE = ½×0.01×100² = 50 J.", answer: "50 J — modest flywheel, the idea scales to tonnes." }
  ],
  commonMistakes: [
    "Taking r·F without the sinθ when the force is oblique",
    "Balancing forces but forgetting to check torques (a body can translate AND rotate)",
    "Calling N·m a joule for torque",
    "Believing heavy objects roll faster (shape — I-value — decides, not mass)",
    "Applying Iω conservation when external torque exists (brakes, friction)"
  ],
  applications: [
    "Cranes and balance: counter-torques keep booms level",
    "Car engines: flywheels smooth the power strokes",
    "Diving and figure skating: tucked rotations",
    "Torque wrenches: calibrated N·m on wheel bolts"
  ],
  summary: "Torque turns, I resists, L conserved: τ = rF sinθ, τ = Iα, I₁ω₁ = I₂ω₂ — the rotational Newton.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Torque is maximum when the force is applied:", options: ["along the arm", "perpendicular to the arm", "at the pivot", "at 45° only"], answer: 1, difficulty: 1, explanation: "sinθ = 1 at 90°." },
    { type: "mcq", q: "A body is in complete equilibrium when:", options: ["ΣF = 0 only", "Στ = 0 only", "ΣF = 0 and Στ = 0", "it is stationary"], answer: 2, difficulty: 1, explanation: "Neither translation nor rotation may start." },
    { type: "mcq", q: "Moment of inertia depends on:", options: ["mass only", "how mass is distributed about the axis", "speed", "colour"], answer: 1, difficulty: 1, explanation: "Σmr²: distance from axis weighs the same mass more." },
    { type: "mcq", q: "Doubling the torque on a fixed wheel (constant I) doubles its:", options: ["ω", "α", "L", "I"], answer: 1, difficulty: 2, explanation: "τ = Iα — acceleration scales, not instantaneous speed." },
    { type: "mcq", q: "A 50 N force on a 0.3 m spanner at 30° to the handle gives τ ≈:", options: ["15 N·m", "7.5 N·m", "50 N·m", "3 N·m"], answer: 1, difficulty: 2, explanation: "τ = 0.3×50×sin30° = 7.5 N·m." },
    { type: "mcq", q: "Which reaches the bottom of a slope first from rest (same mass & radius)?", options: ["solid sphere", "solid disc", "hoop", "all tie"], answer: 0, difficulty: 2, explanation: "Smallest I fraction (⅖MR²) — least energy locked in spin." },
    { type: "mcq", q: "A wheel spins freely; half its rim mass is removed (I halves). ω becomes:", options: ["half", "double", "unchanged", "quarter"], answer: 1, difficulty: 3, explanation: "L = Iω conserved: halve I, double ω." },
    { type: "mcq", q: "Why choose the pivot ON an unknown force in statics?", options: ["it vanishes anyway", "its lever arm is zero, dropping it from the torque equation", "friction hides it", "you cannot"], answer: 1, difficulty: 3, explanation: "r = 0 makes τ = 0 regardless of magnitude — the standard elimination trick." }
  ]
};

Lessons["g12-physics-up2-t4"] = {
  overview: "Kepler read the planets' motions from Tycho's observations: ellipses, equal areas, and a precise period–distance ratio. Newton later proved all three are gravity's signature — and Kepler's third law still governs every orbit, from satellites to exoplanets.",
  objectives: [
    "State Kepler's three laws precisely",
    "Describe ellipse geometry: semi-major axis, eccentricity",
    "Apply the equal-areas law to speed variation",
    "Use T² ∝ r³ for ratios and predictions",
    "Connect Kepler to Newton's gravitation"
  ],
  simple: "<b>Three sentences that dethroned circles.</b> Planets ride ellipses with the Sun at one focus. A line Sun-to-planet sweeps equal areas in equal times — so planets speed up near the Sun. And the square of the year is proportional to the cube of the mean distance. Data in 1609, proved by gravity 78 years later, still true for every moon and satellite.",
  detailed: "<p><b>First law — ellipses.</b> An ellipse has two foci; the Sun occupies one. Semi-major axis a is half the longest diameter; eccentricity e = c/a measures stretch (circle e = 0, Pluto-like e ≈ 0.25). Perihelion distance a(1−e), aphelion a(1+e). Copernicus kept circles-with-epicycles; Kepler trusted Tycho's 2 arcminute Mars residuals over beautiful geometry.</p><p><b>Second law — equal areas.</b> The radius vector sweeps equal areas per unit time. At perihelion the short radius must sweep fast; at aphelion the long radius crawls. Physically this IS angular momentum conservation (L = ½m r²ω constant under a central force), with v_peri r_peri = v_ap r_ap.</p><p><b>Third law — harmonies.</b> T² = (4π²/GM) a³: orbit period squared scales with mean distance cubed. In solar units (years, AU) it collapses to T² = a³ for planets around our Sun: Jupiter at 5.2 AU has T = 5.2^{1.5} ≈ 11.9 years. Around a different central mass, the ratio shifts — that is how we weigh stars and find exoplanets.</p><p><b>Newton's synthesis.</b> Set gravitational force = centripetal need for circular orbits: GMm/r² = m(2π/T)²r → T² = 4π²r³/GM. Kepler's laws fall out of one inverse-square attraction; the ellipse appears when velocities exceed the circular value but stay bound. The same GM also yields orbital speed v = √(GM/r) and escape speed √2 times it.</p>",
  keyTerms: [
    { term: "Ellipse / focus", def: "stretched circle; orbit anchor point" },
    { term: "Semi-major axis a", def: "the orbit's mean distance" },
    { term: "Eccentricity e", def: "stretch measure, 0 = circle" },
    { term: "Perihelion / aphelion", def: "nearest / farthest solar points" },
    { term: "Central force", def: "force along the radius → L conserved" },
    { term: "Geostationary radius", def: "42 164 km from Earth's centre" }
  ],
  formulas: [
    { name: "Third law", formula: "T² = (4π²/GM) a³", meaning: "period and size are locked by central mass", vars: [{ name: "M", meaning: "mass of the body orbited" }], when: "any bound orbit; ratios: (T₁/T₂)² = (a₁/a₂)³" },
    { name: "Area law as L", formula: "r₁v₁ = r₂v₂", meaning: "fast when close, slow when far (perpendicular speeds)", vars: [{ name: "r", meaning: "current distance" }], when: "speed at perihelion/aphelion" },
    { name: "Circular orbit speed", formula: "v = √(GM/r)", meaning: "the one speed that curves with the field", vars: [{ name: "GM", meaning: "Earth: 3.99×10¹⁴" }], when: "satellite design" }
  ],
  workedExamples: [
    { problem: "A planet orbits at 9 AU. Period in Earth years?", calculation: "T = √(9³) = √729 = 27 years.", answer: "27 y — T² = a³ in solar units." },
    { problem: "Mars: perihelion 1.38 AU, aphelion 1.67 AU. e?", calculation: "a = 1.525; c = (r_ap−r_per)/2 = 0.145; e = 0.145/1.525.", answer: "e ≈ 0.095 — nearly circular." },
    { problem: "Geostationary orbit: T = 24 h. Radius?", calculation: "r³ = GMT²/4π² = 6.67e−11×5.97e24×(86400)²/39.5 ≈ 7.54e24 → r ≈ 4.22×10⁷ m.", answer: "42 200 km from centre = 35 800 km altitude." },
    { problem: "Comet 2× faster at perihelion than aphelion. Ratio r_p/r_a?", calculation: "r_p v_p = r_a v_a → r_p/r_a = v_a/v_p = 1/2.", answer: "Perihelion distance is half aphelion's." }
  ],
  commonMistakes: [
    "Saying the Sun sits at the centre of an ellipse (a focus)",
    "Using T² ∝ r³ across different central masses without the GM factor",
    "Confusing e (stretch) with orbit size",
    "Forgetting geostationary altitude vs radius (−6 371 km)",
    "Thinking equal-areas means constant speed"
  ],
  applications: [
    "Satellite placement: the geostationary radius is Kepler's third law, solved",
    "Exoplanet detection: period + wobble = mass and orbit",
    "Comet predictions (Halley returned 1758 on Newton–Kepler math)",
    "Mars transfer windows: ellipses touch both orbits"
  ],
  summary: "Ellipses at foci, equal areas per time, T² = a³: three observational facts Newton proved are one inverse-square law.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Kepler's first law: orbits are:", options: ["circles with epicycles", "ellipses, Sun at a focus", "parabolas", "squares-ish"], answer: 1, difficulty: 1, explanation: "The ellipse replaced two millennia of perfect circles." },
    { type: "mcq", q: "A planet moves fastest at:", options: ["aphelion", "perihelion", "everywhere equal", "midway"], answer: 1, difficulty: 1, explanation: "Equal areas demand more speed for shorter radius." },
    { type: "mcq", q: "An asteroid at 4 AU has period:", options: ["4 y", "8 y", "16 y", "2 y"], answer: 1, difficulty: 1, explanation: "T = 4^{3/2} = 8 years." },
    { type: "mcq", q: "Kepler's second law is the orbit form of conservation of:", options: ["energy", "angular momentum", "linear momentum", "mass"], answer: 1, difficulty: 2, explanation: "Central force ⇒ zero torque ⇒ L = ½mr²ω constant." },
    { type: "mcq", q: "Two moons of Jupiter have periods in ratio 1:8. Their orbital radii ratio is:", options: ["1:2", "1:4", "1:8", "1:16"], answer: 1, difficulty: 2, explanation: "r ∝ T^{2/3}: 8^{2/3} = 4 — the far moon orbits 4× out." },
    { type: "mcq", q: "If Earth's orbit e were 0, seasons of distance would:", options: ["double", "vanish (perihelion = aphelion)", "stay same", "reverse"], answer: 1, difficulty: 2, explanation: "e = 0 is a circle: constant radius — and note real seasons come mainly from tilt." },
    { type: "mcq", q: "Third law's proportionality constant depends on:", options: ["planet mass", "central body mass", "orbit shape only", "nothing"], answer: 1, difficulty: 3, explanation: "4π²/GM — weigh the star by its planets." },
    { type: "mcq", q: "Newton derived Kepler from:", options: ["three separate laws", "one inverse-square gravity + his motion laws", "electromagnetism", "pure geometry"], answer: 1, difficulty: 3, explanation: "Unification: falling apples and orbiting Moons, one force law." }
  ]
};

Lessons["g12-physics-up2-t5"] = {
  overview: "Gravitation is the universal attraction between masses — weakest of forces yet ruler of the cosmos. Newton's inverse-square law, the field concept, gravitational potential energy and escape velocity complete the mechanics that Kepler began.",
  objectives: [
    "Apply F = Gm₁m₂/r² to bodies and orbits",
    "Define field strength g = GM/r² and vary with altitude",
    "Distinguish g from G and weight from mass",
    "Use potential energy U = −GMm/r (zero at infinity)",
    "Derive and apply escape velocity v_e = √(2GM/R)"
  ],
  simple: "<b>The gentlest giant.</b> G is a tiny number — 6.67×10⁻¹¹ — so gravity between everyday objects is negligible. But mass is everywhere and adds up, and inverse-square reach is infinite, so gravity alone steers galaxies. Double the distance, quarter the pull. Throw something faster than 11.2 km/s from Earth and it never returns: that is escape.",
  detailed: "<p><b>The law.</b> Every pair of point masses attracts along their line: F = Gm₁m₂/r². Spherically symmetric bodies (planets!) act as if all mass sat at their centre — Newton's shell theorem. Cavendish measured G (1798) with a torsion balance of lead balls, 'weighing the Earth': from g and R, M = gR²/G ≈ 6×10²⁴ kg.</p><p><b>Field strength.</b> g = F/m = GM/r² — gravity as an invisible landscape assigning each point a force-per-kilogram. On Earth's surface 9.8 N/kg; at 6 400 km altitude it is 2.45 (quarter: twice Earth-radii out); at the Moon it is 1.6; inside a planet it falls toward zero (only the interior mass counts). Weight W = mg is the force; mass m is the inertia — never interchangeable.</p><p><b>Potential energy.</b> U = −GMm/r with the conventional zero at infinite separation: bound orbits have negative total energy E = −GMm/2a. Lifting a mass increases U toward zero; falling releases the difference. This 'negative energy = captivity' language is exactly what escape bookkeeping uses.</p><p><b>Escape velocity.</b> Set ½mv² = GMm/R: v_e = √(2GM/R) = √(2gR) — Earth: 11.2 km/s, Moon 2.4 km/s, Sun 618 km/s, a black hole's exceeds light so not even signals leave. Note: escape speed is a starting speed, not a sustained one — no rocket fuel needed after the launch if nothing hits it (real rockets go slower and thrust all the way).</p><p><b>Tides and limits.</b> Gravity is differential: the Moon pulls the near ocean harder than the far side, stretching Earth into a slight egg — two bulges, twice-daily tides. Inverse-square plus finite size equals tidal forces, which also drive Io's volcanism and can shred comets (Roche limit).</p>",
  keyTerms: [
    { term: "G", def: "6.67×10⁻¹¹ N·m²/kg² — universal constant" },
    { term: "Field strength g", def: "force per unit mass, N/kg" },
    { term: "Shell theorem", def: "spherical body acts point-centred" },
    { term: "Gravitational PE", def: "U = −GMm/r, zero at infinity" },
    { term: "Escape velocity", def: "√(2GM/R): the one-way launch speed" },
    { term: "Tidal force", def: "difference of gravity across a body" }
  ],
  formulas: [
    { name: "Newton gravitation", formula: "F = Gm₁m₂/r²", meaning: "inverse-square universal pull", vars: [{ name: "G", meaning: "tiny ⇒ gravity weak" }], when: "planets to galaxies" },
    { name: "Field of a mass", formula: "g = GM/r²", meaning: "surface g sets weight", vars: [{ name: "r", meaning: "from centre!" }], when: "altitude and other worlds" },
    { name: "Escape", formula: "v_e = √(2GM/R) = √(2gR)", meaning: "kinetic beats the well", vars: [{ name: "R", meaning: "launch radius" }], when: "missions, atmosphere retention" },
    { name: "Orbit ↔ Kepler", formula: "T² = 4π²r³/GM", meaning: "orbit speed and gravity lock together", vars: [{ name: "—", meaning: "mass of orbited body from moons" }], when: "weighing planets" }
  ],
  workedExamples: [
    { problem: "Weight of 70 kg at twice Earth-radius altitude?", calculation: "g′ = 9.8/4 = 2.45 N/kg; W = 70×2.45.", answer: "≈ 172 N (a 17 kg-feeling of 70 kg mass)." },
    { problem: "Find Earth's mass from g = 9.8, R = 6.4×10⁶ m.", calculation: "M = gR²/G = 9.8×4.1×10¹³/6.67×10⁻¹¹.", answer: "≈ 6.0×10²⁴ kg — Cavendish's harvest." },
    { problem: "Escape speed from the Moon (M = 7.35×10²² kg, R = 1.74×10⁶ m)?", calculation: "v = √(2×6.67e−11×7.35e22/1.74e6) = √(5.63e6).", answer: "≈ 2.4 km/s — why the Moon kept no air." },
    { problem: "A satellite's orbit radius quadruples. Its period factor?", calculation: "T² ∝ r³ ⇒ T ∝ 4^{1.5} = 8.", answer: "8× longer (Kepler again, from gravitation)." }
  ],
  commonMistakes: [
    "Quoting g at altitude using r from the SURFACE instead of the centre",
    "Mixing G (constant) with g (local field)",
    "Saying astronauts float because 'there is no gravity' in orbit — they are falling with the ship",
    "Treating escape speed as a continuous thrust requirement",
    "Forgetting U is negative for bound systems (zero means free-and-stopped)"
  ],
  applications: [
    "Geostationary and GPS orbits: GM is the design number",
    "Locating ore bodies with tiny g-anomalies (gravimetry)",
    "The Ethiopian highlands' slightly lower g (altitude) matters in precision weighing",
    "Tidal energy and the Moon slowly receding (3.8 cm/yr)"
  ],
  summary: "F = Gm₁m₂/r² rules everything at range: g = GM/r², U = −GMm/r, escape at √(2gR). Weak, but infinite and additive.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Doubling the separation of two masses makes the force:", options: ["half", "quarter", "double", "unchanged"], answer: 1, difficulty: 1, explanation: "Inverse square: 2² = 4 down." },
    { type: "mcq", q: "The value of G is:", options: ["9.8", "6.67×10⁻¹¹", "6.02×10²³", "3×10⁸"], answer: 1, difficulty: 1, explanation: "The gravitational constant; 9.8 is Earth's g." },
    { type: "mcq", q: "In a falling orbiting spacecraft, astronauts float because:", options: ["no gravity exists", "they and the ship accelerate identically", "vacuum pushes", "magnets"], answer: 1, difficulty: 1, explanation: "Free fall: gravity supplies exactly the centripetal motion — 'weightless' ≠ 'gravityless'." },
    { type: "mcq", q: "Earth's g at 3R from centre is:", options: ["9.8", "3.27", "1.09", "0"], answer: 2, difficulty: 2, explanation: "g/9.8 = 1/3² ⇒ 1.09 N/kg." },
    { type: "mcq", q: "Which weighs more on the Moon vs Earth?", options: ["mass", "weight", "both", "neither"], answer: 1, difficulty: 2, explanation: "Mass constant; weight = mg shrinks to ⅙." },
    { type: "mcq", q: "Escape speed scales with planet radius and g as:", options: ["√(2gR)", "2gR", "gR²", "√(g/R)"], answer: 0, difficulty: 2, explanation: "½mv² = mgR (surface form) ⇒ v = √(2gR)." },
    { type: "mcq", q: "U = −GMm/r being negative signals:", options: ["repulsion", "a bound state: energy must be added to free it", "cold", "rotation"], answer: 1, difficulty: 3, explanation: "Zero at infinity is freedom; negative = in the well." },
    { type: "mcq", q: "Two ocean bulges (facing and opposite the Moon) exist because:", options: ["centrifugal ocean", "differential (tidal) gravity stretches Earth", "wind", "the Moon's magnetism"], answer: 1, difficulty: 3, explanation: "Near side pulled harder than centre, far side pulled less — the egg deformation." }
  ]
};
