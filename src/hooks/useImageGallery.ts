import { useInfiniteQuery } from '@tanstack/react-query';
import { ImageItem } from '../types';
import { picsumService } from '../services/api/picsum';

export const useImageGallery = () => {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useInfiniteQuery({
    queryKey: ['images'],
    queryFn: ({ pageParam = 1 }) => picsumService.getImages(pageParam),
    initialPageParam: 1,
    getNextPageParam: (lastPage: ImageItem[], allPages: ImageItem[][], lastPageParam: number) => {
      return lastPage.length === 10 ? lastPageParam + 1 : undefined;
    },
  });

  const images = data?.pages.flatMap(page => page) ?? [];

  return {
    images,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  };
};