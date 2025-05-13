export interface DiseaseDetection {
  id: string;
  name: string;
  confidence: number;
  description: string;
  treatment: string;
}

export interface ProcessedResult {
  originalImage: string;
  processedImage: string;
  detections: DiseaseDetection[];
  processingTime: number;
  timestamp: string;
}