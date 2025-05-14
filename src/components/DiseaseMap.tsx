import React, { useEffect, useState } from 'react';
import { GoogleMap, LoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import { ProcessedResult } from '../types';

const mapContainerStyle = {
    width: '100%',
    height: '600px'
};

const center = {
    lat: 10.762622,
    lng: 106.660172
};

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
    const [selectedMarker, setSelectedMarker] = useState<ProcessedResult | null>(null);

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

    const mapOptions = {
        styles: [
            {
                featureType: "administrative",
                elementType: "geometry",
                stylers: [{ visibility: "simplified" }]
            },
            {
                featureType: "landscape",
                elementType: "all",
                stylers: [{ color: "#f2f2f2" }]
            },
            {
                featureType: "poi",
                elementType: "all",
                stylers: [{ visibility: "off" }]
            },
            {
                featureType: "water",
                elementType: "all",
                stylers: [{ color: "#c3d1d9" }]
            }
        ],
        disableDefaultUI: false,
        zoomControl: true,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: true
    };

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
                        <LoadScript googleMapsApiKey="YOUR_GOOGLE_MAPS_API_KEY">
                            <GoogleMap
                                mapContainerStyle={mapContainerStyle}
                                center={center}
                                zoom={12}
                                options={mapOptions}
                            >
                                {detections.map((detection, index) => {
                                    if (!detection.location) return null;
                                    const [lat, lng] = detection.location.split(',').map(Number);
                                    return (
                                        <Marker
                                            key={index}
                                            position={{ lat, lng }}
                                            onClick={() => setSelectedMarker(detection)}
                                            icon={{
                                                url: 'https://maps.google.com/mapfiles/ms/icons/green-dot.png',
                                                scaledSize: new window.google.maps.Size(32, 32)
                                            }}
                                        />
                                    );
                                })}

                                {selectedMarker && selectedMarker.location && (
                                    <InfoWindow
                                        position={{
                                            lat: Number(selectedMarker.location.split(',')[0]),
                                            lng: Number(selectedMarker.location.split(',')[1])
                                        }}
                                        onCloseClick={() => setSelectedMarker(null)}
                                    >
                                        <div className="p-2 max-w-xs">
                                            <h3 className="font-semibold text-sm mb-1">
                                                {selectedMarker.detections[0].name}
                                            </h3>
                                            <p className="text-xs text-gray-600 mb-1">
                                                Confidence: {(selectedMarker.detections[0].confidence * 100).toFixed(1)}%
                                            </p>
                                            <p className="text-xs text-gray-600">
                                                {new Date(selectedMarker.timestamp).toLocaleDateString()}
                                            </p>
                                            <img
                                                src={selectedMarker.processedImage}
                                                alt="Detected leaf"
                                                className="mt-2 w-full h-32 object-cover rounded"
                                            />
                                        </div>
                                    </InfoWindow>
                                )}
                            </GoogleMap>
                        </LoadScript>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiseaseMap;