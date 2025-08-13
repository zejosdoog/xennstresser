const stats = [
  { value: "20+", label: "Powerful Methods" },
  { value: "400M RPS", label: "Network Capacity" },
  { value: "1800+ GBPS", label: "L4 Network Capacity" },
  { value: "500+", label: "Active Customers" }
];

export default function Stats() {
  return (
    <section className="py-20 border-y border-white/10 font-sora">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white">{stat.value}</div>
              <div className="text-sm text-zinc-400 mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
