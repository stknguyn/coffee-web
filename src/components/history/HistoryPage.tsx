import React from 'react';
import { History, Calendar, Clock, MapPin } from 'lucide-react';
import { ProcessedResult } from '../../types';

const mockHistory: ProcessedResult[] = [
  {
    originalImage: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg",
    processedImage: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg",
    detections: [{
      id: "1",
      name: "Coffee Leaf Rust",
      confidence: 0.89,
      description: "Severe infection detected on leaf surface",
      treatment: "Apply copper-based fungicides"
    }],
    processingTime: 2500,
    timestamp: "2024-03-15T10:30:00Z",
    location: "10.762622,106.660172"
  },
  // Add more mock history items as needed
];

const HistoryPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <History className="h-8 w-8 text-green-700 mr-3" />
        <h1 className="text-3xl font-bold text-gray-800">Detection History</h1>
      </div>

      <div className="grid gap-6">
        {mockHistory.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Calendar className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-600">
                    {new Date(item.timestamp).toLocaleDateString()}
                  </span>
                  <Clock className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-600">
                    {new Date(item.timestamp).toLocaleTimeString()}
                  </span>
                </div>
                {item.location && (
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-2" />
                    <span>{item.location}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="p-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Original Image</h4>
                  <img
                    src={item.originalImage}
                    alt="Original leaf"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-2">Processed Image</h4>
                  <img
                    src={item.processedImage}
                    alt="Processed leaf"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                </div>
              </div>

              <div className="mt-4">
                <h4 className="font-medium text-gray-800 mb-2">Detections</h4>
                {item.detections.map((detection) => (
                  <div
                    key={detection.id}
                    className="bg-gray-50 p-3 rounded-md border-l-4 border-green-700"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <h5 className="font-semibold text-gray-800">{detection.name}</h5>
                        <div className="text-sm text-gray-600 mt-1">
                          Confidence:
                          <span className={`ml-1 font-medium ${
                            detection.confidence > 0.8 ? 'text-green-600' :
                            detection.confidence > 0.5 ? 'text-yellow-600' :
                            'text-red-600'
                          }`}>
                            {(detection.confidence * 100).toFixed(1)}%
                          </span>
                        </div>
                      </div>
                    </div>
                    <p className="mt-2 text-sm text-gray-700">{detection.description}</p>
                    <div className="mt-2">
                      <h6 className="text-sm font-medium text-gray-700">Treatment:</h6>
                      <p className="text-sm text-gray-700">{detection.treatment}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 text-sm text-gray-500">
                Processing time: {(item.processingTime / 1000).toFixed(2)}s
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HistoryPage;