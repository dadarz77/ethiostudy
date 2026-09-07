/* ============================================================
   Content: Grade 10 Physics — Unit 1: Vector Quantities
   5 topics: Scalars & Vectors, Representations, Addition/Subtraction,
   Graphical Method, Vector Resolution.
   ============================================================ */
window.Lessons = window.Lessons || {};

/* --- p1-1: Scalars and Vectors --- */
Lessons["g10-physics-up1-t1"] = {
  overview: "In physics, we deal with two types of quantities: scalars (which have only magnitude) and vectors (which have both magnitude and direction). Understanding the difference is the foundation of all physics.",
  objectives: [
    "Distinguish between scalar and vector quantities",
    "Give examples of each type",
    "Understand that vectors have both magnitude and direction",
    "Use correct units and notation for vectors"
  ],
  simple: "A scalar is just a number with a unit — like saying '5 kg' or '30°C'. A vector is a number with a unit AND a direction — like '5 m/s to the north' or '10 N downward'. Think of it this way: if you say 'I walked 5 km', that's a scalar. If you say 'I walked 5 km east', that's a vector. The direction is the key difference!",
  detailed: `<p>In physics, quantities are classified into two fundamental categories: <b>scalars</b> and <b>vectors</b>.</p>
<p><b>Scalar quantities</b> are fully described by their magnitude (size) and a unit. They obey ordinary arithmetic rules. Examples include: mass (5 kg), temperature (30°C), time (10 s), speed (20 m/s), energy (150 J), and distance (100 m).</p>
<p><b>Vector quantities</b> require both magnitude and direction for a complete description. Examples include: displacement (5 m east), velocity (20 m/s north), force (10 N downward), acceleration (9.8 m/s² downward), and momentum.</p>
<p>Vectors are represented graphically by arrows. The length of the arrow represents the magnitude, and the arrowhead points in the direction. Mathematically, vectors are often written in bold (like <b>F</b>) or with an arrow above (like <span style="text-decoration:overline">F</span>).</p>`,
  keyTerms: [
    { term: "Scalar", def: "A quantity with only magnitude (size). No direction." },
    { term: "Vector", def: "A quantity with both magnitude and direction." },
    { term: "Magnitude", def: "The size or amount of a quantity; always positive." },
    { term: "Direction", def: "The orientation of a vector, often given as an angle or compass direction." },
    { term: "Displacement", def: "A vector quantity representing change in position." },
    { term: "Distance", def: "A scalar quantity representing the total path length traveled." }
  ],
  formulas: [
    {
      name: "Magnitude of a vector",
      formula: "|v| = √(x² + y²)",
      meaning: "The magnitude (length) of a vector is found using the Pythagorean theorem on its components.",
      vars: [
        { name: "|v|", meaning: "magnitude of the vector", unit: "same as the vector" },
        { name: "x", meaning: "horizontal component", unit: "same as the vector" },
        { name: "y", meaning: "vertical component", unit: "same as the vector" }
      ],
      units: "Depends on the quantity (m, m/s, N, etc.)",
      when: "When you know the components of a vector and need its magnitude.",
      example: "A force has components Fx = 3 N and Fy = 4 N. |F| = √(3² + 4²) = √(9 + 16) = √25 = 5 N."
    }
  ],
  workedExamples: [
    {
      problem: "A car travels 40 km east, then 30 km north. What is the total distance traveled? What is the displacement?",
      given: "First leg: 40 km east. Second leg: 30 km north.",
      formula: "Distance = 40 + 30 = 70 km. Displacement = √(40² + 30²) = 50 km",
      substitution: "Displacement = √(1600 + 900) = √2500 = 50 km",
      calculation: "The direction is found using tanθ = 30/40 = 0.75, so θ = tan⁻¹(0.75) ≈ 37° north of east.",
      answer: "Distance = 70 km (scalar). Displacement = 50 km at 37° north of east (vector)."
    }
  ],
  commonMistakes: [
    "Adding vectors like scalars (ignoring direction). Displacement is NOT the same as distance!",
    "Calling speed a vector. Speed is a scalar; velocity is a vector.",
    "Forgetting to include direction when describing a vector quantity."
  ],
  applications: [
    "GPS navigation uses vectors to calculate displacement and route directions.",
    "Pilots use vector addition to account for wind speed and direction when flying.",
    "Engineers resolve forces into components when designing structures like bridges."
  ],
  summary: "Scalars have magnitude only. Vectors have magnitude AND direction. Distance is a scalar; displacement is a vector. Speed is a scalar; velocity is a vector. Always ask: does this quantity need a direction to make sense?",
  visuals: [
    { type: "numberLine", config: { min: -6, max: 6, marks: [], highlights: [{ value: 3, label: "Scalar: 3" }, { value: -4, label: "Vector: -4 (direction)" }] } }
  , {"type":"qa","config":{"title":"Quick Review — tap a question to reveal the answer","pairs":[{"q":"A car travels 40 km east, then 30 km north. What is the total distance traveled? What is…","a":"<b>Answer:</b> Distance = 70 km (scalar). Displacement = 50 km at 37° north of east (vector)."}]}}],
  questions: [
    { type: "mcq", q: "Which of the following is a scalar quantity?", options: ["Velocity", "Force", "Temperature", "Displacement"], answer: 2, difficulty: 1, explanation: "Temperature has only magnitude (e.g. 30°C), no direction. The others all require direction." },
    { type: "mcq", q: "A car travels 100 km north. This is a description of:", options: ["Distance (scalar)", "Speed (scalar)", "Displacement (vector)", "Time (scalar)"], answer: 2, difficulty: 1, explanation: "Distance would be '100 km' without direction. Since direction 'north' is given, it's displacement — a vector." },
    { type: "tf", q: "Speed is a vector quantity.", answer: false, difficulty: 1, explanation: "Speed is a scalar — it has magnitude only. Velocity is the vector version that includes direction." },
    { type: "mcq", q: "Which of the following is the best example of a vector?", options: ["5 kilograms", "30 seconds", "10 meters per second east", "100 degrees Celsius"], answer: 2, difficulty: 1, explanation: "'10 m/s east' includes both magnitude (10 m/s) and direction (east)." },
    { type: "short", q: "What is the key difference between a scalar and a vector?", answer: "direction|magnitude and direction", difficulty: 2, explanation: "Vectors have direction, scalars do not. Both have magnitude." },
    { type: "concept", q: "A hiker walks 3 km east, then 4 km south. Without calculating the exact number, explain why the displacement is different from the total distance.", answer: "distance is the total path|displacement is the straight line|distance is scalar|displacement is vector", difficulty: 3, explanation: "Distance (3+4=7 km) is the total path length — a scalar. Displacement is the straight-line distance from start to finish (5 km) — a vector with direction." },
    { type: "calc", q: "A force has components Fx = 6 N and Fy = 8 N. Calculate the magnitude of the force.", answer: "10", difficulty: 2, explanation: "|F| = √(6² + 8²) = √(36 + 64) = √100 = 10 N", tolerance: 0.1 }
  ]
};

