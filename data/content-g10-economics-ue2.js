/* Content: Grade 10 Economics - Unit 2: Theories of Demand and Supply (4 topics)
   Source: MoE Economics Grade 10 Student Textbook, Unit 2. */
window.Lessons = window.Lessons || {};

Lessons["g10-economics-ue2-t1"] = {
  overview: "Demand is more than wanting a good: it is the willingness and ability to buy at a given price. This lesson builds the demand schedule, function and curve, separates movements along the curve from shifts of the whole curve, and derives market demand.",
  objectives: [
    "Define demand as willingness plus ability to pay",
    "Explain the demand schedule, demand function and demand curve",
    "List the factors that affect demand besides price",
    "Distinguish between a change in quantity demanded and a change in demand",
    "Derive market demand by horizontally summing individual demands"
  ],
  simple: "Demand is the ability and willingness to buy a specific quantity of a commodity at the prevailing price in a given period of time. So demand = willingness to buy + ability to pay; a poor person may desire a car but cannot demand it. Demand can be shown as a schedule (a table), as a function such as Qd = a - bP, or as a curve with price on the vertical axis. The law of demand says price and quantity demanded move in opposite directions, so the demand curve slopes downward. Other factors also move demand: income, prices of substitutes and complements, tastes and habits, population, season and price expectations. A change in the good's own price causes movement along the curve; any other factor shifts the whole curve. Market demand is the horizontal sum of all individual demands.",
  detailed: "<p><b>What demand is.</b> Demand means the ability and willingness to buy a specific quantity of a commodity at the prevailing price in a given period of time. Demand therefore implies a desire to acquire the good, along with the willingness and ability to pay for it. The textbook writes this as Demand = Willingness to buy + Ability to pay. A student who wants a bicycle but has no money has only a desire, not a demand; a person with money who does not want the good has no demand either. Both willingness to buy and the purchasing power to pay must be present.</p><p><b>Schedule, function and curve.</b> Demand can be expressed in three forms. A <b>demand schedule</b> is a table showing the different quantities of a commodity a consumer is willing to buy at different prices during a given period. A <b>demand function</b> expresses the relationship between price and quantity demanded as Qd = f(P) = a - bP, where Qd is quantity demanded, P is price, a is a constant and b is the coefficient of price. A <b>demand curve</b> graphs the schedule, with the independent variable (price) on the vertical axis and the dependent variable (quantity) on the horizontal axis. Amina's monthly coffee demand shows the pattern: if coffee were free she buys 9 kg, at birr 5 she buys 8 kg, and as the price keeps rising she buys less and less, until at birr 45 she buys nothing at all. The schedule holds <i>ceteris paribus</i>, other things remaining constant.</p><p><b>The law of demand and the slope.</b> The law of demand states that, all other things remaining constant, the quantity demanded of a commodity increases when its price decreases and decreases when its price increases. Price and quantity demanded are inversely related, so the demand function has a negative slope and the curve slopes downward. This important property is called downward-sloping demand.</p><p><b>Factors affecting demand (determinants).</b> The price of the good itself is the primary determinant, and price and demand are inversely related. The price of related goods matters too. <b>Substitute goods</b> can be used in place of each other (coffee and tea, pens and pencils, butter and oil): a rise in the price of one increases the demand for its substitute. <b>Complementary goods</b> are used together (tea and sugar, phone and sim-card, cars and petrol): a fall in the price of one raises the demand for both. Consumer income is directly related to demand: if income increases, demand will be greater for most commodities. Changes in tastes, habits and preferences change demand. If the size of the population is greater, market demand will be greater. Season matters: demand for woolen clothes rises in cold seasons and cotton clothes in hot seasons. Finally, if a consumer expects prices to rise in the future, he or she may buy more at the current price.</p><p><b>Movement along the curve versus a shift.</b> A <b>change in quantity demanded</b> is a movement from one price-quantity combination to another on a fixed demand schedule or demand curve, caused only by an increase or decrease in the product's own price. The downward movement along the curve is called an <b>extension of demand</b>, while the upward movement is a <b>contraction of demand</b>. A <b>change in demand</b> is a change in one or more determinants of demand other than the good's own price, which changes the demand data itself. Graphically it is a shift of the whole curve: an increase in demand shifts the curve upward to the right (D1), and a decrease shifts it downward to the left (D2). The factors affecting demand other than own price are called shifting factors.</p><p><b>Individual and market demand.</b> <b>Individual demand</b> is the quantity of a commodity that one person is willing and able to buy at given prices over a period. Mr. Adamu, for instance, buys 1 kg of banana per week at Birr 25, 2 kg at Birr 20, 3 kg at Birr 15 and none at Birr 30. <b>Market demand</b> is the total quantity that all users of the commodity are willing and able to buy at a given price over a period, obtained by the horizontal summation of all individual demands at each price. With three wheat buyers A, B and C, the market demands 10 quintals at Birr 6 per quintal (4 + 4 + 2) and 15 quintals at Birr 3. Numerically, if each of 100 identical buyers has individual demand QI = 50 - 5P, the market demand function is Qm = (50 - 5P) x 100 = 5000 - 500P.</p>",
  keyTerms: [
    { term: "Demand", def: "The ability and willingness to buy a specific quantity of a commodity at the prevailing price in a given period of time; Demand = Willingness to buy + Ability to pay." },
    { term: "Demand schedule", def: "A table showing the different quantities of a commodity a consumer is willing to buy at different price levels during a given period." },
    { term: "Demand curve", def: "A curve representing the relationship between the quantity of a good chosen by a consumer and its price; it slopes downward." },
    { term: "Substitute goods", def: "Goods that can be used in place of each other to satisfy a given want, such as coffee and tea or pens and pencils." },
    { term: "Complementary goods", def: "Goods used together to satisfy a given want, such as tea and sugar or cars and petrol." },
    { term: "Extension of demand", def: "The downward movement along a fixed demand curve caused by a fall in the good's own price." },
    { term: "Change in demand", def: "A change in the demand schedule itself, shown as a shift of the demand curve, caused by a determinant other than the good's own price." },
    { term: "Market demand", def: "The total quantity all consumers are willing and able to buy at a given price; the horizontal summation of individual demands." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "Given 100 identical buyers each with individual demand QI = 50 - 5P, derive the market demand function and find the total market quantity demanded when the price is Birr 5.",
      given: "Individual demand: QI = 50 - 5P; number of identical buyers = 100.",
      formula: "Market demand is the horizontal summation of individual demands; with identical buyers, multiply one buyer's function by their number.",
      substitution: "Qm = (50 - 5P) x 100.",
      calculation: "Qm = 5000 - 500P. At P = 5: Qm = 5000 - 500(5) = 5000 - 2500 = 2500.",
      answer: "The market demand function is Qm = 5000 - 500P; at Birr 5 the market demands 2,500 units."
    },
    {
      problem: "Amina's monthly demand for coffee follows Qd = 9 - 0.2P, where P is the price in birr per kg. How many kg does she buy when the price is Birr 15, and at what price does her demand fall to zero?",
      given: "Qd = 9 - 0.2P (9 kg when coffee is free, 0 kg at Birr 45).",
      formula: "Substitute the price into the demand function; set Qd = 0 to find the price at which demand disappears.",
      substitution: "Qd = 9 - 0.2(15); for zero demand, 0 = 9 - 0.2P.",
      calculation: "Qd = 9 - 3 = 6 kg. Setting Qd = 0 gives 0.2P = 9, so P = 45 birr.",
      answer: "At Birr 15 Amina buys 6 kg; her demand falls to zero at Birr 45."
    },
    {
      problem: "Three wheat buyers A, B and C demand the following quantities: at Birr 6 per quintal, A = 4, B = 4 and C = 2 quintals; at Birr 3, A = 6, B = 5 and C = 4 quintals. Find the market demand at both prices.",
      given: "At Birr 6: A = 4, B = 4, C = 2. At Birr 3: A = 6, B = 5, C = 4.",
      formula: "Market demand at each price is the horizontal summation of all individual quantities demanded at that price.",
      substitution: "At Birr 6: 4 + 4 + 2. At Birr 3: 6 + 5 + 4.",
      calculation: "At Birr 6 the market demand is 10 quintals; at Birr 3 it is 15 quintals.",
      answer: "Market demand is 10 quintals at Birr 6 and 15 quintals at Birr 3."
    },
    {
      problem: "Mr. Adamu buys 1 kg of banana per week when the price is Birr 25 and 2 kg when the price falls to Birr 20, with his income and tastes unchanged. Is this a change in demand or a change in quantity demanded, and what is the movement called?",
      given: "The price fell from Birr 25 to Birr 20 and the quantity rose from 1 kg to 2 kg; all other factors constant.",
      formula: "A change in the good's own price moves the buyer along a fixed demand curve; only other determinants shift the curve.",
      substitution: "The cause is the own price change, so the buyer stays on the same demand schedule.",
      calculation: "The price fell and quantity demanded rose, which is a downward movement along the fixed curve.",
      answer: "A change in quantity demanded, called an extension of demand."
    }
  ],
  commonMistakes: [
    "Treating any desire for a good as demand, forgetting that demand also requires ability to pay.",
    "Thinking a rise in the good's own price shifts the demand curve instead of moving along it.",
    "Stating the law of demand as a positive relationship between price and quantity demanded.",
    "Treating substitutes and complements alike, for example saying a rise in the price of a complement increases demand.",
    "Confusing extension of demand (when price falls) with contraction of demand (when price rises).",
    "Adding prices instead of quantities when deriving market demand by horizontal summation.",
    "Forgetting that population size, season and price expectations can shift market demand."
  ],
  applications: [
    "Explaining why teff prices rise during holidays when demand shifts rightward.",
    "Predicting that a rise in coffee prices pushes Ethiopian consumers toward tea, a substitute.",
    "Understanding why woolen clothes sell more in the cold highland seasons and cotton clothes in the hot seasons.",
    "Seeing why buyers hurry to purchase fuel today when they expect its price to rise in the future.",
    "Estimating the market demand of a commodity like bananas by adding what each household in a kebele would buy at each price.",
    "Using Qd = a - bP to predict how a price change alters the quantity a firm can sell."
  ],
  summary: "Demand is the willingness and ability to buy a specific quantity at the prevailing price, expressible as a schedule, a function (Qd = a - bP) or a downward-sloping curve. The law of demand gives the inverse price-quantity relationship, while income, related prices, tastes, population, season and expectations act as shifting factors. Market demand is the horizontal summation of all individual demands, so a market of 100 identical buyers multiplies one buyer's function by 100.",
  visuals: [
    {
      type: "comparison",
      config: {
        title: "Change in Quantity Demanded vs Change in Demand",
        left: { name: "Movement along the curve", items: ["Caused by the good's own price", "Demand curve stays fixed", "Price falls: extension of demand", "Price rises: contraction of demand"] },
        right: { name: "Shift of the whole curve", items: ["Caused by income, tastes, related prices", "Population, season and expectations", "Rightward shift: increase in demand", "Leftward shift: decrease in demand"] }
      }
    },
    {
      type: "mindMap",
      config: {
        title: "Factors Affecting Demand",
        center: "Demand",
        branches: [
          { label: "Own price", items: ["Inverse relationship", "Movement along the curve"] },
          { label: "Related goods", items: ["Substitutes (coffee and tea)", "Complements (cars and petrol)"] },
          { label: "Buyer conditions", items: ["Income", "Tastes and habits", "Price expectations"] },
          { label: "Market conditions", items: ["Population", "Season"] }
        ]
      }
    },
    {
      type: "tableVisual",
      config: {
        title: "Market Demand for Wheat (Birr per quintal)",
        headers: ["Price", "A", "B", "C", "Market"],
        rows: [
          ["12", "2", "1", "0", "3"],
          ["9", "3", "2", "1", "6"],
          ["6", "4", "4", "2", "10"],
          ["3", "6", "5", "4", "15"],
          ["1", "9", "6", "5", "20"]
        ]
      }
    }
  ],
  questions: [
    { type: "mcq", q: "Demand for a commodity exists only when a person has:", options: ["desire alone", "willingness and ability to pay", "money even if unwilling to buy", "a guarantee of supply"], answer: 1, difficulty: 1, explanation: "Demand = willingness to buy + ability to pay; desire alone is not demand." },
    { type: "tf", q: "A desire for a good without the ability to pay for it is still demand.", answer: false, difficulty: 1, explanation: "Demand requires both willingness to buy and ability to pay." },
    { type: "mcq", q: "Which expression is the demand function as given in the lesson?", options: ["Qd = a - bP", "Qd = b - aP", "Qs = a + bP", "Qd = a + bP"], answer: 0, difficulty: 1, explanation: "The demand function is Qd = f(P) = a - bP, with b the coefficient of price." },
    { type: "short", q: "The downward movement along a demand curve caused by a fall in price is called:", answer: "extension of demand|extension", difficulty: 1, explanation: "A fall in price produces an extension of demand along the fixed curve." },
    { type: "mcq", q: "For complements such as tea and sugar, a fall in the price of one commodity leads to:", options: ["a fall in the demand for both", "a rise in the demand for both", "no change in demand for either", "a rise for one and a fall for the other"], answer: 1, difficulty: 2, explanation: "In the case of complementary goods, a fall in the price of one raises the demand for both." },
    { type: "tf", q: "An increase in consumer income shifts the demand curve of most goods rightward.", answer: true, difficulty: 2, explanation: "Consumer income is directly related to demand, so higher income means greater demand and a rightward shift." },
    { type: "mcq", q: "Which of the following is a shifting factor of demand rather than a cause of movement along the curve?", options: ["the price of the good itself", "consumer income", "the slope of the demand curve", "nothing; only price matters"], answer: 1, difficulty: 2, explanation: "All determinants except the good's own price are shifting factors; income is one of them." },
    { type: "concept", q: "State the difference between a change in quantity demanded and a change in demand.", answer: "own price moves along the curve|other factors shift the curve", difficulty: 2, explanation: "A change in quantity demanded is movement along the curve caused by own price; a change in demand is a shift caused by other determinants." },
    { type: "mcq", q: "Using Amina's demand function Qd = 9 - 0.2P, when the price is Birr 20 the quantity demanded is:", options: ["4 kg", "5 kg", "6 kg", "7 kg"], answer: 1, difficulty: 3, explanation: "Qd = 9 - 0.2(20) = 9 - 4 = 5 kg." },
    { type: "ordering", q: "Arrange the steps for deriving a market demand curve.", options: ["Join the plotted points to form the market curve", "Write the demand schedule of each consumer", "Plot the market totals against price", "Add the quantities all consumers demand at each price"], answer: 1, difficulty: 2, explanation: "The order is: write each schedule, add quantities at each price, plot the totals, then join the points." },
    { type: "mcq", q: "The individual demand of a product is QI = 50 - 5P and there are 100 identical buyers. The market demand function is:", options: ["Qm = 50 - 500P", "Qm = 5000 - 5P", "Qm = 5000 - 500P", "Qm = 150 - 15P"], answer: 2, difficulty: 3, explanation: "Qm = (50 - 5P) x 100 = 5000 - 500P." }
  ]
};

