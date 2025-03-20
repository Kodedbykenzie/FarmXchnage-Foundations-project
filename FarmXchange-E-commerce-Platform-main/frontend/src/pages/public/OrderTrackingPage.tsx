import React from 'react';
import { useParams } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { TruckIcon, CheckCircleIcon, ClockIcon } from '@heroicons/react/24/outline';

// Mock delivery locations (Kampala to Jinja example)
const deliveryLocations = [
  { lat: 0.3136, lng: 32.5811, name: 'Farm Warehouse, Kampala' },
  { lat: 0.4167, lng: 32.9561, name: 'In Transit - Mukono' },
  { lat: 0.4433, lng: 33.2106, name: 'Destination Warehouse, Jinja' }
];

export function OrderTrackingPage() {
  const { orderId } = useParams<{ orderId: string }>();
  
  // Mock order data
  const order = {
    id: orderId,
    status: 'in-transit',
    items: [
      { product: 'Fresh Maize', quantity: '100kg', price: 300000 },
      { product: 'Organic Coffee', quantity: '50kg', price: 750000 }
    ],
    total: 1050000,
    progress: [
      { stage: 'Order Placed', time: '2024-03-20 09:00', completed: true },
      { stage: 'Processing', time: '2024-03-20 11:30', completed: true },
      { stage: 'Shipped', time: '2024-03-21 08:00', completed: true },
      { stage: 'Out for Delivery', time: '2024-03-22 07:00', completed: false },
      { stage: 'Delivered', time: null, completed: false }
    ],
    deliveryEstimate: '2024-03-22 17:00'
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <TruckIcon className="h-8 w-8 text-green-600 mr-4" />
        <h1 className="text-2xl font-bold">Tracking Order #{order.id}</h1>
        <span className={`ml-4 px-3 py-1 rounded-full text-sm ${
          order.status === 'delivered' ? 'bg-green-100 text-green-800' :
          order.status === 'in-transit' ? 'bg-blue-100 text-blue-800' :
          'bg-yellow-100 text-yellow-800'
        }`}>
          {order.status.replace('-', ' ').toUpperCase()}
        </span>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Order Progress Timeline */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-6">Delivery Progress</h2>
          <div className="space-y-4">
            {order.progress.map((step, index) => (
              <div key={step.stage} className="flex items-start">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 ${
                  step.completed ? 'bg-green-600' : 'bg-gray-200'
                }`}>
                  {step.completed ? (
                    <CheckCircleIcon className="w-5 h-5 text-white" />
                  ) : (
                    <span className="text-gray-600">{index + 1}</span>
                  )}
                </div>
                <div className="flex-1 border-b pb-4">
                  <h3 className="font-medium">{step.stage}</h3>
                  {step.time && (
                    <p className="text-sm text-gray-600">
                      {new Date(step.time).toLocaleString('en-UG', {
                        dateStyle: 'medium',
                        timeStyle: 'short'
                      })}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-6 p-4 bg-green-50 rounded-lg">
            <div className="flex items-center">
              <ClockIcon className="h-6 w-6 text-green-600 mr-3" />
              <div>
                <p className="text-sm text-gray-600">Estimated Delivery</p>
                <p className="font-medium">
                  {new Date(order.deliveryEstimate).toLocaleString('en-UG', {
                    dateStyle: 'long',
                    timeStyle: 'short'
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Delivery Map */}
        <div className="h-96 rounded-lg shadow-md overflow-hidden">
          <MapContainer
            center={[0.4167, 32.9561]}
            zoom={9}
            scrollWheelZoom={false}
            className="h-full"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {deliveryLocations.map((location, index) => (
              <Marker key={index} position={[location.lat, location.lng]}>
                <Popup>
                  <div className="text-sm">
                    <h3 className="font-medium">{location.name}</h3>
                    <p className="text-gray-600">
                      {new Date().toLocaleTimeString()}
                    </p>
                  </div>
                </Popup>
              </Marker>
            ))}
          </MapContainer>
        </div>
      </div>

      {/* Order Summary */}
      <div className="mt-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="font-medium mb-2">Products</h3>
            <div className="space-y-2">
              {order.items.map((item, index) => (
                <div key={index} className="flex justify-between">
                  <span>{item.product}</span>
                  <span className="text-gray-600">{item.quantity}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-2">Payment Details</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Total Amount:</span>
                <span className="text-green-600">UGX {order.total.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>Payment Status:</span>
                <span className="text-green-600">Paid</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 flex gap-4">
        <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
          Contact Support
        </button>
        <button className="px-4 py-2 border border-green-600 text-green-600 rounded hover:bg-green-50">
          Print Receipt
        </button>
      </div>
    </div>
  );
}