/* --- p1-2: Vector Representations --- */
Lessons["g10-physics-up1-t2"] = {
  overview: "Vectors can be represented in three ways: graphically (as arrows), algebraically (as components), and symbolically (using notation). Each representation helps us understand and work with vectors differently.",
  objectives: [
    "Draw vectors as arrows with correct scale and direction",
    "Use vector notation (bold, arrow, component form)",
    "Convert between different representations of the same vector",
    "Find the magnitude and direction from components"
  ],
  simple: "A vector is like an arrow. The length of the arrow tells you how big the quantity is (magnitude), and where the arrow points tells you the direction. If you know the horizontal and vertical parts (components) of a vector, you can find the total length using Pythagoras. If you know the length and angle, you can find the components using sin and cos.",
  detailed: `<p>There are three main ways to represent a vector:</p>
<p><b>1. Graphical representation:</b> An arrow drawn to scale. The length represents magnitude, and the arrowhead shows direction. The angle is measured from a reference direction (usually the positive x-axis, counterclockwise).</p>
<p><b>2. Component form:</b> A vector can be broken into horizontal (x) and vertical (y) components: <b>v</b> = (v<sub>x</sub>, v<sub>y</sub>). If you know the magnitude (|v|) and angle (θ), then v<sub>x</sub> = |v| cos θ and v<sub>y</sub> = |v| sin θ.</p>
<p><b>3. Symbolic notation:</b> Vectors are often written in bold type (like <b>F</b>) or with an arrow over the letter (like <span style="text-decoration:overline">F</span>). In handwriting, you should always put an arrow over vector symbols.</p>`,
  keyTerms: [
    { term: "Component", def: "The projection of a vector along an axis (x or y)." },
    { term: "Resultant", def: "The single vector that represents the sum of two or more vectors." },
    { term: "Scale", def: "A ratio used to relate the length of a drawn arrow to the actual magnitude." },
    { term: "Reference direction", def: "The direction from which angles are measured, usually the positive x-axis." }
  ],
  formulas: [
    {
      name: "Components from magnitude and direction",
      formula: "vx = |v| cos θ, vy = |v| sin θ",
      meaning: "Given the magnitude and angle of a vector, you can find how much of it lies along each axis.",
      vars: [
        { name: "vx", meaning: "horizontal component", unit: "same as vector" },
        { name: "vy", meaning: "vertical component", unit: "same as vector" },
        { name: "|v|", meaning: "magnitude of the vector", unit: "varies" },
        { name: "θ", meaning: "angle from positive x-axis", unit: "degrees (°)" }
      ],
      units: "Components have the same units as the vector.",
      when: "When you know the magnitude and direction of a vector and need to find its components.",
      example: "A velocity of 20 m/s at 30° above horizontal: vx = 20 cos 30° = 17.3 m/s, vy = 20 sin 30° = 10 m/s."
    }
  ],
  workedExamples: [
    {
      problem: "A force of 50 N acts at an angle of 60° above the positive x-axis. Find its x and y components.",
      given: "|F| = 50 N, θ = 60°",
      formula: "Fx = F cos θ, Fy = F sin θ",
      substitution: "Fx = 50 × cos 60° = 50 × 0.5 = 25 N",
      calculation: "Fy = 50 × sin 60° = 50 × 0.866 = 43.3 N",
      answer: "Components: Fx = 25 N, Fy = 43.3 N"
    }
  ],
  commonMistakes: [
    "Using degrees when the calculator is in radians mode (or vice versa). Always check your calculator settings!",
    "Confusing which trig function to use: cos for adjacent (x), sin for opposite (y) when θ is from the x-axis.",
    "Forgetting to include the negative sign for components pointing left or down."
  ],
  applications: [
    "Architects use vector components to calculate forces in building structures.",
    "Video game physics engines use vector components to simulate movement in 2D/3D space.",
    "Robotics: calculating joint movements by resolving motion into components."
  ],
  summary: "Vectors can be drawn as arrows, written as components (vx, vy), or written in bold notation. Components are found using vx = |v| cos θ and vy = |v| sin θ. A vector's magnitude is found from components using Pythagoras.",
  visuals: [
    { type: "vectorDiagram", config: { vectors: [{ angle: 30, magnitude: 80, label: "v = 20 m/s" }], centerX: 80, centerY: 100, showResultant: false } }
  , {"type":"qa","config":{"title":"Quick Review — tap a question to reveal the answer","pairs":[{"q":"A force of 50 N acts at an angle of 60° above the positive x-axis. Find its x and y compo…","a":"<b>Answer:</b> Components: Fx = 25 N, Fy = 43.3 N"}]}}],
  questions: [
    { type: "mcq", q: "A vector is represented by an arrow. The length of the arrow represents:", options: ["Direction", "Magnitude", "Both magnitude and direction", "The vector's name"], answer: 1, difficulty: 1, explanation: "The arrow length shows the magnitude (size), while the arrowhead shows direction." },
    { type: "mcq", q: "A vector with magnitude 10 N points at 90° from the x-axis. What is its x-component?", options: ["10 N", "0 N", "5 N", "-10 N"], answer: 1, difficulty: 2, explanation: "When θ = 90°, cos 90° = 0, so Fx = 10 cos 90° = 0 N." },
    { type: "calc", q: "A car moves at 30 m/s at 45° above the horizontal. Find the vertical component of velocity.", answer: "21.2", difficulty: 2, explanation: "vy = 30 sin 45° = 30 × 0.707 = 21.2 m/s", tolerance: 0.3 },
    { type: "calc", q: "Find the x-component of a 100 N force acting at 53° from the positive x-axis.", answer: "60.2", difficulty: 2, explanation: "Fx = 100 cos 53° = 100 × 0.602 = 60.2 N", tolerance: 0.5 },
    { type: "tf", q: "The x-component of a vector is always smaller than the vector's magnitude.", answer: false, difficulty: 2, explanation: "The component can be equal to the magnitude if the vector points along that axis (θ = 0° or 180°)." },
    { type: "short", q: "What is the range of possible values for the x-component of a 10 N force?", answer: "10 to 10|-10 to 10", difficulty: 3, explanation: "The x-component can range from -10 N (pointing straight left, θ = 180°) to +10 N (pointing straight right, θ = 0°)." }
  ]
};