Lessons["g10-economics-ue2-t2"] = {
  overview: "Supply is what producers are willing and able to offer for sale at given prices, and it responds positively to price. This lesson covers the supply function, schedule and curve, the movement-versus-shift distinction, the shifting factors and the derivation of market supply.",
  objectives: [
    "Define supply and the quantity supplied, ceteris paribus",
    "Explain the supply function, supply schedule and supply curve",
    "Interpret the positive slope of the supply curve",
    "Distinguish between changes in quantity supplied and changes in supply",
    "Derive the market supply by summing individual supplies"
  ],
  simple: "Supply is the amount of a product that a producer is willing and able to produce and offer for sale at given prices over a specific period, ceteris paribus. Supply can be written as a function Qs = a + bP, as a schedule (a table) or as a curve with price on the vertical axis. The law of supply says the higher the price, the greater the quantity supplied, so the supply curve slopes upward. Movement along the curve happens only when the good's own price changes. Shifting the whole curve requires other factors: costs of factors of production, technology, taxes and subsidies, transport, external shocks such as floods, and producer goals. Market supply is the sum of individual supplies, found by adding quantities at each price or multiplying one representative supplier's function by the number of identical sellers.",
  detailed: "<p><b>What supply is.</b> While buyers of a product constitute the demand side of a market, sellers make up the supply side. <b>Supply</b> may be defined as the various amounts of a product that a producer (firm) is willing and able to produce and make available for sale in the market over a specific time period, at given prices, ceteris paribus. Holding other factors constant, the quantity supplied of a good or service is the amount offered for sale at a given price. A <b>supply function</b> states the relationship between the quantity supplied (the dependent variable) and its determinants such as price: for a single producer of commodity X it takes the form QX = F(PX) = a + bP, ceteris paribus.</p><p><b>Supply schedule and supply curve.</b> The <b>supply schedule</b> is a tabular presentation of the law of supply. Substituting relevant prices into the supply equation gives, for example, zero kg supplied at Birr 0, 1 kg at Birr 10, 2 kg at Birr 15, 3 kg at Birr 22 and 9 kg only at Birr 106. The <b>supply curve</b> is the graphical depiction of the schedule, with price conventionally on the vertical axis and quantity supplied on the horizontal axis. The schedule shows a positive relationship between quantity supplied and price: the supplier requires a minimum price before supplying any of the product, then increases quantities as the unit price rises, and vice versa.</p><p><b>The law of supply.</b> The law of supply expresses the direct relationship between the price of a commodity and its quantity supplied: in general, the higher the price of a good, the greater the quantity of the good suppliers are willing and able to make available in the market. Price and supply are positively related, so the slope of the supply curve is positive and the curve rises from left to right.</p><p><b>Movement along the curve versus a shift.</b> A <b>change in quantity supplied</b> is a movement along the same supply curve, caused by a change in the commodity's own price; in such a situation the supply curve remains the same (movement from A to B, B to C, C to A, and so on). A <b>change in supply</b> is a shift in the position of the supply curve caused by something other than the commodity's own price, such as a change in the prices of other goods, in the prices of factors of production, in the production technique or in the goals of the producer.</p><p><b>Factors affecting supply (determinants).</b> The cost of factors of production: an increase in factor cost raises the cost of production and reduces supply. The state of technology: advanced technology increases the productivity of the organization and increases its supply. External factors: a flood reduces the supply of various agricultural products. Tax and subsidies: an increase in government subsidies results in more production and higher supply. Transport: better transport facilities will increase the supply. The price of other goods also matters, because a producer compares the returns from commodity X with what could be earned by selling other goods, and the goals of the producer can change the relationship between price and quantity supplied.</p><p><b>Deriving market supply.</b> Market supply is derived in a way similar to market demand, by summing the individual suppliers in the market. For shirts with sellers A, B and C, the market quantity at each price is the total of their individual quantities: 1 shirt at Birr 1, 8 at Birr 3, 12 at Birr 4 and 26 at Birr 6. Graphically, the market supply is the horizontal summation of the individual supply curves, and the market supply curve is flatter than the individual curves. When sellers are identical, as assumed in a perfectly competitive market, we simply multiply the quantity supplied by a representative supplier by the number of sellers: 120 potato sellers each with Qs = 20p - 5 give Qm = 2400p - 600, which at Birr 4 is 9,000 tons.</p>",
  keyTerms: [
    { term: "Supply", def: "The various amounts of a product a producer is willing and able to produce and make available for sale at given prices over a specific period, ceteris paribus." },
    { term: "Supply function", def: "A statement of the relationship between quantity supplied and its determinants, illustrated by QX = F(PX) = a + bP." },
    { term: "Supply schedule", def: "A tabular presentation of the law of supply, pairing each price with the quantity supplied." },
    { term: "Supply curve", def: "The graphical depiction of the supply schedule; it slopes upward because price and quantity supplied are positively related." },
    { term: "Law of supply", def: "In general, the higher the price of a good, the greater the quantity suppliers are willing and able to make available in the market." },
    { term: "Change in quantity supplied", def: "A movement along the same supply curve caused only by a change in the commodity's own price." },
    { term: "Change in supply", def: "A shift in the position of the supply curve caused by a factor other than the good's own price, such as technology or factor costs." },
    { term: "Market supply", def: "The total quantity all sellers offer at each price, obtained by the horizontal summation of individual supplies." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "There are 120 potato sellers in a market, each with supply function Qs = 20p - 5 (quantity in tons). Derive the market supply equation and find the market quantity supplied when the price is Birr 4.",
      given: "Representative supply: Qs = 20p - 5; number of identical sellers = 120.",
      formula: "With identical sellers, market supply Qm = Qs multiplied by the number of sellers.",
      substitution: "Qm = 120(20p - 5) = 2400p - 600.",
      calculation: "At p = 4: Qm = 2400(4) - 600 = 9600 - 600 = 9000.",
      answer: "The market supply equation is Qm = 2400p - 600; at Birr 4 the market supplies 9,000 tons."
    },
    {
      problem: "100 identical wheat suppliers each have the supply function Qs = 3p - 2. Find the market supply function.",
      given: "Qs = 3p - 2 per supplier; 100 identical suppliers.",
      formula: "Market supply with identical sellers: Qm = (3p - 2) x 100.",
      substitution: "Qm = 100(3p) - 100(2).",
      calculation: "Qm = 300p - 200.",
      answer: "The market supply function is Qm = 300p - 200."
    },
    {
      problem: "Shirt sellers A, B and C supply the following: at Birr 1 per shirt, A = 0, B = 0 and C = 1; at Birr 4, A = 2, B = 3 and C = 7; at Birr 6, A = 7, B = 6 and C = 13. Find the market supply at each of the three prices.",
      given: "Individual quantities: at Birr 1 (0, 0, 1); at Birr 4 (2, 3, 7); at Birr 6 (7, 6, 13).",
      formula: "Market supply at a price is the sum of all individual quantities supplied at that price.",
      substitution: "0 + 0 + 1 at Birr 1; 2 + 3 + 7 at Birr 4; 7 + 6 + 13 at Birr 6.",
      calculation: "The totals are 1, 12 and 26 shirts.",
      answer: "Market supply is 1 shirt at Birr 1, 12 shirts at Birr 4 and 26 shirts at Birr 6."
    },
    {
      problem: "A flood destroys part of the teff harvest in one region; separately, the price of teff rises from Birr 22 to Birr 35 per kg. Which event shifts the supply curve and which moves sellers along a fixed supply curve?",
      given: "Event 1: a flood, a non-price factor. Event 2: a change in the commodity's own price.",
      formula: "Only a change in the good's own price causes movement along the supply curve; any other factor shifts the curve.",
      substitution: "The flood is a change in external factors, cutting supply at every price; the price rise raises quantity supplied on the same curve.",
      calculation: "The flood shifts the supply curve leftward; the price rise is an upward movement along the fixed curve.",
      answer: "The flood changes supply; the price rise changes quantity supplied (movement along the curve)."
    }
  ],
  commonMistakes: [
    "Thinking supply means whatever is physically available in a store rather than what producers are willing and able to sell at given prices.",
    "Believing a rise in the good's own price shifts the supply curve instead of moving along it.",
    "Drawing the supply curve downward sloping like the demand curve.",
    "Confusing an increase in supply (a rightward shift) with an increase in quantity supplied (movement along the curve).",
    "Assuming improved technology raises the market price instead of raising supply.",
    "Forgetting that a flood or drought shifts supply leftward and can raise prices.",
    "Adding the intercepts of supply functions instead of multiplying one identical seller's function by the number of sellers."
  ],
  applications: [
    "Predicting that better transport facilities increase the supply of vegetables delivered to Addis Ababa markets.",
    "Explaining how a government subsidy raises the production and supply of fertilizers or improved seeds.",
    "Understanding why a flood in a crop-producing region reduces supply and raises food prices.",
    "Seeing how adopting advanced technology raises the productivity and supply of a textile factory.",
    "Counting how many sellers serve a market before predicting how elastic its supply will be.",
    "Using Qm = 2400p - 600 style reasoning to forecast total deliveries when each of 120 producers supplies a similar pattern."
  ],
  summary: "Supply is the amount producers are willing and able to sell at given prices over a period; the function Qs = a + bP generates the positively sloped supply curve stated by the law of supply. Movement along the curve is caused only by the good's own price, while factor costs, technology, taxes and subsidies, transport, external shocks and producer goals shift the curve. Market supply is the horizontal summation of individual supplies, or one representative supplier's function multiplied by the number of identical sellers.",
  visuals: [
    {
      type: "comparison",
      config: {
        title: "Movement vs Shift of the Supply Curve",
        left: { name: "Movement along the curve", items: ["Caused by the good's own price", "The supply curve does not move", "Example: from A to B when price rises", "Quantity supplied changes"] },
        right: { name: "Shift of the whole curve", items: ["Caused by factor costs, technology, taxes", "External shocks like a flood", "Producer goals and price of other goods", "Rightward shift: more supplied at every price"] }
      }
    },
    {
      type: "flowChart",
      config: {
        title: "Deriving the Market Supply Curve",
        steps: [
          { label: "Individual schedules", detail: "List each seller's quantity supplied at every price." },
          { label: "Sum at each price", detail: "Add the quantities of all sellers at the same price." },
          { label: "Plot the totals", detail: "Put price on the vertical axis and total quantity on the horizontal axis." },
          { label: "Market supply curve", detail: "The horizontal summation is flatter than each individual curve." }
        ]
      }
    },
    {
      type: "tableVisual",
      config: {
        title: "Market Supply for Shirts (Birr per shirt)",
        headers: ["Unit price", "A", "B", "C", "Market"],
        rows: [
          ["1", "0", "0", "1", "1"],
          ["2", "0", "1", "2", "3"],
          ["3", "1", "2", "5", "8"],
          ["4", "2", "3", "7", "12"],
          ["5", "4", "4", "10", "18"],
          ["6", "7", "6", "13", "26"]
        ]
      }
    }
  ],
  questions: [
    { type: "mcq", q: "Supply refers to the amounts of a product that a producer is:", options: ["willing and able to produce and sell at given prices", "forced to hand over to the government", "willing to buy from importers", "already storing in a warehouse only"], answer: 0, difficulty: 1, explanation: "Supply is the amount producers are willing and able to produce and make available for sale at given prices, ceteris paribus." },
    { type: "tf", q: "The supply curve slopes upward from left to right.", answer: true, difficulty: 1, explanation: "Price and quantity supplied are positively related, so the slope of the supply curve is positive." },
    { type: "short", q: "State the law of supply in one sentence.", answer: "the higher the price the greater the quantity supplied", difficulty: 1, explanation: "The law of supply states that the higher the price of a good, the greater the quantity suppliers make available." },
    { type: "mcq", q: "Which factor shifts the supply curve when it changes?", options: ["the good's own price", "the state of technology", "the slope of the demand curve", "the quantity demanded"], answer: 1, difficulty: 2, explanation: "Technology is a non-price determinant: advanced technology increases productivity and supply." },
    { type: "tf", q: "A flood that destroys crops causes a leftward shift of the supply curve of agricultural products.", answer: true, difficulty: 2, explanation: "External factors such as a flood reduce supply, shifting the curve leftward." },
    { type: "mcq", q: "An increase in government subsidies given to producers leads to:", options: ["less production and lower supply", "more production and higher supply", "no change in supply", "a downward movement along the curve"], answer: 1, difficulty: 2, explanation: "An increase in subsidies results in more production and higher supply." },
    { type: "mcq", q: "If the supply function of a typical supplier is Qs = 3p - 2, the market supply of 100 identical wheat suppliers is:", options: ["Qm = 3p - 200", "Qm = 300p - 2", "Qm = 300p - 200", "Qm = 103p - 200"], answer: 2, difficulty: 3, explanation: "Qm = (3p - 2) x 100 = 300p - 200." },
    { type: "concept", q: "Why is the market supply curve flatter than the individual supply curves?", answer: "quantities are summed across all sellers|market quantity at each price is the total of all sellers", difficulty: 2, explanation: "At every price the market quantity is the sum of all sellers' quantities, so a small price rise adds large quantity in total." },
    { type: "ordering", q: "Arrange the steps for deriving a market supply curve.", options: ["Add the quantities supplied by every seller at that price", "List each seller's supply schedule", "Join the plotted totals to form the market supply curve", "Plot the market totals against price"], answer: 1, difficulty: 2, explanation: "The order is: list each schedule, add at each price, plot the totals, then join the points." },
    { type: "mcq", q: "120 identical sellers of potatoes each supply Qs = 20p - 5. The market quantity supplied at a price of Birr 4 is:", options: ["7,995 tons", "8,395 tons", "900 tons", "9,000 tons"], answer: 3, difficulty: 3, explanation: "Qm = 2400(4) - 600 = 9600 - 600 = 9,000 tons." }
  ]
};

