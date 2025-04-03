import React, { useEffect, useState, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, X } from 'lucide-react';
import { useAuth } from '../../contexts/AuthContext';
import { Button, Card, Typography } from "@material-tailwind/react";
type SearchResult = {
  id: string;
  title: string;
  type: 'page' | 'product' | 'user' | 'order';
  url: string;
};
const mockSearchResults: SearchResult[] = [{
  id: '1',
  title: 'Dashboard Overview',
  type: 'page',
  url: '/dashboard'
}, {
  id: '2',
  title: 'Product Management',
  type: 'page',
  url: '/products'
}, {
  id: '3',
  title: 'Organic Tomatoes',
  type: 'product',
  url: '/products/1'
}, {
  id: '4',
  title: 'John Doe',
  type: 'user',
  url: '/users/1'
}, {
  id: '5',
  title: 'Order #123',
  type: 'order',
  url: '/orders/123'
}];
export function SearchBar() {
  const {
    user
  } = useAuth();
  const navigate = useNavigate();
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [results, setResults] = useState<SearchResult[]>([]);
  const searchRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  const getRoutePrefix = () => {
    return `/${user?.role}`;
  };
  useEffect(() => {
    if (query.length >= 2) {
      // Simulate API call with mock data
      const filtered = mockSearchResults.map(result => ({
        ...result,
        url: `${getRoutePrefix()}${result.url}`
      })).filter(result => result.title.toLowerCase().includes(query.toLowerCase()));
      setResults(filtered);
      setIsOpen(true);
    } else {
      setResults([]);
      setIsOpen(false);
    }
  }, [query]);
  const handleResultClick = (url: string) => {
    setQuery('');
    setIsOpen(false);
    navigate(url);
  };
  return <div className="relative w-full max-w-2xl" ref={searchRef}>
      <div className="relative">
        <input type="text" value={query} onChange={e => setQuery(e.target.value)} placeholder="Search anything..." className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" />
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 text-gray-400" />
        </div>
        {query && <button onClick={() => setQuery('')} className="absolute inset-y-0 right-0 pr-3 flex items-center">
            <X className="h-5 w-5 text-gray-400 hover:text-gray-600" />
          </button>}
      </div>
      {isOpen && results.length > 0 && <div className="absolute mt-2 w-full bg-white rounded-lg shadow-lg border border-gray-200 z-50">
          <div className="p-2">
            {results.map(result => <button key={result.id} onClick={() => handleResultClick(result.url)} className="w-full flex items-center px-4 py-3 hover:bg-gray-50 rounded-lg transition-colors text-left">
                {result.type === 'page' && <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Search className="h-4 w-4 text-blue-600" />
                  </div>}
                {result.type === 'product' && <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Search className="h-4 w-4 text-green-600" />
                  </div>}
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-900">
                    {result.title}
                  </p>
                  <p className="text-xs text-gray-500 capitalize">
                    {result.type}
                  </p>
                </div>
              </button>)}
          </div>
        </div>}
    </div>;
}