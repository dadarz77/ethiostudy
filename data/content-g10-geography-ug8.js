/* Content: Grade 10 Geography - Unit 8: Geospatial Information and Data Processing (5 topics)
   Source: MoE Geography Grade 10 Student Textbook, Unit 8. */
window.Lessons = window.Lessons || {};

Lessons["g10-geography-ug8-t1"] = {
  overview: "Geographic data are the raw observations about places, while geospatial information is what we obtain after processing them. This lesson separates data from information, traces the data cycle, and shows how place, time and attributes together describe the earth's surface.",
  objectives: [
    "Define data and information and state how they differ",
    "Describe the four stages of the data cycle",
    "Explain the meaning of geospatial data and why location is essential",
    "Identify attribute information of physical and socio-economic features",
    "Distinguish discrete objects from continuous data in visualizing geographic data"
  ],
  simple: "Data are observations collected and stored as numbers, characters, images, facts and symbols. Information is the result of processing and organizing data in a way that adds to the knowledge of a receiver. Data pass through a cycle of collection, processing, analysis and dissemination of results. Geospatial data is data about objects, events or phenomena that carry location information. It combines location information, usually coordinates on the earth, with attribute information, the characteristics of the feature, and temporal information, the time at which they existed. Without location, data are called aspatial or non-spatial and have no mapping value. Geographic data can be visualized in two fundamental ways: as discrete objects with well-defined boundaries, such as a lake, or as continuous data, such as elevation, which varies progressively across a surface.",
  detailed: "<p><b>Data.</b> Data refer to different observations which are collected and stored as numbers, characters, images, facts and symbols. They describe a feature, idea, status or situation that we want to focus on or are interested in. Data are sets of values of qualitative or quantitative variables about one or more persons or objects. Data can be meaningful when they are further processed by human interpretations, or input into a computer and the results disseminated.</p><p><b>The data cycle.</b> Data has important lifecycles. It begins with <b>data collection</b>, when we may collect new data (primary data) from a study area or use existing secondary data obtained from different offices, for example the Central Statistical Agency. The second stage is <b>data processing</b>, which involves checking for data quality through quality assurance (QA) and quality control (QC), merging duplicate variables, and appending new information into the data. The third stage is <b>data analysis</b>, in which statistical analyses identify meaningful relationships between or amongst variables, and the results are displayed in tables, charts and graphs for visualization. The final stage is the <b>dissemination of results</b>: sharing results with the general public through conferences and workshops, publishing them in known journals, and archiving them so they remain accessible for future use.</p><p><b>Data versus information.</b> Although the two words are often used interchangeably, they are not the same. <b>Information</b> is the result of processing, manipulating and organizing data in a way that adds to the knowledge of a receiver; it is the context in which data is taken. Data is used as an input for the computer system, while information is an output of data. Data is unprocessed facts or figures, while information is processed data. Data does not depend on information, but information depends on data.</p><p><b>Geospatial data.</b> Geospatial data is data about objects, events or phenomena that have location information of the surface of the earth they represent. It typically combines <b>location information</b>, usually coordinates on the earth, with <b>attribute information</b>, the characteristics of the object, event or phenomenon concerned, together with <b>temporal information</b>, the time at which the location and attributes existed. Geographical data links place, time and attributes, and it is at the heart of map making: without geographical data, the events or phenomena of an area of our interest (AOI) cannot be visualized and analyzed.</p><p><b>Place, time and attributes.</b> Place or location is essential in the collection of geographical data; it is the basis for mapping an area of interest. Based on the location we can link different kinds of information to it and measure distances and areas. Without locations, data are said to be 'aspatial' or non-spatial, and have no mapping value at all. Time is an optional element: height above sea level changes slowly through erosion and movements of the earth's crust, processes that operate over hundreds or thousands of years, so for most applications we can safely omit time from the representation of elevation. On the other hand, temperature changes daily and can shift dramatically within minutes with the passage of a cold front or thunderstorm, so time is very important for temperature. Attributes are descriptive information about the things we try to map: some are physical or environmental, such as temperature or elevation, while others are social or economic, such as the number of population or income.</p><p><b>Discrete objects and continuous data.</b> There are two fundamental ways of visualizing geographic data. <b>Discrete objects</b> represent an area as objects with well-defined boundaries in open space; a discrete object has known and definable boundaries, so it is easy to define precisely where the object begins and where it ends. A lake within the surrounding landscape is a good example. <b>Continuous data</b> represents areas or phenomena that progressively vary across a surface or a location, with the values of a measure of variables changing from point to point. Continuous data is also referred to as field, non-discrete, or surface data. Elevation is the classic example: taking sea level as the starting point, the elevation of an area varies across the surface.</p>",
  keyTerms: [
    { term: "Data", def: "Observations collected and stored as numbers, characters, images, facts and symbols; sets of values of qualitative or quantitative variables." },
    { term: "Information", def: "The result of processing, manipulating and organizing data in a way that adds to the knowledge of a receiver; the context in which data is taken." },
    { term: "Data cycle", def: "The lifecycle of data: collection, processing, analysis and dissemination of results." },
    { term: "Geospatial data", def: "Data about objects, events or phenomena that have location information of the surface of the earth they represent; it links place, time and attributes." },
    { term: "Attribute", def: "Descriptive information about the objects, events or phenomena being mapped, whether physical (temperature, elevation) or socio-economic (population, income)." },
    { term: "Temporal information", def: "The time at which the location and attributes of a feature existed." },
    { term: "Discrete object", def: "An area represented as an object with well-defined and definable boundaries in open space, such as a lake." },
    { term: "Continuous data", def: "Data representing areas or phenomena that progressively vary across a surface; also called field, non-discrete or surface data." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "A regional office holds (a) raw rainfall figures for several years stored in files, and (b) a poster that shows the same figures processed into a readable diagram. Classify each as data or information.",
      given: "(a) is raw and unprocessed; (b) is organized and carries meaning for a reader.",
      formula: "Principle: data are unprocessed facts used as input; information is the processed output that adds knowledge.",
      substitution: "(a) matches the definition of data; (b) has been processed, manipulated and organized.",
      calculation: "Raw figures are input for a computer system, while the poster is an output that gives the figures context.",
      answer: "(a) is data; (b) is information."
    },
    {
      problem: "A statistics team has collected its new records. At which stage of the data cycle is the team when it performs QA and QC checks and merges duplicate variables?",
      given: "The records were collected; quality checks and merging of duplicates follow.",
      formula: "Principle: the data cycle runs collection, processing, analysis, dissemination.",
      substitution: "QA and QC, merging duplicate variables and appending new information belong to the second stage.",
      calculation: "The checks mentioned are exactly the activities described in data processing.",
      answer: "The data processing stage, the second stage of the data cycle."
    },
    {
      problem: "A map shows Lake Tana as a single water body with a clear shoreline, and elevation above sea level as a value that changes from point to point. Identify the kind of geographic data each represents.",
      given: "The lake has known, definable boundaries; elevation varies progressively across the surface.",
      formula: "Principle: discrete objects have well-defined boundaries; continuous data progressively varies across a surface.",
      substitution: "The shoreline fixes where the lake begins and ends; elevation starts at sea level and changes point by point.",
      calculation: "The lake matches the definition of a discrete object; elevation matches field or surface data.",
      answer: "Lake Tana is a discrete object; elevation is continuous data."
    },
    {
      problem: "A student is preparing a map of daily weather. For which variable is the temporal element essential: elevation or temperature? Explain.",
      given: "Elevation changes only over hundreds or thousands of years; temperature changes daily and can shift in minutes.",
      formula: "Principle: time is optional for slow-changing features but crucial for fast-changing ones.",
      substitution: "Erosion and crust movement act so slowly that elevation can be treated as unchanging; a cold front or thunderstorm changes temperature within minutes.",
      calculation: "Only temperature changes fast enough for the time of measurement to matter.",
      answer: "Temperature. Time is very important for it, whereas time can safely be omitted for elevation."
    }
  ],
  commonMistakes: [
    "Using 'data' and 'information' as if they mean exactly the same thing.",
    "Believing newly collected data is immediately meaningful without processing and interpretation.",
    "Calling data without a location 'geographic', when it is actually aspatial or non-spatial and has no mapping value.",
    "Forgetting one of the three parts of geospatial data: location, attribute and temporal information.",
    "Treating elevation as a discrete object when it is really continuous data varying across a surface.",
    "Listing attributes as only physical or environmental and forgetting social and economic attributes such as population and income.",
    "Thinking time is always required, when for slow-changing features like elevation it can safely be omitted."
  ],
  applications: [
    "Recording the coordinates, characteristics and date of every school inspection so the geospatial data is complete.",
    "Visualizing Central Statistical Agency records as tables, charts and graphs before sharing them with the public.",
    "Mapping the school compound by marking classrooms as discrete objects and the slope of the ground as continuous data.",
    "Deciding whether daily temperature readings for a town need a time element, while a hiking map of elevation does not.",
    "Archiving class survey results so they remain accessible for future use, just as journals archive research results.",
    "Answering the geographic questions 'what is where?' and 'why is it there?' to identify risk areas and solve problems."
  ],
  summary: "Data are raw observations stored as numbers, characters, images and symbols, while information is data processed and organized so that it adds to the knowledge of a receiver. Data pass through a cycle of collection, processing, analysis and dissemination. Geographic data links place, time and attributes, and can be visualized either as discrete objects with firm boundaries, like a lake, or as continuous data that varies across a surface, like elevation.",
  visuals: [
    {
      type: "comparison",
      config: {
        title: "Data vs Information",
        left: { name: "Data", items: ["Input for the computer system", "Unprocessed facts or figures", "Stored as numbers, characters, images, symbols", "Does not depend on information"] },
        right: { name: "Information", items: ["Output of data", "Processed data", "Adds knowledge to the receiver", "Depends on data"] }
      }
    },
    {
      type: "steps",
      config: {
        title: "The Data Cycle",
        steps: [
          { label: "Collection", detail: "Collect new primary data in the study area, or use existing secondary data, for example from the Central Statistical Agency." },
          { label: "Processing", detail: "Check quality through QA and QC, merge duplicate variables, and append new information." },
          { label: "Analysis", detail: "Run statistical analyses to find relationships, then display the results in tables, charts and graphs." },
          { label: "Dissemination", detail: "Share results through conferences, workshops and journals, and archive them for future use." }
        ]
      }
    },
    {
      type: "comparison",
      config: {
        title: "Discrete Objects vs Continuous Data",
        left: { name: "Discrete objects", items: ["Well-defined boundaries", "Easy to say where they begin and end", "Example: a lake in a landscape"] },
        right: { name: "Continuous data", items: ["Progressively varies across a surface", "Also called field or surface data", "Example: elevation above sea level"] }
      }
    }
  ],
  questions: [
    { type: "mcq", q: "Information is best described as:", options: ["raw unprocessed facts", "data processed, manipulated and organized to add knowledge", "any observation stored as numbers", "a satellite image"], answer: 1, difficulty: 1, explanation: "Information is the result of processing, manipulating and organizing data in a way that adds to the knowledge of a receiver." },
    { type: "tf", q: "Data is used as an input for the computer system, whereas information is an output of data.", answer: true, difficulty: 1, explanation: "The textbook table gives exactly this difference between data and information." },
    { type: "mcq", q: "Which of the following is NOT one of the three parts of geospatial data?", options: ["Location information", "Attribute information", "Temporal information", "The brand of the GPS receiver"], answer: 3, difficulty: 2, explanation: "Geospatial data combines location, attribute and temporal information; the receiver brand is irrelevant." },
    { type: "short", q: "Give the term for data about objects, events or phenomena that have location information of the surface of the earth they represent.", answer: "geospatial data", difficulty: 1, explanation: "This is the definition of geospatial data." },
    { type: "concept", q: "What are data that lack a location said to be, and what mapping value do they have?", answer: "aspatial|non-spatial|aspatial or non-spatial and have no mapping value|no value at all", difficulty: 2, explanation: "Without locations, data are aspatial or non-spatial and have no mapping value at all." },
    { type: "mcq", q: "A lake within the surrounding landscape is an example of:", options: ["continuous data", "a discrete object", "attribute data", "temporal information"], answer: 1, difficulty: 2, explanation: "A lake is a discrete object with known and definable boundaries in open space." },
    { type: "tf", q: "The temporal element is required for every representation of geographic data.", answer: false, difficulty: 2, explanation: "Time is an optional element; it can safely be omitted for slowly changing features such as elevation." },
    { type: "short", q: "Which government office is given in the lesson as a source of existing secondary data?", answer: "central statistical agency|csa", difficulty: 2, explanation: "Existing secondary data may be obtained from different offices, for example the Central Statistical Agency." },
    { type: "concept", q: "Why is time very important when mapping temperature but not when mapping elevation?", answer: "temperature changes daily or in minutes|elevation changes only over hundreds or thousands of years", difficulty: 3, explanation: "Temperature can change dramatically within minutes with a cold front or thunderstorm, while elevation changes only through slow erosion and crust movements." },
    { type: "mcq", q: "Which of the following is a social or economic attribute?", options: ["Temperature", "Elevation", "Income", "Rainfall"], answer: 2, difficulty: 1, explanation: "Attributes may be physical or environmental (temperature, elevation) or social and economic (population number, income)." },
    { type: "ordering", q: "Arrange the stages of the data cycle in the correct order.", options: ["Dissemination of results", "Data collection", "Data analysis", "Data processing"], answer: 1, difficulty: 2, explanation: "The order is: data collection, data processing, data analysis, dissemination of results." },
    { type: "mcq", q: "Continuous data is also referred to as:", options: ["field, non-discrete, or surface data", "polygon data", "vector data", "attribute data"], answer: 0, difficulty: 2, explanation: "Continuous data is also referred to as field, non-discrete, or surface data." }
  ]
};

Lessons["g10-geography-ug8-t2"] = {
  overview: "Geographic data must be gathered before any map or analysis can exist. This lesson divides its sources into directly collected data and remotely sensed data, reviews the common general sources, and explains the two most important collection tools: the Global Positioning System and digitizers.",
  objectives: [
    "Distinguish directly collected data from remotely sensed data",
    "List the most common general sources of geographic data",
    "Explain the roles of field surveys, base maps, and primary and secondary sources",
    "Describe how a GPS receiver determines the exact location of a place",
    "Explain digitization and georeferencing using digitizers, scanners and smartphones"
  ],
  simple: "Geographic data come from two important sources: directly collected data, generated at the source of the phenomena being measured, and remotely sensed data, measured from remote distances without any direct contact with the phenomena. The most common general sources are hard copy maps, aerial photographs, remotely sensed imagery, point data samples from surveys, and existing digital data files. The first step in making a map is to complete a field survey, and the spatial data for the base map belong in the category of primary sources; data of general interest gathered for many reasons are secondary sources. The two most important collection tools are the Global Positioning System, a satellite network whose receiver must connect with four or more satellites to fix a precise location within a few meters, and digitizers, which change images on paper into a computer-readable digital form.",
  detailed: "<p><b>Two kinds of sources.</b> Geographic data are collected from a variety of sources and in different formats. Therefore geographic data come from two important sources. <b>Directly collected data</b> are generated at the source of the phenomena being measured. Examples include temperature readings at specific weather stations, elevations recorded by visiting the location of interest, data obtained through surveys such as the census and sample surveys, and observations such as counting the number of trees in a farmland. <b>Remotely sensed data</b> are measured from remote distances without any direct contact with the phenomena or a need to visit the locations of interest; satellite images are the standard example.</p><p><b>Common general sources.</b> The most common general sources for geographic data are: hard copy maps (analogue maps); aerial photographs; remotely sensed imagery; point data samples from surveys; and existing digital data files.</p><p><b>Data collection, field surveys and base maps.</b> Data collection is the process of gathering and measuring information on variables of our interest, usually carried out systematically so that we can appropriately map the area of interest. The first step in making a map is to complete a field survey, in which surveyors observe, measure and record what they see in the specific area: through observation, interviews, sketching and measurement. The spatial and location data for the base map belong in the category named 'primary sources', because they are received for direct use in making the map. Data of general interest gathered for many reasons form the 'secondary sources', which end users can use based on their interest. Hard copy maps can be used as a secondary source by enlarging a map of the area of interest on paper, or by digitizing it on a computer. Whenever we use data from secondary sources we should be very careful and check whether the data are right and up-to-date; otherwise our final result will be wrong and outdated.</p><p><b>Remote sensing.</b> Today, most mapping is done by remote sensing, the gathering of geographic information from a distance by an instrument which is not physically in contact with the mapping site. These data are gathered primarily by aerial photography or satellites, and include information such as elevation, differences in land cover, and variations in temperature. The information is recorded and converted to a digital format, and cartographers or mapmakers then use these data and computer software to make maps.</p><p><b>The Global Positioning System.</b> A global positioning system (GPS) is a satellite network that is used to determine the exact location of a place. It communicates with GPS receivers accessed by individual users on the surface of the earth. The GPS receiver needs to connect with four or more satellites orbiting the earth as a reference to calculate the precise location of the user within a few meters. GPS receivers are widely used in cars and smartphones to provide directions to specific locations, and the receiver is very valuable for documenting information about a place: it provides latitudinal and longitudinal coordinate values of an area and the elevation value of the area.</p><p><b>Digitizers and georeferencing.</b> A digitizer is a tool used to change images on an analogue form or paper into a digital form on a computer. Digitization is the process of converting information into a digital (that is, computer-readable) format, and the result is the representation of an object or image in a digital format. Instruments used in digitization include the table digitizer, the scanner and smartphones. Data generated by a digitizer provide geo-referenced information of an area, whereas images generated by scanners and smartphones should be geo-referenced. Georeferencing means that the internal coordinate system of a map or aerial photo image can be related to the geographic coordinate system of the area being scanned.</p>",
  keyTerms: [
    { term: "Data collection", def: "The process of gathering and measuring information on variables of our interest, usually carried out systematically." },
    { term: "Field survey", def: "Collection and gathering of information at the local level by conducting primary surveys, through observation, interviews, sketching and measurement." },
    { term: "Base map", def: "The graphic representation at a specified scale of selected fundamental map information, used as a framework upon which additional specialized data may be compiled." },
    { term: "Primary source", def: "A source that constitutes direct, first-hand evidence; for mapping, the spatial and location data received for direct use in making the map." },
    { term: "Secondary source", def: "A source that provides information about an object of study but is not direct, first-hand evidence; hard copy maps used as sources are one example." },
    { term: "Remote sensing", def: "The gathering of geographic information from a distance by an instrument not physically in contact with the mapping site, mainly through aerial photography or satellites." },
    { term: "Global Positioning System (GPS)", def: "A satellite network used to determine the exact location of a place; its receiver must connect with four or more satellites to fix a precise location within a few meters." },
    { term: "Digitizer", def: "A tool used to change images on an analogue form or paper into a digital form on a computer." },
    { term: "Georeferencing", def: "Relating the internal coordinate system of a map or aerial photo image to the geographic coordinate system of the area being scanned." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "A surveyor's GPS receiver is currently connected to three satellites. The surveyor wants the precise location of a farmland corner within a few meters. What is still missing and what must she do?",
      given: "The receiver is connected to 3 satellites; the textbook requirement is 4 or more satellites.",
      formula: "Principle: a receiver needs to connect with four or more satellites to calculate a precise location.",
      substitution: "3 connected satellites is less than the required minimum of 4.",
      calculation: "One more satellite connection brings the receiver to the required reference set.",
      answer: "Connect with at least a fourth satellite; with four or more the receiver fixes the precise location within a few meters."
    },
    {
      problem: "Classify each record as directly collected or remotely sensed: (a) temperature readings recorded at a specific weather station, (b) a satellite image of a river basin.",
      given: "(a) is measured at the source by visiting; (b) is captured from a distance without contact.",
      formula: "Principle: directly collected data are generated at the source of the phenomena; remotely sensed data are measured from remote distances.",
      substitution: "(a) involves direct contact with the phenomena; (b) involves none.",
      calculation: "Station readings are made in person, while the satellite image is captured without visiting the location.",
      answer: "(a) is directly collected data; (b) is remotely sensed data."
    },
    {
      problem: "A mapmaker gathers (a) GPS coordinate readings she collected herself for the base map, and (b) an old printed map that she enlarges as an additional source. Which is the primary source and which is secondary, and what caution applies to the second?",
      given: "(a) is spatial data received for direct use in making the map; (b) is general data of another origin.",
      formula: "Principle: base map data are primary sources; data gathered for other reasons are secondary sources.",
      substitution: "(a) matches the definition of a primary source; (b) matches a secondary source such as a hard copy map.",
      calculation: "Secondary data must be checked for correctness and how up-to-date it is before use.",
      answer: "(a) is primary, (b) is secondary; check that the old map is right and up-to-date, or the final result will be wrong and outdated."
    },
    {
      problem: "You photograph a paper map with a smartphone and transfer the image to a computer. What extra step is needed before the image can be used for mapping, and why?",
      given: "The image comes from a smartphone camera and has no relation yet to the earth's coordinates.",
      formula: "Principle: images from scanners and smartphones must be geo-referenced before use.",
      substitution: "Georeferencing relates the internal coordinate system of the image to the geographic coordinate system of the area.",
      calculation: "Only after this relation is made does the image carry geo-referenced information.",
      answer: "Georeferencing; smartphone images are not automatically geo-referenced, unlike data from a table digitizer."
    }
  ],
  commonMistakes: [
    "Thinking any data about a distant place is remotely sensed, when data you record by visiting the spot is directly collected.",
    "Forgetting that the very first step in making a map is completing a field survey.",
    "Treating every map found in a book as a primary source for your own mapping work.",
    "Using old secondary sources without checking whether the data are right and up-to-date.",
    "Believing a GPS receiver can fix a precise location with fewer than four satellites.",
    "Assuming a smartphone photo of a map is already geo-referenced, unlike data from a digitizer.",
    "Confusing digitization (converting to computer-readable format) with remote sensing (measuring from a distance)."
  ],
  applications: [
    "Planning a mapping project of your kebele by completing a field survey as the first step.",
    "Using a smartphone GPS receiver to document the latitudinal and longitudinal coordinates and elevation of a farm plot.",
    "Cross-checking an old printed map against recent data before enlarging it for a school project.",
    "Downloading existing digital data files from offices such as the Central Statistical Agency instead of re-collecting them.",
    "Counting trees in a farmland by observation as a directly collected record, and capturing a satellite image of the same farmland for comparison.",
    "Scanning an aerial photograph and georeferencing it so it can serve as a base map layer."
  ],
  summary: "Geographic data come from directly collected sources, generated at the phenomena being measured, and from remotely sensed sources such as satellite images gathered without direct contact. The common general sources include hard copy maps, aerial photographs, imagery, survey samples and existing digital files, with a careful check that secondary data is correct and current. The two most important collection tools are the Global Positioning System, which needs four or more satellites to fix location and elevation, and digitizers, which convert paper images to computer-readable form through digitization and georeferencing.",
  visuals: [
    {
      type: "comparison",
      config: {
        title: "Directly Collected vs Remotely Sensed Data",
        left: { name: "Directly collected", items: ["Generated at the source being measured", "Requires visiting the location", "Examples: weather station readings, census, counting trees"] },
        right: { name: "Remotely sensed", items: ["Measured from remote distances", "No direct contact with the phenomena", "Example: satellite images"] }
      }
    },
    {
      type: "mindMap",
      config: {
        title: "Common General Sources of Geographic Data",
        center: "Geographic Data Sources",
        branches: [
          { label: "Maps and photos", items: ["Hard copy (analogue) maps", "Aerial photographs"] },
          { label: "Imagery", items: ["Remotely sensed imagery"] },
          { label: "Field data", items: ["Point data samples from surveys"] },
          { label: "Office records", items: ["Existing digital data files"] },
          { label: "Tools", items: ["GPS", "Digitizers"] }
        ]
      }
    },
    {
      type: "tableVisual",
      config: {
        title: "Tools for Geographic Data Collection",
        headers: ["Tool", "What it does", "Output"],
        rows: [
          ["GPS", "Determines the exact location by connecting with four or more satellites", "Latitude, longitude and elevation values"],
          ["Table digitizer", "Changes images on paper into digital form", "Geo-referenced information"],
          ["Scanner / smartphone", "Digitizes images into computer-readable form", "Image that must be geo-referenced"]
        ]
      }
    }
  ],
  questions: [
    { type: "mcq", q: "The first step in making a map is to:", options: ["print the map", "complete a field survey", "archive the results", "buy a computer"], answer: 1, difficulty: 2, explanation: "The first step in making a map is to complete a field survey, in which surveyors observe, measure and record the area." },
    { type: "mcq", q: "A GPS receiver must connect with at least how many satellites to calculate a precise location within a few meters?", options: ["Two", "Three", "Four", "Twelve"], answer: 2, difficulty: 1, explanation: "The receiver needs to connect with four or more satellites orbiting the earth." },
    { type: "tf", q: "A GPS receiver provides latitudinal and longitudinal coordinate values of an area and its elevation value.", answer: true, difficulty: 1, explanation: "The GPS receiver provides latitudinal and longitudinal coordinate values and the elevation value of the area." },
    { type: "mcq", q: "Which of the following is directly collected data?", options: ["A satellite image", "Counting the number of trees in a farmland by observation", "An aerial photograph", "A scanned map"], answer: 1, difficulty: 2, explanation: "Counting trees in a farmland is observation data generated at the source, so it is directly collected." },
    { type: "short", q: "Name one instrument used in digitization besides the table digitizer.", answer: "scanner|smartphone", difficulty: 1, explanation: "Instruments used in digitization include the table digitizer, the scanner and smartphones." },
    { type: "mcq", q: "The spatial and location data needed to create the base map belong in the category of:", options: ["secondary sources", "primary sources", "attribute data", "continuous data"], answer: 1, difficulty: 2, explanation: "Base map data are primary sources because they are received for direct use in making the map." },
    { type: "tf", q: "A hard copy (analogue) map can serve as a secondary source of geographic data.", answer: true, difficulty: 2, explanation: "Hard copy maps can be used as a secondary source by enlargement or by digitizing on a computer." },
    { type: "concept", q: "Why should data from secondary sources be checked carefully before use?", answer: "must be right and up-to-date|otherwise the final result will be wrong and outdated", difficulty: 2, explanation: "If secondary data is not right and up-to-date, the final result will be wrong and outdated." },
    { type: "mcq", q: "Remote sensing is best described as:", options: ["measuring the location of satellites only", "gathering geographic information from a distance without physical contact with the site", "copying maps into a computer", "interviewing people about a place"], answer: 1, difficulty: 2, explanation: "Remote sensing gathers geographic information from a distance by an instrument not physically in contact with the mapping site." },
    { type: "concept", q: "Define georeferencing in one sentence.", answer: "relating the internal coordinate system of an image to the geographic coordinate system of the area", difficulty: 2, explanation: "Georeferencing means the internal coordinate system of a map or aerial photo image can be related to the geographic coordinate system of the area being scanned." },
    { type: "mcq", q: "Which statement about data from a table digitizer versus a smartphone image is correct?", options: ["Both are automatically geo-referenced", "Digitizer data provides geo-referenced information, while smartphone images must be geo-referenced", "Neither can be used for mapping", "Both require four satellites"], answer: 1, difficulty: 3, explanation: "Data generated by a digitizer provides geo-referenced information, whereas images from scanners and smartphones should be geo-referenced." }
  ]
};

Lessons["g10-geography-ug8-t3"] = {
  overview: "Once collected, geographic data must be represented so people can use it, as maps on paper or as digital data in computers. This lesson contrasts analogue and digital formats, classifies map features as points, lines and areas, and explains the vector and raster data models.",
  objectives: [
    "Describe the two main forms of geographic data representation",
    "List the advantages of the digital format over the analogue format",
    "Classify map features as point, line or area (polygon) data",
    "Explain how the vector data model encodes features with coordinates, vertices and nodes",
    "Describe how the raster data model divides an area into grid cells"
  ],
  simple: "Geographic data representation involves graphical visualization of the data or producing a map of an area. It comes in two main forms: hardcopy, also called analogue format, and digital format. The digital format is increasingly important because digital data are easy to copy and transmit at very high speeds, can be stored at high density in very small spaces, are less subject to physical deterioration than paper, and are easy to transform, process and analyze. A map is a model of the real world in which every geographic feature is defined by its location and characteristics as one of three basic features: a point (one location, such as a water well), a line (a string of coordinates, such as a river or road), or an area, commonly called a polygon, such as an administrative boundary. In digital form the same features are stored in three spatial data models: vector, raster and image.",
  detailed: "<p><b>Two forms of representation.</b> Geographic data representation involves graphical visualization of the data or producing a map of an area. Maps are used to gain better insight and understanding of the area of our interest. There are two main forms of geographic data representations: hardcopy, also known as the <b>analogue format</b>, and the <b>digital format</b>. The digital format is becoming increasingly important in the world today.</p><p><b>Advantages of the digital format.</b> The digital representation of geographical data has enormous advantages over paper maps. It can be used in digital devices such as a personal computer (PC), in information providers such as the internet, and in mass storage devices for many purposes. Digital data are easy to copy and transmit at very high speeds, can be stored at high density in very small spaces, and are less subject to the physical deterioration that affects paper format. Finally, data in digital form are easy to transform, process and analyze.</p><p><b>Points, lines and areas.</b> A map is a model of the real world in which every geographic feature is characterized by its location in space, with reference to a coordinate system, and by its characteristics, typically referred to as attributes. All features on the earth's surface can be defined as one of three basic features. <b>Point data</b> exists when a feature is associated with a single location in space; examples include a telephone network tower, a water well and a weather station. <b>Line data</b> exists when a feature's location is described by a string of spatial coordinates; examples include rivers, roads and pipelines. <b>Area data</b> exists when a feature is described by a closed string of spatial coordinates; an area feature is commonly called a polygon, and examples include forest stands, soil classification areas, administrative boundaries and climate zones. Most polygon data are considered to be homogeneous, and thus they are consistent.</p><p><b>Three spatial data models.</b> In the digital format, the geographic features outlined above are stored and displayed in three basic types of spatial data models: <b>vector</b>, <b>raster</b>, and <b>image</b>. Vector and raster are the two primary spatial data storage techniques in the computer, whereas images reflect pictures or photographs of the landscape.</p><p><b>The vector data model.</b> Vector storage implies the use of vectors (directional lines) to represent a geographic feature. Vector data is characterized by the use of sequential points or vertices to define a linear segment, and each vertex consists of an X coordinate and a Y coordinate, or latitudinal and longitudinal values. A point feature is defined by one coordinate pair of X and Y. Vector lines are also referred to as arcs and consist of a string of vertices terminated by a node; a <b>node</b> is defined as a vertex that starts or ends an arc segment. Polygonal (area) features are defined by a set of closed coordinate pairs.</p><p><b>The raster data model.</b> Raster data models incorporate the use of a grid-cell data structure, where the geographic area is divided into cells identified by row and column; this structure is commonly called a raster. The size of the cells in a tessellated data structure, one characterized by a pattern of repeated shapes that fit together closely without gaps or overlaps, is selected based on the data accuracy and the resolution needed by the user. Since geographic data is rarely distinguished by regularly spaced shapes, cells are classified based on the most common attribute of the cell. Therefore, raster data represent points by a single cell, lines by sequences of neighboring cells, and areas by collections of contiguous cells.</p>",
  keyTerms: [
    { term: "Data representation", def: "Graphical visualization of geographic data or producing a map of an area of interest." },
    { term: "Analogue format", def: "The hardcopy form of geographic data representation, such as a map printed on paper; also called hardcopy format." },
    { term: "Digital format", def: "Representation of geographic data in computer-readable form, used on PCs, the internet and mass storage devices." },
    { term: "Point data", def: "Data for a feature associated with a single location in space, such as a water well or a weather station." },
    { term: "Polygon", def: "An area feature described by a closed string of spatial coordinates, such as an administrative boundary or climate zone." },
    { term: "Vertex", def: "A sequential point in a vector segment, defined by an X coordinate and a Y coordinate or latitudinal and longitudinal values." },
    { term: "Node", def: "A vertex that starts or ends an arc segment in the vector data model." },
    { term: "Raster", def: "A grid-cell data structure in which the geographic area is divided into cells identified by row and column." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "A local map shows a water well, a pipeline and an administrative boundary. Classify each as point, line or area data.",
      given: "The well sits at one location; the pipeline follows a string of coordinates; the boundary is a closed string of coordinates.",
      formula: "Principle: point = a single location; line = a string of coordinates; area (polygon) = a closed string of coordinates.",
      substitution: "The well matches a point, the pipeline a line, and the boundary a polygon.",
      calculation: "Each feature is matched to the definition of its feature type.",
      answer: "Water well = point data; pipeline = line data; administrative boundary = area (polygon) data."
    },
    {
      problem: "A road is stored as an arc containing 12 vertices in sequence. Which vertices act as nodes, and how many nodes does the arc have?",
      given: "The arc consists of a string of 12 vertices; a node is a vertex that starts or ends an arc segment.",
      formula: "Principle: an arc is a string of vertices terminated by nodes at its ends.",
      substitution: "The first vertex starts the segment and the 12th vertex ends it.",
      calculation: "Only the start and end vertices satisfy the definition of a node.",
      answer: "2 nodes: the first vertex and the last (12th) vertex; the 10 between them are ordinary vertices."
    },
    {
      problem: "A raster grid of a 1 km by 1 km farm map is arranged in 8 rows and 10 columns of equal cells. How many cells does the tessellated data structure contain, and how many cells are used to represent a single water well marked on it?",
      given: "8 rows and 10 columns; a raster represents a point feature by a single cell.",
      formula: "Number of cells = number of rows x number of columns.",
      substitution: "8 x 10 = 80 cells.",
      calculation: "Total cells = 80; a point feature occupies one cell of that grid.",
      answer: "80 cells; the water well is represented by a single cell."
    },
    {
      problem: "A school must share its forest stand map with many computers and keep it for years. State, from the lesson, three reasons why a digital copy is safer and easier to distribute than the paper map.",
      given: "Digital data can be copied and transmitted fast, stored at high density in small spaces, and resists deterioration.",
      formula: "Principle: digital representations have enormous advantages over paper maps.",
      substitution: "Copying is easy and transmission is very fast; storage density is high; there is less physical deterioration; transformation, processing and analysis are easy.",
      calculation: "Any three of these advantages solve the sharing and preservation problem.",
      answer: "Easy to copy and transmit at very high speeds; stored at high density in very small spaces; less subject to physical deterioration (and easy to transform, process and analyze)."
    }
  ],
  commonMistakes: [
    "Thinking the analogue format is becoming more important than the digital format in the world today.",
    "Forgetting that a map is a model of the real world and every feature is a point, a line or an area.",
    "Calling a vertex at the middle of an arc a node, when nodes only start or end the arc segment.",
    "Assuming raster cell size is arbitrary, when it is selected based on the data accuracy and resolution the user needs.",
    "Believing raster represents areas the same way as points, when areas are collections of contiguous cells.",
    "Mixing up vector (sequential vertices with X and Y coordinates) and raster (grid cells by row and column) definitions.",
    "Thinking images such as photographs are one of the two vector and raster structures, when images reflect pictures of the landscape."
  ],
  applications: [
    "Choosing the digital format to share a school water-well map quickly through the internet.",
    "Recording a telephone network tower and a weather station as point features on a local base map.",
    "Mapping a river as line data and a climate zone as polygon data when describing a woreda.",
    "Deciding the right raster cell size so the resolution matches the accuracy the user needs.",
    "Storing an archive of maps digitally so they do not suffer the paper deterioration of the past.",
    "Noting that whatever can be drawn on a paper map using point, line or polygon can also be drawn by the vector and raster models in a computer."
  ],
  summary: "Geographic data are represented in two main forms: the hardcopy analogue format and the increasingly important digital format, which copies, transmits and stores data far better for processing and analysis. A map is a model of the real world whose features are points, lines or polygons. In digital form these features are stored in three spatial data models: vector data with vertices, nodes and coordinate pairs, raster data with grid cells classified by rows and columns, and images, which are pictures of the landscape.",
  visuals: [
    {
      type: "comparison",
      config: {
        title: "Analogue vs Digital Representation",
        left: { name: "Analogue (hardcopy)", items: ["Printed on paper or other physical material", "Subject to physical deterioration", "Hard to copy quickly", "Becoming less dominant"] },
        right: { name: "Digital", items: ["Used on PCs, internet and mass storage", "Easy to copy and transmit at very high speeds", "Stored at high density in very small spaces", "Easy to transform, process and analyze"] }
      }
    },
    {
      type: "tableVisual",
      config: {
        title: "The Three Basic Map Features",
        headers: ["Feature type", "Defined by", "Examples"],
        rows: [
          ["Point", "A single location in space", "Telephone network tower, water well, weather station"],
          ["Line", "A string of spatial coordinates", "Rivers, roads, pipelines"],
          ["Area (polygon)", "A closed string of spatial coordinates", "Forest stands, soil classification areas, administrative boundaries, climate zones"]
        ]
      }
    },
    {
      type: "comparison",
      config: {
        title: "Vector vs Raster Data Models",
        left: { name: "Vector", items: ["Uses sequential points or vertices", "Each vertex has X and Y coordinates", "Arcs terminated by nodes", "Polygons are closed coordinate pairs"] },
        right: { name: "Raster", items: ["Uses a grid-cell data structure", "Cells identified by row and column", "Point = one cell; line = neighboring cells", "Area = contiguous cells"] }
      }
    }
  ],
  questions: [
    { type: "mcq", q: "Which of the following is the analogue form of geographic data representation?", options: ["A grid-cell raster file", "A hardcopy map printed on paper", "A vector shapefile", "A satellite image on a computer"], answer: 1, difficulty: 1, explanation: "Hardcopy, also known as analogue format, is the form printed on paper or similar physical material." },
    { type: "tf", q: "Digital data are easy to copy and transmit at very high speeds.", answer: true, difficulty: 1, explanation: "This is one of the listed advantages of the digital format over paper maps." },
    { type: "mcq", q: "Which of these is NOT an advantage of digital geographic data?", options: ["Easy to copy and transmit", "Stored at high density in small spaces", "More subject to physical deterioration than paper", "Easy to transform, process and analyze"], answer: 2, difficulty: 2, explanation: "Digital data is LESS subject to the physical deterioration that affects paper format." },
    { type: "short", q: "Give the common name for an area feature described by a closed string of spatial coordinates.", answer: "polygon", difficulty: 1, explanation: "An area feature is commonly referred to as a polygon." },
    { type: "mcq", q: "Which of the following is an example of point data?", options: ["A river", "A water well", "An administrative boundary", "A forest stand"], answer: 1, difficulty: 1, explanation: "A water well, like a telephone tower or weather station, exists at a single location, so it is point data." },
    { type: "concept", q: "Define a node in the vector data model.", answer: "a vertex that starts or ends an arc segment", difficulty: 2, explanation: "A node is defined as a vertex that starts or ends an arc segment." },
    { type: "tf", q: "Every vertex in a vector segment carries an X coordinate and a Y coordinate.", answer: true, difficulty: 2, explanation: "Each vertex consists of a pair of X and Y coordinates, or latitudinal and longitudinal values." },
    { type: "mcq", q: "In the raster data model, the geographic area is divided into:", options: ["arcs terminated by nodes", "cells identified by row and column", "closed coordinate pairs", "photographs of the landscape"], answer: 1, difficulty: 2, explanation: "Raster data models use a grid-cell data structure identified by row and column." },
    { type: "mcq", q: "The size of raster cells in a tessellated data structure is selected based on:", options: ["the color of the map", "the data accuracy and the resolution needed by the user", "the number of vertices", "the paper size"], answer: 1, difficulty: 3, explanation: "Cell size is selected based on the data accuracy and the resolution needed by the user." },
    { type: "ordering", q: "Match each raster representation to its feature: (a) areas, (b) lines, (c) points, with (1) collections of contiguous cells, (2) sequences of neighboring cells, (3) a single cell.", options: ["a-1, b-2, c-3", "a-3, b-1, c-2", "a-2, b-3, c-1", "a-1, b-3, c-2"], answer: 0, difficulty: 3, explanation: "Raster represents points by a single cell, lines by sequences of neighboring cells, and areas by collections of contiguous cells." },
    { type: "mcq", q: "Why are most polygon data considered homogeneous?", options: ["because they are consistent throughout the area", "because they are always drawn small", "because they contain fewer coordinates", "because they come from satellites only"], answer: 0, difficulty: 2, explanation: "Most polygon data are considered to be homogeneous, and thus they are consistent." }
  ]
};

