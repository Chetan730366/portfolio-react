import { useState, useEffect } from "react";

function Typewriter({ words, speed = 100, delay = 1500 }) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];

    const type = () => {
      if (!isDeleting) {
        setText(currentWord.substring(0, index + 1));
        setIndex(index + 1);

        if (index + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), delay);
        }
      } else {
        setText(currentWord.substring(0, index - 1));
        setIndex(index - 1);

        if (index - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }
      }
    };

    const timer = setTimeout(type, isDeleting ? speed / 2 : speed);

    return () => clearTimeout(timer);
  }, [index, isDeleting, wordIndex]);

  return <span>{text}|</span>;
}

export default Typewriter;