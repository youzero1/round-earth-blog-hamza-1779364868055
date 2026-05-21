type ProseProps = {
  content: string;
};

export default function Prose({ content }: ProseProps) {
  const blocks = content.split(/\n\n+/);
  return (
    <div className="prose-content">
      {blocks.map((block, i) => {
        if (block.startsWith('## ')) {
          return <h2 key={i}>{block.replace(/^##\s+/, '')}</h2>;
        }
        if (block.startsWith('> ')) {
          return <blockquote key={i}>{block.replace(/^>\s+/, '')}</blockquote>;
        }
        return <p key={i}>{block}</p>;
      })}
    </div>
  );
}
