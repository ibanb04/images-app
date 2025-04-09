import axios from 'axios';
import { ImageItem } from '../types/image';

const API_URL = 'https://picsum.photos/v2/list';

export const fetchImages = async ({ pageParam = 1 }): Promise<ImageItem[]> => {
  const response = await axios.get(API_URL, {
    params: {
      page: pageParam,
      limit: 10,
    },
  });
  // Mapeo 
  return response?.data?.map((item: any) => ({
    id: String(item.id),
    url: String(item.download_url), 
  }));
};