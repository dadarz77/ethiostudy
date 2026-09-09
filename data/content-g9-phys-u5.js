/* Content: Grade 9 Physics — Unit 5: Simple Machines (1 topic) */
window.Lessons = window.Lessons || {};

Lessons["g9-physics-up5-t1"] = {
  overview: "A crowbar lets one hand lift what ten could not — not by cheating physics but by trading distance for force. This lesson formalizes that trade: mechanical advantage, levers, pulleys, inclined planes and the efficiency that keeps every machine honest.",
  objectives: [
    "Define work input/output, mechanical advantage and efficiency of machines",
    "State the principle of moments and solve lever problems",
    "Classify levers into three orders with examples",
    "Analyze fixed vs movable pulleys",
    "Explain inclined planes and why ramps beat lifting"
  ],
  simple: "A <b>simple machine</b> multiplies force by making you apply it over MORE distance: <b>MA = load ÷ effort</b>. Nothing is free — work out ≤ work in (the rest goes to friction as heat), so <b>efficiency = work out ÷ work in × 100%</b>. <b>Lever:</b> a rigid bar on a pivot — balance rule: effort × its distance = load × its distance (<b>principle of moments</b>). Long effort arm = big force gain (crowbar, seesaw). Three classes by what sits in the middle: force (Class 1 seesaw), load (Class 2 wheelbarrow), effort (Class 3 tweezers/forearm). <b>Pulleys:</b> fixed = direction change only; movable = MA 2. <b>Ramp:</b> push up a slope instead of lifting straight — less force, further walk.",
  detailed: "<p><b>The deal machines make:</b> a machine cannot create work (energy conservation, Unit 4) — it reshapes it: <b>less effort force over more distance</b>, or changes force direction. <b>Mechanical advantage MA = load/effort</b>: a MA-4 lever turns a 100 N pull into lifting 400 N. Because work in = F_e × d_e must (ideally) equal work out = F_L × d_L, the distance traded tells the price: the load rises a quarter as far as your end sweeps. The ideal relation also gives <b>velocity ratio VR = distance effort moves ÷ distance load moves</b>, and in the perfect machine MA = VR; friction shrinks MA, hence efficiency = MA/VR × 100% — the machine's health report.</p><p><b>Levers and the principle of moments:</b> a <b>moment</b> = force × perpendicular distance from the pivot (turning power, N·m). A balanced lever obeys effort × d_e = load × d_L — moments equal both ways. A 0.5 m load arm with a 400 N sack needs 400×0.5 = 200 N·m; pushing down 2 m out requires just 100 N. <b>Classes:</b> I — fulcrum between effort & load (seesaw, crowbar, scissors — balance or force-multiply); II — load between fulcrum & effort (wheelbarrow, bottle opener: effort arm always longer, MA > 1 built-in); III — effort between fulcrum & load (tweezers, fishing rod, your forearm's biceps: MA < 1 deliberately — trades force for SPEED and reach of the load). The forearm is the exam favorite: elbow = fulcrum, biceps pulls mid-bone (effort), hand holds the load — a class III machine, which is why holding a book heavy costs the biceps ~10× the book's weight.</p><p><b>Pulleys:</b> a fixed pulley only redirects the pull (MA = 1 — you still lift the full load, just downward, easier on your body). A movable pulley splits the load across two rope segments: effort = load/2 (MA = 2), pulling twice the rope. Block-and-tackle systems stack wheels; count the rope segments supporting the load = ideal MA (a construction hoist on a Addis high-rise, or the well windlass at home). Wheel-and-axle (steering wheel, door knob) and the screw (a wrapped ramp — car jacks) are lever/ramp variants.</p><p><b>Inclined plane:</b> lift a drum straight up = its full weight over h; roll it up a ramp of length L = only W×h/L of force over the longer path (ideal MA = L/h — a gentle slope multiplies hugely). Real ramps add friction, so workers push switchback roads up mountains instead of climbing straight (the engineering version: the Genal/Debark road hairpins exist because physics said so). Wedge = moving double-ramp (axe splitting firewood); screw = ramp around a cylinder (clamping force in a tiny turn).</p><p><b>Efficiency honesty:</b> every real machine's output < input — bearings, rope stretch and friction return the difference as heat and noise; lubricating, polishing and lighter parts raise efficiency (bike chain oil is applied physics). A pulley block quoting VR 4 with measured MA 3 runs 75% efficient — and the missing 25% warms the axle, never the universe's energy ledger. Machine design is the art of making that trade small.</p>",
  keyTerms: [
    { term: "Mechanical advantage (MA)", def: "Load ÷ effort — the force-multiplying factor" },
    { term: "Moment of a force", def: "Turning effect: F × perpendicular distance to pivot" },
    { term: "Principle of moments", def: "Balance when clockwise moments = anticlockwise" },
    { term: "Velocity ratio (VR)", def: "Distance effort moves ÷ distance load moves" },
    { term: "Efficiency", def: "MA/VR × 100% — work out vs work in" },
    { term: "Classes of lever", def: "By what sits central: fulcrum (I), load (II), effort (III)" },
    { term: "Block and tackle", def: "Compound pulleys — MA = rope segments on the load" }
  ],
  formulas: [
    { name: "Mechanical advantage", formula: "MA = load ÷ effort", meaning: "force multiplication achieved", when: "any machine rating", example: "400 N lifted by 100 N → MA 4" },
    { name: "Moments balance", formula: "E × d_E = L × d_L", meaning: "seesaw equilibrium", when: "levers, balances, braced beams", example: "20 kg at 0.4 m vs 10 kg at 0.8 m: 80 = 80 balanced (g cancels)" },
    { name: "Ideal ramp", formula: "effort = W × h ÷ L", meaning: "slope trades force for distance", when: "loading ramps, roads, wedges", example: "500 N drum, h 1 m, L 4 m → 125 N push" },
    { name: "Machine efficiency", formula: "η = (MA ÷ VR) × 100% = W_out/W_in", meaning: "useful fraction", when: "every real device", example: "VR 4, MA 3 → 75%" }
  ],
  workedExamples: [
    {
      problem: "Crowbar: fulcrum 0.1 m from a 500 N rock, your hand pressing the other end 0.9 m from the fulcrum. Effort needed?",
      calculation: "effort arm = 0.9 m from fulcrum, load arm = 0.1 m: E×0.9 = 500×0.1",
      answer: "55.6 N — MA ≈ 9"
    },
    {
      problem: "A 3-segment block-and-tackle raises 600 N with 250 N measured effort. Find MA and efficiency.",
      calculation: "MA = 600/250 = 2.4; VR = 3; η = 2.4/3",
      answer: "MA 2.4, efficiency 80% — the lost 20% heats the sheaves"
    },
    {
      problem: "Loading ramp 5 m long, 1 m high moves a 900 N barrel. Ideal effort? (frictionless)",
      calculation: "E = Wh/L = 900×1/5",
      answer: "180 N (vs 900 N straight lift — the 4× is bought with 5× the walking)"
    },
    {
      problem: "Seesaw: 40 kg child at 1.5 m from pivot; where must a 60 kg child sit to balance?",
      calculation: "40×1.5 = 60×d",
      answer: "1.0 m — mass ratio 2:3 forces arm ratio 3:2"
    }
  ],
  commonMistakes: [
    "Saying machines 'save work' (they save FORCE — work rises with distance and friction)",
    "Measuring moment arms along the lever instead of PERPENDICULAR distance to the pivot line",
    "Calling a wheelbarrow class I (load sits between — class II)",
    "Confusing fixed-pulley direction gain with force gain (fixed: MA 1)",
    "Counting all rope segments — only those carrying the load count for MA",
    "Expecting efficiency > 100% from a clever diagram"
  ],
  applications: [
    "Traditional grain milling levers, well windlasses and pulley lifts: household mechanics",
    "Ramp loading of trucks at Merkato; switchback mountain roads where hairpins = physics",
    "Bicycle gears: wheel-and-axle + lever logic, choosing force-vs-speed trades per hill",
    "Body mechanics: forearm class-III levers — why carrying kids on the hip beats outstretched arms",
    "Construction: tower cranes balance long jibs with massive counterweights (moments at ton scale)"
  ],
  summary: "Machines trade distance for force, never for free: MA = load/effort, paid by extra travel and friction (η = MA/VR). Levers balance moments (E·d_E = L·d_L) in three classes; fixed pulleys redirect, movable multiply; ramps and wedges stretch the same bargain. Every 'easy lift' is geometry wearing a disguise.",
  visuals: [],
  questions: [
    { type: "mcq", q: "A simple machine multiplies:", options: ["work", "energy", "force", "power"], answer: 2, difficulty: 1, explanation: "Force — at the price of distance; work never increases." },
    { type: "mcq", q: "The moment of a force equals:", options: ["force × time", "force × perpendicular distance to pivot", "mass × acceleration", "work ÷ distance"], answer: 1, difficulty: 1, explanation: "Turning power grows with the lever arm." },
    { type: "mcq", q: "A seesaw is which lever class?", options: ["Class I", "Class II", "Class III", "not a lever"], answer: 0, difficulty: 1, explanation: "Fulcrum between load and effort." },
    { type: "mcq", q: "MA of a machine where 50 N effort lifts 450 N:", options: ["9", "400", "0.11", "4.5"], answer: 0, difficulty: 1, explanation: "450 ÷ 50." },
    { type: "mcq", q: "A fixed pulley:", options: ["doubles the effort", "changes force direction only", "is a lever class II", "adds energy"], answer: 1, difficulty: 2, explanation: "MA = 1; your arms thank you anyway." },
    { type: "mcq", q: "The forearm lifting a book is class III, meaning:", options: ["it multiplies force", "the effort is between fulcrum and load", "it is a ramp", "MA > 1"], answer: 1, difficulty: 2, explanation: "Force sacrificed for speed & reach." },
    { type: "mcq", q: "A 2 m ramp raising 0.5 m ideally multiplies force by:", options: ["4", "0.25", "2.5", "8"], answer: 0, difficulty: 2, explanation: "Ideal MA = L/h = 2/0.5." },
    { type: "mcq", q: "Real machine efficiency is below 100% because:", options: ["designers are careless", "friction returns part of work as heat", "energy disappears", "machines age"], answer: 1, difficulty: 1, explanation: "Dissipation — the Second Law's invoice." },
    { type: "mcq", q: "400 N×0.5 m = E×2 m. Effort E:", options: ["100 N", "800 N", "160 N", "50 N"], answer: 0, difficulty: 2, explanation: "Moments: 200 N·m ÷ 2 m." },
    { type: "mcq", q: "VR of a machine is:", options: ["load/effort", "distance moved by effort ÷ distance moved by load", "output power/input", "moment ÷ force"], answer: 1, difficulty: 3, explanation: "Pure geometry; friction then lowers actual MA." }
  ]
};
