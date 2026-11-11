import Link from "next/link";
import type { LegalBlock } from "@/lib/legal";

function Paragraph({ block }: { block: Extract<LegalBlock, { type: "p" }> }) {
  const { text, link } = block;
  const at = link ? text.indexOf(link.text) : -1;
  if (!link || at === -1) return <p>{text}</p>;
  return (
    <p>
      {text.slice(0, at)}
      <Link href={link.href} className="font-medium text-brand underline underline-offset-2 hover:text-brand-dark">
        {link.text}
      </Link>
      {text.slice(at + link.text.length)}
    </p>
  );
}

/** Contact lines such as "Tel: …" and "Email: …" become tappable links. */
function AddressLine({ line }: { line: string }) {
  const email = /^(Email:\s*)(\S+@\S+)$/i.exec(line);
  if (email) {
    return (
      <span className="block">
        {email[1]}
        <a href={`mailto:${email[2]}`} className="text-brand hover:text-brand-dark">
          {email[2]}
        </a>
      </span>
    );
  }
  const tel = /^(Tel:\s*)(.+)$/i.exec(line);
  if (tel) {
    return (
      <span className="block">
        {tel[1]}
        <a href={`tel:${tel[2].replace(/[^\d+]/g, "")}`} className="text-brand hover:text-brand-dark">
          {tel[2]}
        </a>
      </span>
    );
  }
  return <span className="block">{line}</span>;
}

/** Renders legal copy from `src/lib/legal.ts` with consistent typography. */
export function LegalBlocks({ blocks }: { blocks: LegalBlock[] }) {
  return (
    <div className="space-y-4 text-pretty text-base leading-relaxed text-muted">
      {blocks.map((b, i) => {
        switch (b.type) {
          case "p":
            return <Paragraph key={i} block={b} />;
          case "subheading":
            return (
              <h4 key={i} className="pt-2 text-base font-semibold text-ink">
                {b.text}
              </h4>
            );
          case "ul":
            return (
              <ul key={i} className="list-disc space-y-2 pl-6 marker:text-clay">
                {b.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            );
          case "address":
            return (
              <address
                key={i}
                className="rounded-2xl border border-line bg-sand p-6 text-sm not-italic leading-relaxed text-ink"
              >
                {b.lines.map((line) => (
                  <AddressLine key={line} line={line} />
                ))}
              </address>
            );
        }
      })}
    </div>
  );
}
