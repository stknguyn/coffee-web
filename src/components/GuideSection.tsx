import React from 'react';
import { CheckCircle2, FileImage, Lightbulb, Upload } from 'lucide-react';

const GuideSection: React.FC = () => {
  return (
    <section id="guide" className="py-12 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">How It Works</h2>
          <div className="w-24 h-1 bg-green-700 mx-auto mt-4 mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Follow these simple steps to get accurate disease detection for your coffee plant leaves
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-green-200"></div>
            
            {/* Step 1 */}
            <div className="relative mb-12">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-green-700 text-white rounded-full w-12 h-12 flex items-center justify-center z-10 shadow-lg">
                  <Upload className="h-6 w-6" />
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 max-w-lg mx-auto">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Upload Your Image</h3>
                <p className="text-gray-600 mb-4">
                  Take a clear photo of the coffee leaf showing the suspected disease. For best results:
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Use natural lighting when possible</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Ensure the leaf fills most of the frame</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Keep the image in focus, avoiding blur</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative mb-12">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-green-700 text-white rounded-full w-12 h-12 flex items-center justify-center z-10 shadow-lg">
                  <FileImage className="h-6 w-6" />
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 max-w-lg mx-auto">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">2. AI Analysis</h3>
                <p className="text-gray-600 mb-4">
                  Our advanced AI model analyzes your image, looking for visual patterns that indicate:
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Coffee leaf rust (Hemileia vastatrix)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Brown eye spot (Cercospora coffeicola)</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Cercospora leaf spot</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Other common coffee plant diseases</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative">
              <div className="flex items-center justify-center mb-4">
                <div className="bg-green-700 text-white rounded-full w-12 h-12 flex items-center justify-center z-10 shadow-lg">
                  <Lightbulb className="h-6 w-6" />
                </div>
              </div>
              <div className="bg-white rounded-lg shadow-md p-6 max-w-lg mx-auto">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Get Results & Treatment</h3>
                <p className="text-gray-600 mb-4">
                  Within seconds, receive comprehensive results that include:
                </p>
                <ul className="text-gray-600 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Visual highlighting of affected areas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Disease identification with confidence level</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Detailed description of the disease</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Recommended treatment options</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>Ability to download and share results</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GuideSection;