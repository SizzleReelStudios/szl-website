type SeedDataNoticeProps = {
  title?: string;
  items: string[];
};

export default function SeedDataNotice({
  title = "Temporary Seed Content",
  items,
}: SeedDataNoticeProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <div className="rounded-[1.6rem] border border-amber-400/20 bg-amber-300/[0.06] p-5 text-sm leading-7 text-amber-50/88">
      <p className="text-[0.68rem] uppercase tracking-[0.3em] text-amber-200/70">
        {title}
      </p>
      <ul className="mt-3 space-y-2">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
