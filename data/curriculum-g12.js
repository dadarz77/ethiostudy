/* EthioStudy Curriculum Data — Grade 12
   VERIFIED against official FDRE MoE new-curriculum student textbooks
   (unit + section structure extracted from the textbook TOCs / unit-opener pages).
   Subjects ship only once their lessons are fully authored. */
window.CURRICULUM_G12 = {
  mathematics: {
    id: "mathematics", title: "Mathematics", icon: "📐", color: "#4f8cff",
    units: [
      { id: "m1", title: "Sequences and Series", topics: [
        { id: "m1-1", title: "Sequence", difficulty: "easy", subtopics: ["Definition", "Computing terms from a rule", "Developing a formula from given terms"] },
        { id: "m1-2", title: "Arithmetic and Geometric Sequences", difficulty: "medium", subtopics: ["Arithmetic sequence", "Geometric sequence", "Identifying types"] },
        { id: "m1-3", title: "The Sigma Notation and Partial Sums", difficulty: "medium", subtopics: ["Sigma notation", "Partial sums", "Sums of arithmetic and geometric series"] },
        { id: "m1-4", title: "Infinite Series", difficulty: "hard", subtopics: ["Convergence", "Sum of an infinite geometric series"] },
        { id: "m1-5", title: "Applications of Sequences and Series in Daily Life", difficulty: "medium", subtopics: ["Real-life models", "Growth and decay"] }
      ]},
      { id: "m2", title: "Introduction to Calculus", topics: [
        { id: "m2-1", title: "Introduction to Derivatives", difficulty: "hard", subtopics: ["Rates of change", "Gradient of curves at a point", "Definition of derivative", "Derivative as a function", "Chain rule"] },
        { id: "m2-2", title: "Applications of Derivative", difficulty: "hard", subtopics: ["Rate of change applications", "Extreme values", "First derivative test", "Curve sketching", "Business applications"] },
        { id: "m2-3", title: "Introduction to Integration", difficulty: "hard", subtopics: ["Area under a curve", "Definite integral", "Fundamental theorem", "Anti-derivatives"] }
      ]},
      { id: "m3", title: "Statistics", topics: [
        { id: "m3-1", title: "Measures of Absolute Dispersion", difficulty: "medium", subtopics: ["Mean deviation", "Variance", "Standard deviation", "Grouped data"] },
        { id: "m3-2", title: "Relative Dispersions", difficulty: "medium", subtopics: ["Coefficient of variation", "Comparing variability"] },
        { id: "m3-3", title: "Use of Frequency Curves", difficulty: "medium", subtopics: ["Frequency curves", "Interpretation"] },
        { id: "m3-4", title: "Sampling Techniques", difficulty: "easy", subtopics: ["Population and sample", "Random sampling", "Other techniques"] }
      ]},
      { id: "m4", title: "Integrals and Their Applications", topics: [
        { id: "m4-1", title: "Area of a Region Bounded by Curves", difficulty: "hard", subtopics: ["Area between curves", "Definite integral as area"] },
        { id: "m4-2", title: "Volume of Solids of Revolution", difficulty: "hard", subtopics: ["Disk method", "Setting up integrals"] },
        { id: "m4-3", title: "Average Value of a Function", difficulty: "medium", subtopics: ["Formula", "Interpretation"] },
        { id: "m4-4", title: "The Fundamental Theorem of Calculus", difficulty: "hard", subtopics: ["Statement", "Evaluating definite integrals"] },
        { id: "m4-5", title: "Integrals as Antiderivatives", difficulty: "medium", subtopics: ["Indefinite integrals", "Basic rules"] },
        { id: "m4-6", title: "Techniques of Integration", difficulty: "hard", subtopics: ["Substitution", "Partial fractions"] },
        { id: "m4-7", title: "Improper Integrals", difficulty: "hard", subtopics: ["Infinite intervals", "Convergence"] }
      ]},
      { id: "m5", title: "Mathematical Applications in Business", topics: [
        { id: "m5-1", title: "Simple and Compound Interest", difficulty: "medium", subtopics: ["Interest formulas", "Compound growth", "Present and future value"] },
        { id: "m5-2", title: "Annuities and Amortization", difficulty: "hard", subtopics: ["Ordinary annuity vs annuity due", "Annuity computations", "Amortization", "Iqub as an annuity"] },
        { id: "m5-3", title: "Investments", difficulty: "medium", subtopics: ["Shares and dividends", "Return on investment"] },
        { id: "m5-4", title: "Taxation", difficulty: "medium", subtopics: ["VAT", "Income tax", "Consumer and producer price"] }
      ]}
    ]
  },
  physics: {
    id: "physics", title: "Physics", icon: "⚡", color: "#a855f7",
    units: [
      { id: "p1", title: "Application of Physics in Other Fields", topics: [
        { id: "p1-1", title: "Physics and Other Sciences", difficulty: "easy", subtopics: ["Interdependence of sciences"] },
        { id: "p1-2", title: "Physics and Engineering", difficulty: "easy", subtopics: ["Engineering applications"] },
        { id: "p1-3", title: "Medical Physics", difficulty: "medium", subtopics: ["Imaging", "Radiotherapy"] },
        { id: "p1-4", title: "Physics and Defense Technology", difficulty: "easy", subtopics: ["Radar", "Navigation"] },
        { id: "p1-5", title: "Physics in Communication", difficulty: "medium", subtopics: ["Signals", "Electromagnetic communication"] }
      ]},
      { id: "p2", title: "Two-Dimensional and Rotational Motion", topics: [
        { id: "p2-1", title: "Projectile Motion", difficulty: "hard", subtopics: ["Component analysis", "Range and height"] },
        { id: "p2-2", title: "Rotational Motion", difficulty: "medium", subtopics: ["Angular displacement and velocity", "Angular acceleration"] },
        { id: "p2-3", title: "Rotational Dynamics", difficulty: "hard", subtopics: ["Torque", "Moment of inertia", "Angular momentum"] },
        { id: "p2-4", title: "Planetary Motion and Kepler's Laws", difficulty: "hard", subtopics: ["Three laws", "Orbital predictions"] },
        { id: "p2-5", title: "Newton's Law of Universal Gravitation", difficulty: "hard", subtopics: ["Inverse-square law", "Satellites and weight"] }
      ]},
      { id: "p3", title: "Fluid Mechanics", topics: [
        { id: "p3-1", title: "Fluid Statics", difficulty: "easy", subtopics: ["Density", "States of matter"] },
        { id: "p3-2", title: "Pressure in Fluids at Rest", difficulty: "medium", subtopics: ["Hydrostatic pressure", "Pascal's principle"] },
        { id: "p3-3", title: "Archimedes' Principle", difficulty: "medium", subtopics: ["Buoyancy", "Floating and sinking"] },
        { id: "p3-4", title: "Fluid Flow", difficulty: "hard", subtopics: ["Continuity equation", "Bernoulli's principle"] },
        { id: "p3-5", title: "Safety and High Pressure", difficulty: "easy", subtopics: ["Pressure hazards", "Everyday applications"] }
      ]},
      { id: "p4", title: "Electromagnetism", topics: [
        { id: "p4-1", title: "Magnets and Magnetic Field", difficulty: "easy", subtopics: ["Magnetic materials", "Field concept"] },
        { id: "p4-2", title: "Magnetic Field Lines", difficulty: "easy", subtopics: ["Drawing field lines", "Earth's magnetism"] },
        { id: "p4-3", title: "Current and Magnetism", difficulty: "medium", subtopics: ["Oersted's discovery", "Solenoids", "Electromagnets"] },
        { id: "p4-4", title: "Electromagnetic Induction", difficulty: "hard", subtopics: ["Flux", "Induction experiments", "Lenz's law"] },
        { id: "p4-5", title: "Faraday's Law of Electromagnetic Induction", difficulty: "hard", subtopics: ["EMF calculation", "Generators"] },
        { id: "p4-6", title: "Transformers", difficulty: "medium", subtopics: ["Step-up and step-down", "Power transmission"] },
        { id: "p4-7", title: "Application and Safety", difficulty: "medium", subtopics: ["Household wiring", "Electrical safety"] }
      ]},
      { id: "p5", title: "Basics of Electronics", topics: [
        { id: "p5-1", title: "Semiconductors", difficulty: "medium", subtopics: ["Band theory", "n-type and p-type"] },
        { id: "p5-2", title: "Diodes and Their Functions", difficulty: "medium", subtopics: ["p-n junction", "I-V characteristic"] },
        { id: "p5-3", title: "Rectification", difficulty: "medium", subtopics: ["Half-wave", "Full-wave"] },
        { id: "p5-4", title: "Transistors and Their Application", difficulty: "hard", subtopics: ["BJT action", "Amplifier and switch"] },
        { id: "p5-5", title: "Integrated Circuits", difficulty: "medium", subtopics: ["IC concept", "Moore's observation"] },
        { id: "p5-6", title: "Logic Gates and Logic Circuits", difficulty: "hard", subtopics: ["AND OR NOT", "Truth tables", "Combinations"] },
        { id: "p5-7", title: "Application of Electronics", difficulty: "easy", subtopics: ["Everyday electronics"] }
      ]}
    ]
  },
  chemistry: {
    id: "chemistry", title: "Chemistry", icon: "⚗️", color: "#f97316",
    units: [
      { id: "c1", title: "Acid-Base Equilibria", topics: [
        { id: "c1-1", title: "Acid-Base Concepts", difficulty: "medium", subtopics: ["Arrhenius concept", "Brønsted-Lowry concept", "Lewis concept"] },
        { id: "c1-2", title: "Ionic Equilibria of Weak Acids and Bases", difficulty: "hard", subtopics: ["Ionization of water", "Ka and Kb", "pH of weak acids and bases"] },
        { id: "c1-3", title: "Common Ion Effect and Buffer Solutions", difficulty: "hard", subtopics: ["Common ion effect", "Buffer action", "Henderson-Hasselbalch"] },
        { id: "c1-4", title: "Hydrolysis of Salts", difficulty: "hard", subtopics: ["Salts of strong/weak acids and bases", "pH of salt solutions"] },
        { id: "c1-5", title: "Acid-Base Indicators and Titrations", difficulty: "medium", subtopics: ["Indicator choice", "Equivalents", "Titration curves"] }
      ]},
      { id: "c2", title: "Electrochemistry", topics: [
        { id: "c2-1", title: "Oxidation-Reduction Reactions", difficulty: "medium", subtopics: ["Oxidation states", "Balancing redox"] },
        { id: "c2-2", title: "Electrolysis of Aqueous Solutions", difficulty: "hard", subtopics: ["Preferential discharge", "Electrode products"] },
        { id: "c2-3", title: "Quantitative Aspects of Electrolysis", difficulty: "hard", subtopics: ["Faraday's laws", "Calculations"] },
        { id: "c2-4", title: "Industrial Application of Electrolysis", difficulty: "medium", subtopics: ["Electroplating", "Metal extraction"] },
        { id: "c2-5", title: "Voltaic Cells", difficulty: "hard", subtopics: ["Cell notation", "Standard potentials", "Batteries"] }
      ]},
      { id: "c3", title: "Industrial Chemistry", topics: [
        { id: "c3-1", title: "Introduction to Industrial Chemistry", difficulty: "easy", subtopics: ["Scope", "Raw materials to products"] },
        { id: "c3-2", title: "Natural Resources and Industry", difficulty: "easy", subtopics: ["Resource-based industries"] },
        { id: "c3-3", title: "Manufacturing of Valuable Products and Chemicals", difficulty: "medium", subtopics: ["Major chemical processes"] },
        { id: "c3-4", title: "Some Manufacturing Industries in Ethiopia", difficulty: "medium", subtopics: ["Cement", "Sugar", "Leather", "Pharmaceuticals"] }
      ]},
      { id: "c4", title: "Polymers", topics: [
        { id: "c4-1", title: "Introduction to Polymers", difficulty: "easy", subtopics: ["Monomers and polymers", "Natural and synthetic"] },
        { id: "c4-2", title: "Polymerization Reactions", difficulty: "medium", subtopics: ["Addition polymerization", "Condensation polymerization"] },
        { id: "c4-3", title: "Classification of Polymers", difficulty: "medium", subtopics: ["Thermoplastics vs thermosets", "Uses"] }
      ]},
      { id: "c5", title: "Introduction to Environmental Chemistry", topics: [
        { id: "c5-1", title: "Introduction", difficulty: "easy", subtopics: ["Ecosystems", "Environmental chemistry scope"] },
        { id: "c5-2", title: "Environmental Pollution", difficulty: "medium", subtopics: ["Air, water, soil pollution", "Pollution control"] },
        { id: "c5-3", title: "Global Warming and Climate Change", difficulty: "medium", subtopics: ["Greenhouse effect", "Carbon cycle"] },
        { id: "c5-4", title: "Green Chemistry and Cleaner Production", difficulty: "easy", subtopics: ["Twelve principles", "Applications"] }
      ]}
    ]
  },
  biology: {
    id: "biology", title: "Biology", icon: "🧬", color: "#22c55e",
    units: [
      { id: "b1", title: "Application of Biology", topics: [
        { id: "b1-1", title: "Application in Conservation of Natural Resources", difficulty: "easy", subtopics: ["In-situ and ex-situ", "Ethiopian reserves"] },
        { id: "b1-2", title: "Food and Nutrition Security", difficulty: "easy", subtopics: ["Food security pillars", "Nutrition"] },
        { id: "b1-3", title: "Creating Conscious Citizens and Ensuring Sustainable Development", difficulty: "easy", subtopics: ["Sustainability", "Civic role"] },
        { id: "b1-4", title: "Applications in Biotechnology", difficulty: "hard", subtopics: ["Recombinant DNA", "PCR", "Applications in medicine and agriculture"] }
      ]},
      { id: "b2", title: "Microorganisms", topics: [
        { id: "b2-1", title: "Eubacteria", difficulty: "medium", subtopics: ["Bacterial cell structure", "Shapes", "Nutritional types", "Reproduction"] },
        { id: "b2-2", title: "Archaea", difficulty: "easy", subtopics: ["Extremophiles", "Beneficial aspects", "Factors affecting microbial growth"] },
        { id: "b2-3", title: "Fungi", difficulty: "medium", subtopics: ["Characteristics", "Ecology", "Classification", "Reproduction", "Economic importance"] },
        { id: "b2-4", title: "Protozoa", difficulty: "medium", subtopics: ["General features", "Common diseases"] },
        { id: "b2-5", title: "Viruses", difficulty: "hard", subtopics: ["Characteristics", "Viral symmetry", "Classification", "Replication"] },
        { id: "b2-6", title: "Normal Microbionta", difficulty: "easy", subtopics: ["Human microbiome", "Normal flora roles"] },
        { id: "b2-7", title: "Modes of Disease Transmission and Ways of Prevention", difficulty: "medium", subtopics: ["Transmission routes", "Prevention"] },
        { id: "b2-8", title: "Uses of Microorganisms", difficulty: "easy", subtopics: ["Food industry", "Injera and fermentation", "Medicine"] },
        { id: "b2-9", title: "Controlling Microorganisms", difficulty: "medium", subtopics: ["Physical methods", "Chemical methods", "Antibiotics"] },
        { id: "b2-10", title: "Renowned Microbiologists in Ethiopia", difficulty: "easy", subtopics: ["Ethiopian contributions"] }
      ]},
      { id: "b3", title: "Energy Transformation", topics: [
        { id: "b3-1", title: "Cellular Metabolism", difficulty: "medium", subtopics: ["Anabolism and catabolism", "ATP"] },
        { id: "b3-2", title: "Photosynthesis", difficulty: "hard", subtopics: ["Photosynthetic pigments", "Light reactions", "Calvin cycle"] },
        { id: "b3-3", title: "Contributions of Photosynthesis for the Continuity of Life, O₂ and CO₂ Balance and Global Warming", difficulty: "medium", subtopics: ["Ecological role", "Carbon balance"] },
        { id: "b3-4", title: "Cellular Respiration", difficulty: "hard", subtopics: ["Aerobic and anaerobic", "Site of respiration", "ATP yield"] }
      ]},
      { id: "b4", title: "Evolution", topics: [
        { id: "b4-1", title: "Evolution", difficulty: "hard", subtopics: ["Definition and theories", "Evidence for evolution", "Natural selection", "Human evolution", "Mutation", "Genetic drift", "Gene flow", "Causes of species extinction"] },
        { id: "b4-2", title: "Renowned Anthropologists in Ethiopia", difficulty: "easy", subtopics: ["Lucy and Ethiopian paleoanthropology"] },
        { id: "b4-3", title: "Renowned Evolutionists in Ethiopia", difficulty: "easy", subtopics: ["Ethiopian evolutionary scholarship"] }
      ]},
      { id: "b5", title: "Human Body System", topics: [
        { id: "b5-1", title: "The Nervous System", difficulty: "hard", subtopics: ["Neurons", "Nerve impulse", "Neurotransmitters", "Types of nervous system", "Reflex action", "Drug abuse"] },
        { id: "b5-2", title: "Sense Organs", difficulty: "medium", subtopics: ["Skin", "Tongue", "Nose", "Eye", "Ear"] },
        { id: "b5-3", title: "The Endocrine System", difficulty: "medium", subtopics: ["Endocrine glands", "Hormones and disorders"] },
        { id: "b5-4", title: "Homeostasis in the Human Body", difficulty: "hard", subtopics: ["Feedback control", "Structure and function of the kidney"] }
      ]},
      { id: "b6", title: "Climate Change", topics: [
        { id: "b6-1", title: "Climate Change: Causes and Effects", difficulty: "medium", subtopics: ["Definition", "Causes"] },
        { id: "b6-2", title: "Effects of Climate Change", difficulty: "medium", subtopics: ["Biodiversity", "Agriculture", "Forest productivity", "Natural disasters"] },
        { id: "b6-3", title: "International Conventions", difficulty: "easy", subtopics: ["UNFCCC", "Kyoto Protocol"] }
      ]}
    ]
  }
};

