import { StyleSheet } from 'react-native';
import { IMAGE_SIZE } from '../../../utils/constants';
import { spacing, borderRadius } from '../../../theme';

export const styles = StyleSheet.create({
  container: {
    width: IMAGE_SIZE,
    height: IMAGE_SIZE,
    padding: spacing.xs,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: borderRadius.sm,
  },
}); 