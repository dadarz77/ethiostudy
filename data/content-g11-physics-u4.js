/* ============================================================
   Content: Grade 11 Physics — Unit 4: Dynamics
   2 topics: Force & Newton's Laws; Frictional Force.
   Rich format: deep detail, 4–5 worked examples, 9+ questions.
   ============================================================ */
window.Lessons = window.Lessons || {};

/* --- p4-1: Force and Newton's Laws of Motion --- */
Lessons["g11-physics-up4-t1"] = {
  overview: "Newton's three laws are the operating system of mechanics: forces cause acceleration (not motion), every force has a partner, and inertia resists change. This lesson builds the free-body diagram discipline — the single most important problem-solving skill in physics.",
  objectives: [
    "State and apply Newton's first, second and third laws",
    "Distinguish mass from weight and inertial from gravitational mass",
    "Draw accurate free-body diagrams for real situations",
    "Solve ΣF = ma problems: lifts, connected bodies, inclines",
    "Identify action–reaction pairs and avoid the classic pairing errors"
  ],
  simple: "Law 1: things keep doing what they're doing unless forced to change — a book sits, a puck glides, until a net force appears. Law 2: the net force equals mass times acceleration (F = ma) — push harder, accelerate more; heavier, accelerate less. Law 3: forces come in pairs — you push the wall, the wall pushes you, equal and opposite, but on DIFFERENT objects so they never cancel. The tool that makes all this solvable: draw the object alone, draw every force on it as an arrow, then ΣF = ma per direction.",
  detailed: `<p><b>First law (inertia):</b> in an inertial frame, a body maintains constant velocity unless acted on by a net external force. 'At rest' is just v = 0 special case. Inertia is the tendency; MASS is its measure. Passengers lurch forward when a bus brakes — nothing pushed them forward; their bodies continued while the bus stopped. No 'force of motion' exists — motion needs no cause, CHANGE of motion does.</p>
<p><b>Second law:</b> ΣF = ma — net force (vector sum of ALL external forces) equals mass times acceleration, in the force's direction. Component form: ΣFₓ = maₓ, ΣF_y = ma_y. Units: 1 N = 1 kg·m/s². Mass vs weight: m is the amount of matter (kg, invariant); W = mg is the gravitational pull (N, varies with g — 6× less on the Moon).</p>
<p><b>Third law:</b> if A exerts force F on B, B exerts −F on A. Same type, same magnitude, opposite direction, DIFFERENT objects (that's why they don't cancel — you can't add forces acting on different bodies). Horse-cart puzzle: the horse pushes ground backward; ground pushes horse forward (that's the motion force); the cart-pull and cart-resist forces act on different bodies.</p>
<p><b>Free-body diagram (FBD) protocol — the exam-critical skill:</b>
<br>1. Isolate ONE body (or a system) — draw it as a dot or box.
<br>2. Draw every EXTERNAL force ON it: weight (always, mg down), normal (perpendicular away from surface), tension (along rope, pulling away), friction (opposing slipping/attempted slip), applied pushes/pulls, drag.
<br>3. NEVER draw: forces the body exerts on others, 'ma' (that's the result, not a force), 'force of motion', centrifugal (inertial frame).
<br>4. Choose axes (tilt along motion/incline), resolve, write ΣF = ma per axis.</p>
<p><b>Classic setups:</b>
<br>• Lift/elevator: N − mg = ma → apparent weight N = m(g+a) going up-accelerating, m(g−a) descending; scale reads N, not mg.
<br>• Connected bodies (Atwood, towed trains): same |a| along the string; write ΣF = ma per body, tension same in light string, solve simultaneously.
<br>• Incline angle θ: weight splits mg sinθ (down-slope) + mg cosθ (into slope); N = mg cosθ; a = g sinθ frictionless.</p>`,
  keyTerms: [
    { term: "Inertia", def: "Tendency to keep velocity; measured by mass." },
    { term: "Newton (N)", def: "kg·m/s² — force giving 1 kg an acceleration of 1 m/s²." },
    { term: "Free-body diagram", def: "Isolated body with all external forces as arrows." },
    { term: "Normal force", def: "Surface reaction perpendicular to the contact." },
    { term: "Tension", def: "Pull transmitted along a rope/string, away from the body." },
    { term: "Apparent weight", def: "Normal/scale reading N = m(g±a), not mg." },
    { term: "Action–reaction pair", def: "Equal, opposite, same-type forces on two different bodies." }
  ],
  formulas: [
    {
      name: "Newton's second law",
      formula: "ΣF = ma",
      meaning: "Net external force equals mass times acceleration (vector equation).",
      vars: [
        { name: "ΣF", meaning: "vector sum of all external forces", unit: "N" },
        { name: "m", meaning: "mass", unit: "kg" },
        { name: "a", meaning: "acceleration", unit: "m/s²" }
      ],
      units: "1 N = 1 kg·m/s²",
      when: "Every dynamics problem — always per-axis.",
      example: "5 kg with net 20 N: a = 4 m/s²."
    },
    {
      name: "Weight",
      formula: "W = mg",
      meaning: "Gravitational force on a mass.",
      vars: [{ name: "g", meaning: "9.8 N/kg field strength", unit: "N/kg" }],
      units: "newtons",
      when: "Any mass in a gravitational field; Moon g = 1.6.",
      example: "60 kg person: W = 588 N on Earth, 96 N on Moon (mass unchanged)."
    },
    {
      name: "Incline components",
      formula: "a = g·sinθ (frictionless), N = mg·cosθ",
      meaning: "Down-slope acceleration and support force on a ramp.",
      vars: [{ name: "θ", meaning: "slope angle to horizontal", unit: "degrees" }],
      units: "SI",
      when: "Blocks on ramps (before friction is added).",
      example: "θ = 30°: a = 4.9 m/s² regardless of mass."
    }
  ],
  workedExamples: [
    {
      problem: "A 1200 kg car is pulled by a 3000 N engine force against 1200 N of resistance. Find the acceleration, and the speed after 10 s from rest.",
      given: "m = 1200 kg, F_drive = 3000 N, F_resist = 1200 N.",
      formula: "ΣF = ma; then v = at.",
      substitution: "ΣF = 3000 − 1200 = 1800 N. a = 1800/1200.",
      calculation: "a = 1.5 m/s²; v = 1.5 × 10 = 15 m/s (54 km/h).",
      answer: "1.5 m/s², reaching 15 m/s — only the NET force accelerates."
    },
    {
      problem: "A 70 kg man stands on a scale in a lift accelerating upward at 2 m/s². What does the scale read (in N)? What if the lift cable breaks?",
      given: "m = 70, a = +2 up; then free fall.",
      formula: "N − mg = ma → N = m(g + a).",
      substitution: "N = 70(9.8 + 2). Free fall: a = −g → N = m(g − g).",
      calculation: "N = 826 N (scale shows ~84 kg-equivalent); cable break: N = 0.",
      answer: "826 N accelerating up; ZERO in free fall — weightlessness is N = 0, not absence of gravity."
    },
    {
      problem: "Atwood machine: 5 kg and 3 kg masses over a frictionless pulley. Find the acceleration and string tension.",
      given: "m₁ = 5 (heavier), m₂ = 3.",
      formula: "Per body: m₁g − T = m₁a; T − m₂g = m₂a.",
      substitution: "Add: (5−3)g = 8a → a = 2g/8. Then T = m₂(g + a) = 3(9.8 + 2.45).",
      calculation: "a = 2.45 m/s²; T = 36.75 N (check with m₁: 5(9.8−2.45) = 36.75 ✓).",
      answer: "a = 2.45 m/s², T ≈ 37 N — note T is LESS than the heavy weight and MORE than the light one."
    },
    {
      problem: "A box slides down a frictionless 25° ramp 8 m long from rest. Find its acceleration and speed at the bottom.",
      given: "θ = 25°, s = 8 m.",
      formula: "a = g sinθ; v² = 2as.",
      substitution: "a = 9.8 × sin25° = 9.8 × 0.423.",
      calculation: "a = 4.14 m/s²; v = √(2×4.14×8) = √66.2 = 8.1 m/s.",
      answer: "4.1 m/s² down-slope, 8.1 m/s at bottom — mass never appeared: all objects slide alike (frictionless)."
    },
    {
      problem: "Two blocks (4 kg and 6 kg) touch on a frictionless table; a 50 N push acts on the 4 kg block. Find the contact force between them.",
      given: "F = 50 N on 4 kg pushing 6 kg.",
      formula: "System first for a, then isolate for contact.",
      substitution: "System: a = 50/10 = 5 m/s². Isolate 6 kg: only horizontal force is contact C: C = 6 × 5.",
      calculation: "C = 30 N. (Check via 4 kg: 50 − C = 4×5 → C = 30 ✓.)",
      answer: "30 N — the push 'shares' acceleration to both, but the contact only has to drag the far block."
    }
  ],
  commonMistakes: [
    "Drawing 'ma' or the 'force of motion' as a force on the FBD — ma is the RESULT of forces.",
    "Action–reaction pairs on the SAME body (they never cancel because they act on different objects).",
    "Confusing mass and weight: '60 kg weighs 60 kg' — weight is 588 N, kg is not a force.",
    "Forgetting weight in every FBD (students omit gravity for horizontal problems).",
    "Tension treated as different along a single light, frictionless string — it's uniform.",
    "Atwood sign errors: heavier mass accelerates DOWN, lighter UP, same |a|.",
    "Thinking a constant force gives constant velocity — it gives constant ACCELERATION.",
    "Scale/lift problems: reporting mg when the question asks apparent weight N."
  ],
  applications: [
    "Seatbelts & airbags: extend stopping time so ΣF (=ma) on you stays survivable (first law in action).",
    "Elevator design: cable tension = m(g+a) sets safety factors.",
    "Rocket thrust: exhaust pushed down, rocket pushed up — third law works best in vacuum.",
    "Vehicle crash tests: force sensors log ΣF to reconstruct injuries.",
    "Tug-of-war physics: you win by pushing the GROUND harder, not by pulling the rope (ground reaction is the external force).",
    "Injured-limb traction systems: pulley arrangements use uniform tension to apply calibrated ΣF."
  ],
  summary: "1st: no net force → constant v (inertia; mass measures it). 2nd: ΣF = ma per axis — net force causes acceleration, not velocity. 3rd: pairs equal/opposite on DIFFERENT bodies. FBD protocol: isolate, draw all external forces, never draw ma or motion-forces. W = mg; apparent weight = N; Atwood & contact problems: system for a, isolate for internal forces.",
  visuals: [
    { type: "flowChart", config: { steps: ["Isolate the body (dot/box)", "List forces: weight, normal, tension, friction, applied", "Draw arrows from the body", "Choose axes (tilt to incline)", "ΣF = ma per axis", "Solve simultaneously"], title: "Free-Body Diagram Protocol" } }
  , {"type":"qa","config":{"title":"Quick Review — tap a question to reveal the answer","pairs":[{"q":"A 1200 kg car is pulled by a 3000 N engine force against 1200 N of resistance. Find the a…","a":"<b>Answer:</b> 1.5 m/s², reaching 15 m/s — only the NET force accelerates."},{"q":"A 70 kg man stands on a scale in a lift accelerating upward at 2 m/s². What does the scal…","a":"<b>Answer:</b> 826 N accelerating up; ZERO in free fall — weightlessness is N = 0, not absence of gravity."},{"q":"Atwood machine: 5 kg and 3 kg masses over a frictionless pulley. Find the acceleration an…","a":"<b>Answer:</b> a = 2.45 m/s², T ≈ 37 N — note T is LESS than the heavy weight and MORE than the light one."},{"q":"A box slides down a frictionless 25° ramp 8 m long from rest. Find its acceleration and s…","a":"<b>Answer:</b> 4.1 m/s² down-slope, 8.1 m/s at bottom — mass never appeared: all objects slide alike (frictionless)."}]}}],
  questions: [
    { type: "mcq", q: "Newton's first law applies when:", options: ["No forces at all act", "The net force is zero", "The object is at rest only", "Forces are unbalanced"], answer: 1, difficulty: 1, explanation: "Zero NET force (equilibrium) → constant velocity; individual forces may exist." },
    { type: "calc", q: "Net force 40 N on 8 kg. Acceleration (m/s²)?", answer: "5", difficulty: 1, explanation: "a = F/m = 40/8 = 5.", tolerance: 0.1 },
    { type: "mcq", q: "The third-law partner of 'Earth pulls the apple down' is:", options: ["The apple's inertia", "The apple pulls Earth up", "The branch holds the apple", "Air resistance on the apple"], answer: 1, difficulty: 2, explanation: "Pair: same interaction, swapped bodies — apple pulls Earth equally upward." },
    { type: "calc", q: "A 40 kg object on the Moon (g = 1.6 N/kg). Its weight (N)?", answer: "64", difficulty: 1, explanation: "W = mg = 40 × 1.6 = 64 N (mass still 40 kg).", tolerance: 0.5 },
    { type: "concept", q: "Why do passengers lurch forward when a bus brakes suddenly?", answer: "inertia continue moving|bodies keep velocity|no forward force", difficulty: 2, explanation: "Their bodies maintain forward velocity (first law) while the bus decelerates beneath them — no forward force acts." },
    { type: "calc", q: "Lift accelerates down at 3 m/s². Apparent weight (N) of a 50 kg passenger? (g = 9.8)", answer: "340", difficulty: 3, explanation: "N = m(g − a) = 50 × 6.8 = 340 N.", tolerance: 2 },
    { type: "mcq", q: "On a frictionless incline, the down-slope acceleration depends on:", options: ["Mass only", "Angle only", "Mass and angle", "Surface area"], answer: 1, difficulty: 2, explanation: "a = g sinθ — mass cancels from mg sinθ = ma." },
    { type: "calc", q: "Atwood with 6 kg and 4 kg (g = 10). Acceleration (m/s²)?", answer: "2", difficulty: 3, explanation: "a = (6−4)g/(6+4) = 20/10 = 2 m/s².", tolerance: 0.1 },
    { type: "tf", q: "A horse-cart pair can't move because the horse pulls the cart and the cart pulls back equally.", answer: false, difficulty: 2, explanation: "The pairs act on different bodies; motion comes from the ground's forward reaction on the horse exceeding resistive forces on the cart." },
    { type: "short", q: "Which is bigger: the force Earth exerts on the Moon, or the force the Moon exerts on Earth?", answer: "equal|same|they are equal", difficulty: 2, explanation: "Third law: exactly equal magnitudes — the effects differ because the masses differ." }
  ]
};

/* --- p4-2: Frictional Force --- */
Lessons["g11-physics-up4-t2"] = {
  overview: "Friction is the contact force that opposes slipping — useful for walking and braking, wasteful in engines. This lesson quantifies it: static friction caps at µₛN, kinetic friction sits at µₖN, and inclined planes reveal the angle where holding turns into sliding.",
  objectives: [
    "Distinguish static and kinetic friction and their laws",
    "Apply f ≤ µₛN (holding) and f = µₖN (sliding)",
    "Find the critical angle of repose: tanθ = µₛ",
    "Solve dynamics problems with friction on horizontal and inclined surfaces",
    "Explain friction's benefits and methods of reducing it"
  ],
  simple: "Rub two surfaces and microscopic bumps interlock — that's friction, always parallel to the surface, fighting slipping (or the attempt to slip). Static friction is clever: it matches your push exactly, up to a limit f_max = µₛN. Once you exceed the limit, the object breaks free and sliding friction takes over at the lower value f = µₖN. Heavier press = more friction (N bigger); rougher pair = bigger µ. Wheels and lubricants beat friction; soles and tyres need it.",
  detailed: `<p><b>Origin & laws:</b> real contact happens at asperity junctions that weld and shear. Empirical laws: (1) friction ∝ normal force N, (2) approximately independent of apparent contact AREA, (3) kinetic friction nearly independent of sliding speed, (4) µ depends on the material pair, (5) µₛ > µₖ (breakaway is harder than keeping sliding).</p>
<p><b>Static friction — the adaptive force:</b> fₛ adjusts to EXACTLY oppose applied tangential force up to fₛ,max = µₛN. A 10 N push on a box with limit 50 N → friction is 10 N (not 50!). Only at impending motion does fₛ = µₛN. Common error: writing µₛN for any stationary situation.</p>
<p><b>Kinetic friction:</b> once sliding, fₖ = µₖN constantly, opposing velocity relative to the surface.</p>
<p><b>On inclines:</b> N = mg cosθ always (perpendicular equilibrium). Down-slope pull = mg sinθ. Sliding begins when mg sinθ > µₛ mg cosθ → tanθ > µₛ. The critical angle (angle of repose) gives µₛ = tanθ_c — a measurement technique. Once sliding at constant speed: µₖ = tanθ again (mg sinθ = µₖ mg cosθ).</p>
<p><b>Dynamics with friction:</b> FBD + friction opposing motion: horizontal pull F: a = (F − µₖmg)/m. Braking distance with locked wheels: a = µₖg, s = v²/(2µₖg). Pushing at angle θ adds a downward component (F sinθ) increasing N and thus friction — pulling is easier than pushing.</p>
<p><b>Friend and foe:</b> walking (static friction propels you — foot pushes back, ground pushes forward), tyres, clamps, nails, matches, writing. Reduction: lubrication (film separates asperities), ball bearings (rolling µ ≪ sliding µ), streamlining (fluid friction), air cushions, polishing. Fluid drag grows with speed (∝ v² at high Re) — terminal velocity when drag = weight.</p>`,
  keyTerms: [
    { term: "Static friction fₛ", def: "Adaptive surface force preventing slip; fₛ ≤ µₛN." },
    { term: "Kinetic friction fₖ", def: "Constant sliding resistance; fₖ = µₖN." },
    { term: "Coefficient of friction µ", def: "Material-pair ratio f/N; dimensionless; µₛ > µₖ." },
    { term: "Normal reaction N", def: "Perpendicular surface force; friction's 'pressure source'." },
    { term: "Angle of repose", def: "Slope where sliding begins; tanθ_c = µₛ." },
    { term: "Impending motion", def: "The threshold state where fₛ = µₛN exactly." },
    { term: "Terminal velocity", def: "Fall speed where drag = weight; a = 0." }
  ],
  formulas: [
    {
      name: "Friction laws",
      formula: "fₛ ≤ µₛN (holding) | fₖ = µₖN (sliding)",
      meaning: "Static matches demand up to a cap; kinetic is fixed at µₖN.",
      vars: [
        { name: "µₛ, µₖ", meaning: "static/kinetic coefficients", unit: "dimensionless" },
        { name: "N", meaning: "normal reaction", unit: "N" }
      ],
      units: "newtons",
      when: "Any contact with attempted or actual slipping.",
      example: "20 kg box, µₛ = 0.5: max static = 0.5×196 = 98 N — a 60 N push won't move it (friction answers 60 N)."
    },
    {
      name: "Angle of repose",
      formula: "µₛ = tanθ_c",
      meaning: "Slope angle at which sliding just begins.",
      vars: [{ name: "θ_c", meaning: "critical angle", unit: "degrees" }],
      units: "—",
      when: "Measuring µₛ with a tilting plane; sand-pile slopes.",
      example: "θ_c = 31° → µₛ = tan31° = 0.60."
    },
    {
      name: "Sliding down an incline with friction",
      formula: "a = g(sinθ − µₖcosθ)",
      meaning: "Net down-slope acceleration after kinetic friction.",
      vars: [{ name: "µₖ", meaning: "kinetic coefficient", unit: "—" }],
      units: "m/s²",
      when: "Constant-speed slide: a = 0 → µₖ = tanθ.",
      example: "θ = 45°, µₖ = 0.3: a = 9.8(0.707 − 0.212) = 4.85 m/s²."
    }
  ],
  workedExamples: [
    {
      problem: "A 25 kg crate on a floor (µₛ = 0.40, µₖ = 0.30). Find the friction force when horizontal pushes of (a) 60 N, (b) 100 N, (c) 120 N are applied.",
      given: "N = mg = 245 N. Limits: fₛ,max = 0.40×245 = 98 N; fₖ = 0.30×245 = 73.5 N.",
      formula: "Compare push to 98 N.",
      substitution: "(a) 60 < 98: static holds → f = 60 N (matches!). (b) 100 > 98: moves → f = 73.5 N. (c) 120 > 98: sliding → f = 73.5 N.",
      calculation: "(b)/(c) acceleration: a = (100−73.5)/25 = 1.06; (120−73.5)/25 = 1.86 m/s².",
      answer: "(a) 60 N, (b) 73.5 N, (c) 73.5 N — static friction ADAPTS below its cap; kinetic is fixed."
    },
    {
      problem: "A tilting board: a book starts sliding at 28°. Find µₛ. Once nudged, it slides down at constant speed — find µₖ.",
      given: "θ_c = 28°; constant-speed angle also 28° (given nudge scenario).",
      formula: "Impending: mg sinθ = µₛ mg cosθ → µₛ = tanθ. Constant v: µₖ = tanθ.",
      substitution: "µₛ = tan28° = 0.532. µₖ = tan28° = 0.532 in this scenario.",
      calculation: "Mass cancelled — the angle alone measures the coefficient.",
      answer: "µₛ ≈ 0.53. (Real boards: constant-speed angle is SMALLER than start angle since µₖ < µₛ — here they'd differ if measured separately.)"
    },
    {
      problem: "A 10 kg box is dragged 12 m across a floor (µₖ = 0.35) by a rope at 30° above horizontal with tension 60 N. Find the normal force, friction and the box's acceleration.",
      given: "T = 60 at 30°, m = 10.",
      formula: "Vertical: N + T sin30° = mg. f = µₖN. Horizontal: T cos30° − f = ma.",
      substitution: "N = 98 − 60×0.5 = 68 N. f = 0.35×68 = 23.8 N. Net = 51.96 − 23.8.",
      calculation: "a = 28.16/10 = 2.82 m/s².",
      answer: "N = 68 N (rope's lift reduces it below 98 N — pulling beats pushing!), f = 23.8 N, a = 2.8 m/s²."
    },
    {
      problem: "A car at 20 m/s slams locked brakes on wet road (µₖ = 0.50). Find the deceleration and skid length. On dry concrete µₖ = 0.80 — new skid length?",
      given: "v = 20 m/s.",
      formula: "a = µₖg; s = v²/(2a).",
      substitution: "Wet: a = 4.9 m/s², s = 400/9.8. Dry: a = 7.84, s = 400/15.68.",
      calculation: "Wet: 40.8 m. Dry: 25.5 m.",
      answer: "Skid ∝ 1/µ — better grip cuts stopping distance by 37%; this is why ABS and tyre quality save lives."
    },
    {
      problem: "On a 35° slope, a 4 kg block (µₛ = µₖ = 0.5... check: tan35° = 0.70 > 0.5 so it slides). Find its acceleration down the slope.",
      given: "θ = 35°, µₖ = 0.50.",
      formula: "a = g(sinθ − µₖcosθ).",
      substitution: "sin35° = 0.574, cos35° = 0.819. a = 9.8(0.574 − 0.5×0.819).",
      calculation: "a = 9.8(0.574 − 0.410) = 9.8 × 0.164 = 1.61 m/s².",
      answer: "1.6 m/s² down — friction ate 71% of the gravitational pull but couldn't hold it (µₛ < tanθ)."
    }
  ],
  commonMistakes: [
    "Writing f = µₛN for a stationary object that ISN'T at its limit — static friction equals the applied force, not the maximum.",
    "Using µₛ for a sliding object (or µₖ for a holding one).",
    "Setting N = mg on inclines — it's mg cosθ; and with angled pulls, N shifts too.",
    "Friction always 'opposes motion' — precisely, it opposes RELATIVE slipping (static friction PROPULSES you forward when walking).",
    "Forgetting friction changes braking: a = µₖg is the maximum deceleration.",
    "Thinking bigger contact area = more friction (approx. false — it's the normal force that matters).",
    "Angle of repose: using sin instead of tan for µₛ."
  ],
  applications: [
    "Tyres & ABS: µₛ (rolling grip) > µₖ (skid grip) — why rolling tyres stop shorter and steering keeps working.",
    "Shoe and floor design: µ ≥ 0.5 for safe walking surfaces; sports shoes tune µ per sport.",
    "Machining: cutting fluid lowers µₖ, saving energy and tool wear.",
    "Geology: angle of repose sets sand-pile slopes and landslide thresholds (µₛ of soil).",
    "Belt drives & clamps: friction transmits torque and holds objects (capstan equation).",
    "Terminal velocity: skydivers control µ-like drag with posture; raindrops' speed limits protect ecosystems."
  ],
  summary: "Friction: tangential contact force from asperities. Static adapts (fₛ ≤ µₛN) until impending motion; kinetic fixed (fₖ = µₖN); µₛ > µₖ. Incline: N = mg cosθ; sliding starts when tanθ > µₛ (angle of repose). Dynamics: FBD with friction opposing slip; angled pulls reduce N. Friend: walking, braking, gripping. Foe: wear, heat — fight with lubrication, bearings, streamlining.",
  visuals: [
    { type: "flowChart", config: { steps: ["Push small → fₛ matches push", "Push grows → fₛ hits µₛN (impending)", "Break free → f drops to µₖN", "Sliding continues at µₖN", "Stop pushing → v decays, fₖ opposes until rest"], title: "From Holding to Slipping" } }
  , {"type":"qa","config":{"title":"Quick Review — tap a question to reveal the answer","pairs":[{"q":"A 25 kg crate on a floor (µₛ = 0.40, µₖ = 0.30). Find the friction force when horizontal…","a":"<b>Answer:</b> (a) 60 N, (b) 73.5 N, (c) 73.5 N — static friction ADAPTS below its cap; kinetic is fixed."},{"q":"A tilting board: a book starts sliding at 28°. Find µₛ. Once nudged, it slides down at co…","a":"<b>Answer:</b> µₛ ≈ 0.53. (Real boards: constant-speed angle is SMALLER than start angle since µₖ &lt; µₛ — here they'd differ if measured separately.)"},{"q":"A 10 kg box is dragged 12 m across a floor (µₖ = 0.35) by a rope at 30° above horizontal…","a":"<b>Answer:</b> N = 68 N (rope's lift reduces it below 98 N — pulling beats pushing!), f = 23.8 N, a = 2.8 m/s²."},{"q":"A car at 20 m/s slams locked brakes on wet road (µₖ = 0.50). Find the deceleration and sk…","a":"<b>Answer:</b> Skid ∝ 1/µ — better grip cuts stopping distance by 37%; this is why ABS and tyre quality save lives."}]}}],
  questions: [
    { type: "mcq", q: "A 50 N push on a box whose maximum static friction is 80 N. The friction force is:", options: ["80 N", "50 N", "30 N", "130 N"], answer: 1, difficulty: 2, explanation: "Below the cap, static friction MATCHES the applied force: 50 N." },
    { type: "calc", q: "15 kg box, µₖ = 0.30, sliding. Kinetic friction (N)? (g = 9.8)", answer: "44.1", difficulty: 1, explanation: "f = µₖmg = 0.3 × 147 = 44.1 N.", tolerance: 0.5 },
    { type: "mcq", q: "Which is typically larger?", options: ["µₖ", "µₛ", "They're equal", "Depends on area"], answer: 1, difficulty: 1, explanation: "Breakaway (static) exceeds sustained sliding (kinetic)." },
    { type: "calc", q: "A block starts sliding on a tilting board at θ_c = 30°. Find µₛ (tan30° = 0.577).", answer: "0.577", difficulty: 2, explanation: "µₛ = tanθ_c = 0.577.", tolerance: 0.01 },
    { type: "mcq", q: "When you walk forward, static friction on your foot points:", options: ["Backward", "Forward", "Upward", "Nowhere"], answer: 1, difficulty: 3, explanation: "Your foot pushes the ground backward; friction (its reaction at the contact) pushes you FORWARD — static friction is the walking force." },
    { type: "calc", q: "Car braking with locked wheels, µₖ = 0.7, g = 10. Deceleration (m/s²)?", answer: "7", difficulty: 2, explanation: "a = µₖg = 7 m/s².", tolerance: 0.1 },
    { type: "mcq", q: "Pushing a lawn mower (downward handle angle) vs pulling it (upward angle):", options: ["Pushing has less friction", "Pulling has less friction", "Same either way", "Pulling increases N"], answer: 1, difficulty: 3, explanation: "Pulling's vertical component lifts slightly → smaller N → smaller friction. Pushing presses down → more friction." },
    { type: "calc", q: "4 kg block on 30° incline, µₖ = 0.2. Acceleration down the slope? (g = 10; sin30 = 0.5, cos30 = 0.866)", answer: "3.27", difficulty: 3, explanation: "a = g(sinθ − µₖcosθ) = 10(0.5 − 0.173) = 3.27 m/s².", tolerance: 0.1 },
    { type: "tf", q: "Doubling the contact area of a sliding block (same weight) doubles its kinetic friction.", answer: false, difficulty: 2, explanation: "Friction ≈ independent of apparent area; it depends on N and µ." },
    { type: "short", q: "Name one method of reducing friction between machine parts.", answer: "lubrication|oil|grease|ball bearings|polishing|streamlining", difficulty: 1, explanation: "Lubricants separate surfaces; bearings replace sliding with rolling; polishing smooths asperities." }
  ]
};
