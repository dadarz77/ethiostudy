/* Content: Grade 10 Economics - Unit 7: The Ethiopian Economy (6 topics)
   Source: MoE Economics Grade 10 Student Textbook, Unit 7. */
window.Lessons = window.Lessons || {};

Lessons["g10-economics-ue7-t1"] = {
  overview: "GDP adds up every form of spending on domestically produced goods and services. This lesson breaks the spending identity Y = C + I + G + NX into its four components and shows exactly what belongs in each one.",
  objectives: [
    "Identify the four components of GDP in the identity Y = C + I + G + NX",
    "Classify household, firm and government expenditures into consumption, investment or government purchases",
    "Explain why inventory accumulation is treated as investment in GDP accounting",
    "Distinguish transfer payments from government purchases and state why transfers are excluded from GDP",
    "Compute net exports and show how an import leaves GDP unchanged"
  ],
  simple: "GDP includes all the various forms of spending on domestically produced goods and services: a family having lunch at a restaurant, a company building a factory, the government procuring drones, or Ethiopian Airlines buying an airplane. Economists divide GDP (Y) into four components: consumption (C), investment (I), government purchases (G) and net exports (NX), so that Y = C + I + G + NX. Consumption is household spending on goods and services, except purchases of new housing. Investment is the purchase of goods that will be used to produce more goods and services, including new houses and inventories. Government purchases include salaries of government workers and public works; transfer payments are excluded. Net exports equal exports minus imports. The four components must together equal GDP.",
  detailed: "<p><b>The GDP identity.</b> GDP (denoted Y) is divided into four components: consumption (C), investment (I), government purchases (G) and net exports (NX), so that Y = C + I + G + NX, where NX = Export (X) - Import (M). This equation is an identity: it must be true because each birr of expenditure included in GDP is placed into one of the four components, so the total of the four must equal GDP. In one numerical example (Mankiw, 2012), gross domestic product was 14,259 billion dollars, made up of consumption 10,093 (71%), investment 1,623 (11%), government purchases 2,933 (21%) and net exports -390 (-3%).</p><p><b>Consumption (C).</b> Consumption is spending by households on goods and services, with the exception of purchases of new housing. It covers spending on durable goods such as automobiles and appliances, and nondurable goods such as food and clothing. It also covers services, intangible items such as haircuts and medical care. Household spending on education is included in consumption of services.</p><p><b>Investment (I).</b> Investment is the purchase of goods that will be used in the future to produce more goods and services. It is the sum of purchases of capital equipment, inventories and structures, and investment in structures includes expenditure on new housing. By convention, a new house is the one form of household spending categorized as investment rather than consumption. Inventory accumulation is treated as investment: when a producer adds a computer to its inventory instead of selling it, it is assumed to have purchased the computer for itself, because goods added to inventory are part of that period's production. Note that GDP investment is not financial investment in stocks, bonds and mutual funds; it means purchases of goods used to produce other goods.</p><p><b>Government purchases (G).</b> Government purchases include spending on goods and services by local, state and federal governments, such as the salaries of government workers and expenditures on public works. But transfer payments, such as a pension benefit or an unemployment benefit, are not counted: they are not made in exchange for a currently produced good or service. Transfer payments alter household income but do not reflect the economy's production, so GDP excludes them.</p><p><b>Net exports (NX).</b> Net exports equal the value of foreign purchases of domestically produced goods (exports) minus the value of domestic purchases of foreign goods (imports): Net Exports = Total Export (E) - Total Import (M). Imports are subtracted because the other components already include them: if a household buys a Birr 300,000 imported car, consumption rises by Birr 300,000 while net exports fall by Birr 300,000, so the purchase does not affect GDP.</p><p><b>Why the composition matters.</b> To understand how the economy is using its scarce resources, economists study the composition of GDP among the various types of spending. Knowing how much households, firms, government and foreigners each spend shows where demand for domestic production comes from.</p>",
  keyTerms: [
    { term: "Consumption (C)", def: "Spending by households on goods and services, with the exception of purchases of new housing." },
    { term: "Investment (I)", def: "The purchase of goods, such as capital equipment, structures and inventories, that will be used in the future to produce more goods and services." },
    { term: "Inventory", def: "Goods produced but not yet sold; goods added to inventory are treated as investment because they are part of that period's production." },
    { term: "Government purchases (G)", def: "Spending on goods and services by local, state and federal governments, including the salaries of government workers and public works." },
    { term: "Transfer payments", def: "Payments such as pensions or unemployment benefits that are not made in exchange for a currently produced good or service; they are not counted in GDP." },
    { term: "Exports (X)", def: "The value of domestically produced goods and services sold to foreign buyers." },
    { term: "Imports (M)", def: "The value of domestically purchased goods and services produced abroad." },
    { term: "Net exports (NX)", def: "Export (X) minus import (M); the value of foreign purchases of domestic goods less the value of domestic purchases of foreign goods." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "Add up GDP from its four components using the numerical example of Table 7.1: consumption 10,093 billion dollars, investment 1,623, government purchases 2,933 and net exports -390.",
      given: "C = 10,093; I = 1,623; G = 2,933; NX = -390 (all in billions of dollars).",
      formula: "Y = C + I + G + NX",
      substitution: "Y = 10,093 + 1,623 + 2,933 + (-390)",
      calculation: "10,093 + 1,623 = 11,716; 11,716 + 2,933 = 14,649; 14,649 - 390 = 14,259.",
      answer: "GDP (Y) equals 14,259 billion dollars; net exports are negative, so imports exceed exports."
    },
    {
      problem: "A country's exports of goods and services total 500 billion birr while its imports total 650 billion birr. Calculate net exports.",
      given: "Export (X) = 500; Import (M) = 650.",
      formula: "NX = X - M",
      substitution: "NX = 500 - 650",
      calculation: "500 - 650 = -150.",
      answer: "Net exports equal -150 billion birr; the negative sign means the country imports more than it exports."
    },
    {
      problem: "A household buys an imported car for Birr 300,000. Show that this purchase leaves GDP unchanged.",
      given: "The car is an import; car purchases are part of consumer spending.",
      formula: "Contribution to GDP = change in C + change in NX",
      substitution: "Consumption rises by +300,000; net exports fall by -300,000.",
      calculation: "Net effect on GDP = +300,000 + (-300,000) = 0.",
      answer: "GDP does not change: the car was produced abroad, so it is not part of domestic production."
    },
    {
      problem: "Classify each item: (a) a family buys food and clothing; (b) a firm adds new machines to its inventory; (c) a retired worker receives a pension; (d) the government buys an airplane from Boeing.",
      given: "Four expenditures with different purposes.",
      formula: "Rule: C = household consumption; I = goods for future production; G = government goods and salaries; transfer payments are excluded.",
      substitution: "(a) household spending on nondurables; (b) inventory accumulation; (c) payment not in exchange for current production; (d) public sector purchase of a good.",
      calculation: "Apply each rule to the item.",
      answer: "(a) Consumption; (b) Investment; (c) Transfer payment, excluded from GDP; (d) Government purchases."
    }
  ],
  commonMistakes: [
    "Counting the purchase of a new house as consumption instead of investment.",
    "Treating purchases of stocks, bonds and mutual funds as GDP investment; financial investments are excluded.",
    "Including transfer payments such as pensions and unemployment benefits in government purchases.",
    "Forgetting that when a firm adds goods to inventory it has, by convention, 'purchased' them itself.",
    "Thinking imports enter GDP positively just because someone in Ethiopia buys them.",
    "Reporting exports alone as net exports instead of subtracting imports.",
    "Forgetting that Y = C + I + G + NX is an identity that must always hold by definition."
  ],
  applications: [
    "The Soressa family's lunch at a restaurant and a Haile Motors car factory under construction are both captured by GDP, in different components.",
    "Ethiopian Airlines buying an airplane from Boeing is an import: it raises investment or consumption but lowers net exports by the same amount.",
    "When the National Defense Force procures drones, the spending is counted as government purchases.",
    "A mother's pension from the social security office increases her household income but is not part of GDP.",
    "A farmer who stores his harvested teff for later sale has added to his inventory, contributing to this year's production.",
    "Comparing the share of exports and imports helps policy makers judge how much of national spending leaks to foreign producers."
  ],
  summary: "GDP is split into four components: consumption, investment, government purchases and net exports, and by definition C + I + G + NX must equal GDP. New housing and inventory accumulation count as investment, while transfer payments are excluded from government purchases. Imports are subtracted from consumption, investment or government purchases through net exports, so an imported good does not change total GDP.",
  visuals: [
    {
      type: "mindMap",
      config: {
        title: "The Four Components of GDP",
        center: "GDP (Y)",
        branches: [
          { label: "Consumption (C)", items: ["Durable goods", "Nondurable goods", "Services"] },
          { label: "Investment (I)", items: ["Capital equipment", "Structures and new housing", "Inventories"] },
          { label: "Government purchases (G)", items: ["Salaries of workers", "Public works", "Excludes transfers"] },
          { label: "Net exports (NX)", items: ["Exports (X)", "Minus imports (M)"] }
        ]
      }
    },
    {
      type: "comparison",
      config: {
        title: "Counted in GDP vs Not Counted",
        left: { name: "Counted in GDP", items: ["Household food and clothing", "New housing and inventories", "Teacher salaries and public works", "Exports of domestic goods"] },
        right: { name: "Not counted in GDP", items: ["Pensions and unemployment benefits", "Stocks, bonds and mutual funds", "Purchases of items produced abroad", "Sales of used goods"] }
      }
    },
    {
      type: "tableVisual",
      config: {
        title: "GDP and Its Components (Numerical Example, billions of dollars)",
        headers: ["Component", "Total", "Percent of Total"],
        rows: [
          ["GDP (Y)", "14,259", "100%"],
          ["Consumption (C)", "10,093", "71%"],
          ["Investment (I)", "1,623", "11%"],
          ["Government purchases (G)", "2,933", "21%"],
          ["Net exports (NX)", "-390", "-3%"]
        ]
      }
    }
  ],
  questions: [
    { type: "mcq", q: "The total of the four GDP components equals GDP because the equation Y = C + I + G + NX is:", options: ["A prediction", "An identity that is true by definition", "A government regulation", "Only true in the base year"], answer: 1, difficulty: 2, explanation: "Every birr of expenditure in GDP is placed into one of the four components, so the total must equal GDP." },
    { type: "tf", q: "The purchase of a new house is categorized as investment rather than consumption.", answer: true, difficulty: 1, explanation: "By convention, new housing is the one form of household spending counted as investment in structures." },
    { type: "tf", q: "Transfer payments such as pensions are part of government purchases in GDP.", answer: false, difficulty: 2, explanation: "Transfer payments are not made in exchange for a currently produced good or service, so they are excluded from GDP." },
    { type: "mcq", q: "A household buys an imported car for Birr 300,000. What is the effect on GDP?", options: ["GDP rises by 300,000", "GDP falls by 300,000", "GDP is unchanged", "GDP rises only if the car is resold"], answer: 2, difficulty: 3, explanation: "Consumption rises by 300,000 and net exports fall by 300,000, so the import does not affect GDP." },
    { type: "short", q: "Name the GDP component that means spending by households on goods and services, except purchases of new housing.", answer: "consumption|consumption c", difficulty: 1, explanation: "That is the definition of consumption (C)." },
    { type: "concept", q: "Why does GDP accounting treat goods added to inventory as part of that period's production?", answer: "goods added to inventory are part of that period's production|inventory is produced but unsold output", difficulty: 2, explanation: "One aim of GDP is to measure the value of the economy's production, and inventories are produced in that year." },
    { type: "mcq", q: "Exports equal 500 billion birr and imports equal 650 billion birr. Net exports equal:", options: ["1,150 billion birr", "-150 billion birr", "150 billion birr", "-1,150 billion birr"], answer: 1, difficulty: 2, explanation: "NX = X - M = 500 - 650 = -150; the negative sign shows imports exceed exports." },
    { type: "mcq", q: "Given C = 10,093, I = 1,623, G = 2,933 and NX = -390, GDP equals:", options: ["14,649", "14,259", "15,049", "14,899"], answer: 1, difficulty: 3, explanation: "Y = 10,093 + 1,623 + 2,933 - 390 = 14,259 billion dollars." },
    { type: "mcq", q: "In the numerical example of Table 7.1, which component has the largest share of GDP?", options: ["Investment", "Net exports", "Consumption", "Government purchases"], answer: 2, difficulty: 1, explanation: "Consumption takes 71 percent, the largest share, compared with 21 percent for government purchases and 11 percent for investment." },
    { type: "concept", q: "Why is the purchase of shares or bonds not counted as investment in GDP?", answer: "not expenditure on goods and services produced|financial investment is not production", difficulty: 2, explanation: "GDP investment must be purchases of goods used to produce other goods; financial investments are not spending on production." },
    { type: "ordering", q: "Arrange the GDP components from the largest to the smallest share, according to the numerical example.", options: ["Consumption (71%)", "Government purchases (21%)", "Investment (11%)", "Net exports (-3%)"], answer: 0, difficulty: 2, explanation: "The order is consumption, government purchases, investment, then net exports." }
  ]
};

