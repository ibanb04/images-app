import React from 'react';
import { TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

import { colors, iconSize } from '../../../theme';
import { styles } from './styles';

interface FavoriteButtonProps {
  isFavorite: boolean;
  onPress: () => void;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({ isFavorite, onPress }) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <MaterialIcons
      name={isFavorite ? 'favorite' : 'favorite-border'}
      size={iconSize.sm}
      color={isFavorite ? colors.favorite : colors.favoriteBorder}
    />
  </TouchableOpacity>
); 