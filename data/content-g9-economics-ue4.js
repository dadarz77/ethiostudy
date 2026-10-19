/* Content: Grade 9 Economics - Unit 4: Introduction to Demand and Supply (3 topics)
   Source: MoE Economics Grade 9 Student Textbook, Unit 4. */
window.Lessons = window.Lessons || {};

Lessons["g9-economics-ue4-t1"] = {
  overview: "Demand links a buyer's desire for a good with the willingness and ability to pay at a specific price and time. This lesson defines demand, states the law of demand, and introduces the demand schedule, curve, function and market demand.",
  objectives: [
    "Define demand and distinguish it from a mere desire",
    "State the law of demand and explain the meaning of ceteris paribus",
    "Read and interpret a demand schedule and a demand curve",
    "Explain the demand function Qd = f(P)",
    "Derive market demand from individual demand schedules"
  ],
  simple: "Demand is more than wanting something. A desire becomes demand only when the buyer is willing to pay the price, is able to pay the price, and the good is available. Economists call this an effective desire. Demand is always stated at a specific price and for a specific period of time. The law of demand says that, other things remaining the same, the higher the price of a good, the lower the quantity demanded, and the lower the price, the higher the quantity demanded. A demand schedule shows this relationship in a table, a demand curve shows it as a downward sloping graph, and a demand function writes it as Qd = f(P). Market demand is found by adding together the quantities demanded by all buyers at each price.",
  detailed: "<p><b>Demand is an effective desire.</b> The words demand, desire and want are often used as if they mean the same thing, but in economics they differ. Human wants are unlimited and desires are numerous, yet only a desire backed up by the ability to pay the price of the commodity and the willingness to purchase it is called a demand. A desire becomes an effective demand only when three features are present: ability to pay for the good desired, willingness to pay the price of the good desired, and availability of the good itself.</p><p><b>Demand is stated at a price and a time.</b> Demand for a good is constantly stated relative to a specific price and a certain period of time. For example, an individual may be interested to buy a certain pair of jeans at a price of Birr 500, but could not demand it at a price of Birr 900. Likewise, a person may be willing to buy a room heater at a price of Birr 1000 during a cold season, but may not be interested in buying it at that price during a hot season. Formally, the demand for a commodity is the amount of it that a consumer is willing to buy at various given prices and a given moment of time.</p><p><b>Quantity demanded.</b> Quantity demanded is the amount of a commodity a consumer is willing and able to buy at a given price during a given period of time. So demand refers to the whole set of price-quantity plans, while quantity demanded refers to one specific amount at one specific price.</p><p><b>The law of demand.</b> The law of demand states that, ceteris paribus, the price of a commodity and its quantity demanded are inversely related. Ceteris paribus means other things remain the same. In other words, the higher the price, the lower the quantity demanded; at a higher price consumers will demand a lower quantity of a good. This is a fundamental principle of economics.</p><p><b>Demand schedule and demand curve.</b> A demand schedule is a tabular representation of the relationship between price and quantity demanded. Table 4.1 of the textbook, an individual household demand schedule for oranges per week, shows: at Birr 5 per kg the household demands 5 kg; at Birr 4, 7 kg; at Birr 3, 9 kg; at Birr 2, 11 kg; and at Birr 1, 13 kg. As the price falls from Birr 5 to Birr 1, the quantity demanded rises from 5 kg to 13 kg, exactly as the law of demand predicts. A demand curve is the graphical representation of this relationship between quantities demanded at different prices per time period, and it slopes downward from left to right.</p><p><b>Demand function and market demand.</b> A demand function is a mathematical representation of the relationship between price and quantity demanded, ceteris paribus, written Qd = f(P), where Qd is the quantity demanded and P is the commodity's price. Market demand is the demand for a given product by all who want to purchase it. As market demand increases, price also increases, and when it decreases, price will decrease as well. Market demand is derived by a simple horizontal summation of the quantities demanded by all buyers at each price, and the market demand curve is the horizontal summation of the individual demand curves at the market price.</p>",
  keyTerms: [
    { term: "Demand", def: "The amount of a commodity that a consumer is willing to buy at various given prices and a given moment of time." },
    { term: "Effective desire", def: "A desire backed by the ability to pay, the willingness to pay and the availability of the good itself." },
    { term: "Quantity demanded", def: "The amount of a commodity a consumer is willing and able to buy at a given price during a given period of time." },
    { term: "Law of demand", def: "States that, ceteris paribus, the price of a commodity and its quantity demanded are inversely related." },
    { term: "Ceteris paribus", def: "A Latin phrase meaning other things remain the same." },
    { term: "Demand schedule", def: "A tabular representation of the relationship between price and quantity demanded." },
    { term: "Demand curve", def: "A graphical representation of the quantities of a commodity demanded at different prices per time period; it slopes downward." },
    { term: "Market demand", def: "The total quantity all buyers are willing to buy at each price, derived by horizontal summation of individual demands." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "Using the textbook demand schedule for oranges, how many kilograms does the household demand per week at Birr 3 per kg, and what happens to quantity demanded as the price falls from Birr 5 to Birr 1?",
      given: "Demand schedule (Table 4.1): price Birr 5, 4, 3, 2, 1 per kg; quantity demanded 5, 7, 9, 11, 13 kg per week.",
      formula: "Law of demand: ceteris paribus, price and quantity demanded are inversely related.",
      substitution: "Locate Birr 3 in the price column and read across to the quantity column.",
      calculation: "At Birr 3 the quantity demanded is 9 kg. As price falls 5, 4, 3, 2, 1, quantity demanded rises 5, 7, 9, 11, 13.",
      answer: "9 kg per week; the lower price is associated with a larger quantity demanded, confirming the law of demand."
    },
    {
      problem: "A student wants a pair of jeans. At Birr 500 he buys them, at Birr 900 he does not. He also wants a room heater at Birr 1000 in the cold season but not in the hot season. Explain why each is consistent with the concept of demand.",
      given: "Jeans price rises from Birr 500 to Birr 900; the heater is considered in the cold season and not in the hot season.",
      formula: "Principle: demand is stated relative to a specific price and a certain period of time.",
      substitution: "At Birr 900 the willingness to pay is gone; in the hot season the need for the heater is gone.",
      calculation: "The buyer's demand changes when price or time period changes, showing demand is price-specific and time-specific.",
      answer: "Both cases confirm that demand for a good is defined at a given price and over a given time period."
    },
    {
      problem: "In a village market, household A demands 5 kg of oranges per week at Birr 5 per kg and household B demands 4 kg per week at the same price. What is the market demand at Birr 5?",
      given: "At Birr 5 per kg: household A demands 5 kg; household B demands 4 kg.",
      formula: "Market demand is derived by horizontal summation of the quantities demanded by all buyers at each price.",
      substitution: "Market quantity demanded at Birr 5 = quantity of A + quantity of B = 5 + 4.",
      calculation: "5 + 4 = 9 kg per week at Birr 5 per kg; repeating this at every price gives the market demand schedule.",
      answer: "9 kg per week; the market demand curve is the horizontal sum of the individual demand curves."
    }
  ],
  commonMistakes: [
    "Treating any wish for a good as demand, even without the ability or willingness to pay.",
    "Forgetting that a desire also requires the availability of the good itself to become effective demand.",
    "Stating demand without referring to a specific price and a specific time period.",
    "Confusing demand (the whole price-quantity relationship) with quantity demanded (one amount at one price).",
    "Ignoring ceteris paribus when applying the law of demand; the inverse relation holds only when other things remain the same.",
    "Believing the demand curve slopes upward, when it actually slopes downward from left to right.",
    "Adding individual demand curves vertically instead of the correct horizontal summation."
  ],
  applications: [
    "When the price of oranges rises at the local market, shoppers buy fewer kilograms per week, exactly as the law of demand predicts.",
    "A family with a fixed monthly budget buys less teff when teff prices rise, because its ability and willingness to pay at the higher price shrink.",
    "Umbrellas are demanded during the rainy season but hardly at all in the dry season, showing demand is time-specific.",
    "A shopkeeper estimates market demand by adding up what every regular buyer would take at each price tag before stocking.",
    "Students choosing between Birr 500 and Birr 900 shoes illustrate how willingness to pay sets the limit of demand.",
    "Firms watch market demand because higher market demand pushes prices up and lower market demand pushes prices down."
  ],
  summary: "Demand is an effective desire: a want backed by ability to pay, willingness to pay and the availability of the good, always stated at a given price and time. The law of demand says that, other things constant, price and quantity demanded are inversely related, which a demand schedule, a downward sloping demand curve and the function Qd = f(P) all describe. Market demand is the horizontal summation of individual demands at each price, and it moves price up or down with it.",
  visuals: [
    {
      type: "tableVisual",
      config: {
        title: "Demand Schedule for Oranges (Table 4.1)",
        headers: ["Price (Birr per kg)", "Quantity demanded (kg per week)"],
        rows: [
          ["5", "5"],
          ["4", "7"],
          ["3", "9"],
          ["2", "11"],
          ["1", "13"]
        ]
      }
    },
    {
      type: "comparison",
      config: {
        title: "Desire vs Demand",
        left: {
          name: "Desire",
          items: ["A mere wish to acquire", "No purchasing power needed", "Unlimited, like all human wants", "Not tied to a price or period"]
        },
        right: {
          name: "Demand",
          items: ["Willing and able to pay", "Requires the good to be available", "An effective desire", "Stated at a price and over a time period"]
        }
      }
    },
    {
      type: "mindMap",
      config: {
        title: "The Concept of Demand",
        center: "Demand",
        branches: [
          { label: "Law of demand", items: ["Inverse relation", "Ceteris paribus", "Downward curve"] },
          { label: "Represented by", items: ["Schedule", "Curve", "Function Qd = f(P)"] },
          { label: "Requires", items: ["Willingness to pay", "Ability to pay", "Availability of the good"] },
          { label: "Levels", items: ["Individual demand", "Market demand", "Horizontal summation"] }
        ]
      }
    }
  ],
  questions: [
    { type: "mcq", q: "Demand reflects the quantity of a commodity that consumers:", options: ["want to buy at any price", "need to buy at alternative prices", "are willing and able to buy at alternative prices", "can afford to store"], answer: 2, difficulty: 2, explanation: "Demand requires both willingness and ability to buy at the given prices." },
    { type: "tf", q: "A demand schedule is a tabular representation of the relationship between price and quantity demanded.", answer: true, difficulty: 1, explanation: "This is the textbook definition of a demand schedule." },
    { type: "tf", q: "A price change will have no effect on the quantity of coffee demanded.", answer: false, difficulty: 1, explanation: "By the law of demand, a change in the price of coffee does change its quantity demanded." },
    { type: "mcq", q: "More of a commodity will be purchased at lower prices because:", options: ["consumers substitute it for others whose price has not changed", "at lower prices consumers can buy more with a given money income", "more consumers will buy it at lower prices than at higher prices", "all of the above"], answer: 3, difficulty: 3, explanation: "All three reasons together explain why quantity demanded rises when price falls." },
    { type: "mcq", q: "Which one of the following is not held constant when a demand schedule is defined?", options: ["Number of consumers", "Price of the good in question", "Prices of other goods", "Consumers' income and tastes"], answer: 1, difficulty: 3, explanation: "The schedule varies the price of the good itself; other factors are held constant under ceteris paribus." },
    { type: "short", q: "What does the Latin phrase ceteris paribus mean?", answer: "other things remain the same|other things remaining the same|other things being equal|other things constant", difficulty: 1, explanation: "Ceteris paribus means other things remain the same." },
    { type: "mcq", q: "A household demands 5 kg of oranges at Birr 5 per kg and 13 kg at Birr 1 per kg. This illustrates:", options: ["the law of supply", "the law of demand", "market equilibrium", "a positive price relation"], answer: 1, difficulty: 2, explanation: "A lower price is matched by a larger quantity demanded, the inverse relation of the law of demand." },
    { type: "concept", q: "Under what three conditions does a desire become an effective demand?", answer: "willingness and ability to pay and availability of the good|willingness to pay, ability to pay, availability", difficulty: 2, explanation: "A desire becomes effective demand when backed by ability to pay, willingness to pay and the availability of the good." },
    { type: "tf", q: "The demand function Qd = f(P) means quantity demanded depends on the price of the commodity.", answer: true, difficulty: 2, explanation: "The demand function expresses quantity demanded as a function of price, other things constant." },
    { type: "tf", q: "The market demand curve is the horizontal summation of individual demand curves at the market price.", answer: true, difficulty: 2, explanation: "Market demand is derived by adding the quantities demanded by all buyers at each price." },
    { type: "short", q: "Using the textbook schedule for oranges, how many kilograms per week are demanded at Birr 1 per kg?", answer: "13|13 kg", difficulty: 2, explanation: "The schedule shows 13 kg demanded when the price is Birr 1 per kg." }
  ]
};

