/* Content: Grade 11 Economics - Unit 6: Economic Development (5 topics)
   Source: MoE Economics Grade 11 Student Textbook, Unit 6. */
window.Lessons = window.Lessons || {};

Lessons["g11-economics-ue6-t1"] = {
  overview: "Economic growth is a quantitative, easily measured rise in a country's output, while economic development is a multidimensional process that also changes structures, attitudes and institutions. This lesson shows how growth is measured through GDP and per capita income, and why a country can grow richer without developing.",
  objectives: [
    "Explain what GDP is and how output is used to compute it",
    "Calculate GDP growth over time using the percentage change formula",
    "Use real GDP per capita to compare living standards across countries and time",
    "Differentiate economic growth from economic development in scope and measurement",
    "Explain why development without growth is almost inconceivable"
  ],
  simple: "Economic growth means a sustained increase in a country's aggregate output or income, measured by the gross domestic product (GDP). Growth itself is not shown by the size of GDP but by the percentage increase in GDP from one period to the next. Economists use inflation-adjusted (real) GDP and real GDP per capita so that rising prices and population changes do not distort the comparison. Economic development goes beyond output: it is a process of improving the lives of all people, covering living standards, self-esteem, dignity, respect and the freedom to choose and control their own lives. Development also involves changes in social structures, popular attitudes and national institutions, plus reduced inequality and eradication of poverty. A country may grow richer, yet not necessarily develop; but development without growth is almost inconceivable.",
  detailed: "<p><b>GDP and where growth appears.</b> The <b>gross domestic product (GDP)</b> measures the market value of the goods and services provided by a country over a period of time, often one year or one quarter. GDP is calculated by estimating the gross output of goods and services and subtracting the intermediate consumption, the cost of the materials and services used up in producing what is sold. Growth is not indicated by the GDP itself; growth is determined by the percentage increase in GDP from one time period to another.</p><p><b>The GDP growth rate.</b> The textbook states the formula in words: GDP growth = (GDP in current period - GDP in the previous period) / GDP in the previous period * 100. The economic growth rate typically refers to the increase in the <i>inflation-adjusted</i> market value of the goods and services produced by an economy over a specific period. It is conventionally measured in percentage terms because percentages make comparison over time and space easiest. Real, inflation-adjusted GDP is used for the calculation since it removes the effect of the rising price level, and economists often focus on the percentage change in <i>real GDP per capita</i> because it improves comparison between countries and isolates the effect of a changing population.</p><p><b>A textbook example.</b> Suppose the real GDP of an economy is 17,304,984 dollars in 2017 and 16,920,328 dollars in 2016. Then GDP growth = (17,304,984 - 16,920,328) / 16,920,328 * 100 = 2.27%. The real GDP growth in 2017 compared with the previous year was therefore 2.27 percent.</p><p><b>Per capita income as a standard-of-living measure.</b> To measure the effect of growth on the standard of living of the population, GNP or GDP <i>per capita</i> is taken, which is also known as per capita income. Per capita income can be measured in terms of the home currency, and for international comparisons in terms of foreign currency, usually US dollars. So a large GDP shared among many people may still give a low standard of living, which is why the per person figure matters.</p><p><b>What economic development means.</b> Economic development is a process where there is improvement in the lives of all people in the country. It involves not only living standards, such as greater availability of goods and services and the ability to purchase them, but also the promotion of attributes like <b>self-esteem, dignity and respect</b>, and the enlarging of people's freedom to choose and to take control of their own lives. Economic development must be conceived as a <b>multidimensional process</b> involving major changes in social structures, popular attitudes and national institutions, as well as acceleration of economic growth, reduction of inequality and eradication of poverty.</p><p><b>Growth and development together.</b> Economic development implies both more output and changes in the technical and institutional arrangements by which output is produced and distributed. While a country may grow richer through the growth of its real output, it does not necessarily mean that it will develop. However, the reverse is nearly impossible: economic development without economic growth is almost inconceivable, because growth supplies the resources out of which better lives are built.</p>",
  keyTerms: [
    { term: "GDP", def: "The market value of the goods and services provided by a country over a period of time, often one year or one quarter, computed as gross output minus intermediate consumption." },
    { term: "Intermediate consumption", def: "The cost of materials and services used to produce the goods or services that are sold." },
    { term: "GDP growth", def: "The percentage increase in GDP from one period to the next; (GDP in current period - GDP in previous period) / GDP in previous period * 100." },
    { term: "Real GDP", def: "Inflation-adjusted GDP, from which the effect of the rising price level has been removed." },
    { term: "Real GDP per capita", def: "Real GDP divided by the total population; also called real per capita income, used to compare living standards across countries and time." },
    { term: "Economic growth", def: "A quantitative, sustained increase in a country's per capita output or income, accompanied by expansion in the labour force, consumption, capital and volume of trade." },
    { term: "Economic development", def: "A multidimensional process of improving the lives of all people, involving changes in social structures, popular attitudes and national institutions, growth acceleration, reduced inequality and eradication of poverty." },
    { term: "Self-esteem and dignity", def: "Non-material attributes of development: respect in society and the freedom to choose and take control of one's own life." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "An economy's real GDP is 17,304,984 dollars in 2017 and 16,920,328 dollars in 2016. Find the real GDP growth rate for 2017.",
      given: "Real GDP 2017 = 17,304,984 dollars; real GDP 2016 = 16,920,328 dollars.",
      formula: "GDP growth = (GDP in current period - GDP in the previous period) / GDP in the previous period * 100.",
      substitution: "GDP growth = (17,304,984 - 16,920,328) / 16,920,328 * 100.",
      calculation: "The change in GDP is 384,656 dollars. 384,656 / 16,920,328 = 0.0227; 0.0227 * 100 = 2.27.",
      answer: "The real GDP growth in 2017 compared with the previous year was 2.27%."
    },
    {
      problem: "In a certain year, real GDP of a country at constant prices is 60 billion US dollars and the population is 120 million. Compute real GDP per capita and state its use.",
      given: "Real GDP = 60,000,000,000 dollars; population = 120,000,000 people.",
      formula: "Real GDP per capita = real GDP at constant prices / total population.",
      substitution: "Real GDP per capita = 60,000,000,000 / 120,000,000.",
      calculation: "60,000,000,000 / 120,000,000 = 500 dollars per person.",
      answer: "Real GDP per capita is 500 dollars, also called real per capita income; it is used to measure the effect of growth on the standard of living and for international comparison, usually expressed in US dollars."
    },
    {
      problem: "Country X records 6% GDP growth for a decade, yet adult literacy, life expectancy and equality are unchanged. Has it developed? Explain.",
      given: "Output grows at 6% per year; education, health and income distribution show no improvement.",
      formula: "Principle: a country may grow richer through real output growth, but that does not necessarily mean it develops.",
      substitution: "Growth here is quantitative output increase only; the social structures, attitudes and institutions are unchanged.",
      calculation: "Development requires improved living standards, dignity, freedom and reduced inequality as well as output; these are absent, so the growth has not turned into development.",
      answer: "No. X has economic growth without economic development; development needs multidimensional change, not just more output."
    },
    {
      problem: "GDP of a country grows by 2.27% in a year while its population grows by 3%. What happens to real GDP per capita, and why do economists prefer the per capita measure?",
      given: "GDP growth = 2.27%; population growth = 3%.",
      formula: "Principle: the percentage change in real GDP per capita isolates the effect of a changing population.",
      substitution: "Output expanded more slowly than the population, so output per person must have fallen.",
      calculation: "Because population grew faster than GDP, real GDP per capita decreased, meaning the average standard of living fell despite positive growth.",
      answer: "Real GDP per capita fell. Economists focus on real GDP per capita because it improves comparisons between countries and isolates the effect of changing population."
    }
  ],
  commonMistakes: [
    "Believing that the size of GDP itself indicates growth; growth is the percentage increase in GDP between periods.",
    "Using nominal GDP figures without removing the effect of the rising price level.",
    "Equating high GDP with high development and ignoring education, health, dignity and freedom.",
    "Forgetting to subtract intermediate consumption when explaining how GDP is calculated.",
    "Thinking per capita income is measured only in US dollars; it is measured in home currency, with dollars used for international comparison.",
    "Treating economic growth and economic development as synonyms with identical scope.",
    "Assuming development can occur with no growth at all; development without growth is almost inconceivable."
  ],
  applications: [
    "NBE and government statisticians compare Ethiopia's real GDP growth between fiscal years to judge performance.",
    "Comparing real GDP per capita between Ethiopia and Kenya adjusts for both price changes and population size.",
    "Judging whether new factory investment creates growth with or without development by checking wages, schooling and dignity of workers.",
    "Explaining why a rise in GDP during an inflationary year must use constant-price data to be meaningful.",
    "Using GDP per capita in US dollars to argue for concessional lending, since low per capita income signals low living standards to donors."
  ],
  summary: "GDP measures the market value of a country's output over a period, computed as gross output minus intermediate consumption, and growth appears as the percentage change in GDP between periods, best measured with real GDP per capita. Economic development is a multidimensional process that adds social and institutional change, reduced inequality, dignity and freedom to the quantitative rise in output. Development without growth is almost inconceivable, yet growth alone does not guarantee development.",
  visuals: [
    {
      type: "comparison",
      config: {
        title: "Economic Growth vs Economic Development",
        left: { name: "Economic growth", items: ["Uni-dimensional: more output", "Measured by GDP growth rate", "Quantitative and easily quantified", "Real GDP per capita for living standards"] },
        right: { name: "Economic development", items: ["Multidimensional process", "Changes structures, attitudes, institutions", "Reduces inequality and poverty", "Adds dignity and freedom to choose"] }
      }
    },
    {
      type: "steps",
      config: {
        title: "Computing a GDP Growth Rate",
        steps: [
          { label: "Pick the periods", detail: "Use real GDP so the price level does not distort the result." },
          { label: "Find the change", detail: "Subtract the previous period's GDP from the current period's GDP." },
          { label: "Divide", detail: "Divide that change by the previous period's GDP." },
          { label: "Multiply by 100", detail: "Express the result as a percentage growth rate." }
        ]
      }
    },
    {
      type: "mindMap",
      config: {
        title: "Where Growth Leads, Where Development Leads",
        center: "More output",
        branches: [
          { label: "Growth brings", items: ["Rising real GDP", "More consumption", "More capital", "More trade"] },
          { label: "Development adds", items: ["Self-esteem and dignity", "Freedom to choose", "Less inequality", "Institutional change"] },
          { label: "Measures", items: ["GDP growth rate", "Real GDP per capita"] },
          { label: "Rule", items: ["Growth may skip development", "Development without growth inconceivable"] }
        ]
      }
    }
  ],
  questions: [
    { type: "mcq", q: "The GDP is calculated by estimating the gross output of goods and services and then:", options: ["adding exports", "subtracting intermediate consumption", "adding dividends", "subtracting wages only"], answer: 1, difficulty: 1, explanation: "GDP is gross output minus the intermediate consumption used to produce the goods and services sold." },
    { type: "mcq", q: "Growth is indicated by:", options: ["the absolute size of GDP", "the percentage increase in GDP from one period to another", "the number of workers", "the size of the budget"], answer: 1, difficulty: 1, explanation: "Growth is determined by the percentage increase in GDP from one time period to another." },
    { type: "mcq", q: "The real inflation-adjusted GDP is used to compute growth because it:", options: ["removes the effect of the rising price level", "includes informal trade", "counts state firms twice", "converts to US dollars"], answer: 0, difficulty: 2, explanation: "Real GDP removes the effect of the rising price level, leaving true output change." },
    { type: "tf", q: "Economic development without economic growth is almost inconceivable.", answer: true, difficulty: 1, explanation: "The unit introduction states that development without growth is almost inconceivable." },
    { type: "mcq", q: "If real GDP rises from 16,920,328 to 17,304,984 dollars, the growth rate is about:", options: ["0.23%", "2.27%", "22.7%", "4.5%"], answer: 1, difficulty: 2, explanation: "(384,656 / 16,920,328) * 100 = 2.27%." },
    { type: "short", q: "Per capita income can be measured at home in which currency, and for international comparisons in which currency?", answer: "home currency and us dollars|own currency for home and us dollars for comparison", difficulty: 2, explanation: "It is measured in the home currency and, for international comparisons, in foreign currency, usually US dollars." },
    { type: "concept", q: "State the economic development process in terms of the lives of people in a country.", answer: "improvement in the lives of all people|process where the lives of all people improve", difficulty: 2, explanation: "Economic development is a process where there is improvement in the lives of all people in the country." },
    { type: "mcq", q: "Which set of attributes belongs to economic development rather than growth?", options: ["Expansion of capital and trade", "Self-esteem, dignity, respect and freedom to choose", "Higher percentage GDP change", "Lower intermediate consumption"], answer: 1, difficulty: 2, explanation: "Development includes promoting self-esteem, dignity and respect and enlarging people's freedom to choose." },
    { type: "tf", q: "A country that grows richer in real output necessarily develops.", answer: false, difficulty: 2, explanation: "While a country may grow richer through real output growth, it does not necessarily develop." },
    { type: "concept", q: "Economic development involves major changes in which three social dimensions, besides accelerated growth, less inequality and poverty eradication?", answer: "social structures, popular attitudes, national institutions", difficulty: 3, explanation: "Development involves major changes in social structures, popular attitudes and national institutions." },
    { type: "short", q: "Which per person measure do economists prefer for comparing countries because it isolates the effect of population change?", answer: "real gdp per capita|real per capita income", difficulty: 2, explanation: "Economists focus on the percentage change in real GDP per capita for such comparisons." }
  ]
};

