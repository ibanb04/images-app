import { useInfiniteQuery, InfiniteData } from '@tanstack/react-query';
import { fetchImages } from '../services/picsum';
import { ImageItem } from '../types/image';


type ImageGalleryData = InfiniteData<ImageItem[], number>;

export const useImageGallery = () => {

  return useInfiniteQuery<
    ImageItem[],          
    Error,                
    ImageGalleryData,     
    string[],
    number              
  >({
    queryKey: ['images'],
    queryFn: fetchImages,
    initialPageParam: 1,
    getNextPageParam: (lastPage, _allPages, lastPageParam) => {
      return lastPage.length === 10 ? lastPageParam + 1 : undefined;
    },
  });
};