Lessons["g9-economics-ue4-t2"] = {
  overview: "Supply is what producers actually bring to the market for sale at various prices, and it grows as price rises. This lesson defines supply, separates it from stock, states the law of supply and introduces the supply schedule, curve, function and market supply.",
  objectives: [
    "Define supply and distinguish it from stock",
    "State the law of supply and explain its positive relationship",
    "Identify the meaning of quantity supplied",
    "Read and interpret a supply schedule and a supply curve",
    "Derive market supply by horizontal summation of individual supplies"
  ],
  simple: "In ordinary speech, supply is confused with stock, but in economics they differ. Stock is the total volume of a commodity produced during a period minus the quantity already sold. Supply is the quantity actually brought to the market for sale at various prices. Producers often hold part of their stock back, for example farmers keep part of the harvest in cold storage to sell in the off-season at better prices. So stock is potential supply, and supply may be less than or equal to stock. The law of supply states that, other things remaining the same, the higher the price, the higher the quantity supplied. A supply schedule shows this in a table, a supply curve graphs it upward, and a supply function writes it as QS = f(P). Market supply is the horizontal summation of all sellers' supplies at each price.",
  detailed: "<p><b>Supply is not stock.</b> In ordinary language, supply is often misused and confused with the term stock. Stock is the total volume of a commodity produced during a period less the quantity already sold out. Supply, by contrast, means the quantity actually brought to the market. Most of the time producers do not offer all of their stock for sale. For example, at harvest time a large part of an agricultural product is kept back in cold storage and taken out during the off-season for sale at better prices. Likewise, part of an industrial product is usually kept in stock and offered for sale when it can bring a higher price. Thus stock is potential supply, and supply may be less than or equal to the stock of a commodity.</p><p><b>Definition of supply.</b> Supply of a commodity refers to the various quantities of it which producers are willing and able to offer for sale at a particular time at various corresponding prices. Notice the parallel with demand: supply, too, is always tied to a particular time and to a set of prices.</p><p><b>Quantity supplied.</b> Quantity supplied indicates the various quantities of a commodity that sellers are willing and able to provide at different prices in a given period of time. It describes the number of goods or services that suppliers will produce and sell at a given market price. Supply shows the relationship between quantity supplied and price, while quantity supplied refers to a specific amount which a producer is willing to sell at a specific price.</p><p><b>The law of supply.</b> The law of supply states that, ceteris paribus, there is a direct or positive relationship between price and the quantity supplied of a commodity. Unlike the law of demand, the supply relationship shows an upward slope: the higher the price, the higher the quantity supplied. Higher prices give producers more reason to produce and offer larger quantities for sale.</p><p><b>Supply schedule and supply curve.</b> A supply schedule is a tabular presentation of the different quantities of a commodity offered for sale at different prices per time period. Table 4.2 of the textbook, an individual seller's supply schedule for oranges, shows: at Birr 10 per kg the seller offers 60 kg per week; at Birr 15, 70 kg; at Birr 20, 80 kg; at Birr 25, 90 kg; and at Birr 30, 100 kg. As the price rises from Birr 10 to Birr 30, the quantity offered rises from 60 kg to 100 kg. A supply curve presents this same information graphically rather than in a table, and it slopes upward to the right.</p><p><b>Supply function and market supply.</b> A supply function is a mathematical representation of the relationship between price and quantity supplied of a commodity, all other things remaining the same. It is written QS = f(P), where QS is quantity supplied and P is the price of the commodity. Market supply is the total amount of an item producers are willing and able to sell at different prices over a given period. It is derived by horizontally adding the quantity supplied by all sellers at each price, and the market supply curve is the horizontal summation of the individual supply curves at the market price.</p>",
  keyTerms: [
    { term: "Supply", def: "The various quantities of a commodity producers are willing and able to offer for sale at a particular time at various corresponding prices." },
    { term: "Stock", def: "The total volume of a commodity produced during a period less the quantity already sold out; potential supply." },
    { term: "Quantity supplied", def: "The specific amount of a commodity a producer is willing to sell at a specific price in a given period." },
    { term: "Law of supply", def: "States that, ceteris paribus, there is a direct or positive relationship between price and quantity supplied." },
    { term: "Supply schedule", def: "A tabular presentation of the different quantities of a commodity offered for sale at different prices per time period." },
    { term: "Supply curve", def: "A graphical presentation of the seller's supply schedule; it slopes upward to the right." },
    { term: "Supply function", def: "A mathematical representation of the price-quantity supplied relationship, written QS = f(P)." },
    { term: "Market supply", def: "The total quantity all sellers are willing to offer at each price, derived by horizontal summation of individual supplies." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "Using the textbook supply schedule for oranges, how many kilograms does the individual seller offer per week at Birr 20 per kg, and what happens to quantity supplied as the price rises from Birr 10 to Birr 30?",
      given: "Supply schedule (Table 4.2): price Birr 10, 15, 20, 25, 30 per kg; quantity supplied 60, 70, 80, 90, 100 kg per week.",
      formula: "Law of supply: ceteris paribus, price and quantity supplied are directly (positively) related.",
      substitution: "Locate Birr 20 in the price column and read across to the quantity supplied column.",
      calculation: "At Birr 20 the seller offers 80 kg. As price rises 10, 15, 20, 25, 30, quantity supplied rises 60, 70, 80, 90, 100.",
      answer: "80 kg per week; the higher price is matched by more quantity supplied, confirming the law of supply."
    },
    {
      problem: "A farmer has harvested 1,000 quintals of grain. He sells 400 quintals now and keeps 600 quintals in cold storage for the off-season. What is his current stock and current supply?",
      given: "Total harvest (potential stock) 1,000 quintals; 400 quintals brought to market now; part of the harvest held for later sale at better prices.",
      formula: "Principle: stock is the total produced less what was already sold; supply is the quantity actually brought to the market; stock is potential supply.",
      substitution: "Stock available = 1,000 quintals; quantity actually offered now = 400 quintals.",
      calculation: "Quantity offered is part of the stock, so supply (400) is less than stock (1,000); the kept 600 quintals is potential supply.",
      answer: "Current supply is 400 quintals, which is less than the 1,000 quintal stock; supply may be less than or equal to stock."
    },
    {
      problem: "In a fruit market, seller A offers 60 kg of oranges per week at Birr 10 per kg and seller B offers 40 kg per week at the same price. What is the market supply at Birr 10?",
      given: "At Birr 10 per kg: seller A supplies 60 kg; seller B supplies 40 kg.",
      formula: "Market supply is derived by horizontally adding the quantity supplied by all sellers at each price.",
      substitution: "Market quantity supplied at Birr 10 = quantity of A + quantity of B = 60 + 40.",
      calculation: "60 + 40 = 100 kg per week at Birr 10 per kg; doing this at every price gives the market supply schedule and curve.",
      answer: "100 kg per week; the market supply curve is the horizontal summation of the individual supply curves."
    }
  ],
  commonMistakes: [
    "Confusing supply with stock; stock is potential supply, supply is what is actually offered for sale.",
    "Assuming producers put all of their stock on the market at once.",
    "Confusing supply (the whole price-quantity relationship) with quantity supplied (one amount at one price).",
    "Thinking the supply curve slopes downward like the demand curve; it slopes upward.",
    "Applying the law of supply for a fall in price to a rise in quantity supplied; the relationship is direct, not inverse.",
    "Forgetting ceteris paribus when stating the law of supply.",
    "Adding individual supply curves vertically instead of the correct horizontal summation."
  ],
  applications: [
    "Farmers keep part of the harvest in storage and release it in the off-season, when prices are better, just as the textbook describes.",
    "A teff trader offers more sacks for sale when the market price rises from Birr 10 to Birr 30 per kg, following the law of supply.",
    "Right after harvest, more vegetables reach the market; when prices drop, some sellers hold stock back and wait.",
    "A whole seller monitoring market supply adds up the amounts every supplier in the district offers at each price.",
    "Manufacturers hold industrial goods in stock and release them when they can bring higher prices.",
    "Higher prices encourage firms to produce more, which is why supply responds positively to price."
  ],
  summary: "Supply is not the same as stock: stock is the total produced less what was sold, while supply is the quantity producers actually offer for sale at various prices over a period, so stock is potential supply. The law of supply states that, other things the same, price and quantity supplied are directly related, described by a supply schedule, an upward sloping supply curve and the function QS = f(P). Market supply is the horizontal summation of all sellers' supplies at each price.",
  visuals: [
    {
      type: "tableVisual",
      config: {
        title: "Supply Schedule for Oranges (Table 4.2)",
        headers: ["Price (Birr per kg)", "Quantity supplied (kg per week)"],
        rows: [
          ["10", "60"],
          ["15", "70"],
          ["20", "80"],
          ["25", "90"],
          ["30", "100"]
        ]
      }
    },
    {
      type: "comparison",
      config: {
        title: "Stock vs Supply",
        left: {
          name: "Stock",
          items: ["Total produced less already sold", "Kept in store or cold storage", "Potential supply", "Held back for better prices"]
        },
        right: {
          name: "Supply",
          items: ["Actually brought to the market", "Offered for sale at various prices", "Tied to a time period", "Less than or equal to stock"]
        }
      }
    },
    {
      type: "mindMap",
      config: {
        title: "The Concept of Supply",
        center: "Supply",
        branches: [
          { label: "Law of supply", items: ["Direct relation", "Ceteris paribus", "Upward curve"] },
          { label: "Represented by", items: ["Schedule", "Curve", "Function QS = f(P)"] },
          { label: "Related ideas", items: ["Stock", "Quantity supplied", "Cold storage example"] },
          { label: "Levels", items: ["Individual supply", "Market supply", "Horizontal summation"] }
        ]
      }
    }
  ],
  questions: [
    { type: "tf", q: "Stock is the total volume of a commodity produced during a period less the quantity already sold out.", answer: true, difficulty: 1, explanation: "This is the textbook definition of stock." },
    { type: "mcq", q: "Which statement about stock and supply is correct?", options: ["Stock always equals supply", "Stock is potential supply and supply may be less than or equal to stock", "Supply is always greater than stock", "Stock is what is actually brought to the market"], answer: 1, difficulty: 2, explanation: "Producers often hold part of their stock back, so supply can be less than stock." },
    { type: "mcq", q: "The law of supply states that, ceteris paribus:", options: ["price and quantity supplied are inversely related", "price and quantity supplied are directly related", "quantity supplied does not depend on price", "supply falls as price rises"], answer: 1, difficulty: 1, explanation: "The law of supply says the higher the price, the higher the quantity supplied." },
    { type: "tf", q: "A fall in the price of a commodity raises the quantity that producers will offer for sale.", answer: false, difficulty: 1, explanation: "The relationship is positive: quantity supplied falls when price falls." },
    { type: "short", q: "Using the textbook schedule for oranges, how many kilograms per week does the seller offer at Birr 20 per kg?", answer: "80|80 kg", difficulty: 2, explanation: "The schedule shows 80 kg offered per week at Birr 20 per kg." },
    { type: "mcq", q: "Why do producers keep part of their stock off the market?", options: ["Because stock must never be sold", "To sell it later at better prices", "Because the law of supply forbids it", "Because demand is unlimited"], answer: 1, difficulty: 2, explanation: "Agricultural and industrial products are held back to be sold when they bring higher prices." },
    { type: "tf", q: "Supply shows the relationship between quantity supplied and price, while quantity supplied refers to a specific amount at a specific price.", answer: true, difficulty: 3, explanation: "The textbook draws exactly this distinction between supply and quantity supplied." },
    { type: "short", q: "Write the typical form of the supply function, using QS for quantity supplied and P for price.", answer: "QS = f(P)", difficulty: 2, explanation: "A typical supply function is QS = f(P)." },
    { type: "tf", q: "The market supply curve is the horizontal summation of individual supply curves at the market price.", answer: true, difficulty: 2, explanation: "Market supply is derived by horizontally adding the quantities supplied by all sellers at each price." },
    { type: "tf", q: "An increase in the quantity supplied of a commodity leads to a decrease in its price.", answer: true, difficulty: 3, explanation: "With more of the commodity on the market, the price falls, as the textbook review question confirms." },
    { type: "mcq", q: "Supply of a commodity refers to the various quantities that producers are:", options: ["producing for their own use", "willing and able to offer for sale at various prices at a particular time", "keeping in cold storage only", "forced by law to sell"], answer: 1, difficulty: 2, explanation: "This is the textbook definition of supply, emphasising willingness, ability, time and price." }
  ]
};