Lessons["g11-economics-ue6-t2"] = {
  overview: "Productivity is the ratio of output volume to input volume and measures how efficiently labour and capital are used to produce output. This lesson explains the main measures of productivity, the formula P = O / I, and the three ways productivity can be increased.",
  objectives: [
    "Define productivity as the ratio between output volume and input volume",
    "Identify GDP per hour worked as a widely used productivity measure",
    "Apply the formula productivity = output / input to numerical cases",
    "List and illustrate the three mechanisms by which productivity is increased",
    "Explain why productivity is a key source of economic growth and competitiveness"
  ],
  simple: "Productivity is commonly defined as a ratio between the output volume and the volume of inputs. It measures how efficiently production inputs such as labour and capital are being used in an economy to produce a given level of output. Productivity is a key source of economic growth and competitiveness, so it is basic statistical information for international comparisons and country performance assessments. The formula is productivity = output / input, where output is measured by the gross national product (GNP) or gross domestic product (GDP). One of the most widely used measures is GDP per hour worked, which captures the use of labour inputs better than just output per employee. Higher productivity means producing more from a given amount of inputs, or producing a given amount with fewer inputs. It can be increased by raising output with the same input, reducing input while keeping output constant, or increasing output to the maximum with a smaller increase in input.",
  detailed: "<p><b>Defining productivity.</b> Productivity is commonly defined as a ratio between the <b>output volume</b> and the <b>volume of inputs</b>. In other words, it measures how efficiently production inputs, such as labour and capital, are being used in an economy to produce a given level of output. In economics it measures output per unit of input, such as labour, capital or any other resource, and it is often calculated for the whole economy as a ratio of GDP to hours worked.</p><p><b>The basic formula.</b> The textbook gives the measure as: Productivity (P) = Output (O) / Input (I). Output is measured by the gross national product (GNP) or the gross domestic product (GDP). For a single activity, the same logic gives labour productivity = output / labour hours, for example quintals of wheat per hour of work on the field.</p><p><b>GDP per hour worked.</b> One of the most widely used measures of productivity is <b>GDP per hour worked</b>. This measure captures the use of labour inputs better than just output per employee, because hours worked vary between full-time and part-time jobs, seasons and technology.</p><p><b>What high productivity means.</b> Higher productivity means producing more from a given amount of inputs, or producing a given amount with fewer inputs. Productivity is considered a key source of economic growth and competitiveness, and as such it is basic statistical information for many international comparisons and country performance assessments.</p><p><b>Three ways to raise productivity.</b> The textbook lists the ways productivity can be increased: (1) increasing the output using the same input; (2) reducing the input by maintaining the output as constant; (3) increasing the output to a maximum extent with a smaller increase in input. All three raise the ratio O / I, which is the heart of productivity improvement, whether on a family farm, in a garment factory or across the whole economy.</p><p><b>Choosing a measure.</b> There are different measures of productivity, and the choice between them depends either on the purpose of the measurement or on data availability. So an analyst studying labour uses hours worked or employees; one studying the whole economy uses GDP per hour worked or GDP per worker.</p>",
  keyTerms: [
    { term: "Productivity", def: "A ratio between the output volume and the volume of inputs; how efficiently labour and capital are used to produce a given level of output." },
    { term: "Productivity formula", def: "Productivity (P) = Output (O) / Input (I), where output is measured by GNP or GDP." },
    { term: "Labour productivity", def: "Output divided by labour hours, for example quintals of grain produced per hour of work." },
    { term: "GDP per hour worked", def: "One of the most widely used productivity measures; captures the use of labour inputs better than output per employee." },
    { term: "Input", def: "A production factor such as labour, capital or any other resource used to produce output." },
    { term: "Competitiveness", def: "The ability of firms or countries to sell at home and abroad, which higher productivity strengthens." },
    { term: "Country performance assessment", def: "International comparison of economic performance for which productivity statistics are basic information." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "On a cooperative farm in Oromia, 60 quintals of wheat are harvested using 300 labour hours. Compute the labour productivity.",
      given: "Output = 60 quintals of wheat; input = 300 labour hours.",
      formula: "Labour productivity = output / labour hours.",
      substitution: "Labour productivity = 60 quintals / 300 hours.",
      calculation: "60 / 300 = 0.2 quintals per labour hour.",
      answer: "The farm produces 0.2 quintals (20 kg) of wheat per labour hour."
    },
    {
      problem: "A garment plant produced 12,000 shirts last year using 3,000 labour hours. This year it produced the same 12,000 shirts using 2,400 labour hours. Which way of increasing productivity is this, and by how much did productivity rise?",
      given: "Year 1: 12,000 shirts, 3,000 hours. Year 2: 12,000 shirts, 2,400 hours.",
      formula: "Productivity = output / input; here output stayed constant while input was reduced.",
      substitution: "Year 1 productivity = 12,000 / 3,000 = 4 shirts per hour. Year 2 productivity = 12,000 / 2,400 = 5 shirts per hour.",
      calculation: "The rise is 5 - 4 = 1 shirt per hour; 1 / 4 * 100 = 25%.",
      answer: "Method 2: reducing the input while maintaining output constant; productivity rose by 25%, from 4 to 5 shirts per hour."
    },
    {
      problem: "An economy produces a real GDP of 240 billion birr with 1.2 billion hours worked in a year. Find GDP per hour worked.",
      given: "GDP = 240 billion birr; total hours worked = 1.2 billion hours.",
      formula: "Productivity measured as GDP per hour worked = GDP / hours worked.",
      substitution: "240 billion birr / 1.2 billion hours.",
      calculation: "240 / 1.2 = 200 birr of output per hour worked.",
      answer: "GDP per hour worked is 200 birr, the economy-wide labour productivity measure."
    },
    {
      problem: "A factory owner decides to introduce a better machine so output rises from 10,000 to 12,000 units with the same 1,000 hours of labour. Show that this is the textbook's first way of increasing productivity.",
      given: "Before: 10,000 units with 1,000 hours. After: 12,000 units with 1,000 hours.",
      formula: "Productivity = output / input; the first way to increase it is increasing output using the same input.",
      substitution: "Before: 10,000 / 1,000 = 10 units per hour. After: 12,000 / 1,000 = 12 units per hour.",
      calculation: "The ratio rose from 10 to 12 units per hour because output increased while the input was unchanged.",
      answer: "Yes. Raising output with the same input is the first listed way of increasing productivity; output per hour rose by 20%."
    }
  ],
  commonMistakes: [
    "Confusing productivity with the total quantity produced; productivity is output per unit of input, not output alone.",
    "Dividing input by output instead of output by input when applying P = O / I.",
    "Using output per employee when hours worked are known, although GDP per hour worked captures labour input better.",
    "Forgetting that output for the whole economy is measured by GNP or GDP, not by the sales of one firm.",
    "Thinking productivity can only rise by producing more; it can also rise by producing the same output with fewer inputs.",
    "Assuming productivity statistics are only of academic interest; they are basic information for international comparisons and competitiveness."
  ],
  applications: [
    "A wheat farmer raises output per hour by adopting improved seed and row planting while using the same labour days.",
    "A garment exporter raises productivity by cutting fabric waste, producing the same number of shirts with fewer metres.",
    "Planners use GDP per hour worked to compare Ethiopia's labour efficiency with that of trading partners.",
    "A cooperative meets a rising order to the maximum extent with a smaller increase in working hours, the third way to raise productivity.",
    "The statistical office reports GDP per hour worked as basic information for country performance assessments."
  ],
  summary: "Productivity is the ratio of output volume to input volume, P = O / I, with output measured by GNP or GDP and GDP per hour worked among the most widely used measures. Higher productivity means more output from the same inputs or the same output from fewer inputs, and it is a key source of economic growth and competitiveness. The three ways to increase productivity are raising output with the same input, cutting input with the same output, and maximising output with only a smaller increase in input.",
  visuals: [
    {
      type: "steps",
      config: {
        title: "Three Ways to Increase Productivity",
        steps: [
          { label: "Same input, more output", detail: "Increase the output using the same amount of inputs, for example with better seed." },
          { label: "Same output, less input", detail: "Reduce the input while maintaining the output as constant, for example with less waste." },
          { label: "Both together", detail: "Increase the output to the maximum extent with a smaller increase in input." },
          { label: "Check the ratio", detail: "Each way raises output per unit of input, P = O / I." }
        ]
      }
    },
    {
      type: "comparison",
      config: {
        title: "Output per Employee vs GDP per Hour Worked",
        left: { name: "Output per employee", items: ["Counts workers only", "Ignores hours per job", "Part-time work distorts it", "Crude labour measure"] },
        right: { name: "GDP per hour worked", items: ["Counts hours actually worked", "Captures labour input better", "Widely used internationally", "Better for comparisons"] }
      }
    },
    {
      type: "tableVisual",
      config: {
        title: "Productivity Exercises in Practice",
        headers: ["Case", "Output", "Input", "Productivity"],
        rows: [
          ["Wheat harvest", "60 quintals", "300 labour hours", "0.2 quintals per hour"],
          ["Garment plant, year 1", "12,000 shirts", "3,000 hours", "4 shirts per hour"],
          ["Garment plant, year 2", "12,000 shirts", "2,400 hours", "5 shirts per hour"],
          ["Whole economy", "240 billion birr GDP", "1.2 billion hours", "200 birr per hour"]
        ]
      }
    }
  ],
  questions: [
    { type: "mcq", q: "Productivity is commonly defined as:", options: ["the total value of output", "a ratio between the output volume and the volume of inputs", "the growth rate of GDP", "the number of workers employed"], answer: 1, difficulty: 1, explanation: "Productivity is the ratio between output volume and input volume." },
    { type: "mcq", q: "Which measure captures the use of labour inputs better than just output per employee?", options: ["GDP per capita", "GDP per hour worked", "Nominal GDP", "GNP per family"], answer: 1, difficulty: 1, explanation: "GDP per hour worked captures the use of labour inputs better than output per employee." },
    { type: "short", q: "Write the productivity formula using O for output and I for input.", answer: "p = o / i|productivity equals output divided by input", difficulty: 1, explanation: "Productivity (P) = Output (O) / Input (I)." },
    { type: "mcq", q: "A farm produces 60 quintals with 300 labour hours. Labour productivity is:", options: ["0.2 quintals per hour", "0.5 quintals per hour", "2 quintals per hour", "5 quintals per hour"], answer: 0, difficulty: 2, explanation: "60 / 300 = 0.2 quintals per labour hour." },
    { type: "tf", q: "Productivity can be increased by reducing the input while maintaining the output constant.", answer: true, difficulty: 1, explanation: "This is the second listed way of increasing productivity." },
    { type: "mcq", q: "Output for productivity measurement at the economy level is measured by:", options: ["firm profit", "GNP or GDP", "tax revenue", "imports"], answer: 1, difficulty: 1, explanation: "Output is measured by the gross national product (GNP) or gross domestic product (GDP)." },
    { type: "concept", q: "Explain why productivity is called a key source of economic growth and competitiveness.", answer: "more output per input raises gdp and enables better prices|better efficiency supports growth and competitiveness", difficulty: 2, explanation: "Higher productivity means more from the same inputs, which raises output growth and lets firms compete." },
    { type: "mcq", q: "Producing 12,000 shirts with 2,400 hours instead of 3,000 hours is an example of:", options: ["the first way to increase productivity", "the second way: reducing input with output constant", "reducing quality", "no productivity change"], answer: 1, difficulty: 2, explanation: "Output stayed at 12,000 while input fell from 3,000 to 2,400 hours, so productivity rose." },
    { type: "short", q: "The choice between different measures of productivity depends on what two considerations?", answer: "the purpose of the measurement and data availability", difficulty: 2, explanation: "The choice depends on the purpose of the productivity measurement and/or data availability." },
    { type: "concept", q: "Why is GDP per hour worked preferred for international comparisons of labour productivity?", answer: "it captures the use of labour inputs better than output per employee|hours worked differ between countries", difficulty: 2, explanation: "It captures labour inputs better than output per employee, making comparisons fairer." },
    { type: "mcq", q: "Raising output to the maximum extent with a smaller increase in input is which way of increasing productivity?", options: ["the first", "the second", "the third", "none of them"], answer: 2, difficulty: 1, explanation: "It is the third listed way of increasing productivity." }
  ]
};

