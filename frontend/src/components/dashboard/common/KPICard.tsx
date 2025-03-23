import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUp, ArrowDown, Minus } from 'lucide-react';
type KPICardProps = {
  title: string;
  value: string | number;
  change?: {
    value: number;
    trend: 'up' | 'down' | 'neutral';
    timeFrame?: string;
  };
  icon: React.ReactNode;
  color?: 'green' | 'blue' | 'amber' | 'purple' | 'red';
};
const colorClasses = {
  green: {
    bg: 'bg-green-50',
    text: 'text-green-700',
    icon: 'text-green-500'
  },
  blue: {
    bg: 'bg-blue-50',
    text: 'text-blue-700',
    icon: 'text-blue-500'
  },
  amber: {
    bg: 'bg-amber-50',
    text: 'text-amber-700',
    icon: 'text-amber-500'
  },
  purple: {
    bg: 'bg-purple-50',
    text: 'text-purple-700',
    icon: 'text-purple-500'
  },
  red: {
    bg: 'bg-red-50',
    text: 'text-red-700',
    icon: 'text-red-500'
  }
};
export function KPICard({
  title,
  value,
  change,
  icon,
  color = 'green'
}: KPICardProps) {
  const classes = colorClasses[color];
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center justify-between">
        <div className={`${classes.bg} p-3 rounded-lg`}>
          <div className={classes.icon}>{icon}</div>
        </div>
        {change && <div className={`flex items-center ${change.trend === 'up' ? 'text-green-600' : change.trend === 'down' ? 'text-red-600' : 'text-gray-600'}`}>
            {change.trend === 'up' ? <ArrowUp className="h-4 w-4" /> : change.trend === 'down' ? <ArrowDown className="h-4 w-4" /> : <Minus className="h-4 w-4" />}
            <span className="ml-1 text-sm font-medium">{change.value}%</span>
          </div>}
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-medium text-gray-500">{title}</h3>
        <p className={`mt-2 text-3xl font-bold ${classes.text}`}>{value}</p>
        {change?.timeFrame && <p className="mt-1 text-xs text-gray-500">vs. {change.timeFrame}</p>}
      </div>
    </motion.div>;
}