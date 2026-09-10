/* Content: Grade 12 Mathematics — Unit 5: Mathematical Applications in Business (4 topics) */
window.Lessons = window.Lessons || {};

Lessons["g12-mathematics-um5-t1"] = {
  overview: "Money moves through time, and mathematics prices that motion: simple interest charges only on the original sum while compound interest charges on the growing balance — an exponential. This lesson builds both models and the effective-rate comparison that exposes advertised APRs.",
  objectives: [
    "Compute simple interest A = P(1 + rt) and its parts",
    "Apply compound interest A = P(1 + i)^n for any compounding period",
    "Convert nominal rates to effective annual rates to compare offers",
    "Use continuous compounding A = Pe^{rt} as the frequent-compounding limit",
    "Solve for unknown time or principal with logarithms"
  ],
  simple: "<b>Interest on interest.</b> Simple: the bank rents your original P at rate r for t years — interest = Prt, total = P(1 + rt). Compound: each period's interest joins the balance and earns too — A = P(1 + i)^n where i is the per-period rate. Compounding more often grows faster: 12% monthly (i = 1% per month, n = 12) gives 12.68% effective, not 12%.",
  detailed: "<p><b>Simple interest.</b> I = P·r·t with r annual and t in years; the balance climbs in a straight line A = P(1 + rt). Exact-day conventions (365 vs 360) and discount loans live here. Worked: 50 000 birr at 14% for 3 years earns 50 000·0.14·3 = 21 000; A = 71 000. The linear model is common for short Treasury paper and some bank products.</p><p><b>Compound interest.</b> Deposit P, per-period rate i = (nominal)/m with m periods a year, n total periods: A = P(1 + i)^n. 10 000 at 10% yearly for 5 years: 10 000(1.1)⁵ = 16 105.10. The exponential is the engine: every doubling of time squares the growth factor. Solving for n needs logarithms: 'how long to double?' → n = ln 2/ln(1 + i) — the rule of 72 (≈72/interest-percent) is its quick cousin.</p><p><b>Effective rates.</b> Offers with different compounding compare only through effective annual rate: EAR = (1 + i)^m − 1. 12% compounded monthly: (1.01)^12 − 1 = 12.682%. 12.5% compounded semi-annually: (1.0625)² − 1 = 12.89% — the lower nominal rate can be the better deal for the borrower... and worse for the saver; direction matters. APR advertising without EAR is the oldest trick in retail finance.</p><p><b>Continuous compounding.</b> Let m → ∞: A = Pe^{rt}. 10 000 at 12% continuously for a year: 10 000e^0.12 = 11 275 — versus 11 268 monthly: continuous is the ceiling, barely above daily. Discounting back to present value uses the same exponential with a negative exponent: PV = A e^{−rt} in the continuous world, PV = A(1 + i)^{−n} otherwise.</p><p><b>Exam shapes:</b> compare two bank offers via EAR; find how long a savings target takes (log); split a sum between two accounts so total interest matches (linear system); inflation as compound decay of purchasing power (prices rise 8%/yr → money's value halves in 9 years).</p>",
  keyTerms: [
    { term: "Simple interest", def: "I = Prt — charged on the original principal only" },
    { term: "Compound interest", def: "Interest earns interest; balance follows P(1+i)^n" },
    { term: "Nominal vs effective rate", def: "Advertised annual rate vs true yield after compounding" },
    { term: "EAR", def: "(1 + i)^m − 1 — one-year growth at the stated compounding" },
    { term: "Continuous compounding", def: "Limit Pe^{rt} as periods per year → ∞" },
    { term: "Present value", def: "Today's worth of a future sum: discount at the rate" }
  ],
  formulas: [
    {
      name: "Simple interest",
      formula: "A = P(1 + rt)",
      meaning: "Linear growth of the balance",
      vars: [{ name: "P", meaning: "principal" }, { name: "r", meaning: "annual rate (decimal)" }, { name: "t", meaning: "years" }],
      when: "Short-term loans, some treasury instruments"
    },
    {
      name: "Compound interest",
      formula: "A = P(1 + i)^n, i = r/m, n = m·t",
      meaning: "Exponential growth, period rate i, n periods",
      vars: [{ name: "m", meaning: "compounding periods per year" }],
      when: "Savings, most loans, any 'compounded quarterly/monthly'"
    },
    {
      name: "Effective annual rate",
      formula: "EAR = (1 + r/m)^m − 1",
      meaning: "The real 1-year yield behind a nominal quote",
      vars: [{ name: "r/m", meaning: "the per-period rate" }],
      when: "Comparing offers with different compounding"
    },
    {
      name: "Continuous compounding",
      formula: "A = P e^{rt}",
      meaning: "Infinite-frequency limit of compounding",
      vars: [{ name: "e", meaning: "Euler's number ≈ 2.71828" }],
      when: "Theory, derivative pricing, daily-ish banks"
    },
    {
      name: "Doubling time",
      formula: "n = ln 2 / ln(1 + i) ≈ 72/(percent rate)",
      meaning: "Periods for the balance to double",
      vars: [{ name: "i", meaning: "per-period compound rate" }],
      when: "Rule-of-72 estimates on exams"
    }
  ],
  workedExamples: [
    {
      problem: "Deposit 20 000 birr at 9% compounded annually. Balance after 6 years?",
      formula: "A = P(1.09)^6",
      substitution: "20 000 × 1.6771",
      calculation: "1.09⁶ = 1.677100...",
      answer: "≈ 33 542 birr"
    },
    {
      problem: "Compare 12% compounded monthly vs 12.3% compounded quarterly.",
      formula: "EAR = (1 + r/m)^m − 1",
      substitution: "(1.01)^12 − 1 vs (1.03075)^4 − 1",
      calculation: "0.12683 vs 0.12836",
      answer: "Quarterly 12.3% wins for a saver (12.84% > 12.68% effective)"
    },
    {
      problem: "How long for 1 000 birr to double at 8% compounded annually?",
      formula: "n = ln 2 / ln 1.08",
      substitution: "0.6931/0.07696",
      calculation: "9.006",
      answer: "≈ 9 years (rule of 72 predicts 72/8 = 9 ✓)"
    },
    {
      problem: "What is the present value of 50 000 birr received in 4 years, discounted at 10% compounded annually?",
      formula: "PV = A(1.1)^{−4}",
      substitution: "50 000/1.4641",
      calculation: "34 150.6",
      answer: "≈ 34 151 birr today"
    }
  ],
  commonMistakes: [
    "Using the annual nominal rate with monthly periods (i must be r/m, and n must count months)",
    "Answering a comparison question with nominal rates instead of EARs",
    "Simple-interest habit on compound problems: Prt instead of P(1+i)^n − P",
    "Forgetting t must be in years when r is annual (9 months → t = 0.75)",
    "Rounding the per-period rate too early — 12%/12 = 1% exactly, but 7%/12 keeps full precision"
  ],
  applications: [
    "Saving for a house: target 500 000 birr in 8 years → monthly deposit planning uses this lesson's exponential in reverse (annuities next topic)",
    "Loans: understanding that a '10% flat' car loan is far more than 10% effective because the principal declines while interest is charged on the original sum",
    "Inflation math: prices compounding at 24%/yr means purchasing power decays as (1.24)^{-t} — salaries must compound to keep up",
    "Business valuation: a factory's future profits are worth PV = Σ F/(1+i)^t today — discounting is just compound interest turned backwards"
  ],
  summary: "Simple interest grows linearly (Prt); compound interest grows exponentially P(1+i)^n with the per-period rate i = r/m. Compare real costs with EAR = (1+i)^m − 1; continuous compounding Pe^{rt} is the limiting ceiling. Logarithms recover time; discounting recovers present value.",
  visuals: [],
  questions: [
    { type: "mcq", q: "The interest on 40 000 birr at 12% simple for 2 years is:", options: ["4 800", "9 600", "10 976", "8 000"], answer: 1, difficulty: 1, explanation: "I = Prt = 40 000·0.12·2 = 9 600." },
    { type: "mcq", q: "The balance of 1 000 birr at 10% compounded annually for 3 years is:", options: ["1 300", "1 331", "1 310", "1 400"], answer: 1, difficulty: 1, explanation: "1000·1.1³ = 1 331; 1 300 is the simple-interest trap." },
    { type: "mcq", q: "The EAR of 10% compounded semi-annually is:", options: ["10%", "10.25%", "10.5%", "5.06%"], answer: 1, difficulty: 2, explanation: "(1.05)² − 1 = 0.1025." },
    { type: "mcq", q: "1 000 birr at 6% compounded quarterly for 2 years becomes:", options: ["1 126.83", "1 120", "1 126.16", "1 262.5"], answer: 0, difficulty: 2, explanation: "i = 1.5%, n = 8: 1000(1.015)⁸ = 1 126.83." },
    { type: "mcq", q: "The time to double 500 birr at 5% compounded annually is closest to:", options: ["10 years", "12 years", "14.2 years", "20 years"], answer: 2, difficulty: 2, explanation: "ln2/ln1.05 = 14.2; rule of 72 says ≈14.4." },
    { type: "mcq", q: "For a borrower, the worst of these 15% nominal offers is:", options: ["compounded annually", "compounded quarterly", "compounded monthly", "they cost the same"], answer: 2, difficulty: 2, explanation: "More compounding = higher effective cost to the borrower: (1.0125)^12 − 1 ≈ 16.08%." },
    { type: "mcq", q: "The present value of 100 000 birr in 5 years at 8% annually is about:", options: ["68 058", "60 000", "72 500", "50 000"], answer: 0, difficulty: 3, explanation: "100 000/1.08⁵ = 100 000/1.4693 = 68 058." },
    { type: "mcq", q: "A 12% APR loan charged 'flat' on the original balance over 2 years, repaid monthly, has effective cost roughly:", options: ["12%", "about 22%", "6%", "24%"], answer: 1, difficulty: 3, explanation: "Flat interest on a declining balance roughly doubles the effective rate: ~22% (the classic auto-loan trap)." }
  ]
};