Lessons["g11-economics-ue6-t3"] = {
  overview: "The Human Development Index (HDI) is a UNDP composite index that measures development through life expectancy, education and real GDP per capita instead of income alone. This lesson explains the three components, how each index is computed and averaged, Ethiopia's HDI value and rank, and the main criticisms of the index.",
  objectives: [
    "Define the HDI and state who developed it and for what purpose",
    "Identify the three components of the HDI and their sub-components",
    "Compute individual component indices using index = (actual - minimum) / (maximum - minimum)",
    "Combine the three indices into the HDI by taking their simple average",
    "Evaluate Ethiopia's HDI value and rank and the criticisms of the HDI"
  ],
  simple: "The basic objective of development is to create an enabling environment for people to enjoy long, healthy and creative lives. An increasing GDP is often seen as a measure of welfare, but it ignores the multi-dimensional nature of development and the tendency of capitalism to concentrate income and power in the hands of a few. The Human Development Index (HDI), conceived by the United Nations Development Programme (UNDP) and developed by Mahbub ul Haq and Amartya Sen, is a composite of three indicators: life expectancy at birth (health), educational attainments (adult literacy rate plus gross enrolment ratio), and real GDP per capita (standard of living). Each component is converted into an index between 0 and 1 using actual, minimum and maximum values, then the three indices are averaged to get the HDI. Ethiopia's HDI was 0.485 in 2019, ranking 173 of 189 countries, up from 0.292 in 2000, a 66.1% increase.",
  detailed: "<p><b>Why GDP alone is not enough.</b> An increasing GDP is often seen as a measure of welfare and economic success, but it fails to take into account the multi-dimensional nature of development or the inherent shortcomings of capitalism, which tends to concentrate income and thus power in the hands of a few. This weakness led to other measures. UNDP publishes several human development indicators: the Human Development Index (HDI), the Inequality-adjusted Human Development Index (IHDI), the Gender Inequality Index (GII), the Multidimensional Poverty Index (MPI) and the Gender Empowerment Measure (GEM).</p><p><b>Origins and purpose of the HDI.</b> Mahbub ul Haq and Amartya Sen developed the HDI. They aimed to build a crude index that was nevertheless a better indicator of well-being and capability than GNP per capita, and that could be constructed using data available for most countries of the world. It has been used in the Human Development Report published since 1989. The HDI is a composite criterion consisting of three indicators that measure the level of welfare of the people of a country.</p><p><b>The three components.</b> First, the <b>life expectancy indicators (LEI)</b>: life expectancy at birth, the number of years a newly born baby is expected to live; high life expectancy indicates a high level of development. Second, the <b>educational attainments indicators (EAI)</b>: constituted by the adult literacy rate (the percentage of people aged 15 and over who can understand, read and write a short and simple statement in their everyday life) and the gross enrolment ratio (the percentage of the population enrolled at primary, secondary and university level). Third, the <b>standard of living indicators (SLI)</b>: real GDP per capita, obtained by dividing GDP at constant prices by the total population; higher per capita real income usually represents a higher standard of living.</p><p><b>Constructing each index.</b> The UNDP first fixes maximum and minimum values of each indicator for a particular year; then: Achievement level = (Actual value - Minimum value) / (Maximum value - Minimum value). In the published formula the fixed limits are: life expectancy index = (LE - 25) / (85 - 25); education index = (2/3) * ALI + (1/3) * GEI, where ALI = adult literacy rate / 100 and GEI = combined gross enrolment ratio / 100; and income index = [log(GDPpc) - log(100)] / [log(4000) - log(100)], where GDPpc is GDP per capita at PPP in US dollars between 100 and 4000 dollars. The logarithm is used to account for the diminishing marginal utility of income.</p><p><b>Combining into the HDI.</b> The HDI is arrived at by first constructing the individual indices of the three components and then taking the simple average of the indices: HDI = (Income Index + Life Expectancy Index + Education Index) / 3, written in the textbook also as HDI = (LEI + EAI + SLI) / 3, a simple arithmetic average. A worked case: if life expectancy is 65 years with a maximum of 80 and a minimum of 20, LEI = (65 - 20) / (80 - 20) = 45 / 60 = 0.75. In 2010 a revised HDI was developed to account for inequality in a country: the IHDI, considered far more accurate than the initial HDI, though some still find the old formula useful.</p><p><b>Ethiopia's HDI value and rank.</b> Ethiopia's HDI value for 2019 was 0.485, which put the country in the <b>low human development</b> category, positioned at 173 out of 189 countries. Between 2000 and 2019, Ethiopia's HDI value increased from 0.292 to 0.485, an increase of 66.1 percent. Between 1990 and 2019, life expectancy at birth increased by 19.5 years, mean years of schooling increased by 1.4 years and expected years of schooling increased by 5.7 years.</p><p><b>Evaluation of the HDI.</b> Critics argue that the HDI assigns equal weights to factors that may not always be equally valuable; countries could achieve the same HDI through different combinations of life expectancy and GNI per capita, implying a person's life expectancy has an economic value. It also correlates factors more common in developed economies, such as higher education leading to higher GNI per capita. The HDI fails to take into account inequality, poverty and gender disparity: high GNI per capita may hide a country where GNI is reached by marginalising certain genders or ethnic classes or by a small wealthy percentage of the population. Finally, the factors are bounded between 0 and 1, so countries with already high GNI have little room to improve their score even if GNI keeps growing; the same bounds affect the life expectancy score. Still, the HDI emphasises the <b>quality of life</b>, in contrast to national and per capita income, which focuses only on the quantitative aspects of development.</p>",
  keyTerms: [
    { term: "Human Development Index (HDI)", def: "A UNDP composite criterion of three indicators - life expectancy, educational attainments and real GDP per capita - used to measure the welfare of a country's people." },
    { term: "Life expectancy at birth", def: "The number of years a newly born baby is expected to live; high life expectancy indicates high development." },
    { term: "Adult literacy rate (ALR)", def: "The percentage of people aged 15 and over who can understand, read and write a short and simple statement in their everyday life." },
    { term: "Gross enrolment ratio (GER)", def: "The percentage of the population enrolled at primary, secondary and university level; a higher ratio represents higher development." },
    { term: "Real GDP per capita", def: "GDP at constant prices divided by total population; also called real per capita income, used as the standard-of-living indicator." },
    { term: "Achievement index", def: "Index = (Actual value - Minimum value) / (Maximum value - Minimum value), computed for each HDI component." },
    { term: "Income Index", def: "[log(GDPpc) - log(100)] / [log(4000) - log(100)] for GDP per capita at PPP in USD; the logarithm accounts for diminishing marginal utility of income." },
    { term: "IHDI", def: "The Inequality-adjusted Human Development Index, developed in 2010 to account for inequality; considered far more accurate than the initial HDI." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "The life expectancy at birth of a particular country is 65 years. Assuming a maximum value of 80 and a minimum of 20 for the year, calculate the life expectancy index (LEI).",
      given: "Life expectancy = 65 years; maximum = 80; minimum = 20.",
      formula: "Index = (Actual value - Minimum value) / (Maximum value - Minimum value).",
      substitution: "LEI = (65 - 20) / (80 - 20).",
      calculation: "65 - 20 = 45; 80 - 20 = 60; 45 / 60 = 0.75.",
      answer: "The life expectancy index is 0.75."
    },
    {
      problem: "A country has an adult literacy rate of 50% and a combined gross enrolment ratio of 60%. Compute the education index.",
      given: "ALR = 50; combined gross enrolment ratio = 60; both indices scaled from 0 to 100.",
      formula: "Education index = (2/3) * ALI + (1/3) * GEI, where ALI = ALR / 100 and GEI = ratio / 100.",
      substitution: "ALI = 50 / 100 = 0.5; GEI = 60 / 100 = 0.6; Education index = (2/3) * 0.5 + (1/3) * 0.6.",
      calculation: "(2/3) * 0.5 = 0.333; (1/3) * 0.6 = 0.2; 0.333 + 0.2 = 0.533.",
      answer: "The education index is about 0.53."
    },
    {
      problem: "A country's three component indices are LEI = 0.62, EAI = 0.47 and SLI (real GDP per capita index) = 0.44. Compute its HDI.",
      given: "LEI = 0.62; EAI = 0.47; SLI = 0.44.",
      formula: "HDI = (LEI + EAI + SLI) / 3, the simple arithmetic average of the three indices.",
      substitution: "HDI = (0.62 + 0.47 + 0.44) / 3.",
      calculation: "0.62 + 0.47 + 0.44 = 1.53; 1.53 / 3 = 0.51.",
      answer: "The HDI is 0.51, a medium level of human development on this illustrative data."
    },
    {
      problem: "Ethiopia's HDI was 0.292 in 2000 and 0.485 in 2019. Verify the reported percentage increase.",
      given: "HDI 2000 = 0.292; HDI 2019 = 0.485.",
      formula: "Percentage change = (new value - old value) / old value * 100.",
      substitution: "Increase = (0.485 - 0.292) / 0.292 * 100.",
      calculation: "0.485 - 0.292 = 0.193; 0.193 / 0.292 = 0.661; 0.661 * 100 = 66.1.",
      answer: "The increase is 66.1%, exactly as the Human Development Report states for Ethiopia between 2000 and 2019."
    }
  ],
  commonMistakes: [
    "Thinking the HDI measures income alone; it combines health, education and the standard of living.",
    "Forgetting the 2/3 and 1/3 weights inside the education index on the adult literacy rate and gross enrolment ratio.",
    "Omitting the logarithm in the income index, which accounts for the diminishing marginal utility of income.",
    "Averaging the raw values instead of the constructed indices between 0 and 1 when computing the HDI.",
    "Believing the HDI fully captures inequality, poverty and gender disparity; it does not, which is why the IHDI was created.",
    "Assuming two countries with the same HDI had identical life expectancy and income; they may combine them differently.",
    "Not realising the index values are bounded between 0 and 1, which limits room for improvement for already high scorers."
  ],
  applications: [
    "The UNDP Human Development Report ranks countries so Ethiopia can benchmark itself against Kenya, Eritrea, Sudan, Egypt and Somalia.",
    "Ethiopia's rise from 0.292 in 2000 to 0.485 in 2019 is used to document the human development gains of the country's plans.",
    "Health planners read a 19.5-year gain in life expectancy between 1990 and 2019 as the outcome of expanded health services.",
    "Education planners track expected and mean years of schooling to judge progress on the education component of the HDI.",
    "Because GDP concentrates in the hands of a few, the HDI is used to expose growth whose benefits did not reach ordinary households.",
    "The IHDI shows how much a country's measured development falls when inequality is taken into account."
  ],
  summary: "The HDI, developed by Mahbub ul Haq and Amartya Sen and published by UNDP since 1989, combines three indices: life expectancy at birth, educational attainments (adult literacy rate and gross enrolment ratio) and real GDP per capita, each computed as (actual - minimum) / (maximum - minimum) and averaged. Ethiopia scored 0.485 in 2019, ranking 173 of 189 countries with low human development, a 66.1% rise since 2000. The index stresses quality of life but is criticised for equal weighting, omission of inequality and gender disparity, and its 0-to-1 bounds.",
  visuals: [
    {
      type: "steps",
      config: {
        title: "Computing the HDI Step by Step",
        steps: [
          { label: "Fix limits", detail: "UNDP fixes the maximum and minimum values of each indicator for the year." },
          { label: "Compute LEI", detail: "LEI = (LE - minimum) / (maximum - minimum), for example (65 - 20) / (80 - 20) = 0.75." },
          { label: "Compute EAI", detail: "Education index = (2/3) ALI + (1/3) GEI from literacy and enrolment." },
          { label: "Compute SLI", detail: "Income index from log(GDP per capita at PPP in USD) with limits 100 and 4000 dollars." },
          { label: "Average the three", detail: "HDI = (LEI + EAI + SLI) / 3, a simple arithmetic average." }
        ]
      }
    },
    {
      type: "mindMap",
      config: {
        title: "The Three Components of the HDI",
        center: "HDI",
        branches: [
          { label: "Health (LEI)", items: ["Life expectancy at birth", "Long life signals development"] },
          { label: "Education (EAI)", items: ["Adult literacy rate", "Gross enrolment ratio"] },
          { label: "Living standard (SLI)", items: ["Real GDP per capita", "Measured at PPP in USD"] },
          { label: "Related UNDP indexes", items: ["IHDI", "GII", "MPI", "GEM"] }
        ]
      }
    },
    {
      type: "qa",
      config: {
        title: "Ethiopia's HDI at a Glance",
        pairs: [
          { q: "What was Ethiopia's HDI in 2019?", a: "0.485, in the low human development category." },
          { q: "What was its rank?", a: "173 out of 189 countries." },
          { q: "How much did the HDI rise from 2000?", a: "From 0.292 to 0.485, an increase of 66.1 percent." },
          { q: "What improved between 1990 and 2019?", a: "Life expectancy up 19.5 years; mean schooling up 1.4 years; expected schooling up 5.7 years." }
        ]
      }
    }
  ],
  questions: [
    { type: "mcq", q: "The Human Development Index was developed by:", options: ["Keynes and Friedman", "Mahbub ul Haq and Amartya Sen", "Marx and Engels", "the World Bank low-income team"], answer: 1, difficulty: 1, explanation: "Mahbub ul Haq and Amartya Sen developed the HDI." },
    { type: "mcq", q: "The three components of the HDI are:", options: ["exports, imports and savings", "life expectancy, educational attainments and real GDP per capita", "inflation, growth and trade", "literacy, industry and aid"], answer: 1, difficulty: 1, explanation: "The HDI combines life expectancy, education and real GDP per capita." },
    { type: "mcq", q: "Adult literacy rate measures the percentage of people aged 15 and over who can:", options: ["use a mobile phone", "understand, read and write a short and simple statement in everyday life", "finish secondary school", "speak two languages"], answer: 1, difficulty: 2, explanation: "That is the textbook definition of adult literacy." },
    { type: "mcq", q: "The constituents of the educational attainments indicator are:", options: ["adult literacy rate and gross enrolment ratio", "life expectancy and infant mortality", "GDP and GNP", "Primary school net intake and hours taught"], answer: 0, difficulty: 1, explanation: "Educational attainment is made up of the adult literacy rate and the gross enrolment ratio." },
    { type: "tf", q: "The logarithm is used in the income index to account for the diminishing marginal utility of income.", answer: true, difficulty: 2, explanation: "The textbook says the logarithm accounts for the diminishing marginal utility of income." },
    { type: "short", q: "Using a maximum of 80 and a minimum of 20, compute the life expectancy index for life expectancy of 65 years.", answer: "0.75", difficulty: 2, explanation: "(65 - 20) / (80 - 20) = 45 / 60 = 0.75." },
    { type: "concept", q: "Why was the IHDI introduced in 2010, and how is it regarded?", answer: "to account for inequality and is considered far more accurate than the initial hdi", difficulty: 3, explanation: "The 2010 revised HDI, the IHDI, was developed to account for inequality in a country and is considered far more accurate." },
    { type: "mcq", q: "Ethiopia's 2019 HDI of 0.485 placed it:", options: ["in high human development, rank 173 of 189", "in low human development, rank 173 of 189", "in medium development, rank 73 of 189", "at the top among African countries"], answer: 1, difficulty: 2, explanation: "0.485 put Ethiopia in the low human development category at 173 out of 189 countries." },
    { type: "concept", q: "Give three criticisms of the HDI mentioned in the lesson.", answer: "equal weighting|ignores inequality poverty and gender disparity|values bounded between 0 and 1|correlates factors common in developed economies", difficulty: 3, explanation: "Critics cite equal weights of unequal factors, omission of inequality, poverty and gender disparity, the 0 to 1 bounds, and correlation with developed-economy factors." },
    { type: "mcq", q: "A higher gross enrolment ratio represents:", options: ["a lower level of development", "a higher level of development", "no change in development", "only university expansion"], answer: 1, difficulty: 1, explanation: "A higher gross enrolment ratio represents a higher level of development." },
    { type: "tf", q: "The HDI emphasises the quality of life, while per capita income focuses only on quantitative aspects of development.", answer: true, difficulty: 2, explanation: "The lesson states the HDI emphasises quality of life in contrast to national and per capita income." }
  ]
};