Lessons["g10-economics-ue7-t2"] = {
  overview: "When total GDP rises from one year to the next, either output grew or prices rose, or both. This lesson separates the two effects using real versus nominal GDP and the GDP deflator.",
  objectives: [
    "Differentiate nominal GDP from real GDP by the prices used to value production",
    "Compute nominal GDP and real GDP for successive years using base-year prices",
    "Explain why real GDP is the better gauge of economic well-being",
    "Calculate the GDP deflator as (nominal GDP / real GDP) times 100",
    "Use the GDP deflator to compute the inflation rate between two consecutive years"
  ],
  simple: "If total spending rises from one year to the next, either the economy is producing a larger output, or goods are being sold at higher prices. Nominal GDP values production at current prices, so it mixes both effects. Real GDP values production at constant base-year prices, so it reflects only changes in quantities produced. To compute real GDP, first designate one year as the base year, then use base-year prices to value production in all years; in the base year, real GDP always equals nominal GDP. Real GDP is a better gauge of economic well-being, and economists measure growth as the percentage change in real GDP. The GDP deflator is (Nominal GDP / Real GDP) x 100; it shows the current price level relative to the base year and is used to compute inflation.",
  detailed: "<p><b>Why two measures are needed.</b> GDP measures total spending on goods and services in all markets. If total spending rises from one year to the next, at least one of two things must be true: the economy is producing a larger output of goods and services, or goods and services are being sold at higher prices. Economists want a measure of total production that is not affected by changes in prices, and that measure is real GDP.</p><p><b>Defining the two measures.</b> Nominal GDP uses current prices to place a value on the economy's production of goods and services. Real GDP uses constant base-year prices to value production. To calculate real GDP, first designate one year as a base year, then use the prices of goods and services in the base year to compute the value of production in all the years. Because real GDP is not affected by changes in prices, changes in real GDP reflect only changes in the amounts being produced.</p><p><b>A numerical example (Kitfo and Chumbo).</b> Take two goods with prices and quantities for 2010, 2011 and 2012: Kitfo costs Birr 150 (2010), Birr 180 (2011) and Birr 200 (2012) with quantities 100, 150 and 200; Chumbo costs Birr 250, Birr 350 and Birr 400 with quantities 50, 100 and 150. Nominal GDP is 27,500 (2010), 62,000 (2011) and 100,000 (2012). With 2010 as the base year, real GDP is 27,500 (2010), 47,500 (2011) and 67,500 (2012). In the base year, real GDP always equals nominal GDP.</p><p><b>Why real GDP is preferred.</b> Because real GDP measures the economy's production of goods and services, it reflects the ability of the economy to satisfy people's needs and desires. Thus real GDP is a better gauge of economic well-being than nominal GDP. When economists talk about growth, they measure it as the percentage change in real GDP from one period to another.</p><p><b>The GDP deflator.</b> The GDP deflator = (Nominal GDP / Real GDP) x 100. It reflects only the prices of goods and services and measures the current level of prices relative to the level of prices in the base year. In the example the deflator is 100 in 2010 (base year, always 100), 131 in 2011 (62,000/47,500 x 100) and 148 in 2012 (100,000/67,500 x 100). It gets its name because it is used to take inflation out of nominal GDP, that is, to deflate nominal GDP.</p><p><b>The inflation rate from the deflator.</b> Inflation is a situation in which the economy's overall price level is rising. Inflation rate in year 2 = (GDP deflator in year 2 - GDP deflator in year 1) / GDP deflator in year 1 x 100. From 2010 to 2011 the deflator rose from 100 to 131, so the inflation rate is 31 percent; from 2011 to 2012 it rose from 131 to 148, giving inflation of about 13 percent.</p>",
  keyTerms: [
    { term: "Nominal GDP", def: "The production of goods and services valued at current prices." },
    { term: "Real GDP", def: "The production of goods and services valued at constant base-year prices; it reflects only changes in quantities produced." },
    { term: "Base year", def: "The year designated to provide the prices used to compute real GDP for all years; its own real GDP equals nominal GDP." },
    { term: "Constant prices", def: "Prices fixed at base-year levels, used so that quantity changes can be separated from price changes." },
    { term: "GDP deflator", def: "(Nominal GDP / Real GDP) x 100; measures the current level of prices relative to the level of prices in the base year." },
    { term: "Inflation", def: "A situation in which the economy's overall price level is rising." },
    { term: "Inflation rate", def: "The percentage change in some measure of the price level from one period to the next." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "Using the Kitfo and Chumbo data for 2011 (Kitfo: Birr 180 at 150 units; Chumbo: Birr 350 at 100 units), calculate nominal GDP for 2011.",
      given: "Price of Kitfo = 180, quantity = 150; price of Chumbo = 350, quantity = 100.",
      formula: "Nominal GDP = sum of (current price x current quantity) for all goods",
      substitution: "Nominal GDP = (180 x 150) + (350 x 100)",
      calculation: "180 x 150 = 27,000; 350 x 100 = 35,000; 27,000 + 35,000 = 62,000.",
      answer: "Nominal GDP for 2011 is Birr 62,000, valued at 2011's own prices."
    },
    {
      problem: "Using 2010 as the base year, calculate real GDP for 2012 (Kitfo: 200 units; Chumbo: 150 units, at 2010 prices of Birr 150 and Birr 250).",
      given: "Base-year prices: Kitfo 150, Chumbo 250; 2012 quantities: Kitfo 200, Chumbo 150.",
      formula: "Real GDP = sum of (base-year price x current quantity)",
      substitution: "Real GDP = (150 x 200) + (250 x 150)",
      calculation: "150 x 200 = 30,000; 250 x 150 = 37,500; 30,000 + 37,500 = 67,500.",
      answer: "Real GDP for 2012 is Birr 67,500, valued at constant 2010 prices."
    },
    {
      problem: "Calculate the GDP deflator for 2011, when nominal GDP is Birr 62,000 and real GDP is Birr 47,500, and then the inflation rate between 2010 and 2011.",
      given: "NGDP 2011 = 62,000; RGDP 2011 = 47,500; deflator 2010 (base year) = 100.",
      formula: "GDP deflator = (NGDP / RGDP) x 100; inflation = (deflator2 - deflator1) / deflator1 x 100",
      substitution: "Deflator = (62,000 / 47,500) x 100; inflation = (131 - 100) / 100 x 100",
      calculation: "62,000 / 47,500 = 1.31, so the deflator is 131. (131 - 100) / 100 x 100 = 31.",
      answer: "The 2011 GDP deflator is 131 and the inflation rate is 31 percent."
    },
    {
      problem: "Using the real GDP figures 27,500 (2010) and 47,500 (2011), compute the economic growth rate for 2011.",
      given: "RGDP 2010 = 27,500; RGDP 2011 = 47,500.",
      formula: "Growth = (RGDP this year - RGDP last year) / RGDP last year x 100",
      substitution: "Growth = (47,500 - 27,500) / 27,500 x 100",
      calculation: "20,000 / 27,500 x 100 = 72.7.",
      answer: "Real GDP grew by about 72.7 percent, entirely due to larger quantities since prices were held fixed."
    }
  ],
  commonMistakes: [
    "Believing that a rise in nominal GDP always means the economy produced more goods.",
    "Forgetting that real GDP equals nominal GDP in the base year.",
    "Using current-year prices instead of base-year prices when computing real GDP.",
    "Omitting the multiplication by 100 in the GDP deflator formula.",
    "Confusing the GDP deflator, which reflects prices, with real GDP, which reflects quantities.",
    "Subtracting the deflators in the wrong order when computing the inflation rate.",
    "Saying the deflator is 100 for every year instead of only for the base year."
  ],
  applications: [
    "Government statisticians deflate nominal GDP to measure whether Ethiopia's real production is rising over time.",
    "The percentage change in real GDP is used to announce the country's official economic growth rate.",
    "A rising GDP deflator warns policy makers that prices are climbing and inflation control is needed.",
    "Comparing real GDP across years tells planners whether agriculture and industry actually produced more, not just sold dearer.",
    "Households can judge their living standards against real GDP growth rather than nominal figures.",
    "The deflator gets its name from removing, or deflating, the price rise that is inside nominal GDP."
  ],
  summary: "Nominal GDP values production at current prices while real GDP values it at constant base-year prices; in the base year the two are equal. Real GDP is the better gauge of well-being because it reflects only quantities, and economic growth is measured as the percentage change in real GDP. The GDP deflator, (nominal GDP / real GDP) x 100, equals 100 in the base year and measures price changes, from which the inflation rate is computed.",
  visuals: [
    {
      type: "comparison",
      config: {
        title: "Nominal GDP vs Real GDP",
        left: { name: "Nominal GDP", items: ["Uses current prices", "Mixes quantity and price changes", "Rises when prices rise", "Not a good well-being gauge"] },
        right: { name: "Real GDP", items: ["Uses constant base-year prices", "Reflects only quantities", "Unaffected by price changes", "Better gauge of well-being"] }
      }
    },
    {
      type: "steps",
      config: {
        title: "Computing Real GDP and the Deflator",
        steps: [
          { label: "Choose base year", detail: "Designate one year, for example 2010, as the base year." },
          { label: "Compute nominal GDP", detail: "Value each year's output at that year's own prices." },
          { label: "Compute real GDP", detail: "Value every year's quantities at base-year prices." },
          { label: "Compute the deflator", detail: "Deflator = (NGDP / RGDP) x 100; it is 100 in the base year." },
          { label: "Compute inflation", detail: "Inflation = (deflator2 - deflator1) / deflator1 x 100." }
        ]
      }
    },
    {
      type: "tableVisual",
      config: {
        title: "Nominal GDP, Real GDP and the Deflator (Kitfo and Chumbo, base year 2010)",
        headers: ["Year", "Nominal GDP (Birr)", "Real GDP (Birr)", "GDP Deflator"],
        rows: [
          ["2010", "27,500", "27,500", "100"],
          ["2011", "62,000", "47,500", "131"],
          ["2012", "100,000", "67,500", "148"]
        ]
      }
    }
  ],
  questions: [
    { type: "mcq", q: "Real GDP is the production of goods and services valued at:", options: ["Current prices", "Constant base-year prices", "World market prices", "Export prices"], answer: 1, difficulty: 1, explanation: "Real GDP uses constant base-year prices so it is not affected by price changes." },
    { type: "tf", q: "In the base year, real GDP always equals nominal GDP.", answer: true, difficulty: 1, explanation: "Base-year prices are the current prices in that year, so the two measures coincide." },
    { type: "tf", q: "When prices rise but quantities stay the same, both nominal and real GDP rise.", answer: false, difficulty: 2, explanation: "Nominal GDP rises but real GDP remains the same, so only the GDP deflator rises." },
    { type: "mcq", q: "Kitfo costs Birr 180 at a quantity of 150 and Chumbo costs Birr 350 at a quantity of 100. Nominal GDP equals:", options: ["47,500", "62,000", "100,000", "27,500"], answer: 1, difficulty: 2, explanation: "(180 x 150) + (350 x 100) = 27,000 + 35,000 = 62,000 birr." },
    { type: "mcq", q: "With 2010 as the base year (Kitfo Birr 150, Chumbo Birr 250), real GDP for 2012 with quantities 200 and 150 equals:", options: ["100,000", "47,500", "67,500", "62,000"], answer: 2, difficulty: 3, explanation: "(150 x 200) + (250 x 150) = 30,000 + 37,500 = 67,500 birr." },
    { type: "mcq", q: "Nominal GDP is 62,000 and real GDP is 47,500. The GDP deflator equals:", options: ["131", "148", "100", "171"], answer: 0, difficulty: 3, explanation: "Deflator = (62,000 / 47,500) x 100 = 131." },
    { type: "mcq", q: "The GDP deflator rises from 100 to 131 between two years. The inflation rate is:", options: ["131 percent", "13 percent", "31 percent", "100 percent"], answer: 2, difficulty: 3, explanation: "Inflation = (131 - 100) / 100 x 100 = 31 percent." },
    { type: "short", q: "What term describes a situation in which the economy's overall price level is rising?", answer: "inflation", difficulty: 1, explanation: "Economists use the term inflation for a rising overall price level." },
    { type: "concept", q: "Why is real GDP a better gauge of economic well-being than nominal GDP?", answer: "reflects only quantities produced|not affected by price changes|shows ability to satisfy needs", difficulty: 2, explanation: "Because it holds prices constant, changes in real GDP reflect only changes in production, which is what satisfies people's needs and desires." },
    { type: "concept", q: "How do economists measure growth in the economy from one period to another?", answer: "percentage change in real gdp|change in real gdp", difficulty: 2, explanation: "Growth is measured as the percentage change in real GDP, not nominal GDP." },
    { type: "ordering", q: "Arrange the steps for calculating real GDP in the correct order.", options: ["Designate one year as the base year", "Use base-year prices to value each year's output", "Hold prices fixed at base-year levels", "Read changes in real GDP as quantity changes"], answer: 0, difficulty: 2, explanation: "First pick the base year, then value output at its prices, hold prices fixed, and interpret changes as quantity changes." }
  ]
};

