import { useInfiniteQuery } from '@tanstack/react-query';
import { fetchImages } from '../services/picsum';
import { ImageItem } from '../types/image';

export const useImageGallery = () => {
  return useInfiniteQuery({
    queryKey: ['images'],
    queryFn: fetchImages,
    initialPageParam: 1,
    getNextPageParam: (lastPage: ImageItem[], allPages: ImageItem[][], lastPageParam: number) => {
      return lastPage.length === 10 ? lastPageParam + 1 : undefined;
    },
  });
}; 