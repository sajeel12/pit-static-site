import { TrendingUp, Zap, Cloud, Clock } from 'lucide-react';
import { STATS } from '../data';

const ICONS = {
  TrendingUp,
  Zap,
  Cloud,
  Clock,
} as const;

export default function TrustTiles() {
  return (
    <section className="py-16 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((stat) => {
            const Icon = ICONS[stat.icon as keyof typeof ICONS];
            return (
              <div
                key={stat.label}
                className="group bg-white rounded-xl border border-gray-200 p-6 text-center hover:border-[#0f62fe]/30 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <Icon className="w-8 h-8 text-[#0f62fe] mx-auto mb-3" />
                <div className="text-3xl font-light text-[#161616] mb-1">{stat.value}</div>
                <div className="carbon-label-01 text-[#525252] uppercase tracking-wide">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
