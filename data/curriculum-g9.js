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

/* Social sciences + Citizenship Education — unit maps verified against official MoE textbooks (Oct 2026) */
Object.assign(window.CURRICULUM_G9, {
    history: {
      id: "history", title: "History", icon: "📜", color: "#b45309",
      units: [
      { id: "h1", title: "The Discipline of History and Human Evolution", topics: [
        { id: "h1-1", title: "Meaning of Prehistory and History", difficulty: "easy", subtopics: [] },
        { id: "h1-2", title: "The Discipline of History", difficulty: "medium", subtopics: [] },
        { id: "h1-3", title: "The Evolution of Human Beings", difficulty: "medium", subtopics: [] },
        { id: "h1-4", title: "The Stone Age", difficulty: "medium", subtopics: [] },
        { id: "h1-5", title: "The Emergence of States", difficulty: "medium", subtopics: [] }
      ]},
      { id: "h2", title: "Ancient World Civilizations up to c.500 AD", topics: [
        { id: "h2-1", title: "Ancient Civilizations of Africa", difficulty: "medium", subtopics: [] },
        { id: "h2-2", title: "Civilizations in Asia", difficulty: "medium", subtopics: [] },
        { id: "h2-3", title: "Ancient Civilization of Latin America", difficulty: "medium", subtopics: [] },
        { id: "h2-4", title: "Civilizations in Europe", difficulty: "medium", subtopics: [] },
        { id: "h2-5", title: "The Rise and Spread of Christianity", difficulty: "medium", subtopics: [] }
      ]},
      { id: "h3", title: "Peoples and States in Ethiopia and the Horn to the End of the 13th Century", topics: [
        { id: "h3-1", title: "Languages, Religions and Peoples of Ethiopia and the Horn", difficulty: "medium", subtopics: [] },
        { id: "h3-2", title: "The Pre-Aksumite States and their Geographical Setting", difficulty: "medium", subtopics: [] },
        { id: "h3-3", title: "Aksumite Kingdom", difficulty: "medium", subtopics: [] },
        { id: "h3-4", title: "Zagwe Dynasty", difficulty: "medium", subtopics: [] },
        { id: "h3-5", title: "The Sultanate of Shewa", difficulty: "medium", subtopics: [] }
      ]},
      { id: "h4", title: "The Middle Ages and Early Modern World, c.500 to 1750s", topics: [
        { id: "h4-1", title: "The Middle Ages in Europe", difficulty: "medium", subtopics: [] },
        { id: "h4-2", title: "The Middle Ages in Asia", difficulty: "medium", subtopics: [] },
        { id: "h4-3", title: "Development of Early Capitalism", difficulty: "medium", subtopics: [] },
        { id: "h4-4", title: "The Age of Explorations and Discoveries", difficulty: "medium", subtopics: [] },
        { id: "h4-5", title: "The Renaissance", difficulty: "medium", subtopics: [] },
        { id: "h4-6", title: "The Reformation", difficulty: "medium", subtopics: [] },
        { id: "h4-7", title: "Industrial Revolution", difficulty: "medium", subtopics: [] }
      ]},
      { id: "h5", title: "Peoples and States of Africa to 1500", topics: [
        { id: "h5-1", title: "Languages and Peoples of Africa", difficulty: "medium", subtopics: [] },
        { id: "h5-2", title: "States in North Africa", difficulty: "medium", subtopics: [] },
        { id: "h5-3", title: "States in Western Africa", difficulty: "medium", subtopics: [] },
        { id: "h5-4", title: "Equatorial, Central and Eastern Africa", difficulty: "medium", subtopics: [] },
        { id: "h5-5", title: "Southern Africa", difficulty: "medium", subtopics: [] },
        { id: "h5-6", title: "Trans-Saharan Trade", difficulty: "medium", subtopics: [] },
        { id: "h5-7", title: "Unit Review", difficulty: "medium", subtopics: [] }
      ]},
      { id: "h6", title: "Africa and the Outside World 1500-1880s", topics: [
        { id: "h6-1", title: "Contact with the Outside World", difficulty: "medium", subtopics: [] },
        { id: "h6-2", title: "Slavery", difficulty: "medium", subtopics: [] },
        { id: "h6-3", title: "The \"Legitimate\" Trade", difficulty: "medium", subtopics: [] },
        { id: "h6-4", title: "The White Settlement in South Africa", difficulty: "medium", subtopics: [] },
        { id: "h6-5", title: "European Explorers and Missionaries", difficulty: "medium", subtopics: [] }
      ]},
      { id: "h7", title: "States, Principalities, Population Movements and Interactions in Ethiopia, 13th to mid-16th Century", topics: [
        { id: "h7-1", title: "The \"Solomonic\" Dynasty and the Christian Kingdom", difficulty: "medium", subtopics: [] },
        { id: "h7-2", title: "The Muslim Principalities", difficulty: "medium", subtopics: [] },
        { id: "h7-3", title: "Relationship Between the Christian Kingdom and the Sultanate of Adal", difficulty: "medium", subtopics: [] },
        { id: "h7-4", title: "Political and Socio-Economic Conditions of Southern and Central States in Ethiopia", difficulty: "medium", subtopics: [] },
        { id: "h7-5", title: "Population Movements, Expansion, and Integration in Ethiopia", difficulty: "medium", subtopics: [] },
        { id: "h7-6", title: "Gadaa System of the Oromo", difficulty: "medium", subtopics: [] },
        { id: "h7-7", title: "Egalitarian System of Governance", difficulty: "medium", subtopics: [] }
      ]},
      { id: "h8", title: "Political, Social and Economic Processes in Ethiopia, mid-16th to mid-19th Century", topics: [
        { id: "h8-1", title: "Peoples and States of the Eastern, Central, Southern and Western Regions", difficulty: "medium", subtopics: [] },
        { id: "h8-2", title: "Gondarine Period", difficulty: "medium", subtopics: [] },
        { id: "h8-3", title: "The Zemene-Mesafint (The Era of Warlords)", difficulty: "medium", subtopics: [] },
        { id: "h8-4", title: "The Yejju Dynasty", difficulty: "medium", subtopics: [] },
        { id: "h8-5", title: "The Kingdom of Shewa", difficulty: "medium", subtopics: [] }
      ]},
      { id: "h9", title: "The Age of Revolutions, 1750s to 1815", topics: [
        { id: "h9-1", title: "Industrial Capitalism in Europe", difficulty: "medium", subtopics: [] },
        { id: "h9-2", title: "French Revolution", difficulty: "medium", subtopics: [] },
        { id: "h9-3", title: "Napoleonic Era", difficulty: "medium", subtopics: [] },
        { id: "h9-4", title: "American War of Independence", difficulty: "medium", subtopics: [] },
        { id: "h9-5", title: "The Congress of Vienna", difficulty: "medium", subtopics: [] }
      ]}
      ]
    },
    geography: {
      id: "geography", title: "Geography", icon: "🌍", color: "#0e7490",
      units: [
      { id: "g1", title: "Geological History and Topography of Ethiopia", topics: [
        { id: "g1-1", title: "Geography: Meaning, Scope and Branches", difficulty: "easy", subtopics: [] },
        { id: "g1-2", title: "Location, Size and Shape of Ethiopia", difficulty: "medium", subtopics: [] },
        { id: "g1-3", title: "Geological History of Ethiopia", difficulty: "easy", subtopics: [] }
      ]},
      { id: "g2", title: "Climate of Ethiopia", topics: [
        { id: "g2-1", title: "Meaning of Weather and Climate", difficulty: "easy", subtopics: [] },
        { id: "g2-2", title: "Elements of Weather and Climate", difficulty: "medium", subtopics: [] },
        { id: "g2-3", title: "Controls of Weather and Climate in Ethiopia", difficulty: "medium", subtopics: [] },
        { id: "g2-4", title: "Climatic Regions and Seasonal Variation in Ethiopia", difficulty: "medium", subtopics: [] },
        { id: "g2-5", title: "Measurements of Weather and Climate", difficulty: "medium", subtopics: [] }
      ]},
      { id: "g3", title: "Natural Resource Base of Ethiopia", topics: [
        { id: "g3-1", title: "Meaning of Natural Resources", difficulty: "easy", subtopics: [] },
        { id: "g3-2", title: "Drainage Systems of Ethiopia", difficulty: "medium", subtopics: [] },
        { id: "g3-3", title: "Water Resources of Ethiopia", difficulty: "medium", subtopics: [] },
        { id: "g3-4", title: "Major Soils Types of Ethiopia", difficulty: "medium", subtopics: [] },
        { id: "g3-5", title: "Major Mineral Resources and their Distribution", difficulty: "medium", subtopics: [] },
        { id: "g3-6", title: "Biotic Resources of Ethiopia", difficulty: "medium", subtopics: [] }
      ]},
      { id: "g4", title: "Population and Demographic Characteristics of Ethiopia", topics: [
        { id: "g4-1", title: "Concept of Human Population", difficulty: "easy", subtopics: [] },
        { id: "g4-2", title: "Trends of Population Growth in Ethiopia", difficulty: "medium", subtopics: [] },
        { id: "g4-3", title: "Population Composition", difficulty: "medium", subtopics: [] },
        { id: "g4-4", title: "Population Distribution", difficulty: "medium", subtopics: [] },
        { id: "g4-5", title: "Urban and Rural Settlement Patterns", difficulty: "medium", subtopics: [] },
        { id: "g4-6", title: "Health, Growth Impacts and Human Diversity", difficulty: "hard", subtopics: [] }
      ]},
      { id: "g5", title: "Major Economic and Cultural Activities in Ethiopia", topics: [
        { id: "g5-1", title: "Major Economic Activities in Ethiopia", difficulty: "medium", subtopics: [] },
        { id: "g5-2", title: "Contribution of Subsistence Farming and Cash Crop", difficulty: "medium", subtopics: [] },
        { id: "g5-3", title: "Trade and Transport in Ethiopia", difficulty: "medium", subtopics: [] },
        { id: "g5-4", title: "Road Safety in Ethiopia", difficulty: "medium", subtopics: [] },
        { id: "g5-5", title: "Cultural Landscapes and Tourism in Ethiopia", difficulty: "medium", subtopics: [] }
      ]},
      { id: "g6", title: "Human-Natural Environment Interactions in Ethiopia", topics: [
        { id: "g6-1", title: "Human-Environment Relationship", difficulty: "medium", subtopics: [] },
        { id: "g6-2", title: "Optimum Population and Resource Use", difficulty: "medium", subtopics: [] },
        { id: "g6-3", title: "Over Population and Resource Use", difficulty: "medium", subtopics: [] },
        { id: "g6-4", title: "Under Population and Resource Use", difficulty: "medium", subtopics: [] },
        { id: "g6-5", title: "Impacts of Rapid Population Growth", difficulty: "hard", subtopics: [] }
      ]},
      { id: "g7", title: "Contemporary Geographic Issues and Public Concerns in Ethiopia", topics: [
        { id: "g7-1", title: "Soil Degradation and Conservation", difficulty: "medium", subtopics: [] },
        { id: "g7-2", title: "Vegetation Degradation and Mitigation", difficulty: "medium", subtopics: [] },
        { id: "g7-3", title: "Water Resource Degradation", difficulty: "medium", subtopics: [] },
        { id: "g7-4", title: "The Ethiopian Green Legacy Movement", difficulty: "medium", subtopics: [] }
      ]},
      { id: "g8", title: "Geographic Inquiry Skills and Techniques", topics: [
        { id: "g8-1", title: "Map and its Basic Components", difficulty: "easy", subtopics: [] },
        { id: "g8-2", title: "Scale, Scale Conversion and Measurements on Maps", difficulty: "medium", subtopics: [] },
        { id: "g8-3", title: "Position on Maps", difficulty: "medium", subtopics: [] },
        { id: "g8-4", title: "Map Sketching", difficulty: "medium", subtopics: [] },
        { id: "g8-5", title: "Interpreting Maps and Graphs", difficulty: "medium", subtopics: [] }
      ]}
      ]
    },
    economics: {
      id: "economics", title: "Economics", icon: "📊", color: "#6d28d9",
      units: [
      { id: "e1", title: "Introducing Economics", topics: [
        { id: "e1-1", title: "Meaning of Economics", difficulty: "easy", subtopics: [] },
        { id: "e1-2", title: "Branches of Economics", difficulty: "medium", subtopics: [] },
        { id: "e1-3", title: "Methods and Approaches of Studying Economics", difficulty: "medium", subtopics: [] },
        { id: "e1-4", title: "Decision Making Units", difficulty: "medium", subtopics: [] }
      ]},
      { id: "e2", title: "The Basic Economic Problems and Economic Systems", topics: [
        { id: "e2-1", title: "The Basic Economic Problems: Scarcity, Choice, and Opportunity Cost", difficulty: "easy", subtopics: [] },
        { id: "e2-2", title: "Central Problems of Economies", difficulty: "hard", subtopics: [] },
        { id: "e2-3", title: "Economic Systems", difficulty: "medium", subtopics: [] },
        { id: "e2-4", title: "Unit Review", difficulty: "medium", subtopics: [] }
      ]},
      { id: "e3", title: "Economic Resources and Markets", topics: [
        { id: "e3-1", title: "Types of Resources and Factor Payments", difficulty: "medium", subtopics: [] },
        { id: "e3-2", title: "Renewable and Non-renewable Resources", difficulty: "medium", subtopics: [] },
        { id: "e3-3", title: "Types of Markets", difficulty: "medium", subtopics: [] },
        { id: "e3-4", title: "Circular Flow of Economic Activities", difficulty: "medium", subtopics: [] },
        { id: "e3-5", title: "Land as an Economic Resource in Ethiopia", difficulty: "medium", subtopics: [] }
      ]},
      { id: "e4", title: "Introduction to Demand and Supply", topics: [
        { id: "e4-1", title: "Concept of Demand", difficulty: "easy", subtopics: [] },
        { id: "e4-2", title: "Concept of Supply", difficulty: "easy", subtopics: [] },
        { id: "e4-3", title: "Market Equilibrium", difficulty: "medium", subtopics: [] }
      ]},
      { id: "e5", title: "Introduction to Production and Cost", topics: [
        { id: "e5-1", title: "Definition of Production, Inputs and Outputs", difficulty: "easy", subtopics: [] },
        { id: "e5-2", title: "Periods of Production", difficulty: "medium", subtopics: [] },
        { id: "e5-3", title: "Cost of Production", difficulty: "medium", subtopics: [] }
      ]},
      { id: "e6", title: "Introduction to Money", topics: [
        { id: "e6-1", title: "Definition of Money", difficulty: "easy", subtopics: [] },
        { id: "e6-2", title: "Evolution of Money", difficulty: "medium", subtopics: [] },
        { id: "e6-3", title: "Functions of Money", difficulty: "medium", subtopics: [] },
        { id: "e6-4", title: "Demand and Supply of Money", difficulty: "medium", subtopics: [] },
        { id: "e6-5", title: "Money and Electronic Money", difficulty: "medium", subtopics: [] },
        { id: "e6-6", title: "Unit Review", difficulty: "medium", subtopics: [] }
      ]},
      { id: "e7", title: "Introduction to Macroeconomics", topics: [
        { id: "e7-1", title: "Definition of Macroeconomic Variables", difficulty: "easy", subtopics: [] },
        { id: "e7-2", title: "Macroeconomic Goals", difficulty: "medium", subtopics: [] },
        { id: "e7-3", title: "Macroeconomic Problems", difficulty: "hard", subtopics: [] }
      ]},
      { id: "e8", title: "Basic Entrepreneurship", topics: [
        { id: "e8-1", title: "Definition of Enterprise, Entrepreneur, and Entrepreneurship", difficulty: "easy", subtopics: [] },
        { id: "e8-2", title: "Creativity and Innovation in Solving Local Problems", difficulty: "hard", subtopics: [] },
        { id: "e8-3", title: "Entrepreneurial Attitudes, Behaviour and Mind-set", difficulty: "medium", subtopics: [] },
        { id: "e8-4", title: "Windows of Entrepreneurial Opportunities", difficulty: "medium", subtopics: [] },
        { id: "e8-5", title: "Entrepreneurial Success, Teamwork and Diversity", difficulty: "medium", subtopics: [] },
        { id: "e8-6", title: "Finance and Promotion of Entrepreneurship", difficulty: "medium", subtopics: [] }
      ]}
      ]
    },
    civics: {
      id: "civics", title: "Citizenship Education", icon: "🏛️", color: "#0d9488",
      units: [
      { id: "c1", title: "Ethical Values", topics: [
        { id: "c1-1", title: "The Meaning of Ethics", difficulty: "easy", subtopics: ["Ethics and morality","Why ethics matter"] },
        { id: "c1-2", title: "Major Ethical Values", difficulty: "easy", subtopics: ["Honesty","Respect","Responsibility","Fairness"] },
        { id: "c1-3", title: "The Importance of Ethical Values of Citizens", difficulty: "medium", subtopics: ["Trust in society","Good citizenship"] },
        { id: "c1-4", title: "Aspects of Applied Ethics", difficulty: "medium", subtopics: ["Meaning of applied ethics","Applied ethics in daily life"] }
      ]},
      { id: "c2", title: "The Culture of Using Digital Technology", topics: [
        { id: "c2-1", title: "The Concept of Digital Technology", difficulty: "easy", subtopics: ["Digital devices","Digital literacy"] },
        { id: "c2-2", title: "Culture and Digital Technology", difficulty: "medium", subtopics: ["How technology shapes culture","Digital society"] },
        { id: "c2-3", title: "The Purpose of Digital Technology", difficulty: "easy", subtopics: ["Communication","Learning","Work"] },
        { id: "c2-4", title: "Codes of Conduct for Using Digital Technology", difficulty: "medium", subtopics: ["Digital etiquette","Responsible use"] },
        { id: "c2-5", title: "Effective Communication Through Digital Media", difficulty: "medium", subtopics: ["Channels","Clear messaging"] },
        { id: "c2-6", title: "Challenges of Using Digital Media", difficulty: "hard", subtopics: ["Misinformation","Cyberbullying","Privacy risks"] }
      ]},
      { id: "c3", title: "Constitution and Constitutionalism", topics: [
        { id: "c3-1", title: "Understanding Constitution", difficulty: "easy", subtopics: ["Definition","Fundamental principles"] },
        { id: "c3-2", title: "Understanding Constitutionalism", difficulty: "medium", subtopics: ["Limited government","Rule of law"] },
        { id: "c3-3", title: "Constitutional Experiences of Ethiopia", difficulty: "hard", subtopics: ["Traditional experiences","Written constitutions"] }
      ]},
      { id: "c4", title: "Understanding Indigenous Knowledge", topics: [
        { id: "c4-1", title: "The Concept of Indigenous Knowledge", difficulty: "easy", subtopics: ["Definition","Local knowledge systems"] },
        { id: "c4-2", title: "The Role of Indigenous Knowledge in Producing Responsible Citizens", difficulty: "medium", subtopics: ["Values transmission","Community responsibility"] },
        { id: "c4-3", title: "The Role of Indigenous Social Institutions in Solving Community Problems", difficulty: "medium", subtopics: ["Idir","Iqub","Gadaa","Conflict resolution"] }
      ]},
      { id: "c5", title: "Multiculturalism in Ethiopia", topics: [
        { id: "c5-1", title: "Understanding Culture", difficulty: "easy", subtopics: ["Elements of culture","Culture and identity"] },
        { id: "c5-2", title: "The Concept of Multiculturalism", difficulty: "medium", subtopics: ["Diversity","Coexistence"] },
        { id: "c5-3", title: "Pillars of Multicultural Societies", difficulty: "medium", subtopics: ["Tolerance","Equality","Mutual respect"] },
        { id: "c5-4", title: "Major Forms of Diversity Demonstrating Multiculturalism", difficulty: "medium", subtopics: ["Language","Religion","Customs"] }
      ]},
      { id: "c6", title: "National Unity Through Diversity", topics: [
        { id: "c6-1", title: "Unity in Diversity", difficulty: "easy", subtopics: ["Shared identity","Common interest"] },
        { id: "c6-2", title: "Elements of Diversity", difficulty: "easy", subtopics: ["Ethnicity","Language","Religion","Culture"] },
        { id: "c6-3", title: "Accommodation of Diversity", difficulty: "medium", subtopics: ["Inclusion","Equal participation"] },
        { id: "c6-4", title: "The Importance of Diversity Management in Ethiopia", difficulty: "medium", subtopics: ["Stability","Development"] }
      ]},
      { id: "c7", title: "Problem Solving Skills", topics: [
        { id: "c7-1", title: "Meaning of Problem-Solving Skills", difficulty: "easy", subtopics: ["Definition","Why skills matter"] },
        { id: "c7-2", title: "The Importance of Problem-Solving Skills", difficulty: "easy", subtopics: ["Personal life","Civic life"] },
        { id: "c7-3", title: "Characteristics of a Good Problem Solver", difficulty: "medium", subtopics: ["Qualities","Stages of problem solving"] },
        { id: "c7-4", title: "Ways to Improve One’s Problem-Solving Skills", difficulty: "medium", subtopics: ["Creative thinking","Practice"] }
      ]},
      { id: "c8", title: "Ethiopia's Foreign Relations in East Africa", topics: [
        { id: "c8-1", title: "The Concepts of Foreign Relations", difficulty: "easy", subtopics: ["National interest","Foreign policy"] },
        { id: "c8-2", title: "Instruments of Foreign Policy", difficulty: "medium", subtopics: ["Diplomacy","Economic ties"] },
        { id: "c8-3", title: "The Roles of Foreign Policy", difficulty: "medium", subtopics: ["Peace","Socio-economic development"] }
      ]}
      ]
    }
});
