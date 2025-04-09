import React from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { ImageItem } from '../types/image';

const { width } = Dimensions.get('window');
const numColumns = 2;
const imageSize = width / numColumns;

interface Props {
  item: ImageItem;
  isFavorite: boolean;
  onToggleFavorite: (item: ImageItem) => void;
}

export const ImageGridItem: React.FC<Props> = ({ item, isFavorite, onToggleFavorite }) => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={{ uri: item.url }}
        style={styles.image}
        resizeMode="cover"
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