Lessons["g10-economics-ue2-t3"] = {
  overview: "Equilibrium is the state of rest a market reaches when quantity demanded equals quantity supplied. This lesson derives the market-clearing price, explains how shortage and surplus push prices back to equilibrium, and analyses shifts in demand and supply.",
  objectives: [
    "Define market equilibrium and the market-clearing price",
    "Define surplus and shortage (excess supply and excess demand)",
    "Explain how surpluses and shortages move the price toward equilibrium",
    "Solve for equilibrium price and quantity from linear demand and supply functions",
    "Evaluate the effect of changes in demand and supply on equilibrium price and quantity"
  ],
  simple: "Equilibrium means a state of rest: in a market, a condition that once achieved tends to persist. It occurs where the quantity demanded equals the quantity supplied, giving the market-clearing price and the equilibrium quantity. In the shirt market this happens at Birr 20, where 3 shirts are both demanded and supplied. At any price above equilibrium there is a surplus (excess supply) because sellers offer more while buyers cut back, and unsold sellers bid the price down. At any price below equilibrium there is a shortage (excess demand) and unsatisfied buyers bid the price up. Equilibrium can be computed by setting Qd = Qs. When demand shifts with supply constant, price and quantity move together; when supply shifts with demand constant, they move in opposite directions.",
  detailed: "<p><b>What market equilibrium is.</b> In a general sense, equilibrium means the state of rest. In market analysis, equilibrium refers to a market condition that, once achieved, tends to persist: the quantity demanded of the commodity equals the quantity supplied. This equality produces the <b>equilibrium price</b>, also called the market-clearing price, and the corresponding <b>equilibrium quantity</b>. In a free market the equilibrium price is determined by the market forces of demand and supply, and once it is achieved economic agents have no incentive to change their behaviour.</p><p><b>How the shirt market clears.</b> Consider the monthly demand and supply schedules for shirts. At Birr 15 per shirt the quantity demanded is 4 shirts while only 2 are supplied, a shortage of 2 shirts, so unsatisfied buyers bid the price up. If the price rose to Birr 25, the quantity supplied would be 4 while only 2 are demanded, a surplus of 2 shirts, so unsatisfied sellers bid the price down. There is only one price, Birr 20, at which quantity demanded and quantity supplied are equal at 3 shirts. At all other prices the shirt market is in disequilibrium; in a free market, disequilibrium itself creates the conditions that restore equilibrium.</p><p><b>Excess demand and excess supply.</b> <b>Excess demand</b> occurs when the quantity demanded is greater than the quantity supplied, which leads to a shortage in the market. <b>Excess supply</b> occurs when the quantity supplied exceeds the quantity demanded, resulting in a market surplus. Graphically, the intersection of the downward sloping demand curve and the upward sloping supply curve indicates the equilibrium point (Q*, P*). Any price above the intersection creates a surplus, because sellers offer more of the commodity while buyers cut their demand; any price below it discourages suppliers and reduces quantity supplied while buyers are willing to buy more, creating a shortage. When there is a surplus the price tends to move downward, and when there is a shortage the price tends to move upward.</p><p><b>Computing equilibrium.</b> Given the market demand and supply functions of wheat, Qd = 80 - 3P and Qs = 9P - 40, set Qd equal to Qs: 80 - 3P = 9P - 40, so 80 + 40 = 9P + 3P, giving 120 = 12P and P* = 10 birr per kg. Substituting into either function, Q* = 80 - 3(10) = 50 kg. The market clears at Birr 10 per kg with 50 kg both demanded and supplied. For prices greater than 10, supply is greater than demand, leading to excess supply; for prices less than 10, demand exceeds supply, leading to excess demand.</p><p><b>Effect of a change in demand.</b> Demand can change because of fluctuations in consumer tastes or incomes, changes in consumer expectations, or variations in the prices of related goods. If supply is constant, an increase in demand leads to a rise in both the equilibrium price and quantity, and a fall in demand leads to a decrease in both. For example, an increase in consumer income shifts the demand curve rightward, raising both P* and Q*; a decrease in income, a fall in the price of a substitute, or a rise in the price of a complement shifts it leftward, lowering both.</p><p><b>Effect of a change in supply.</b> Supply changes in response to changes in resource prices, technology and similar factors. If demand is constant, an increase in supply lowers the new market-clearing price while raising the equilibrium quantity, and a decrease in supply raises the price while lowering the quantity. The summary tables confirm the pattern: improved technology, lower resource prices, an expectation of lower future prices or an increase in the number of suppliers shifts supply rightward, lowering the equilibrium price and raising quantity, while higher resource prices, better expected future prices or fewer suppliers shift supply leftward, raising price and lowering quantity.</p>",
  keyTerms: [
    { term: "Market equilibrium", def: "The market condition where quantity demanded equals quantity supplied; once achieved, it tends to persist." },
    { term: "Equilibrium price", def: "The price at which the market clears, also called the market-clearing price; determined by demand and supply in a free market." },
    { term: "Equilibrium quantity", def: "The quantity bought and sold at the equilibrium price, where Qd = Qs." },
    { term: "Excess demand", def: "The situation where quantity demanded is greater than quantity supplied, producing a shortage." },
    { term: "Excess supply", def: "The situation where quantity supplied exceeds quantity demanded, producing a surplus." },
    { term: "Shortage", def: "A market position where buyers cannot obtain all they want to buy at the going price; it pushes the price up." },
    { term: "Surplus", def: "A market position where sellers cannot sell all they offer at the going price; it pushes the price down." },
    { term: "Disequilibrium", def: "Any market position other than equilibrium, where quantity demanded and quantity supplied are unequal." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "The market demand and supply functions of wheat are Qd = 80 - 3P and Qs = 9P - 40, with price in birr per kg and quantity in kg. Find the market-clearing price and quantity.",
      given: "Qd = 80 - 3P and Qs = 9P - 40.",
      formula: "At equilibrium, Qd = Qs.",
      substitution: "80 - 3P = 9P - 40, so 80 + 40 = 9P + 3P.",
      calculation: "120 = 12P, so P* = 10. Substituting into the demand function: Q* = 80 - 3(10) = 50 kg.",
      answer: "The market clears at P* = 10 birr per kg, with Q* = 50 kg both demanded and supplied."
    },
    {
      problem: "The demand and supply functions of a good are Q = 250 - 3P and Q = 2P - 50. Find the equilibrium price and quantity, and state whether a shortage or surplus exists if the government fixes the market price at 75.",
      given: "Qd = 250 - 3P and Qs = 2P - 50; controlled price = 75.",
      formula: "At equilibrium set Qd = Qs; then substitute the controlled price into both functions.",
      substitution: "250 - 3P = 2P - 50; at P = 75: Qd = 250 - 3(75) and Qs = 2(75) - 50.",
      calculation: "300 = 5P, so P* = 60 and Q* = 250 - 180 = 70. At P = 75: Qd = 25 and Qs = 100, so quantity supplied exceeds quantity demanded by 75 units.",
      answer: "Equilibrium is P* = 60 with Q* = 70; at the fixed price of 75 there is a surplus of 75 units."
    },
    {
      problem: "In the shirt market, at Birr 15 the quantity demanded is 4 and quantity supplied is 2; at Birr 25 demand is 2 and supply is 4; at Birr 20 both are 3. Describe the market position at each price.",
      given: "Birr 15: Qd = 4, Qs = 2. Birr 20: Qd = Qs = 3. Birr 25: Qd = 2, Qs = 4.",
      formula: "Excess demand (Qd greater than Qs) pushes the price up; excess supply (Qs greater than Qd) pushes it down; equilibrium is where Qd = Qs.",
      substitution: "At Birr 15: 4 - 2 = 2 units of excess demand. At Birr 25: 4 - 2 = 2 units of excess supply. At Birr 20: 3 - 3 = 0.",
      calculation: "Unsatisfied buyers bid the price up from Birr 15; unsold sellers bid it down from Birr 25; at Birr 20 there is no reason for price to move.",
      answer: "Shortage of 2 shirts at Birr 15, equilibrium at Birr 20 with 3 shirts, surplus of 2 shirts at Birr 25."
    },
    {
      problem: "Consumer incomes rise while supply stays constant, shifting demand rightward. What happens to the equilibrium price and quantity? Compare this with a fall in supply when demand is constant.",
      given: "Case 1: demand increases, supply unchanged. Case 2: supply decreases, demand unchanged.",
      formula: "With supply constant, a demand increase raises both equilibrium price and quantity; with demand constant, a supply decrease raises price and lowers quantity.",
      substitution: "Case 1: the demand curve shifts right, moving the equilibrium up along the supply curve. Case 2: the supply curve shifts left, moving the equilibrium up along the demand curve.",
      calculation: "Case 1: higher P* and higher Q*. Case 2: higher P* but lower Q*.",
      answer: "A demand increase raises both price and quantity; a supply decrease raises price while quantity falls."
    }
  ],
  commonMistakes: [
    "Assuming any price where buyers and sellers meet is an equilibrium even when Qd does not equal Qs.",
    "Thinking a shortage can persist forever without the price rising.",
    "Mixing the two up: calling a shortage a surplus, or excess demand excess supply.",
    "Saying that an increase in supply raises the equilibrium price, when it actually lowers it.",
    "Adding or subtracting the demand and supply functions instead of equating them to solve for P*.",
    "Substituting P* into only one function without checking that the other gives the same Q*.",
    "Believing a government can fix any price it likes without creating a shortage or surplus."
  ],
  applications: [
    "Predicting how a good harvest shifts supply rightward and lowers grain prices at the local market.",
    "Explaining why shortages appear when authorities fix prices below the market-clearing level.",
    "Using functions like Qd = 80 - 3P and Qs = 9P - 40 to find the price at which a wheat market clears.",
    "Understanding why an increase in the number of sellers in a town tends to lower the equilibrium price.",
    "Explaining why unsold perishable vegetables force sellers to cut prices on the same market day.",
    "Predicting that a rise in consumer income raises both the price and the quantity traded of normal goods."
  ],
  summary: "Market equilibrium occurs where quantity demanded equals quantity supplied, and the price there is the market-clearing price. A price below equilibrium creates excess demand (a shortage) that bids the price up, while a price above equilibrium creates excess supply (a surplus) that bids the price down. With supply constant, a demand shift moves equilibrium price and quantity in the same direction; with demand constant, a supply shift moves them in opposite directions.",
  visuals: [
    {
      type: "tableVisual",
      config: {
        title: "Demand, Supply and Market Position for Shirts",
        headers: ["Price (Birr)", "Demand", "Supply", "Market position"],
        rows: [
          ["5", "7", "0", "Shortage"],
          ["10", "5", "1", "Shortage"],
          ["15", "4", "2", "Shortage"],
          ["20", "3", "3", "Equilibrium"],
          ["25", "2", "4", "Surplus"],
          ["30", "1", "5", "Surplus"],
          ["35", "0", "6", "Surplus"]
        ]
      }
    },
    {
      type: "flowChart",
      config: {
        title: "How the Market Returns to Equilibrium",
        steps: [
          { label: "Price below equilibrium", detail: "Quantity demanded exceeds quantity supplied: excess demand (shortage)." },
          { label: "Buyers bid the price up", detail: "Unsatisfied buyers compete, raising the price." },
          { label: "Quantities adjust", detail: "Quantity demanded falls and quantity supplied rises as price climbs." },
          { label: "Equilibrium reached", detail: "Qd = Qs; the market clears and the price has no reason to move." }
        ]
      }
    },
    {
      type: "comparison",
      config: {
        title: "Change in Demand vs Change in Supply",
        left: { name: "Demand changes, supply constant", items: ["Demand up: price and quantity both rise", "Demand down: price and quantity both fall", "Equilibrium slides along the supply curve"] },
        right: { name: "Supply changes, demand constant", items: ["Supply up: price falls, quantity rises", "Supply down: price rises, quantity falls", "Example: technology improves price falls"] }
      }
    }
  ],
  questions: [
    { type: "mcq", q: "Market equilibrium occurs when:", options: ["quantity demanded equals quantity supplied", "price reaches its highest level", "supply exceeds demand", "demand exceeds supply"], answer: 0, difficulty: 1, explanation: "Equilibrium is the equality of quantity demanded and quantity supplied." },
    { type: "tf", q: "The equilibrium price is also called the market-clearing price.", answer: true, difficulty: 1, explanation: "The price at which the market clears is the market-clearing or equilibrium price." },
    { type: "short", q: "Give the name of the market condition where quantity supplied exceeds quantity demanded.", answer: "surplus|excess supply", difficulty: 1, explanation: "When Qs exceeds Qd there is a surplus, also called excess supply." },
    { type: "mcq", q: "If the market price is below the equilibrium price, we expect:", options: ["a surplus that pushes the price down", "a shortage that pushes the price up", "permanent equilibrium", "no change in price"], answer: 1, difficulty: 2, explanation: "Below equilibrium, demand exceeds supply, unsatisfied buyers bid the price up." },
    { type: "mcq", q: "In the shirt market, at Birr 15 the quantity demanded is 4 and quantity supplied is 2. The market position is:", options: ["equilibrium with 4 shirts", "a shortage of 2 shirts", "a surplus of 2 shirts", "excess supply of 4 shirts"], answer: 1, difficulty: 2, explanation: "Qd (4) exceeds Qs (2) by 2, so there is a shortage of 2 shirts and the price rises." },
    { type: "concept", q: "Explain why a surplus drives the price down in a free market.", answer: "unsatisfied sellers bid the price down|sellers cut price to sell excess stock", difficulty: 2, explanation: "A surplus means unsold goods pile up, so unsatisfied sellers bid the price down until the surplus diminishes." },
    { type: "mcq", q: "Given Qd = 80 - 3P and Qs = 9P - 40, the equilibrium price is:", options: ["8 birr per kg", "10 birr per kg", "12 birr per kg", "40 birr per kg"], answer: 1, difficulty: 3, explanation: "80 - 3P = 9P - 40 gives 120 = 12P, so P* = 10 birr per kg." },
    { type: "mcq", q: "For the same functions, the equilibrium quantity is:", options: ["40 kg", "50 kg", "60 kg", "80 kg"], answer: 1, difficulty: 3, explanation: "Q* = 80 - 3(10) = 50 kg." },
    { type: "tf", q: "When supply stays constant, an increase in demand raises both the equilibrium price and quantity.", answer: true, difficulty: 2, explanation: "With supply constant, a rise in demand lifts both the new market-clearing price and quantity." },
    { type: "mcq", q: "Improved technology with demand unchanged will:", options: ["raise price and raise quantity", "lower price and raise quantity", "lower price and lower quantity", "raise price and lower quantity"], answer: 1, difficulty: 2, explanation: "Improved technology shifts supply rightward: the equilibrium price falls and quantity rises." },
    { type: "ordering", q: "Arrange the sequence of events that follows the appearance of a shortage.", options: ["Quantity supplied rises and quantity demanded falls", "Unsatisfied buyers bid the price up", "The market clears at a new equilibrium", "A shortage appears at the going price"], answer: 3, difficulty: 2, explanation: "The order is: shortage appears, buyers bid price up, supplied rises while demanded falls, market clears." }
  ]
};

