import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';
import { ImageItem } from '../types/image';

const { width } = Dimensions.get('window');
const numColumns = 2;
const imageSize = width / numColumns;

interface Props {
  item: ImageItem;
}

export const ImageGridItem: React.FC<Props> = ({ item }) => {
  return (
    <View style={styles.imageContainer}>
      <Image
        source={{ uri: item.url }}
        style={styles.image}
        resizeMode="cover"
        // Podrías añadir un placeholder o indicador de carga por imagen aquí
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    width: imageSize,
    height: imageSize,
    padding: 2,
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
}); 