Lessons["g12-mathematics-um5-t2"] = {
  overview: "Equal payments, repeated — rent, salaries, loan installments, pension plans and the traditional iqub — are annuities. This lesson prices their present and future values and then unwinds a loan payment into interest and principal.",
  objectives: [
    "Distinguish ordinary annuities, annuities due, and perpetuities",
    "Derive FV = R[((1+i)^n − 1)/i] as a geometric series",
    "Compute PV = R[1 − (1+i)^{−n}]/i and price loans with it",
    "Solve amortization: payment size, outstanding balance, interest vs principal split",
    "Model the iqub rotating-savings tradition as an annuity without interest"
  ],
  simple: "<b>Geometric series in a wallet.</b> An annuity is a level payment R repeated every period. Its future value sums each payment's own compound growth — R[(1+i)ⁿ − 1]/i; its present value discounts them all back — R[1 − (1+i)^{−n}]/i. A loan IS a present value: the bank hands over PV today and your payments repay it with interest. Amortization splits each payment: interest on the current balance first, the remainder chips the principal.",
  detailed: "<p><b>Future value.</b> Pay R at the END of each period (ordinary annuity); the first payment compounds n−1 times, the last not at all: FV = R[(1+i)^{n−1} + … + (1+i) + 1] = R[((1+i)^n − 1)/i] — a geometric series. Worked: save 1 000 birr monthly at 0.75%/month for 5 years (n = 60): FV = 1000[(1.0075)⁶⁰ − 1]/0.0075 = 1000(1.5657 − 1)/0.0075 ≈ 75 425 birr — deposits 60 000, interest 15 425.</p><p><b>Present value and loans.</b> PV = R[1 − (1+i)^{−n}]/i: the lump sum equivalent to the payment stream. Loan logic: PV (amount financed) known → payment R = PV·i/[1 − (1+i)^{−n}]. Borrow 100 000 at 1% monthly over 24 months: R = 100 000·0.01/(1 − 1.01^{−24}) = 1000/(1 − 0.7876) = 1000/0.2124 ≈ 4 708 birr/month. Annuity-due variant (pay at period start) multiplies by (1+i).</p><p><b>Amortization anatomy.</b> Month 1 on that loan: interest = 1% of 100 000 = 1 000, principal = 4 708 − 1 000 = 3 708; balance 96 292. Late in the schedule the split flips: with 5 000 left, interest 50, principal 4 658. Total paid 4 708·24 = 113 000 → interest cost ≈ 13 000. Early extra payments are disproportionately valuable because they delete future interest.</p><p><b>Iqub, the zero-interest annuity.</b> In the Ethiopian rotating-savings tradition, k members each pay R monthly; one member takes the pot k·R each round, rotating until everyone has received once. No interest transfers: each contributes exactly (k−1)R total and each receives kR at their turn — a zero-sum circle of timed liquidity. The math: for member j (paid in round j), the time-value cost is the interest their own payments funded for others: Σ of R·i·(waiting periods). The earlier you draw, the more value you gain; the later, the more you effectively lend. Fair scheduling is therefore a real negotiation — and interest-free by design, which is why iqub coexists comfortably with both banks and religious finance.</p><p><b>Perpetuity.</b> n → ∞: PV = R/i — a consol bond paying 500 birr yearly forever is worth 500/0.05 = 10 000 at 5%. Growth perpetuity PV = R/(i − g) underpins company valuations.</p>",
  keyTerms: [
    { term: "Annuity", def: "Level payments R each period for n periods" },
    { term: "Ordinary vs due", def: "End-of-period vs start-of-period payments (×(1+i))" },
    { term: "Sinking fund", def: "Annuity saving toward a future target (FV direction)" },
    { term: "Amortization", def: "Loan payoff where payment = interest + principal chunks" },
    { term: "Perpetuity", def: "Endless annuity: PV = R/i" },
    { term: "Iqub", def: "Rotating savings circle — an interest-free annuity pool" }
  ],
  formulas: [
    {
      name: "Annuity future value",
      formula: "FV = R[((1 + i)^n − 1)/i]",
      meaning: "Each payment compounded, summed",
      vars: [{ name: "R", meaning: "payment per period" }, { name: "i", meaning: "rate per period" }, { name: "n", meaning: "number of payments" }],
      when: "Savings goals, sinking funds"
    },
    {
      name: "Annuity present value",
      formula: "PV = R[1 − (1 + i)^{−n}]/i",
      meaning: "Discounted payment stream",
      vars: [{ name: "PV", meaning: "lump-sum equivalent today" }],
      when: "Loan pricing, lease valuation"
    },
    {
      name: "Loan payment",
      formula: "R = PV·i / [1 − (1 + i)^{−n}]",
      meaning: "The level installment that amortizes PV to 0",
      vars: [{ name: "PV", meaning: "amount financed" }],
      when: "Every installment loan and mortgage"
    },
    {
      name: "Perpetuity",
      formula: "PV = R / i",
      meaning: "Endless payments as n → ∞",
      vars: [{ name: "i > 0", meaning: "discount rate per period" }],
      when: "Consols, preferred stock, simplified valuations"
    }
  ],
  workedExamples: [
    {
      problem: "Deposit 500 birr at each month's end, 0.5%/month, for 3 years. Future value?",
      formula: "FV = R[((1+i)^n − 1)/i]",
      substitution: "500[(1.005)^{36} − 1]/0.005",
      calculation: "500(1.19668 − 1)/0.005",
      answer: "≈ 19 668 birr (deposits 18 000)"
    },
    {
      problem: "Finance 200 000 birr at 1.25%/month over 36 months. Monthly payment?",
      formula: "R = PV·i/[1 − (1+i)^{−n}]",
      substitution: "200 000·0.0125/(1 − 1.0125^{−36})",
      calculation: "2 500/(1 − 0.6395) = 2 500/0.3605",
      answer: "≈ 6 935 birr/month"
    },
    {
      problem: "For the loan above, split payment 1 and estimate total interest.",
      formula: "interest₁ = 0.0125·200 000; total = nR − PV",
      substitution: "2 500 vs 6 935; 249 660 − 200 000",
      calculation: "principal₁ = 4 435",
      answer: "Payment 1: 2 500 interest + 4 435 principal; lifetime interest ≈ 49 660 birr"
    },
    {
      problem: "An iqub of 10 members pays 2 000 birr monthly. What does each member contribute and receive, and who gains?",
      formula: "pot = k·R, total per member = (k−1)R after their draw",
      substitution: "pot 20 000; member draws in round j",
      calculation: "contribute 2 000 until drawn; receive 20 000 once",
      answer: "Each pays in until their turn, each receives 20 000 once; early drawers gain the time value of others' money, late drawers lend it — zero interest by design"
    }
  ],
  commonMistakes: [
    "Mixing FV and PV factors ([(1+i)^n − 1]/i vs [1 − (1+i)^{−n}]/i) — one builds up, one unwinds",
    "Forgetting loan i and n must be per-payment-period (monthly rate, months count)",
    "Booking the whole payment as principal and calling the balance interest-free",
    "Applying ordinary-annuity formulas to payments made at period START (missing ×(1+i))",
    "Rounding the annuity factor early — 1.0125^{-36} deserves full precision"
  ],
  applications: [
    "Mortgages and microfinance loans are PV-annuities — the payment formula decides what house you can actually carry",
    "Iqub remains Ethiopia's most common informal finance: knowing its time-value split makes you pick your draw position honestly",
    "Pension and insurance pricing: expected benefit streams are annuities valued with these factors",
    "Sinking funds: a school building its dormitory in 5 years sizes monthly deposits with the FV factor"
  ],
  summary: "Annuities are geometric series wearing business clothes: FV = R[(1+i)^n − 1]/i builds, PV = R[1 − (1+i)^{−n}]/i discounts, and the loan payment inverts PV. Amortization charges interest on the live balance then applies the rest. Perpetuities collapse to R/i. The iqub is the interest-free annuity circle — timing, not rate, distributes its value.",
  visuals: [],
  questions: [
    { type: "mcq", q: "The FV factor of a 10-payment ordinary annuity at 5% is:", options: ["12.578", "7.722", "10", "16.289"], answer: 0, difficulty: 1, explanation: "[(1.05)^{10} − 1]/0.05 = 12.578." },
    { type: "mcq", q: "The PV of paying 1 000 yearly for 5 years at 8% is:", options: ["3 993", "5 000", "4 312", "3 685"], answer: 0, difficulty: 2, explanation: "1000[1 − 1.08^{−5}]/0.08 = 1000·3.9927." },
    { type: "mcq", q: "A perpetuity of 600 birr/year at 6% is worth:", options: ["6 000", "10 000", "600", "36"], answer: 1, difficulty: 2, explanation: "R/i = 600/0.06 = 10 000." },
    { type: "mcq", q: "To have 100 000 in 10 years at 6%, yearly deposits must be about:", options: ["10 000", "7 587", "6 000", "16 290"], answer: 1, difficulty: 2, explanation: "R = 100 000/13.181 = 7 587 (13.181 = FV factor)." },
    { type: "mcq", q: "In an amortized loan, early payments are:", options: ["mostly principal", "mostly interest", "half each always", "all fees"], answer: 1, difficulty: 2, explanation: "Interest = i × big balance dominates; the principal share grows as the balance shrinks." },
    { type: "mcq", q: "A 120 000 birr loan at 1% monthly over 12 months pays approximately:", options: ["10 000/mo", "10 670/mo", "11 200/mo", "12 000/mo"], answer: 1, difficulty: 3, explanation: "R = 120 000·0.01/(1 − 1.01^{−12}) = 1 200/0.11255 ≈ 10 662." },
    { type: "mcq", q: "In a 12-member iqub with 1 000 monthly payments, each pot equals:", options: ["1 000", "12 000", "11 000", "144 000"], answer: 1, difficulty: 1, explanation: "All 12 pay 1 000 → pot 12 000 to one member each round." },
    { type: "mcq", q: "Drawing first in an iqub (positive interest environment) means you:", options: ["gain the time value of others' payments", "lose everything", "pay the other members' contributions", "get a loan with 0% that is still worth less than later draws"], answer: 0, difficulty: 3, explanation: "The first drawer receives 12 000 after contributing only 1 000, then funds everyone else's rounds — a pure time-value gain in a positive-rate world." }
  ]
};

