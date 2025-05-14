import axios from 'axios';
import { ProcessedResult, DiseaseDetection } from '../types';

// Không cần danh sách cố định nếu backend đã trả đủ disease info
export const processImage = (
    file: File,
    userId: string,
    croods: string,
    originalImageUrl: string
): Promise<ProcessedResult> => {
    console.log("id", userId);
    const formData = new FormData();
    formData.append('file', file);
    formData.append('user_id', userId);
    formData.append('croods', croods);

    const startTime = Date.now();

    return new Promise((resolve, reject) => {
        axios
            .post('http://localhost:8000/predictor/predict', formData, {
                headers: { 'Content-Type': 'multipart/form-data' },
            })
            .then((response) => {
                const data = response.data;
                console.log('Response data:', data);
                // Tạo 1 object DiseaseDetection từ dữ liệu backend
                const detection: DiseaseDetection = {
                    id: String(data.result.idx),
                    name: data.result.name,
                    confidence: data.confidence,
                    description: data.result.cause,
                    treatment: data.result.solution,
                };

                const result: ProcessedResult = {
                    originalImage: originalImageUrl,
                    processedImage: data.image_url,
                    detections: [detection],
                    processingTime: Date.now() - startTime,
                    timestamp: new Date().toISOString(),
                };

                resolve(result);
            })
            .catch((error) => {
                reject(error);
            });
    });
};
