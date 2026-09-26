import { useState } from 'react';
import { BookMarked, Search, X } from 'lucide-react';

interface Formula {
  title: string;
  formula: string;
  notes: string;
  subject: 'math' | 'physics' | 'chem' | 'bio';
}

const FORMULAS: Formula[] = [
  // Physics
  { subject: 'physics', title: 'Newton’s Second Law', formula: 'F = m · a', notes: 'Force (N) = mass (kg) × acceleration (m/s²)' },
  { subject: 'physics', title: 'Work Done', formula: 'W = F · d · cos(θ)', notes: 'Work (J) = Force × displacement × cos(angle)' },
  { subject: 'physics', title: 'Kinetic Energy', formula: 'E_k = ½ · m · v²', notes: 'Energy (J) of a moving mass' },
  { subject: 'physics', title: 'Gravitational Potential Energy', formula: 'E_p = m · g · h', notes: 'g ≈ 9.8 m/s² on Earth surface' },
  { subject: 'physics', title: 'Ohm’s Law', formula: 'V = I · R', notes: 'Voltage (V) = Current (A) × Resistance (Ω)' },
  { subject: 'physics', title: 'Wave Speed', formula: 'v = f · λ', notes: 'Speed = frequency (Hz) × wavelength (m)' },
  { subject: 'physics', title: 'Kinematic: Velocity-Time', formula: 'v = u + a · t', notes: 'Final velocity with constant acceleration' },
  { subject: 'physics', title: 'Kinematic: Displacement', formula: 's = u · t + ½ · a · t²', notes: 'Distance traveled under acceleration' },

  // Mathematics
  { subject: 'math', title: 'Quadratic Formula', formula: 'x = (-b ± √(b² - 4ac)) / (2a)', notes: 'Roots of ax² + bx + c = 0' },
  { subject: 'math', title: 'Pythagorean Theorem', formula: 'a² + b² = c²', notes: 'Right triangle legs a, b and hypotenuse c' },
  { subject: 'math', title: 'Logarithm Product Rule', formula: 'log_b(xy) = log_b(x) + log_b(y)', notes: 'Sum of logs equals log of product' },
  { subject: 'math', title: 'Derivative: Power Rule', formula: 'd/dx [xⁿ] = n · xⁿ⁻¹', notes: 'Fundamental differentiation rule' },
  { subject: 'math', title: 'Slope Formula', formula: 'm = (y₂ - y₁) / (x₂ - x₁)', notes: 'Rate of change between two coordinates' },
  { subject: 'math', title: 'Arithmetic Progression Term', formula: 'a_n = a₁ + (n - 1)d', notes: 'nth term of arithmetic sequence' },

  // Chemistry
  { subject: 'chem', title: 'Molarity (Concentration)', formula: 'M = n / V', notes: 'Molarity (mol/L) = moles of solute / volume of solution (L)' },
  { subject: 'chem', title: 'Ideal Gas Law', formula: 'P · V = n · R · T', notes: 'R = 0.0821 L·atm/(mol·K) or 8.314 J/(mol·K)' },
  { subject: 'chem', title: 'Number of Moles', formula: 'n = mass (g) / Molar Mass (g/mol)', notes: 'Relationship between mass and moles' },
  { subject: 'chem', title: 'pH Definition', formula: 'pH = -log₁₀[H⁺]', notes: 'Acidity measurement; pH + pOH = 14 at 25°C' },
  { subject: 'chem', title: 'Dilution Equation', formula: 'M₁ · V₁ = M₂ · V₂', notes: 'Initial molarity & volume equals final' },

  // Biology
  { subject: 'bio', title: 'Photosynthesis Overall', formula: '6CO₂ + 6H₂O + light → C₆H₁₂O₆ + 6O₂', notes: 'Chloroplast light-driven glucose synthesis' },
  { subject: 'bio', title: 'Aerobic Cellular Respiration', formula: 'C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ~36 ATP', notes: 'Mitochondrial energy extraction' },
  { subject: 'bio', title: 'Hardy-Weinberg Equilibrium', formula: 'p² + 2pq + q² = 1  and  p + q = 1', notes: 'Allele and genotype frequencies in genetics' },
];

interface FormulaSheetModalProps {
  open: boolean;
  onClose: () => void;
  defaultSubject?: 'all' | 'math' | 'physics' | 'chem' | 'bio';
}

export function FormulaSheetModal({ open, onClose, defaultSubject = 'all' }: FormulaSheetModalProps) {
  const [activeTab, setActiveTab] = useState<'all' | 'math' | 'physics' | 'chem' | 'bio'>(defaultSubject);
  const [search, setSearch] = useState('');

  if (!open) return null;

  const filtered = FORMULAS.filter(f => {
    const matchesTab = activeTab === 'all' || f.subject === activeTab;
    const matchesQuery = !search.trim() ||
      f.title.toLowerCase().includes(search.toLowerCase()) ||
      f.formula.toLowerCase().includes(search.toLowerCase()) ||
      f.notes.toLowerCase().includes(search.toLowerCase());
    return matchesTab && matchesQuery;
  });

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="formula-title">
      <div className="card formula-sheet-modal" onClick={e => e.stopPropagation()}>
        <div className="spread formula-header">
          <div className="row" style={{ gap: 8, alignItems: 'center' }}>
            <BookMarked size={22} className="text-accent" />
            <h2 id="formula-title" style={{ margin: 0, fontSize: '1.25rem' }}>Key Formulas & Concepts</h2>
          </div>
          <button className="icon-btn" onClick={onClose} aria-label="Close formula sheet">
            <X size={18} />
          </button>
        </div>

        <div className="formula-search-bar mt-3">
          <Search size={16} className="search-icon" />
          <input
            type="search"
            placeholder="Search equations, laws, terms (e.g., Newton, Ohm, pH)..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="formula-input"
          />
        </div>

        <div className="formula-tabs mt-3">
          {(['all', 'physics', 'math', 'chem', 'bio'] as const).map(tab => (
            <button
              key={tab}
              className={`btn btn-sm ${activeTab === tab ? 'btn-primary' : ''}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === 'all' ? 'All' : tab === 'physics' ? '⚡ Physics' : tab === 'math' ? '📐 Math' : tab === 'chem' ? '🧪 Chem' : '🌱 Bio'}
            </button>
          ))}
        </div>

        <div className="formula-list mt-3">
          {filtered.length === 0 ? (
            <div className="empty-formulas">No equations matching "{search}"</div>
          ) : (
            filtered.map((item, idx) => (
              <div key={idx} className={`formula-card subj-${item.subject}`}>
                <div className="spread">
                  <span className="formula-title">{item.title}</span>
                  <span className="formula-tag">{item.subject.toUpperCase()}</span>
                </div>
                <div className="formula-code">{item.formula}</div>
                <div className="formula-notes">{item.notes}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