/* --- p1-3: Vector Addition and Subtraction --- */
Lessons["g10-physics-up1-t3"] = {
  overview: "When multiple vectors act together, we can find their combined effect (the resultant) by adding them. Vector addition follows special rules — you can't just add the numbers!",
  objectives: [
    "Add vectors using the triangle method",
    "Add vectors using the parallelogram method",
    "Subtract vectors by adding the opposite",
    "Understand that the resultant is the single vector equivalent to the sum"
  ],
  simple: "Adding vectors is like giving directions. If you walk 3 steps east then 4 steps north, you end up 5 steps northeast (not 7 steps!). The triangle method puts the tail of one vector at the head of the other. The parallelogram method puts both tails together and draws a diagonal. Both give the same answer.",
  detailed: `<p><b>Triangle method:</b> Place the tail of the second vector at the head of the first. The resultant (sum) is the vector from the tail of the first to the head of the second.</p>
<p><b>Parallelogram method:</b> Place both vectors tail-to-tail. Complete the parallelogram. The diagonal from the common tail to the opposite corner is the resultant.</p>
<p><b>Vector subtraction:</b> To subtract vector B from vector A, add the negative of B: A − B = A + (−B). The negative of a vector has the same magnitude but opposite direction.</p>
<p>Vector addition is <b>commutative</b>: A + B = B + A. The order doesn't matter.</p>`,
  keyTerms: [
    { term: "Resultant", def: "The single vector that produces the same effect as all the original vectors combined." },
    { term: "Triangle method", def: "Head-to-tail placement of vectors to find the resultant." },
    { term: "Parallelogram method", def: "Tail-to-tail placement with a parallelogram drawn to find the resultant as the diagonal." },
    { term: "Negative vector", def: "A vector with the same magnitude but opposite direction." },
    { term: "Commutative", def: "Property that the order of addition doesn't change the result (A + B = B + A)." }
  ],
  formulas: [
    {
      name: "Resultant magnitude (two perpendicular vectors)",
      formula: "|R| = √(A² + B²)",
      meaning: "When two vectors are perpendicular, the magnitude of their sum is found using Pythagoras.",
      vars: [
        { name: "|R|", meaning: "magnitude of the resultant", unit: "same as vectors" },
        { name: "A", meaning: "magnitude of first vector", unit: "same" },
        { name: "B", meaning: "magnitude of second vector", unit: "same" }
      ],
      units: "Same as the individual vectors.",
      when: "When adding two vectors that are perpendicular (at right angles).",
      example: "A = 3 N east, B = 4 N north. |R| = √(9 + 16) = 5 N at 53° north of east."
    },
    {
      name: "Resultant direction",
      formula: "θ = tan⁻¹(B/A)",
      meaning: "The angle of the resultant from the direction of the first vector.",
      vars: [
        { name: "θ", meaning: "angle of resultant", unit: "degrees" },
        { name: "B", meaning: "second vector magnitude", unit: "same" },
        { name: "A", meaning: "first vector magnitude", unit: "same" }
      ],
      units: "degrees",
      when: "For perpendicular vectors, to find the direction of the resultant.",
      example: "A = 3 N east, B = 4 N north. θ = tan⁻¹(4/3) = 53° north of east."
    }
  ],
  workedExamples: [
    {
      problem: "Two forces act on an object: F₁ = 6 N east and F₂ = 8 N north. Find the resultant force.",
      given: "F₁ = 6 N east, F₂ = 8 N north",
      formula: "|R| = √(6² + 8²), θ = tan⁻¹(8/6)",
      substitution: "|R| = √(36 + 64) = √100 = 10 N",
      calculation: "θ = tan⁻¹(1.333) = 53°",
      answer: "Resultant = 10 N at 53° north of east"
    },
    {
      problem: "Subtract vector B from A: A = 10 m east, B = 4 m east.",
      given: "A = 10 m east, B = 4 m east",
      formula: "A − B = A + (−B). The negative of B is 4 m west.",
      substitution: "Result = 10 m east + 4 m west = 6 m east",
      calculation: "Since they are opposite, subtract: 10 − 4 = 6 m east.",
      answer: "A − B = 6 m east"
    }
  ],
  commonMistakes: [
    "Simply adding magnitudes: 3 + 4 = 7. This is WRONG for vectors unless they point in the same direction.",
    "Forgetting direction when stating the resultant.",
    "Confusing the triangle and parallelogram methods."
  ],
  applications: [
    "Boat navigation: a boat's actual path is the vector sum of its own velocity and the river current.",
    "Airplane navigation: wind affects the plane's ground track — pilots must add velocity vectors.",
    "In sports, the net force on a ball is the vector sum of all forces (gravity, air resistance, applied force)."
  ],
  summary: "Vector addition combines vectors using the triangle or parallelogram method. The resultant represents the total effect. Subtraction is addition of the negative vector. For perpendicular vectors, use Pythagoras to find the magnitude and tan⁻¹ for the direction.",
  visuals: [
    { type: "vectorDiagram", config: { vectors: [{ angle: 0, magnitude: 60, label: "6 N" }, { angle: 90, magnitude: 80, label: "8 N" }], centerX: 80, centerY: 120, showResultant: true } }
  , {"type":"qa","config":{"title":"Quick Review — tap a question to reveal the answer","pairs":[{"q":"Two forces act on an object: F₁ = 6 N east and F₂ = 8 N north. Find the resultant force.","a":"<b>Answer:</b> Resultant = 10 N at 53° north of east"},{"q":"Subtract vector B from A: A = 10 m east, B = 4 m east.","a":"<b>Answer:</b> A − B = 6 m east"}]}}],
  questions: [
    { type: "mcq", q: "Two vectors point in the same direction. How do you find the resultant?", options: ["Add the magnitudes", "Subtract the magnitudes", "Use Pythagoras", "Multiply the magnitudes"], answer: 0, difficulty: 1, explanation: "When vectors point in the same direction, the resultant is the sum of their magnitudes, in that same direction." },
    { type: "mcq", q: "Two vectors point in opposite directions. Their resultant is:", options: ["The sum of magnitudes", "The difference of magnitudes", "Always zero", "Always larger than either"], answer: 1, difficulty: 1, explanation: "When vectors point opposite, the resultant magnitude is the difference, pointing in the direction of the larger vector." },
    { type: "calc", q: "A force of 5 N east and a force of 12 N north act on an object. Find the magnitude of the resultant.", answer: "13", difficulty: 2, explanation: "|R| = √(5² + 12²) = √(25 + 144) = √169 = 13 N", tolerance: 0.1 },
    { type: "calc", q: "Find the angle (in degrees) of the resultant from the previous question, relative to east.", answer: "67.4", difficulty: 3, explanation: "θ = tan⁻¹(12/5) = tan⁻¹(2.4) = 67.4° north of east", tolerance: 0.5 },
    { type: "concept", q: "A hiker walks 2 km east, then 2 km west. What is the displacement? Explain.", answer: "0|zero", difficulty: 2, explanation: "Displacement = 2 km east + 2 km west = 0 km. The hiker returns to the starting point. Distance traveled was 4 km, but displacement is 0." },
    { type: "mcq", q: "The vector subtraction A − B is equivalent to:", options: ["A + B", "A + (−B)", "−(A + B)", "B − A"], answer: 1, difficulty: 2, explanation: "Subtracting a vector is the same as adding its negative (opposite direction)." }
  ]
};

