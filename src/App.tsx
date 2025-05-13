import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ImageUpload from './components/ImageUpload';
import ImageResult from './components/ImageResult';
import ProcessingIndicator from './components/ProcessingIndicator';
import AboutSection from './components/AboutSection';
import GuideSection from './components/GuideSection';
import { ProcessedResult } from './types';
import { processImage } from './services/processImage';
import { ArrowDownCircle } from 'lucide-react';

function App() {
    const [selectedImage, setSelectedImage] = useState<string | null>(null);
    const [isProcessing, setIsProcessing] = useState<boolean>(false);
    const [result, setResult] = useState<ProcessedResult | null>(null);

    const handleImageSelected = async (file: File, preview: string) => {
        setSelectedImage(preview);
        setResult(null);
        setIsProcessing(true);
        console.log("Selected file:", selectedImage);
        try {
            const userId = "6744027b41c77d5a872ca467";

            // Lấy vị trí người dùng (nếu không được thì fallback mặc định)
            const getCroods = (): Promise<string> =>
                new Promise((resolve) => {
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            const lat = position.coords.latitude;
                            const long = position.coords.longitude;
                            resolve(`${lat},${long}`);
                        },
                        () => {
                            // Nếu lỗi thì trả về toạ độ mặc định (TP.HCM)
                            resolve("10.762622,106.660172");
                        }
                    );
                });

            const croods = await getCroods();
            const response = await processImage(file, userId, croods, preview);
            console.log("Processed result:", response);
            setResult(response); // Đã chuẩn kiểu ProcessedResult
        } catch (error) {
            console.error('Error processing image:', error);
        } finally {
            setIsProcessing(false);
        }
    };

    return (
        <div className="min-h-screen flex flex-col bg-gray-50">
            <Header />

            <main className="flex-grow">
                {/* Hero Section */}
                <section className="relative bg-gradient-to-r from-green-900 to-green-700 text-white py-16 overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: "url('https://images.pexels.com/photos/2112189/pexels-photo-2112189.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <div className="md:w-1/2 mb-8 md:mb-0">
                                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                                    AI-Powered Coffee Leaf Disease Detection
                                </h1>
                                <p className="text-xl mb-6 text-green-100">
                                    Upload an image of a coffee plant leaf and get instant disease identification with treatment recommendations.
                                </p>
                                <div className="flex space-x-4">
                                    <a
                                        href="#upload"
                                        className="bg-white text-green-800 px-6 py-3 rounded-md font-semibold hover:bg-green-100 transition duration-200 inline-flex items-center"
                                    >
                                        Get Started
                                        <ArrowDownCircle className="ml-2 h-5 w-5" />
                                    </a>
                                    <a
                                        href="#guide"
                                        className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:bg-opacity-10 transition duration-200"
                                    >
                                        Learn More
                                    </a>
                                </div>
                            </div>
                            <div className="md:w-1/2 flex justify-center">
                                <img
                                    src="https://images.pexels.com/photos/1695052/pexels-photo-1695052.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260"
                                    alt="Coffee plantation"
                                    className="rounded-lg shadow-xl max-w-full h-auto"
                                    style={{ maxHeight: '400px' }}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Upload Section */}
                <section id="upload" className="py-12">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-800">Detect Diseases in Coffee Leaves</h2>
                            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                                Upload a photo of your coffee plant leaf and our AI will analyze it for diseases,
                                providing detailed results and treatment recommendations.
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Upload Image</h3>
                                <ImageUpload onImageSelected={handleImageSelected} />
                            </div>

                            {result && (
                                <div className="mt-8">
                                    <ImageResult result={result} />
                                </div>
                            )}  
                        </div>
                    </div>
                </section>

                <AboutSection />
                <GuideSection />
            </main>

            <Footer />
            <ProcessingIndicator isProcessing={isProcessing} />
        </div>
    );
}

export default App;
