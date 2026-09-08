/* EthioStudy Curriculum Data — Grade 9 New Curriculum (MoE 2024 textbooks)
   Unit maps verified against official student textbooks (Sept 2026 sweep). */
window.CURRICULUM_G9 = {
  mathematics: {
    id: "mathematics", title: "Mathematics", icon: "📐", color: "#4f8cff",
    units: [
      { id: "m1", title: "Further on Sets", topics: [
        { id: "m1-1", title: "Sets, Subsets and Venn Diagrams", difficulty: "easy", subtopics: ["Set notation","Subset and superset","Venn diagrams","Universal set and complement"] },
        { id: "m1-2", title: "Operations on Sets", difficulty: "medium", subtopics: ["Union","Intersection","Difference","Complement laws (De Morgan)"] },
        { id: "m1-3", title: "Cardinality and Inclusion–Exclusion", difficulty: "medium", subtopics: ["Counting elements of unions","Two- and three-set formulas","Word problems with Venn diagrams"] }
      ]},
      { id: "m2", title: "The Number System", topics: [
        { id: "m2-1", title: "Rational and Irrational Numbers", difficulty: "medium", subtopics: ["Decimals of rationals","Irrational numbers","Real number line"] },
        { id: "m2-2", title: "Exponents and Powers", difficulty: "medium", subtopics: ["Laws of exponents","Negative exponents","Scientific notation"] },
        { id: "m2-3", title: "Roots and Radicals", difficulty: "medium", subtopics: ["Square and cube roots","Simplifying radicals","Rationalizing denominators"] },
        { id: "m2-4", title: "Logarithms", difficulty: "hard", subtopics: ["Definition of logarithms","Laws of logarithms","Common and natural logs"] }
      ]},
      { id: "m3", title: "Solving Equations", topics: [
        { id: "m3-1", title: "Linear Equations and Simultaneous Equations", difficulty: "medium", subtopics: ["One-variable linear equations","Elimination and substitution","Two-variable systems"] },
        { id: "m3-2", title: "Quadratic Equations", difficulty: "medium", subtopics: ["Factoring","Completing the square","Quadratic formula"] },
        { id: "m3-3", title: "Equations Reducible to Quadratic Form", difficulty: "hard", subtopics: ["Substitution method","Rational equations","Word problems"] }
      ]},
      { id: "m4", title: "Solving Inequalities", topics: [
        { id: "m4-1", title: "Linear Inequalities in One Variable", difficulty: "easy", subtopics: ["Inequality symbols","Solving and graphing on a line","Interval notation"] },
        { id: "m4-2", title: "Quadratic Inequalities", difficulty: "hard", subtopics: ["Sign analysis","Solution regions from graphs","Systems of inequalities"] }
      ]},
      { id: "m5", title: "Introduction to Trigonometry", topics: [
        { id: "m5-1", title: "Right Triangle Trigonometry", difficulty: "medium", subtopics: ["Sine, cosine, tangent","Special angles","Finding sides and angles"] },
        { id: "m5-2", title: "Angles of Elevation and Depression", difficulty: "medium", subtopics: ["Line of sight","Word problems","Heights and distances"] }
      ]},
      { id: "m6", title: "Regular Polygons", topics: [
        { id: "m6-1", title: "Polygons and Their Angle Sum", difficulty: "easy", subtopics: ["Parts of a polygon","Interior angle sum","Exterior angles"] },
        { id: "m6-2", title: "Regular Polygons and Circles", difficulty: "medium", subtopics: ["Regular vs irregular","Circumcircle and incircle","Tessellations"] }
      ]},
      { id: "m7", title: "Congruency and Similarity", topics: [
        { id: "m7-1", title: "Congruent Triangles", difficulty: "medium", subtopics: ["SSS, SAS, ASA, RHS tests","Corresponding parts","Congruence proofs"] },
        { id: "m7-2", title: "Similar Figures", difficulty: "medium", subtopics: ["AA similarity","Ratios of sides","Area and volume ratios"] }
      ]},
      { id: "m8", title: "Vectors in Two Dimensions", topics: [
        { id: "m8-1", title: "Vector Basics and Addition", difficulty: "medium", subtopics: ["Scalar vs vector","Component form","Triangle and parallelogram laws"] },
        { id: "m8-2", title: "Vector Scaling and Coordinates", difficulty: "medium", subtopics: ["Scalar multiplication","Unit vectors i and j","Magnitude and direction"] }
      ]},
      { id: "m9", title: "Statistics and Probability", topics: [
        { id: "m9-1", title: "Data and Measures of Central Tendency", difficulty: "easy", subtopics: ["Types of data","Mean, median, mode","Grouped data"] },
        { id: "m9-2", title: "Measures of Dispersion", difficulty: "medium", subtopics: ["Range","Mean deviation","Standard deviation basics"] },
        { id: "m9-3", title: "Probability", difficulty: "medium", subtopics: ["Experimental vs theoretical","Sample space","Compound events"] }
      ]}
    ]
  },
  biology: {
    id: "biology", title: "Biology", icon: "🧬", color: "#34d399",
    units: [
      { id: "b1", title: "Introduction to Biology", topics: [
        { id: "b1-1", title: "What is Biology?", difficulty: "easy", subtopics: ["Definition and branches","Methods of studying living things","Importance of biology"] }
      ]},
      { id: "b2", title: "Characteristics and Classification of Organisms", topics: [
        { id: "b2-1", title: "Characteristics of Living Things", difficulty: "easy", subtopics: ["Life processes","Differences between plants and animals"] },
        { id: "b2-2", title: "Taxonomy and the Five Kingdoms", difficulty: "medium", subtopics: ["Binomial nomenclature","Kingdoms Monera to Animalia","Key characteristics of each kingdom"] }
      ]},
      { id: "b3", title: "Cells", topics: [
        { id: "b3-1", title: "Cell Structure and Organelles", difficulty: "medium", subtopics: ["Cell theory","Plant vs animal cell","Organelle functions"] },
        { id: "b3-2", title: "Transport Across the Cell Membrane", difficulty: "medium", subtopics: ["Diffusion and osmosis","Active transport","Endo/exocytosis"] }
      ]},
      { id: "b4", title: "Reproduction", topics: [
        { id: "b4-1", title: "Asexual and Sexual Reproduction", difficulty: "medium", subtopics: ["Modes of asexual reproduction","Advantages and disadvantages"] },
        { id: "b4-2", title: "Human Reproductive System", difficulty: "medium", subtopics: ["Male and female systems","Fertilisation and development","STIs and prevention"] }
      ]},
      { id: "b5", title: "Human Health, Nutrition and Disease", topics: [
        { id: "b5-1", title: "Nutrients and Balanced Diet", difficulty: "easy", subtopics: ["Classes of nutrients","Balanced diet","Malnutrition"] },
        { id: "b5-2", title: "Diseases and Immunity", difficulty: "medium", subtopics: ["Communicable vs non-communicable","Body defence systems","First aid"] }
      ]},
      { id: "b6", title: "Ecology", topics: [
        { id: "b6-1", title: "Ecological Levels and Interactions", difficulty: "medium", subtopics: ["Organism to ecosystem","Food chains and webs","Population interactions"] },
        { id: "b6-2", title: "Nutrient Cycling and Energy Flow", difficulty: "medium", subtopics: ["Trophic levels","Water and carbon cycles","Ecological pyramids"] }
      ]}
    ]
  },
  chemistry: {
    id: "chemistry", title: "Chemistry", icon: "⚗️", color: "#f59e0b",
    units: [
      { id: "c1", title: "Chemistry and Its Importance", topics: [
        { id: "c1-1", title: "What is Chemistry?", difficulty: "easy", subtopics: ["Definition and branches","Career paths","Chemistry in Ethiopian industry"] }
      ]},
      { id: "c2", title: "Measurements and Scientific Methods", topics: [
        { id: "c2-1", title: "SI Units and Measurement", difficulty: "easy", subtopics: ["Base units","Derived quantities","Significant figures"] },
        { id: "c2-2", title: "The Scientific Method", difficulty: "medium", subtopics: ["Observation and hypothesis","Experiment design","Lab safety"] }
      ]},
      { id: "c3", title: "Structure of the Atom", topics: [
        { id: "c3-1", title: "Subatomic Particles and Atomic Models", difficulty: "medium", subtopics: ["Protons, neutrons, electrons","Dalton to Bohr models","Atomic number and mass"] },
        { id: "c3-2", title: "Electron Configuration", difficulty: "medium", subtopics: ["Shells and energy levels","Bohr diagrams","Valence electrons"] }
      ]},
      { id: "c4", title: "Periodic Classification of Elements", topics: [
        { id: "c4-1", title: "The Periodic Table", difficulty: "medium", subtopics: ["Mendeleev to modern table","Groups and periods","Metals, non-metals, metalloids"] },
        { id: "c4-2", title: "Periodic Trends", difficulty: "hard", subtopics: ["Atomic radius trend","Ionisation energy","Electronegativity"] }
      ]},
      { id: "c5", title: "Chemical Bonding", topics: [
        { id: "c5-1", title: "Ionic and Covalent Bonds", difficulty: "medium", subtopics: ["Octet rule","Ionic transfer","Covalent sharing","Lewis structures"] },
        { id: "c5-2", title: "Metallic Bonds and Properties", difficulty: "medium", subtopics: ["Electron sea model","Bond comparison","Properties from bonding"] }
      ]}
    ]
  },
  physics: {
    id: "physics", title: "Physics", icon: "⚡", color: "#8b5cf6",
    units: [
      { id: "p1", title: "Physics and Human Society", topics: [
        { id: "p1-1", title: "Physics, Science and Society", difficulty: "easy", subtopics: ["Branches of physics","Scientific inquiry","Physics and technology in Ethiopia"] }
      ]},
      { id: "p2", title: "Physical Quantities and Measurement", topics: [
        { id: "p2-1", title: "Units and Measuring Instruments", difficulty: "easy", subtopics: ["Base and derived quantities","SI units","Mass, length, time, volume measurement"] }
      ]},
      { id: "p3", title: "Motion in a Straight Line", topics: [
        { id: "p3-1", title: "Distance, Displacement and Speed", difficulty: "medium", subtopics: ["Scalars and vectors in motion","Speed and velocity","Distance-time graphs"] },
        { id: "p3-2", title: "Acceleration and Equations of Motion", difficulty: "hard", subtopics: ["Uniform acceleration","v = u + at and friends","Velocity-time graphs"] }
      ]},
      { id: "p4", title: "Force, Work, Energy and Power", topics: [
        { id: "p4-1", title: "Force and Newton's Laws", difficulty: "medium", subtopics: ["Effects of force","Inertia and F = ma","Action-reaction","Friction"] },
        { id: "p4-2", title: "Work, Energy and Power", difficulty: "medium", subtopics: ["Work = Fd","Kinetic and potential energy","Conservation of energy","Power"] }
      ]},
      { id: "p5", title: "Simple Machines", topics: [
        { id: "p5-1", title: "Machines, Levers and Pulleys", difficulty: "medium", subtopics: ["Mechanical advantage","Efficiency","Lever classes","Pulleys and inclined planes"] }
      ]},
      { id: "p6", title: "Mechanical Oscillation and Sound Waves", topics: [
        { id: "p6-1", title: "Oscillations and the Pendulum", difficulty: "medium", subtopics: ["Period and frequency","Simple pendulum factors","Restoring force"] },
        { id: "p6-2", title: "Sound", difficulty: "medium", subtopics: ["Wave basics","Speed of sound","Echo, pitch and loudness"] }
      ]},
      { id: "p7", title: "Temperature and Thermometry", topics: [
        { id: "p7-1", title: "Temperature and Heat Transfer", difficulty: "medium", subtopics: ["Thermal expansion","Celsius vs Kelvin","Conduction, convection, radiation"] }
      ]}
    ]
  }
};
