import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ImageItem } from '../types/image';

interface FavoritesState {
  favorites: ImageItem[];
  toggleFavorite: (image: ImageItem) => void;
}

export const useFavoritesStore = create<FavoritesState>()(
  persist(
    (set) => ({
      favorites: [],
      toggleFavorite: (image) =>
        set((state) => {
          const isFavorite = state.favorites.some((fav) => fav.id === image.id);
          const newFavorites = isFavorite
            ? state.favorites.filter((fav) => fav.id !== image.id)
            : [...state.favorites, image];
          return { favorites: newFavorites };
        }),
    }),
    {
      name: 'favorites-storage',
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
); 