import React from 'react';
import { TrendingUp, BarChart2 } from 'lucide-react';
import { useLang } from '@/App';

const AnalyticsCard: React.FC = () => {
  const { t } = useLang();

  return (
    <div className="flex flex-col w-full h-full justify-between">
      {/* Metric Header */}
      <div className="flex items-start justify-between mb-4">
        <div>
          <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-1">
            {t('Shipments processed', 'Zendingen verwerkt')}
          </span>
          <div className="text-3xl sm:text-4xl font-extrabold text-[#424242] tracking-tight">
            12,847
          </div>
        </div>

        <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold shadow-sm">
          <TrendingUp className="w-3.5 h-3.5" />
          <span>+1,234 (18%)</span>
        </div>
      </div>

      {/* Custom Area Chart SVG with Floating Tooltip */}
      <div className="relative w-full h-44 mt-2">
        <svg viewBox="0 0 320 140" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="chartTealGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#70CAB9" stopOpacity="0.45" />
              <stop offset="50%" stopColor="#70CAB9" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#70CAB9" stopOpacity="0.0" />
            </linearGradient>
            <filter id="glowCircle" x="-50%" y="-50%" width="200%" height="200%">
              <feDropShadow dx="0" dy="2" stdDeviation="3" floodColor="#70CAB9" floodOpacity="0.6" />
            </filter>
          </defs>

          {/* Grid lines */}
          {[20, 70, 120, 170, 220, 270, 310].map((x, idx) => (
            <line
              key={idx}
              x1={x}
              y1={20}
              x2={x}
              y2={110}
              stroke="#e5e7eb"
              strokeDasharray="3 4"
              strokeWidth="1"
            />
          ))}

          {/* Area under curve */}
          <path
            d="M 10 110 C 50 100, 70 85, 110 70 C 150 55, 180 65, 210 40 C 240 20, 280 45, 310 25 L 310 110 L 10 110 Z"
            fill="url(#chartTealGrad)"
          />

          {/* Line stroke */}
          <path
            d="M 10 110 C 50 100, 70 85, 110 70 C 150 55, 180 65, 210 40 C 240 20, 280 45, 310 25"
            fill="none"
            stroke="#70CAB9"
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Active highlight point */}
          <circle cx="210" cy="40" r="7" fill="#ffffff" stroke="#70CAB9" strokeWidth="3" filter="url(#glowCircle)" />

          {/* X Axis labels */}
          {['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'].map((day, idx) => (
            <text
              key={day}
              x={20 + idx * 48}
              y="130"
              fontSize="10"
              fill="#9ca3af"
              textAnchor="middle"
              fontWeight="600"
            >
              {day}
            </text>
          ))}
        </svg>

        {/* Floating Tooltip Pill */}
        <div className="absolute top-2 left-[62%] -translate-x-1/2 px-2.5 py-1 rounded-lg bg-[#3d5f56] text-white text-[11px] font-bold shadow-lg flex items-center gap-1 pointer-events-none">
          <span>750 {t('orders', 'orders')}</span>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsCard;
