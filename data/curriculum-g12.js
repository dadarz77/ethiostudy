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
