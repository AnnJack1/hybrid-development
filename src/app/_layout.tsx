<<<<<<< HEAD
=======
<<<<<<< HEAD
import { Tabs } from 'expo-router';

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen name="planets" options={{ title: 'Planets' }} />
      <Tabs.Screen name="films" options={{ title: 'Films' }} />
      <Tabs.Screen name="spaceships" options={{ title: 'Spaceships' }} />
    </Tabs>
  );
}
=======
>>>>>>> e47927d867726ad004f1bc697d5612bd3eb62bdd
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import React from 'react';
import { useColorScheme } from 'react-native';

import { AnimatedSplashOverlay } from '@/components/animated-icon';
import AppTabs from '@/components/app-tabs';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <AnimatedSplashOverlay />
      <AppTabs />
    </ThemeProvider>
  );
}
<<<<<<< HEAD
=======
>>>>>>> 85d2cc6aa6e4e7575d86285ae56563d82b51719c
>>>>>>> e47927d867726ad004f1bc697d5612bd3eb62bdd
