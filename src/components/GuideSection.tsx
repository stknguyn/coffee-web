import React from 'react';
import { CheckCircle2, FileImage, Lightbulb, Upload } from 'lucide-react';

const GuideSection: React.FC = () => {
    return (
        <section id="guide" className="py-12 bg-gradient-to-b from-white to-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800">Cách Thức Hoạt Động</h2>
                    <div className="w-24 h-1 bg-green-700 mx-auto mt-4 mb-6"></div>
                    <p className="max-w-2xl mx-auto text-gray-600">
                        Thực hiện theo các bước đơn giản sau để phát hiện chính xác bệnh trên lá cây cà phê của bạn
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
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">1. Tải ảnh lên</h3>
                                <p className="text-gray-600 mb-4">
                                    Chụp một bức ảnh rõ nét của lá cà phê hiển thị vùng nghi ngờ bị bệnh. Để có kết quả tốt nhất thì hãy:
                                </p>
                                <ul className="text-gray-600 space-y-2">
                                    <li className="flex items-start">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                        <span>Sử dụng ánh sáng tự nhiên</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                        <span>Đảm bảo hình ảnh lá nằm ở giữa hình</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                        <span>Cho camera tập trung nét vào lá, tránh tình trạng blur</span>
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
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">2. Xử lí bằng AI</h3>
                                <p className="text-gray-600 mb-4">
                                    Mô hình sẽ phân tích hình ảnh của bạn, kiểm tra hình ảnh để phát hiện các dấu hiệu của bệnh trên lá cà phê:
                                </p>
                                <ul className="text-gray-600 space-y-2">
                                    <li className="flex items-start">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                        <span>Miner</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                        <span>Rust</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                        <span>Phoma</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                        <span>Cercospora leaf spot</span>
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
                                <h3 className="text-xl font-semibold text-gray-800 mb-3">3. Nhận kết quả & Phương pháp xử lí</h3>
                                <p className="text-gray-600 mb-4">
                                    Trong vài giây, sẽ nhận được kết quả chi tiết bao gồm:
                                </p>
                                <ul className="text-gray-600 space-y-2">
                                    <li className="flex items-start">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                        <span>Vùng lá cây được segment</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                        <span>Chẩn đoán bệnh, cùng với độ tin cậy tương ứng</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                        <span>Thông tin chi tiết về bệnh</span>
                                    </li>
                                    <li className="flex items-start">
                                        <CheckCircle2 className="h-5 w-5 text-green-600 mr-2 flex-shrink-0 mt-0.5" />
                                        <span>Các phương pháp xử lí bệnh</span>
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