Lessons["g12-mathematics-um5-t3"] = {
  overview: "Investments compare today's outlay with tomorrow's uncertain returns. Net present value, internal rate of return, and payback turn cash-flow tables into go/no-go decisions — and markowitz-style diversification tames the risk.",
  objectives: [
    "Discount a cash-flow stream to NPV and decide by its sign",
    "Define and approximate IRR as the NPV-zero rate",
    "Compute simple and discounted payback periods",
    "Compare investments with ROI and annualized return",
    "Explain how diversification cuts unsystematic risk"
  ],
  simple: "<b>Today's money is the only money you hold.</b> Every future cash flow is worth its present value at the required return; sum them minus the outlay = net present value. NPV > 0: the project beats your required rate — accept. IRR is the discount rate that makes NPV exactly zero — accept if it exceeds your hurdle. Payback asks the crude question: how many years to get the cash back?",
  detailed: "<p><b>NPV.</b> NPV = −C₀ + Σₜ Cₜ/(1+r)^t. Worked: machine costs 100 000, returns 40 000/yr for 3 years, r = 10%: PV of returns = 40 000·2.4869 (3-yr annuity factor) = 99 475 → NPV = −525: just below par — reject at 10%, accept at 9.5%. The discount rate is the opportunity cost: money that could earn r elsewhere.</p><p><b>IRR.</b> The r* solving NPV(r*) = 0. NPV falls as r rises (future money shrinks), so IRR is unique for normal cash flows (one sign change). Interpolation: NPV(9%) = +2 210, NPV(10%) = −525 → IRR ≈ 9% + 2210/2735 ≈ 9.8%. Decision rule: IRR > required return ⇔ NPV > 0 for projects; but NPV dominates when projects conflict (scale and timing bias IRR).</p><p><b>Payback.</b> Simple payback = years until cumulative cash ≥ cost: 100 000 with 40 000/yr → 2.5 years. Discounted payback waits for cumulative PV instead — always longer, because it prices time. Payback ignores everything after the cutoff: a gold-mine project and a 3-year rental can tie on payback and differ wildly on NPV — which is why it is a screening tool, not a decision rule.</p><p><b>ROI and annualizing.</b> ROI = (gain − cost)/cost × 100%. Flipping a shop stall for +30% in 6 months annualizes to (1.30)² − 1 = 69%; a +30% over 3 years is only (1.30)^{1/3} − 1 = 9.1%/yr. Comparing investments across horizons requires annualizing first — the exam favourite trap.</p><p><b>Risk.</b> Expected return weights outcomes by probability: E(R) = Σ pᵢRᵢ. Variance of returns measures spread. Diversification: assets that don't move together (low correlation) cancel wobbles — unsystematic (firm-specific) risk shrinks toward the systematic (market) floor. Two coffee-export stocks share rain; coffee + a city bakery share less. That is the entire Markowitz insight in one sentence.</p>",
  keyTerms: [
    { term: "NPV", def: "Σ discounted inflows − outlay; accept if positive" },
    { term: "IRR", def: "The discount rate making NPV = 0" },
    { term: "Hurdle rate", def: "The minimum acceptable return (opportunity cost)" },
    { term: "Payback period", def: "Years to recover the initial cash" },
    { term: "Annualized return", def: "(1 + total)^{1/years} − 1 — horizon-normalized" },
    { term: "Diversification", def: "Uncorrelated holdings cancel firm-specific risk" }
  ],
  formulas: [
    {
      name: "Net present value",
      formula: "NPV = −C₀ + Σₜ Cₜ/(1 + r)^t",
      meaning: "All cash flows valued at the discount rate, summed",
      vars: [{ name: "r", meaning: "required return / opportunity cost" }],
      when: "Every accept/reject capital decision"
    },
    {
      name: "IRR rule",
      formula: "solve NPV(r*) = 0 → accept if r* > hurdle",
      meaning: "The project's own break-even discount rate",
      vars: [{ name: "r*", meaning: "internal rate of return" }],
      when: "Normal cash flows (single sign change)"
    },
    {
      name: "Annualized return",
      formula: "(1 + total return)^{1/T} − 1",
      meaning: "The steady yearly rate matching the whole run",
      vars: [{ name: "T", meaning: "years held" }],
      when: "Comparing investments of different horizons"
    },
    {
      name: "Expected return",
      formula: "E(R) = Σ pᵢ Rᵢ",
      meaning: "Probability-weighted average of scenarios",
      vars: [{ name: "pᵢ", meaning: "probability of outcome i" }],
      when: "Risky single investments before choosing"
    }
  ],
  workedExamples: [
    {
      problem: "Invest 100 000 to receive 40 000/yr for 3 years at 10% required. NPV?",
      formula: "NPV = −100 000 + 40 000·[1 − 1.1^{−3}]/0.1",
      substitution: "−100 000 + 40 000(2.48685)",
      calculation: "99 474 − 100 000",
      answer: "NPV ≈ −526 → reject at 10%"
    },
    {
      problem: "Estimate the IRR of that project.",
      formula: "NPV(9%) = −100 000 + 40 000(2.5313) = +12 520? recompute: 40 000·2.53130 = 101 252 → +1 252",
      substitution: "interpolate: 9% + 1500/(1252+526)·1% ",
      calculation: "9% + 0.74%",
      answer: "IRR ≈ 9.7–9.8% (< 10% hurdle — consistent with negative NPV)"
    },
    {
      problem: "A plot costs 200 000 and sells for 320 000 after 4 years. Annualized return?",
      formula: "(320/200)^{1/4} − 1",
      substitution: "1.6^{0.25} = 1.1247",
      calculation: "12.47%/yr",
      answer: "≈ 12.5% per year (total ROI 60% over 4 years)"
    },
    {
      problem: "Bond alternative: 6% chance-free return yearly. Choose between it and the plot if your hurdle is 12%.",
      formula: "compare annualized",
      substitution: "plot 12.5% vs bond 6%; hurdle 12%",
      calculation: "plot clears; bond fails",
      answer: "the plot — but only 0.5 pt of margin against 4 years of illiquidity and risk"
    }
  ],
  commonMistakes: [
    "Discounting the initial outlay too (C₀ is at t = 0 — it is already present value)",
    "Annualizing by dividing total return by years instead of taking the root (understates compounding winners, overstates losers)",
    "Accepting an IRR decision when cash flows change sign twice (multiple IRRs — use NPV)",
    "Screening with simple payback and ignoring that discounted payback is the honest one",
    "Confusing ROI (total, any horizon) with annual return when comparing"
  ],
  applications: [
    "A shop-owner choosing between a fridge (saves 15 000/yr, costs 60 000, 5-yr life) runs NPV at bank deposit rates",
    "Addis property flippers compare annualized returns across 1–4 year holds before saying 'this one did 60%'",
    "Diversification: an investor pairing teff-trade exposure with a transport route hedges drought risk — correlation in action",
    "Government projects (dams, roads) are appraised by social NPV and shadow discount rates"
  ],
  summary: "NPV discounts the whole cash story to today — positive means it beats your required rate; IRR is the zero-crossing discount rate; payback measures how fast, not how well. Annualize before comparing horizons, weight scenarios for expected return, and let diversification shave the risk that isn't priced.",
  visuals: [],
  questions: [
    { type: "mcq", q: "NPV is positive when the discount rate is:", options: ["above the IRR", "below the IRR (normal flows)", "always", "equal to zero"], answer: 1, difficulty: 1, explanation: "NPV falls with r; crossing zero at IRR means lower r → positive NPV." },
    { type: "mcq", q: "The 2-year PV of 50 000 at 8% is about:", options: ["42 900", "41 700", "46 300", "38 500"], answer: 0, difficulty: 1, explanation: "50 000/1.1664 = 42 867 ≈ 42 900." },
    { type: "mcq", q: "A 120% total return over 3 years annualizes to about:", options: ["40%", "30%", "72%", "50%"], answer: 1, difficulty: 2, explanation: "2.2^{1/3} = 1.300 → 30%/yr (not 40 — the division trap)." },
    { type: "mcq", q: "The payback of a 90 000 machine earning 30 000/yr is:", options: ["2 years", "3 years", "4 years", "90 years"], answer: 1, difficulty: 1, explanation: "90/30 = 3 years straight." },
    { type: "mcq", q: "The IRR of −10 000 now, +12 000 in one year is:", options: ["12%", "20%", "10%", "2%"], answer: 1, difficulty: 2, explanation: "12 000/10 000 − 1 = 20%." },
    { type: "mcq", q: "An investment with E(R): 50% chance +20%, 50% chance −10% expects:", options: ["+5%", "+10%", "+15%", "0%"], answer: 0, difficulty: 2, explanation: "0.5·20 + 0.5·(−10) = 5%." },
    { type: "mcq", q: "Two projects both cost 100 000; A returns 200 000 in year 10, B returns 120 000 in year 2. At 12% the higher NPV belongs to:", options: ["A", "B", "tie", "unknown without IRR"], answer: 1, difficulty: 3, explanation: "PV_A = 64.5k (negative NPV); PV_B = 95.7k... B: 120 000/1.12² = 95 663 → NPV −4 337 vs A −35 522 — B loses less, both actually fail; best answer B." },
    { type: "mcq", q: "Diversification reduces:", options: ["systematic risk", "unsystematic risk", "all risk", "none"], answer: 1, difficulty: 3, explanation: "Market-wide risk remains; firm-specific wobbles cancel." }
  ]
};

