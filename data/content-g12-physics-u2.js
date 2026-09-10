/* Content: Grade 12 Physics — Unit 2: Two-Dimensional and Rotational Motion (topics 1-5) */
window.Lessons = window.Lessons || {};

Lessons["g12-physics-up2-t1"] = {
  overview: "A thrown ball, a stone launched off a cliff, a basketball arcing toward the hoop — none of these move in a straight line, yet all obey two one-dimensional laws at once. This topic unpacks projectile motion: horizontal motion and vertical motion happen independently, stitched together only by time.",
  objectives: [
    "Resolve a launch velocity into horizontal and vertical components",
    "Explain why horizontal and vertical motions are independent",
    "Derive and use the trajectory equation y = x tanθ − gx²/(2v²cos²θ)",
    "Calculate range and time of flight for a projectile",
    "Show that range is maximum at 45° and equal for complementary angles"
  ],
  simple: "<b>Two motions, one ball.</b> A projectile is anything thrown and then left to gravity alone. Horizontally it coasts at constant speed (no forces, so nothing to accelerate it); vertically it free-falls exactly like a dropped stone (vy = gt, y = ½gt²). The two know nothing about each other — they share only the clock. That single idea generates every formula in this topic, including why a 45° launch throws furthest.",
  detailed: "<p><b>Independence of components.</b> Galileo's insight: the horizontal motion of a projectile is unaffected by its vertical fall. A bullet fired horizontally and a bullet dropped from the same height hit the ground at the same instant (ignoring air and Earth curvature). We choose axes so ax = 0 and ay = g (downward), then treat the problem as two separate Unit-1 kinematics exercises running on the same stopwatch.</p><p><b>Component equations.</b> Launch at speed v, angle θ: vx = v cosθ stays constant forever; vy = v sinθ − gt changes linearly; x = vt cosθ and y = vt sinθ − ½gt². At the top of the flight vy = 0 but vx is unchanged — the ball has not stopped, it has only finished rising. For a stone thrown horizontally, vy starts at 0 and grows as vy = gt while vx = v the whole way.</p><p><b>The trajectory.</b> Eliminate t between x and y (t = x/(v cosθ)) and the path appears: y = x tanθ − gx²/(2v²cos²θ). Because the second term is proportional to x², the curve is a parabola — gravity writes the shape, the launch only picks the constants.</p><p><b>Range and time of flight.</b> Set y = 0 to find where the projectile lands: time of flight T = 2v sinθ/g, and the horizontal distance covered is R = v²sin2θ/g. Since sin2θ peaks at 1 when θ = 45°, that is the maximum-range angle: R_max = v²/g. Because sin2θ = sin(180° − 2θ), a launch at 30° and one at 60° give identical range — the low flat shot and the high lofted shot land in the same spot, arriving at different times.</p><p><b>Basketball intuition.</b> Why do players launch near 45–55° rather than 45°? The ball must enter the hoop from above at a steep-enough angle to open the target's effective area, and the release point sits above the rim's plane, so the textbook optimum shifts. Speed and angle trade off: shoot softer, arc higher; snap harder, flatten out. Physics explains the trade-off even when the exact optimum is sport-specific.</p>",
  keyTerms: [
    { term: "Projectile", def: "an object moving under the influence of gravity alone" },
    { term: "Launch components", def: "vx = v cosθ, vy = v sinθ — the split of initial velocity" },
    { term: "Trajectory", def: "the parabolic path traced by a projectile" },
    { term: "Range", def: "horizontal distance covered before landing" },
    { term: "Time of flight", def: "total air time, fixed by the vertical motion" },
    { term: "Complementary angles", def: "θ and 90° − θ, which give equal range" }
  ],
  formulas: [
    { name: "Component velocities", formula: "vx = v₀cosθ,  vy = v₀sinθ − gt", meaning: "horizontal speed is constant; vertical speed changes at rate g", vars: [{ name: "v₀", meaning: "launch speed" }, { name: "θ", meaning: "launch angle above horizontal" }, { name: "g", meaning: "9.8 or 10 m/s² downward" }], when: "every projectile, from the instant of release" },
    { name: "Trajectory equation", formula: "y = x tanθ − gx²/(2v₀²cos²θ)", meaning: "height as a function of horizontal distance — a parabola", vars: [{ name: "x", meaning: "horizontal distance from launch" }, { name: "v₀", meaning: "launch speed" }], when: "plotting or checking a path without solving for t" },
    { name: "Time of flight (level ground)", formula: "T = 2v₀sinθ/g", meaning: "air time depends only on the vertical component", vars: [{ name: "v₀sinθ", meaning: "initial vertical speed" }], when: "launch and landing at the same height" },
    { name: "Range", formula: "R = v₀²sin2θ/g", meaning: "horizontal reach; maximum at θ = 45°", vars: [{ name: "sin2θ", meaning: "peaks at 1 when θ = 45°" }], when: "level ground, projectile landing where it started" }
  ],
  workedExamples: [
    { problem: "A stone is thrown horizontally at 20 m/s from the top of a 45 m cliff. When and where does it land? (g = 10 m/s²)", given: "vy₀ = 0, x-direction speed vx = 20 m/s, drop height y = 45 m", calculation: "Vertical: y = ½gt² → 45 = 5t² → t = 3 s. Horizontal: x = vx t = 20 × 3 = 60 m.", answer: "It falls for 3 s and lands 60 m from the cliff base — the horizontal throw did not delay the fall at all." },
    { problem: "A ball is kicked at 20 m/s, 30° above horizontal (g = 10). Find time of flight, range and maximum height.", given: "v₀ = 20 m/s, θ = 30°, so vy₀ = 10 m/s and vx₀ = 20cos30° ≈ 17.3 m/s", calculation: "T = 2vy₀/g = 2 s. R = vx T = 17.3 × 2 ≈ 34.6 m. Peak height h = vy₀²/(2g) = 100/20 = 5 m.", answer: "2 s aloft, ≈ 34.6 m downrange, 5 m high at the top." },
    { problem: "Show that 30° and 60° launches at the same speed have equal range (R = v²sin2θ/g).", calculation: "sin(2×30°) = sin60° = 0.866; sin(2×60°) = sin120° = 0.866 — identical.", answer: "Equal range, but the 60° shot stays in the air longer (T = 2v sinθ/g): 1.73 v/g vs 1.0 v/g." },
    { problem: "A gun fires horizontally at 100 m/s from a height of 1.25 m (g = 10). How far downrange does the bullet hit?", calculation: "t = √(2h/g) = √(2.5/10) = 0.5 s; x = 100 × 0.5 = 50 m.", answer: "50 m. A bullet dropped from the same height would also take 0.5 s — independence in action." }
  ],
  commonMistakes: [
    "Assuming the projectile stops at the top of its arc — only vy is zero there; vx keeps going",
    "Using time of flight T = 2v sinθ/g for launches off a cliff or from a height — that formula needs landing at launch level",
    "Mixing g = 9.8 and g = 10 inside one calculation",
    "Thinking a faster horizontal throw falls more slowly — vertical and horizontal motions are independent",
    "Plugging θ into sin2θ as sin²θ or forgetting the factor of 2 in the range formula"
  ],
  applications: [
    "Sports: judging basketball arcs, football free-kicks and long-jump take-off angles",
    "Ballistics and targeting: compensating drop over distance",
    "Water jets and sprinkler design: arcs from angled nozzles",
    "Road and avalanche barriers sized for the landing zone of rockfall treated as projectiles"
  ],
  summary: "Split, solve, recombine: horizontal is constant velocity, vertical is free fall, and time is the only bridge. R = v²sin2θ/g peaks at 45°; complementary angles tie.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Neglecting air resistance, the horizontal velocity of a projectile:", options: ["increases with time", "decreases with time", "stays constant", "is zero at the top"], answer: 2, difficulty: 1, explanation: "No horizontal force acts, so vx never changes — even at the top of the arc." },
    { type: "mcq", q: "A ball rolls off a table at the same instant another ball is dropped from the table top. Which lands first (same height)?", options: ["the rolling ball", "the dropped ball", "both at the same time", "whichever is heavier"], answer: 2, difficulty: 1, explanation: "Both have vy₀ = 0 and fall the same height — vertical motion is independent of horizontal." },
    { type: "mcq", q: "The launch angle that gives maximum range on level ground is:", options: ["30°", "45°", "60°", "90°"], answer: 1, difficulty: 1, explanation: "R = v²sin2θ/g is largest when sin2θ = 1, i.e. θ = 45°." },
    { type: "mcq", q: "A projectile is launched at 20 m/s at 30° above level ground (g = 10). Its time of flight is:", options: ["1 s", "2 s", "3 s", "4 s"], answer: 1, difficulty: 2, explanation: "T = 2v sinθ/g = 2 × 20 × 0.5 / 10 = 2 s." },
    { type: "mcq", q: "Same launch (v = 20 m/s), angles 30° and 60°. Which statement is true? (g = 10)", options: ["30° has the greater range", "60° has the greater range", "equal range; 60° stays airborne longer", "equal range and equal time"], answer: 2, difficulty: 2, explanation: "sin60° = sin120°, so ranges tie; but T ∝ sinθ, so the steeper shot hangs longer." },
    { type: "mcq", q: "A stone is thrown horizontally at 20 m/s from a 45 m cliff (g = 10). Where does it land?", options: ["30 m from the base", "45 m from the base", "60 m from the base", "90 m from the base"], answer: 2, difficulty: 2, explanation: "t = √(2h/g) = √9 = 3 s, then x = 20 × 3 = 60 m." },
    { type: "mcq", q: "For a projectile launched and landing at the same height, at the very top of its path:", options: ["velocity and acceleration are both zero", "velocity is zero but acceleration is g", "velocity is minimum but not zero, acceleration is g", "acceleration becomes zero"], answer: 2, difficulty: 3, explanation: "At the apex vy = 0 but vx survives, so speed is minimum, not zero; g acts throughout." },
    { type: "mcq", q: "A projectile has range equal to its maximum height on level ground. Its launch angle satisfies:", options: ["tanθ = 1", "tanθ = 2", "tanθ = 4", "tanθ = 1/2"], answer: 2, difficulty: 3, explanation: "R = H means v²sin2θ/g = v²sin²θ/(2g) → 2sinθcosθ = sin²θ/2 → tanθ = 4, so θ ≈ 76°." }
  ]
};

