import { useState, useRef } from 'react';
import { motion, useDragControls } from 'framer-motion';

type MoodType = 'idle' | 'happy' | 'sleepy';

export function CatMascot() {
  const [mood, setMood] = useState<MoodType>('idle');
  const [petCount, setPetCount] = useState(0);
  const dragControls = useDragControls();
  const posRef = useRef({ x: 0, y: 0 });

  const handlePet = () => {
    const next = petCount + 1;
    setPetCount(next);
    setMood('happy');
    setTimeout(() => setMood('idle'), 2000);
  };

  const eyes = {
    idle:   '◕ ◕',
    happy:  '^ ^',
    sleepy: '- -',
  };

  const mouth = {
    idle:   'ω',
    happy:  'ᴗ',
    sleepy: '_',
  };

  const tailAnim = {
    idle:   { rotate: [0, 15, -10, 15, 0], transition: { duration: 2.5, repeat: Infinity, ease: 'easeInOut' } },
    happy:  { rotate: [0, 35, -25, 35, 0], transition: { duration: 0.6, repeat: Infinity } },
    sleepy: { rotate: [5, 5],              transition: { duration: 4, repeat: Infinity } },
  };

  const bodyAnim = {
    idle:   { y: [0, -3, 0], transition: { duration: 3, repeat: Infinity, ease: 'easeInOut' } },
    happy:  { y: [0, -8, 0], scale: [1, 1.05, 1], transition: { duration: 0.5, repeat: Infinity } },
    sleepy: { y: [0, -1, 0], transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' } },
  };

  return (
    <motion.div
      className="cat-mascot-wrapper"
      drag
      dragControls={dragControls}
      dragMomentum={false}
      dragElastic={0}
      onDragEnd={(_, info) => {
        posRef.current = {
          x: posRef.current.x + info.offset.x,
          y: posRef.current.y + info.offset.y,
        };
      }}
      style={{ position: 'absolute', bottom: 60, right: 40, zIndex: 100, cursor: 'none' }}
      title="Clique pour caresser ! 🐾"
    >
      <motion.div
        className={`cat-mascot cat-mascot--${mood}`}
        animate={bodyAnim[mood]}
        onClick={handlePet}
        whileHover={{ scale: 1.08 }}
      >
        {/* Ears */}
        <div className="cat__ears">
          <div className="cat__ear cat__ear--left" />
          <div className="cat__ear cat__ear--right" />
        </div>

        {/* Head */}
        <div className="cat__head">
          <div className="cat__face">
            <span className="cat__eyes">{eyes[mood]}</span>
            <span className="cat__nose">▾</span>
            <span className="cat__mouth">{mouth[mood]}</span>
          </div>
          {/* Cheek blush when happy */}
          {mood === 'happy' && (
            <>
              <span className="cat__blush cat__blush--left">✿</span>
              <span className="cat__blush cat__blush--right">✿</span>
            </>
          )}
        </div>

        {/* Body */}
        <div className="cat__body">
          {/* Tail */}
          <motion.div className="cat__tail" animate={tailAnim[mood]} />

          {/* Paws */}
          <div className="cat__paws">
            <div className="cat__paw" />
            <div className="cat__paw" />
          </div>
        </div>

        {/* Pet counter bubble */}
        {petCount > 0 && mood === 'happy' && (
          <motion.div
            className="cat__bubble"
            initial={{ scale: 0, y: 0 }}
            animate={{ scale: 1, y: -10 }}
            exit={{ scale: 0 }}
          >
            {petCount >= 10 ? '💖' : petCount >= 5 ? '🥰' : '♡'}
          </motion.div>
        )}

        {/* Zzz when sleepy */}
        {mood === 'sleepy' && (
          <motion.div
            className="cat__zzz"
            animate={{ y: [-5, -15], opacity: [1, 0], scale: [0.8, 1.2] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            z
          </motion.div>
        )}
      </motion.div>

      {/* Drag hint */}
      <div className="cat-mascot__hint">cliquer pour caresser</div>
    </motion.div>
  );
}
