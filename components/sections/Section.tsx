function Section({
  id,
  children,
  title,
  datePosted,
}: Readonly<{
  id: string;
  children: React.ReactNode;
  title: string;
  datePosted?: Date;
}>) {
  return (
    <div
      id={id}
      className="w-full bg-background scroll-mt-24 p-6 flex flex-col gap-2 border-secondary/80 border-2"
    >
      <div className="flex flex-row justify-between">
        <h1 className="text-2xl font-bold text-secondary">{title}</h1>
        {datePosted !== undefined && (
          <p className="text-secondary-foreground">
            {datePosted.toLocaleDateString("en-GB")}
          </p>
        )}
      </div>
      {children}
    </div>
  );
}

export default Section;