Lessons["g12-physics-up2-t2"] = {
  overview: "A grinding stone, a bicycle wheel, the Earth itself — spinning bodies trace circles, and every quantity of linear motion has an angular twin. This topic builds the language of rotation: radians, angular velocity and acceleration, and the kinematics equations that mirror Unit 1 almost line for line.",
  objectives: [
    "Define angular displacement in radians and convert between radians and degrees",
    "Relate arc length and tangential speed to radius: s = rθ, v = rω",
    "Compute average and instantaneous angular velocity and acceleration",
    "Apply the rotational kinematics equations to constant-α problems",
    "Explain the 'outward push' in a turning vehicle as inertia, not a real outward force"
  ],
  simple: "<b>Rotation is linear motion in disguise.</b> Measure angles in radians, and every circular quantity is the straight-line one multiplied by the radius: distance becomes arc s = rθ, speed becomes v = rω. The constant-acceleration formulas return with Greek letters — ω = ω₀ + αt plays the role of v = v₀ + at. If you can do Unit 1 kinematics, you can already do this topic.",
  detailed: "<p><b>The radian.</b> One radian is the angle whose arc equals the radius. Since the full circumference is 2πr, a full turn is 2π rad = 360°, so 1 rad ≈ 57.3° and 1 rad = 180°/π. Radians are pure numbers (length ÷ length), which is why s = rθ works only when θ is in radians — degrees need a conversion factor and silently break formulas.</p><p><b>Angular velocity and acceleration.</b> ω = Δθ/Δt (rad/s) says how fast the angle grows; every point on a rigid wheel shares the same ω. Linear speed, however, scales with radius: v = rω, so the outer edge of a grinding stone races while the hub barely moves. Changing spin rate gives α = Δω/Δt in rad/s². A record turntable at 33⅓ rpm has ω = 2π × 33.33/60 ≈ 3.5 rad/s.</p><p><b>Rotational kinematics (constant α).</b> The dictionary is direct: θ↔x, ω↔v, α↔a. So ω = ω₀ + αt; θ = ω₀t + ½αt²; ω² = ω₀² + 2αθ; θ = ½(ω₀ + ω)t. A wheel braking with α = −2 rad/s² from 20 rad/s stops in 10 s and turns through θ = ½ × 20 × 10 = 100 rad ≈ 15.9 revolutions on the way out.</p><p><b>Feeling 'thrown outward'.</b> When a taxi takes a sharp turn in Addis, passengers feel pressed toward the outside door. In the ground (inertial) frame no outward force exists: your body simply keeps moving straight by inertia while the car turns beneath you, and the door is what finally pushes you inward. The outward 'centrifugal force' is a bookkeeping device used only in the rotating frame itself. The real, inward force needed to curve a path is centripetal: F = mv²/r.</p><p><b>Why the mirror works.</b> A point on a spinning rim travels an arc s = rθ; multiplying that identity by ω and α converts it to v = rω and a_t = rα. Constant angular acceleration therefore inherits every linear derivation unchanged — memorise one set, own the other.</p>",
  keyTerms: [
    { term: "Angular displacement θ", def: "angle swept, measured in radians" },
    { term: "Radian", def: "angle subtending an arc equal to the radius; 2π rad = 360°" },
    { term: "Angular velocity ω", def: "rate of change of angle, Δθ/Δt in rad/s" },
    { term: "Angular acceleration α", def: "rate of change of ω in rad/s²" },
    { term: "Tangential speed", def: "linear speed of a point on the circle, v = rω" },
    { term: "Centripetal", def: "directed toward the centre; the net force that curves motion" }
  ],
  formulas: [
    { name: "Arc length", formula: "s = rθ", meaning: "distance along the circle from the angle swept (θ in radians)", vars: [{ name: "r", meaning: "radius" }, { name: "θ", meaning: "angular displacement in rad" }], when: "converting between turning and travelling" },
    { name: "Tangential speed", formula: "v = rω", meaning: "points farther from the axis move faster", vars: [{ name: "ω", meaning: "angular velocity in rad/s" }], when: "any point on a rigid rotating body" },
    { name: "Radian conversion", formula: "1 rev = 2π rad = 360°,  1 rad = 180°/π ≈ 57.3°", meaning: "the bridge between turns, radians and degrees", vars: [{ name: "rev", meaning: "one full turn" }], when: "before using any formula containing θ" },
    { name: "Rotational kinematics (constant α)", formula: "ω = ω₀ + αt,  θ = ω₀t + ½αt²,  ω² = ω₀² + 2αθ", meaning: "the Unit-1 equations with θ↔x, ω↔v, α↔a", vars: [{ name: "ω₀", meaning: "initial angular velocity" }, { name: "α", meaning: "constant angular acceleration" }], when: "spin-up, braking wheels, motors" }
  ],
  workedExamples: [
    { problem: "Convert 1 rev, 90° and 2.5 rad to the other angle units.", given: "1 rev = 2π rad = 360°", calculation: "1 rev = 2π rad ≈ 6.283 rad. 90° = 90 × π/180 = π/2 ≈ 1.571 rad. 2.5 rad = 2.5 × 180/π ≈ 143.2°.", answer: "Radian-first arithmetic: 1 rev = 2π rad exactly, and 1 rad ≈ 57.3°." },
    { problem: "A grinding stone of radius 0.25 m spins at 120 rpm. Find ω and the rim speed. (π ≈ 3.14)", given: "f = 120 rev/min = 2 rev/s", calculation: "ω = 2πf = 2 × 3.14 × 2 = 12.56 rad/s. v = rω = 0.25 × 12.56 ≈ 3.14 m/s.", answer: "ω ≈ 12.6 rad/s; the rim (and a tool touching it) moves ≈ 3.1 m/s." },
    { problem: "A bicycle wheel spins down uniformly from 20 rad/s to rest in 10 s. Find α and the number of revolutions made while stopping.", given: "ω₀ = 20 rad/s, ω = 0, t = 10 s", calculation: "α = (0 − 20)/10 = −2 rad/s². θ = ½(ω₀ + ω)t = ½ × 20 × 10 = 100 rad. Revolutions = 100/(2π) ≈ 15.9.", answer: "α = −2 rad/s²; about 16 revolutions before it stops." },
    { problem: "Two points sit at r = 0.1 m and r = 0.4 m on the same turntable spinning at ω = 5 rad/s. Compare their speeds and their angular velocities.", calculation: "v₁ = 0.1 × 5 = 0.5 m/s; v₂ = 0.4 × 5 = 2 m/s — the outer point is 4× faster. Both share ω = 5 rad/s.", answer: "Same ω everywhere on a rigid body; v grows in direct proportion to r." }
  ],
  commonMistakes: [
    "Plugging degrees into s = rθ or θ = ω₀t + ½αt² — radians are mandatory",
    "Thinking every point of a spinning wheel has the same linear speed — v = rω varies with radius",
    "Believing an outward 'centrifugal force' really pushes you in an inertial frame — inertia carries you straight while the vehicle turns",
    "Confusing rpm (revolutions per minute) with rad/s: multiply rpm by 2π/60 ≈ 0.105",
    "Applying the constant-α equations to non-uniform spinning (a fan at steady speed has α = 0, not 'unknown')"
  ],
  applications: [
    "Gear and pulley design in Ethiopian workshops: rim speeds must match belt speeds",
    "Washing-machine spin cycles and hard-drive platters rated in rpm",
    "Banked road curves: the friction needed scales with v²/r",
    "Earth's rotation: a point on the equator moves ≈ 465 m/s while the poles barely translate"
  ],
  summary: "θ in radians, ω = Δθ/Δt, α = Δω/Δt, s = rθ and v = rω tie circles to straight lines; the kinematics equations transfer word for word. The outward push you feel is inertia, not a force.",
  visuals: [],
  questions: [
    { type: "mcq", q: "One complete revolution equals:", options: ["π rad", "π/2 rad", "2π rad", "360 rad"], answer: 2, difficulty: 1, explanation: "The circumference is 2πr, and dividing by r gives 2π radians per full turn." },
    { type: "mcq", q: "The angular velocity of a body is defined as:", options: ["Δθ/Δt", "Δx/Δt", "Δω/Δt", "rΔθ"], answer: 0, difficulty: 1, explanation: "ω = Δθ/Δt in rad/s; Δω/Δt would be α." },
    { type: "mcq", q: "The tangential speed of a point on a rotating wheel is:", options: ["v = ω/r", "v = rω", "v = rω²", "v = r²ω"], answer: 1, difficulty: 1, explanation: "Arc per time: s/t = rθ/t = rω — outer points sweep faster." },
    { type: "mcq", q: "A wheel turns at 60 rpm. Its angular velocity is:", options: ["60 rad/s", "1 rad/s", "2π rad/s", "π rad/s"], answer: 2, difficulty: 2, explanation: "60 rpm = 1 rev/s, and 1 rev/s = 2π rad/s ≈ 6.28 rad/s." },
    { type: "mcq", q: "A fan speeds up uniformly from 4 rad/s to 10 rad/s in 3 s. Its α is:", options: ["2 rad/s²", "3 rad/s²", "4.7 rad/s²", "6 rad/s²"], answer: 0, difficulty: 2, explanation: "α = Δω/Δt = (10 − 4)/3 = 2 rad/s²." },
    { type: "mcq", q: "The linear acceleration that mirrors v = v₀ + at for rotation is:", options: ["ω = ω₀ + αt", "ω = ω₀ + vt", "θ = ωt + ½αt²", "α = ωt²"], answer: 0, difficulty: 2, explanation: "Swap x↔θ, v↔ω, a↔α and the Unit-1 equation reappears unchanged." },
    { type: "mcq", q: "In a turning car you feel pushed toward the outside door because:", options: ["gravity pulls sideways", "a centrifugal force acts outward in the ground frame", "your inertia carries you straight while the car turns", "the seat pushes you outward"], answer: 2, difficulty: 3, explanation: "In the inertial frame no outward force exists; the car turns and the door intercepts your straight-line path." },
    { type: "mcq", q: "A wheel with ω₀ = 12 rad/s brakes at a constant α = −3 rad/s². Through how many revolutions does it turn before stopping?", options: ["about 1.5", "about 4", "about 12", "about 24"], answer: 1, difficulty: 3, explanation: "θ = ω₀²/(2|α|) = 144/6 = 24 rad to stop, and 24/(2π) ≈ 3.8 ≈ 4 revolutions." }
  ]
};

