import { ThemeContext } from "@/contexts/ThemeContext";
import { getThemeColors } from "@/utilities/theme";
import React, { useContext } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function SettingsScreen() {
  const themeContext = useContext(ThemeContext);
  if (!themeContext) {
    // You can handle the error as needed, here we throw for clarity
    throw new Error("ThemeContext is undefined. Make sure your component is wrapped in ThemeProvider.");
  }
  const { theme, toggleTheme } = themeContext;
  const colors = getThemeColors(theme);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={{ color: colors.text, marginBottom: 20 }}>
        Current theme: {theme}
      </Text>
      <Button title="Toggle Theme" onPress={toggleTheme} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});