Lessons["g10-economics-ue2-t4"] = {
  overview: "Elasticity measures how strongly one economic variable reacts when another changes by one percent. This lesson covers price, cross and income elasticity of demand and the elasticity of supply, including computation, interpretation and their determinants.",
  objectives: [
    "Define elasticity as a measure of sensitivity between variables",
    "Distinguish point elasticity from arc elasticity of demand",
    "Compute and interpret price elasticity of demand coefficients",
    "Interpret cross-price and income elasticity to classify goods",
    "Compute price elasticity of supply and state its determinants"
  ],
  simple: "Elasticity measures the sensitivity of one variable to another: the percentage change in one variable when another changes by one percent. Price elasticity of demand is the percentage change in quantity demanded divided by the percentage change in price. A coefficient above 1 means elastic demand, below 1 inelastic, exactly 1 unitary, 0 perfectly inelastic, and infinite perfectly elastic. Arc elasticity measures responsiveness between two points on the demand curve. Cross elasticity compares a quantity of X with the price of Y: positive for substitutes, negative for complements, zero for unrelated goods. Income elasticity divides the change in quantity by the change in income: negative for inferior goods, above 1 for luxuries, below 1 for necessities. The same idea applies to supply, whose elasticity is always positive.",
  detailed: "<p><b>What elasticity is.</b> Elasticity is a measure of the sensitivity of one variable to another: it tells us the percentage change in one variable in response to a one percent change in another variable. <b>Elasticity of demand</b> measures the responsiveness of demand for a commodity to changes in any of its determinants, such as the price of the commodity, the price of related goods, and consumers' income. Accordingly, there are three basic elasticities of demand: price elasticity of demand, cross-price elasticity of demand and income elasticity of demand.</p><p><b>Price elasticity of demand.</b> <b>Price elasticity of demand</b> (Ed) is a measure of the degree of responsiveness of consumers to changes in the price of the commodity itself: the percentage change in quantity demanded divided by the percentage change in price. <b>Point elasticity</b> measures elasticity at a given point, for a very small change in price. <b>Arc elasticity</b> measures the average responsiveness of demand over a range of prices: Ed = (Q2 - Q1)/(Q1 + Q2) x (P1 + P2)/(P2 - P1). Because price and quantity demanded are inversely related, the coefficient Ed is always a negative number, so we usually ignore the minus sign and present the absolute value.</p><p><b>Interpreting the coefficient.</b> Demand is <b>relatively elastic</b> when Ed is greater than 1: a specific percentage change in price results in a larger percentage change in quantity demanded. Demand is <b>relatively inelastic</b> when Ed is below 1: for instance, a 10 percent price increase accompanied by only a 2 percent decrease in quantity demanded gives Ed = 0.2/1 = 0.2, which is below 1. Demand is <b>unitary elastic</b> when the percentage change in price and the accompanying percentage change in quantity demanded are equal: a 6 percent price change producing a 6 percent quantity change gives Ed = 1. <b>Perfectly inelastic</b> demand has Ed = 0: price changes leave quantity demanded invariable. <b>Perfectly elastic</b> demand means a 1 percent price change results in an infinite change in quantity demanded: the consumer buys all possible quantities at the given price and nothing at other prices. The numerical value of price elasticity of demand ranges from zero to infinity.</p><p><b>Working an arc elasticity.</b> From a demand schedule with points B (Birr 2, 600 units) and C (Birr 4, 400 units), Ed = (400 - 600)/(600 + 400) x (2 + 4)/(4 - 2) = (-200/1000) x (6/2) = -0.2 x 3 = -0.6. Taking the absolute value gives 0.6, below 1, so demand between these points is inelastic.</p><p><b>Determinants of price elasticity of demand.</b> Nature of the commodity: demand for necessities is inelastic, while demand for luxuries is elastic. Availability of close substitutes: goods with many substitutes have relatively elastic demand, goods with few have inelastic demand. Income level: people with high incomes are less affected by price changes than people with low incomes. Proportion of income spent: when only a small part of income goes on a commodity, demand is inelastic. Urgency of demand: purchases that cannot be postponed, such as medicines for sickness, are highly inelastic. Durability: demand for durables is highly elastic. Purchase frequency: frequently purchased goods have more elastic demand than rarely purchased ones. Time: demand is less elastic in the short run and more elastic in the long run.</p><p><b>Cross and income elasticity, and elasticity of supply.</b> <b>Cross elasticity of demand</b> is the proportionate change in quantity demanded of X resulting from a proportionate change in the price of Y. A positive coefficient means the goods are substitutes (such as Coca-Cola and Pepsi), a negative one means complements, and zero means independent, unrelated goods; the larger the coefficient in absolute value, the stronger the relationship. <b>Income elasticity of demand</b> is the percentage change in quantity demanded divided by the percentage change in income: it is negative for inferior goods, above 1 for normal luxurious goods, and below 1 for necessities. <b>Price elasticity of supply</b> (Es) is the percentage change in quantity supplied divided by the percentage change in price; since the law of supply makes price and quantity supplied directly related, Es is positive. The same interpretations apply: above 1 elastic, below 1 inelastic, equal to 1 unitary. Its main determinants are expectations of future prices (producers hoard when they expect a price rise, making supply less elastic), the length of the production period (supply is more elastic in the long run), the possibility of factor substitution and the number of sellers.</p>",
  keyTerms: [
    { term: "Elasticity", def: "A measure of the sensitivity of one variable to another: the percentage change in one variable in response to a one percent change in another." },
    { term: "Price elasticity of demand", def: "The ratio of the percentage change in quantity demanded to the percentage change in the price of the commodity." },
    { term: "Arc elasticity", def: "Price elasticity measured over a distance on the demand curve, that is the average responsiveness over a range of prices." },
    { term: "Unitary elastic", def: "The case where the percentage change in price and the percentage change in quantity demanded are equal, giving a coefficient of 1." },
    { term: "Cross elasticity of demand", def: "The proportionate change in quantity demanded of X resulting from a proportionate change in the price of Y." },
    { term: "Income elasticity of demand", def: "The percentage change in quantity purchased resulting from a given percentage change in consumer income." },
    { term: "Inferior good", def: "A commodity whose demand falls when income rises, giving a negative income elasticity." },
    { term: "Price elasticity of supply", def: "The percentage change in quantity supplied divided by the percentage change in price; it is always positive." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "A demand schedule gives points B (Birr 2, 600 units) and C (Birr 4, 400 units). Calculate the arc price elasticity of demand between B and C and classify it.",
      given: "P1 = 2, Q1 = 600; P2 = 4, Q2 = 400.",
      formula: "Arc Ed = (Q2 - Q1)/(Q1 + Q2) x (P1 + P2)/(P2 - P1).",
      substitution: "Ed = (400 - 600)/(600 + 400) x (2 + 4)/(4 - 2).",
      calculation: "Ed = (-200/1000) x (6/2) = -0.2 x 3 = -0.6; taking the absolute value gives 0.6.",
      answer: "Ed = 0.6, which is below 1, so demand between B and C is inelastic."
    },
    {
      problem: "A consumer's income rises from Birr 12,000 to Birr 16,000 per year, and the quantity purchased rises from 10 to 15 units per year. Find the income elasticity of demand and classify the good.",
      given: "I1 = 12,000, Q1 = 10; I2 = 16,000, Q2 = 15.",
      formula: "Income elasticity Ey = (Q2 - Q1)/(Q1 + Q2) x (I1 + I2)/(I2 - I1).",
      substitution: "Ey = (15 - 10)/(10 + 15) x (12,000 + 16,000)/(16,000 - 12,000).",
      calculation: "Ey = (5/25) x (28,000/4,000) = 0.2 x 7 = 1.4.",
      answer: "Ey = 1.4, greater than 1, so the commodity is a luxury: demand rises faster than income."
    },
    {
      problem: "A supply schedule shows quantity supplied rising from 16 to 18 units when the price rises from Birr 80 to Birr 100. Calculate the elasticity of supply over this range and classify it.",
      given: "P1 = 80, Q1 = 16; P2 = 100, Q2 = 18.",
      formula: "Es = percentage change in quantity supplied / percentage change in price.",
      substitution: "Percentage change in Qs = 2/16 = 0.125; percentage change in P = 20/80 = 0.25.",
      calculation: "Es = 0.125/0.25 = 0.5.",
      answer: "Es = 0.5, less than 1, so supply over this range is inelastic."
    },
    {
      problem: "When the price of coffee rises by 10 percent, the quantity of tea demanded rises by 5 percent. Compute the cross elasticity of demand for tea with respect to the price of coffee and interpret the result.",
      given: "Percentage change in the price of coffee = 10 percent; percentage change in the quantity of tea demanded = 5 percent.",
      formula: "Cross elasticity Exy = percentage change in Qd of X / percentage change in price of Y.",
      substitution: "Exy = 5/10 = 0.5.",
      calculation: "The coefficient is positive, so the quantity of tea moves in the same direction as the price of coffee.",
      answer: "Exy = 0.5, positive, so coffee and tea are substitute goods."
    }
  ],
  commonMistakes: [
    "Confusing elasticity with the slope of a curve; elasticity measures percentage responsiveness, not steepness in units.",
    "Classifying Ed = 0.5 as elastic when values below 1 mean inelastic demand.",
    "Forgetting that the raw coefficient of price elasticity of demand is negative and that we classify using the absolute value.",
    "Saying a positive cross elasticity shows complements; it shows substitutes, while complements give a negative coefficient.",
    "Assuming income elasticity is always positive; for inferior goods demand falls when income rises.",
    "Treating elasticity as fixed over time; demand is less elastic in the short run and more elastic in the long run.",
    "Expecting a future price rise to increase current supply, when hoarding makes current supply less elastic."
  ],
  applications: [
    "Predicting that demand for medicines barely changes when prices rise because purchases cannot be postponed.",
    "Explaining why a rise in coffee prices increases demand for tea, a substitute, in Ethiopian cafes.",
    "Checking whether a good is a necessity (Ey below 1) or a luxury (Ey above 1) before predicting sales during income growth.",
    "Understanding why producers who expect prices to rise hoard stocks, making current supply less elastic.",
    "Computing elasticity between two price-quantity points to forecast how a price hike changes units sold.",
    "Comparing inelastic demand for salt, a tiny share of income, with elastic demand for durable goods."
  ],
  summary: "Elasticity measures the percentage responsiveness of one variable to another. Price elasticity of demand, the ratio of the percentage change in quantity demanded to the percentage change in price, ranges from zero to infinity and classifies demand as perfectly inelastic, inelastic, unitary, elastic or perfectly elastic. Cross elasticity separates substitutes, complements and unrelated goods by its sign; income elasticity separates inferior, necessity and luxury goods; and the same classification applies to the always-positive price elasticity of supply, whose responsiveness grows with time, factor substitutes and the number of sellers.",
  visuals: [
    {
      type: "mindMap",
      config: {
        title: "Three Elasticities of Demand",
        center: "Elasticity of Demand",
        branches: [
          { label: "Price elasticity", items: ["Ed = % change in Qd / % change in P", "Elastic, unitary, inelastic"] },
          { label: "Cross elasticity", items: ["Substitutes: positive", "Complements: negative", "Independent: zero"] },
          { label: "Income elasticity", items: ["Luxury: above 1", "Necessity: below 1", "Inferior: negative"] }
        ]
      }
    },
    {
      type: "tableVisual",
      config: {
        title: "Summary of Price Elasticity of Demand",
        headers: ["Coefficient", "Type", "Meaning"],
        rows: [
          ["> 1", "Elastic", "Quantity responds more than proportionally to price"],
          ["= 1", "Unitary elastic", "Quantity changes by the same percentage as price"],
          ["0 < Ed < 1", "Inelastic", "Quantity responds less than proportionally"],
          ["= 0", "Perfectly inelastic", "Quantity does not change at all"],
          ["Infinite", "Perfectly elastic", "Any quantity bought at one price, nothing at others"]
        ]
      }
    },
    {
      type: "qa",
      config: {
        title: "Interpretation Quick-Check",
        pairs: [
          { q: "A firm raises its price by 10 percent and sales fall only by 4 percent. Is demand elastic?", a: "No. Ed = 4/10 = 0.4, which is below 1, so demand is inelastic." },
          { q: "The price of Pepsi rises and the demand for Coca-Cola rises. What is the sign of the cross elasticity?", a: "Positive, because they are substitute goods." },
          { q: "Income rises and purchases of a good fall. What type of good is it?", a: "An inferior good, with negative income elasticity." },
          { q: "Why is supply more elastic in the long run than in the short run?", a: "Producers have more time to adjust the scale of production and to substitute factors." }
        ]
      }
    }
  ],
  questions: [
    { type: "mcq", q: "Elasticity measures:", options: ["the slope of a curve in absolute units", "the percentage responsiveness of one variable to another", "total revenue", "average cost"], answer: 1, difficulty: 1, explanation: "Elasticity is the sensitivity of one variable to another, measured in percentage terms." },
    { type: "short", q: "Price elasticity of demand is the ratio of the percentage change in quantity demanded to:", answer: "percentage change in price|the percentage change in price", difficulty: 1, explanation: "Ed = percentage change in quantity demanded / percentage change in price." },
    { type: "mcq", q: "If Ed = 2, demand is:", options: ["perfectly inelastic", "unitary elastic", "relatively elastic", "relatively inelastic"], answer: 2, difficulty: 2, explanation: "A coefficient above 1 means the quantity change exceeds the price change: relatively elastic demand." },
    { type: "tf", q: "A 10 percent price rise accompanied by only a 2 percent fall in quantity demanded gives inelastic demand with Ed = 0.2.", answer: true, difficulty: 2, explanation: "Ed = 0.2/1 = 0.2, which is below 1, so demand is relatively inelastic." },
    { type: "mcq", q: "Which good most likely has inelastic demand?", options: ["a life-saving medicine", "a luxury perfume", "Coca-Cola", "airplane tickets"], answer: 0, difficulty: 2, explanation: "Urgency of demand: medicines must be purchased immediately and cannot be postponed, so demand is highly inelastic." },
    { type: "tf", q: "The raw coefficient of price elasticity of demand is negative because price and quantity demanded move in opposite directions.", answer: true, difficulty: 2, explanation: "The negative sign follows from the law of demand; we usually present only the absolute value." },
    { type: "concept", q: "The cross elasticity of demand between two goods is negative. What does this tell you about the goods?", answer: "complements|they are complementary goods", difficulty: 2, explanation: "A negative cross elasticity means the two goods go together: a price rise for one lowers demand for the other." },
    { type: "mcq", q: "If the cross elasticity of demand between two goods is zero, the goods are:", options: ["substitutes", "complements", "independent (unrelated)", "identical"], answer: 2, difficulty: 3, explanation: "A zero cross elasticity suggests the two products are unrelated or independent goods." },
    { type: "mcq", q: "If the income elasticity of demand for a good is negative, the commodity is:", options: ["a luxury good", "a necessity", "an inferior good", "perfectly elastic"], answer: 2, difficulty: 3, explanation: "Negative income elasticity means higher income leads to less purchase: the good is inferior." },
    { type: "mcq", q: "Between points B (Birr 2, 600 units) and C (Birr 4, 400 units), the arc price elasticity of demand is:", options: ["0.4", "0.6", "1.5", "3.0"], answer: 1, difficulty: 3, explanation: "Ed = (400 - 600)/(600 + 400) x (2 + 4)/(4 - 2) = -0.6, so the absolute value is 0.6." },
    { type: "tf", q: "Supply is generally more elastic in the long run than in the short run.", answer: true, difficulty: 2, explanation: "Time for adjustment is the main determinant: most production cannot change scale overnight, so supply is elastic in the long run." }
  ]
};