Lessons["g10-economics-ue7-t3"] = {
  overview: "For decades agriculture has been the backbone of the Ethiopian economy, determining the well-being of the people. This lesson covers the sector's features, problems, roles and linkages, and the structure of its farming systems.",
  objectives: [
    "Describe the share of agriculture in GDP, export earnings, employment and raw material supply",
    "List the major problems facing the Ethiopian agricultural sector",
    "Examine the forward and backward linkages of the agricultural sector",
    "Identify the three modalities by which surplus is transferred from agriculture",
    "Analyze the structure of the sector into crop, livestock, forestry and fishery and the three farming systems"
  ],
  simple: "Agriculture is the backbone of the Ethiopian economy: its performance determines the well-being of the people, and transport and manufacturing rely heavily on it. It contributes about 45 percent of GDP, generates more than 80 percent of export earnings, employs about 85 percent of the population and supplies about 70 percent of raw materials to secondary activities. The sector faces frequent drought, soil degradation, land fragmentation, backward practices, poor marketing and rising input prices. Its crop sub-sector provides about 65 percent of agricultural GDP, livestock 25 percent, and forestry, fishing and others 10 percent. Three farming systems operate: the dominant smallholder system, the pastoral or nomadic system in the lowlands, and commercial farming. Raising farm productivity raises rural incomes and feeds industry, which is why this sector leads the economy.",
  detailed: "<p><b>The sector's place in the economy.</b> For decades, agriculture has been the backbone of the Ethiopian economy, so its performance determines the economic well-being of the people, and other activities such as transportation and manufacturing rely heavily on it. According to NBE 2019/20 annual report data, agriculture's share in GDP fell from 40 percent to 33 percent, industry's share rose from 21 percent to 29 percent, and the service sector held almost 40 percent over the six years from 2014/15 to 2019/20.</p><p><b>Main features.</b> Agriculture contributes about 45 percent of overall GDP, generates more than 80 percent of export earnings, employs about 85 percent of the population, and supplies about 70 percent of raw materials to secondary activities (Central Statistics Office, 2006). The sector produces both crops and livestock; crops include food crops, cash crops, fruits and vegetables, and they constitute the greatest share of GDP and export earnings when compared with livestock production.</p><p><b>Major problems.</b> The sector suffers from frequent drought; soil degradation largely caused by overgrazing and overpopulation; land fragmentation; prevalence of backward agricultural practices; poor marketing facilities due to poor road networks; and rapidly increasing prices of agricultural inputs like fertilizers.</p><p><b>Source of food and raw materials; the linkages.</b> Agriculture supplies food grains, dairy and meat products to the population. Backward linkages: an efficient agricultural sector supplies food and raw materials to the industrial sector and its labor force, and must in turn be supplied with modern inputs and technologies; without such support it weakens and may risk food insecurity. Higher farm productivity also raises rural incomes, which generates increased demand for manufactured goods. Forward linkages: cheaper food reduces the cost of living in urban areas, which reduces pressure on wages and makes industrial profits higher, and cheaper raw materials also raise industrial profits; both raise industrial savings and investment and promote the sector.</p><p><b>Source of capital; contribution to GDP and employment.</b> Surplus transfer from agriculture to other sectors occurs through tax, through defining the terms of trade by imposing price controls on agricultural products, and through compulsory delivery of agricultural commodities at fixed prices. The Derg regime removed a great deal of surplus from agriculture to supply urban consumers and its army with cheap foodstuffs but used it ineffectively. Agriculture's share of national GDP declined from 76 percent in the early 1960s to 45 percent in 2003/04, making the sector the major source of fluctuations in the economy. More than 80 percent of Ethiopians earn their livelihood from agriculture, but rapid population growth and low urbanization mean the sector cannot absorb the growing surplus labor force.</p><p><b>Structure: sub-sectors.</b> The agricultural sector is composed of crop production, livestock, forestry and fishery sub-sectors. About 65 percent of the sector's GDP comes from crop production, animal husbandry contributes 25 percent, and the remaining 10 percent comes from forestry, fishing and others.</p><p><b>Structure: farming systems.</b> The smallholder farming system is dominant: it accounts for more than 90 percent of agricultural production and about 95 percent of the total area under crop production; it is a mixed farming system with about 10.58 million households, an average household size of about 5 members, and over 86 percent cultivating farmlands of less than 2 hectares each. The pastoral or nomadic system occupies the lowlands below 1,500 m, about 40 percent of Ethiopia's land area, where erratic rainfall rules out rain-fed crops; these lands hold about 20 percent of Ethiopia's cattle, 25 percent of its sheep, 73 percent of its goats and about one million camels, supporting some 5.5 million people, and surplus sheep and goats from the rangelands represent about 19 percent of the domestic supply. The commercial farming system was officially introduced during the third five-year plan (1968-73); after the 1974 revolution farms were confiscated into state farms, which received land, inputs, credits, price incentives and marketing facilities without limit yet were unproductive and inefficient, marked by mismanagement, abuse of assets and corruption. State farms, about 5 percent of total cropland, together with cooperatives accounted for less than 10 percent of total agricultural production; after 1992 their role fell, leaving only 13 state farms producing wheat, maize, cotton, coffee and tea on 156,040 hectares, while from 1992/93 to 1997/98, 1,148 or 26.8 percent of investment permits were in agriculture but only 508 projects became operational.</p>",
  keyTerms: [
    { term: "Agricultural sector", def: "The part of the economy composed of crop production, livestock, forestry and fishery sub-sectors." },
    { term: "Backward linkage", def: "The tie between agriculture and its suppliers: an efficient agricultural sector supplies food and raw materials to industry and buys modern inputs and technologies." },
    { term: "Forward linkage", def: "The tie between agriculture and its users: abundant, cheaper food and raw materials lower urban living costs and industrial costs, raising industrial profits." },
    { term: "Compulsory delivery", def: "A modality of surplus transfer in which agricultural commodities must be delivered at fixed prices." },
    { term: "Smallholder farmer", def: "A farmer in the dominant farming system; over 86 percent cultivate plots of less than 2 hectares." },
    { term: "Price incentive", def: "Price supports or rewards, such as those given without limit to state farms, intended to raise production." },
    { term: "Terms of trade", def: "The relative prices set between sectors; price controls on agricultural products define them to protect or tax agriculture." },
    { term: "Pastoral or nomadic system", def: "Livestock-keeping in arid and semi-arid lowlands below 1,500 m where rain-fed crop production is not possible." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "Verify that the sub-sector shares of agricultural GDP add up, given crop production 65 percent, animal husbandry 25 percent, and forestry, fishing and others 10 percent.",
      given: "Crop = 65%; livestock = 25%; allied = 10%.",
      formula: "Total = crop + livestock + allied",
      substitution: "Total = 65 + 25 + 10",
      calculation: "65 + 25 = 90; 90 + 10 = 100.",
      answer: "The shares sum to 100 percent, confirming crop production supplies about 65 percent of agricultural GDP."
    },
    {
      problem: "Agriculture's share in GDP fell from 40 percent to 33 percent between 2014/15 and 2019/20, while industry's share rose from 21 percent to 29 percent. Compute the percentage-point changes.",
      given: "Agriculture: 40% to 33%; industry: 21% to 29%.",
      formula: "Change in share = new share - old share",
      substitution: "Agriculture: 33 - 40; industry: 29 - 21",
      calculation: "33 - 40 = -7; 29 - 21 = +8.",
      answer: "Agriculture lost 7 percentage points while industry gained 8 percentage points in its GDP share."
    },
    {
      problem: "There are about 10.58 million smallholder households with an average household size of 5. Estimate how many people depend on the smallholder system, and how many of the 86 percent cultivate less than 2 hectares.",
      given: "Households = 10.58 million; average size = 5; fraction under 2 hectares = 86%.",
      formula: "People = households x size; farms under 2 ha = 0.86 x households",
      substitution: "People = 10.58 million x 5; farms = 0.86 x 10.58 million",
      calculation: "10.58 x 5 = 52.9; 0.86 x 10.58 = 9.1.",
      answer: "About 52.9 million people, and roughly 9.1 million households cultivate less than 2 hectares each."
    },
    {
      problem: "Agriculture contributes about 45 percent of GDP and about 85 percent of employment, while industry contributes about 13 percent of GDP and 9.5 percent of employment. Compare the two sectors.",
      given: "Agriculture: 45% of GDP, 85% of employment; industry: 13% of GDP, 9.5% of employment.",
      formula: "Ratio of shares = agriculture share / industry share",
      substitution: "GDP: 45 / 13; employment: 85 / 9.5",
      calculation: "45 / 13 is about 3.5; 85 / 9.5 is about 9.",
      answer: "Agriculture's GDP share is about 3.5 times industry's, and its employment share is about 9 times larger, showing industry remains small."
    }
  ],
  commonMistakes: [
    "Believing agriculture's GDP share still stands at 40 percent; by 2019/20 it had fallen to about 33 percent.",
    "Failing to distinguish backward linkages (industry's demand on agriculture) from forward linkages (agriculture's supply to industry).",
    "Assuming state farms were efficient because they received unlimited land, inputs, credits and price incentives.",
    "Forgetting that crop production, not livestock, supplies the greatest share of agricultural GDP and exports.",
    "Confusing the smallholder system with commercial farming; over 90 percent of production is smallholder.",
    "Thinking the pastoral lowlands are suited to rain-fed crops; erratic rainfall makes crop production impossible there.",
    "Overlooking that the declining GDP share of agriculture made it the major source of fluctuations in the economy."
  ],
  applications: [
    "When drought cuts the harvest, food prices climb nationwide because agriculture supplies most of the country's food.",
    "A good harvest lowers urban food costs, easing wage pressure and raising industrial profits through forward linkages.",
    "Higher rural incomes from productive farming raise demand for manufactured goods such as clothing and tools.",
    "Poor road networks in rural areas raise marketing costs, so building roads is an agricultural policy as much as a transport one.",
    "Camels, cattle, sheep and goats support about 5.5 million people in the lowlands where crops cannot be grown.",
    "Rising fertilizer prices squeeze smallholders, who cultivate less than 2 hectares on average."
  ],
  summary: "Agriculture is the backbone of the Ethiopian economy, providing about 45 percent of GDP, more than 80 percent of export earnings, around 85 percent of employment and 70 percent of raw materials, but it is held back by drought, soil degradation and backward practices and its GDP share has fallen. Productive agriculture feeds industry through backward linkages and lowers industrial costs through forward linkages, and it transfers surplus through taxes, price controls and compulsory delivery. The sector comprises crop (65 percent), livestock (25 percent) and allied (10 percent) sub-sectors, structured into a dominant smallholder system, a pastoral lowland system and a small commercial farming system.",
  visuals: [
    {
      type: "mindMap",
      config: {
        title: "The Agricultural Sector at a Glance",
        center: "Agriculture",
        branches: [
          { label: "Features", items: ["About 45% of GDP", "Over 80% of exports", "About 85% of employment", "70% of raw materials"] },
          { label: "Problems", items: ["Drought", "Soil degradation", "Land fragmentation", "Poor marketing roads"] },
          { label: "Sub-sectors", items: ["Crops 65%", "Livestock 25%", "Forestry, fishing 10%"] },
          { label: "Farming systems", items: ["Smallholder", "Pastoral or nomadic", "Commercial"] }
        ]
      }
    },
    {
      type: "comparison",
      config: {
        title: "Backward vs Forward Linkages",
        left: { name: "Backward linkage", items: ["Feeds industry and its workers", "Raises rural incomes", "Increases demand for manufactures", "Needs modern inputs in return"] },
        right: { name: "Forward linkage", items: ["Cuts urban cost of living", "Reduces wage pressure", "Cheapens raw materials", "Raises industrial profits, savings, investment"] }
      }
    },
    {
      type: "tableVisual",
      config: {
        title: "The Three Farming Systems",
        headers: ["System", "Share and location", "Key facts"],
        rows: [
          ["Smallholder", "Over 90% of production; about 95% of cropland", "10.58 million households; average size 5; 86% farm under 2 ha; mixed farming"],
          ["Pastoral or nomadic", "Lowlands below 1,500 m; about 40% of land area", "20% of cattle, 25% of sheep, 73% of goats, 1 million camels; 5.5 million people"],
          ["Commercial", "About 5% of cropland; under 10% of output with cooperatives", "Started 1968-73; state farms after 1974; 13 remaining farms on 156,040 ha"]
        ]
      }
    }
  ],
  questions: [
    { type: "mcq", q: "According to NBE 2019/20 data, agriculture's share in GDP over 2014/15 to 2019/20:", options: ["Rose from 33% to 40%", "Fell from 40% to 33%", "Stayed at 45%", "Rose from 21% to 29%"], answer: 1, difficulty: 2, explanation: "Agriculture's share fell from 40 to 33 percent while industry rose from 21 to 29 percent." },
    { type: "tf", q: "Agriculture generates more than 80 percent of Ethiopia's export earnings.", answer: true, difficulty: 1, explanation: "The sector generates more than 80 percent of export earnings and employs about 85 percent of the population." },
    { type: "tf", q: "Livestock production contributes a larger share of GDP and exports than crop production.", answer: false, difficulty: 2, explanation: "Crop production constitutes the greatest share of GDP and export earnings compared with livestock." },
    { type: "mcq", q: "Which of the following is a forward linkage of agriculture?", options: ["Industry supplies agriculture with modern inputs", "Cheaper food reduces urban cost of living and wage pressure", "Frequent drought lowers harvests", "Roads improve marketing facilities"], answer: 1, difficulty: 3, explanation: "Forward linkages mean cheaper food and raw materials reduce living costs and wage pressure, raising industrial profits." },
    { type: "short", q: "Name the three farming systems widely practiced in Ethiopia.", answer: "smallholder, pastoral or nomadic, commercial|smallholder|pastoral|commercial", difficulty: 2, explanation: "The three systems are the smallholder, the pastoral or nomadic, and the commercial farming systems." },
    { type: "concept", q: "Give one reason the surplus transferred from agriculture under the Derg regime failed to help the economy.", answer: "used ineffectively|surplus was wasted|mismanagement", difficulty: 3, explanation: "The Derg removed a great deal of surplus to supply urban consumers and its army with cheap foodstuffs, but the surplus was used ineffectively." },
    { type: "mcq", q: "The share of agriculture and allied sectors in national GDP declined from 76 percent in the early 1960s to about:", options: ["33 percent in 2019/20", "45 percent in 2003/04", "56.7 percent in 1995/06", "40 percent in 2003/04"], answer: 1, difficulty: 2, explanation: "The share declined from 76 percent in the early 1960s to 45 percent in 2003/04." },
    { type: "mcq", q: "About what percentage of the sector's GDP comes from crop production?", options: ["25%", "10%", "65%", "45%"], answer: 2, difficulty: 1, explanation: "About 65 percent comes from crop production, 25 percent from animal husbandry and 10 percent from allied sectors." },
    { type: "short", q: "In the smallholder system, what is the maximum area that over 86 percent of households cultivate, in hectares?", answer: "less than 2 hectares|under 2|2 hectares", difficulty: 2, explanation: "Over 86 percent of smallholder households cultivate farmlands with areas less than 2 hectares each." },
    { type: "concept", q: "State one major problem of the Ethiopian agricultural sector and its cause.", answer: "soil degradation caused by overgrazing and overpopulation|drought from erratic rainfall|poor marketing due to poor road networks", difficulty: 2, explanation: "Soil degradation is largely caused by overgrazing and overpopulation; drought and poor roads are also listed problems." },
    { type: "ordering", q: "Arrange the sub-sectors from the largest to the smallest share of agricultural GDP.", options: ["Crop production (65%)", "Animal husbandry (25%)", "Forestry, fishing and others (10%)"], answer: 0, difficulty: 1, explanation: "The order is crops, livestock, then the allied sectors." }
  ]
};

