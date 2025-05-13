import React from 'react';
import { Loader2 } from 'lucide-react';

interface ProcessingIndicatorProps {
    isProcessing: boolean;
}

const ProcessingIndicator: React.FC<ProcessingIndicatorProps> = ({ isProcessing }) => {
    if (!isProcessing) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 max-w-sm w-full text-center shadow-xl">
                <div className="flex justify-center mb-4">
                    <Loader2 className="h-10 w-10 text-green-600 animate-spin" />
                </div>
                <h3 className="text-lg font-bold text-gray-800 mb-2">Analyzing Image</h3>
                <p className="text-gray-600">
                    Our AI model is analyzing your coffee leaf image for diseases. This may take a few moments...
                </p>
                <div className="mt-4 w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-600 h-2 rounded-full animate-pulse" style={{ width: '75%' }}></div>
                </div>
            </div>
        </div>
    );
};

export default ProcessingIndicator;