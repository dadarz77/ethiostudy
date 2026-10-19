/* Content: Grade 9 Economics - Unit 2: The Basic Economic Problems and Economic Systems (4 topics)
   Source: MoE Economics Grade 9 Student Textbook, Unit 2. */
window.Lessons = window.Lessons || {};

Lessons["g9-economics-ue2-t1"] = {
  overview: "Scarcity of resources relative to unlimited human wants is the fundamental economic problem of every society. This lesson defines scarcity, choice and opportunity cost, separates scarcity from shortage, and introduces the production possibilities frontier.",
  objectives: [
    "Define scarcity, choice, opportunity cost and the production possibilities frontier",
    "Explain the imbalance between unlimited human wants and limited resources",
    "Distinguish between scarcity and shortage of resources",
    "Show how scarcity implies choice and choice implies opportunity cost",
    "Calculate the opportunity cost of a good from a production possibilities table"
  ],
  simple: "Every society faces scarcity: the resources used to produce goods and services are limited, but human wants are unlimited. Scarcity means the imbalance between our wants and the means of satisfying them. Because output is limited, we cannot have everything, so we must make choices, and every choice has an opportunity cost, the value of the next best alternative we sacrifice. Scarcity is different from shortage: scarcity is universal and endless, while a shortage is a short-term problem at the prevailing price. Economists use the production possibilities frontier (PPF) to show the maximum combinations of two goods an economy can produce, and it turns out that producing more of one good always costs some of the other.",
  detailed: "<p><b>Scarcity.</b> The fundamental economic problem that any human society faces is scarcity. Scarcity refers to the fact that all economic resources a society wants to use to produce goods and services are finite or limited in supply. Being limited must be understood in relation to human wants: scarcity reflects the imbalance between our wants and the means to satisfy those wants. Households, producers and the whole economy all face scarcity of natural and human-made resources, so resources must be allocated efficiently among the prevailing choices. If resources were fully abundant, there would be no economic problems at all.</p><p><b>Scarcity is not shortage.</b> A good is scarce if the amount available is less than the amount people wish to have at zero price. A shortage exists when people are unable to get the amount they want at the prevailing price. A shortage is a specific and short-term problem, while scarcity is a universal and endless problem.</p><p><b>Choice.</b> If resources are scarce, output will be limited, and if output is limited we cannot satisfy all of our wants, so a choice must be made. Individuals, firms and governments are forced to choose what output to produce, in what quantity, and what output not to produce. In short, scarcity implies choice, and choice in turn implies an opportunity cost: scarcity, limited resource, limited output, choice, opportunity cost.</p><p><b>Opportunity cost.</b> In a world of scarcity, a decision to have more of one thing means a decision to have less of another. Opportunity cost is the amount or value of the next best alternative that must be sacrificed to obtain one more unit of a product. For example, if the same resources can produce either one metre of cloth or 20 computers, the opportunity cost of one metre of cloth is the value of 20 computers. Opportunity cost is measured in goods and services, not in money, and it follows the principle of substitution: when the opportunity cost of an activity rises, people substitute other activities in its place.</p><p><b>The production possibilities frontier.</b> The PPF or PPC is a curve showing the various possible combinations of goods and services a society can produce given its resources and technology. To draw it we assume: resources are fixed in quantity and quality; only two broad classes of output are produced; the economy operates at full employment and full production; technology does not change; and some inputs are better adapted to producing one good than the other (specialization). In the textbook example an economy chooses among five alternatives, producing from 0 to 500 metric tons of food paired with 0 to 2000 computers. All points on the curve are attainable and efficient; a point inside it is attainable but inefficient; a point outside it is unattainable.</p><p><b>What the PPF teaches.</b> The PPF describes scarcity (even using all resources optimally, output cannot be infinite), choice (any movement along the curve is a shift in preference) and opportunity cost (producing more of one good requires sacrificing some of the other, shown by the downward slope). Because resources are not completely adaptable to alternative uses, the law of increasing opportunity cost applies: as we produce more of a product, the opportunity cost per additional unit increases, which makes the PPF concave to the origin.</p><p><b>Economic growth and the PPF.</b> Economic growth, an increase in the total output level, occurs when the quantity and quality of economic resources increase or when technology advances. It is represented by an outward shift of the PPF. An economy can also grow because productivity rises in only one sector, for example improved technology applied only to food or only to computers; this is called asymmetric growth.</p>",
  keyTerms: [
    { term: "Scarcity", def: "The imbalance between unlimited human wants and the limited resources available to satisfy them; the fundamental economic problem." },
    { term: "Shortage", def: "A situation in which people are unable to get the amount they want of a good at the prevailing price; specific and short-term." },
    { term: "Choice", def: "Selecting what to produce and consume, in what quantity, because scarce output cannot satisfy all wants." },
    { term: "Opportunity cost", def: "The amount or value of the next best alternative that must be sacrificed to obtain one more unit of a product." },
    { term: "Production possibilities frontier (PPF)", def: "A curve showing the possible combinations of goods and services a society can produce given its resources and technology." },
    { term: "Production efficiency", def: "Producing the maximum level of output without lowering the output of another product." },
    { term: "Resource allocation", def: "The distribution of finite resources to specified purposes selected from among several feasible possibilities." },
    { term: "Law of increasing opportunity cost", def: "As more of a product is produced, the opportunity cost per additional unit increases, making the PPF concave to the origin." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "A country can use a given amount of resources to produce either one metre of cloth or 20 computers. What is the opportunity cost of one metre of cloth?",
      given: "The same resources produce either one metre of cloth or 20 computers.",
      formula: "Opportunity cost = the value of the next best alternative sacrificed.",
      substitution: "Choosing cloth means giving up the 20 computers those resources could have produced.",
      calculation: "The text states directly that if resources can produce one metre of cloth or 20 computers, the opportunity cost of the cloth is the computers forgone.",
      answer: "The opportunity cost of one metre of cloth is the value of 20 computers."
    },
    {
      problem: "Using the textbook table, the economy moves from alternative B (420 units of food, 500 computers) to alternative C (320 units of food, 1000 computers). What is the opportunity cost of producing one more computer?",
      given: "Alternative B: 420 metric tons of food and 500 computers. Alternative C: 320 metric tons of food and 1000 computers.",
      formula: "Opportunity cost per computer = food sacrificed divided by computers gained (absolute value).",
      substitution: "Food lost = 420 - 320 = 100 metric tons; computers gained = 1000 - 500 = 500.",
      calculation: "100 metric tons of food divided by 500 computers = 0.2 metric tons of food per computer.",
      answer: "Each extra computer costs 0.2 metric tons of food when moving from B to C."
    },
    {
      problem: "A student says that a point drawn inside the PPF gives maximum output and a point outside it can be reached with better planning. Correct the student.",
      given: "Point Q lies inside the curve and point R lies outside it.",
      formula: "Rule: points on the PPF are attainable and efficient; inside is attainable but inefficient; outside is unattainable.",
      substitution: "Point Q is attainable but wastes resources; point R exceeds what resources and technology allow.",
      calculation: "Better planning cannot make an outside point attainable; only more resources or better technology (growth) can shift the frontier outward.",
      answer: "Point Q is attainable but inefficient, and point R is unattainable; only points on the curve are efficient."
    },
    {
      problem: "An economy raises output per worker in food production only through better seeds, while computer technology is unchanged. What does this do to the PPF?",
      given: "Technology advances in one sector only; the other sector is unchanged.",
      formula: "Principle: growth from a productivity increase in one sector is asymmetric growth.",
      substitution: "The food axis intercept of the PPF expands while the computer intercept stays fixed.",
      calculation: "Improved technology applied to only one good shifts the PPF along only that axis.",
      answer: "The PPF shifts outward along the food axis only; this is asymmetric growth."
    }
  ],
  commonMistakes: [
    "Confusing scarcity with shortage; a shortage is short-term and price-related while scarcity is universal and endless.",
    "Thinking scarcity is absolute rather than relative to human wants.",
    "Saying opportunity cost is measured in money; it is measured in goods and services sacrificed.",
    "Forgetting that every choice has an opportunity cost, even when no money changes hands.",
    "Believing a point outside the PPF could be reached by using resources more efficiently.",
    "Assuming a point inside the PPF is efficient; it is attainable but wasteful.",
    "Ignoring the law of increasing opportunity cost and drawing the PPF as a straight line."
  ],
  applications: [
    "Deciding whether to spend a family's limited monthly budget on food or on school materials.",
    "A student choosing between two extra hours of study and helping in the family shop, and accepting the opportunity cost of either choice.",
    "Explaining why the same plot of land in Ethiopia cannot simultaneously grow teff and be used for a factory.",
    "Using the PPF to argue that a country must invest in more resources and better technology to shift its frontier outward.",
    "Noticing that when the opportunity cost of one activity rises, people substitute other activities, such as taking a bus instead of a taxi when fares increase."
  ],
  summary: "Scarcity, the imbalance between unlimited wants and limited resources, is the fundamental economic problem that forces individuals, firms and governments to choose, and every choice has an opportunity cost, the next best alternative sacrificed. Scarcity differs from shortage, which is a short-term inability to buy what people want at the prevailing price. The production possibilities frontier shows the maximum attainable combinations of two goods, illustrates scarcity, choice and opportunity cost, bends because of increasing opportunity cost, and shifts outward with economic growth.",
  visuals: [
    {
      type: "comparison",
      config: {
        title: "Scarcity vs Shortage",
        left: { name: "Scarcity", items: ["Amount available is less than wanted even at zero price", "Universal to all societies", "Endless, never fully solved", "Root of all economic problems"] },
        right: { name: "Shortage", items: ["People cannot buy what they want at the prevailing price", "Specific to a market", "Short-term", "Can end when supply or price adjusts"] }
      }
    },
    {
      type: "steps",
      config: {
        title: "From Scarcity to Opportunity Cost",
        steps: [
          { label: "Scarcity", detail: "Wants are unlimited but resources are limited." },
          { label: "Limited output", detail: "Scarce resources mean total production is limited." },
          { label: "Choice", detail: "We must choose what to produce, in what quantity, and what not to produce." },
          { label: "Opportunity cost", detail: "Every choice sacrifices the next best alternative." }
        ]
      }
    },
    {
      type: "tableVisual",
      config: {
        title: "Alternative Production Possibilities (Table 2.1)",
        headers: ["Alternative", "Food (metric tons)", "Computers (number)"],
        rows: [
          ["A", "500", "0"],
          ["B", "420", "500"],
          ["C", "320", "1000"],
          ["D", "180", "1500"],
          ["E", "0", "2000"]
        ]
      }
    }
  ],
  questions: [
    { type: "mcq", q: "The fundamental economic problem that any human society faces is:", options: ["poverty", "scarcity", "unemployment", "inflation"], answer: 1, difficulty: 1, explanation: "The textbook states that the fundamental economic problem any human society faces is scarcity." },
    { type: "tf", q: "If resources were fully abundant, there would be no economic problems at all.", answer: true, difficulty: 1, explanation: "Scarcity of resources generates economic problems, so full abundance would remove them." },
    { type: "mcq", q: "A good is said to be scarce when:", options: ["it is expensive", "the amount available is less than the amount people wish to have at zero price", "the government stops producing it", "its supply falls this year"], answer: 1, difficulty: 2, explanation: "Scarcity compares the available amount with the amount people wish to have even at zero price." },
    { type: "concept", q: "Give the term for the value of the next best alternative that must be sacrificed to obtain one more unit of a product.", answer: "opportunity cost", difficulty: 1, explanation: "That is the definition of opportunity cost." },
    { type: "mcq", q: "Opportunity cost is measured in terms of:", options: ["money", "goods and services", "taxes", "prices only"], answer: 1, difficulty: 2, explanation: "Opportunity cost is measured in goods and services, not in terms of money." },
    { type: "tf", q: "A shortage is a specific and short-term problem, while scarcity is a universal and endless problem.", answer: true, difficulty: 2, explanation: "The textbook notes exactly this difference between shortage and scarcity." },
    { type: "mcq", q: "Any point outside the production possibilities frontier is:", options: ["attainable but inefficient", "attainable and efficient", "unattainable", "a sign of economic growth"], answer: 2, difficulty: 2, explanation: "Points outside the PPF cannot be produced with the given resources and technology." },
    { type: "short", q: "What shape does the PPF take because of the law of increasing opportunity cost?", answer: "concave to the origin|concave", difficulty: 2, explanation: "Rising opportunity cost per extra unit makes the PPF concave to the origin." },
    { type: "concept", q: "Moving along a PPF from alternative B (420 food, 500 computers) to C (320 food, 1000 computers), state the opportunity cost of one additional computer.", answer: "0.2 metric tons of food|0.2 metric ton of food|0.2 units of food", difficulty: 3, explanation: "100 metric tons of food sacrificed divided by 500 computers gained gives 0.2 metric tons of food per computer." },
    { type: "ordering", q: "Put the chain of economic logic in the correct order.", options: ["Choice", "Limited output", "Scarcity of resources", "Opportunity cost"], answer: 2, difficulty: 2, explanation: "The order is: scarcity, limited output, choice, opportunity cost." },
    { type: "tf", q: "Asymmetric growth occurs when an economy grows because productivity increases in only one sector of the economy.", answer: true, difficulty: 3, explanation: "Asymmetric growth is growth in productivity in one sector, which shifts the PPF along only one axis, as with improved technology applied to either food or computers." }
  ]
};

