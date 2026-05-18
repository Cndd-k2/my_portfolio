import { useWindowStore } from '../../store/windowStore';
import type { WindowId } from '../../types/window';

const WINDOW_IDS: WindowId[] = ['about', 'projects', 'contact', 'links'];

export function Taskbar() {
  const { windows, openWindow, minimizeWindow, focusWindow } = useWindowStore();

  const handleTaskbarClick = (id: WindowId) => {
    const win = windows[id];
    if (!win.isOpen) {
      openWindow(id);
    } else {
      minimizeWindow(id);
      if (!win.isMinimized) focusWindow(id);
    }
  };

  // Clock
  const now = new Date();
  const time = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
  const date = now.toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: '2-digit' });

  return (
    <div className="taskbar">
      {/* Start / Logo */}
      <div className="taskbar__start">
        <span className="taskbar__logo">🐱 portfolio</span>
      </div>

      {/* Open windows */}
      <div className="taskbar__windows">
        {WINDOW_IDS.map((id) => {
          const win = windows[id];
          if (!win.isOpen) return null;
          return (
            <button
              key={id}
              className={`taskbar__btn ${!win.isMinimized ? 'taskbar__btn--active' : ''}`}
              onClick={() => handleTaskbarClick(id)}
            >
              <span>{win.icon}</span>
              <span>{win.title}</span>
            </button>
          );
        })}
      </div>

      {/* Clock */}
      <div className="taskbar__clock">
        <span>{time}</span>
        <span className="taskbar__date">{date}</span>
      </div>
    </div>
  );
}
