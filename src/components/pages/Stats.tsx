const stats = [
  { value: "5+", label: "years of experience" },
  { value: "100+", label: "successful cases" },
  { value: "8", label: "professionals" },
];

export default function Stats() {
  return (
    <section className="mt-20 grid grid-cols-3 gap-8 text-center max-w-4xl relative z-10">
      {stats.map((stat, index) => (
        <div key={index}>
          <h3 className="text-4xl font-bold">{stat.value}</h3>
          <p className="text-gray-300 text-lg">{stat.label}</p>
        </div>
      ))}
    </section>
  );
}
