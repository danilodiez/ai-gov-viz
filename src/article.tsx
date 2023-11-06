import { useRef } from "react";
import { ORIGINAL_TEXT } from "./data/article.js"


export const Article = ({ highlightedText }) => {
  const markerRef = useRef(null);
  const highlight = (text, start_phrase = "", end_phrase = "") => {
    const startIndex = text.indexOf(start_phrase);
    const endIndex = text.indexOf(end_phrase, startIndex + start_phrase.length);

    // If both phrases are found and in the correct order
    if (startIndex !== -1 && endIndex !== -1 && startIndex < endIndex) {
      const beforeText = text.substring(0, startIndex);
      const highlightText = text.substring(
        startIndex,
        endIndex + end_phrase.length
      );
      const afterText = text.substring(endIndex + end_phrase.length);

      return (
        <p>
          {beforeText}
          <mark style={{ background: "#69B29A" }} ref={markerRef}>
            {highlightText}
          </mark>
          {afterText}
        </p>
      );
    }

    return <p>{text}</p>;
  };
  const renderedText =
    highlightedText.start === "" ? (
      <p>{ORIGINAL_TEXT}</p>
    ) : (
      highlight(ORIGINAL_TEXT, highlightedText.start, highlightedText.end)
    );
  return <div>{renderedText}</div>;
};
