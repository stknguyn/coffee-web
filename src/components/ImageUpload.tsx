import React, { useState, useRef } from 'react';
import { Upload, X, Image as ImageIcon } from 'lucide-react';

interface ImageUploadProps {
    onImageSelected: (file: File, preview: string) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onImageSelected }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [preview, setPreview] = useState<string | null>(null);
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);
    };

    const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
        e.preventDefault();
        setIsDragging(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const file = e.dataTransfer.files[0];
            handleFileSelect(file);
        }
    };

    const handleFileSelect = (file: File) => {
        // Only process image files
        console.log('Selected file:', file);
        if (!file.type.match('image.*')) {
            alert('Please select an image file');
            return;
        }

        setSelectedFile(file);

        // Create preview
        const reader = new FileReader();
        reader.onload = (e) => {
            if (e.target && typeof e.target.result === 'string') {
                setPreview(e.target.result);
                onImageSelected(file, e.target.result);
            }
        };
        reader.readAsDataURL(file);
    };

    const handleBrowseClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            handleFileSelect(e.target.files[0]);
        }
    };

    const handleRemoveImage = () => {
        setPreview(null);
        setSelectedFile(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    return (
        <div className="w-full">
            {!preview ? (
                <div
                    className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors duration-200 ${isDragging ? 'border-green-500 bg-green-50' : 'border-gray-300 hover:border-green-400'
                        }`}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    onDrop={handleDrop}
                >
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <div className="bg-green-100 p-3 rounded-full">
                            <Upload className="h-8 w-8 text-green-600" />
                        </div>
                        <div>
                            <p className="text-lg font-medium text-gray-700">Tải ảnh lên ở đây</p>
                            <p className="text-sm text-gray-500 mt-1">PNG, JPG hoặc JPEG (tối đa 5MB)</p>
                        </div>
                        <button
                            onClick={handleBrowseClick}
                            className="px-4 py-2 bg-green-700 text-white rounded-md hover:bg-green-800 transition duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
                        >
                            Chọn Hình Ảnh
                        </button>
                    </div>
                    <input
                        type="file"
                        className="hidden"
                        accept="image/*"
                        ref={fileInputRef}
                        onChange={handleFileInputChange}
                    />
                </div>
            ) : (
                <div className="relative rounded-lg overflow-hidden border border-gray-200 shadow-sm">
                    <div className="absolute top-2 right-2 z-10">
                        <button
                            onClick={handleRemoveImage}
                            className="bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition duration-200"
                            aria-label="Remove image"
                        >
                            <X className="h-5 w-5" />
                        </button>
                    </div>
                    <div className="relative aspect-video bg-gray-50 flex items-center justify-center">
                        <img
                            src={preview}
                            alt="Preview"
                            className="max-h-full max-w-full object-contain"
                        />
                    </div>
                    <div className="p-3 bg-gray-50 border-t border-gray-200">
                        <div className="flex items-center text-sm text-gray-600">
                            <ImageIcon className="h-4 w-4 mr-1" />
                            <span className="truncate max-w-xs">
                                {selectedFile?.name}
                            </span>
                            <span className="ml-auto text-xs text-gray-500">
                                {selectedFile && (selectedFile.size / 1024 / 1024).toFixed(2)} MB
                            </span>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ImageUpload;