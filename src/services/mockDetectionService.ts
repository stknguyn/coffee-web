import { ProcessedResult, DiseaseDetection } from '../types';

// Sample disease data
const diseases: DiseaseDetection[] = [
    {
        id: '1',
        name: 'Coffee Leaf Rust (Hemileia vastatrix)',
        confidence: 0.89,
        description: 'Coffee leaf rust is a devastating coffee plant disease caused by the fungus Hemileia vastatrix. It appears as yellow-orange powdery spots on the underside of leaves, eventually causing the leaves to fall off prematurely.',
        treatment: 'Apply copper-based fungicides early in the season. Maintain proper spacing between plants to improve air circulation. Consider resistant coffee varieties for future plantings.'
    },
    {
        id: '2',
        name: 'Brown Eye Spot (Cercospora coffeicola)',
        confidence: 0.67,
        description: 'Brown eye spot appears as circular lesions with a light center and dark border, resembling an eye. It affects both leaves and coffee cherries, potentially causing significant defoliation and yield loss.',
        treatment: 'Control involves copper-based fungicides, proper nutrition especially with adequate nitrogen levels, and managing shade levels. Avoid excessive moisture on foliage.'
    },
    {
        id: '3',
        name: 'Cercospora Leaf Spot',
        confidence: 0.42,
        description: 'Cercospora leaf spot causes gray to brown circular spots with reddish-brown borders. Severe infections can lead to premature leaf drop and reduced photosynthesis, affecting plant vigor and yield.',
        treatment: 'Apply fungicides containing copper or triazoles. Improve airflow by proper pruning. Ensure balanced fertilization and avoid overhead irrigation when possible.'
    }
];

// Mock processing service that simulates AI analysis
export const processImage = (imageUrl: string): Promise<ProcessedResult> => {
    return new Promise((resolve) => {
        // Simulate processing time
        const processingTime = Math.random() * 2000 + 1000; // Between 1-3 seconds

        setTimeout(() => {
            // For demo purposes, we'll pretend this is the processed image
            // In a real implementation, this would be the output from an AI model
            const processedImageUrl = imageUrl;

            // Randomly select 1-2 diseases to "detect"
            const shuffled = [...diseases].sort(() => 0.5 - Math.random());
            const detectedDiseases = shuffled.slice(0, Math.floor(Math.random() * 2) + 1);

            resolve({
                originalImage: imageUrl,
                processedImage: processedImageUrl,
                detections: detectedDiseases,
                processingTime: processingTime,
                timestamp: new Date().toISOString()
            });
        }, processingTime);
    });
};