function Section({
  id,
  children,
  title,
}: Readonly<{
  id: string;
  children: React.ReactNode;
  title: string;
}>) {
  return (
    <div
      id={id}
      className="w-full bg-[#181818] scroll-mt-24 p-6 flex flex-col gap-2"
    >
      <h1 className="text-2xl font-bold text-secondary">{title}</h1>
      {children}
    </div>
  );
}

export default Section;