Lessons["g10-geography-ug8-t4"] = {
  overview: "Mapmaking has advanced from early distorted drawings to accurate satellite maps and, finally, to the Geographic Information System. This lesson traces that history, defines GIS, and examines the components that make it work, ending with the practical steps of building a regional map in ArcMap.",
  objectives: [
    "Trace the historical development of mapmaking from early maps to satellite mapping",
    "Identify the technical advances that made maps larger, more detailed and more accurate",
    "Define the Geographic Information System (GIS) and its purpose",
    "Identify the components of GIS: hardware, software, people, methods and data",
    "Describe the steps and marginal information needed to compile an administrative map in ArcMap"
  ],
  simple: "Mapmaking has been an integral part of human history for thousands of years, and it pre-dates virtually all other forms of written communication, from cave paintings to the ancient maps of Babylon, Greece and Asia. Early maps were a garbled or distorted mass of land, but as centuries passed maps became larger, more detailed and more accurate. Advances since the 18th century in mathematics and astronomy, and the division of the earth into lines of longitude and latitude, allowed mapmakers to draw the continents accurately, while 21st-century improvements in printing, photography, airplanes and satellites made mass production and scanning of nearly the whole earth possible. The Geographic Information System (GIS) is a computer-based system that enables us to store, visualize, analyze and interpret geographic data. Its components are hardware, software, people, methods, and data, and it can be used practically in ArcMap to build a regional administrative map.",
  detailed: "<p><b>A very old skill.</b> Mapmaking has been an integral part of human history for thousands of years. The human activity of graphically representing one's perception of the world is a universally acquired skill that pre-dates virtually all other forms of written communication. From cave paintings to the ancient maps of Babylon, Greece and Asia, right into the 21st century, people have created and used maps to define, explain and navigate their way through the world. Mapping was a significant step in the intellectual development of human beings and serves as a record of the advancement of knowledge passed from one generation to the next.</p><p><b>From distortion to accuracy.</b> Early maps were a garbled or distorted mass of land that bore no resemblance to the actual world. As the centuries passed, maps became larger, more detailed and more accurate. Several technical advances since the 18th century helped mapmakers to accurately draw the general outline of the continents and locate their precise positions; the most notable advances were in mathematics and astronomy, and the dividing of the earth into lines of longitude and latitude.</p><p><b>Modern demands and satellites.</b> There has been an ever increasing demand for maps and greater reliance on maps in the 21st century. Improvements in printing and photography, the mass production of maps, the ability to make accurate reproductions from more accurate data, and the availability of airplanes and satellites made it possible to photograph and provide images of large areas at a time. In particular, the role of satellites is very important: satellites perform continuous scans to provide detailed, up-to-date maps of nearly the entire earth.</p><p><b>What GIS is.</b> During the last few decades, more sophisticated mapping systems appeared, mainly due to the advancement of the geographic information system (GIS). The GIS is a computer-based system that enables us to <b>store</b>, <b>visualize</b>, <b>analyze</b> and <b>interpret</b> geographic data.</p><p><b>Components of GIS.</b> The <b>hardware</b> is the computer and other devices attached to it, such as printers, plotters and scanners; it helps the GIS to operate. The <b>software</b> provides the functions and tools users need to store, analyze and display geographical information, and its key components are GIS software, database software, operating system (OS) software and network software. <b>People</b> are essential because GIS technology is of limited value without people to manage the system and to develop plans for applying it, ranging from administrators, managers and GIS technicians to application experts, end users and consumers. The <b>methods</b> are well-designed plans and application-specific procedures and rules describing how the technology is applied, including guidelines, specifications, standards and procedures. Finally the <b>data</b>, geographic or spatial data, identifies the geographic location of features, and one of the most important requirements is that the data must be accurate; its types include vector data, raster data, image data and attribute data.</p><p><b>Making an administrative map in ArcMap.</b> To produce an administrative map with ArcMap 10.x, download the Ethiopia shapefiles (for example from africaopendata.org), extract them and save them in a folder on the hard drive. Click the connect to folder icon to access the folder with the Ethio-GIS data, then select and add the admin shapefiles etbound01co and etregio01co. Remove the background shade through the symbol selector by choosing hollow, then select the area of interest, for example the Oromia National Regional State, by right-clicking the etregio01co layer, opening its attribute table and highlighting the row for Oromia, and export the selected data to a folder. Finally, in the layout view add the necessary marginal information: a legend, a scale bar, a north arrow, coordinate information, gridlines, and the date of map compilation.</p>",
  keyTerms: [
    { term: "Mapmaking", def: "The human activity of graphically representing one's perception of the world; an integral part of human history that pre-dates other forms of written communication." },
    { term: "Geographic Information System (GIS)", def: "A computer-based system that enables us to store, visualize, analyze and interpret geographic data." },
    { term: "Hardware", def: "The computer and other devices attached to it, such as printers, plotters and scanners, which help the GIS to operate." },
    { term: "Software", def: "The GIS, database, operating system and network software providing the functions and tools users need to store, analyze and display geographic information." },
    { term: "Methods", def: "Well-designed plans and application-specific procedures and rules describing how the technology is applied: guidelines, specifications, standards and procedures." },
    { term: "Attribute data", def: "Data describing the characteristics of a feature; one of the GIS data types alongside vector, raster and image data." },
    { term: "Digital map", def: "The process of collecting, compiling and formatting data into a virtual image that gives an accurate representation of a particular area." },
    { term: "End user", def: "A person who uses the final output of a map or research." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "By the 18th century, mapmakers could draw the general outline of the continents and locate their precise positions. Which technical advance listed in the lesson made this possible, and what did it introduce?",
      given: "Advances in mathematics and astronomy were followed by a division of the surface being mapped.",
      formula: "Principle: the notable 18th-century advances were in mathematics and astronomy, plus the division of the earth by reference lines.",
      substitution: "Applying mathematics and astronomy enabled the division of the earth into lines of longitude and latitude.",
      calculation: "With latitude and longitude lines, positions could be located precisely and outlines drawn accurately.",
      answer: "The advances in mathematics and astronomy, especially dividing the earth into lines of longitude and latitude."
    },
    {
      problem: "Assign each item to its GIS component: (a) a plotter, (b) database software, (c) GIS technicians, (d) guidelines and standards, (e) raster data.",
      given: "The five components are hardware, software, people, methods and data.",
      formula: "Principle: hardware = physical devices; software = programs; people = users and managers; methods = plans and rules; data = the geographic information itself.",
      substitution: "(a) plotter is a device; (b) is a program; (c) are users; (d) are procedures; (e) is geographic information.",
      calculation: "Each item matches exactly one component by definition.",
      answer: "(a) hardware; (b) software; (c) people; (d) methods; (e) data."
    },
    {
      problem: "A disaster agency needs updated maps of a very large bushfire area every few hours. Explain which 21st-century advance meets this demand best and why.",
      given: "The need is large areas photographed repeatedly; possible tools are printing, photography, airplanes and satellites.",
      formula: "Principle: satellites perform continuous scans to provide detailed up-to-date maps of nearly the entire earth.",
      substitution: "Airplanes photograph large areas only when flown; satellites scan continuously.",
      calculation: "Continuous scanning without the delay of a flight satisfies the every-few-hours demand.",
      answer: "Satellites, because their continuous scans provide detailed up-to-date maps of nearly the entire earth."
    },
    {
      problem: "You have added the etregio01co shapefile in ArcMap and want a finished map of the Oromia National Regional State. List, in order, the remaining textbook steps.",
      given: "The regional boundaries are loaded; the region must be selected, exported and given marginal information.",
      formula: "Principle: select the AOI in the attribute table, export the data, then add marginal information in layout view.",
      substitution: "Right-click etregio01co, open the attribute table, highlight Oromia; use data and export data; open layout view.",
      calculation: "Then insert the legend, scale bar, north arrow, coordinate information, gridlines and date of map compilation.",
      answer: "Select Oromia in the attribute table, export the data, then in layout view add the legend, scale bar, north arrow, coordinate information, gridlines and date of map compilation."
    }
  ],
  commonMistakes: [
    "Thinking mapmaking began in the modern era, when it pre-dates virtually all other forms of written communication.",
    "Believing early maps were very accurate, when they were a garbled or distorted mass of land.",
    "Forgetting that advances in mathematics and astronomy, including longitude and latitude, made accurate continental outlines possible.",
    "Defining GIS as merely a computer program, when it is a computer-based system with hardware, software, people, methods and data.",
    "Leaving people or methods out when listing the components of GIS.",
    "Overlooking the demand that GIS data must be accurate.",
    "Producing a regional map in ArcMap without the marginal information such as the legend, scale bar, north arrow, gridlines and date of compilation."
  ],
  applications: [
    "Explaining why students in the 21st century rely more on maps than ever before, from phone navigation to planning.",
    "Connecting grade 12 geography debates to the record of knowledge carried by maps through generations.",
    "Using satellite scan images to keep a map of a changing river or forest current.",
    "Identifying the five GIS components in a school computer lab: the computers, the software, the teachers and technicians, the procedures and the data.",
    "Classifying the raster layers you gather for a local project as vector, raster, image or attribute data.",
    "Following the ArcMap steps to produce an administrative map of your own region, complete with a legend, scale bar, north arrow and date."
  ],
  summary: "Mapmaking is thousands of years old and pre-dates almost all other forms of written communication; early distorted maps grew accurate after advances in mathematics and astronomy and the division of the earth into longitude and latitude, and satellite scans now keep maps of nearly the whole earth up to date. The Geographic Information System is a computer-based system that stores, visualizes, analyzes and interprets geographic data. Its success rests on its components: hardware, software, people, methods and accurate data, exercised practically in ArcMap.",
  visuals: [
    {
      type: "steps",
      config: {
        title: "Historical Development of Mapmaking",
        steps: [
          { label: "Earliest maps", detail: "Graphic representation of the world from cave paintings and the ancient maps of Babylon, Greece and Asia." },
          { label: "Distorted maps", detail: "Early maps were a garbled or distorted mass of land that bore no resemblance to the actual world." },
          { label: "18th century", detail: "Advances in mathematics and astronomy, and dividing the earth into longitude and latitude, brought accurate outlines." },
          { label: "Modern era", detail: "Better printing and photography and mass production allowed accurate reproductions from more accurate data." },
          { label: "Air and space", detail: "Airplanes and satellites photograph large areas; satellites scan continuously for up-to-date maps of nearly the entire earth." },
          { label: "GIS age", detail: "Sophisticated mapping systems appeared in recent decades thanks to the Geographic Information System." }
        ]
      }
    },
    {
      type: "tableVisual",
      config: {
        title: "Components of GIS",
        headers: ["Component", "What it includes"],
        rows: [
          ["Hardware", "The computer and attached devices such as printers, plotters and scanners"],
          ["Software", "GIS software, database software, operating system (OS) and network software"],
          ["People", "Administrators, managers, GIS technicians, application experts, end users and consumers"],
          ["Methods", "Guidelines, specifications, standards and procedures for applying the technology"],
          ["Data", "Vector, raster, image and attribute data, which must be accurate"]
        ]
      }
    },
    {
      type: "qa",
      config: {
        title: "ArcMap Quick-Check",
        pairs: [
          { q: "What is added to an ArcMap map in the layout view?", a: "Marginal information: legend, scale bar, north arrow, coordinate information, gridlines and the date of map compilation." },
          { q: "Which shapefile is used to select a regional boundary such as Oromia?", a: "etregio01co; the region is highlighted through its attribute table." },
          { q: "How is the background shade of added shapefiles removed?", a: "By clicking the small square symbols and choosing hollow in the symbol selector." },
          { q: "What must be true of the data in a GIS?", a: "The data must be accurate." }
        ]
      }
    }
  ],
  questions: [
    { type: "mcq", q: "According to the lesson, the human activity of graphically representing one's perception of the world:", options: ["began in the 21st century", "pre-dates virtually all other forms of written communication", "was invented in Ethiopia", "began with satellites"], answer: 1, difficulty: 2, explanation: "Mapmaking is a universally acquired skill that pre-dates virtually all other forms of written communication." },
    { type: "tf", q: "Early maps were highly accurate drawings of the actual world.", answer: false, difficulty: 1, explanation: "Early maps were a garbled or distorted mass of land that bore no resemblance to the actual world." },
    { type: "mcq", q: "Which advances helped mapmakers accurately draw the general outline of the continents from the 18th century onward?", options: ["Advances in mathematics and astronomy, plus longitude and latitude", "The invention of paper only", "The invention of the computer", "The discovery of electricity"], answer: 0, difficulty: 2, explanation: "Advances in mathematics and astronomy and the division of the earth into lines of longitude and latitude were among the most notable." },
    { type: "mcq", q: "The Geographic Information System (GIS) is best defined as:", options: ["a printer for maps", "a satellite network", "a computer-based system that stores, visualizes, analyzes and interprets geographic data", "a paper map of the earth"], answer: 2, difficulty: 2, explanation: "GIS is a computer-based system enabling us to store, visualize, analyze and interpret geographic data." },
    { type: "short", q: "Name any three components of GIS.", answer: "hardware|software|people|methods|data", difficulty: 2, explanation: "The components of GIS are hardware, software, people, methods and data." },
    { type: "mcq", q: "Which of the following belongs to GIS hardware?", options: ["Network software", "A plotter", "Guidelines", "Attribute data"], answer: 1, difficulty: 1, explanation: "Hardware includes the computer and attached devices such as printers, plotters and scanners." },
    { type: "concept", q: "Why is the role of satellites so important in 21st-century mapping?", answer: "they perform continuous scans|provide up-to-date maps of nearly the entire earth", difficulty: 2, explanation: "Satellites perform continuous scans to provide detailed up-to-date maps of nearly the entire earth." },
    { type: "concept", q: "List any four pieces of marginal information required in the final layout of an ArcMap administrative map.", answer: "legend|scale bar|north arrow|coordinate information|gridlines|date of map compilation", difficulty: 2, explanation: "The layout must include a legend, scale bar, north arrow, coordinate information, gridlines and the date of map compilation." },
    { type: "mcq", q: "In the ArcMap exercise, which shapefile would you use to select a regional boundary such as the Oromia National Regional State?", options: ["etbound01co", "etregio01co", "a satellite image", "a scanned map"], answer: 1, difficulty: 3, explanation: "The region is selected by right-clicking the etregio01co layer and highlighting Oromia in its attribute table." },
    { type: "tf", q: "GIS data must be accurate no matter what type of data it is.", answer: true, difficulty: 1, explanation: "One of the most important things about the data component is that the data must be accurate." },
    { type: "ordering", q: "Arrange the ArcMap steps in the correct order.", options: ["Add the marginal information in layout view", "Download and extract the Ethiopia shapefiles into a folder", "Select the area of interest in the attribute table and export the data", "Connect to the folder and add etbound01co and etregio01co"], answer: 1, difficulty: 3, explanation: "The order is: download and extract, connect and add shapefiles, select and export, then add marginal information in layout view." }
  ]
};

