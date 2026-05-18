import type { DesktopIcon, WindowId } from '../../types/window';
import { useWindowStore } from '../../store/windowStore';

const DESKTOP_ICONS: DesktopIcon[] = [
  { id: 'about', label: 'about.exe', icon: '👤' },
  { id: 'projects', label: 'projects.exe', icon: '📁' },
  { id: 'contact', label: 'contact.exe', icon: '✉️' },
  { id: 'links', label: 'links.exe', icon: '🔗' },
];

export function DesktopIcons() {
  const { openWindow, windows } = useWindowStore();

  const handleOpen = (id: WindowId) => {
    openWindow(id);
  };

  return (
    <div className="desktop-icons">
      {DESKTOP_ICONS.map((icon) => (
        <button
          key={icon.id}
          className={`desktop-icon ${windows[icon.id].isOpen ? 'active' : ''}`}
          onDoubleClick={() => handleOpen(icon.id)}
          onClick={() => handleOpen(icon.id)}
          title={`Ouvrir ${icon.label}`}
        >
          <span className="desktop-icon__emoji">{icon.icon}</span>
          <span className="desktop-icon__label">{icon.label}</span>
        </button>
      ))}
    </div>
  );
}
