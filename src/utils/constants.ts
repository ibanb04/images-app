import { Dimensions } from 'react-native';

export const SCREEN_WIDTH = Dimensions.get('window').width;
export const NUM_COLUMNS = 2;
export const IMAGE_SIZE = SCREEN_WIDTH / NUM_COLUMNS;

export const CACHE_DIRECTORY = 'images/';
export const CACHE_DURATION = 7 * 24 * 60 * 60 * 1000; // 7 días en milisegundos

export const API_BASE_URL = 'https://picsum.photos/v2';
export const IMAGES_PER_PAGE = 10;