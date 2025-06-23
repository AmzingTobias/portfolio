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
      className="w-full bg-background md:bg-background/95 scroll-mt-24 p-6 flex flex-col gap-4 border-secondary/80 border-2 md:shadow-[0_0_15px_var(--tw-shadow-color)] md:shadow-secondary"
    >
      <div className="flex flex-col items-center md:flex-row justify-between">
        <h1 className="text-2xl font-bold text-secondary text-center">
          {title}
        </h1>
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