Lessons["g10-economics-ue7-t4"] = {
  overview: "The industrial sector has been small next to agriculture and services due to Ethiopia's short history of industrialization. This lesson covers its sub-sectors, features, problems and its contributions to output, employment and foreign exchange.",
  objectives: [
    "Describe the composition of the Ethiopian industrial sector and the weight of each sub-sector",
    "State the main features of the sector, including its share of GDP and employment",
    "List the major problems constraining the industrial sector",
    "Evaluate the output, employment and foreign exchange contributions of manufacturing",
    "Explain how preferential trade access such as AGOA can benefit Ethiopian manufacturing"
  ],
  simple: "The Ethiopian industrial sector is small compared with agriculture and services, partly because the country's history of industrialization is short; its growth stayed under 6.7 percent per year for four decades except during 1997/98 to 2009/10. Three sub-sectors dominate: manufacturing at 38 percent, construction at 25 percent, and electric and water supply at 18 percent, with mining, quarrying and the rest making up 19 percent. The sector contributes about 13 percent of GDP and 9.5 percent of employment and includes about 130 state-owned and 7,000 private industries. Its problems include a low industrial base, low productivity, unused capacity, shortages of foreign exchange, inputs and spare parts, and dependence on imported technology. Food and beverages lead manufacturing output, employment and export earnings.",
  detailed: "<p><b>Size and growth.</b> The industrial sector has been small compared to the agricultural and service sectors, which could be due to the short history of industrialization in the country. Its growth was modest, not exceeding 6.7 percent for the last four decades except during 1997/98 to 2009/10. The sector contributes about 13 percent of GDP and 9.5 percent of employment.</p><p><b>Composition and main features.</b> The sector is dominated by three sub-sectors: manufacturing (38 percent), construction (25 percent), and electric and water supply (18 percent); mining, quarrying and the remaining sub-sectors constitute 19 percent. There are about 130 state-owned and 7,000 private manufacturing industries of all sizes, mainly producing textiles, foodstuffs, tobacco, beverages, cement, leather and leather products, wood, metallic and non-metallic products, paper, plastic, tiles, clothing and apparel, canned and frozen meat, sugar and molasses, oil cakes and petroleum products. Construction registered the highest growth: about 13 percent per year in 2006-2010, compared with only 4.6 percent between 1991/92 and 2005/06, and large- and medium-scale industries recorded the second highest growth rates.</p><p><b>Major problems.</b> The sector faces a low industrial base; low productivity; underutilization of capacity; shortages of foreign exchange, new investment, raw materials and spare parts; a very low level of technology with high dependence on imported technology; and low-level skills and management.</p><p><b>Classification and gross value shares.</b> According to the International Standards for Industrial Classification (ISIC), the industrial sector is composed of mining and quarrying, manufacturing, electricity, water supply and construction. During 1991/92 to 1997/98, large- and medium-scale manufacturing contributed 38.4 percent of the gross value of industrial production, small-scale manufacturing and handcrafts about 18.7 percent, and mining, quarrying, and electricity-supply activities 3.9 percent, 15.8 percent and 23.2 percent respectively. Manufacturing, the most dominant and dynamic component, provided more than 57 percent of sectoral output. Under ISIC, manufacturing means the physical or chemical transformation of materials or components into new products, whether by power-driven machines or by hand, in a factory or in the worker's home.</p><p><b>Output contribution.</b> In 2007/08, food and beverages accounted for about 48 percent of the gross value of output of manufacturing establishments, followed by non-metal (17 percent) and chemicals (9 percent); together these three exceeded 74 percent of the gross value of products in large- and medium-scale manufacturing. In value added, the food and beverage group led with 50.7 percent, and in sales revenue it generated about 8.3 billion birr, close to 48.5 percent of total revenue from large and medium manufacturing.</p><p><b>Employment contribution.</b> Industry serves as an important source of employment, especially for the rapidly growing urban population. In 2007/08 there were 1,677,906 persons engaged, of whom 678,911 were employees, increases of 6.4 and 5.8 percent over 2006/07, attributed to more establishments. The food and beverage group employed 50 percent of the manufacturing workforce, non-metal 14 percent, and paper and printing 10.9 percent, together close to 75 percent; the other groups ranged from 2.1 percent in wood and furniture to 8.8 percent in textile products.</p><p><b>Foreign exchange contribution and opportunities.</b> More than 90 percent of the nation's foreign currency earnings come from agriculture, so the poorly developed industrial sector contributes very little. Within industry, textiles generate 41.5 percent of the sector's foreign exchange, followed by food and beverages (32.9 percent) and leather and footwear (10.8 percent); wood and furniture exports were Birr 43,269.7 and chemicals Birr 30,198.9 in 2007/08, showing the potential of non-traditional commodities. The Africa Growth and Opportunity Act (AGOA) lets Ethiopia access the US textile market without tariffs and quotas, and European countries are opening their markets, for example to Ethiopian sugar, so the nation should benefit from these preferential treatments.</p>",
  keyTerms: [
    { term: "Industrial sector", def: "The sector composed, under ISIC, of mining and quarrying, manufacturing, electricity, water supply and construction." },
    { term: "Manufacturing", def: "The physical or chemical transformation of materials or components into new products, whether by power-driven machines or by hand, in a factory or at home." },
    { term: "Construction", def: "The industrial sub-sector of building works, the fastest growing sub-sector at about 13 percent per year in 2006-2010." },
    { term: "Mining and quarrying", def: "Extraction of minerals and stone; a small sub-sector contributing about 3.9 percent of industrial gross value." },
    { term: "Underutilization of capacity", def: "A problem in which installed industrial capacity is not fully used, lowering productivity." },
    { term: "Large- and medium-scale manufacturing", def: "The biggest manufacturing segment; contributed 38.4 percent of the gross value of industrial production, 1991/92-1997/98." },
    { term: "Value added", def: "The value a firm adds to its inputs; food and beverages led manufacturing with 50.7 percent of value added in 2007/08." },
    { term: "AGOA", def: "The Africa Growth and Opportunity Act, which gives Ethiopia access to the US textile market without tariffs and quotas." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "During 1991/92-1997/98, large- and medium-scale manufacturing contributed 38.4 percent and small-scale manufacturing and handcrafts 18.7 percent of gross industrial output. Show that manufacturing dominated the industrial sector.",
      given: "Large and medium manufacturing = 38.4%; small-scale and handcrafts = 18.7%.",
      formula: "Total manufacturing share = large and medium + small scale and handcrafts",
      substitution: "38.4 + 18.7",
      calculation: "38.4 + 18.7 = 57.1.",
      answer: "Manufacturing provided about 57.1 percent of industrial output, so it dominated the sector."
    },
    {
      problem: "In 2007/08 the food and beverage (50%), non-metal (14%) and paper and printing (10.9%) industrial groups employed shares of the manufacturing workforce. Verify why the textbook says these three employed close to 75 percent.",
      given: "Food and beverages = 50%; non-metal = 14%; paper and printing = 10.9%.",
      formula: "Combined share = sum of the three group shares",
      substitution: "50 + 14 + 10.9",
      calculation: "50 + 14 = 64; 64 + 10.9 = 74.9.",
      answer: "The three groups employed about 74.9 percent, roughly 75 percent of the manufacturing workforce."
    },
    {
      problem: "In 2007/08 there were 1,677,906 persons engaged in industry, of whom 678,911 were employees. Calculate how many persons engaged were not counted as employees, and why both numbers rose.",
      given: "Persons engaged = 1,677,906; employees = 678,911.",
      formula: "Difference = persons engaged - employees",
      substitution: "1,677,906 - 678,911",
      calculation: "1,677,906 - 678,911 = 998,995.",
      answer: "The difference is 998,995 persons engaged who were not employees; both counts rose (by 6.4 and 5.8 percent over 2006/07) because of the increase in the number of establishments created in 2007/08."
    },
    {
      problem: "Textiles generate 41.5 percent of industrial foreign exchange, food and beverages 32.9 percent, and leather and footwear 10.8 percent. Compute the combined share of the top three earners.",
      given: "Textiles = 41.5%; food and beverages = 32.9%; leather and footwear = 10.8%.",
      formula: "Combined share = 41.5 + 32.9 + 10.8",
      substitution: "41.5 + 32.9 = 74.4; 74.4 + 10.8",
      calculation: "41.5 + 32.9 = 74.4; 74.4 + 10.8 = 85.2.",
      answer: "The top three industrial groups earn about 85.2 percent of the sector's foreign exchange."
    }
  ],
  commonMistakes: [
    "Assuming industry is the largest sector; it contributes only about 13 percent of GDP while agriculture is far larger.",
    "Reversing the sub-sector weights: manufacturing is 38 percent and construction 25 percent, not the other way.",
    "Forgetting that more than 90 percent of Ethiopia's foreign currency earnings come from agriculture, not industry.",
    "Counting textiles as a minor exporter; textiles are the largest industrial foreign exchange earner at 41.5 percent.",
    "Ignoring construction, which recorded the highest sub-sector growth of about 13 percent per year in 2006-2010.",
    "Attributing employment growth to higher wages when it came from the increase in the number of establishments.",
    "Assuming Ethiopia already benefits fully from preferential access such as AGOA when much potential remains unused."
  ],
  applications: [
    "Ethiopian textile firms use AGOA to sell clothing in the US market duty-free and quota-free.",
    "Cement and construction growth of about 13 percent per year reflects the big push in infrastructure building.",
    "Food and beverage plants dominate manufacturing because agriculture supplies about 70 percent of raw materials to industry.",
    "Shortages of foreign exchange limit firms' abilities to import spare parts, slowing production lines.",
    "Leather and footwear exports earn foreign currency, diversifying earnings beyond agricultural coffee exports.",
    "Producers can now sell sugar in European markets as Europe opens to African manufactured products."
  ],
  summary: "The Ethiopian industrial sector is small, contributing about 13 percent of GDP and 9.5 percent of employment, with growth below 6.7 percent for four decades except during 1997/98-2009/10. Manufacturing dominates it with about 57 percent or more of gross industrial value, led by food and beverages which take almost half of output, value added and employment. The sector is constrained by low productivity, unused capacity, foreign exchange shortages and dependence on imported technology, but preferential access such as AGOA offers opportunities in textiles and other goods.",
  visuals: [
    {
      type: "mindMap",
      config: {
        title: "The Industrial Sector",
        center: "Industry",
        branches: [
          { label: "Sub-sector shares", items: ["Manufacturing 38%", "Construction 25%", "Electric and water 18%", "Others 19%"] },
          { label: "Features", items: ["About 13% of GDP", "9.5% of employment", "130 state, 7,000 private firms"] },
          { label: "Problems", items: ["Low industrial base", "Foreign exchange shortage", "Imported technology", "Low skills"] },
          { label: "Top groups", items: ["Food and beverages", "Non-metal", "Textiles"] }
        ]
      }
    },
    {
      type: "tableVisual",
      config: {
        title: "Gross Value of Industrial Production (1991/92 - 1997/98)",
        headers: ["Activity", "Share (%)"],
        rows: [
          ["Large- and medium-scale manufacturing", "38.4"],
          ["Small-scale manufacturing and handcrafts", "18.7"],
          ["Electricity supply", "23.2"],
          ["Quarrying", "15.8"],
          ["Mining", "3.9"]
        ]
      }
    },
    {
      type: "comparison",
      config: {
        title: "Contributions of Industry by Angle",
        left: { name: "Strengths", items: ["Over 57% of industrial value from manufacturing", "Food and beverages about half of output and jobs", "Construction growing about 13% yearly", "AGOA tariff-free US access"] },
        right: { name: "Weaknesses", items: ["Only 13% of GDP and 9.5% of employment", "Underutilized capacity", "Foreign exchange and spare parts shortages", "Dependence on imported technology"] }
      }
    }
  ],
  questions: [
    { type: "mcq", q: "The Ethiopian industrial sector is dominated by which three sub-sectors?", options: ["Manufacturing, construction, electric and water", "Mining, manufacturing, transport", "Construction, tourism, banking", "Manufacturing, agriculture, mining"], answer: 0, difficulty: 1, explanation: "Manufacturing (38%), construction (25%) and electric and water supply (18%) dominate." },
    { type: "tf", q: "The industrial sector contributes about 13 percent of GDP and 9.5 percent of employment.", answer: true, difficulty: 1, explanation: "These are the stated shares of the industrial sector." },
    { type: "tf", q: "More than 90 percent of the nation's foreign currency earnings come from the industrial sector.", answer: false, difficulty: 2, explanation: "More than 90 percent come from the agricultural sector; industry contributes very little." },
    { type: "mcq", q: "Which industrial group generated about 48 percent of the gross value of manufacturing output in 2007/08?", options: ["Chemicals", "Non-metal", "Food and beverages", "Textiles"], answer: 2, difficulty: 2, explanation: "Food and beverages accounted for about 48 percent, followed by non-metal (17%) and chemicals (9%)." },
    { type: "mcq", q: "Construction's average annual growth in 2006-2010 was about:", options: ["4.6%", "6.7%", "13%", "38%"], answer: 2, difficulty: 2, explanation: "Construction averaged about 13 percent per year in 2006-2010 versus only 4.6 percent between 1991/92 and 2005/06." },
    { type: "mcq", q: "Adding the employment shares of food and beverages (50%), non-metal (14%) and paper and printing (10.9%) gives:", options: ["64.9%", "74.9%", "85.2%", "50%"], answer: 1, difficulty: 3, explanation: "50 + 14 + 10.9 = 74.9, close to 75 percent of the manufacturing workforce." },
    { type: "short", q: "Which act allows Ethiopia to access the US textile market without tariffs and quotas?", answer: "agoa|africa growth and opportunity act", difficulty: 2, explanation: "The Africa Growth and Opportunity Act (AGOA) provides this access." },
    { type: "concept", q: "Give two major problems of the Ethiopian industrial sector listed in the textbook.", answer: "low industrial base|low productivity|underutilization of capacity|foreign exchange shortage|imported technology|low skills", difficulty: 2, explanation: "Any two of low industrial base, low productivity, underutilized capacity, shortages of foreign exchange, inputs and spare parts, imported technology and low skills are correct." },
    { type: "concept", q: "Why is manufacturing described as the most dominant component of the industrial sector?", answer: "provided more than 57 percent of sectoral output|38.4 plus 18.7 percent of gross value", difficulty: 3, explanation: "Large- and medium-scale (38.4%) plus small-scale and handcrafts (18.7%) manufacturing together contributed more than 57 percent of sectoral output." },
    { type: "short", q: "How many state farms remained after their size and role declined post-1992, and on what area?", answer: "13 state farms|156,040 hectares", difficulty: 3, explanation: "At present there are only 13 state farms, producing mainly wheat, maize, cotton, coffee and tea on 156,040 hectares." },
    { type: "ordering", q: "Rank the industrial foreign exchange earners from the largest to the smallest share.", options: ["Textiles (41.5%)", "Food and beverages (32.9%)", "Leather and footwear (10.8%)"], answer: 0, difficulty: 2, explanation: "The order is textiles, food and beverages, then leather and footwear." }
  ]
};