Lessons["g11-economics-ue6-t4"] = {
  overview: "This lesson merges sections 6.4 and 6.5: Amartya Sen's capability approach, which measures development by people's real freedoms to live lives they value, and sustainable development, which meets present needs without compromising future generations and rests on three pillars.",
  objectives: [
    "Define the capability approach and identify its two central concepts, functioning and capability",
    "Explain the role of conversion factors in turning resources into functionings",
    "Distinguish real or substantive freedoms from mere formal rights and freedoms",
    "Define sustainable development and state its three pillars",
    "Apply the capability and sustainability ideas to Ethiopian development choices"
  ],
  simple: "The capability approach was first articulated by the Indian economist and philosopher Amartya Sen in the 1980s. He argues that the capability to function is what really matters for status as a poor or non-poor person: development has to be more concerned with enhancing the lives we lead and the freedoms we enjoy than with treating growth as an end in itself. Capabilities are what people can achieve if they so choose - being well-nourished, getting married, being educated, travelling - while functioning is the use a person makes of the commodities at his or her command. Whether capabilities are achieved depends on personal, sociopolitical and environmental conditions called conversion factors. Capabilities are real or substantive freedoms, cleared of obstacles, unlike mere formal rights. Sustainable development, in turn, meets the needs of the present generation without compromising the ability of future generations to meet their own needs, resting on three pillars: economic growth, environmental stewardship and social inclusion.",
  detailed: "<p><b>Sen's argument.</b> The capability approach was first articulated by the Indian economist and philosopher <b>Amartya Sen</b> in the 1980s and remains most closely associated with him. He argues that the capability to function is what really matters for status as a poor or non-poor person. As Sen put it, economic growth cannot be sensibly treated as an end in itself; development has to be more concerned with enhancing the lives we lead and the freedoms we enjoy. Development should look at people's capabilities: their abilities and possibilities to live a good life, make choices about their education and economic activities, and their freedom to participate in decision making. Development therefore has the role of strengthening autonomy and substantive freedoms that allow individuals to fully participate in economic life; in the aggregate this should lower transaction costs and increase social mobility.</p><p><b>Functioning and capability.</b> The quality of life people actually achieve is analysed through two central concepts. Capabilities are what people can achieve if they so choose, such as being well-nourished, getting married, being educated and travelling. Functioning refers to the use that a person makes of the commodities at his/her command. Whether someone can convert a set of means to resources and public goods into a functioning - that is, whether he or she has a particular capability - crucially depends on certain personal, sociopolitical and environmental conditions, which in the capability literature are called <b>conversion factors</b>.</p><p><b>Real freedoms versus formal rights.</b> Capabilities have also been referred to as real or substantive freedoms, because they denote freedoms that have been cleared of any potential obstacles, in contrast to mere formal rights and freedoms. Freedom is integral to Sen's approach, which distinguishes between people's capabilities, what they can potentially be and do, and what they choose to do with them, their actual functioning. So a written right on paper does not make a person capable; the obstacles must be removed.</p><p><b>The fasting man and the farmer.</b> Consider a rich and healthy person who, for religious reasons, fasts for a specified period, temporarily reducing his calorie intake below the level considered a basic need. Consider also a poor female farmer who does long hours of hard physical work in the fields for low payment and cannot afford to buy sufficient food for herself and her children. Over the short term the man's calorie intake (his functioning of being well nourished) may be less than the woman's, but his potential, his capability to be well nourished, was much greater than hers. The man had the possibility and chose to fast, while the woman was so disadvantaged by the labour market that she had no options. The capability approach is employed extensively in the context of human development, for example by the UNDP, as a broader, deeper alternative to narrowly economic metrics such as growth in GDP per capita.</p><p><b>Sustainable development defined.</b> Sustainable development can be defined as development that meets the needs of the present generation <b>without compromising the ability of future generations to meet their own needs</b>. Sustainability goals, such as the current UN Sustainable Development Goals, address the global challenges including poverty, inequality, climate change, environmental degradation, peace and justice. Sustainable development recognizes that growth must be both inclusive and environmentally sound to reduce poverty and build shared prosperity for today's population and continue to meet the needs of future generations.</p><p><b>The three pillars and careful resource use.</b> Sustainable development entails efficient and carefully planned use of resources to deliver both immediate and long-term benefits for people, the planet and prosperity. The three pillars of sustainable development are <b>economic growth, environmental stewardship and social inclusion</b>, across all sectors of development, from cities facing rapid urbanization to agriculture, infrastructure, energy development and use, water availability and transportation. Sustainability also means using a resource in ways that do not cause long-term depletion of resources or affect the diversity of the ecosystem.</p>",
  keyTerms: [
    { term: "Capability approach", def: "Amartya Sen's development framework, articulated in the 1980s, holding that the capability to function is what really matters for poor or non-poor status." },
    { term: "Capability", def: "What people can achieve if they so choose, such as being well-nourished, getting married, being educated and travelling." },
    { term: "Functioning", def: "The use that a person makes of the commodities at his/her command; the chosen state of actually doing or being." },
    { term: "Conversion factors", def: "Personal, sociopolitical and environmental conditions that determine whether a person can convert resources into a functioning." },
    { term: "Substantive freedoms", def: "Real freedoms cleared of any potential obstacles, in contrast to mere formal rights and freedoms." },
    { term: "Sustainable development", def: "Development that meets the needs of the present generation without compromising the ability of future generations to meet their own needs." },
    { term: "Three pillars of sustainability", def: "Economic growth, environmental stewardship and social inclusion across all sectors of development." },
    { term: "Inter-generational equity", def: "Fairness between present and future generations, the ethical core of sustainability." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "A rich and healthy man fasts for a month for religious reasons while a poor female farmer doing long hours of hard work cannot afford sufficient food. Whose functioning is lower, and whose capability to be well nourished is greater?",
      given: "The man chooses low calorie intake; the woman's low intake is not a choice.",
      formula: "Principle: functioning is actual use of the commodities one commands; capability is what one can achieve if one so chooses.",
      substitution: "Over the short term the man's calorie intake may be less than the woman's, so his functioning of being well nourished is lower.",
      calculation: "The man had the possibility of being well nourished and chose to fast, while the woman was so disadvantaged by the labour market that she had no options.",
      answer: "The man's functioning is temporarily lower, but his capability to be well nourished is much greater than hers."
    },
    {
      problem: "In a village, all children have the formal right to attend school, but the nearest school is 25 km away and girls are expected to work at home. Classify this situation using the capability approach.",
      given: "A formal right to education exists; distance and household expectations block actual schooling.",
      formula: "Principle: capabilities are real or substantive freedoms cleared of obstacles, unlike mere formal rights and freedoms.",
      substitution: "Distance is an environmental and sociopolitical conversion factor; household attitudes are another.",
      calculation: "Because the obstacles are not removed, the children lack the capability to be educated even though the right exists on paper.",
      answer: "Formal right without functioning: the children are not substantively free to be educated until the conversion factors change."
    },
    {
      problem: "A region plans to harvest its forest by cutting all mature trees within five years for quick export income. Assess the plan using sustainable development.",
      given: "The plan maximises present income; the forest can only regenerate slowly.",
      formula: "Principle: sustainable development meets present needs without compromising the ability of future generations to meet theirs.",
      substitution: "Clear-cutting causes long-term depletion of a resource and damages the diversity of the ecosystem.",
      calculation: "Immediate income is gained, but future generations lose timber, water regulation and soil protection, so the plan fails the sustainability test.",
      answer: "The plan is unsustainable; growth must be both inclusive and environmentally sound to serve present and future generations."
    },
    {
      problem: "A city expands housing onto farmland and wetlands to meet rapid urbanization faster than it plans water and transport services. Which pillars of sustainable development are ignored?",
      given: "Urban growth proceeds without plans for water availability and transportation.",
      formula: "Principle: the three pillars are economic growth, environmental stewardship and social inclusion across all sectors.",
      substitution: "Housing raises output growth, but wetland loss ignores environmental stewardship and unplanned services hurt social inclusion.",
      calculation: "Sectors from cities to agriculture, infrastructure, energy, water availability and transportation must all be covered for sustainability.",
      answer: "Environmental stewardship and social inclusion are ignored; development recklessly chases one pillar, economic growth."
    }
  ],
  commonMistakes: [
    "Confusing capability with functioning; capability is the possible achievement, functioning is the actual use or state.",
    "Thinking a formal right on paper is enough for development; capabilities must be cleared of obstacles.",
    "Believing Sen treated economic growth as the end of development; he wrote that growth cannot be sensibly treated as an end in itself.",
    "Ignoring conversion factors when asking why people with the same resources achieve different functionings.",
    "Defining sustainable development as only protecting nature, forgetting its economic growth and social inclusion pillars.",
    "Assuming sustainability cares only about the present; its core is not compromising future generations.",
    "Treating low observed calorie intake as proof of poverty, overlooking that it may be a chosen fast of a capable person."
  ],
  applications: [
    "The UNDP uses the capability approach as a broader, deeper alternative to narrowly economic metrics such as growth in GDP per capita.",
    "Rural electrification raises capabilities by clearing a conversion obstacle: children can now study at night and firms can process goods.",
    "Ethiopia's climate resilient thinking in plains and highlands reflects environmental stewardship alongside growth and inclusion.",
    "Checking whether new girls' scholarships become real freedoms by auditing school access, distance and safety, not just enrolment law.",
    "Recycling and careful planned use of shared water in a kebele deliver both immediate and long-term benefits for people and the planet.",
    "Asking whether market or government policy strengthens autonomy and substantive freedoms that let people participate in economic life."
  ],
  summary: "The capability approach of Amartya Sen measures development by the capabilities - the real, substantive freedoms cleared of obstacles - that let people achieve valued functionings, supported by personal, sociopolitical and environmental conversion factors, not by income alone. Sustainable development meets the needs of the present generation without compromising future generations, resting on the pillars of economic growth, environmental stewardship and social inclusion. Together they redefine development as freed lives on a liveable planet rather than as rising output alone.",
  visuals: [
    {
      type: "comparison",
      config: {
        title: "Capability vs Functioning - and Present vs Future",
        left: { name: "Capability", items: ["What people can achieve if they choose", "Real or substantive freedom", "Cleared of obstacles", "Potential to be and do"] },
        right: { name: "Functioning", items: ["What people actually do with means", "Use of commodities one commands", "Chosen state of being", "Actual achievement"] }
      }
    },
    {
      type: "mindMap",
      config: {
        title: "From Resources to Lives: Sen's Framework",
        center: "Capability approach",
        branches: [
          { label: "Means", items: ["Resources", "Public goods"] },
          { label: "Conversion factors", items: ["Personal", "Sociopolitical", "Environmental"] },
          { label: "Ends", items: ["Capabilities", "Functionings"] },
          { label: "Development role", items: ["Strengthen autonomy", "Substantive freedoms", "Participation in economic life"] }
        ]
      }
    },
    {
      type: "tableVisual",
      config: {
        title: "Sustainable Development at a Glance",
        headers: ["Element", "Meaning", "Example"],
        rows: [
          ["Definition", "Meet present needs without compromising future generations", "Harvest forests faster than they regrow, or not"],
          ["Pillar 1", "Economic growth", "Productive jobs from farms and factories"],
          ["Pillar 2", "Environmental stewardship", "Protecting watersheds and ecosystems"],
          ["Pillar 3", "Social inclusion", "Sharing prosperity across genders and ethnic classes"]
        ]
      }
    }
  ],
  questions: [
    { type: "mcq", q: "The capability approach was first articulated by:", options: ["Mahbub ul Haq alone", "Amartya Sen in the 1980s", "the World Bank in the 1990s", "the UNDP in 2015"], answer: 1, difficulty: 1, explanation: "The capability approach was first articulated by the Indian economist and philosopher Amartya Sen in the 1980s." },
    { type: "mcq", q: "In the capability approach, functioning refers to:", options: ["the use a person makes of the commodities at his or her command", "what a person can achieve if he or she so chooses", "the growth rate of GDP", "formal constitutional rights"], answer: 0, difficulty: 2, explanation: "Functioning is the use a person makes of the commodities at his or her command." },
    { type: "mcq", q: "Whether resources can be converted into a functioning depends on personal, sociopolitical and environmental conditions called:", options: ["multipliers", "conversion factors", "bundles", "trade-offs"], answer: 1, difficulty: 2, explanation: "These conditions are called conversion factors in the capability literature." },
    { type: "tf", q: "Capabilities have been referred to as real or substantive freedoms, in contrast to mere formal rights and freedoms.", answer: true, difficulty: 1, explanation: "Capabilities denote freedoms cleared of any potential obstacles." },
    { type: "short", q: "Which UN organisation employs the capability approach extensively as a broader, deeper alternative to GDP per capita metrics?", answer: "the undp|undp", difficulty: 2, explanation: "The UNDP employs the capability approach extensively in the context of human development." },
    { type: "concept", q: "In the fasting man and poor farmer example, why is the man's situation not poverty despite low calorie intake?", answer: "his capability to be well nourished is greater|he chose to fast and could eat if he chose", difficulty: 3, explanation: "The man had the possibility of being well nourished and chose to fast, while the farmer had no options; capability, not functioning, separates poor and non-poor." },
    { type: "mcq", q: "Sustainable development is defined as development that meets the needs of the present generation:", options: ["as fast as possible", "without compromising the ability of future generations to meet their own needs", "using only foreign aid", "with maximum consumption today"], answer: 1, difficulty: 1, explanation: "That is the standard definition of sustainable development." },
    { type: "mcq", q: "The three pillars of sustainable development are:", options: ["growth, inflation and unemployment", "economic growth, environmental stewardship and social inclusion", "health, education and income", "peace, justice and trade"], answer: 1, difficulty: 1, explanation: "The pillars are economic growth, environmental stewardship and social inclusion." },
    { type: "concept", q: "Explain why growth must be both inclusive and environmentally sound according to the lesson.", answer: "to reduce poverty and build shared prosperity and keep meeting future needs|so prosperity is shared and resources last", difficulty: 2, explanation: "Growth must be inclusive and environmentally sound to reduce poverty, build shared prosperity today and continue meeting future generations' needs." },
    { type: "tf", q: "A capability is what a person actually achieves with the commodities he or she commands.", answer: false, difficulty: 2, explanation: "That describes functioning; a capability is what people can achieve if they so choose." },
    { type: "short", q: "Name the three kinds of conversion factors in the capability literature.", answer: "personal, sociopolitical and environmental", difficulty: 2, explanation: "Conversion factors are personal, sociopolitical and environmental conditions." }
  ]
};