Lessons["g10-geography-ug8-t5"] = {
  overview: "Raw numbers rarely convince people until they are shown as a picture of data. This lesson explains why graphs, charts and diagrams strengthen presentations, and how to choose among the bar graph, line graph, pie chart and diagram, with genuine computation of chart values.",
  objectives: [
    "Explain why presentations using graphs, charts and diagrams are powerful",
    "Identify the computer programs used to produce them, such as Microsoft Excel and SPSS",
    "State what a bar graph shows and when to use it",
    "Compute percentages and pie chart angles from raw data",
    "Interpret trends and choose the right graph, chart or diagram for a dataset"
  ],
  simple: "Many studies and textbooks use data and numbers, and presentations with graphs, charts and diagrams help the presenter draw and keep the attention of the listeners and produce a profound evidence-based work. They are very important in describing trends, making comparisons, or showing relationships between two or more items. Computer programs such as Microsoft Excel, Microsoft Word and spreadsheets like SPSS are widely used for this. A bar graph shows relationships between data series that are independent of each other, and the height or length of a bar indicates the measured value or frequency. A line graph represents how data has changed over time, such as how temperature varies within one year. A pie chart visualizes how a whole is divided into parts, showing a percentage distribution. A diagram is a plan or outline showing how separate parts work and overlap at connecting points.",
  detailed: "<p><b>Why visual presentations matter.</b> Many studies, researches, and textbooks use data and numbers. Presentations using charts, graphs and diagrams help the presenter draw and keep the attention of the listeners, and the work becomes profound and evidence-based. Listeners will also understand and memorize at least the main points of the presentation. These tools are very important in describing trends, making a comparison, or showing relationships between two or more items.</p><p><b>Choosing and using programs.</b> Computer programs such as Microsoft Excel, Microsoft Word, and other spreadsheets like SPSS (Statistical Package for the Social Sciences) are widely used for making graphs, charts and diagrams. Bar graphs, line graphs and pie charts can be prepared in Microsoft Excel, while diagrams can be drawn in Microsoft Word via the inserted shapes, including text inside the shapes.</p><p><b>Bar graphs.</b> A bar graph is used to show relationships between different data series that are independent of each other. In this case, the height or length of the bar indicates the measured value or frequency. The lesson gives the example of a bar graph as the most widespread visual for presenting rainfall data at Gore Town.</p><p><b>Line graphs.</b> A line graph represents how data has changed over time. This type of chart is especially useful when we want to demonstrate trends or numbers that are connected, for example how temperature varies within one year.</p><p><b>Pie charts.</b> A pie chart is designed to visualize how a whole is divided into various parts. Each segment of the pie is a particular category within the total data set, and in this way it represents a percentage distribution of the variables under study.</p><p><b>Diagrams.</b> A diagram is a plan, drawing or outline created to illustrate how separate parts work and overlap at the connecting points. The lesson shows how to draw the components of sustainable development in Microsoft Word by inserting shapes, connecting them, and entering text such as the diagram's main labels inside the circles.</p>",
  keyTerms: [
    { term: "Bar graph", def: "A graph used to show relationships between data series that are independent of each other; the height or length of the bar indicates the measured value or frequency." },
    { term: "Line graph", def: "A graph that represents how data has changed over time; useful for demonstrating trends or connected numbers, such as temperature variation within a year." },
    { term: "Pie chart", def: "A circular chart that shows how a whole is divided into parts; each segment is a category and the whole is a percentage distribution." },
    { term: "Diagram", def: "A plan, drawing or outline used to illustrate how separate parts work and overlap at the connecting points." },
    { term: "SPSS", def: "The Statistical Package for the Social Sciences, a spreadsheet widely used for making graphs, charts and diagrams." },
    { term: "Variable", def: "A data item that can take more than one value, for example a qualitative variable like color or a quantitative one like the number of students." },
    { term: "Qualitative variable", def: "A variable whose categories are named qualities, such as the color black or red." },
    { term: "Quantitative variable", def: "A variable whose values are real numbers, such as the number of male and female students in a class." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "A class survey records 27 male and 23 female students, the example data given in the textbook glossary. Compute the percentage and the pie chart angle for each group.",
      given: "Male = 27; female = 23; total = 27 + 23 = 50.",
      formula: "Percentage = (value / total) x 100; angle = (value / total) x 360.",
      substitution: "Male: 27/50 = 0.54; Female: 23/50 = 0.46.",
      calculation: "Male: 0.54 x 360 = 194.4; Female: 0.46 x 360 = 165.6; check 194.4 + 165.6 = 360.",
      answer: "Male = 54 percent spans 194.4 units of arc; female = 46 percent spans 165.6 units; together 360."
    },
    {
      problem: "On a pie chart of land use in a kebele, one segment sweeps 72 of the full 360. What percentage of the kebele does that land use cover?",
      given: "Segment size = 72; full circle = 360.",
      formula: "Percentage = (segment / 360) x 100.",
      substitution: "(72 / 360) x 100 = 0.2 x 100.",
      calculation: "0.2 x 100 = 20.",
      answer: "20 percent of the kebele."
    },
    {
      problem: "A bar graph of annual rainfall has a vertical axis from 0 to 1,000 mm marked by 10 equal steps, and one bar for a rainy season town rises to 6.5 steps. Read the rainfall value it represents.",
      given: "Axis maximum = 1,000 mm; steps = 10; bar height = 6.5 steps.",
      formula: "Value per step = axis maximum / number of steps; rainfall = steps x value per step.",
      substitution: "Value per step = 1,000 / 10 = 100 mm; rainfall = 6.5 x 100.",
      calculation: "6.5 x 100 = 650 mm.",
      answer: "The bar represents 650 mm of rainfall."
    },
    {
      problem: "Match the presentation type to the task: (a) comparing rainfall amounts recorded at four different towns, (b) showing how temperature changed month by month in one year, (c) showing the shares of farmland, forest and grazing land out of a total, (d) illustrating how the economic, social and environmental parts of sustainable development connect.",
      given: "The choices are bar graph, line graph, pie chart and diagram.",
      formula: "Principle: independent series = bar graph; change over time = line graph; parts of a whole = pie chart; parts connecting = diagram.",
      substitution: "(a) has independent series; (b) shows a trend over time; (c) is a percentage distribution of a whole; (d) shows overlap at connecting points.",
      calculation: "Each task maps to exactly one presentation type from the lesson.",
      answer: "(a) bar graph; (b) line graph; (c) pie chart; (d) diagram."
    }
  ],
  commonMistakes: [
    "Using a pie chart for several series that are independent of each other, when a bar graph is the right tool.",
    "Forgetting that the height or length of a bar indicates the measured value or frequency.",
    "Adding categories directly onto a pie chart without converting them to a percentage distribution of the whole.",
    "Choosing a line graph for unconnected values instead of for numbers connected over time, such as a trend.",
    "Confusing SPSS (Statistical Package for the Social Sciences) with a drawing program rather than a spreadsheet.",
    "Drawing a diagram without fixing how the separate parts work and overlap at the connecting points.",
    "Presenting raw data directly to listeners instead of transforming it into tables, charts or graphs for visualization."
  ],
  applications: [
    "Collecting the sex and age data of students in your class and drawing a pie chart of the sex distribution, as the unit project work asks.",
    "Using a bar graph to compare annual rainfall at Gore with another town during a geography presentation.",
    "Drawing a line graph of monthly temperature values over one year to show the trend.",
    "Preparing a diagram of the components of sustainable development in Microsoft Word for a class debate.",
    "Choosing SPSS or Microsoft Excel in future studies to make your projects evidence-based.",
    "Helping listeners memorize the main points of a school report by turning its numbers into charts."
  ],
  summary: "Presentations that use graphs, charts and diagrams draw and keep the attention of listeners, produce profound evidence-based work, and are essential for describing trends, making comparisons and showing relationships. Bar graphs suit independent data series, line graphs show change over time, pie charts display how a whole divides into percentage parts, and diagrams show how parts connect and overlap. Microsoft Excel, Microsoft Word and SPSS are the common tools for producing them.",
  visuals: [
    {
      type: "tableVisual",
      config: {
        title: "Choosing the Right Presentation",
        headers: ["Type", "Best for", "Example from the unit"],
        rows: [
          ["Bar graph", "Relationships between independent data series; value or frequency shown by bar height or length", "Presenting rainfall data at Gore Town"],
          ["Line graph", "How data has changed over time; trends and connected numbers", "How temperature varies within one year"],
          ["Pie chart", "How a whole is divided into parts (percentage distribution)", "Sex distribution of a class"],
          ["Diagram", "How separate parts work and overlap at connecting points", "Components of sustainable development drawn in Word"]
        ]
      }
    },
    {
      type: "steps",
      config: {
        title: "Making a Pie Chart from Raw Data",
        steps: [
          { label: "Total", detail: "Add all category values to get the whole, for example 27 + 23 = 50 students." },
          { label: "Percentage", detail: "Divide each category value by the total and multiply by 100." },
          { label: "Angle", detail: "Multiply each fraction by 360 to get the angle of each segment." },
          { label: "Draw and label", detail: "Sweep the calculated angles on the circle and label each segment with its category and percentage." },
          { label: "Check", detail: "All segment angles must add up to 360." }
        ]
      }
    },
    {
      type: "qa",
      config: {
        title: "Exam Quick-Check",
        pairs: [
          { q: "Which chart shows relationships between data series that are independent of each other?", a: "The bar graph; the height or length of the bar indicates the measured value or frequency." },
          { q: "Which chart is best to demonstrate a trend over time?", a: "The line graph, such as how temperature varies within one year." },
          { q: "What does a pie chart represent?", a: "How a whole is divided into various parts, as a percentage distribution of the variables." },
          { q: "What is a diagram?", a: "A plan, drawing or outline to illustrate how separate parts work and overlap at the connecting points." }
        ]
      }
    }
  ],
  questions: [
    { type: "mcq", q: "Which chart is used to show relationships between different data series that are independent of each other?", options: ["Pie chart", "Line graph", "Bar graph", "Diagram"], answer: 2, difficulty: 1, explanation: "A bar graph shows relationships between data series that are independent of each other." },
    { type: "mcq", q: "A line graph is especially useful when you want to demonstrate:", options: ["how a whole divides into parts", "trends or numbers connected over time", "independent categories", "a plan with connecting points"], answer: 1, difficulty: 1, explanation: "A line graph represents how data has changed over time, which is useful for trends or connected numbers." },
    { type: "tf", q: "The height or length of a bar in a bar graph indicates the measured value or frequency.", answer: true, difficulty: 1, explanation: "This is exactly what the bar height or length indicates." },
    { type: "mcq", q: "SPSS stands for:", options: ["Statistical Package for the Social Sciences", "Survey Program for Students and Schools", "Special Presentation System for Statistics", "Satellite Position System for Surveys"], answer: 0, difficulty: 2, explanation: "SPSS is the Statistical Package for the Social Sciences, used like a spreadsheet for making graphs and charts." },
    { type: "concept", q: "Why do presenters use graphs, charts and diagrams instead of raw numbers? Give any two reasons from the lesson.", answer: "draw and keep attention|evidence-based work|help understand and memorize main points|describe trends|make comparisons|show relationships", difficulty: 2, explanation: "They draw and keep attention, make the work evidence-based, help listeners understand and memorize main points, and describe trends, comparisons and relationships." },
    { type: "short", q: "A pie segment must cover 25 percent of a circle. How many units of arc is that out of 360? Give just the number.", answer: "90", difficulty: 3, explanation: "0.25 x 360 = 90." },
    { type: "mcq", q: "The unit project work asks students to collect the sex and age data of the class and draw:", options: ["a line graph", "a pie chart of the sex distribution", "a map", "a satellite image"], answer: 1, difficulty: 2, explanation: "The project work is to draw a pie chart showing the sex distribution of students in the class." },
    { type: "concept", q: "Which program would you mainly use to draw the components of sustainable development as overlapping circles, and which for a rainfall bar graph?", answer: "word for the diagram and excel for the bar graph|microsoft word and microsoft excel", difficulty: 2, explanation: "Diagrams can be drawn in Microsoft Word, while bar graphs, line graphs and pie charts can be prepared in Microsoft Excel." },
    { type: "tf", q: "Each segment of a pie chart represents a particular category within the total data set.", answer: true, difficulty: 1, explanation: "Pie chart segments represent categories of the whole, showing its percentage distribution." },
    { type: "concept", q: "Define a diagram in one sentence.", answer: "a plan drawing or outline to illustrate how separate parts work and overlap at the connecting points", difficulty: 2, explanation: "A diagram is a plan, drawing or outline created to illustrate how separate parts work and overlap at the connecting points." },
    { type: "ordering", q: "Arrange the pie chart computation steps in the correct order.", options: ["Convert each fraction to an angle by multiplying by 360", "Add all category values to find the total", "Draw the circle and label each segment", "Divide each category value by the total to get its fraction"], answer: 1, difficulty: 2, explanation: "First total the values, then find each fraction, then convert to angles, then draw and label so all angles sum to 360." }
  ]
};
