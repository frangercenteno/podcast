const LayoutEpisode = ({ children }) => {
  return (
    <section className="mt-6 container mx-auto pb-12">
      <div className="flex justify-around items-start">{children}</div>
    </section>
  );
};

export default LayoutEpisode;
