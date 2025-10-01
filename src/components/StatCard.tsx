interface StatCardProps {
  icon: string;
  value: string;
  label: string;
  color: string;
}

export default function StatCard({ icon, value, label, color }: StatCardProps) {
  return (
    <div className={`${color} rounded-lg p-6 text-white shadow-lg`}>
      <div className="text-4xl mb-2">{icon}</div>
      <div className="text-3xl font-bold mb-1">{value}</div>
      <div className="text-sm opacity-90">{label}</div>
    </div>
  );
}
