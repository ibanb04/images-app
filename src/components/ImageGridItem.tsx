import React from 'react';
import { View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { ImageItem } from '../types/image';
import CachedImage from './CachedImage';
import { NUM_COLUMNS } from '../utils/constants';

const { width } = Dimensions.get('window');
const imageSize = width / NUM_COLUMNS;

interface Props {
  item: ImageItem;
  isFavorite: boolean;
  onToggleFavorite: (item: ImageItem) => void;
}

export const ImageGridItem: React.FC<Props> = ({ item, isFavorite, onToggleFavorite }) => {
  return (
    <View style={styles.imageContainer}>
      <CachedImage
        imageUrl={item.url}
        style={styles.image}
      />
      <TouchableOpacity
        style={styles.favoriteButton}
        onPress={() => onToggleFavorite(item)}
      >
        <MaterialIcons
          name={isFavorite ? 'favorite' : 'favorite-border'}
          size={24}
          color={isFavorite ? 'red' : 'white'}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: imageSize,
    height: imageSize,
    padding: 2,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  favoriteButton: {
    position: 'absolute',
    top: 8,
    right: 8,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 4,
    borderRadius: 15,
  },
}); 