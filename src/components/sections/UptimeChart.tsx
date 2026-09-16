import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { chartData } from '@/data/features';
import { useLang } from '@/App';
import { ShieldCheck } from 'lucide-react';

const UptimeChart: React.FC = () => {
  const { t } = useLang();

  return (
    <div className="w-full flex flex-col items-center">
      {/* Chart Header Metrics */}
      <div className="flex flex-wrap items-center justify-between w-full mb-6 gap-4">
        <div>
          <span className="text-xs font-bold text-gray-400 uppercase tracking-wider block mb-1">
            {t('Annual Throughput', 'Jaarlijks volume')}
          </span>
          <h4 className="text-2xl font-bold text-[#424242]">
            {t('Scaling with Volume', 'Schaalt automatisch mee')}
          </h4>
        </div>

        <div className="flex items-center gap-5 text-xs font-semibold">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#70CAB9]" />
            <span className="text-gray-600">{t('Shipments', 'Zendingen')}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-[#4a7569]" />
            <span className="text-gray-600">{t('Revenue (€)', 'Omzet (€)')}</span>
          </div>
        </div>
      </div>

      {/* Recharts Area Container */}
      <div className="w-full h-72 sm:h-80">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <defs>
              <linearGradient id="shipmentsGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#70CAB9" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#70CAB9" stopOpacity={0.0} />
              </linearGradient>
              <linearGradient id="revenueGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4a7569" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#4a7569" stopOpacity={0.0} />
              </linearGradient>
            </defs>

            <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" vertical={false} />
            <XAxis dataKey="month" stroke="#9ca3af" fontSize={11} tickLine={false} />
            <YAxis stroke="#9ca3af" fontSize={11} tickLine={false} axisLine={false} />
            <Tooltip
              contentStyle={{
                backgroundColor: '#ffffff',
                borderRadius: '12px',
                border: '1px solid #e5e7eb',
                boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)',
                fontSize: '12px',
                fontWeight: 600,
              }}
            />
            <Area
              type="monotone"
              dataKey="shipments"
              stroke="#70CAB9"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#shipmentsGrad)"
            />
            <Area
              type="monotone"
              dataKey="revenue"
              stroke="#4a7569"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#revenueGrad)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default UptimeChart;
