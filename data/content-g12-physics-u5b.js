/* Content: Grade 12 Physics — Unit 5 (part B): Basics of Electronics, topics 4-5 */
window.Lessons = window.Lessons || {};

Lessons["g12-physics-up5-t4"] = {
  overview: "The transistor turns a small current into a big one — amplification, the property that made radio, computers and everything electronic possible. Two junctions back to back (n-p-n or p-n-p) and a thin middle layer give control of a large collector current by a tiny base current.",
  objectives: [
    "Describe n-p-n and p-n-p structure and terminal names",
    "Explain base control: I_E = I_B + I_C and current gain β",
    "Use the transistor as a switch (cut-off/saturation)",
    "Use the transistor as an amplifier (small signal, large output)",
    "Analyse simple circuits: bulb relay, microphone boost"
  ],
  simple: "<b>A tap you barely touch.</b> The base is the handle; the collector-to-emitter channel is the water. 43 µA trickling into the base of a β = 100 transistor commands 4.3 mA through the lamp — a valve where a fingertip controls a fire hose. Below 0.6 V base-emitter: off (cut-off). Enough base drive: fully on (saturation), acting as a switch. In between: amplifier.",
  detailed: "<p><b>Structure and action.</b> An n-p-n transistor is emitter (heavily doped, floods electrons) — thin base (lightly doped, most electrons pass through) — collector (moderately doped, catches them). Base-emitter forward bias injects electrons; base-collector reverse bias sweeps them across. Only ~1% recombine in the base — that 1% is the base current that 'controls' the other 99%.</p><p><b>The currents.</b> I_E = I_B + I_C always (charge conservation). Common-emitter gain β = I_C/I_B, typically 50–300 for small-signal parts (BC547 ≈ 100-200). Emitter follower gain (α = I_C/I_E) sits just under 1. A 20 µA base wiggle becomes a 2 mA collector swing: current amplification, energy drawn from the supply, not created by the transistor.</p><p><b>As a switch.</b> Cutoff: V_BE < 0.6 V → I_C ≈ 0 → lamp dark. Saturation: base driven hard (I_B > I_C(sat)/β) → V_CE ≈ 0.2 V → lamp full brightness. Microcontrollers drive relays and motors exactly this way — a 5 V, milliamp output commanding amps at 12 V. The base resistor is mandatory: R_B = (V_drive − 0.7)/I_B.</p><p><b>As an amplifier.</b> Bias the base mid-range so an AC signal rides on DC: microphone millivolts at the base appear as volts at the collector, inverted (rising base voltage increases I_C, dropping collector voltage). That inversion plus gain defines the common-emitter stage, the workhorse of audio and radio.</p><p><b>Configurations.</b> Common-emitter: high voltage and current gain, inverting — the default. Common-collector (emitter follower): voltage gain ≈ 1 but huge current capability — impedance matching. Common-base: high voltage gain, no current gain, radio frequency use. Exam circuits are usually common-emitter with an emitter resistor for stability.</p><p><b>Datasheet trio:</b> maximum I_C, maximum V_CE, power rating (the smoke limits). Add β range and you can design a switch in one line of arithmetic.</p>",
  keyTerms: [
    { term: "Emitter", def: "carrier source, heavily doped" },
    { term: "Base", def: "thin control region; the tap handle" },
    { term: "Collector", def: "carrier catchment, dissipates the power" },
    { term: "β (h_FE)", def: "DC current gain I_C/I_B" },
    { term: "Cut-off / saturation", def: "switch open / switch closed" },
    { term: "Bias", def: "setting the DC operating point" }
  ],
  formulas: [
    { name: "Current law", formula: "I_E = I_B + I_C", meaning: "what enters equals what leaves", vars: [{ name: "I_B", meaning: "control current, smallest" }], when: "every transistor node" },
    { name: "Gain", formula: "I_C = β I_B", meaning: "collector obeys base, times β", vars: [{ name: "β", meaning: "50–300 typical" }], when: "active region only" },
    { name: "Base resistor (switch)", formula: "R_B = (V_drive − 0.7)/I_B", meaning: "sets the control current", vars: [{ name: "0.7 V", meaning: "Si base-emitter drop" }], when: "driving from logic or sensors" }
  ],
  workedExamples: [
    { problem: "5 V logic drives a 100 kΩ base resistor; β = 100. Collector current?", calculation: "I_B = (5−0.7)/100k = 43 µA; I_C = 100 × 43 µA = 4.3 mA.", answer: "4.3 mA — enough to click a small relay." },
    { problem: "Last example with 12 V supply and 1 kΩ collector load. V_CE?", calculation: "V_CE = 12 − 4.3 mA × 1 kΩ = 7.7 V (saturation limit 12 mA not reached).", answer: "7.7 V — active region, usable as an amplifier point." },
    { problem: "Drive a 2 A motor with β = 50. Minimum I_B?", calculation: "I_B ≥ 2/50 = 40 mA; in practice saturate with ~2× margin.", answer: "≈ 40–80 mA base — or pick a power transistor/Darlington." },
    { problem: "Microphone 10 mV at base swings base current ±10 µA (input R 1 kΩ). Output across 2 kΩ collector load?", calculation: "ΔI_C = βΔI_B = 100 × 10 µA = 1 mA; ΔV = 1 mA × 2 kΩ = 2 V.", answer: "2 V output for 10 mV input: voltage gain ≈ 200, inverted." }
  ],
  commonMistakes: [
    "Forgetting the base resistor — junctions clamp at 0.7 V and currents explode",
    "Assuming β is exact (datasheets quote 100–300 ranges)",
    "Calling saturation 'damage' — it is the on-state of switching",
    "Missing the phase inversion of common-emitter amplifiers",
    "Thinking the transistor creates energy — the supply delivers it; the transistor only meters it"
  ],
  applications: [
    "Microcontroller pins switching relays, motors, LEDs",
    "Microphone and radio pre-amplifier stages",
    "Touch switches and light sensors (phototransistors)",
    "Darlington pairs in audio amplifier outputs"
  ],
  summary: "Small base current meters big collector current: I_E = I_B + I_C, I_C = βI_B. Off/on = switch, in-between = amplifier.",
  visuals: [],
  questions: [
    { type: "mcq", q: "A transistor has how many doped regions?", options: ["2", "3", "4", "5"], answer: 1, difficulty: 1, explanation: "Emitter-base-collector: n-p-n or p-n-p." },
    { type: "mcq", q: "The largest current normally flows in the:", options: ["base", "collector", "emitter", "they are equal"], answer: 2, difficulty: 1, explanation: "I_E = I_B + I_C — the emitter carries the sum." },
    { type: "mcq", q: "Cut-off means the transistor is:", options: ["fully on", "fully off", "burning", "amplifying"], answer: 1, difficulty: 1, explanation: "No base current: collector-emitter path blocked." },
    { type: "mcq", q: "β = 150, I_B = 20 µA gives I_C =", options: ["3 mA", "0.13 mA", "7.5 mA", "150 mA"], answer: 0, difficulty: 2, explanation: "I_C = βI_B = 150 × 20 µA = 3 mA." },
    { type: "mcq", q: "As a switch, the transistor alternates between:", options: ["active and cutoff", "cutoff and saturation", "saturation and active", "reverse and forward"], answer: 1, difficulty: 2, explanation: "Fully off or fully on; the active region is the amplifier's home." },
    { type: "mcq", q: "Common-emitter amplifiers invert because:", options: ["electrons move backwards", "more I_C drops more voltage across the load, lowering collector voltage", "capacitors flip signals", "the base is negative"], answer: 1, difficulty: 3, explanation: "V_C = V_CC − I_C R_L: rising input → rising I_C → falling output." },
    { type: "mcq", q: "A 3.7 V phone chip drives a 47 kΩ base resistor (β 100). Relay needs 50 mA — is it enough?", options: ["yes with margin", "no: I_C max ≈ 6.4 mA", "yes via emitter", "no: wrong polarity"], answer: 1, difficulty: 3, explanation: "I_B = 3/47k ≈ 64 µA → I_C ≈ 6.4 mA, far short of 50 mA — needs a Darlington or MOSFET." },
    { type: "mcq", q: "Transistor power dissipation concentrates mainly in the:", options: ["emitter junction", "collector region", "base lead", "casing only"], answer: 1, difficulty: 3, explanation: "Reverse-biased collector sweeps carriers at high voltage — heat lives there; hence the V_CE × I_C rating." }
  ]
};

Lessons["g12-physics-up5-t5"] = {
  overview: "An integrated circuit packs thousands to billions of transistors, diodes, resistors and wires onto one silicon chip. This topic traces the leap from soldered components to monolithic circuits and what the IC era changed about size, cost, power and reliability.",
  objectives: [
    "Explain why ICs replaced discrete component circuits",
    "Describe wafer → chip fabrication at a summary level",
    "Classify ICs: digital, analog, mixed; SSI to VLSI",
    "Read an IC package: pins, notch, datasheet basics",
    "Name the 741 op-amp and a microcontroller as IC examples"
  ],
  simple: "<b>Everything on one flake.</b> Instead of soldering 200 components, grow them all — transistors, resistors, connections — inside a few square millimetres of silicon patterned by light. One design step, one package, one price tag. Kiloscale in the 1960s, billions today: your phone holds more logic than filled the moon-landing control room.",
  detailed: "<p><b>The reliability argument.</b> Early computers: thousands of vacuum tubes, tens of failures a day. Discrete transistors helped, but soldered joints multiplied — a radio with 150 components has 1 500 possible failure points. Kilby (1958) and Noyce's monolithic idea: fabricate the whole circuit simultaneously; interconnects become solid-state, not metal joints. Fewer interfaces, radically fewer failures.</p><p><b>Fabrication summary.</b> A silicon wafer is polished, oxidised, coated with light-sensitive resist, exposed through a mask (photolithography), doped by diffusion/implantation, layered with metal — repeated in hundreds of steps with masks shrinking feature sizes (modern: ~3–5 nm). One wafer carries hundreds of identical chips, sawn and packaged. The masks cost millions, but per-chip cost after amortisation is pennies per function.</p><p><b>Scale classes.</b> SSI (dozens of gates — the 7400 series), MSI (hundreds), LSI (thousands: early CPUs like the 4004, 1971), VLSI (millions+), ULSI (billions). MoS2, memory, sensors can also join the die — mixed-signal and system-on-chip designs pack radio, processor and power management into one package.</p><p><b>Analog siblings.</b> Not all ICs compute: the 741 op-amp amplifies with near-perfect symmetry (millions of gain, tamed by feedback), regulators (7805) hold voltages flat, timers (555) keep rhythm. Analog ICs handle continuous reality; digital ICs handle 1s and 0s; most products need both at the boundary.</p><p><b>Reading a chip.</b> The notch marks pin 1; datasheets give supply range, pinout, absolute maximum ratings (exceed them and the warranty ends in smoke). CMOS logic sips power between switching — dynamic power ∝ CV²f — which is why shrinking and slowing both save battery.</p><p><b>Exam angle:</b> advantages (size, cost, reliability, power, speed), generations (vacuum → transistor → SSI → VLSI), and one concrete comparison: a discrete amplifier vs the same function as a 741.</p>",
  keyTerms: [
    { term: "Monolithic circuit", def: "whole circuit built in one crystal" },
    { term: "Photolithography", def: "mask + light patterning of features" },
    { term: "VLSI", def: "very large-scale integration: millions of devices per chip" },
    { term: "Op-amp", def: "high-gain analog building block (741)" },
    { term: "CMOS", def: "complementary transistor logic — near-zero idle power" },
    { term: "SoC", def: "system-on-chip: processor + memory + I/O in one IC" }
  ],
  formulas: [
    { name: "Dynamic power", formula: "P ∝ C V² f", meaning: "charging capacitances each cycle costs energy", vars: [{ name: "C", meaning: "switched capacitance" }, { name: "f", meaning: "clock frequency" }], when: "why phones throttle and chips shrink" },
    { name: "Moore's observation", formula: "transistor count ×2 every ~2 years", meaning: "empirical scaling, not a law", vars: [{ name: "—", meaning: "drives cost-per-function down" }], when: "history/tech questions" }
  ],
  workedExamples: [
    { problem: "A 1940s computer: 18 000 tubes, each 5 000 h MTBF. System failures/day?", calculation: "tube failures: 18 000/5 000 h ≈ 3.6 per hour.", answer: "~3.6 tube failures per hour — the problem ICs solved." },
    { problem: "741 vs discrete: a discrete amplifier needs 8 transistors + 20 resistors/caps + 100 joints. IC version failure points?", calculation: "One die, ~8 leads; joints fall from ~100 to 8.", answer: "Roughly 10× fewer interconnect failures plus no mismatch between components." },
    { problem: "Chip scales 5 nm features vs 65 nm old process — linear ratio?", calculation: "65/5 = 13× per dimension; area density up to 13² ≈ 170×.", answer: "~100–170× more devices per mm² — matching modern density leaps." },
    { problem: "Phone SoC: 4 cores at 2 GHz. Why drop to 1.6 GHz under heat?", given: "P ∝ V²f", calculation: "Cutting f to 80% plus V to 90% gives P ≈ 0.8 × 0.81 ≈ 0.65.", answer: "Throttling trades 35% power for survival — thermals cap clocking." }
  ],
  commonMistakes: [
    "Saying ICs invented amplification (transistors did; ICs integrated it)",
    "Confusing digital ICs with all ICs — op-amps and regulators are analog",
    "Treating Moore's law as physics (an economic trend now slowing)",
    "Ignoring pin-1 orientation when plugging ICs (reverse insertion kills)",
    "Believing more transistors alone mean speed — memory traffic and heat bind too"
  ],
  applications: [
    "Smartphones: SoC, memory and power management in one pocket device",
    "Cars: dozens of ICs from fuel injection to airbags",
    "Ethiopian telecom: baseband processing and switching hardware",
    "Solar inverters and LED drivers: power ICs managing energy"
  ],
  summary: "Grow the whole circuit in one crystal: cheaper, tinier, cooler, reliable. SSI → VLSI is integration scale; analog and digital ICs split reality.",
  visuals: [],
  questions: [
    { type: "mcq", q: "An IC is primarily made of:", options: ["copper wire", "silicon", "glass", "ceramic only"], answer: 1, difficulty: 1, explanation: "Silicon's semiconducting and oxide properties make it the canvas." },
    { type: "mcq", q: "Before ICs, complex electronics relied on:", options: ["chips", "discrete components wired together", "vacuum tubes only", "relays only"], answer: 1, difficulty: 1, explanation: "Individual transistors and parts soldered point-to-point or on boards." },
    { type: "mcq", q: "VLSI means:", options: ["very low signal input", "millions+ devices on one chip", "variable logic switching", "voltage limited single IC"], answer: 1, difficulty: 1, explanation: "Very Large Scale Integration — the modern era." },
    { type: "mcq", q: "A 741 op-amp is which kind of IC?", options: ["digital", "analog", "memory", "microprocessor"], answer: 1, difficulty: 2, explanation: "It amplifies continuous voltages — analog building block." },
    { type: "mcq", q: "CMOS logic saves power because:", options: ["it runs cold", "idle current is tiny; power mostly on switching", "it uses vacuum tubes", "it has no transistors"], answer: 1, difficulty: 2, explanation: "Complementary pairs never conduct together statically." },
    { type: "mcq", q: "The notch on an IC package marks:", options: ["pin 1", "ground", "the datasheet page", "serial number"], answer: 0, difficulty: 2, explanation: "Orientation reference for the pinout." },
    { type: "mcq", q: "Phone SoCs throttle under heat because:", options: ["screens dim", "P ∝ CV²f makes power unmanageable", "batteries lie", "signals attenuate"], answer: 1, difficulty: 3, explanation: "Cut f (and V): quadratic voltage dependence buys the biggest power relief." },
    { type: "mcq", q: "Moore's law is best described as:", options: ["a physical law", "an observed/economic doubling trend", "Intel's patent", "a speed limit of light"], answer: 1, difficulty: 3, explanation: "Empirical industry observation; physics (atomic limits, heat) is now bending it." }
  ]
};
