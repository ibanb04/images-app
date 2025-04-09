import axios from 'axios';
import { ImageItem } from '../../types';
import { API_BASE_URL, IMAGES_PER_PAGE } from '../../utils/constants';

export const picsumService = {
  async getImages(page: number): Promise<ImageItem[]> {
    try {
      const response = await axios.get(`${API_BASE_URL}/list`, {
        params: {
          page,
          limit: IMAGES_PER_PAGE,
        },
      });

      return response.data.map((item: any) => ({
        id: item.id,
        url: item.download_url,
        width: item.width,
        height: item.height,
      }));
    } catch (error) {
      console.error('Error fetching images:', error);
      throw error;
    }
  },
}; 