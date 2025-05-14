import React, { useEffect, useState } from 'react';
import { History, Calendar, Clock } from 'lucide-react';

type HistoryItem = {
  id: string;
  image_url: string;
  result: number;
  confidence: number;
  created_at: string;
};

const labelMap: Record<number, string> = {
  0: 'Healthy',
  1: 'Leaf Miner',
  2: 'Rust',
  3: 'Phoma',
  4: 'Cercospora'
};

const treatmentMap: Record<number, string> = {
  0: 'No treatment needed',
  1: 'Use neem oil or spinosad-based insecticide',
  2: 'Apply copper-based fungicide weekly',
  3: 'Use Mancozeb or Captan',
  4: 'Spray with fungicide containing chlorothalonil'
};

const HistoryPage: React.FC = () => {
  const [history, setHistory] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHistory = async () => {
      const userId = localStorage.getItem('user_id');
      if (!userId) return;

      try {
        const response = await fetch(`http://127.0.0.1:8000/history/${userId}`);
        const data = await response.json();
        setHistory(data);
      } catch (err) {
        console.error('Failed to fetch history:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, []);

  if (loading) {
    return <div className="p-8 text-center text-gray-500">Loading history...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <History className="h-8 w-8 text-green-700 mr-3" />
        <h1 className="text-3xl font-bold text-gray-800">Detection History</h1>
      </div>

      <div className="grid gap-6 ">
        {history.length === 0 ? (
          <div className="text-gray-500 text-center">No history available.</div>
        ) : (
          history.map((item) => (
            <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="p-4 border-b border-gray-200 bg-gray-50">
                <div className="flex items-center space-x-4">
                  <Calendar className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-600">
                    {new Date(item.created_at).toLocaleDateString()}
                  </span>
                  <Clock className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-600">
                    {new Date(item.created_at).toLocaleTimeString()}
                  </span>
                </div>
              </div>

              <div className="p-4">
                <div className="mb-4">
                  <img
                    src={item.image_url}
                    alt="Detected leaf"
                    className="w-full h-64 object-contain rounded-md shadow-sm"
                  />
                </div>

                <div className="bg-gray-50 p-4 rounded-md border-l-4 border-green-700">
                  <h2 className="font-bold text-lg text-gray-800 mb-1">
                    Result: {labelMap[item.result] ?? 'Unknown'}
                  </h2>
                  <p className="text-sm text-gray-600 mb-2">
                    Confidence:{' '}
                    <span
                      className={`font-semibold ${
                        item.confidence > 0.8
                          ? 'text-green-600'
                          : item.confidence > 0.5
                          ? 'text-yellow-600'
                          : 'text-red-600'
                      }`}
                    >
                      {(item.confidence * 100).toFixed(1)}%
                    </span>
                  </p>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default HistoryPage;
