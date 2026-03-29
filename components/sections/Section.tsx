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
      className="w-full bg-background md:bg-background/95 md:backdrop-blur-sm scroll-mt-24 p-6 flex flex-col gap-4 border-secondary/80 border-2 rounded-lg md:shadow-[0_0_15px_var(--tw-shadow-color)] md:shadow-secondary"
    >
      {title && (
        <div className="flex flex-col items-center md:flex-row justify-between border-b border-secondary/20 pb-2">
          <h2 className="text-3xl font-bold text-secondary text-center">
            {title}
          </h2>
          {datePosted !== undefined && (
            <p className="text-secondary-foreground">
              {datePosted.toLocaleDateString("en-GB")}
            </p>
          )}
        </div>
      )}
      {children}
    </div>
  );
}

export default Section;
