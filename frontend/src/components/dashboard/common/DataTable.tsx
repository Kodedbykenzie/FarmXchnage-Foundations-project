import React, { useState } from 'react';
import { ChevronDown, ChevronUp, Search, Filter } from 'lucide-react';
import { Button, Card, Typography } from "@material-tailwind/react";
type Column<T> = {
  key: keyof T;
  title: string;
  sortable?: boolean;
  render?: (value: any, item: T) => React.ReactNode;
};
type DataTableProps<T> = {
  columns: Column<T>[];
  data: T[];
  onRowClick?: (item: T) => void;
  searchable?: boolean;
  pagination?: boolean;
};
export function DataTable<T extends {
  id: string | number;
}>({
  columns,
  data,
  onRowClick,
  searchable = true,
  pagination = true
}: DataTableProps<T>) {
  const [sortColumn, setSortColumn] = useState<keyof T | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  // Filter data based on search query
  const filteredData = searchQuery ? data.filter(item => Object.values(item).some(value => value && value.toString().toLowerCase().includes(searchQuery.toLowerCase()))) : data;
  // Sort data
  const sortedData = sortColumn ? [...filteredData].sort((a, b) => {
    const aValue = a[sortColumn];
    const bValue = b[sortColumn];
    if (aValue < bValue) return sortDirection === 'asc' ? -1 : 1;
    if (aValue > bValue) return sortDirection === 'asc' ? 1 : -1;
    return 0;
  }) : filteredData;
  // Paginate data
  const totalPages = Math.ceil(sortedData.length / itemsPerPage);
  const paginatedData = pagination ? sortedData.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage) : sortedData;
  const handleSort = (column: Column<T>) => {
    if (!column.sortable) return;
    if (sortColumn === column.key) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column.key);
      setSortDirection('asc');
    }
  };
  return <div className="bg-white rounded-lg shadow">
      {searchable && <div className="p-4 border-b border-gray-200">
          <div className="relative">
            <input type="text" placeholder="Search..." value={searchQuery} onChange={e => setSearchQuery(e.target.value)} className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
          </div>
        </div>}
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              {columns.map(column => <th key={column.key.toString()} className={`px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider ${column.sortable ? 'cursor-pointer' : ''}`} onClick={() => handleSort(column)}>
                  <div className="flex items-center space-x-1">
                    <span>{column.title}</span>
                    {column.sortable && <div className="flex flex-col">
                        <ChevronUp className={`h-3 w-3 ${sortColumn === column.key && sortDirection === 'asc' ? 'text-green-600' : 'text-gray-400'}`} />
                        <ChevronDown className={`h-3 w-3 ${sortColumn === column.key && sortDirection === 'desc' ? 'text-green-600' : 'text-gray-400'}`} />
                      </div>}
                  </div>
                </th>)}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {paginatedData.map(item => <tr key={item.id} onClick={() => onRowClick?.(item)} className={`${onRowClick ? 'cursor-pointer hover:bg-gray-50' : ''}`}>
                {columns.map(column => <td key={`${item.id}-${column.key.toString()}`} className="px-6 py-4 whitespace-nowrap">
                    {column.render ? column.render(item[column.key], item) : item[column.key]?.toString()}
                  </td>)}
              </tr>)}
          </tbody>
        </table>
      </div>
      {pagination && totalPages > 1 && <div className="px-6 py-4 border-t border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-700">
                Showing{' '}
                <span className="font-medium">
                  {(currentPage - 1) * itemsPerPage + 1}
                </span>{' '}
                to{' '}
                <span className="font-medium">
                  {Math.min(currentPage * itemsPerPage, sortedData.length)}
                </span>{' '}
                of <span className="font-medium">{sortedData.length}</span>{' '}
                results
              </p>
            </div>
            <div className="flex space-x-2">
              {Array.from({
            length: totalPages
          }, (_, i) => i + 1).map(page => <button key={page} onClick={() => setCurrentPage(page)} className={`px-3 py-1 rounded-md text-sm ${currentPage === page ? 'bg-green-600 text-white' : 'text-gray-700 hover:bg-gray-50'}`}>
                  {page}
                </button>)}
            </div>
          </div>
        </div>}
    </div>;
}