/* Social sciences — unit maps verified against official MoE textbooks (Oct 2026) */
Object.assign(window.CURRICULUM_G12, {
    history: {
      id: "history", title: "History", icon: "📜", color: "#b45309",
      units: [
      { id: "h1", title: "Development of Capitalism and Nationalism from 1815 to 1914", topics: [
        { id: "h1-1", title: "Development of Capitalism", difficulty: "medium", subtopics: [] },
        { id: "h1-2", title: "The Industrial Revolution", difficulty: "medium", subtopics: [] },
        { id: "h1-3", title: "Nationalism", difficulty: "medium", subtopics: [] },
        { id: "h1-4", title: "Unification of Italy", difficulty: "medium", subtopics: [] },
        { id: "h1-5", title: "Unification of Germany", difficulty: "medium", subtopics: [] },
        { id: "h1-6", title: "The American Civil War", difficulty: "medium", subtopics: [] },
        { id: "h1-7", title: "The Eastern Question", difficulty: "medium", subtopics: [] }
      ]},
      { id: "h2", title: "Africa and the Colonial Experience (1880s-1960s)", topics: [
        { id: "h2-1", title: "The Era of \"Legitimate Trade\" and Colonial Empires", difficulty: "medium", subtopics: [] },
        { id: "h2-2", title: "African Resistance against Colonial Expansion", difficulty: "medium", subtopics: [] },
        { id: "h2-3", title: "Colonial Administration and the Colonial States", difficulty: "medium", subtopics: [] }
      ]},
      { id: "h3", title: "Social, Economic and Political Developments in Ethiopia, mid-19th C. to 1941", topics: [
        { id: "h3-1", title: "Long Distance Trade and Peoples&#8217; Interaction in Ethiopia in the 19th Century", difficulty: "medium", subtopics: [] },
        { id: "h3-2", title: "Power Rivalry and Consolidating Central Government, 1855-1913", difficulty: "medium", subtopics: [] },
        { id: "h3-3", title: "Territorial Expansion and the Incorporation of Kingdoms", difficulty: "medium", subtopics: [] },
        { id: "h3-4", title: "External Relations, Challenges and Threats", difficulty: "hard", subtopics: [] },
        { id: "h3-5", title: "The Victory of Adwa", difficulty: "medium", subtopics: [] },
        { id: "h3-6", title: "Power Struggle among Ruling Elites, 1906-1935", difficulty: "medium", subtopics: [] },
        { id: "h3-7", title: "Italian Aggression and the Patriotic Resistance", difficulty: "medium", subtopics: [] }
      ]},
      { id: "h4", title: "Society and Politics in the Age of World Wars, 1914-1945", topics: [
        { id: "h4-1", title: "World War I and Its Settlement", difficulty: "medium", subtopics: [] },
        { id: "h4-2", title: "The Russian Revolution of 1917", difficulty: "medium", subtopics: [] },
        { id: "h4-3", title: "The Interwar Period: Capitalist Economy, Fascism and Nazism", difficulty: "medium", subtopics: [] },
        { id: "h4-4", title: "World War II", difficulty: "medium", subtopics: [] }
      ]},
      { id: "h5", title: "Global and Regional Developments Since 1945", topics: [
        { id: "h5-1", title: "The Aftermath and Consequences of WW II", difficulty: "medium", subtopics: [] },
        { id: "h5-2", title: "The United Nations Organization (the UN)", difficulty: "medium", subtopics: [] },
        { id: "h5-3", title: "The Post-War Global Socio-Economic Recovery and Developments", difficulty: "medium", subtopics: [] },
        { id: "h5-4", title: "The Cold War Realities: The Relation between the Capitalist and Communist Blocs", difficulty: "medium", subtopics: [] },
        { id: "h5-5", title: "Situations in Asia during the Cold War", difficulty: "medium", subtopics: [] },
        { id: "h5-6", title: "The Middle East", difficulty: "medium", subtopics: [] },
        { id: "h5-7", title: "The Dissolution of the Communist Bloc and the Aftermath", difficulty: "medium", subtopics: [] }
      ]},
      { id: "h6", title: "Ethiopia: Internal Developments and External Influences from 1941 to 1991", topics: [
        { id: "h6-1", title: "The Restoration of the Imperial Rule and External Influences", difficulty: "medium", subtopics: [] },
        { id: "h6-2", title: "Socio-economic Conditions and Social Organizations", difficulty: "medium", subtopics: [] },
        { id: "h6-3", title: "Consolidation of Autocracy and Oppositions to the Monarchy", difficulty: "medium", subtopics: [] },
        { id: "h6-4", title: "The 1974 Revolution: The Downfall of the Emperor and the Rise of the Derg", difficulty: "medium", subtopics: [] },
        { id: "h6-5", title: "Socio-economic and Political Reforms of the Military Regime", difficulty: "hard", subtopics: [] },
        { id: "h6-6", title: "The Decline and Downfall of the Derg Regime: Internal and External Threats", difficulty: "medium", subtopics: [] }
      ]},
      { id: "h7", title: "Africa Since the 1960s", topics: [
        { id: "h7-1", title: "The Road to Independence and the Rise of Independent States in Africa", difficulty: "medium", subtopics: [] },
        { id: "h7-2", title: "Politics in Independent African States", difficulty: "medium", subtopics: [] },
        { id: "h7-3", title: "Economy and Society in Independent Africa", difficulty: "medium", subtopics: [] },
        { id: "h7-4", title: "The Cold War and Africa", difficulty: "medium", subtopics: [] },
        { id: "h7-5", title: "Pan-Africanism, from Organization of African Unity to African Union", difficulty: "medium", subtopics: [] }
      ]},
      { id: "h8", title: "Post-1991 Developments in Ethiopia", topics: [
        { id: "h8-1", title: "The Transitional Government of Ethiopia", difficulty: "medium", subtopics: [] },
        { id: "h8-2", title: "Ethiopia after the 1995 Constitution", difficulty: "medium", subtopics: [] },
        { id: "h8-3", title: "Socio-Economic Issues", difficulty: "medium", subtopics: [] },
        { id: "h8-4", title: "The Role of Ethiopia in Peace Keeping", difficulty: "medium", subtopics: [] }
      ]},
      { id: "h9", title: "Indigenous Knowledge Systems and Heritages of Ethiopia", topics: [
        { id: "h9-1", title: "Indigenous Knowledge: Definition and Unique Characteristic Features", difficulty: "easy", subtopics: [] },
        { id: "h9-2", title: "Indigenous Knowledge and Development", difficulty: "medium", subtopics: [] }
      ]}
      ]
    },
    geography: {
      id: "geography", title: "Geography", icon: "🌍", color: "#0e7490",
      units: [
      { id: "g1", title: "Major Geological Processes Associated with Plate Tectonics", topics: [
        { id: "g1-1", title: "The Continental Drift Theory", difficulty: "medium", subtopics: [] },
        { id: "g1-2", title: "Plate Tectonics Theory", difficulty: "medium", subtopics: [] },
        { id: "g1-3", title: "Plate Movements and Plate Boundaries", difficulty: "medium", subtopics: [] },
        { id: "g1-4", title: "Major Geological Processes", difficulty: "medium", subtopics: [] }
      ]},
      { id: "g2", title: "Climate Change", topics: [
        { id: "g2-1", title: "Basic Concepts of Climate Change", difficulty: "easy", subtopics: [] },
        { id: "g2-2", title: "Trends in Global Climate Change", difficulty: "medium", subtopics: [] },
        { id: "g2-3", title: "Natural and Human Induced Climate Change", difficulty: "medium", subtopics: [] },
        { id: "g2-4", title: "Consequences of Climate Change", difficulty: "medium", subtopics: [] },
        { id: "g2-5", title: "Adaptation and Mitigation Strategies to Climate Change", difficulty: "medium", subtopics: [] },
        { id: "g2-6", title: "International Conventions and Agreements on Climate Change", difficulty: "medium", subtopics: [] },
        { id: "g2-7", title: "Pillars of Climate Resilient Green Economy of Ethiopia", difficulty: "medium", subtopics: [] }
      ]},
      { id: "g3", title: "Management of Conflict over Resources", topics: [
        { id: "g3-1", title: "The Concept of Sustainable Development", difficulty: "easy", subtopics: [] },
        { id: "g3-2", title: "Resource Use Policies and Related Conflicts", difficulty: "medium", subtopics: [] },
        { id: "g3-3", title: "Governance of Natural Resources", difficulty: "medium", subtopics: [] },
        { id: "g3-4", title: "Indigenous Conflict Resolution Practices", difficulty: "medium", subtopics: [] }
      ]},
      { id: "g4", title: "Population Policies, Programs and the Environment", topics: [
        { id: "g4-1", title: "Theories on Population Growth and Development", difficulty: "medium", subtopics: [] },
        { id: "g4-2", title: "Population Policies", difficulty: "medium", subtopics: [] },
        { id: "g4-3", title: "Measures Taken to Curb the Growth Rate of Population", difficulty: "medium", subtopics: [] },
        { id: "g4-4", title: "Relationship between Population and Socio-economic Development", difficulty: "medium", subtopics: [] },
        { id: "g4-5", title: "Relationship between Population and Environmental Health", difficulty: "medium", subtopics: [] }
      ]},
      { id: "g5", title: "Challenges of Economic Development", topics: [
        { id: "g5-1", title: "Multiple Faces of Poverty and Implication to Development", difficulty: "medium", subtopics: [] },
        { id: "g5-2", title: "The Advantages and Limitations of Globalization", difficulty: "medium", subtopics: [] },
        { id: "g5-3", title: "The Growing Imbalance between Regions and Countries", difficulty: "medium", subtopics: [] },
        { id: "g5-4", title: "Corruption", difficulty: "medium", subtopics: [] },
        { id: "g5-5", title: "Global Health Crises", difficulty: "medium", subtopics: [] }
      ]},
      { id: "g6", title: "Solutions to Environmental and Sustainability Problems", topics: [
        { id: "g6-1", title: "Environmental Problems", difficulty: "hard", subtopics: [] },
        { id: "g6-2", title: "The Challenge of Sustainability", difficulty: "medium", subtopics: [] },
        { id: "g6-3", title: "Environmental Education", difficulty: "medium", subtopics: [] },
        { id: "g6-4", title: "Environmental Movements", difficulty: "medium", subtopics: [] },
        { id: "g6-5", title: "Environmentally Friendly Indigenous Practices", difficulty: "medium", subtopics: [] }
      ]},
      { id: "g7", title: "Contemporary Global Geographic Issues and Public Concerns", topics: [
        { id: "g7-1", title: "Climate Change", difficulty: "medium", subtopics: [] },
        { id: "g7-2", title: "Desertification", difficulty: "medium", subtopics: [] },
        { id: "g7-3", title: "Drought", difficulty: "medium", subtopics: [] },
        { id: "g7-4", title: "Famine", difficulty: "medium", subtopics: [] }
      ]},
      { id: "g8", title: "Geographical Enquiry and Map Making", topics: [
        { id: "g8-1", title: "Fundamentals of Research in Geography", difficulty: "medium", subtopics: [] },
        { id: "g8-2", title: "GIS Data and Map Making Using GIS", difficulty: "medium", subtopics: [] }
      ]}
      ]
    },
    economics: {
      id: "economics", title: "Economics", icon: "📊", color: "#6d28d9",
      units: [
      { id: "e1", title: "Fundamental Concepts of Macroeconomics", topics: [
        { id: "e1-1", title: "Definition and Focus Areas of Macroeconomics", difficulty: "easy", subtopics: [] },
        { id: "e1-2", title: "Key Challenges in Macroeconomics", difficulty: "hard", subtopics: [] },
        { id: "e1-3", title: "The Schools of Thought in Macroeconomic Analysis", difficulty: "hard", subtopics: [] }
      ]},
      { id: "e2", title: "Aggregate Demand and Aggregate Supply Analysis", topics: [
        { id: "e2-1", title: "Aggregate Demand", difficulty: "medium", subtopics: [] },
        { id: "e2-2", title: "Aggregate Supply", difficulty: "medium", subtopics: [] },
        { id: "e2-3", title: "Equilibrium of Aggregate Demand and Aggregate Supply", difficulty: "medium", subtopics: [] }
      ]},
      { id: "e3", title: "Market Failure and Consumer Protection", topics: [
        { id: "e3-1", title: "Market Failure", difficulty: "medium", subtopics: [] },
        { id: "e3-2", title: "Public Goods", difficulty: "medium", subtopics: [] },
        { id: "e3-3", title: "Externalities", difficulty: "medium", subtopics: [] },
        { id: "e3-4", title: "Asymmetric Information", difficulty: "medium", subtopics: [] },
        { id: "e3-5", title: "Consumer Protection", difficulty: "medium", subtopics: [] }
      ]},
      { id: "e4", title: "Macroeconomic Policy Instruments", topics: [
        { id: "e4-1", title: "Definition and Types of Macroeconomic Policies", difficulty: "easy", subtopics: [] },
        { id: "e4-2", title: "Fiscal Policy", difficulty: "hard", subtopics: [] },
        { id: "e4-3", title: "Monetary Policy", difficulty: "hard", subtopics: [] },
        { id: "e4-4", title: "Income Policy and Wage", difficulty: "hard", subtopics: [] },
        { id: "e4-5", title: "Foreign Exchange Policies", difficulty: "medium", subtopics: [] }
      ]},
      { id: "e5", title: "Tax Theory and Practice", topics: [
        { id: "e5-1", title: "Taxes: Definition, Principles, Objectives, and Classifications", difficulty: "easy", subtopics: [] },
        { id: "e5-2", title: "Approaches to Tax Equity", difficulty: "medium", subtopics: [] },
        { id: "e5-3", title: "5.3 &#038; 5.4 – Tax System and Accounting in Ethiopia", difficulty: "medium", subtopics: [] },
        { id: "e5-4", title: "Problems Associated with Taxation in Ethiopia", difficulty: "hard", subtopics: [] }
      ]},
      { id: "e6", title: "Poverty and Inequality", topics: [
        { id: "e6-1", title: "Concept of Poverty and Its Measurement", difficulty: "easy", subtopics: [] },
        { id: "e6-2", title: "Concept of Inequality and Its Measurement", difficulty: "easy", subtopics: [] },
        { id: "e6-3", title: "6.3 &#038; 6.4 – Global, Regional, and Gendered Poverty", difficulty: "medium", subtopics: [] },
        { id: "e6-4", title: "6.5 &#038; 6.6 – Poverty and Inequality in Ethiopia", difficulty: "medium", subtopics: [] }
      ]},
      { id: "e7", title: "Macroeconomic Reforms in Ethiopia", topics: [
        { id: "e7-1", title: "National Development Objectives and Strategies", difficulty: "medium", subtopics: [] },
        { id: "e7-2", title: "Home-grown Economic Reforms", difficulty: "hard", subtopics: [] },
        { id: "e7-3", title: "Fiscal Decentralization", difficulty: "medium", subtopics: [] }
      ]},
      { id: "e8", title: "Economy, Environment and Climate Change", topics: [
        { id: "e8-1", title: "Economy and the Environment", difficulty: "medium", subtopics: [] },
        { id: "e8-2", title: "Global Warming and Climate Change", difficulty: "medium", subtopics: [] },
        { id: "e8-3", title: "Green Economy and Green Growth", difficulty: "medium", subtopics: [] },
        { id: "e8-4", title: "Environment and Climate Change in Ethiopia", difficulty: "medium", subtopics: [] }
      ]}
      ]
    }
});
