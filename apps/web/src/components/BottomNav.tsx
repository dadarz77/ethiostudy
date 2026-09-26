import { NavLink } from 'react-router-dom';
import { LayoutDashboard, BookOpen, GraduationCap, FileCheck2, TrendingUp } from 'lucide-react';
import { useAppStore } from '../store/useAppStore';
import { tr } from '../lib/i18n';

interface BottomNavProps {
  onNavClick?: () => void;
}

export function BottomNav({ onNavClick }: BottomNavProps) {
  const lang = useAppStore(s => s.settings.language);

  const ITEMS = [
    { to: '/', label: tr('dashboard', lang), icon: LayoutDashboard, end: true },
    { to: '/browse', label: tr('browse', lang), icon: BookOpen },
    { to: '/national', label: tr('national', lang), icon: GraduationCap },
    { to: '/exam', label: tr('exam', lang), icon: FileCheck2 },
    { to: '/progress', label: tr('progress', lang), icon: TrendingUp },
  ];

  return (
    <nav className="mobile-bottom-nav" aria-label="Mobile bottom navigation">
      {ITEMS.map(item => {
        const Icon = item.icon;
        return (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.end}
            className={({ isActive }) => 'bottom-nav-item' + (isActive ? ' active' : '')}
            onClick={onNavClick}
          >
            <Icon size={20} className="bottom-nav-icon" />
            <span className="bottom-nav-label">{item.label}</span>
          </NavLink>
        );
      })}
    </nav>
  );
}
