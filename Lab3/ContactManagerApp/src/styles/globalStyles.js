import { StyleSheet } from 'react-native';

export const Colors = {
  background: '#020617',
  surface: '#020617',
  primary: '#3B82F6',
  secondary: '#22C55E',
  accent: '#F97316',
  text: '#F9FAFB',
  muted: '#9CA3AF',
  border: '#1F2937',
};

export const Fonts = {
  small: 12,
  medium: 16,
  large: 20,
  xlarge: 24,
};

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
};

export const globalStyles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: Colors.background,
    paddingHorizontal: Spacing.md,
    paddingTop: Spacing.lg,
  },
  centered: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    backgroundColor: Colors.surface,
    borderRadius: 12,
    padding: Spacing.md,
    marginBottom: Spacing.sm,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: Fonts.large,
    color: Colors.text,
    fontWeight: '600',
  },
  subtitle: {
    fontSize: Fonts.medium,
    color: Colors.muted,
  },
  button: {
    backgroundColor: Colors.primary,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
    borderRadius: 999,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: Colors.text,
    fontSize: Fonts.medium,
    fontWeight: '600',
  },
  input: {
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: 8,
    paddingVertical: Spacing.sm,
    paddingHorizontal: Spacing.md,
    color: Colors.text,
    marginBottom: Spacing.sm,
  },
  inputError: {
    borderColor: Colors.accent,
  },
  errorText: {
    color: Colors.accent,
    fontSize: Fonts.small,
    marginTop: Spacing.xs,
  },
});