/* --- p1-4: Graphical Method of Vector Addition --- */
Lessons["g10-physics-up1-t4"] = {
  overview: "When you need to add vectors without using trigonometry, the graphical method lets you draw the vectors to scale and measure the result. This is a practical skill for understanding and checking vector addition.",
  objectives: [
    "Choose an appropriate scale for vector drawings",
    "Use the tip-to-tail method to add vectors graphically",
    "Measure the magnitude and direction of the resultant",
    "Understand the importance of accuracy in scale drawings"
  ],
  simple: "The graphical method is like drawing a treasure map. Pick a scale (like 1 cm = 10 N), draw each vector as an arrow at the right angle, put them tip-to-tail, then draw the resultant from start to finish. Measure the length and angle of the resultant with a ruler and protractor. It's simple but requires careful drawing!",
  detailed: `<p><b>Steps for the graphical method:</b></p>
<ol>
<li>Choose a suitable scale so your drawing fits on the page (e.g., 1 cm = 5 m or 1 cm = 10 N).</li>
<li>Draw the first vector as an arrow starting from a point. Show the angle correctly using a protractor.</li>
<li>Draw the second vector starting from the tip (arrowhead) of the first vector. Maintain its correct angle and length.</li>
<li>Continue for all vectors — tip-to-tail.</li>
<li>The resultant is the vector drawn from the starting point (tail of first vector) to the ending point (tip of last vector).</li>
<li>Measure the length of the resultant with a ruler, convert back using the scale, and measure the angle with a protractor.</li>
</ol>
<p>The accuracy of this method depends on how carefully you draw and measure. For precise results, use the algebraic (component) method.</p>`,
  keyTerms: [
    { term: "Tip-to-tail", def: "Connecting vectors by placing the tail of one at the tip of the previous one." },
    { term: "Scale", def: "A ratio showing how many units of the quantity are represented by one unit of length (e.g., 1 cm = 10 N)." },
    { term: "Protractor", def: "A tool used to measure angles in degrees." },
    { term: "Resultant", def: "The vector from the start to the end of the tip-to-tail chain." },
    { term: "Accuracy", def: "How close a measured value is to the true value. In graphical methods, accuracy depends on care and precision of tools." }
  ],
  workedExamples: [
    {
      problem: "Add the following vectors graphically: A = 30 m at 0° (east), B = 20 m at 90° (north).",
      given: "A = 30 m east, B = 20 m north. Scale: 1 cm = 10 m, so A = 3 cm, B = 2 cm.",
      formula: "Draw A horizontally 3 cm. From its tip, draw B vertically up 2 cm. Measure the resultant.",
      substitution: "Resultant length ≈ 3.6 cm. Convert: 3.6 cm × 10 m/cm = 36 m.",
      calculation: "Measured angle: ≈ 34° from horizontal.",
      answer: "R ≈ 36 m at 34° north of east (graphical approximation)."
    }
  ],
  commonMistakes: [
    "Drawing the first vector from the tip of the second instead of the other way around.",
    "Incorrect scale choice — vectors too small or too large for the paper.",
    "Measuring angles from the wrong reference direction.",
    "Forgetting to convert the measured length back to actual units using the scale."
  ],
  applications: [
    "Surveyors use scale drawings to map land boundaries and calculate distances.",
    "Engineers create scale force diagrams to analyze structures.",
    "Navigators use vector charts to plot courses."
  ],
  summary: "The graphical method uses tip-to-tail vector addition with a ruler and protractor. Choose a scale, draw accurately, measure the resultant, and convert back. It's a practical way to visualize vector addition but less precise than algebraic methods.",
  visuals: [
    { type: "vectorDiagram", config: { vectors: [{ angle: 0, magnitude: 60, label: "A" }, { angle: 90, magnitude: 40, label: "B" }], centerX: 60, centerY: 130, showResultant: true } }
  , {"type":"qa","config":{"title":"Quick Review — tap a question to reveal the answer","pairs":[{"q":"Add the following vectors graphically: A = 30 m at 0° (east), B = 20 m at 90° (north).","a":"<b>Answer:</b> R ≈ 36 m at 34° north of east (graphical approximation)."}]}}],
  questions: [
    { type: "mcq", q: "In the graphical method, vectors are placed:", options: ["Tail-to-tail", "Head-to-head", "Tip-to-tail", "Any way you like"], answer: 2, difficulty: 1, explanation: "Vectors are placed tip-to-tail (head-to-tail). The resultant goes from the first tail to the last tip." },
    { type: "mcq", q: "If 1 cm = 20 N is your scale, how long would you draw a 50 N force?", options: ["5 cm", "2.5 cm", "1 cm", "50 cm"], answer: 1, difficulty: 1, explanation: "50 N ÷ 20 N/cm = 2.5 cm" },
    { type: "tf", q: "The graphical method gives perfectly exact results.", answer: false, difficulty: 1, explanation: "The graphical method gives approximate results limited by the precision of your drawing tools and care." },
    { type: "short", q: "What two tools do you need for the graphical vector addition method?", answer: "ruler and protractor|ruler protractor", difficulty: 1, explanation: "You need a ruler to measure lengths and a protractor to measure angles." },
    { type: "concept", q: "Why might the graphical method give a different answer than the algebraic method for the same vectors?", answer: "measurement error|human error|approximation|drawing inaccuracy", difficulty: 3, explanation: "The graphical method relies on manual drawing and measurement, which introduces human error. The algebraic method uses exact calculations." },
    { type: "calc", q: "Using the tip-to-tail method, add vectors A = 4 cm east and B = 3 cm north. What is the resultant magnitude (in cm)?", answer: "5", difficulty: 2, explanation: "R = √(4²+3²) = 5 cm", tolerance: 0.1 },
    { type: "mcq", q: "If your scale is 1 cm = 5 m/s, how long do you draw a 20 m/s velocity vector?", options: ["2 cm", "4 cm", "5 cm", "20 cm"], answer: 1, difficulty: 1, explanation: "20 m/s ÷ 5 m/s/cm = 4 cm" }
  ]
};

