import { create } from 'zustand';
import type { WindowId, WindowState } from '../types/window';

const DEFAULT_WINDOWS: Record<WindowId, WindowState> = {
  about: {
    id: 'about',
    title: 'about.exe',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 10,
    position: { x: 80, y: 60 },
    size: { width: 520, height: 400 },
    icon: '👤',
  },
  projects: {
    id: 'projects',
    title: 'projects.exe',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 10,
    position: { x: 160, y: 100 },
    size: { width: 620, height: 480 },
    icon: '📁',
  },
  contact: {
    id: 'contact',
    title: 'contact.exe',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 10,
    position: { x: 240, y: 80 },
    size: { width: 460, height: 420 },
    icon: '✉️',
  },
  links: {
    id: 'links',
    title: 'links.exe',
    isOpen: false,
    isMinimized: false,
    isMaximized: false,
    zIndex: 10,
    position: { x: 320, y: 120 },
    size: { width: 380, height: 340 },
    icon: '🔗',
  },
};

let topZ = 20;

interface WindowStore {
  windows: Record<WindowId, WindowState>;
  openWindow: (id: WindowId) => void;
  closeWindow: (id: WindowId) => void;
  minimizeWindow: (id: WindowId) => void;
  maximizeWindow: (id: WindowId) => void;
  focusWindow: (id: WindowId) => void;
  moveWindow: (id: WindowId, x: number, y: number) => void;
}

export const useWindowStore = create<WindowStore>((set) => ({
  windows: DEFAULT_WINDOWS,

  openWindow: (id) =>
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: {
          ...state.windows[id],
          isOpen: true,
          isMinimized: false,
          zIndex: ++topZ,
        },
      },
    })),

  closeWindow: (id) =>
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: { ...state.windows[id], isOpen: false, isMinimized: false },
      },
    })),

  minimizeWindow: (id) =>
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: { ...state.windows[id], isMinimized: !state.windows[id].isMinimized },
      },
    })),

  maximizeWindow: (id) =>
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: { ...state.windows[id], isMaximized: !state.windows[id].isMaximized },
      },
    })),

  focusWindow: (id) =>
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: { ...state.windows[id], zIndex: ++topZ },
      },
    })),

  moveWindow: (id, x, y) =>
    set((state) => ({
      windows: {
        ...state.windows,
        [id]: { ...state.windows[id], position: { x, y } },
      },
    })),
}));