Lessons["g12-mathematics-um5-t4"] = {
  overview: "Governments fund themselves through tax, and business math must speak its language: VAT on consumption, income tax on earnings with brackets and relief, withholding, and turnover taxes — plus the break-even arithmetic of what a tax does to price and profit.",
  objectives: [
    "Compute VAT inclusive and exclusive (add-back and extract)",
    "Apply tiered income tax with the standard relief (per-month exempt threshold)",
    "Distinguish direct vs indirect taxes and who bears incidence",
    "Compute turnover tax and withholding on services",
    "Analyze a tax's effect on break-even price and quantity"
  ],
  simple: "<b>Two directions of VAT.</b> Adding 15% on a sale is trivial (×1.15). Extracting the tax from a VAT-inclusive receipt divides by 1.15 first: of 115 000 collected, 100 000 is revenue and 15 000 is the government's — never 17 250. Income tax walks brackets: the first slice of pay is exempt (relief), then 10–35% steps for Ethiopia's employment tiers. Every tax has an incidence — who actually feels it — and it rarely matches who writes the cheque.",
  detailed: "<p><b>VAT mechanics.</b> Ethiopia's standard VAT rate is 15%. Exclusive price P → invoice P×1.15. Inclusive receipt S → net = S/1.15, VAT = S − S/1.15 = S·(0.15/1.15) ≈ 13.04% of S. Registered firms claim input credit: VAT payable = output tax − tax already paid on inputs, so the cascade stops at final consumption. Small traders below the registration threshold pay 2% turnover tax on gross sales instead — no credits, no deductions.</p><p><b>Income tax brackets (Ethiopia, employment). </b> Monthly pay is sliced: 0–600 exempt; then 10% to 1 650, 15% to 3 200, 20% to 5 250, 25% to 7 800, 30% to 10 900, 35% above. Worked: gross salary 8 000 with pension 7% (560, deductible) → taxable 7 440, which lands in the 30% band (cumulative ceilings: 600, 1 650, 3 200, 5 250, 7 800). Tax = 105 (10% slice) + 232.50 (15%) + 410 (20%) + 637.50 (25%) + (7 440 − 5 250)×0.30 = 1 385 + 657 = 2 042. Marginal rate 30%, average rate 2 042/7 440 ≈ 27.4% — the bracket climb keeps average below marginal.</p><p><b>Withholding.</b> Clients withhold 2% (goods) or 10% (services) from payments to non-registered suppliers, remitting it as the supplier's advance tax — a collection pipe, not a new tax.</p><p><b>Incidence and break-even.</b> A 15% VAT legally sits on the seller but economically splits with the buyer through the price: with demand able to absorb it, price rises ~13.04% of the gross; if competition blocks the pass-through, the margin eats it. Break-even: unit cost 80 + fixed share, price 100 pre-tax; VAT at 15% on a 115 shelf while input credit covers the 80 side → the firm's contribution unchanged but volumes may shrink — profit function per unit: (P/(1.15) − c)q − F vs (P − c)q − F when prices are capped.</p><p><b>Exam shapes:</b> extract VAT from inclusive receipts; full bracket salary computation; 'who bears a tax' with a supply-demand shift; input-credit chains across three firms; comparing turnover 2% vs VAT for a borderline business (if margins are thin, 2% of gross can beat 15% of value added).</p>",
  keyTerms: [
    { term: "VAT", def: "15% consumption tax with input credits along the chain" },
    { term: "Inclusive vs exclusive", def: "Divide by 1.15 to extract; multiply to add" },
    { term: "Turnover tax", def: "2% on gross sales for non-VAT businesses" },
    { term: "Progressive brackets", def: "Rising marginal rates on income slices" },
    { term: "Tax relief", def: "The exempt first slice of income" },
    { term: "Withholding", def: "Payer deducts and remits the supplier's tax" },
    { term: "Incidence", def: "Who truly bears the burden, vs who remits it" }
  ],
  formulas: [
    {
      name: "VAT add / extract",
      formula: "gross = net × 1.15; net = gross / 1.15; VAT = gross × 15/115",
      meaning: "The two directions of the same tax",
      vars: [{ name: "15/115 ≈ 13.04%", meaning: "VAT as a share of inclusive price" }],
      when: "Any invoice in or out"
    },
    {
      name: "VAT payable",
      formula: "output tax − input tax credits",
      meaning: "Only your value-added slice is taxed",
      vars: [{ name: "credits", meaning: "VAT already paid on purchases" }],
      when: "Monthly VAT return of a registered business"
    },
    {
      name: "Bracket income tax",
      formula: "tax = Σ (slice within band) × (band rate)",
      meaning: "Each portion of income taxed at its own marginal rate",
      vars: [{ name: "marginal rate", meaning: "rate of the top slice reached" }],
      when: "Employment income, monthly schedule (600 exempt, 10→35%)"
    },
    {
      name: "Average vs marginal rate",
      formula: "average = total tax / taxable income ≤ marginal",
      meaning: "Progressivity keeps the average below the top bracket",
      vars: [],
      when: "Interpreting 'I earn X%'"
    }
  ],
  workedExamples: [
    {
      problem: "A shop collects 230 000 birr (VAT-inclusive) this month. Split revenue and VAT.",
      formula: "net = gross/1.15",
      substitution: "230 000/1.15 = 200 000",
      calculation: "VAT = 30 000 (check: 15% of 200 000)",
      answer: "revenue 200 000 + VAT 30 000"
    },
    {
      problem: "The same shop bought 150 000 (inclusive) from wholesalers. Its VAT payable?",
      formula: "output − input credit",
      substitution: "30 000 − 150 000·(0.15/1.15)",
      calculation: "30 000 − 19 565",
      answer: "≈ 10 435 birr to the authority (taxed on value added 69 565)"
    },
    {
      problem: "Compute tax on a taxable monthly salary of 4 000 birr.",
      formula: "brackets 600@0, 1050@10%, 1550@15%, rest@20%",
      substitution: "0 + 105 + 232.5 + (4 000 − 3 200)·0.20",
      calculation: "337.5 + 160 = 497.5",
      answer: "≈ 498 birr; marginal 20%, average ≈ 12.4%"
    },
    {
      problem: "A consultant (non-VAT) invoices 50 000 for services. What moves?",
      formula: "2% turnover tax; 10% service withholding",
      substitution: "turnover 1 000; withheld 5 000 credited later",
      calculation: "receives 45 000 now, owes 1 000 turnover",
      answer: "client remits 5 000 withholding + consultant files 1 000 turnover (net cash 44 000 until credit)"
    }
  ],
  commonMistakes: [
    "Taking 15% of a VAT-inclusive figure instead of 15/115",
    "Applying the top marginal rate to ALL income (brackets slice, not blanket)",
    "Confusing the relief (first 600 exempt) with a credit subtracted at the end",
    "Forgetting VAT payable nets input credits — remitting gross output tax overpays",
    "Assuming the statutory taxpayer bears the tax — incidence follows elasticity"
  ],
  applications: [
    "Pricing: a café setting menu prices must decide inclusive or exclusive and keep the 15/115 extraction for recipes",
    "Payroll: every Ethiopian employer runs the bracket schedule with the pension-exempt slice monthly",
    "Business registration: a trader with 2% turnover vs 15% VAT-on-margin compares breakeven: VAT wins below 13.3% margins — why small shops stay unregistered",
    "Government budgeting: tax-mix projections model how a VAT rate cut bleeds revenue vs stimulates compliance"
  ],
  summary: "VAT multiplies by 1.15 outward and divides by 1.15 inward (its share of gross is 15/115 ≈ 13.04%), with input credits so only value added pays. Income tax slices pay across bands — average below marginal. Turnover 2% and withholding are the small-supplier pipes. Legal liability and true incidence differ: the market, not the form, settles who pays.",
  visuals: [],
  questions: [
    { type: "mcq", q: "A VAT-inclusive price of 115 birr contains VAT of:", options: ["17.25", "15.00", "14.50", "10.00"], answer: 1, difficulty: 1, explanation: "115 × 15/115 = 15 (net 100); 17.25 is the 15%-of-gross trap." },
    { type: "mcq", q: "An exclusive price of 2 000 birr invoices at:", options: ["2 200", "2 300", "2 150", "2 030"], answer: 1, difficulty: 1, explanation: "2 000 × 1.15 = 2 300." },
    { type: "mcq", q: "The VAT a firm remits equals:", options: ["15% of sales", "output tax − input credits", "15% of profit", "input tax only"], answer: 1, difficulty: 2, explanation: "Credit mechanism: value added × 15%." },
    { type: "mcq", q: "In the Ethiopian schedule, the first 600 birr of monthly income is:", options: ["taxed at 10%", "taxed at 1%", "exempt (relief)", "taxed at 15%"], answer: 2, difficulty: 2, explanation: "The relief band 0–600 pays 0%." },
    { type: "mcq", q: "A taxable salary of 2 000 birr pays approximately:", options: ["200", "155", "277", "320"], answer: 1, difficulty: 2, explanation: "600@0 + 1050@10% = 105 + 350@15% = 52.5 → 157.5 ≈ 155–158; the closest listed is 155." },
    { type: "mcq", q: "Marginal rate means:", options: ["rate on all income", "rate on the next birr earned", "total tax ÷ income", "VAT rate"], answer: 1, difficulty: 2, explanation: "The top band's rate — the extra birr's tax." },
    { type: "mcq", q: "Average tax rate on the 4 000 salary (tax ≈ 498) is about:", options: ["20%", "27%", "12.4%", "15%"], answer: 2, difficulty: 3, explanation: "498/4 000 = 12.4% — average well under the 20% marginal." },
    { type: "mcq", q: "A trader with 10% gross margins compares turnover tax (2% of sales) vs VAT (15% of margin). Which is cheaper?", options: ["VAT: 1.5% of sales beats 2%", "Turnover: 2% beats 1.5%", "They tie exactly", "Impossible to compare"], answer: 0, difficulty: 3, explanation: "VAT costs 15% × 10% margin = 1.5% of sales < 2%. Turnover tax wins only when margins fall below 13.3% of sales — 2/0.15." }
  ]
};