Lessons["g9-economics-ue4-t3"] = {
  overview: "Market equilibrium is the state of balance where quantity demanded equals quantity supplied. This lesson explains equilibrium price and quantity, shows how the market mechanism moves price toward equilibrium, and why equilibrium is not fixed.",
  objectives: [
    "Define equilibrium using both its physical and economic meanings",
    "Define market equilibrium, equilibrium price and equilibrium quantity",
    "Locate market equilibrium where the demand and supply curves intersect",
    "Predict price movements from surpluses and shortages at non-equilibrium prices",
    "Explain the market mechanism and why equilibrium changes over time"
  ],
  simple: "The term equilibrium refers to a state of balance, like an object held still by two equal and opposite forces. In the same way, a market is in equilibrium when quantity demanded equals quantity supplied. The price at which this happens is the equilibrium price, and the amount bought and sold at that price is the equilibrium quantity. Graphically, equilibrium is found where the demand curve and the supply curve intersect. If the price is above equilibrium there is a surplus, which pushes the price down; if it is below equilibrium there is a shortage, which pushes the price up. This tendency is called the market mechanism. Equilibrium is not fixed; it changes over time as demand and supply patterns change.",
  detailed: "<p><b>The concept of equilibrium.</b> The term equilibrium refers to a state of balance. In the physical world, when two opposing forces acting on an object are balanced so that the object is held stationary, the object is in equilibrium; it has no tendency to move in any direction. Similarly, an economic system is said to be in equilibrium when its important variables show no change and when no forces are acting on them to produce a change in their values. For instance, after attaining equilibrium, a consumer has no intention of re-allocating his or her money income, and a firm is in equilibrium when it has no tendency to increase or decrease its level of output.</p><p><b>Market equilibrium.</b> Demand and supply curves, taken separately, tell us how much consumers demand and how much producers supply at different prices, but they do not by themselves tell us the actual price of a good. In the context of price determination, equilibrium refers to a situation in which the quantity demanded of a commodity equals the quantity supplied. It is the balance between the opposite forces of demand and supply, and this resulting balance is called market equilibrium. There is a tendency to move toward the equilibrium price, and this tendency is known as the market mechanism.</p><p><b>Equilibrium price and equilibrium quantity.</b> The price at which the quantity demanded of a commodity equals the quantity supplied is called the equilibrium price. The equilibrium quantity is the quantity supplied in the marketplace when the quantity supplied by sellers exactly matches the quantity demanded by buyers; in other words, it is the amount of the commodity bought and sold at the equilibrium price. Graphically, when the demand curve and the supply curve intersect, the point where the quantity consumers are willing to purchase matches the quantity suppliers are willing to supply is the market equilibrium, and from it we derive the market price and the market quantity.</p><p><b>Moving toward equilibrium.</b> Provided that market demand and supply remain unchanged, the price will neither tend to rise nor fall below the equilibrium price; the market rests there. If the price is momentarily above equilibrium, quantity supplied exceeds quantity demanded, the unsold surplus pushes sellers to cut the price, and price moves down toward equilibrium. If the price is below equilibrium, quantity demanded exceeds quantity supplied, the shortage makes buyers compete and the price is bid up. At any other price, the forces of demand and supply push the market back to where the two curves cross.</p><p><b>Equilibrium is not fixed.</b> Note that market equilibrium is not fixed; it is likely to change over time due to changes in the patterns of demand and supply. Also, in real world economic activities, equilibrium may never be actually realised. The central feature of equilibrium analysis is the idea that economies tend toward equilibrium when no external forces are acting on them.</p>",
  keyTerms: [
    { term: "Equilibrium", def: "A state of balance in which a system shows no tendency to change because the opposing forces on it cancel out." },
    { term: "Market mechanism", def: "The tendency of a market to move toward the equilibrium price." },
    { term: "Market equilibrium", def: "The situation in which the quantity demanded of a commodity equals the quantity supplied." },
    { term: "Equilibrium price", def: "The price at which the quantity demanded of a commodity equals the quantity supplied." },
    { term: "Equilibrium quantity", def: "The amount of a commodity bought and sold at the equilibrium price, where sellers' supply exactly matches buyers' demand." },
    { term: "Surplus", def: "The excess of quantity supplied over quantity demanded that appears when the price is above the equilibrium price." },
    { term: "Shortage", def: "The excess of quantity demanded over quantity supplied that appears when the price is below the equilibrium price." },
    { term: "Market price", def: "The actual price reached in the market; at equilibrium it equals the equilibrium price." }
  ],
  formulas: [],
  workedExamples: [
    {
      problem: "From the following demand and supply schedule, find the equilibrium price and equilibrium quantity. Price Birr 1-5: quantity demanded 50, 40, 30, 20, 10; quantity supplied 10, 20, 30, 40, 50.",
      given: "Schedule: Price Birr 1: Qd 50, Qs 10; Birr 2: Qd 40, Qs 20; Birr 3: Qd 30, Qs 30; Birr 4: Qd 20, Qs 40; Birr 5: Qd 10, Qs 50.",
      formula: "Principle: market equilibrium occurs where quantity demanded equals quantity supplied; the price there is the equilibrium price.",
      substitution: "Compare Qd and Qs row by row: 50 vs 10, 40 vs 20, 30 vs 30, 20 vs 40, 10 vs 50.",
      calculation: "Qd equals Qs only in the Birr 3 row, where both are 30 units.",
      answer: "The equilibrium price is Birr 3 and the equilibrium quantity is 30 units, the point where the demand and supply curves intersect."
    },
    {
      problem: "Using the same schedule, what happens in the market at a price of Birr 4, and what does this do to the price?",
      given: "At Birr 4: quantity demanded is 20 units and quantity supplied is 40 units.",
      formula: "Principle: when price is above equilibrium, quantity supplied exceeds quantity demanded, creating a surplus that pushes the price down.",
      substitution: "Surplus = Qs - Qd = 40 - 20.",
      calculation: "40 - 20 = 20 units unsold. Sellers with unsold stock cut the price, so price falls toward the equilibrium Birr 3.",
      answer: "There is a surplus of 20 units at Birr 4, and the surplus pressure drives the price down toward Birr 3."
    },
    {
      problem: "Using the same schedule, what happens in the market at a price of Birr 2, and what does this do to the price?",
      given: "At Birr 2: quantity demanded is 40 units and quantity supplied is 20 units.",
      formula: "Principle: when price is below equilibrium, quantity demanded exceeds quantity supplied, creating a shortage that pushes the price up.",
      substitution: "Shortage = Qd - Qs = 40 - 20.",
      calculation: "40 - 20 = 20 units by which buyers want more than sellers offer. Competition among buyers bids the price up toward Birr 3.",
      answer: "There is a shortage of 20 units at Birr 2, and the market mechanism pushes the price up toward Birr 3."
    },
    {
      problem: "In a second market the schedule is: price Birr 2, 4, 6, 8, 10; quantity demanded 100, 80, 60, 40, 20; quantity supplied 20, 40, 60, 80, 100. Find the equilibrium price and quantity, and state what the price does if demand and supply remain unchanged.",
      given: "Schedule: Birr 2: Qd 100, Qs 20; Birr 4: Qd 80, Qs 40; Birr 6: Qd 60, Qs 60; Birr 8: Qd 40, Qs 80; Birr 10: Qd 20, Qs 100.",
      formula: "Principle: equilibrium is where Qd = Qs, and provided demand and supply remain unchanged the price tends neither to rise nor to fall below that price.",
      substitution: "Compare row by row: 100 vs 20, 80 vs 40, 60 vs 60, 40 vs 80, 20 vs 100.",
      calculation: "Qd equals Qs at the Birr 6 row, where both are 60 units. At that price no force pushes price up or down.",
      answer: "Equilibrium price is Birr 6 and equilibrium quantity is 60 units; with unchanged demand and supply, the price will neither tend to rise nor fall."
    }
  ],
  commonMistakes: [
    "Thinking market equilibrium is a fixed price that never changes, when it changes as demand and supply patterns change.",
    "Reading equilibrium from the demand curve alone or the supply curve alone instead of their intersection.",
    "Assuming real markets are always exactly at equilibrium; in reality equilibrium may never actually be realised.",
    "Confusing equilibrium quantity with equilibrium price.",
    "Believing a price below equilibrium creates a surplus, when it creates a shortage.",
    "Forgetting that equilibrium requires quantity demanded to equal quantity supplied.",
    "Ignoring the market mechanism and expecting the price to stay far from equilibrium with no force moving it."
  ],
  applications: [
    "At the orange market in your town, if sellers bring 100 kg but buyers take only 60 at today's price, unsold stock forces prices down the next day.",
    "When a teff shortage appears and buyers crowd the market, the price is bid up until the quantity demanded equals the quantity supplied.",
    "Stable prices in a grain market between harvests show that supply and demand are temporarily in balance.",
    "A fruit seller with crates of rotting surplus oranges lowers his price, exactly as the market mechanism predicts.",
    "Shoppers lining up for cheap bread signal a shortage: the price sits below equilibrium, and the queue acts as the balancing force.",
    "When consumers' tastes or producers' costs change, the old equilibrium price and quantity give way to new ones."
  ],
  summary: "Equilibrium is a state of balance, and market equilibrium is reached when the quantity demanded of a commodity equals the quantity supplied at a given price. The equilibrium price is where the demand and supply curves intersect, the equilibrium quantity is the amount bought and sold at that price, and the market mechanism constantly pushes prices toward this point through surpluses and shortages. Equilibrium is not fixed, however, and changes over time as the patterns of demand and supply change.",
  visuals: [
    {
      type: "tableVisual",
      config: {
        title: "Finding Market Equilibrium from a Schedule",
        headers: ["Price (Birr)", "Quantity demanded", "Quantity supplied", "Market situation"],
        rows: [
          ["1", "50", "10", "Shortage of 40"],
          ["2", "40", "20", "Shortage of 20"],
          ["3", "30", "30", "Equilibrium"],
          ["4", "20", "40", "Surplus of 20"],
          ["5", "10", "50", "Surplus of 40"]
        ]
      }
    },
    {
      type: "steps",
      config: {
        title: "How the Market Mechanism Works",
        steps: [
          { label: "Price too high", detail: "Above equilibrium, quantity supplied exceeds quantity demanded, so a surplus appears." },
          { label: "Price falls", detail: "Unsold stock makes sellers cut their prices." },
          { label: "Equilibrium reached", detail: "At the price where Qd equals Qs, quantity demanded equals quantity supplied." },
          { label: "Price too low", detail: "Below equilibrium, quantity demanded exceeds quantity supplied, so a shortage appears." },
          { label: "Price rises", detail: "Competition among buyers bids the price back up." }
        ]
      }
    },
    {
      type: "comparison",
      config: {
        title: "Equilibrium vs Non-Equilibrium Prices",
        left: {
          name: "At equilibrium price",
          items: ["Qd equals Qs", "No surplus or shortage", "No tendency to change", "Amount bought and sold is the equilibrium quantity"]
        },
        right: {
          name: "Away from equilibrium",
          items: ["Surplus above equilibrium", "Shortage below equilibrium", "Market mechanism pushes price back", "Equilibrium may shift if demand or supply changes"]
        }
      }
    }
  ],
  questions: [
    { type: "tf", q: "The equilibrium price is the price at which quantity demanded equals quantity supplied.", answer: true, difficulty: 1, explanation: "This is the definition of equilibrium price." },
    { type: "tf", q: "At the equilibrium price, the quantity demanded and the quantity supplied are not equal.", answer: false, difficulty: 1, explanation: "At the equilibrium price, quantity demanded and quantity supplied are equal." },
    { type: "mcq", q: "The intersection of a market demand curve and a market supply curve for a commodity determines:", options: ["the equilibrium price only", "the equilibrium quantity only", "the point of neither increase nor decrease in price", "all of the above"], answer: 3, difficulty: 2, explanation: "The intersection gives the equilibrium price, the equilibrium quantity and the resting point of price, so all statements hold." },
    { type: "mcq", q: "An economic system is said to be in equilibrium when:", options: ["its important variables show no change", "no forces are acting on them to produce a change in their values", "both A and B", "prices change every day"], answer: 2, difficulty: 2, explanation: "Equilibrium means the variables show no change and no forces act to change their values." },
    { type: "tf", q: "Market equilibrium is a situation in which the quantity demanded of a commodity equals the quantity supplied.", answer: true, difficulty: 1, explanation: "This is the definition of market equilibrium." },
    { type: "tf", q: "The amount of a commodity that is bought and sold at any price below the equilibrium price is called the equilibrium quantity.", answer: false, difficulty: 2, explanation: "The equilibrium quantity is the amount bought and sold at the equilibrium price, not below it." },
    { type: "concept", q: "Explain the difference between equilibrium price and equilibrium quantity.", answer: "price is where Qd equals Qs|quantity is the amount bought and sold at that price", difficulty: 2, explanation: "The equilibrium price is the price at which quantity demanded equals quantity supplied; the equilibrium quantity is the amount bought and sold at that price." },
    { type: "tf", q: "Provided that market demand and supply remain unchanged, the price will neither tend to rise nor fall away from the equilibrium price.", answer: true, difficulty: 2, explanation: "With demand and supply unchanged, the market rests at the equilibrium price." },
    { type: "tf", q: "Market equilibrium is fixed; it does not change over time.", answer: false, difficulty: 2, explanation: "Market equilibrium is not fixed and is likely to change over time due to changes in the patterns of demand and supply." },
    { type: "mcq", q: "At the equilibrium quantity, which statement is true?", options: ["Sellers' quantity supplied exactly matches buyers' quantity demanded", "Quantity supplied exceeds quantity demanded", "Quantity demanded exceeds quantity supplied", "The good is no longer produced"], answer: 0, difficulty: 2, explanation: "At equilibrium, the quantity supplied by sellers exactly matches the quantity demanded by buyers." },
    { type: "short", q: "Using the schedule price Birr 1, 2, 3, 4, 5 with Qd 50, 40, 30, 20, 10 and Qs 10, 20, 30, 40, 50: what is the equilibrium quantity?", answer: "30|30 units", difficulty: 3, explanation: "Qd equals Qs at 30 units, which occurs at the price of Birr 3." }
  ]
};
