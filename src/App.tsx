import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import ImageUpload from './components/ImageUpload';
import ImageResult from './components/ImageResult';
import ProcessingIndicator from './components/ProcessingIndicator';
import AboutSection from './components/AboutSection';
import GuideSection from './components/GuideSection';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import HistoryPage from './components/history/HistoryPage';
import DiseaseMap from './components/DiseaseMap';
import { ProcessedResult } from './types';
import { processImage } from './services/processImage';
import { ArrowDownCircle } from 'lucide-react';

function App() {
    const [selectedImage, setSelectedImage] = React.useState<string | null>(null);
    const [isProcessing, setIsProcessing] = React.useState<boolean>(false);
    const [result, setResult] = React.useState<ProcessedResult | null>(null);

    const handleImageSelected = async (file: File, preview: string) => {
        setSelectedImage(preview);
        setResult(null);
        setIsProcessing(true);
        console.log("Selected file:", selectedImage);
        try {
            const userId = localStorage.getItem("user_id");
            console.log("User ID:", userId);
            if (!userId) {
                alert("Please log in to continue.");
                setIsProcessing(false);
                return;
            }

            const getCroods = (): Promise<string> =>
                new Promise((resolve) => {
                    navigator.geolocation.getCurrentPosition(
                        (position) => {
                            const lat = position.coords.latitude;
                            const long = position.coords.longitude;
                            resolve(`${lat},${long}`);
                        },
                        () => {
                            resolve("10.762622,106.660172");
                        }
                    );
                });

            const croods = await getCroods();
            const response = await processImage(file, userId, croods, preview);
            console.log("Processed result:", response);
            setResult(response);
        } catch (error) {
            console.error('Error processing image:', error);
        } finally {
            setIsProcessing(false);
        }
    };

    const HomePage = () => (
        <>
            <main className="flex-grow">
                <section className="relative bg-gradient-to-r from-green-900 to-green-700 text-white py-16 overflow-hidden">
                    <div className="absolute inset-0 opacity-10" style={{
                        backgroundImage: "url('https://rocken.vn/wp-content/uploads/2024/05/ca-phe-xanh-lun-2019.jpg')",
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}></div>

                    <div className="container mx-auto px-4 relative z-10">
                        <div className="flex flex-col md:flex-row items-center justify-between">
                            <div className="md:w-1/2 mb-8 md:mb-0">
                                <h1 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                                    Phát hiện bệnh trên lá cà phê sử dụng công nghệ AI
                                </h1>
                                <p className="text-xl mb-6 text-green-100">
                                    Tải lên hình ảnh lá cây cà phê để nhận diện bệnh ngay lập tức.
                                </p>
                                <div className="flex space-x-4">
                                    <a
                                        href="#upload"
                                        className="bg-white text-green-800 px-6 py-3 rounded-md font-semibold hover:bg-green-100 transition duration-200 inline-flex items-center"
                                    >
                                        Bắt Đầu
                                        <ArrowDownCircle className="ml-2 h-5 w-5" />
                                    </a>
                                    <a
                                        href="#guide"
                                        className="border border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:bg-opacity-10 transition duration-200"
                                    >
                                        Tìm Hiểu Thêm
                                    </a>
                                </div>
                            </div>
                            <div className="md:w-1/2 flex justify-center">
                                <img
                                    src="https://rocken.vn/wp-content/uploads/2024/05/ca-phe-xanh-lun-2019.jpg"
                                    alt="Coffee plantation"
                                    className="rounded-lg shadow-xl max-w-full h-auto"
                                    style={{ maxHeight: '400px' }}
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section id="upload" className="py-12">
                    <div className="container mx-auto px-4">
                        <div className="text-center mb-8">
                            <h2 className="text-3xl font-bold text-gray-800">Phát Hiện Bệnh Trên Lá Cà Phê</h2>
                            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
                                Tải lên một bức ảnh của lá cây cà phê của bạn và AI của chúng tôi sẽ phân tích nó để phát hiện bệnh,
                                cung cấp kết quả chi tiết và các khuyến nghị điều trị.
                            </p>
                        </div>

                        <div className="max-w-4xl mx-auto">
                            <div className="bg-white rounded-lg shadow-md p-6 mb-8">
                                <h3 className="text-xl font-semibold text-gray-800 mb-4">Tải ảnh lên</h3>
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
            <ProcessingIndicator isProcessing={isProcessing} />
        </>
    );

    return (
        <Router>
            <div className="min-h-screen flex flex-col bg-gray-50">
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/login" element={<LoginForm />} />
                    <Route path="/register" element={<RegisterForm />} />
                    <Route path="/history" element={<HistoryPage />} />
                    <Route path="/disease-map" element={<DiseaseMap />} />
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;