Lessons["g10-economics-ue7-t5"] = {
  overview: "The service sector stretches from trade and hotels to banking, transport, education and health, and by 2009/10 it had overtaken agriculture in output. This lesson covers its composition, features, and its contributions to output, employment and foreign exchange.",
  objectives: [
    "List the sub-sectors that make up the Ethiopian service sector",
    "State the sector's share in GDP and the size of its labor force",
    "Evaluate the output, employment and foreign exchange contributions of the sector",
    "Distinguish distributive services from other services using the national income classification",
    "Classify service activities as physical, intellectual or aesthetic"
  ],
  simple: "The service sector produces services, also called intangible goods, rather than physical products. It includes wholesale and retail trade, hotels and restaurants, transport and communication, banking and insurance, public administration and defense, education, health, domestic and other services. Its share in GDP was 45.1 percent in 2008/09, and it has grown rapidly since the early 1990s reforms, contributing about 45 percent in 2008/09 and 46 percent in 2009/10, overtaking agriculture. About 10 percent of the population works in services, and health and education take 1.4 percent of the labor force. The sector also earns foreign exchange: in 2008/09 service providers like Ethiopian Airlines and Ethiopian Shipping Lines, plus tourism, communication and finance, earned nearly 2 billion dollars against 1.5 billion dollars from goods exports.",
  detailed: "<p><b>What the sector includes.</b> The service sector is one of the three main economic sectors, and its basic characteristic is the production of services, also known as intangible goods; it does not include the goods-producing sector. It is composed of wholesale and retail trade, hotels and restaurants, transport and communication, banking and insurance, public administration and defense, education, and health, domestic and other services. According to the Ethiopian National Income Account classification, the first five sub-sectors are referred to as distributive services while the remaining belong to the Other service sector.</p><p><b>Main features and growth.</b> The sector's share in GDP was 45.1 percent during 2008/09, and a relatively small percentage of the population, about 10 percent, is engaged in services, with the large contribution to GDP coming mostly from government employment. Growth has been significant following the reform carried out in the early 1990s, with significant achievements in health, trade, tourism, banking and insurance. According to the 2009/10 MOFED report, the GDP share of the sector increased from 41.1 percent in 2002/03 to 46 percent in 2009/10, mainly from fast growth in real estate, hotels and restaurants, education and health, while agriculture's share fell from 56.7 percent in 1995/96 to 42 percent in 2009/10.</p><p><b>Output contribution.</b> The sector played a dominant role next to agriculture, but in 2008/09 and 2009/10 its output contribution dominated agriculture, contributing about 45 percent and 46 percent respectively.</p><p><b>Employment contribution.</b> The service sector is the second largest sector, next to agriculture, in absorbing the labor force; about 1.4 percent of the total labor force is employed in health and education while about 0.5 percent is employed in communication and transport. Permanent employment opportunities are being created by sustained government efforts to enhance private sector investment, the big push in infrastructure development, the expanding services industry, and the rapidly growing horticulture sector.</p><p><b>Foreign exchange earnings.</b> The value of service exports increased from 261 million dollars in 1980 to 348 million dollars in 1998. In 2008/09, foreign exchange income from service providers such as Ethiopian Airlines and Ethiopian Shipping Lines, and from tourism, communication, insurance and financial services, collectively reached nearly 2 billion dollars, compared with just 1.5 billion dollars from the export of goods.</p><p><b>Ways of viewing services.</b> Service industries can be classified as primarily consumer-oriented (serving consumers directly), primarily business-oriented (serving other businesses), or mixed. Alternatively, activities can be described as physical (working with objects, such as repairing cars, hairdressing and cooking), intellectual (providing education or training at university or vocational levels), or aesthetic (providing artistic experiences such as museums, theater performances, art shows and musical performances).</p>",
  keyTerms: [
    { term: "Service sector", def: "The sector producing services, or intangible goods, rather than physical products; one of the three main economic sectors." },
    { term: "Intangible goods", def: "Another name for services: outputs that are experienced rather than physically handled." },
    { term: "Distributive services", def: "In the Ethiopian National Income Account classification, the first five service sub-sectors: trade, hotels and restaurants, transport and communication, banking and insurance, and public administration and defense." },
    { term: "Consumer-oriented service", def: "A service provided directly to a consumer, such as a restaurant meal." },
    { term: "Business-oriented service", def: "A service provided directly to another business rather than to consumers." },
    { term: "Physical activities", def: "Service activities involving working with objects, such as repairing cars, hairdressing and cooking." },
    { term: "Intellectual activities", def: "Service activities that provide education or training, such as at universities and vocational schools." },
    { term: "Aesthetic activities", def: "Service activities providing artistic experiences, such as museums, theater performances, art shows and music." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "The service sector's GDP share rose from 41.1 percent in 2002/03 to 46 percent in 2009/10, while agriculture fell from 56.7 percent (1995/96) to 42 percent in 2009/10. Compute both changes.",
      given: "Services: 41.1% to 46%; agriculture: 56.7% to 42%.",
      formula: "Change = new share - old share",
      substitution: "Services: 46 - 41.1; agriculture: 42 - 56.7",
      calculation: "46 - 41.1 = +4.9; 42 - 56.7 = -14.7.",
      answer: "Services gained 4.9 percentage points; agriculture lost 14.7 percentage points over the periods."
    },
    {
      problem: "Service exports were 261 million dollars in 1980 and 348 million dollars in 1998. Compute the total increase.",
      given: "1980 = 261 million; 1998 = 348 million dollars.",
      formula: "Increase = 1998 value - 1980 value",
      substitution: "348 - 261",
      calculation: "348 - 261 = 87.",
      answer: "Service exports grew by 87 million dollars over the period."
    },
    {
      problem: "In 2008/09, foreign exchange income from services reached nearly 2 billion dollars against 1.5 billion dollars from goods exports. How much more did services earn?",
      given: "Services nearly 2 billion dollars; goods 1.5 billion dollars.",
      formula: "Difference = service income - goods income",
      substitution: "2 - 1.5",
      calculation: "2 - 1.5 = 0.5 billion dollars.",
      answer: "Service providers earned about 0.5 billion dollars more than goods exporters, so services exceeded goods."
    },
    {
      problem: "Related sector data: in 2008/09 the service sector contributed about 45 percent of output and agriculture accounted for 42 percent of GDP in 2009/10. Which sector produced more?",
      given: "Service = 45% (2008/09); agriculture = 42% (2009/10).",
      formula: "Compare the two shares directly.",
      substitution: "45 vs 42",
      calculation: "45 - 42 = 3 percentage points.",
      answer: "Services produced slightly more: it dominated agriculture with about 45 percent and 46 percent in 2008/09 and 2009/10."
    }
  ],
  commonMistakes: [
    "Thinking services still rank behind agriculture; by 2008/09 and 2009/10 the sector's output dominated agriculture.",
    "Forgetting that banking, transport, trade and public administration together are distributive services.",
    "Believing the service sector employs most Ethiopians; only about 10 percent of the population is engaged in it.",
    "Classifying education as a physical activity when it is an intellectual activity.",
    "Assuming all foreign exchange still comes from goods; in 2008/09 services earned nearly 2 billion dollars versus 1.5 from goods.",
    "Explaining service growth by reforms alone when fast growth in real estate, hotels and restaurants, education and health drove it.",
    "Confusing mixed services with business-oriented services serving only firms."
  ],
  applications: [
    "Ethiopian Airlines and Ethiopian Shipping Lines earn the bulk of the country's service foreign exchange.",
    "A hotel in Addis Ababa serving tourists contributes to trade and restaurant services and to tourism earnings.",
    "A teacher in a public school provides education services; his government salary is part of why government employment dominates the sector's GDP.",
    "A garage repairing minibus taxis performs a physical service activity.",
    "New export earnings come from the expanding horticulture sector alongside the service industry.",
    "A museum in Gondar providing visitors artistic and historical experiences performs an aesthetic service."
  ],
  summary: "The service sector produces intangible goods and includes trade, hotels and restaurants, transport and communication, banking and insurance, public administration and defense, education and health, with the first five called distributive services. After the early 1990s reforms its GDP share climbed from 41.1 percent in 2002/03 to about 45 to 46 percent by 2008/09-2009/10, overtaking agriculture, while employing about 10 percent of the population. Services also became the leading foreign exchange source, earning nearly 2 billion dollars in 2008/09 against 1.5 billion from goods.",
  visuals: [
    {
      type: "mindMap",
      config: {
        title: "The Service Sector",
        center: "Services",
        branches: [
          { label: "Sub-sectors", items: ["Trade", "Hotels and restaurants", "Transport and communication", "Banking and insurance", "Education and health"] },
          { label: "Features", items: ["45.1% of GDP in 2008/09", "About 10% of population engaged", "Government employment dominant"] },
          { label: "Roles", items: ["Output 45-46%", "Second largest employer", "Nearly 2 billion dollars FX"] },
          { label: "Activity types", items: ["Physical", "Intellectual", "Aesthetic"] }
        ]
      }
    },
    {
      type: "tableVisual",
      config: {
        title: "Types of Service Activities",
        headers: ["Type", "Meaning", "Examples"],
        rows: [
          ["Physical", "Working with objects", "Repairing cars, hairdressing, cooking"],
          ["Intellectual", "Providing education or training", "University and vocational school teaching"],
          ["Aesthetic", "Artistic experiences", "Museums, theater, art shows, musical performances"]
        ]
      }
    },
    {
      type: "qa",
      config: {
        title: "Exam Quick-Check",
        pairs: [
          { q: "What was the service sector's share of GDP in 2008/09?", a: "45.1 percent." },
          { q: "Which sub-sectors count as distributive services?", a: "Trade, hotels and restaurants, transport and communication, banking and insurance, and public administration and defense." },
          { q: "How much did services earn abroad in 2008/09 compared with goods?", a: "Nearly 2 billion dollars from services versus 1.5 billion dollars from goods." },
          { q: "Which sub-divisions drove service growth from 2002/03 to 2009/10?", a: "Real estate, hotels and restaurants, education and health." }
        ]
      }
    }
  ],
  questions: [
    { type: "mcq", q: "Which of the following is NOT part of the Ethiopian service sector?", options: ["Banking and insurance", "Wholesale and retail trade", "Mining and quarrying", "Hotels and restaurants"], answer: 2, difficulty: 1, explanation: "Mining belongs to the industrial sector, not services." },
    { type: "tf", q: "In 2008/09 and 2009/10 the output contribution of the service sector dominated the agriculture sector.", answer: true, difficulty: 2, explanation: "Services contributed about 45 percent and 46 percent in those years, overtaking agriculture." },
    { type: "mcq", q: "According to the Ethiopian National Income Account classification, distributive services include:", options: ["Education and health", "Trade, transport, banking and public administration among the first five sub-sectors", "Only domestic services", "Real estate and tourism"], answer: 1, difficulty: 3, explanation: "The first five sub-sectors (trade, hotels and restaurants, transport and communication, banking and insurance, public administration and defense) are distributive services." },
    { type: "short", q: "About what percentage of the population is engaged in the service sector?", answer: "10%|about 10 percent|10 percent", difficulty: 1, explanation: "A relatively small percentage of the population, about 10 percent, is engaged in services." },
    { type: "mcq", q: "Service foreign exchange income in 2008/09 reached nearly 2 billion dollars compared with goods exports of:", options: ["348 million dollars", "261 million dollars", "1.5 billion dollars", "2.5 billion dollars"], answer: 2, difficulty: 2, explanation: "Services earned nearly 2 billion dollars against 1.5 billion dollars from goods exports." },
    { type: "mcq", q: "The service sector's GDP share at 46 percent in 2009/10 was mainly the result of fast growth in:", options: ["Real estate, hotels and restaurants, education, health", "Defense only", "Traditional agriculture", "Livestock exports"], answer: 0, difficulty: 3, explanation: "Fast growth in real estate, hotels and restaurants, education and health drove the rise from 41.1 percent." },
    { type: "concept", q: "Classify these as physical, intellectual or aesthetic service activities: teaching at a vocational school, cutting hair, guiding a museum visitor.", answer: "teaching intellectual, hairdressing physical, museum aesthetic|intellectual, physical, aesthetic", difficulty: 2, explanation: "Education is intellectual, hairdressing is physical, and museum artistry is aesthetic." },
    { type: "tf", q: "About 1.4 percent of Ethiopia's total labor force is employed in the health and education sectors.", answer: true, difficulty: 2, explanation: "About 1.4 percent work in health and education, and about 0.5 percent in communication and transport." },
    { type: "short", q: "Give one employment driver of permanent job creation in services named in the lesson.", answer: "private sector investment|infrastructure push|expanding services industry|horticulture sector", difficulty: 2, explanation: "Drivers include private investment efforts, the infrastructure big push, the expanding services industry and rapidly growing horticulture." },
    { type: "concept", q: "Why is the service sector also called the sector of intangible goods?", answer: "it produces services not physical products|services cannot be touched", difficulty: 1, explanation: "Its basic characteristic is the production of services, also known as intangible goods, and not physical output." },
    { type: "ordering", q: "Place these service sub-sectors in the order of the national income classification, from distributive services to Other services: banking and insurance, education, retail trade.", options: ["Retail trade", "Banking and insurance", "Education"], answer: 0, difficulty: 2, explanation: "Retail trade and banking and insurance are within the first five distributive services; education belongs to the Other services." }
  ]
};

