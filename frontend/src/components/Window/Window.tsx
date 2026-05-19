import { useEffect } from 'react';
import { motion, useDragControls, AnimatePresence } from 'framer-motion';
import { useWindowStore } from '../../store/windowStore';
import type { WindowId } from '../../types/window';

interface WindowProps {
  id: WindowId;
  children: React.ReactNode;
}

export function Window({ id, children }: WindowProps) {
  const { windows, closeWindow, minimizeWindow, maximizeWindow, focusWindow, moveWindow } =
    useWindowStore();
  const win = windows[id];
  const dragControls = useDragControls();

  useEffect(() => {
    if (win.isOpen) focusWindow(id);
  }, [win.isOpen]);

  if (!win.isOpen) return null;

  const isMaximized = win.isMaximized;
  const isMinimized = win.isMinimized;

  return (
    <AnimatePresence>
      {!isMinimized && (
        <motion.div
          className={`window ${isMaximized ? 'window--maximized' : ''}`}
          style={{
            position: 'absolute',
            left: isMaximized ? 0 : win.position.x,
            top: isMaximized ? 0 : win.position.y,
            width: isMaximized ? '100%' : win.size.width,
            height: isMaximized ? '100%' : win.size.height,
            zIndex: win.zIndex,
          }}
          drag={!isMaximized}
          dragControls={dragControls}
          dragListener={false}
          dragMomentum={false}
          dragElastic={0}
          onDragEnd={(_, info) => {
            if (!isMaximized) {
              moveWindow(
                id,
                win.position.x + info.offset.x,
                win.position.y + info.offset.y
              );
            }
          }}
          initial={{ scale: 0.88, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.88, opacity: 0, transition: { duration: 0.12 } }}
          transition={{ type: 'spring', stiffness: 420, damping: 32 }}
          onPointerDown={() => focusWindow(id)}
        >
          {/* Title bar — drag handle */}
          <div
            className="window__titlebar"
            onPointerDown={(e) => { if (!isMaximized) dragControls.start(e); }}
          >
            <span className="window__title">
              <span className="window__title-icon">{win.icon}</span>
              {win.title}
            </span>
            <div className="window__controls">
              <button
                className="window__btn window__btn--minimize"
                onClick={(e) => { e.stopPropagation(); minimizeWindow(id); }}
                title="Reduire"
              >─</button>
              <button
                className="window__btn window__btn--maximize"
                onClick={(e) => { e.stopPropagation(); maximizeWindow(id); }}
                title={isMaximized ? 'Restaurer' : 'Maximiser'}
              >{isMaximized ? '❐' : '□'}</button>
              <button
                className="window__btn window__btn--close"
                onClick={(e) => { e.stopPropagation(); closeWindow(id); }}
                title="Fermer"
              >✕</button>
            </div>
          </div>

          {/* Scrollable content */}
          <div className="window__body">
            {children}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