Lessons["g12-physics-up2-t3"] = {
  overview: "What makes a wheel start spinning, a seesaw balance, or a skater suddenly whirl faster? Not force alone — force applied at a distance, against a body's stubbornness to rotate. This topic pairs torque (rotation's cause) with moment of inertia (rotation's resistance) and closes with angular momentum, the conserved quantity behind the skater's trick.",
  objectives: [
    "Calculate torque as τ = rF sinθ and identify its sense of rotation",
    "Compute moments of inertia for hoop, disc and sphere about their centres",
    "Apply Newton's second law for rotation, τ = Iα",
    "Find rotational kinetic energy ½Iω² and total energy of rolling bodies",
    "Use conservation of angular momentum L = Iω to explain spinning changes"
  ],
  simple: "<b>Force with a lever arm.</b> Push a door near the hinge and nothing happens; push at the handle and it flies open — same force, different torque τ = rF sinθ. A body's resistance to spinning is its moment of inertia I = Σmr²: mass far from the axis counts double-squared. Newton's law returns as τ = Iα, and the grand finale is angular momentum L = Iω, which is conserved — pull your arms in, spin faster.",
  detailed: "<p><b>Torque — the turning effect.</b> τ = rF sinθ, where r is the distance from pivot to where the force lands and θ is the angle between them. Maximum torque is a perpendicular push (sin90° = 1); a push aimed straight at the pivot (θ = 0) produces none. Units: newton-metres — dimensionally like a joule but never energy, because torque is a vector twist, not work. Sign convention: anticlockwise positive, and a body in static equilibrium needs ΣF = 0 and Στ = 0 together.</p><p><b>Moment of inertia — mass times geometry.</b> I = Σmr² sums each bit of mass weighted by its squared distance from the axis. Same mass, different distribution, different I: hoop mr², solid disc ½mr², solid sphere (2/5)mr². The hoop is hardest to spin because all its mass sits at the rim — exactly why flywheels put their iron on the outside.</p><p><b>Newton's second law for rotation.</b> Net torque produces angular acceleration: τ = Iα, the twin of F = ma. A 6 N·m torque on a 0.04 kg·m² grindstone yields α = 150 rad/s² — small I means big response. Every rotational formula now has an energy twin too: KE_rot = ½Iω² mirrors ½mv².</p><p><b>Rolling is translation plus rotation.</b> A rolling wheel has KE = ½mv² + ½Iω². Two bodies of equal mass and radius released on the same slope race: the one with the smaller I (solid sphere over disc over hoop) wins because less of the mgh budget is locked into spin.</p><p><b>Angular momentum.</b> L = Iω, and when net external torque is zero, L is conserved. The classic: a skater (or a dancer with arms out) pulls her arms in, I falls, ω rises in exact proportion so Iω stays fixed — and kinetic energy grows because she did work against the 'outward' tendency pulling her arms. Bicycle-workshop corollary: a lifted spinning rear wheel keeps its angular momentum, so moving the bike's tail makes the whole frame want to lean — mechanics you can feel in your hands.</p>",
  keyTerms: [
    { term: "Torque τ", def: "turning effect of a force, rF sinθ about a pivot" },
    { term: "Lever arm", def: "perpendicular distance from pivot to the force's line" },
    { term: "Moment of inertia I", def: "rotational mass, Σmr² about the axis" },
    { term: "Rotational KE", def: "½Iω², energy of spin" },
    { term: "Angular momentum L", def: "Iω, conserved when net external torque is zero" },
    { term: "Equilibrium", def: "ΣF = 0 and Στ = 0 together" }
  ],
  formulas: [
    { name: "Torque", formula: "τ = rF sinθ", meaning: "twist from a force applied off-centre", vars: [{ name: "r", meaning: "pivot-to-force distance" }, { name: "F", meaning: "force magnitude" }, { name: "θ", meaning: "angle between r and F" }], when: "any turning or balancing situation" },
    { name: "Moment of inertia (standard shapes)", formula: "hoop: mr²,  disc: ½mr²,  sphere: (2/5)mr²", meaning: "same mass, farther mass distribution → harder to spin", vars: [{ name: "m", meaning: "mass" }, { name: "r", meaning: "radius" }], when: "axis through the centre of a uniform body" },
    { name: "Newton's second law for rotation", formula: "τ_net = Iα", meaning: "net torque makes angular acceleration, resisted by I", vars: [{ name: "α", meaning: "angular acceleration in rad/s²" }], when: "spinning up or braking any rigid body" },
    { name: "Rotational KE and angular momentum", formula: "KE_rot = ½Iω²,  L = Iω", meaning: "spin energy and the conserved twist quantity", vars: [{ name: "ω", meaning: "angular velocity" }], when: "rolling bodies, flywheels, skaters, gyroscopes" }
  ],
  workedExamples: [
    { problem: "A mechanic loosens a nut with a 0.3 m wrench, pulling with 200 N. Torque perpendicular to the wrench, and at 30° to it?", given: "r = 0.3 m, F = 200 N", calculation: "Perpendicular: τ = rF sin90° = 0.3 × 200 = 60 N·m. At 30°: τ = 0.3 × 200 × sin30° = 30 N·m.", answer: "60 N·m straight pull; half as much when angled — always pull square to the wrench." },
    { problem: "A grindstone (uniform disc) has m = 2 kg, r = 0.2 m and carries a motor torque of 6 N·m. Find α and the energy stored at ω = 10 rad/s.", given: "I_disc = ½mr²", calculation: "I = ½ × 2 × 0.2² = 0.04 kg·m². α = τ/I = 6/0.04 = 150 rad/s². KE = ½Iω² = ½ × 0.04 × 100 = 2 J.", answer: "α = 150 rad/s²; only 2 J sits in the spinning stone." },
    { problem: "A skater spins at 3 rad/s with arms out, I = 2 kg·m². She pulls in until I = 0.5 kg·m². New ω? What happened to her energy?", given: "L conserved (negligible external torque)", calculation: "I₁ω₁ = I₂ω₂ → 2 × 3 = 0.5 × ω₂ → ω₂ = 12 rad/s. KE went from ½ × 2 × 9 = 9 J to ½ × 0.5 × 144 = 36 J.", answer: "Four times faster, four times the energy — she supplied it as muscle work pulling her arms inward." },
    { problem: "A 300 N child sits 2 m from the pivot of a seesaw. Where must a 600 N adult sit to balance it?", given: "Στ = 0", calculation: "300 × 2 = 600 × d → d = 600/600 = 1 m.", answer: "1 m on the other side — twice the weight needs half the lever arm." }
  ],
  commonMistakes: [
    "Using full r × F when the force is not perpendicular — the sinθ factor quietly halves (or kills) the torque",
    "Quoting torque units as joules — N·m of torque is not energy; never 'work' in that context",
    "Thinking a heavier object always has more moment of inertia — I depends on mass × distance², so a light long rod beats a heavy short one",
    "Saving kinetic energy when a skater pulls in arms — L is conserved, KE is not (it increases)",
    "Balancing torques about one point while forgetting the same Στ = 0 must hold about every point"
  ],
  applications: [
    "Bicycle workshop repairs: gear cranks, cassette lockrings and wheel-hub torque all exploit lever arms",
    "Traditional grinding stones (mida) and flywheels: mass on the rim stores rotation smoothly",
    "Crowbars, pliers, seesaws and bottle crackers: simple machines are torque ratios",
    "Diving and gymnastics: athletes fold to spin fast, extend to land slow, pure L = Iω"
  ],
  summary: "Torque turns, inertia resists, τ = Iα connects them, and L = Iω is conserved without external twist. Distance squared rules the rotational world.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Torque is maximum when the force is applied:", options: ["toward the pivot", "at 45° to the lever arm", "perpendicular to the lever arm", "parallel to the lever arm"], answer: 2, difficulty: 1, explanation: "τ = rF sinθ peaks at sinθ = 1, i.e. a perpendicular push." },
    { type: "mcq", q: "Which has the largest moment of inertia about its centre (same m and r)?", options: ["solid sphere", "solid disc", "hoop", "all equal"], answer: 2, difficulty: 1, explanation: "Hoop = mr²; disc = ½mr²; sphere = 0.4mr². Mass at the rim maximises I." },
    { type: "mcq", q: "The SI unit of torque is the:", options: ["joule", "newton-metre", "watt", "newton-metre per second"], answer: 1, difficulty: 1, explanation: "Force × distance: N·m. Same dimensions as a joule, different physical meaning." },
    { type: "mcq", q: "A 4 N·m net torque acts on a wheel with I = 0.5 kg·m². Its α is:", options: ["0.125 rad/s²", "2 rad/s²", "8 rad/s²", "16 rad/s²"], answer: 2, difficulty: 2, explanation: "α = τ/I = 4/0.5 = 8 rad/s² — rotational F = ma." },
    { type: "mcq", q: "A disc (I = ½mr²) spins at ω. Its rotational KE is:", options: ["¼mr²ω²", "½mr²ω²", "mr²ω²", "2mr²ω²"], answer: 0, difficulty: 2, explanation: "KE = ½Iω² = ½ × ½mr² × ω² = ¼mr²ω²." },
    { type: "mcq", q: "A skater pulls her arms in, halving her moment of inertia. Her spin rate:", options: ["halves", "stays the same", "doubles", "quadruples"], answer: 2, difficulty: 2, explanation: "L = Iω conserved: I/2 forces ω×2." },
    { type: "mcq", q: "Sphere, disc and hoop (same mass, rolling without slipping down a slope) — order of arrival at the bottom, first to last:", options: ["hoop, disc, sphere", "sphere, disc, hoop", "disc, sphere, hoop", "all tie always"], answer: 1, difficulty: 3, explanation: "Smaller I means more mgh goes into forward speed: sphere (0.4mr²) beats disc (0.5mr²) beats hoop (1mr²)." },
    { type: "mcq", q: "A uniform 10 m beam of weight 400 N rests on supports at both ends. A 600 N load sits 2 m from the left support. The left reaction is:", options: ["320 N", "520 N", "680 N", "880 N"], answer: 2, difficulty: 3, explanation: "Moments about the right support: the load is 8 m and the beam weight 5 m from it, so L × 10 = 600 × 8 + 400 × 5 = 6800 → L = 680 N (right reaction = 1000 − 680 = 320 N)." }
  ]
};

