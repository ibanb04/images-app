import React from 'react';
import { View } from 'react-native';
import { ImageItem } from '../../../types';
import { CachedImage } from '../../common/CachedImage';
import { FavoriteButton } from '../FavoriteButton';
import { styles } from './styles';

interface ImageGridItemProps {
  item: ImageItem;
  isFavorite: boolean;
  onToggleFavorite: (item: ImageItem) => void;
}

export const ImageGridItem: React.FC<ImageGridItemProps> = ({
  item,
  isFavorite,
  onToggleFavorite,
}) => (
  <View style={styles.container}>
    <CachedImage
      uri={item.url}
      style={styles.image}
      resizeMode="cover"
    />
    <FavoriteButton
      isFavorite={isFavorite}
      onPress={() => onToggleFavorite(item)}
    />
  </View>
); 