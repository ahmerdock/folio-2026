import { IPolicyTextProps } from "./policy-text.interface";

// Matches [label](url); split() with capture groups keeps each match's two
// groups in the result, so parts cycle: text, label, url, text, label, url...
const LINK_PATTERN = /\[([^\]]+)\]\(([^)]+)\)/;

export default function PolicyText(props: IPolicyTextProps) {
  const { text } = props;
  const parts = text.split(LINK_PATTERN);

  return (
    <>
      {parts.map((part, index) => {
        if (index % 3 === 0) return part;
        if (index % 3 === 2) return null;
        return (
          <a
            key={index}
            href={parts[index + 1]}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white-secondary underline decoration-primary decoration-2 underline-offset-4"
          >
            {part}
          </a>
        );
      })}
    </>
  );
}
