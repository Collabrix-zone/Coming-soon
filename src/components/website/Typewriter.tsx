import { useState, useEffect } from 'react';

interface TypewriterProps {
  words: string[];
  speed?: number;
  deleteSpeed?: number;
  waitTime?: number;
  className?: string;
}

export function Typewriter({ words, speed = 65, deleteSpeed = 38, waitTime = 2200, className = '' }: TypewriterProps) {
  const [display, setDisplay] = useState('');
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIdx];
    let t: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < word.length) {
      t = setTimeout(() => {
        setDisplay(word.slice(0, charIdx + 1));
        setCharIdx(c => c + 1);
      }, speed);
    } else if (!deleting && charIdx === word.length) {
      t = setTimeout(() => setDeleting(true), waitTime);
    } else if (deleting && display.length > 0) {
      t = setTimeout(() => setDisplay(d => d.slice(0, -1)), deleteSpeed);
    } else if (deleting && display.length === 0) {
      setDeleting(false);
      setCharIdx(0);
      setWordIdx(i => (i + 1) % words.length);
    }

    return () => clearTimeout(t);
  }, [charIdx, deleting, display, words, wordIdx, speed, deleteSpeed, waitTime]);

  return (
    <span className={className}>
      {display}
      <span className="opacity-50 animate-pulse">|</span>
    </span>
  );
}