Lessons["g11-economics-ue6-t5"] = {
  overview: "This lesson merges sections 6.6 and 6.7: it identifies the eight Millennium Development Goals (2000-2015), analyses their achievements and shortfalls, introduces the 17 Sustainable Development Goals of the 2030 Agenda and Africa's Agenda 2063, and evaluates Ethiopia's performance and lessons learned.",
  objectives: [
    "Identify the eight Millennium Development Goals and the bodies that converged behind them",
    "Evaluate the global achievements and the uneven shortfalls of the MDGs",
    "Explain the 2030 Agenda, its 17 SDGs and their three integrated dimensions",
    "Describe Agenda 2063 as Africa's blueprint for inclusive and sustainable development",
    "Analyse Ethiopia's performance against the MDGs and its alignment of plans with the SDGs"
  ],
  simple: "The international development agenda has been led by the United Nations since the late 1940s, and the Millennium Declaration of 2000 brought UNDP, UNEP, WHO, UNICEF, UNESCO and other agencies together behind eight Millennium Development Goals for 2015, with specific targets. The MDGs gave the development world a common language and helped lift more than one billion people out of extreme poverty, yet progress was uneven and inequalities persisted. In 2015 all UN member states adopted the 2030 Agenda for Sustainable Development, whose heart is 17 Sustainable Development Goals integrating the social, economic and environmental dimensions of development, for developed and developing countries alike, alongside Africa's Agenda 2063. Ethiopia is globally recognised for taking ownership of the MDG agenda: it achieved six of the eight goals with significant progress on the remaining two, MDG 3 and MDG 5, and it aligned GTP II (2015-2020) and the ten-year Prosperity Plan (2020-2030) with the 2030 Agenda.",
  detailed: "<p><b>From fragmented summits to the Millennium Declaration.</b> The international development agenda has been actively led by the United Nations and its technical agencies and funds since their inception in the late 1940s. Until the 1990s the approach was fragmented and disjointed, initiated by specialized agencies or funds at various World Summits and Conferences to address three dimensions of development: economic, social and environmental. The Millennium Declaration and the MDGs saw the convergence of UNDP, UNEP, WHO, UNICEF, UNESCO and other development agencies behind a single agenda.</p><p><b>The eight MDGs.</b> The goals, listed in the unit's Table 6.2, are ambitious: (1) eradicate extreme poverty and hunger; (2) achieve universal primary education; (3) promote gender equality and empower women; (4) reduce child mortality; (5) improve maternal health; (6) combat HIV/AIDS, malaria and other diseases; (7) ensure environmental sustainability; (8) foster a global partnership for development. The goals were then assigned specific targets deemed achievable by 2015 based on the pace of past international development achievements.</p><p><b>What the MDGs achieved and left unfinished.</b> The MDGs were revolutionary: they provided a common language to reach global agreement, were realistic and easy to communicate, had a clear measurement and monitoring mechanism, generated innovative partnerships and showed the value of ambitious goals. They helped lift more than one billion people out of extreme poverty, made inroads against hunger, enabled more girls than ever to attend school and protected the planet; the world already realized the first MDG of halving the extreme poverty rate by 2015. Yet inequalities persist and progress has been uneven: the poor remain overwhelmingly concentrated in some parts of the world, and progress tends to bypass women, who continue to die during pregnancy or from childbirth-related complications, and those lowest on the economic ladder or disadvantaged by age, disability or ethnicity.</p><p><b>The SDGs and the 2030 Agenda.</b> The MDGs expired in 2015, and the focus moved to a sustainable world in which environmental sustainability, social inclusion and economic development are equally valued. The 2030 Agenda for Sustainable Development, adopted by all United Nations member states in 2015, provides a shared blueprint for peace and prosperity for people and the planet, now and into the future. At its heart are the 17 SDGs, an urgent call to action by all countries, developed and developing, in a global partnership. Compared with the eight MDGs, the 17 SDGs are more ambitious in scope and universal in coverage, setting targets for both developing and developed countries and adopting a more comprehensive approach that integrates the social, economic and environmental dimensions of development. Ending poverty and other deprivations must go hand-in-hand with strategies that improve health and education, reduce inequality, spur economic growth and tackle climate change while preserving oceans and forests. The SDGs are also known as the Global Goals.</p><p><b>Agenda 2063.</b> Agenda 2063 is Africa's blueprint and master plan for transforming Africa into the global powerhouse of the future, the continent's strategic framework for inclusive and sustainable development and a concrete manifestation of the pan-African drive for unity, self-determination, freedom, progress and collective prosperity. Its genesis was African leaders' realization that the continent needed to refocus from the struggle against apartheid and the attainment of political independence, which had been the focus of the OAU, toward inclusive social and economic development, continental and regional integration, and democratic governance, peace and security. African heads of state and government signed the 50th Anniversary Solemn Declaration during the Golden Jubilee of the OAU/AU in May 2013, and Agenda 2063 is how the continent intends to achieve the Pan-African Vision within a 50-year period from 2013 to 2063.</p><p><b>Ethiopia's performance against the MDGs.</b> Ethiopia is globally recognized for having taken ownership of the MDG agenda and integrating it into successive national development plans, from the Sustainable Development Poverty Reduction Programme (SDPRP, 2002/03 to 2004/05) to the First Growth and Transformation Plan (GTP I, 2010/11 to 2014/15). Ethiopia successfully achieved <b>six of the eight MDGs</b> and made significant progress on the remaining two, MDG 3 and MDG 5. The government also formulated a Climate Resilient Green Economy (CRGE) strategy and set the bold vision of becoming a middle-income, carbon-neutral economy by 2025. Its pro-poor policies mainstreamed global frameworks such as the MDGs, the Brussels Programme of Action and the Istanbul Programme of Action for Least Developed Countries.</p><p><b>Challenges and alignment with the SDGs.</b> Despite the strong MDG performance, low implementation capacity and scarce financial resources were among the challenges, contributing to a high trade deficit, low agricultural production, a savings-investment gap and inflation pressure that threatened macroeconomic stability. After the SDGs were adopted in September 2015, Ethiopia proactively mainstreamed and aligned them with the Second Growth and Transformation Plan (GTP II, 2015/16 to 2019/20), set within the long-term vision of becoming a lower middle-income country by 2025, and then formulated a ten-year Prosperity Plan for 2019/20 to 2029/30 that is fully aligned with the 2030 Agenda. The plan's priorities include keeping agriculture the mainstay of accelerated development, transforming manufacturing, enhancing competitiveness, efficiency, productivity and quality, correcting demand-supply imbalances, fostering construction and project management capacity, institutionalizing urban administration, enabling domestic investors, building human resources and technological capacity, building a climate resilient green economy, and eliminating rent-seeking behaviours. Huge gaps remain in developmental capacity at all levels, with misperceptions among executive and implementing bodies and deficiencies in motivation and sense of ownership; yet efforts continue to fill identified policy gaps, and the ten-year Prosperity Plan has been harmonized and integrated with the three dimensions of the SDGs.</p>",
  keyTerms: [
    { term: "MDGs", def: "The eight Millennium Development Goals set in the Millennium Declaration with targets for 2015, from eradicating extreme poverty and hunger to a global partnership for development." },
    { term: "2030 Agenda", def: "The shared blueprint for peace and prosperity adopted by all UN member states in 2015, at whose heart are the 17 Sustainable Development Goals." },
    { term: "SDGs", def: "The 17 Sustainable Development Goals, or Global Goals, applying to all countries, developed and developing, in a global partnership to end poverty, protect the planet and ensure peace and prosperity." },
    { term: "Agenda 2063", def: "Africa's blueprint and master plan, adopted from the 50th Anniversary Solemn Declaration of May 2013, to realize the Pan-African Vision within 50 years, from 2013 to 2063." },
    { term: "CRGE", def: "Ethiopia's Climate Resilient Green Economy strategy, with the vision of a middle-income carbon-neutral economy by 2025." },
    { term: "GTP II", def: "Ethiopia's Second Growth and Transformation Plan, the five-year blueprint from 2015/16 to 2019/20 aligned with the SDGs." },
    { term: "Prosperity Plan", def: "Ethiopia's ten-year plan (2019/20 to 2029/30), fully aligned with the 2030 Agenda and harmonized with its three dimensions." },
    { term: "Global partnership", def: "MDG 8 and the spirit of the SDGs: developed and developing countries acting together for development." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "Ethiopia is reported to have successfully achieved six of the eight MDGs and made significant progress on the remaining two. Express this performance as a percentage and name the two goals not fully achieved.",
      given: "Fully achieved goals = 6; total goals = 8; partially achieved = MDG 3 and MDG 5.",
      formula: "Achievement percentage = goals fully achieved / total goals * 100.",
      substitution: "6 / 8 * 100.",
      calculation: "6 / 8 = 0.75; 0.75 * 100 = 75.",
      answer: "Ethiopia fully achieved 75% of the MDGs (6 of 8), with significant progress on MDG 3, gender equality, and MDG 5, maternal health."
    },
    {
      problem: "Compare the scope of the MDGs and the SDGs in numbers, and state what makes the SDGs more ambitious and universal.",
      given: "MDGs: 8 goals for the 2000-2015 period; SDGs: 17 goals of the 2030 Agenda adopted in 2015.",
      formula: "Principle: compared to the MDGs, the 17 SDGs are more ambitious in scope and universal in coverage, setting targets for developing and developed countries.",
      substitution: "17 / 8 = 2.125, so the SDGs more than double the number of goals.",
      calculation: "The SDGs also integrate the social, economic and environmental dimensions whereas the MDG era approach was more fragmented.",
      answer: "8 MDGs versus 17 SDGs; the SDGs are universal (all countries), more comprehensive, and integrate all three dimensions of development."
    },
    {
      problem: "The 50th Anniversary Solemn Declaration was signed in May 2013 for a 50-year horizon. Over which years does Agenda 2063 run, and when do its main international companion goals expire?",
      given: "Solemn Declaration signed May 2013; horizon of 50 years; SDGs adopted in 2015.",
      formula: "Agenda horizon = starting year + planned duration.",
      substitution: "2013 + 50 = 2063; SDGs: 2015 + 15 = 2030.",
      calculation: "Agenda 2063 runs from 2013 to 2063; the SDGs run to 2030, so Agenda 2063 continues about 33 years beyond the SDG deadline.",
      answer: "Agenda 2063 spans 2013 to 2063; the SDGs expire in 2030, leaving Africa's blueprint to guide the decades after."
    },
    {
      problem: "Ethiopia's SDG-aligned national plans cover 2015/16 to 2019/20 and 2019/20 to 2029/30. Show that these plans splice together into the ten-year national development period stated in the lesson.",
      given: "GTP II: 2015/16 to 2019/20 (first five-year phase); long-term national development plan: 2019/20 to 2029/30 (ten years).",
      formula: "Principle: the GTP II is the first five-year phase of the long-term national development plan under implementation.",
      substitution: "GTP II ends 2019/20 and the Prosperity Plan begins 2019/20, so together they cover 2015/16 to 2029/30, about fourteen years of planned alignment.",
      calculation: "GTP II covers 5 fiscal years and the Prosperity Plan covers 10, so Ethiopia has mapped successive medium-term plans onto the 2030 SDG horizon.",
      answer: "GTP II and the ten-year Prosperity Plan together carry the 2030 Agenda into Ethiopia's national development framework right up to the SDG deadline."
    }
  ],
  commonMistakes: [
    "Saying the MDGs had more than eight goals, or forgetting the eighth goal, the global partnership for development.",
    "Mixing up the periods: the MDGs ran 2000 to 2015, while the SDGs were adopted in 2015 for the 2015-2030 period.",
    "Believing the SDGs set targets only for developing countries; they are universal, covering developed countries too.",
    "Confusing the SDGs with Agenda 2063, the separate African Union continental blueprint running 2013 to 2063.",
    "Claiming Ethiopia achieved all eight MDGs; it achieved six, with significant progress on MDG 3 and MDG 5.",
    "Thinking the SDGs replaced the three development dimensions; they integrate social, economic and environmental dimensions into one agenda.",
    "Forgetting that even after MDG success Ethiopia faced low implementation capacity and scarce financial resources."
  ],
  applications: [
    "Ethiopia integrated the MDGs into successive plans from the SDPRP through GTP I, a model of national ownership used by UNDP in 2015.",
    "Ethiopia's budget planners align the ten-year Prosperity Plan's priorities, such as manufacturing transformation, with SDG targets on industry and decent work.",
    "The CRGE strategy and the carbon-neutral middle-income vision connect national development to SDG work on climate change.",
    "A student report on MDG health performance and SDG gender equality links maternal health and women's empowerment to policies like girls' schooling.",
    "African leaders use Agenda 2063 alongside the 2030 Agenda to demand continental and regional integration, from free movement to infrastructure corridors.",
    "Analysts watch Ethiopia's trade deficit, agricultural production, savings-investment gap and inflation as the macroeconomic risks to SDG implementation."
  ],
  summary: "The eight MDGs, backed by the Millennium Declaration and UN agencies, unified global development around 2015 targets and helped lift over one billion people from extreme poverty, though progress bypassed women and the poorest. In 2015 the 2030 Agenda adopted by all UN member states set 17 universal SDGs integrating social, economic and environmental dimensions, complemented in Africa by Agenda 2063 (2013-2063). Ethiopia achieved six of eight MDGs with progress on MDG 3 and MDG 5, and aligned GTP II and the ten-year Prosperity Plan with the SDGs despite capacity and resource gaps.",
  visuals: [
    {
      type: "tableVisual",
      config: {
        title: "The Eight MDGs (2000-2015)",
        headers: ["Goal", "Aim"],
        rows: [
          ["1", "Eradicate extreme poverty and hunger"],
          ["2", "Achieve universal primary education"],
          ["3", "Promote gender equality and empower women"],
          ["4", "Reduce child mortality"],
          ["5", "Improve maternal health"],
          ["6", "Combat HIV/AIDS, malaria and other diseases"],
          ["7", "Ensure environmental sustainability"],
          ["8", "Foster a global partnership for development"]
        ]
      }
    },
    {
      type: "comparison",
      config: {
        title: "MDGs vs SDGs",
        left: { name: "MDGs", items: ["8 goals, adopted 2000", "Targets for 2015", "Mainly developing countries", "Approach more fragmented"] },
        right: { name: "SDGs", items: ["17 goals, adopted 2015", "Targets for 2030", "Universal: developed and developing", "Integrates social, economic, environmental dimensions"] }
      }
    },
    {
      type: "steps",
      config: {
        title: "Ethiopia's Plan Alignment with Global Goals",
        steps: [
          { label: "MDG ownership", detail: "MDGs mainstreamed into SDPRP (2002/03-2004/05) and GTP I (2010/11-2014/15)." },
          { label: "Result", detail: "Six of eight MDGs achieved; significant progress on MDG 3 and MDG 5; CRGE strategy launched." },
          { label: "SDG adoption", detail: "2030 Agenda endorsed; SDGs aligned with GTP II (2015/16-2019/20)." },
          { label: "Prosperity Plan", detail: "Ten-year plan (2019/20-2029/30) fully aligned with the 2030 Agenda and its three dimensions." }
        ]
      }
    }
  ],
  questions: [
    { type: "mcq", q: "How many Millennium Development Goals were there, and by what year were their targets to be achieved?", options: ["8 goals by 2015", "17 goals by 2015", "8 goals by 2030", "10 goals by 2000"], answer: 0, difficulty: 1, explanation: "The eight MDGs had specific targets deemed achievable by 2015." },
    { type: "mcq", q: "Which of the following is one of the eight MDGs?", options: ["Ensure a global currency", "Foster a global partnership for development", "Colonize the moon", "Double the world population"], answer: 1, difficulty: 1, explanation: "MDG 8 was to foster a global partnership for development." },
    { type: "mcq", q: "The 2030 Agenda for Sustainable Development was adopted by:", options: ["African countries only in 2013", "all United Nations member states in 2015", "the World Bank in 1989", "the OAU in 1963"], answer: 1, difficulty: 1, explanation: "It was adopted by all UN member states in 2015." },
    { type: "mcq", q: "Compared with the MDGs, the SDGs are more ambitious and universal because they:", options: ["apply only to Africa", "set targets for both developing and developed countries and integrate three dimensions", "replace the United Nations", "delete environmental issues"], answer: 1, difficulty: 2, explanation: "The 17 SDGs set targets for developing and developed countries and integrate social, economic and environmental dimensions." },
    { type: "tf", q: "The world had already realized the first MDG of halving the extreme poverty rate by 2015.", answer: true, difficulty: 2, explanation: "The lesson states the first MDG was realized by 2015, though achievements were uneven." },
    { type: "short", q: "Which two MDGs did Ethiopia not fully achieve, making only significant progress on them?", answer: "mdg 3 and mdg 5|gender equality and maternal health", difficulty: 2, explanation: "Ethiopia achieved six of eight MDGs and made significant progress on MDG 3 and MDG 5." },
    { type: "concept", q: "What is Agenda 2063 and over what period does it run?", answer: "africa's blueprint and master plan, a 50-year period from 2013 to 2063", difficulty: 2, explanation: "Agenda 2063 is Africa's blueprint and master plan, launched from the 50th Anniversary Solemn Declaration of May 2013, to be achieved within 50 years from 2013 to 2063." },
    { type: "mcq", q: "By how many percentage points did Ethiopia exceed an exactly even result when it fully achieved 6 of 8 MDGs?", options: ["50% of the goals", "75% of the goals", "80% of the goals", "100% of the goals"], answer: 1, difficulty: 2, explanation: "6 / 8 * 100 = 75% of the eight goals were fully achieved." },
    { type: "concept", q: "State two challenges Ethiopia faced in implementing the MDGs and two ways the SDGs are being implemented nationally.", answer: "low implementation capacity and scarce financial resources; gtp ii and the ten year prosperity plan aligned with sdgs", difficulty: 3, explanation: "Challenges included low implementation capacity and scarce finance, affecting trade deficit, agriculture, savings-investment gap and inflation; SDGs are mainstreamed through GTP II and the Prosperity Plan (2019/20-2029/30) plus the CRGE strategy." },
    { type: "tf", q: "Agenda 2063 was created so Africa could refocus from the struggle against apartheid and political independence toward inclusive social and economic development and continental integration.", answer: true, difficulty: 2, explanation: "Its genesis was the refocus of Africa's agenda away from the OAU-era focus on apartheid and independence to development, integration, governance, peace and security." },
    { type: "short", q: "By what other name are the Sustainable Development Goals known?", answer: "the global goals|global goals", difficulty: 1, explanation: "The SDGs are also known as the Global Goals." }
  ]
};
