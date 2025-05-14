import React from 'react';
import { Award, BookOpen, Coffee, Leaf, ShieldCheck, Upload } from 'lucide-react';

const AboutSection: React.FC = () => {
    return (
        <section id="about" className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-gray-800">Giới thiệu</h2>
                    <div className="w-24 h-1 bg-green-700 mx-auto mt-4 mb-6"></div>
                    <p className="max-w-2xl mx-auto text-gray-600">
                        Một giải pháp trí tuệ nhân tạo tiên tiến được thiết kế để giúp nông dân trồng cà phê nhận diện
                        và điều trị các bệnh trên lá một cách nhanh chóng và chính xác.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="bg-green-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                            <Leaf className="h-7 w-7 text-green-700" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Phát hiện bệnh</h3>
                        <p className="text-gray-600">
                            Mô hình AI của chúng tôi nhận diện chính xác các bệnh phổ biến trên lá cà phê như rệp lá, gỉ sắt,
                            phoma và đốm lá cercospora.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="bg-green-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                            <Upload className="h-7 w-7 text-green-700" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Dễ dàng sử dụng</h3>
                        <p className="text-gray-600">
                            Chỉ cần tải lên một hình ảnh của lá cà phê, hệ thống của chúng tôi sẽ phân tích trong vài giây,
                            cung cấp kết quả chi tiết và gợi ý phương pháp điều trị.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="bg-green-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                            <Award className="h-7 w-7 text-green-700" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Độ chính xác cao</h3>
                        <p className="text-gray-600">
                            Được huấn luyện trên hàng ngàn hình ảnh, mô hình của chúng tôi đạt độ chính xác trên 95%
                            trong việc nhận diện các bệnh phổ biến trên lá cà phê dưới nhiều điều kiện ánh sáng khác nhau.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="bg-green-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                            <BookOpen className="h-7 w-7 text-green-700" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Mục đích giáo dục</h3>
                        <p className="text-gray-600">
                            Dự án được phát triển nhằm mục đích giáo dục, tạo tiền đề cho ngành nông nghiệp thông minh ở Vietnam
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="bg-green-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                            <Coffee className="h-7 w-7 text-green-700" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Chuyên về cà phê</h3>
                        <p className="text-gray-600">
                            Không giống như các ứng dụng nhận diện bệnh cây trồng thông thường, ứng dụng được thiết kế
                            chuyên biệt cho cây cà phê, đảm bảo kết quả chính xác và phù hợp hơn.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                        <div className="bg-green-100 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                            <ShieldCheck className="h-7 w-7 text-green-700" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-800 mb-3">Nền nông nghiệp bền vững</h3>
                        <p className="text-gray-600">
                            Việc phát hiện bệnh sớm giúp nông dân có thể hành động kịp thời, giảm thiểu việc sử dụng
                            thuốc trừ sâu quá mức và thúc đẩy canh tác cà phê bền vững.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutSection;