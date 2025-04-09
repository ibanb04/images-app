import React from 'react';
import { ActivityIndicator, View } from 'react-native';
import { colors } from '../../../theme';
import { styles } from './styles';

interface LoadingIndicatorProps {
  size?: 'small' | 'large';
  color?: string;
  fullScreen?: boolean;
}

export const LoadingIndicator: React.FC<LoadingIndicatorProps> = ({
  size = 'small',
  color = colors.primary,
  fullScreen = false,
}) => (
  <View style={[styles.container, fullScreen && styles.fullScreen]}>
    <ActivityIndicator size={size} color={color} />
  </View>
); 