Lessons["g12-physics-up2-t4"] = {
  overview: "For two thousand years humanity assumed heavens moved in perfect circles. Kepler, mining Tycho Brahe's naked-eye observations of Mars, replaced that dogma with three plain laws: ellipses, equal areas, and a precise period–distance ratio. This topic walks the three laws and uses them to place a satellite exactly where it must orbit to hover over Ethiopia's longitude.",
  objectives: [
    "Describe an ellipse: semi-major axis, foci and eccentricity",
    "State and apply Kepler's three laws of planetary motion",
    "Explain why planets move fastest at perihelion using the equal-areas law",
    "Use T² ∝ r³ to find orbital periods and radii",
    "Derive the geostationary orbit radius from Kepler's third law"
  ],
  simple: "<b>Three sentences that dethroned circles.</b> 1) Planets ride ellipses with the Sun at one focus — not circles, not epicycles. 2) The Sun–planet line sweeps equal areas in equal times, so planets hurry near the Sun and dawdle far away. 3) T² ∝ r³: the square of the year grows with the cube of the distance. Those three lines explain every orbit from Mercury to a TV satellite.",
  detailed: "<p><b>The ellipse.</b> An ellipse is the set of points whose distances to two foci sum to a constant. The longest diameter is 2a (a = semi-major axis, the 'average distance' Kepler's third law actually uses); the shortest is 2b. Eccentricity e = c/a measures stretch, c being the focus offset from the centre: e = 0 is a circle, e → 1 a slot. Earth's e = 0.017 — nearly circular; Mercury's e ≈ 0.21 is visibly squashed. The Sun sits at one focus, so distance varies from perihelion a(1 − e) to aphelion a(1 + e).</p><p><b>Equal areas in equal times.</b> Kepler's second law: the Sun–planet line sweeps the same area every second of the year. Near perihelion the radius is short, so the planet must travel a long arc to sweep that area — it speeds up; at aphelion it crawls. Behind this is angular momentum conservation (L = mvr for the perpendicular case), the same quantity that spun up the skater in the previous topic.</p><p><b>The harmonic law.</b> T² = (4π²/GM)r³: every body orbiting the same central mass shares one ratio T²/r³. Scaling form with Earth units (years, AU) around the Sun: T² = r³, so a planet at 4 AU has T = √64 = 8 years. Doubling distance multiplies the year by 2√2 ≈ 2.83.</p><p><b>Geostationary orbit.</b> A satellite must circle once per sidereal day (T ≈ 86 164 s) to sit above the same Ethiopian longitude. Solving r³ = GM(T/2π)² with M = 5.97×10²⁴ kg gives r ≈ 4.22×10⁷ m — about 42 200 km from Earth's centre, roughly 35 800 km up. Nicer physics: the same law orders orbits by size, so bigger period means much bigger radius; that's how all satellite 'slots' are dictated, not chosen.</p><p><b>Kepler → Newton, and tides.</b> Newton later proved the laws fall out of inverse-square gravity: ellipses from the 1/r² force, the equal-areas law from angular momentum, the third law from F = GMm/r² plus circular dynamics. Kepler's laws also frame ocean tides: the Moon drags a double bulge — water nearest the Moon is pulled hardest, while on the far side Earth's centre is tugged away from the looser ocean — so a fixed shore meets two high tides a day as Earth rotates. Strictly these are differential-gravity (tide-generating) effects, which belong to the next topic's universal law.</p>",
  keyTerms: [
    { term: "Ellipse", def: "oval where distances to two foci sum to a constant" },
    { term: "Semi-major axis a", def: "half the longest diameter; the 'average' orbital distance" },
    { term: "Eccentricity e", def: "stretch of an ellipse, e = c/a, 0 = circle" },
    { term: "Perihelion / aphelion", def: "closest / farthest point from the Sun" },
    { term: "Harmonic law", def: "T² ∝ r³ for all satellites of one body" },
    { term: "Geostationary orbit", def: "equatorial 24-h orbit at r ≈ 42 200 km, fixed above one longitude" }
  ],
  formulas: [
    { name: "Kepler's third law (general)", formula: "T² = (4π²/GM) r³", meaning: "period squared scales with orbit radius cubed for satellites of mass M", vars: [{ name: "M", meaning: "central body's mass" }, { name: "r", meaning: "semi-major axis" }], when: "any two-body orbit; derived by Newton" },
    { name: "Scaling form (Sun units)", formula: "T² = r³  (T in years, r in AU)", meaning: "one clean proportionality for everything orbiting the Sun", vars: [{ name: "AU", meaning: "1.5×10⁸ km, Earth's mean distance" }], when: "quick planetary estimates" },
    { name: "Kepler's first law", formula: "r_min = a(1 − e),  r_max = a(1 + e)", meaning: "Sun at a focus, so distance breathes between perihelion and aphelion", vars: [{ name: "e", meaning: "eccentricity" }], when: "describing any elliptical orbit" },
    { name: "Kepler's second law", formula: "dA/dt = constant (so v_peri > v_aph)", meaning: "equal areas in equal times — fast near, slow far", vars: [{ name: "dA/dt", meaning: "areal velocity" }], when: "speeds along an ellipse" }
  ],
  workedExamples: [
    { problem: "A planet orbits the Sun at r = 4 AU. What is its period?", given: "T² = r³ (years, AU)", calculation: "T² = 4³ = 64 → T = 8 years.", answer: "8 yr. Quadrupling distance stretched the year 8×: 2³ = 8, so year = √64 = 8 yr." },
    { problem: "Jupiter orbits at 5.2 AU. Estimate its period.", calculation: "T = 5.2^1.5 = 5.2 × √5.2 ≈ 5.2 × 2.28 ≈ 11.9 yr.", answer: "≈ 12 years — matches the observed 11.86 yr." },
    { problem: "Find the geostationary radius. (G = 6.67×10⁻¹¹, M = 5.97×10²⁴ kg, T = 86 164 s)", given: "r³ = GM(T/2π)²", calculation: "GM = 3.986×10¹⁴ m³/s². T/2π = 13 713 s, squared ≈ 1.88×10⁸. r³ = 3.986×10¹⁴ × 1.88×10⁸ ≈ 7.5×10²² → r ≈ 4.2×10⁷ m.", answer: "r ≈ 42 200 km from Earth's centre, about 35 800 km altitude." },
    { problem: "Earth's e = 0.017, a = 1 AU = 1.50×10⁸ km. Perihelion and aphelion distances?", calculation: "a(1 − e) = 1.50×10⁸ × 0.983 ≈ 1.474×10⁸ km; a(1 + e) ≈ 1.526×10⁸ km.", answer: "±1.7% variation — a near-circle, but enough that Earth is fastest in early January." }
  ],
  commonMistakes: [
    "Saying the Sun is at the centre of an ellipse — it sits at one focus",
    "Using r as the instantaneous distance in T² = (4π²/GM)r³ — r is the semi-major axis",
    "Thinking planets slow down near the Sun — the equal-areas law makes them fastest at perihelion",
    "Mixing the sidereal day (86 164 s, what satellites obey) with the 86 400 s solar day in orbit math",
    "Applying Kepler's third law across different central bodies — the constant 4π²/GM depends on M"
  ],
  applications: [
    "Telecom broadcasting: EthioSat-style geostationary TV links sit at the 42 200 km slot",
    "Weather imaging: Meteosat over the equatorial African longitude is geostationary",
    "Planning transfer orbits: Hohmann trips reuse T² ∝ r³ for half-period timing",
    "Exoplanet science: period and radius measurements feed the harmonic law backwards to star masses"
  ],
  summary: "Ellipses with the Sun at a focus, equal areas (fast near, slow far), and T² ∝ r³ — three empirical laws Newton later derived from gravity, and the recipe for parking satellites 42 200 km out.",
  visuals: [],
  questions: [
    { type: "mcq", q: "Kepler's first law says planetary orbits are:", options: ["perfect circles centred on the Sun", "ellipses with the Sun at the centre", "ellipses with the Sun at one focus", "spirals"], answer: 2, difficulty: 1, explanation: "The Sun occupies one focus; the other focus is empty — breaking the circle dogma." },
    { type: "mcq", q: "A planet moves fastest in its orbit at:", options: ["aphelion", "perihelion", "the semi-minor axis crossing", "never — speed is constant"], answer: 1, difficulty: 1, explanation: "Equal areas demand a longer arc per second when the radius is short: fast at perihelion." },
    { type: "mcq", q: "Kepler's second law is a restatement of conservation of:", options: ["energy", "angular momentum", "linear momentum", "mass"], answer: 1, difficulty: 2, explanation: "Constant areal velocity dA/dt = L/2m follows from L being conserved under a central force." },
    { type: "mcq", q: "A planet at 4 AU around a Sun-like star has a period of:", options: ["2 yr", "4 yr", "8 yr", "64 yr"], answer: 2, difficulty: 2, explanation: "T² = r³ = 64 → T = 8 yr." },
    { type: "mcq", q: "If an orbit's radius is doubled, the period is multiplied by:", options: ["2", "2√2 ≈ 2.83", "4", "8"], answer: 1, difficulty: 2, explanation: "T ∝ r^1.5, and 2^1.5 = 2√2 ≈ 2.83." },
    { type: "mcq", q: "A geostationary satellite must complete one orbit in about:", options: ["12 hours", "24 sidereal hours", "29.5 days", "1 hour"], answer: 1, difficulty: 2, explanation: "Matching Earth's rotation (sidereal day ≈ 23 h 56 min) keeps it above one longitude." },
    { type: "mcq", q: "Two moons orbit the same planet: A at distance d, B at 2d, both circular. The ratio T_B/T_A is:", options: ["2", "2.83", "4", "8"], answer: 1, difficulty: 3, explanation: "Same central mass cancels: T ∝ r^1.5 → (2)^1.5 = 2√2 ≈ 2.83." },
    { type: "mcq", q: "Meteosat sits above the equator near 0° longitude. Its orbital radius (~42 200 km) compared to the Moon's (~384 400 km) means Meteosat's period is:", options: ["longer than the Moon's", "equal to the Moon's", "much shorter than the Moon's (24 h vs 27.3 d)", "undefined"], answer: 2, difficulty: 3, explanation: "T² ∝ r³: the closer orbit must circle faster — 1 day against the Moon's 27.3 days." }
  ]
};

