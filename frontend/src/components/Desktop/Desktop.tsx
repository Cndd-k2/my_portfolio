import { DesktopIcons } from './DesktopIcons';

export function Desktop({ children }: { children: React.ReactNode }) {
  return (
    <div className="desktop">
      {/* Decorative background elements */}
      <div className="desktop__bg-deco">
        <span className="deco deco--leaf1">🍃</span>
        <span className="deco deco--leaf2">🌿</span>
        <span className="deco deco--mushroom">🍄</span>
        <span className="deco deco--flower">🌸</span>
      </div>

      {/* Desktop icons (top-left) */}
      <DesktopIcons />

      {/* Windows rendered here */}
      {children}
    </div>
  );
}
