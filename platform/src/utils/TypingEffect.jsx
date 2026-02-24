import { useState, useEffect } from "react";

export default function TypingEffect() {
  const texts = ["Play Smart", "Think Fast", "Never Lose"];

  const [textIndex, setTextIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    let typingSpeed = isDeleting ? 50 : 100;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        // Typing
        setDisplayedText(currentText.substring(0, displayedText.length + 1));

        if (displayedText === currentText) {
          setTimeout(() => setIsDeleting(true), 2000); // pause before deleting
        }
      } else {
        // Deleting
        setDisplayedText(currentText.substring(0, displayedText.length - 1));

        if (displayedText === "") {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, textIndex]);

  return (
    <h1>
      {displayedText}
      <span style={{ borderRight: "2px solid", marginLeft: "5px" }}></span>
    </h1>
  );
}