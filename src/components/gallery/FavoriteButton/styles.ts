import { StyleSheet } from 'react-native';
import { colors, spacing, borderRadius } from '../../../theme';

export const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    top: spacing.md,
    right: spacing.md,
    backgroundColor: colors.overlay,
    padding: spacing.sm,
    borderRadius: borderRadius.lg,
  },
}); 