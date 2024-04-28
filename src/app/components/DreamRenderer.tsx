interface Props {
  content: string;
}

export function DreamRenderer({ content }: Props) {
  const sections = content.split('\n');
  return (
    <>
      {sections.map((section, i) => (
        <p key={i}>{section || <span>&nbsp;</span>}</p>
      ))}
    </>
  );
}
