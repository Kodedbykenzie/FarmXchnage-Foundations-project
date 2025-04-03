import React from 'react';
import { Button, Card, Typography } from "@material-tailwind/react";
import { Camera, Medal, Star, Award } from 'lucide-react';
import { Badge } from '../common/Badge';
type ProfileHeaderProps = {
  user: {
    name: string;
    role: string;
    avatar?: string;
    coverImage?: string;
    joined: string;
    location?: string;
    bio?: string;
    verified: boolean;
    badges: Array<{
      id: string;
      type: 'achievement' | 'rank' | 'status';
      level: 'bronze' | 'silver' | 'gold' | 'platinum';
      name: string;
      description: string;
      unlocked: boolean;
    }>;
  };
};
export function ProfileHeader({
  user
}: ProfileHeaderProps) {
  return <div className="bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Cover Image */}
      <div className="relative h-48 bg-gradient-to-r from-green-400 to-blue-500">
        {user.coverImage && <img src={user.coverImage} alt="Cover" className="w-full h-full object-cover" />}
        <button className="absolute bottom-4 right-4 bg-white p-2 rounded-full shadow-lg hover:bg-gray-50">
          <Camera className="h-5 w-5 text-gray-600" />
        </button>
      </div>
      {/* Profile Info */}
      <div className="relative px-6 pb-6">
        <div className="flex items-end -mt-12 mb-4">
          <div className="relative">
            {user.avatar ? <img src={user.avatar} alt={user.name} className="w-24 h-24 rounded-full border-4 border-white shadow-lg" /> : <div className="w-24 h-24 rounded-full border-4 border-white shadow-lg bg-gray-200 flex items-center justify-center">
                <span className="text-2xl font-medium text-gray-600">
                  {user.name[0]}
                </span>
              </div>}
            {user.verified && <div className="absolute -right-2 -bottom-2 bg-blue-500 rounded-full p-1">
                <Star className="w-4 h-4 text-white" />
              </div>}
          </div>
          <div className="ml-4 flex-1">
            <h1 className="text-2xl font-bold text-gray-900">{user.name}</h1>
            <p className="text-gray-500">
              {user.role} • Joined {user.joined}
            </p>
          </div>
        </div>
        {/* Bio */}
        {user.bio && <p className="text-gray-600 mt-4 mb-6">{user.bio}</p>}
        {/* Badges */}
        <div className="flex space-x-4 mt-6">
          {user.badges.map(badge => <Badge key={badge.id} type={badge.type} level={badge.level} name={badge.name} description={badge.description} icon={badge.type === 'achievement' ? <Award /> : badge.type === 'rank' ? <Medal /> : <Star />} unlocked={badge.unlocked} />)}
        </div>
      </div>
    </div>;
}