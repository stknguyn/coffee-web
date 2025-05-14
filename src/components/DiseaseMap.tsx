import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { ProcessedResult } from '../types';
import L from 'leaflet';

// Fix for default marker icons in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
    iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Mock data - replace with actual API call
const mockData: ProcessedResult[] = [
    {
        originalImage: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg",
        processedImage: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg",
        detections: [{
            id: "1",
            name: "Coffee Leaf Rust",
            confidence: 0.89,
            description: "Severe infection detected",
            treatment: "Apply copper-based fungicides"
        }],
        processingTime: 2500,
        timestamp: "2024-03-15T10:30:00Z",
        location: "10.762622,106.660172"
    },
    {
        originalImage: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg",
        processedImage: "https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg",
        detections: [{
            id: "2",
            name: "Brown Eye Spot",
            confidence: 0.75,
            description: "Moderate infection detected",
            treatment: "Improve air circulation"
        }],
        processingTime: 2300,
        timestamp: "2024-03-15T11:30:00Z",
        location: "10.823099,106.629664"
    }
];

const DiseaseMap: React.FC = () => {
    const [detections, setDetections] = useState<ProcessedResult[]>(mockData);
    const [statistics, setStatistics] = useState<{ [key: string]: number }>({});

    useEffect(() => {
        // Calculate disease statistics
        const stats = detections.reduce((acc, detection) => {
            detection.detections.forEach(d => {
                acc[d.name] = (acc[d.name] || 0) + 1;
            });
            return acc;
        }, {} as { [key: string]: number });
        setStatistics(stats);
    }, [detections]);

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4">
                <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Disease Distribution Map</h2>
                    <p className="text-gray-600 mb-6">
                        View the geographical distribution of detected coffee leaf diseases across different regions.
                    </p>

                    {/* Statistics Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                        {Object.entries(statistics).map(([disease, count]) => (
                            <div key={disease} className="bg-green-50 rounded-lg p-4">
                                <h3 className="font-semibold text-green-800">{disease}</h3>
                                <p className="text-2xl font-bold text-green-600">{count} cases</p>
                            </div>
                        ))}
                    </div>

                    {/* Map Container */}
                    <div className="h-[600px] rounded-lg overflow-hidden border border-gray-200">
                        <MapContainer
                            center={[10.762622, 106.660172]}
                            zoom={12}
                            style={{ height: '100%', width: '100%' }}
                        >
                            <TileLayer
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                            />
                            {detections.map((detection, index) => {
                                if (!detection.location) return null;
                                const [lat, lng] = detection.location.split(',').map(Number);
                                return (
                                    <Marker key={index} position={[lat, lng]}>
                                        <Popup>
                                            <div className="p-2">
                                                <h3 className="font-semibold text-sm">
                                                    {detection.detections[0].name}
                                                </h3>
                                                <p className="text-xs text-gray-600">
                                                    Confidence: {(detection.detections[0].confidence * 100).toFixed(1)}%
                                                </p>
                                                <p className="text-xs text-gray-600">
                                                    {new Date(detection.timestamp).toLocaleDateString()}
                                                </p>
                                            </div>
                                        </Popup>
                                    </Marker>
                                );
                            })}
                        </MapContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiseaseMap;