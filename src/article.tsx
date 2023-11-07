import { useCallback, useRef, useEffect } from "react";
import { ORIGINAL_TEXT } from "./data/article.js";

interface Props {
  highlightedText: {
    start: string;
    end: string;
  };
}

export const Article = ({ highlightedText }: Props) => {
  const markerRef = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    if (markerRef.current) {
      markerRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
  }, [highlightedText]);

  const highlight = useCallback(
    (text: string, start_phrase: string = "", end_phrase: string = "") => {
      const startIndex = text.indexOf(start_phrase);
      const endIndex = text.indexOf(
        end_phrase,
        startIndex + start_phrase.length
      );

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
    },
    []
  );
  const renderedText =
    highlightedText.start === "" ? (
      <p ref={markerRef}>{ORIGINAL_TEXT}</p>
    ) : (
      highlight(ORIGINAL_TEXT, highlightedText.start, highlightedText.end)
    );
  return (
    <section>
      <div style={{ position: "sticky", top: "0", background: "#354156" }}>
        This text was extracted from:{" "}
        <a
          href="https://www.whitehouse.gov/briefing-room/presidential-actions/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence/"
          target="_blank"
        >
          Executive Order on the Safe, Secure, and Trustworthy Development and
          Use of Artificial Intelligence
        </a>
      </div>
      <div>{renderedText}</div>{" "}
    </section>
  );
};
