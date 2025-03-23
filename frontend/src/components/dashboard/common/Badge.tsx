import React from 'react';
import { motion } from 'framer-motion';
type BadgeType = 'achievement' | 'rank' | 'status';
type BadgeLevel = 'bronze' | 'silver' | 'gold' | 'platinum';
type BadgeProps = {
  type: BadgeType;
  level: BadgeLevel;
  name: string;
  description: string;
  icon: React.ReactNode;
  unlocked?: boolean;
};
const levelColors = {
  bronze: 'from-amber-700 to-amber-500',
  silver: 'from-gray-400 to-gray-300',
  gold: 'from-yellow-500 to-yellow-300',
  platinum: 'from-purple-600 to-purple-400'
};
export function Badge({
  type,
  level,
  name,
  description,
  icon,
  unlocked = true
}: BadgeProps) {
  return <motion.div whileHover={{
    scale: 1.05
  }} className={`relative group ${!unlocked ? 'opacity-50' : ''}`}>
      <div className={`
          w-24 h-24 rounded-full bg-gradient-to-br ${levelColors[level]}
          flex items-center justify-center shadow-lg
          ${!unlocked ? 'grayscale' : ''}
        `}>
        <div className="text-white text-3xl">{icon}</div>
      </div>
      {/* Badge Label */}
      <div className="mt-3 text-center">
        <h4 className="text-sm font-semibold text-gray-900">{name}</h4>
        <p className="text-xs text-gray-500">{type}</p>
      </div>
      {/* Tooltip */}
      <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <div className="bg-gray-900 text-white text-xs rounded py-1 px-2">
          <p className="font-medium">{description}</p>
          {!unlocked && <p className="mt-1 text-gray-300">Locked</p>}
        </div>
      </div>
    </motion.div>;
}