/* --- p1-5: Vector Resolution --- */
Lessons["g10-physics-up1-t5"] = {
  overview: "Vector resolution is the opposite of vector addition — instead of combining vectors, we break a single vector into perpendicular components. This is essential for analyzing forces, motion, and many other physics problems.",
  objectives: [
    "Resolve a vector into horizontal and vertical components",
    "Use trigonometric functions to find component magnitudes",
    "Add vectors by adding their components",
    "Solve real-world problems using vector resolution"
  ],
  simple: "Think of pushing a box up a ramp. You push at an angle — some of your force goes into moving the box forward (horizontal), and some goes into pressing it down (vertical). Vector resolution figures out how much force goes in each direction. It's like projecting a shadow of the vector onto each axis.",
  detailed: `<p>Vector resolution means finding the perpendicular components that make up a vector. Any vector can be broken into an x-component and a y-component that are perpendicular to each other.</p>
<p><b>To resolve a vector:</b></p>
<p>Given a vector <b>v</b> with magnitude |v| at angle θ from the positive x-axis:</p>
<p>v<sub>x</sub> = |v| cos θ (horizontal component)</p>
<p>v<sub>y</sub> = |v| sin θ (vertical component)</p>
<p><b>To add vectors using components:</b></p>
<p>1. Resolve each vector into x and y components.</p>
<p>2. Add all x-components: R<sub>x</sub> = Σ v<sub>x</sub></p>
<p>3. Add all y-components: R<sub>y</sub> = Σ v<sub>y</sub></p>
<p>4. Find the magnitude: |R| = √(R<sub>x</sub>² + R<sub>y</sub>²)</p>
<p>5. Find the direction: θ = tan⁻¹(R<sub>y</sub> / R<sub>x</sub>)</p>
<p>This component method is the most powerful way to add vectors because it's purely algebraic.</p>`,
  keyTerms: [
    { term: "Resolution", def: "Breaking a vector into perpendicular components." },
    { term: "Component", def: "One of the perpendicular parts of a vector (usually along x and y axes)." },
    { term: "Trigonometry", def: "The branch of mathematics dealing with relationships between angles and sides of triangles." },
    { term: "Algebraic method", def: "Adding vectors using components and arithmetic rather than drawing." }
  ],
  formulas: [
    {
      name: "Vector resolution",
      formula: "vx = |v| cos θ, vy = |v| sin θ",
      meaning: "A vector at angle θ can be split into horizontal (cos) and vertical (sin) components.",
      vars: [
        { name: "vx", meaning: "component along x-axis", unit: "varies" },
        { name: "vy", meaning: "component along y-axis", unit: "varies" },
        { name: "|v|", meaning: "magnitude of original vector", unit: "varies" },
        { name: "θ", meaning: "angle from positive x-axis", unit: "degrees" }
      ],
      units: "Components have the same units as the original vector.",
      when: "Whenever you need to break a vector into parts, especially for adding multiple vectors or analyzing forces.",
      example: "A 100 N force at 30°: Fx = 100 cos 30° = 86.6 N, Fy = 100 sin 30° = 50 N."
    },
    {
      name: "Resultant from components",
      formula: "|R| = √(Rx² + Ry²), θ = tan⁻¹(Ry/Rx)",
      meaning: "Given the sum of x and y components, find the magnitude and direction of the resultant.",
      vars: [
        { name: "Rx", meaning: "sum of all x-components", unit: "varies" },
        { name: "Ry", meaning: "sum of all y-components", unit: "varies" },
        { name: "|R|", meaning: "magnitude of resultant", unit: "varies" },
        { name: "θ", meaning: "direction of resultant", unit: "degrees" }
      ],
      units: "Same as individual vectors.",
      when: "After adding all components, to find the final resultant vector.",
      example: "Rx = 3 N, Ry = 4 N. |R| = 5 N, θ = 53°."
    }
  ],
  workedExamples: [
    {
      problem: "Three forces act on a point: F₁ = 10 N at 0°, F₂ = 20 N at 90°, F₃ = 15 N at 180°. Find the resultant.",
      given: "F₁ = 10 N, 0°; F₂ = 20 N, 90°; F₃ = 15 N, 180°",
      formula: "Resolve each, add components, find resultant.",
      substitution: "F₁x = 10 cos 0° = 10 N, F₁y = 10 sin 0° = 0 N; F₂x = 20 cos 90° = 0 N, F₂y = 20 sin 90° = 20 N; F₃x = 15 cos 180° = -15 N, F₃y = 15 sin 180° = 0 N",
      calculation: "Rx = 10 + 0 + (-15) = -5 N. Ry = 0 + 20 + 0 = 20 N. |R| = √(25 + 400) = √425 = 20.6 N. θ = tan⁻¹(20/5) = 76° (second quadrant, so 180° − 76° = 104°).",
      answer: "R = 20.6 N at 104° (or 76° above the negative x-axis)"
    },
    {
      problem: "A 200 N force is applied at 37° to the horizontal. Find its horizontal and vertical components.",
      given: "|F| = 200 N, θ = 37°",
      formula: "Fx = F cos θ, Fy = F sin θ",
      substitution: "Fx = 200 × cos 37° = 200 × 0.799 = 159.8 N",
      calculation: "Fy = 200 × sin 37° = 200 × 0.602 = 120.4 N",
      answer: "Horizontal component = 159.8 N, Vertical component = 120.4 N"
    }
  ],
  commonMistakes: [
    "Forgetting to assign negative signs to components pointing left or down.",
    "Using the wrong trig function: sin for horizontal, cos for vertical.",
    "Adding magnitudes directly instead of resolving first.",
    "Forgetting to check which quadrant the resultant is in when finding the angle."
  ],
  applications: [
    "Ramp problems: the weight of an object on a ramp is resolved into components parallel and perpendicular to the ramp surface.",
    "Projectile motion: the initial velocity is resolved into horizontal (constant) and vertical (changing) components.",
    "Sailboats: the wind force is resolved into components that drive the boat forward vs. pushing it sideways."
  ],
  summary: "Vector resolution breaks a vector into perpendicular components using vx = |v| cos θ and vy = |v| sin θ. To add vectors algebraically: resolve → add components → find resultant magnitude and direction. This is the most accurate method of vector addition.",
  visuals: [
    { type: "vectorDiagram", config: { vectors: [{ angle: 37, magnitude: 100, label: "F = 200 N" }], centerX: 60, centerY: 120, showResultant: false } }
  , {"type":"qa","config":{"title":"Quick Review — tap a question to reveal the answer","pairs":[{"q":"Three forces act on a point: F₁ = 10 N at 0°, F₂ = 20 N at 90°, F₃ = 15 N at 180°. Find t…","a":"<b>Answer:</b> R = 20.6 N at 104° (or 76° above the negative x-axis)"},{"q":"A 200 N force is applied at 37° to the horizontal. Find its horizontal and vertical compo…","a":"<b>Answer:</b> Horizontal component = 159.8 N, Vertical component = 120.4 N"}]}}],
  questions: [
    { type: "mcq", q: "Vector resolution breaks a vector into:", options: ["Two perpendicular components", "Three equal parts", "Its magnitude and direction", "A scalar and a vector"], answer: 0, difficulty: 1, explanation: "Resolution breaks a vector into perpendicular components, usually horizontal and vertical." },
    { type: "calc", q: "A 50 N force acts at 60° above the horizontal. Find the horizontal component.", answer: "25", difficulty: 2, explanation: "Fx = 50 cos 60° = 50 × 0.5 = 25 N", tolerance: 0.5 },
    { type: "calc", q: "Find the vertical component of the same 50 N force at 60°.", answer: "43.3", difficulty: 2, explanation: "Fy = 50 sin 60° = 50 × 0.866 = 43.3 N", tolerance: 0.5 },
    { type: "concept", q: "A ball is thrown at 30° above horizontal. What happens to the horizontal component of velocity during the flight? (Ignoring air resistance)", answer: "constant|remains the same|does not change", difficulty: 3, explanation: "In projectile motion without air resistance, the horizontal component of velocity remains constant because there's no horizontal force." },
    { type: "mcq", q: "If a vector points straight up (90°), its x-component is:", options: ["Equal to the magnitude", "Zero", "Negative", "Half the magnitude"], answer: 1, difficulty: 2, explanation: "cos 90° = 0, so the x-component is zero. The entire vector is in the y-direction." },
    { type: "short", q: "What is the first step in adding vectors algebraically by the component method?", answer: "resolve each vector|find components|break into components", difficulty: 1, explanation: "The first step is to resolve each vector into its x and y components before adding." }
  ]
};