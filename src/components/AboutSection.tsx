import React from 'react';
import { Award, BookOpen, Coffee, Leaf, ShieldCheck, Upload } from 'lucide-react';

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800">About CoffeeLeafAI</h2>
          <div className="w-24 h-1 bg-green-700 mx-auto mt-4 mb-6"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            An advanced artificial intelligence solution designed to help coffee farmers identify and 
            treat leaf diseases quickly and accurately.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="bg-green-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Leaf className="h-7 w-7 text-green-700" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Disease Detection</h3>
            <p className="text-gray-600">
              Our AI model accurately identifies common coffee leaf diseases including leaf rust, 
              brown eye spot, and cercospora leaf spot.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="bg-green-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Upload className="h-7 w-7 text-green-700" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Easy to Use</h3>
            <p className="text-gray-600">
              Simply upload an image of a coffee leaf, and our system will analyze it in seconds, 
              providing detailed results and treatment recommendations.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="bg-green-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Award className="h-7 w-7 text-green-700" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">High Accuracy</h3>
            <p className="text-gray-600">
              Trained on thousands of images, our model achieves over 95% accuracy in identifying 
              common coffee leaf diseases in various lighting conditions.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="bg-green-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <BookOpen className="h-7 w-7 text-green-700" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Educational Resource</h3>
            <p className="text-gray-600">
              Provides detailed information about each detected disease, including causes, progression, 
              and scientifically-backed treatment options.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="bg-green-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <Coffee className="h-7 w-7 text-green-700" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Coffee-Specific</h3>
            <p className="text-gray-600">
              Unlike general plant disease apps, CoffeeLeafAI is specifically designed for coffee plants, 
              ensuring more accurate and relevant results.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="bg-green-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
              <ShieldCheck className="h-7 w-7 text-green-700" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Sustainable Farming</h3>
            <p className="text-gray-600">
              By detecting diseases early, farmers can take targeted action, reducing the need for 
              excessive pesticide use and promoting sustainable coffee farming.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;