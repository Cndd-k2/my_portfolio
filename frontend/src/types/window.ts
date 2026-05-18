// Types partagés pour le système de fenêtres

export type WindowId = 'about' | 'projects' | 'contact' | 'links';

export interface WindowState {
  id: WindowId;
  title: string;
  isOpen: boolean;
  isMinimized: boolean;
  isMaximized: boolean;
  zIndex: number;
  position: { x: number; y: number };
  size: { width: number; height: number };
  icon: string;
}

export interface DesktopIcon {
  id: WindowId;
  label: string;
  icon: string;
}
