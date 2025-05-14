import React from 'react';
import { Download, ZoomIn } from 'lucide-react';
import { ProcessedResult } from '../types';

interface ImageResultProps {
    result: ProcessedResult;
}

const ImageResult: React.FC<ImageResultProps> = ({ result }) => {
    const downloadImage = (imageUrl: string, filename: string) => {
        const link = document.createElement('a');
        link.href = imageUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 bg-green-800 text-white">
                <h3 className="text-lg font-semibold">Kết quả chẩn đoán</h3>
                <p className="text-sm text-green-200">
                    Đã xử lí • {new Date(result.timestamp).toLocaleString()}
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4">
                <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-500">Hình ảnh gốc</div>
                    <div className="relative group border border-gray-200 rounded-lg overflow-hidden">
                        <img
                            src={result.originalImage}
                            alt="Original coffee leaf"
                            className="w-full h-auto object-contain"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <button
                                className="bg-white text-green-800 p-2 rounded-full shadow-md hover:bg-green-100 transition duration-200 mx-1"
                                onClick={() => downloadImage(result.originalImage, 'original-coffee-leaf.jpg')}
                                aria-label="Download original image"
                            >
                                <Download className="h-5 w-5" />
                            </button>
                            <button
                                className="bg-white text-green-800 p-2 rounded-full shadow-md hover:bg-green-100 transition duration-200 mx-1"
                                aria-label="Zoom in"
                            >
                                <ZoomIn className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="space-y-2">
                    <div className="text-sm font-medium text-gray-500">Hình ảnh sau xử lí</div>
                    <div className="relative group border border-gray-200 rounded-lg overflow-hidden">
                        <img
                            src={result.processedImage}
                            alt="Processed coffee leaf with disease detection"
                            className="w-full h-auto object-contain"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-200 flex items-center justify-center opacity-0 group-hover:opacity-100">
                            <button
                                className="bg-white text-green-800 p-2 rounded-full shadow-md hover:bg-green-100 transition duration-200 mx-1"
                                onClick={() => downloadImage(result.processedImage, 'processed-coffee-leaf.jpg')}
                                aria-label="Download processed image"
                            >
                                <Download className="h-5 w-5" />
                            </button>
                            <button
                                className="bg-white text-green-800 p-2 rounded-full shadow-md hover:bg-green-100 transition duration-200 mx-1"
                                aria-label="Zoom in"
                            >
                                <ZoomIn className="h-5 w-5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-4 border-t border-gray-200">
                <h4 className="font-medium text-gray-800 mb-3">Phát hiện bệnh</h4>
                <div className="space-y-3">
                    {result.detections.map((detection) => (
                        <div key={detection.id} className="bg-gray-50 p-3 rounded-md border-l-4 border-green-700">
                            <div className="flex justify-between items-start">
                                <div>
                                    <h5 className="font-bold text-lg text-gray-800 capitalize">{detection.name}</h5>
                                    <div className="text-sm text-gray-600 mt-1">
                                        Độ tin cậy:
                                        <span
                                            className={`ml-1 font-medium ${detection.confidence > 0.8 ? 'text-green-600' :
                                                detection.confidence > 0.5 ? 'text-yellow-600' :
                                                    'text-red-600'
                                                }`}
                                        >
                                            {(detection.confidence * 100).toFixed(1)}%
                                        </span>
                                    </div>
                                </div>
                                <div
                                    className={`text-xs px-2 py-1 rounded-full font-medium ${detection.confidence > 0.8 ? 'bg-green-100 text-green-800' :
                                        detection.confidence > 0.5 ? 'bg-yellow-100 text-yellow-800' :
                                            'bg-red-100 text-red-800'
                                        }`}
                                >
                                    {detection.confidence > 0.8 ? 'Cao' : detection.confidence > 0.5 ? 'Trung Bình' : 'Thấp'}
                                </div>
                            </div>
                            <div className="mt-3 text-sm text-gray-700">{detection.description}</div>
                            <div className="mt-2">
                                <h6 className="text-sm font-medium text-gray-700">Hướng giải pháp đề xuất:</h6>
                                <p className="text-sm text-gray-700 mt-1">{detection.treatment}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ImageResult;