Lessons["g9-economics-ue2-t2"] = {
  overview: "Because resources are scarce, every economic system must answer three central questions: what to produce, how to produce, and for whom to produce. This lesson explains each problem and the choices behind it.",
  objectives: [
    "Define the basic economic problems, also called central problems of an economy",
    "Explain the problem of the allocation of resources, the question of what to produce",
    "Describe the choice of technique between labour-intensive and capital-intensive methods",
    "Explain the problem of distribution, the question of for whom to produce",
    "Relate the central problems to the effects of scarcity on individuals, firms and society"
  ],
  simple: "The basic economic problems are the problems every economic system faces because resources are scarce. They are common to all economies, which is why they are also called the central problems of an economy. Every society must answer three questions. First, what goods and services to produce, called the problem of allocation of resources: consumption or capital goods, civil or military goods, necessities or luxuries. Second, how to produce them, called the choice of technique: using more labour relative to capital, or more capital relative to labour. Third, for whom to produce, called the problem of distribution: whether the national product should serve a few rich people or the majority of the population.",
  detailed: "<p><b>What the central problems are.</b> Economic problems which an economic system faces owing to the scarcity of resources are known as basic economic problems. They are common to all economic systems and are also called the central problems of an economy. Because of scarcity, every modern society must answer three basic questions: what goods and services are to be produced, how to produce them, and for whom they are to be produced.</p><p><b>What to produce: allocation of resources.</b> This question is also called the problem of the allocation of resources. Every economy must decide the type and quantity of goods to be produced, making choices between consumption and capital goods, civil and military goods, and necessity and luxury goods. Choosing more capital goods means fewer consumer goods today, so this allocation shapes future welfare.</p><p><b>How to produce: choice of technique.</b> Once an economy has decided what and how much to produce, it must choose among alternative methods or techniques of production. Wheat, for example, can be produced with primitive tools and manual labour, or with modern machinery and some labour. Techniques fall into two groups. A labour-intensive technique uses more labour relative to capital per unit of output, while a capital-intensive technique uses more capital relative to labour per unit of output. The choice depends on the available supplies of the different production factors and their relative prices, and making a good choice matters for producing the maximum number of goods and services from limited resources.</p><p><b>For whom to produce: distribution.</b> This problem is also called the problem of the distribution of the national product of a country. It relates to how the material product is to be distributed among the different members of society. The economy must decide, for instance, whether to produce for the benefit of a few rich people or for the majority of poor people. An economy that wants to produce for the benefit of the maximum number of people would first focus on the production of necessary goods for the whole population, and only then on luxury goods.</p><p><b>From problems to economic activities.</b> All these fundamental economic problems centre on human needs and wants. Since resources are scarce and wants unlimited, human efforts in modern society are directed towards producing goods and services so that the demand of society can be satisfied. These human efforts create economic activities, and those activities take place within the framework of an economic system, which is the subject of the next lesson.</p>",
  keyTerms: [
    { term: "Basic economic problems", def: "The problems an economic system faces owing to scarcity of resources; also called the central problems of an economy." },
    { term: "Allocation of resources", def: "The problem of what to produce, deciding the type and quantity of goods and services to be produced." },
    { term: "Choice of technique", def: "The problem of how to produce, selecting among alternative methods or techniques of production." },
    { term: "Labour-intensive technique", def: "A production method that uses more labour relative to capital per unit of output." },
    { term: "Capital-intensive technique", def: "A production method that uses more capital relative to labour per unit of output." },
    { term: "Capital goods", def: "Goods such as machinery used to produce other goods, chosen instead of consumption goods in the allocation problem." },
    { term: "Consumption goods", def: "Goods produced for immediate use by consumers, chosen instead of capital goods in the allocation problem." },
    { term: "Problem of distribution", def: "The problem of for whom to produce; how the national product is distributed among members of society." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "A government is deciding between building new hospitals and building fighter aircraft. Which basic economic question is it answering?",
      given: "The choice is between civil goods and military goods.",
      formula: "Principle: the what-to-produce question is the problem of allocation of resources.",
      substitution: "Civil goods versus military goods is one of the standard allocation choices listed in the textbook.",
      calculation: "Since the decision sets the type of goods to be produced, it belongs to the first central problem.",
      answer: "The question of what to produce, the problem of allocating resources between civil and military goods."
    },
    {
      problem: "A wheat farm in a country with many workers and little machinery is choosing between hand tools with many labourers and modern tractors with few labourers. How should it analyse the choice?",
      given: "Labour is relatively abundant and capital is relatively scarce.",
      formula: "Principle: the choice of technique depends on available supplies of production factors and their relative prices.",
      substitution: "With labour cheap and capital expensive, a labour-intensive method (more labour relative to capital) tends to make better use of limited resources.",
      calculation: "Applying the rule, the farm compares the relative prices of labour and capital and leans toward the labour-intensive technique.",
      answer: "A labour-intensive technique, because the abundant and cheap factor should be used more heavily per unit of output."
    },
    {
      problem: "A poor country wants its national product to benefit as many people as possible. What production order should it follow?",
      given: "The country aims to produce for the majority of its people rather than for a few rich consumers.",
      formula: "Principle: the for-whom problem guides an economy that serves the maximum number of people.",
      substitution: "The economy first produces necessary goods for the whole population.",
      calculation: "Only after necessities are secured does the economy turn to the production of luxury goods.",
      answer: "Produce necessary goods for the whole population first, and luxury goods afterwards."
    },
    {
      problem: "A village finds that a booming town gypsum factory attracts all its workers, reducing farm output. Which feature of the central problems does this illustrate?",
      given: "Scarce labour has alternative uses: farm work or factory work.",
      formula: "Principle: scarcity forces a choice wherever resources have alternative uses.",
      substitution: "The workers' time is a limited resource allocated to one activity instead of another.",
      calculation: "Choosing the factory output means accepting lower farm output, which mirrors the what-to-produce allocation problem at village scale.",
      answer: "It illustrates the allocation of scarce resources between alternative uses within the what-to-produce problem."
    }
  ],
  commonMistakes: [
    "Listing only one central problem; there are three: what, how and for whom to produce.",
    "Calling the how-to-produce question a distribution problem." ,
    "Thinking labour-intensive means using more machines; it means using more labour relative to capital.",
    "Believing the choice of technique is purely technical; it depends on factor supplies and relative prices.",
    "Assuming the for-whom problem only concerns rich consumers rather than the distribution of the national product.",
    "Forgetting that the central problems are common to all economic systems, not just capitalist ones."
  ],
  applications: [
    "Deciding whether Ethiopia's scarce land budget should go to staple food crops or export crops, an everyday what-to-produce problem.",
    "Choosing manual harvesting or machine harvesting for a farm, which is a choice of technique.",
    "Weighing spending on textbooks for all schools against sports stadiums, the necessity-versus-luxury allocation choice.",
    "Arguing that government services such as power generation should reach the majority before luxury goods are produced.",
    "Explaining to a shop owner that producing one more product line always means fewer resources for another, because resources have alternative uses."
  ],
  summary: "The basic economic problems, or central problems of an economy, arise in every economic system from the scarcity of resources. They are the three questions of what to produce (allocation of resources), how to produce (choice of technique between labour-intensive and capital-intensive methods) and for whom to produce (distribution of the national product). Answering these questions well means using limited resources to produce the maximum number of goods and services for the maximum number of people.",
  visuals: [
    {
      type: "mindMap",
      config: {
        title: "Central Problems of Economies",
        center: "Scarcity of Resources",
        branches: [
          { label: "What to produce", items: ["Allocation of resources", "Consumption vs capital goods", "Necessities vs luxuries"] },
          { label: "How to produce", items: ["Choice of technique", "Labour-intensive", "Capital-intensive"] },
          { label: "For whom to produce", items: ["Distribution of national product", "Majority first", "Necessities before luxuries"] }
        ]
      }
    },
    {
      type: "comparison",
      config: {
        title: "Labour-Intensive vs Capital-Intensive Techniques",
        left: { name: "Labour-intensive", items: ["More labour relative to capital", "Suits abundant, cheap labour", "Example: primitive tools and manual labour in wheat farming", "More jobs per unit of output"] },
        right: { name: "Capital-intensive", items: ["More capital relative to labour", "Suits abundant, cheap capital", "Example: modern machinery and some labour in wheat farming", "Higher output per worker"] }
      }
    },
    {
      type: "qa",
      config: {
        title: "Exam Quick-Check",
        pairs: [
          { q: "Why are the basic economic problems common to all economies?", a: "Because every economy faces the scarcity of resources." },
          { q: "What is the second name for the what-to-produce problem?", a: "The problem of the allocation of resources." },
          { q: "What is the second name for the how-to-produce problem?", a: "The problem of the choice of technique." },
          { q: "What does the for-whom problem decide?", a: "How the national product is distributed among the members of society." }
        ]
      }
    }
  ],
  questions: [
    { type: "mcq", q: "The basic economic problems are also known as:", options: ["the central problems of an economy", "minor market problems", "temporary shortages", "fiscal problems"], answer: 0, difficulty: 1, explanation: "The basic economic problems are also called the central problems of an economy." },
    { type: "mcq", q: "Which of the following best captures the three basic economic questions of every society?", options: ["What, when and why", "What, how and for whom", "How much, how often and for whom", "When, where and why"], answer: 1, difficulty: 1, explanation: "Every society must answer: what to produce, how to produce and for whom to produce." },
    { type: "tf", q: "The problem of how to produce is also called the problem of the choice of technique.", answer: true, difficulty: 1, explanation: "How to produce is referred to as the problem of choice of technique." },
    { type: "mcq", q: "A technique that uses more labour relative to capital per unit of output is called:", options: ["capital-intensive", "labour-intensive", "automated", "mixed"], answer: 1, difficulty: 2, explanation: "A labour-intensive technique uses more labour relative to capital per unit of output." },
    { type: "concept", q: "Give the name of the problem concerned with how the national product is distributed among members of society.", answer: "problem of distribution|for whom to produce|distribution problem", difficulty: 2, explanation: "For whom to produce is called the problem of the distribution of the national product." },
    { type: "tf", q: "Capital goods and consumption goods are alternatives in the what-to-produce problem.", answer: true, difficulty: 2, explanation: "The economy must choose between consumption and capital goods, among other allocations." },
    { type: "short", q: "What two factors does the choice between labour-intensive and capital-intensive techniques depend on?", answer: "available supplies of factors and their relative prices|factor supplies and relative prices", difficulty: 2, explanation: "The choice depends on the available supplies of diverse production factors and their relative prices." },
    { type: "concept", q: "Explain the production order of an economy that wants to benefit the maximum number of people.", answer: "necessities first then luxuries|necessary goods for the whole population first, luxury goods after", difficulty: 3, explanation: "Such an economy first produces necessary goods for the whole population, then luxury goods." },
    { type: "mcq", q: "Wheat produced with primitive tools and manual labour, or with modern machinery and few workers, is an example of the decision:", options: ["for whom to produce", "how to produce", "what to produce", "how much tax to collect"], answer: 1, difficulty: 2, explanation: "Choosing between alternative techniques of production is the how-to-produce question." },
    { type: "tf", q: "Because of scarcity, individuals, firms and governments are all forced to choose what to produce and what not to produce.", answer: true, difficulty: 2, explanation: "Scarcity forces individuals, firms and governments to choose outputs, quantities and allocations." }
  ]
};

Lessons["g9-economics-ue2-t3"] = {
  overview: "An economic system is the set of organizational and institutional arrangements a society uses to answer the basic economic questions. This lesson compares the four main systems: traditional, capitalist, command and mixed economies.",
  objectives: [
    "Define an economic system and state how systems are classified",
    "Describe the traditional economy and its dependence on custom and barter",
    "Identify the main features of the capitalist economy, including private property and consumer sovereignty",
    "Identify the main features of the command economy, including collective ownership and central planning",
    "Explain how the mixed economy combines private and public sectors"
  ],
  simple: "The way a society answers the basic economic questions is summarized by its economic system, a set of organizational and institutional arrangements. Systems are classified on the basis of ownership of economic resources. A traditional economy relies on customs, history and time-honoured beliefs, depends on agriculture, hunting, fishing or gathering, and uses barter instead of money. A capitalist economy has private ownership, consumer freedom, competition and limited government; it is also called the free market or laissez faire system. A command economy, or socialism, puts the means of production under state ownership and a centralized plan. A mixed economy combines both: private and public sectors co-exist, with the government controlling strategic industries while private business runs consumer goods industries.",
  detailed: "<p><b>What an economic system is.</b> The way a society tries to answer the basic economic questions is summarized by the concept of an economic system. An economic system is a set of organizational and institutional arrangements established to answer the basic economic questions. The different types are classified on the basis of ownership of economic resources. The main types are the traditional economy, the capitalist economy, the command economy and the mixed economy.</p><p><b>Traditional economy.</b> A traditional economy is a system that relies on customs, history and time-honoured beliefs; tradition guides economic decisions such as production and distribution. Such societies depend on agriculture, fishing, hunting, gathering or some combination of them, and they use barter instead of money. Most traditional economies operate in emerging markets and developing countries, especially in Africa, Asia, Latin America and the Middle East. They centre on a family or tribe and use traditions gained from the elders' experiences to guide day-to-day life. Nomadic hunter-gatherer societies follow herds and migrate with the seasons, competing with other groups for scarce natural resources, and there is little need for trade because they consume and produce the same things. Most traditional economies produce only what they need, rarely leaving a surplus, so there is little need to trade or create money. When they do trade, they rely on barter between groups that do not compete, for example a hunting tribe exchanging meat with a fishing group. Once groups start farming and settling down, a surplus such as a bumper crop appears, trade grows, and the groups create some form of money to facilitate trade over long distances.</p><p><b>Capitalist economy.</b> Capitalism is the oldest formal economic system in the world and became widespread in the middle of the 19th century. All means of production are privately owned, and production takes place at the initiative of private entrepreneurs who work mainly for their own profit, while government intervention is negligible. It is also called a free market economy, a market economy, or laissez faire. Its main features are: the right to private property, the central feature, under which land, factories, machinery and mines are privately owned; freedom of choice by consumers, called the principle of consumer sovereignty; competition among sellers for customers, among buyers for goods, among workers for jobs and among employers for workers and investment funds; limited government, which confines itself to defence and the maintenance of law and order; self-interest, which guides individuals to strive for economic gain; and large inequalities in income between rich and poor.</p><p><b>Command economy.</b> A command economy is also referred to as a socialist economy. The economic institutions engaged in production and distribution are owned and controlled by the state and put to use under a centralized plan. Socialism started in Russia with the Great October Revolution of 1917, and countries including China, Vietnam, former East Germany, Poland, Hungary, Cuba and Ethiopia adopted it, several of them after the Second World War. Later, socialism lost its acceptance and most former socialist countries adopted free market economies. Its main features are: collective ownership, meaning all means of production are owned by society as a whole with no right to private property; central economic planning, under which resource allocation is done by the controlling authority based on socio-economic goals; a strong role of government with complete control over all economic activities; and relative equality of incomes, because private property, the profit motive and the accumulation of wealth are absent.</p><p><b>Mixed economy.</b> A mixed economy has a combination of the characteristics of both capitalism and socialism: private and public ownership of the means of production co-exist, with some measure of government control. In the co-existence of public and private sectors, industries of national and strategic importance, such as heavy and basic industry, defence services and power generation, are set up in the public sector, whereas the consumer-goods industry and small-scale industry are developed in the private sector. The government also uses economic planning to achieve coordinated and rapid economic development, making use of both sectors, and pursues economic equality: private property is allowed, but rules exist to prevent the concentration of wealth, with the belief that people should receive the same rate of pay for a job regardless of race, gender or other characteristics unrelated to task performance.</p>",
  keyTerms: [
    { term: "Economic system", def: "A set of organizational and institutional arrangements established to answer the basic economic questions." },
    { term: "Traditional economy", def: "A system that relies on customs, history and time-honoured beliefs, depends on agriculture, hunting, fishing or gathering, and uses barter." },
    { term: "Barter", def: "Exchanging goods directly for other goods without using money, common in traditional economies." },
    { term: "Capitalist economy", def: "A system in which all means of production are privately owned and production is driven by private entrepreneurs seeking profit; also called a free market economy or laissez faire." },
    { term: "Consumer sovereignty", def: "The principle that producers make goods in accordance with the demands, tastes and preferences of consumers." },
    { term: "Command economy", def: "A socialist system in which production and distribution institutions are owned and controlled by the state under a centralized plan." },
    { term: "Collective ownership", def: "Ownership of all means of production by society as a whole, with no right to private property." },
    { term: "Mixed economy", def: "A system combining capitalism and socialism, in which private and public sectors co-exist with some government control." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "A hunting tribe in a remote region exchanges meat with a fishing group for fish. Which economic system does this reflect, and why?",
      given: "Trade is barter, between non-competing groups, with no money involved.",
      formula: "Principle: traditional economies use barter instead of money, especially between groups that do not compete.",
      substitution: "The tribe and fishing group produce different goods and exchange them directly.",
      calculation: "The direct exchange of meat for fish matches the textbook description of barter among traditional economies.",
      answer: "A traditional economy, because tradition-guided groups trade by barter rather than with money."
    },
    {
      problem: "A country places its power generation and defence industries under state ownership while leaving bakeries and clothing shops to private owners. Classify the system.",
      given: "Strategic industries are public; consumer-goods and small-scale industry are private.",
      formula: "Principle: a mixed economy sets industries of national and strategic importance in the public sector and consumer-goods and small-scale industry in the private sector.",
      substitution: "Power generation, defence and heavy industry are public; shops and small workshops are private.",
      calculation: "Because both sectors co-exist with well-defined roles, the economy matches the definition of a mixed economy.",
      answer: "A mixed economy with co-existence of public and private sectors."
    },
    {
      problem: "Repeated shortages appear in a country where the state owns all factories and sets output quotas centrally. Which system is this, and which of its features explains the shortages?",
      given: "All means of production are state-owned; allocation follows a centralized plan.",
      formula: "Principle: a command economy allocates resources through central economic planning by a controlling authority.",
      substitution: "There is no consumer sovereignty or autonomous producer response to consumer demand.",
      calculation: "When the plan misjudges wants, the planned quantities fail to match demand, producing shortages.",
      answer: "A command economy; central planning by the controlling authority determines output, so mismatched plans cause shortages."
    },
    {
      problem: "In one country, a miner can own his own tools and bank savings, while in another, such private accumulation is impossible and incomes are relatively equal. Contrast the two systems.",
      given: "System A allows private property and profit; System B has collective ownership, no profit motive and no wealth accumulation.",
      formula: "Principle: capitalism rests on private property and profit motive; command economies show relative income equality because these are absent.",
      substitution: "System A shows self-interest, competition and inequality; System B shows planning and equality of incomes.",
      calculation: "Matching each description to its defining feature classifies the two systems.",
      answer: "System A is a capitalist economy; System B is a command (socialist) economy."
    }
  ],
  commonMistakes: [
    "Classifying economic systems by income or region instead of by ownership of economic resources.",
    "Assuming traditional economies always trade with money; they mainly use barter.",
    "Calling consumer sovereignty a feature of command economies; it belongs to capitalism.",
    "Thinking the government totally disappears in capitalism; it confines itself to defence and law and order.",
    "Believing socialism never existed outside Russia; China, Vietnam, Cuba, Poland, Hungary, former East Germany and Ethiopia also adopted it.",
    "Assuming a mixed economy has no government planning; it uses planning to coordinate both sectors.",
    "Saying a command economy has large income inequality; inequality is a feature of capitalism, while command economies show relative equality of incomes."
  ],
  applications: [
    "Describing rural communities in Ethiopia that still exchange labour and goods without much money as partly traditional economies.",
    "Explaining why Ethiopia's economy today combines private businesses with state-owned generators and railways in a mixed system.",
    "Using the 1917 Great October Revolution and the post-Second World War wave to place socialism's history on a timeline.",
    "Comparing a country where consumers freely choose brands (consumer sovereignty) with one where the state sets output quotas centrally.",
    "Discussing how rules preventing the concentration of wealth in a mixed economy try to combine efficiency with economic equality."
  ],
  summary: "An economic system is the set of organizational and institutional arrangements a society uses to answer the basic economic questions, classified by ownership of economic resources. Traditional economies follow customs and barter; capitalist economies rest on private property, consumer sovereignty, competition, self-interest and limited government, but with income inequality; command economies combine collective ownership, central planning and a strong government with relative income equality. A mixed economy combines both, with strategic industries in the public sector and consumer-goods and small-scale industries in the private sector, guided by economic planning and rules promoting equality.",
  visuals: [
    {
      type: "tableVisual",
      config: {
        title: "The Four Economic Systems",
        headers: ["System", "Ownership of resources", "Who decides", "Key feature"],
        rows: [
          ["Traditional", "Community or tribe", "Custom and elders' experience", "Barter, little or no surplus"],
          ["Capitalist", "Private owners", "Consumers and producers in markets", "Private property, competition, profit motive"],
          ["Command", "The state (society as a whole)", "Central economic plan", "Collective ownership, income equality"],
          ["Mixed", "Both private and public", "Markets plus government planning", "Public and private sectors co-exist"]
        ]
      }
    },
    {
      type: "comparison",
      config: {
        title: "Capitalism vs Command Economy",
        left: { name: "Capitalism", items: ["Right to private property", "Consumer sovereignty", "Competition in all markets", "Limited government", "Large income inequality"] },
        right: { name: "Command", items: ["Collective ownership", "Central economic planning", "Strong role of government", "No profit motive", "Relative equality of incomes"] }
      }
    },
    {
      type: "timeline",
      config: {
        title: "Socialism in History",
        events: [
          { label: "1917", detail: "Socialism starts in Russia with the Great October Revolution." },
          { label: "After World War II", detail: "Several countries, including China, Poland, Hungary, Cuba and Ethiopia, adopt the system." },
          { label: "19th century spread", detail: "Capitalism had become widespread across the world." },
          { label: "Later decades", detail: "Socialism loses acceptance; most former socialist countries adopt free market economies." }
        ]
      }
    }
  ],
  questions: [
    { type: "mcq", q: "An economic system is best defined as:", options: ["a country's tax law", "a set of organizational and institutional arrangements answering the basic economic questions", "the yearly budget plan", "a type of market"], answer: 1, difficulty: 1, explanation: "An economic system is the set of arrangements established to answer the basic economic questions." },
    { type: "mcq", q: "Economic systems are classified on the basis of:", options: ["population", "ownership of economic resources", "climate", "currency"], answer: 1, difficulty: 2, explanation: "The types of economic systems are classified according to who owns the economic resources." },
    { type: "tf", q: "Societies with traditional economies depend on agriculture, fishing, hunting, gathering, or some combination of them.", answer: true, difficulty: 1, explanation: "The textbook states this directly about traditional economies." },
    { type: "mcq", q: "The central feature of a capitalist economy is:", options: ["central planning", "the right to private property", "collective ownership", "barter"], answer: 1, difficulty: 1, explanation: "The right to private property is the central feature of capitalism." },
    { type: "concept", q: "Give the principle which states that producers make goods in accordance with the demands and tastes of consumers.", answer: "consumer sovereignty", difficulty: 2, explanation: "Freedom of choice by consumers is called the principle of consumer sovereignty." },
    { type: "mcq", q: "Which of the following is NOT a feature of a capitalist economy?", options: ["right to private property", "competition", "collective ownership", "self-interest"], answer: 2, difficulty: 2, explanation: "Collective ownership is a feature of the command economy, not capitalism." },
    { type: "tf", q: "A command economy allows economic freedom for consumers and producers.", answer: false, difficulty: 2, explanation: "In a command economy the government has complete control over all economic activities, so freedom is restricted." },
    { type: "short", q: "In which year, and in which country, did socialism start according to the textbook?", answer: "1917 in Russia|Russia 1917", difficulty: 2, explanation: "Socialism started in Russia with the Great October Revolution in 1917." },
    { type: "concept", q: "Explain why income distribution is more equal in a command economy than in a capitalist economy.", answer: "no private property|no profit motive|no accumulation of wealth", difficulty: 3, explanation: "Without private property, the profit motive and wealth accumulation, incomes become relatively more equal." },
    { type: "mcq", q: "In a mixed economy, industries of national and strategic importance such as defence and power generation are typically placed in:", options: ["the private sector", "the public sector", "traditional communes", "foreign ownership"], answer: 1, difficulty: 2, explanation: "Defence, power generation and basic industry are set up in the public sector of a mixed economy." },
    { type: "ordering", q: "Arrange the traditional economy's development path in the correct order.", options: ["Groups create some form of money", "Nomadic hunting and gathering with no trade", "Barter between non-competing groups", "Farming and settling down create a surplus"], answer: 1, difficulty: 3, explanation: "The order is: nomadic hunting and gathering, then barter between non-competing groups, then farming with surplus, then the creation of money." }
  ]
};

