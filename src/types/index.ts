export interface ImageItem {
  id: string;
  url: string;
  width: number;
  height: number;
}

export interface FavoriteState {
  favorites: ImageItem[];
  loading: boolean;
  toggleFavorite: (image: ImageItem) => void;
  setLoading: (loading: boolean) => void;
} 