Lessons["g10-economics-ue7-t6"] = {
  overview: "Should Ethiopia develop by industrializing first or by raising agricultural productivity first? This lesson compares the two development paradigms and evaluates Ethiopia's Agricultural Development Led Industrialization (ADLI) strategy.",
  objectives: [
    "Describe why agriculture is the mainstay of the Ethiopian economy despite its volatility",
    "Contrast the industry-first paradigm of Western economies with the agriculture-led view",
    "Explain why development economists since the 1970s treat agriculture as a leading sector",
    "Trace the ADLI logic from farm productivity to industrial growth",
    "Evaluate the strengths and limits of the ADLI strategy for Ethiopia"
  ],
  simple: "Agriculture is the mainstay of Ethiopia's economy: it contributes the largest share to GDP, export earnings and employment and supplies raw materials to industry, yet it is the most volatile sector because it depends on rainfall and suffers seasonal shocks. In Western economies, industry was given priority on the assumption that it can adopt technology best and create forward and backward linkages, while agriculture was seen as passive and secondary. Since the 1970s, however, development economists have realized agriculture is a leading and dynamic sector: without agricultural development, industrial growth becomes weak because food and raw materials become costly. That is why Ethiopia adopted ADLI, Agricultural Development Led Industrialization: raising farm productivity lowers food and raw material costs, raises industrial profits and finances industrialization.",
  detailed: "<p><b>Why the choice matters.</b> Agriculture is the mainstay of the country's economy and contributes the largest share to GDP, export trade earnings and employment, and provides raw materials for the country's industries to a great extent. Yet it is also the most volatile sector, shown in the unevenness of its growth patterns, an effect of its heavy dependence on rainfall and the seasonal shocks frequently observed in Ethiopia. Because of this scenario, the various strategies so far adopted to develop it need rethinking, considering regional as well as local objective conditions.</p><p><b>The industry-first paradigm.</b> In the Western economies, the industrial sector was given priority, based on the assumption that industry has the largest potential to adopt technology and to create forward and backward linkages with the other sectors. Under this view, the role of agriculture in economic development is considered largely passive and supportive, or secondary.</p><p><b>The agriculture-led paradigm.</b> The desirability of placing such heavy priority on industrial growth is questionable for most developing countries like Ethiopia. Since the 1970s, development economists have come to realize that the agricultural sector needs to be viewed as a leading and dynamic sector. They further state that, without the development of the agricultural sector, the growth of the industrial sector will become weak. Hence the agricultural sector has to be the leading sector, and this is the approach of the current Ethiopian strategy of development, ADLI.</p><p><b>The ADLI logic.</b> ADLI links the sector analysis of this unit: productive agriculture supplies abundant food and cheap raw materials to industry and its labor force, reducing the cost of living in urban areas and so easing pressure on wages; cheaper raw materials cut industrial costs; higher farm incomes raise demand for manufactures; and the freed-up surplus, via taxes, terms of trade and compulsory delivery, can finance investment. Industrial savings and investment rise, and industrialization proceeds led by agriculture rather than at agriculture's expense.</p><p><b>Weighing the two sides.</b> Supporters of industrial development first argue for faster technology adoption and stronger linkages; supporters of agricultural development first point to Ethiopia's actual structure, where agriculture holds about 45 percent of GDP, over 80 percent of exports and about 85 percent of employment against industry's 13 percent of GDP and 9.5 percent of employment. An industrial push without food security and raw material supply would strain scarce foreign exchange for food imports and inputs, so the textbook's position favors agricultural development leading industrialization, with the strategy needing periodic rethinking in light of regional and local conditions.</p>",
  keyTerms: [
    { term: "Agricultural development", def: "Raising the productivity of farming so agriculture can lead the rest of the economy." },
    { term: "Industrial development", def: "Building the manufacturing base, prioritized in Western economies for its technology adoption and linkages." },
    { term: "ADLI strategy", def: "Agricultural Development Led Industrialization, the current Ethiopian development approach in which agriculture is the leading sector." },
    { term: "Development paradigm", def: "A set of views about which sector should lead development; agriculture was traditionally seen as passive and secondary." },
    { term: "Leading sector", def: "The sector whose growth drives the growth of the others; since the 1970s agriculture is viewed this way for developing countries." },
    { term: "Volatile sector", def: "A sector with uneven, unstable growth; Ethiopian agriculture is volatile because it depends on rainfall and seasonal shocks." },
    { term: "Structural transformation", def: "The movement from less productive agriculture to more productive industry as development proceeds." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "Agriculture contributes about 45 percent of GDP while industry contributes about 13 percent. How many times larger is agriculture's GDP share, and what does this imply for which sector should lead?",
      given: "Agriculture = 45% of GDP; industry = 13% of GDP.",
      formula: "Ratio = agriculture share / industry share",
      substitution: "45 / 13",
      calculation: "45 / 13 = 3.46, about 3.5 times.",
      answer: "Agriculture's GDP share is about 3.5 times industry's, supporting the view that agriculture must lead the development strategy, as ADLI assumes."
    },
    {
      problem: "Agriculture employs about 85 percent of the population while industry employs about 9.5 percent. Estimate how many times larger agriculture's employment share is.",
      given: "Agriculture employment = 85%; industry employment = 9.5%.",
      formula: "Ratio = 85 / 9.5",
      substitution: "85 / 9.5 = 8.9",
      calculation: "85 / 9.5 = about 9.",
      answer: "Agriculture's employment share is about 9 times industry's, so industrialization cannot absorb the labor force quickly and farm productivity improvement benefits most Ethiopians."
    },
    {
      problem: "Agriculture generates more than 80 percent of export earnings and industry's textiles, food and beverages, and leather earn 41.5, 32.9 and 10.8 percent of industrial foreign exchange. Explain what an agriculture-led strategy implies for foreign exchange planning.",
      given: "Agriculture: over 80% of export earnings; industry's FX sources are textiles 41.5%, food and beverages 32.9%, leather 10.8%.",
      formula: "Logic: the leading sector anchors foreign exchange supply.",
      substitution: "Since agriculture dominates exports, food imports or input imports would strain foreign exchange if agriculture weakened.",
      calculation: "A weak harvest would force spending foreign exchange on food imports, weakening industry, so agriculture must be developed first.",
      answer: "Because agriculture supplies most export earnings and raw materials, weakening it would also weaken industry's foreign exchange base; hence ADLI develops agriculture to lead industry."
    }
  ],
  commonMistakes: [
    "Assuming Western countries' industry-first model automatically fits developing countries like Ethiopia.",
    "Thinking ADLI ignores industry; it is industrialization led by agricultural development, not instead of it.",
    "Believing agriculture's role is only passive and supportive rather than leading and dynamic.",
    "Forgetting that without agricultural development, industrial growth becomes weak because food and raw materials become scarce and costly.",
    "Ignoring agricultural volatility caused by rainfall dependence when assessing growth prospects.",
    "Treating the sector debate as settled, when strategies need rethinking based on regional and local conditions.",
    "Quoting current industrial shares as if they were already large, when industry still contributes only about 13 percent of GDP."
  ],
  applications: [
    "Prioritizing irrigation and extension services shields the harvest from rainfall dependence, calming the sector's volatility.",
    "Raising smallholder yields lowers urban food prices, which eases wage pressure and boosts industrial profits.",
    "Coffee and oilseed export earnings can finance imported machinery for industry if the export base is protected.",
    "School debates on industry-first versus agriculture-first mirror the actual policy choices Ethiopia has made since 1991.",
    "Rural income growth from ADLI feeds demand for sampled manufactured goods such as clothing, soap and tools.",
    "When drought strikes, the economy changes with it, showing why agriculture's productivity is a national priority."
  ],
  summary: "Agriculture is Ethiopia's mainstay, contributing the largest shares of GDP, exports and employment and supplying industry's raw materials, yet it is the most volatile sector due to its dependence on rainfall. Western development thinking once treated agriculture as passive and gave industry priority, but since the 1970s development economists have argued agriculture must be the leading sector because industrial growth weakens without it. Ethiopia's ADLI strategy follows this agriculture-led approach by raising farm productivity to cut food and raw material costs and to fund industrialization.",
  visuals: [
    {
      type: "comparison",
      config: {
        title: "Agriculture-Led vs Industry-Led Development",
        left: { name: "Agriculture first (ADLI)", items: ["Food security guaranteed", "Cheap raw materials for industry", "Wage pressure and living costs fall", "Fits Ethiopia's actual shares"] },
        right: { name: "Industry first", items: ["Assumed strongest technology adoption", "Assumed strongest linkages", "Agriculture treated as passive", "Needs imported food and inputs at risk"] }
      }
    },
    {
      type: "steps",
      config: {
        title: "The ADLI Logic Chain",
        steps: [
          { label: "Raise farm productivity", detail: "Better inputs and practices lift agricultural output." },
          { label: "Cheaper food", detail: "Urban cost of living falls, easing pressure on wages." },
          { label: "Cheaper raw materials", detail: "Industrial input costs decline for sectors like food processing." },
          { label: "Higher profits and demand", detail: "Industrial profits rise and rural incomes raise demand for manufactures." },
          { label: "Industrialization", detail: "Industrial savings and investment grow, so industry expands led by agriculture." }
        ]
      }
    },
    {
      type: "qa",
      config: {
        title: "Exam Quick-Check",
        pairs: [
          { q: "What does ADLI stand for?", a: "Agricultural Development Led Industrialization." },
          { q: "Why is agriculture called the most volatile sector?", a: "Its growth is uneven because it depends heavily on rainfall and seasonal shocks." },
          { q: "When did development economists begin viewing agriculture as a leading sector?", a: "Since the 1970s." },
          { q: "What is the textbook's condition for rethinking development strategy?", a: "It should consider the various regional as well as local objective conditions." }
        ]
      }
    }
  ],
  questions: [
    { type: "mcq", q: "ADLI stands for:", options: ["Agricultural Delivery and Licensing Institution", "Agricultural Development Led Industrialization", "African Development and Lending Initiative", "Agrarian Dominated Land Investment"], answer: 1, difficulty: 1, explanation: "ADLI is Agricultural Development Led Industrialization, the current Ethiopian development strategy." },
    { type: "tf", q: "In the Western economies, the industrial sector was given priority on the assumption that it has the largest potential to adopt technology.", answer: true, difficulty: 1, explanation: "Industry was prioritized for its assumed technology adoption and linkages." },
    { type: "tf", q: "Under ADLI, industrial growth becomes strong even if the agricultural sector is not developed.", answer: false, difficulty: 2, explanation: "Development economists state that without agricultural development, industrial growth will become weak." },
    { type: "mcq", q: "Agriculture is described as the most volatile sector because of:", options: ["Low industrial demand", "Heavy dependence on rainfall and seasonal shocks", "High wage pressure", "Excess urbanization"], answer: 1, difficulty: 2, explanation: "Its uneven growth patterns result from dependence on rainfall and seasonal shocks." },
    { type: "concept", q: "Explain in one sentence why agriculture, not industry, was made the leading sector for Ethiopia.", answer: "without agricultural development industrial growth becomes weak|agriculture supplies food, labor and raw materials for industry", difficulty: 3, explanation: "Agriculture dominates GDP, exports and employment and feeds industry with food and raw materials, so industry cannot grow without a developed agriculture." },
    { type: "mcq", q: "Since the 1970s, development economists have viewed the role of agriculture as:", options: ["The leading and dynamic sector", "Entirely passive", "Irrelevant to industry", "Only a source of taxes"], answer: 0, difficulty: 2, explanation: "Economists since the 1970s view agriculture as a leading and dynamic sector, the basis of ADLI." },
    { type: "short", q: "Name one of the two sides of the textbook's debate question on Ethiopia's development.", answer: "industrial development is better|agricultural development is better", difficulty: 1, explanation: "The debate asks whether industrial or agricultural development is better for faster growth in Ethiopia." },
    { type: "concept", q: "Using ADLI logic, state two effects of higher agricultural productivity on industry.", answer: "cheaper food reduces wage pressure|cheaper raw materials raise industrial profits|higher rural incomes raise demand for manufactures", difficulty: 3, explanation: "Lower living costs ease wage pressure, cheaper raw materials raise profits, and rural demand for manufactures grows." },
    { type: "mcq", q: "What should guide the rethinking of Ethiopia's development priorities according to the textbook?", options: ["Global fashion trends", "Various regional and local objective conditions", "Currency denomination", "Military strength"], answer: 1, difficulty: 2, explanation: "Rethinking should consider the various regional as well as local objective conditions." },
    { type: "mcq", q: "Comparing the two sectors, agriculture's share of employment versus industry's is roughly:", options: ["85% versus 9.5%", "33% versus 29%", "45% versus 13%", "10% versus 13%"], answer: 0, difficulty: 3, explanation: "Agriculture employs about 85 percent of the population; industry about 9.5 percent." },
    { type: "ordering", q: "Arrange the ADLI sequence from start to finish.", options: ["Agricultural productivity rises", "Food and raw material costs fall", "Urban wage pressure eases and industrial profits rise", "Industrial savings and investment grow"], answer: 0, difficulty: 2, explanation: "Productivity first, then cheaper food and materials, then wage relief and profits, then investment in industry." }
  ]
};
