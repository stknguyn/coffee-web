import React, { useCallback, useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Leaf, History, Map } from 'lucide-react';

const Header = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const isAuthPage = location.pathname === '/login' || location.pathname === '/register';

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        const userId = localStorage.getItem('user_id');
        setIsAuthenticated(!!userId);
    }, [location]); // kiểm tra mỗi khi location (route) thay đổi

    const handleScrollToSection = useCallback((e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
        e.preventDefault();
        document.querySelector(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }, []);

    if (isAuthPage) {
        return null;
    }

    return (
        <header className="w-full bg-gradient-to-r from-green-800 to-green-900 py-4 px-6 shadow-md">
            <div className="container mx-auto flex items-center justify-between">
                <div className="flex items-center space-x-2 cursor-pointer" onClick={() => navigate('/')}>
                    <div className="bg-white rounded-full p-2" aria-label="Logo">
                        <Leaf className="text-green-800 h-6 w-6" />
                    </div>
                    <h1 className="text-white text-xl md:text-2xl font-bold flex items-center">
                        Cof<span className="text-green-300">Cap</span>
                    </h1>
                </div>

                <nav className="flex items-center space-x-6">
                    <ul className="flex space-x-4 text-sm md:text-base">
                        <li>
                            <button
                                onClick={() => navigate('/')}
                                className="text-white hover:text-green-200 focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-200"
                            >
                                Trang chủ
                            </button>
                        </li>
                        <li>
                            <a
                                href="#about"
                                className="text-white hover:text-green-200 focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-200"
                                onClick={(e) => handleScrollToSection(e, '#about')}
                            >
                                Giới thiệu
                            </a>
                        </li>
                        <li>
                            <a
                                href="#guide"
                                className="text-white hover:text-green-200 focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-200"
                                onClick={(e) => handleScrollToSection(e, '#guide')}
                            >
                                Hướng dẫn
                            </a>
                        </li>
                        {isAuthenticated && (
                                    <li>
                                        <button
                                            onClick={() => navigate('/history')}
                                            className="flex items-center text-white hover:text-green-200 focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-200"
                                        >
                                            <History className="h-4 w-4 mr-1" />
                                            Lịch sử tra cứu
                                        </button>
                                    </li>
                                )}  
                        <li>
                            <button
                                onClick={() => navigate('/disease-map')}
                                className="flex items-center text-white hover:text-green-200 focus:outline-none focus:ring-2 focus:ring-green-300 transition duration-200"
                            >
                                <Map className="h-4 w-4 mr-1" />
                                Bản đồ kiếm soát
                            </button>
                        </li>
                    </ul>

                    {!isAuthenticated && (
                        <div className="flex items-center space-x-2">
                            <button
                                onClick={() => navigate('/login')}
                                className="px-4 py-2 text-white hover:text-green-200 transition duration-200"
                            >
                                Đăng nhập
                            </button>
                            <button
                                onClick={() => navigate('/register')}
                                className="px-4 py-2 bg-white text-green-800 rounded-md hover:bg-green-100 transition duration-200"
                            >
                                Đăng ký
                            </button>
                        </div>
                    )}
                </nav>
            </div>
        </header>
    );
};

export default Header;