Lessons["g9-economics-ue2-t4"] = {
  overview: "This consolidated review lesson pulls the unit together: scarcity drives choice, choice carries an opportunity cost, every economy must answer three central questions, and four economic systems answer them differently. Use it to prepare for the unit test.",
  objectives: [
    "Summarize the chain from scarcity to choice to opportunity cost",
    "Interpret a production possibilities table and the law of increasing opportunity cost",
    "State the three central questions every economy must answer",
    "Compare the traditional, capitalist, command and mixed economic systems",
    "Apply unit concepts to new data and Ethiopian examples"
  ],
  simple: "This unit taught that scarcity, the imbalance between unlimited human wants and limited resources, is the fundamental problem of every economy. Scarcity limits output, limited output forces choice, and every choice has an opportunity cost, the next best alternative sacrificed. The production possibilities frontier shows the maximum combinations of two goods an economy can produce, bends concave to the origin because of the law of increasing opportunity cost, and shifts outward with growth. Every society must also answer three central questions: what to produce, how to produce and for whom to produce. Different ways of answering them define four economic systems: traditional, capitalist, command and mixed.",
  detailed: "<p><b>The basic problem.</b> Basic economic problems are the problems facing an economy today due to the scarcity of resources, and they are common to all economies in the world. Scarcity is the imbalance between unlimited human wants and limited available resources, in effect the tension between wants and the means of satisfying them. It differs from shortage, which is the inability to buy what people want at the prevailing price and is a short-term problem, while scarcity is universal and endless.</p><p><b>Opportunity cost and the PPC.</b> Opportunity cost is the cost of a decision expressed in terms of the next best alternative forgone, measured in goods and services rather than money. The production possibility curve depicts all possible combinations of the maximum output that an economy can produce with given resources and technology, and it describes scarcity, choice and opportunity cost. Points on the curve are attainable and efficient, points inside are attainable but inefficient, and points outside are unattainable. Because resources are not completely adaptable to alternative uses, the law of increasing opportunity cost holds: as more of a product is produced, its opportunity cost per additional unit rises, making the PPC concave to the origin. Growth, meaning more or better resources or advancing technology, shifts the frontier outward; growth in productivity in only one sector is asymmetric growth.</p><p><b>The central questions.</b> Every economy, whatever its system, must answer three questions born of scarcity. What to produce is the problem of the allocation of resources, choosing between consumption and capital goods, civil and military goods, necessity and luxury goods. How to produce is the problem of the choice of technique, choosing labour-intensive methods that use more labour relative to capital, or capital-intensive methods that use more capital relative to labour, depending on factor supplies and relative prices. For whom to produce is the problem of the distribution of the national product, deciding whether output serves a few rich consumers or the majority of the population, with necessities produced before luxuries.</p><p><b>The systems.</b> An economic system is a set of organizational and institutional arrangements established to answer the basic economic questions, and systems are classified by ownership of economic resources. The traditional economy follows customs and time-honoured beliefs, depends on agriculture, fishing, hunting and gathering, uses barter instead of money and usually produces little surplus. The capitalist economy, the oldest formal system, widespread since the mid-19th century, rests on private property, consumer sovereignty, competition, limited government, self-interest and profit, but generates large income inequality; it is also called the free market or laissez faire. The command economy, or socialism, born of the Great October Revolution of 1917 in Russia and adopted by countries including Ethiopia, features collective ownership, central economic planning, a strong government and relative equality of incomes, though most former socialist countries later adopted free market systems. Ethiopia today operates a mixed economy: private and public sectors co-exist, strategic industries such as power generation and defence sit in the public sector, consumer-goods and small-scale industries in the private sector, and government uses planning and rules against the concentration of wealth.</p><p><b>Test yourself on the logic.</b> A single table can exercise every idea at once. In the unit's revision schedule, a two-good economy produces combinations A (0 of good X, 100 of good Y) through D (6 of good X, 20 of good Y). The opportunity cost of each extra batch of good X keeps rising: moving from A to B costs 10 units of good Y, from B to C costs 30 more units of good Y, and from C to D costs a further 40 units. That rising pattern is exactly the law of increasing opportunity cost, caused by the specialization of resources. To shift this frontier outward, the economy would need increases in the quantity or quality of its resources or advances in technology, since growth cannot come from either source alone.</p>",
  keyTerms: [
    { term: "Basic economic problems", def: "The problems every economy faces due to scarcity of resources; common to all economic systems and also called central problems." },
    { term: "Scarcity", def: "The imbalance between unlimited human wants and the limited resources available to satisfy them." },
    { term: "Opportunity cost", def: "The cost of a decision expressed in terms of the next best alternative forgone." },
    { term: "Production possibility curve (PPC)", def: "A curve showing all possible combinations of maximum output producible with given resources and technology." },
    { term: "Law of increasing opportunity cost", def: "As more of a product is produced, the opportunity cost per additional unit of output increases, making the PPC concave to the origin." },
    { term: "Economic system", def: "A set of organizational and institutional arrangements established to answer the basic economic questions." },
    { term: "Laissez faire", def: "Another name for the capitalist, free market economy in which government intervention is negligible." },
    { term: "Mixed economy", def: "A system combining private and public ownership of the means of production with some government control." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "From the unit revision table, production alternatives are A (X=0, Y=100), B (X=2, Y=90), C (X=4, Y=60) and D (X=6, Y=20). Calculate the opportunity cost of good X at each step and identify the law the trend exhibits.",
      given: "The schedule gives Y falling from 100 to 90 to 60 to 20 while X rises from 0 to 2 to 4 to 6 (millions of tons).",
      formula: "Opportunity cost of X = units of Y sacrificed, taken in absolute value.",
      substitution: "A to B: 100 - 90 = 10 Y for 2 X; B to C: 90 - 60 = 30 Y for 2 X; C to D: 60 - 20 = 40 Y for 2 X.",
      calculation: "Per unit of X the costs are 5, then 15, then 20 units of good Y; each step costs more than the last.",
      answer: "Opportunity cost per unit of X rises from 5 to 15 to 20 units of Y, demonstrating the law of increasing opportunity cost."
    },
    {
      problem: "A friend claims that points lying outside the production possibility frontier represent the maximum possible output of the two goods. Judge the claim.",
      given: "Points on the PPF are attainable and efficient; points inside are attainable but inefficient; points outside are unattainable.",
      formula: "Principle: the PPF bounds production by given resources and technology.",
      substitution: "An outside point requires more resources or better technology than the economy currently has.",
      calculation: "Only growth, driven by more or better resources or advancing technology, can shift the frontier outward and make such points attainable.",
      answer: "False: outside points are unattainable; on-curve points show the maximum possible output."
    },
    {
      problem: "Match each decision to its central economic question: choosing to expand textile factories instead of irrigation dams; choosing tractors over manual labour; deciding that rural food needs come before urban luxury goods.",
      given: "The three decisions involve types of output, production methods, and distribution priorities.",
      formula: "Principle: what-to-produce is allocation of resources, how-to-produce is choice of technique, for-whom is distribution of the national product.",
      substitution: "Factories versus dams is allocation; tractors versus labour is technique; rural necessities before urban luxuries is distribution.",
      calculation: "Each decision fits exactly one of the three questions, which together form the central problems of the economy.",
      answer: "Factories versus dams = what to produce; tractors over manual labour = how to produce; rural necessities first = for whom to produce."
    },
    {
      problem: "A neighbour says all economies that use money and markets must be capitalist. Using the unit, correct and classify Ethiopia's system.",
      given: "A system using both markets and government, with private and public ownership, co-exists in Ethiopia.",
      formula: "Principle: a mixed economy combines features of capitalism and socialism with private and public sectors co-existing.",
      substitution: "Private shopkeepers and factories operate alongside state power generation, railways and defence production.",
      calculation: "Because both sectors co-exist plus government planning and equality rules, the economy is not purely capitalist.",
      answer: "Ethiopia's economy is a mixed economy, not a purely capitalist one."
    }
  ],
  commonMistakes: [
    "Saying scarcity means shortage; scarcity is universal and endless, shortage is short-term and price-related.",
    "Forgetting that points inside the PPF are inefficient, not efficient.",
    "Expecting the opportunity cost per unit to stay constant; the law of increasing opportunity cost makes it rise.",
    "Thinking economic growth can be achieved only through technological advancement; increases in resources also shift the PPF.",
    "Treating the three central questions as optional; every economic system must answer all three.",
    "Assigning consumer sovereignty or private property to the command economy.",
    "Believing a mixed economy allocates all resources through the price mechanism alone; allocation goes through both the price mechanism and the government."
  ],
  applications: [
    "Re-deriving the opportunity cost of extra manufacturing output from a national plan's production table.",
    "Explaining why when the opportunity cost of an activity increases, people substitute other activities in its place.",
    "Arguing that Ethiopia's industrial policy combines market incentives with public investment, matching the theory of the mixed economy.",
    "Using the what, how and for whom questions to organize a class debate on a national budget proposal.",
    "Predicting that better agricultural technology shifts Ethiopia's PPF outward, possibly asymmetrically on the food axis.",
    "Comparing the economic systems Ethiopia passed through during the Imperial, Military (Derg) and FDRE regimes using ownership of resources as the criterion."
  ],
  summary: "The unit's core chain is: scarcity of resources creates the basic economic problems common to all economies, scarcity forces choice, and every choice has an opportunity cost, all captured by the production possibility curve with its law of increasing opportunity cost and outward shift under growth. Every economy must answer what, how and for whom to produce, the central questions of allocation, technique and distribution. Societies answer them through an economic system classified by resource ownership: traditional, capitalist, command or mixed, with Ethiopia today operating a mixed system.",
  visuals: [
    {
      type: "mindMap",
      config: {
        title: "Unit 2 Map: From Scarcity to Systems",
        center: "Scarcity",
        branches: [
          { label: "Basic problem", items: ["Unlimited wants vs limited resources", "Choice", "Opportunity cost"] },
          { label: "PPF", items: ["Efficient on the curve", "Inefficient inside", "Unattainable outside", "Concave shape"] },
          { label: "Central questions", items: ["What to produce", "How to produce", "For whom to produce"] },
          { label: "Economic systems", items: ["Traditional", "Capitalist", "Command", "Mixed"] }
        ]
      }
    },
    {
      type: "tableVisual",
      config: {
        title: "Revision Schedule: X vs Y (Table 2.2)",
        headers: ["Alternative", "Good X (millions of tons)", "Good Y (millions of tons)", "Opportunity cost of X"],
        rows: [
          ["A", "0", "100", "-"],
          ["B", "2", "90", "10 Y for 2 X (5 per X)"],
          ["C", "4", "60", "30 Y for 2 X (15 per X)"],
          ["D", "6", "20", "40 Y for 2 X (20 per X)"]
        ]
      }
    },
    {
      type: "steps",
      config: {
        title: "Unit Review Checklist",
        steps: [
          { label: "Define the basics", detail: "Scarcity, shortage, choice and opportunity cost, each with a textbook definition." },
          { label: "Master the PPF", detail: "Points on, inside and outside the curve; the concave shape from rising opportunity cost." },
          { label: "Link growth", detail: "More resources or better technology shift the PPF outward; one-sector growth is asymmetric." },
          { label: "Recite the three questions", detail: "What, how and for whom, with their alternative names." },
          { label: "Compare the four systems", detail: "Ownership of resources determines who answers the questions." }
        ]
      }
    }
  ],
  questions: [
    { type: "mcq", q: "Economics is best described as the study of:", options: ["money and banks only", "how people, businesses, governments and societies make choices to cope with scarcity", "facts and figures about trade", "company profits"], answer: 1, difficulty: 2, explanation: "The unit review defines economics as the study of how societies make choices to cope with scarcity." },
    { type: "tf", q: "Although a resource exists in unlimited supply, it can be considered as scarce.", answer: false, difficulty: 2, explanation: "A resource in unlimited supply is abundant, not scarce; scarcity requires limited supply relative to wants." },
    { type: "mcq", q: "Which statement best describes the economic problem?", options: ["The fact that economies often go into decline", "The presence of high levels of unemployment", "Matching endless wants with limited resources", "High exchange rates discouraging exports"], answer: 2, difficulty: 1, explanation: "The economic problem is matching unlimited wants with limited resources, that is scarcity." },
    { type: "concept", q: "Using the revision table (A: X=0, Y=100; B: X=2, Y=90; C: X=4, Y=60; D: X=6, Y=20), state the trend in the opportunity cost of good X and the law it demonstrates.", answer: "it increases|rising opportunity cost|law of increasing opportunity cost", difficulty: 3, explanation: "The cost per unit of X rises from 5 to 15 to 20 units of Y, demonstrating the law of increasing opportunity cost." },
    { type: "mcq", q: "The production possibility frontier can be considered a measure of:", options: ["potential output", "nominal output", "real output", "total output this year"], answer: 0, difficulty: 2, explanation: "The PPF shows the potential, the maximum output attainable with given resources and technology." },
    { type: "mcq", q: "A production possibility curve is:", options: ["a horizontal straight line", "a vertical straight line", "an upward sloping curve", "a downward sloping curve"], answer: 3, difficulty: 2, explanation: "Producing more of one good means sacrificing some of the other, so the PPC slopes downward." },
    { type: "tf", q: "Economic growth can be achieved only through technological advancement.", answer: false, difficulty: 2, explanation: "Growth occurs when resources increase in quantity or quality, or when technology advances; either condition suffices." },
    { type: "mcq", q: "Which of the following is a feature of a command economy?", options: ["consumer sovereignty", "central economic planning", "large income inequality", "negligible government"], answer: 1, difficulty: 2, explanation: "Central economic planning by the state is the defining feature of the command economy." },
    { type: "concept", q: "Explain how resources are allocated in a mixed economy.", answer: "through the price mechanism and the government|both the market and the government allocate", difficulty: 3, explanation: "In a mixed economy some resources are allocated through the price mechanism and some through the government." },
    { type: "tf", q: "Most traditional economies produce only what they need, rarely leaving a surplus to trade.", answer: true, difficulty: 1, explanation: "Traditional economies produce mainly what they need, so surpluses are rare and trade is limited to barter." },
    { type: "ordering", q: "Arrange the central problems in the order the textbook presents them.", options: ["For whom are goods to be produced", "What goods and services are to be produced", "How to produce goods and services"], answer: 1, difficulty: 2, explanation: "The order is: what to produce, how to produce, for whom to produce." }
  ]
};
