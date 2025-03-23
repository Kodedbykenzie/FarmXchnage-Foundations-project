import React from 'react';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, AreaChart, Area } from 'recharts';
type ChartType = 'bar' | 'line' | 'area';
type ChartCardProps = {
  title: string;
  subtitle?: string;
  data: any[];
  type?: ChartType;
  dataKey: string;
  categories: string;
  height?: number;
  colors?: string[];
};
export function ChartCard({
  title,
  subtitle,
  data,
  type = 'bar',
  dataKey,
  categories,
  height = 300,
  colors = ['#22C55E', '#3B82F6', '#F59E0B']
}: ChartCardProps) {
  const renderChart = () => {
    switch (type) {
      case 'bar':
        return <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={categories} />
            <YAxis />
            <Tooltip />
            <Bar dataKey={dataKey} fill={colors[0]} />
          </BarChart>;
      case 'line':
        return <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={categories} />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey={dataKey} stroke={colors[0]} strokeWidth={2} />
          </LineChart>;
      case 'area':
        return <AreaChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey={categories} />
            <YAxis />
            <Tooltip />
            <Area type="monotone" dataKey={dataKey} stroke={colors[0]} fill={colors[0]} fillOpacity={0.2} />
          </AreaChart>;
      default:
        return <div>No chart type selected</div>;
    }
  };
  return <motion.div initial={{
    opacity: 0,
    y: 20
  }} animate={{
    opacity: 1,
    y: 0
  }} className="bg-white rounded-lg shadow-sm p-6">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}
      </div>
      <div className="h-[300px]">
        <ResponsiveContainer width="100%" height="100%">
          {renderChart()}
        </ResponsiveContainer>
      </div>
    </motion.div>;
}