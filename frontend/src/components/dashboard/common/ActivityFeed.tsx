import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
export type Activity = {
  id: string | number;
  user: string;
  action: string;
  item?: string;
  time: string;
  avatar?: string;
  status?: 'success' | 'pending' | 'error';
};
type ActivityFeedProps = {
  activities: Activity[];
  title?: string;
};
export function ActivityFeed({
  activities,
  title = 'Recent Activity'
}: ActivityFeedProps) {
  return <div className="bg-white rounded-lg shadow-sm">
      <div className="p-6">
        <h2 className="text-lg font-medium text-gray-900">{title}</h2>
        <div className="mt-6 flow-root">
          <ul className="-my-5 divide-y divide-gray-200">
            <AnimatePresence initial={false}>
              {activities.map(activity => <motion.li key={activity.id} initial={{
              opacity: 0,
              height: 0
            }} animate={{
              opacity: 1,
              height: 'auto'
            }} exit={{
              opacity: 0,
              height: 0
            }} transition={{
              duration: 0.2
            }} className="py-5">
                  <div className="flex items-center space-x-4">
                    {activity.avatar ? <img src={activity.avatar} alt={activity.user} className="h-10 w-10 rounded-full" /> : <div className="h-10 w-10 rounded-full bg-gray-200 flex items-center justify-center">
                        <span className="text-sm font-medium text-gray-600">
                          {activity.user[0]}
                        </span>
                      </div>}
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">
                        {activity.user}
                      </p>
                      <p className="text-sm text-gray-500">
                        {activity.action} {activity.item}
                      </p>
                    </div>
                    <div className="flex items-center space-x-2">
                      {activity.status && <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium
                            ${activity.status === 'success' ? 'bg-green-100 text-green-800' : activity.status === 'error' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'}
                          `}>
                          {activity.status}
                        </span>}
                      <div className="flex-shrink-0 text-sm text-gray-500">
                        {activity.time}
                      </div>
                    </div>
                  </div>
                </motion.li>)}
            </AnimatePresence>
          </ul>
        </div>
      </div>
    </div>;
}