Lessons["g12-physics-up2-t5"] = {
  overview: "The same law that drops a mango in an Ethiopian highland orchard keeps the Moon falling around Earth. Newton saw that gravity is universal: every mass attracts every mass with a 1/r² force. This topic turns that one formula into g, weight, orbital motion, escape velocity and even the tides.",
  objectives: [
    "State Newton's law of gravitation and apply F = Gm₁m₂/r²",
    "Derive g = GM/r² and explain why g weakens with altitude",
    "Distinguish mass from weight quantitatively",
    "Define gravitational field strength and read field lines",
    "Compute escape velocity and explain tides as differential gravity"
  ],
  simple: "<b>One formula, from mangoes to moons.</b> Every pair of masses attracts with F = Gm₁m₂/r². Set one mass to 1 kg and you have g = GM/r² — the field strength under your feet. Double the distance from Earth's centre and g drops to a quarter; that same inverse-square law paces satellites, sets the 11.2 km/s speed needed to break free, and stretches the oceans into tides.",
  detailed: "<p><b>The law itself.</b> Two point masses attract along their joining line with F = Gm₁m₂/r², G = 6.67×10⁻¹¹ N·m²/kg² — astonishingly small, which is why only planet-sized masses show gravity in everyday life. For spheres (Newton's shell theorem), the whole mass acts as if at the centre, so the formula works outside Earth, Sun or any round body.</p><p><b>From G to g.</b> A 1 kg test mass at distance r from Earth's centre feels F = GMm/r² with m = 1, so field strength g = GM/r². Plugging M = 5.97×10²⁴ kg, R = 6.37×10⁶ m gives g = 9.8 N/kg at the surface — no lab needed. Altitude: 2R from the centre (one Earth-radius up) squares to 4, so g = 9.8/4 = 2.45 N/kg. At ISS height (~400 km) g is still ≈ 8.8 N/kg: astronauts float because they are falling around Earth, not because gravity is absent.</p><p><b>Mass vs weight.</b> Mass (kg) is the amount of matter and inertia — constant everywhere. Weight (N) is the gravitational force W = mg — location-dependent. A 70 kg student weighs 686 N on Earth, 113 N on the Moon (g = 1.62 N/kg), and is weightless in orbit while her mass stays 70 kg the whole journey.</p><p><b>Escape velocity.</b> To fling a body away forever, give it kinetic energy equal to the gravitational well depth ½mv² = GMm/R → v_esc = √(2GM/R) = √(2gR). For Earth: √(2 × 9.8 × 6.37×10⁶) ≈ 11.2 km/s. Note what drops out: the m — escape speed cares about the planet, not the payload. On the Moon only 2.4 km/s suffices, which is why it lost an ancient atmosphere.</p><p><b>Tides as differential gravity.</b> Gravity varies across an extended body: the near ocean feels the Moon more strongly than the solid Earth, and Earth more than the far ocean. That gradient — not the absolute pull — stretches planet and water into a football shape with two bulges (near and far side), giving two high tides daily as a shoreline rotates through them. The Sun contributes about half the Moon's tidal effect despite pulling harder overall, because tide strength goes like M/d³ and the Moon's 2.1:1 gradient advantage (∝ 1/d³, giving ≈ 2.1 over the Sun) beats its weaker absolute force.</p>",
  keyTerms: [
    { term: "G", def: "universal gravitational constant, 6.67×10⁻¹¹ N·m²/kg²" },
    { term: "Gravitational field strength g", def: "force per unit mass, GM/r² in N/kg" },
    { term: "Weight", def: "gravitational force on a mass, W = mg (newtons)" },
    { term: "Escape velocity", def: "launch speed to reach infinity with zero leftover speed, √(2GM/R)" },
    { term: "Shell theorem", def: "a sphere pulls externally as if concentrated at its centre" },
    { term: "Tidal force", def: "difference in gravity across a body, ∝ M/d³" }
  ],
  formulas: [
    { name: "Universal gravitation", formula: "F = Gm₁m₂/r²", meaning: "every mass attracts every mass, inverse-square with distance", vars: [{ name: "G", meaning: "6.67×10⁻¹¹ N·m²/kg²" }, { name: "r", meaning: "centre-to-centre distance" }], when: "any two masses, spherically symmetric or pointlike" },
    { name: "Field strength aloft", formula: "g = GM/r²", meaning: "gravity of a body at distance r from its centre", vars: [{ name: "M", meaning: "central mass" }], when: "altitude, other worlds, orbit design" },
    { name: "Weight", formula: "W = mg", meaning: "the force gravity exerts on a mass at this location", vars: [{ name: "m", meaning: "mass in kg (invariant)" }], when: "scales, elevators, lunar landings" },
    { name: "Escape velocity", formula: "v_esc = √(2GM/R)", meaning: "speed to coast to infinity; independent of payload mass", vars: [{ name: "R", meaning: "launch radius from centre" }], when: "rockets, atmospheric retention, mission planning" }
  ],
  workedExamples: [
    { problem: "Find Earth's surface g from G, M, R. (M = 5.97×10²⁴ kg, R = 6.37×10⁶ m)", given: "g = GM/R²", calculation: "GM = 3.986×10¹⁴. R² = (6.37×10⁶)² = 4.06×10¹³. g = 3.986×10¹⁴/4.06×10¹³ = 9.8 N/kg.", answer: "9.8 N/kg — the classroom constant, derived from the planet's mass." },
    { problem: "A balloon rises to a height equal to one Earth radius (r = 2R from centre). What is g there?", calculation: "g = GM/(2R)² = GM/4R² = 9.8/4.", answer: "2.45 N/kg. Tripling the distance would give 9.8/9 ≈ 1.1 N/kg." },
    { problem: "A 70 kg student visits the Moon (g = 1.62 N/kg). Mass and weight there vs Earth?", calculation: "Earth: W = 70 × 9.8 = 686 N. Moon: W = 70 × 1.62 = 113 N. Mass is 70 kg on both.", answer: "Weight falls to about one-sixth; mass never changes." },
    { problem: "Show Earth's escape velocity ≈ 11.2 km/s using v = √(2gR). (g = 9.8, R = 6.37×10⁶ m)", calculation: "2gR = 2 × 9.8 × 6.37×10⁶ = 1.249×10⁸; √ = 1.12×10⁴ m/s.", answer: "11.2 km/s — horizontal launch included; atmosphere and terrain still make a rocket the practical route." }
  ],
  commonMistakes: [
    "Saying astronauts are 'beyond gravity' — the ISS still feels ~90% of surface g; they float because they are in continuous free-fall",
    "Writing r as height above the surface in F = Gm₁m₂/r² — r is measured centre-to-centre",
    "Confusing G (universal constant) with g (local field strength) — G never changes, g depends on where you stand",
    "Reporting weight in kilograms — weight is a force in newtons; a scale merely converts it for you",
    "Believing escape velocity must be maintained continuously like an engine's speed — it is a one-time launch speed after which you coast"
  ],
  applications: [
    "Satellite mission design: orbit speeds, transfer burns and escape budgets all come from GM/r²",
    "Finding exoplanets: a star's wobble is F = Gm₁m₂/r² read from light",
    "Weighted scales and gravimeters surveying for minerals and oil from tiny g anomalies",
    "Tide tables for fishing and Red Sea ports at Zeila — driven by the Moon's differential gravity"
  ],
  summary: "F = Gm₁m₂/r² explains falling apples, orbiting Moons, one-sixth lunar weight, 11.2 km/s escapes and the twin tidal bulges. Gravity weakens with the square of centre-to-centre distance — never to zero.",
  visuals: [],
  questions: [
    { type: "mcq", q: "In F = Gm₁m₂/r², the distance r is measured:", options: ["surface to surface", "centre to centre", "from each object's edge to the other's centre", "along the force line only"], answer: 1, difficulty: 1, explanation: "The shell theorem makes spheres act as central point masses, so r joins the centres." },
    { type: "mcq", q: "Gravitational field strength at distance r from a mass M is:", options: ["GM/r", "GM/r²", "GMm/r²", "M/r²"], answer: 1, difficulty: 1, explanation: "Force per unit test mass: g = GM/r² in N/kg." },
    { type: "mcq", q: "If both masses in a pair are doubled and the distance also doubled, the force:", options: ["doubles", "quadruples", "stays the same", "halves"], answer: 2, difficulty: 2, explanation: "Numerator ×4 (2 × 2), denominator ×4 (2²) — they cancel exactly." },
    { type: "mcq", q: "An astronaut's mass is 80 kg on Earth (g = 10). On a station where g = 2.5 N/kg her mass and weight are:", options: ["20 kg and 50 N", "80 kg and 200 N", "80 kg and 800 N", "40 kg and 100 N"], answer: 1, difficulty: 2, explanation: "Mass never changes; W = mg = 80 × 2.5 = 200 N." },
    { type: "mcq", q: "The force Earth exerts on the Moon and the Moon exerts on Earth are:", options: ["larger on the Moon (smaller mass)", "larger on Earth (bigger mass)", "equal in magnitude, opposite in direction", "zero at average distance"], answer: 2, difficulty: 2, explanation: "Newton's third law: one interaction, one force magnitude G·Mm/r² each way." },
    { type: "mcq", q: "Earth's gravity at a distance of 3 Earth radii from the centre is:", options: ["g/3", "g/6", "g/9", "zero"], answer: 2, difficulty: 3, explanation: "Inverse square: (1/3)² = 1/9, so 9.8/9 ≈ 1.1 N/kg." },
    { type: "mcq", q: "Escape velocity from Earth is about:", options: ["7.9 km/s", "11.2 km/s", "16.7 km/s", "300 000 km/s"], answer: 1, difficulty: 3, explanation: "v_esc = √(2gR) = √(1.25×10⁸) ≈ 11.2 km/s; 7.9 km/s is low-orbit speed." },
    { type: "mcq", q: "Ocean tides have two bulges (near and far sides of the Moon) because:", options: ["the Moon pulls both bulges directly", "the Sun mirrors the Moon's pull", "gravity differs across Earth — the tidal force stretches planet and oceans", "centrifugal force from Earth's spin flings water out"], answer: 2, difficulty: 3, explanation: "Near side pulled harder than centre, centre harder than far side: one gradient, two bulges, two high tides per rotation." }
  ]
};
