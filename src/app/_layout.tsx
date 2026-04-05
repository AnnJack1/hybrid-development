import React from 'react';
import { Platform } from 'react-native';
import { Tabs, Drawer } from 'expo-router';

export default function Layout() {
  if (Platform.OS === 'android') {
    return (
      <Drawer>
        <Drawer.Screen name="planets" options={{ title: 'Planets' }} />
        <Drawer.Screen name="films" options={{ title: 'Films' }} />
        <Drawer.Screen name="spaceships" options={{ title: 'Spaceships' }} />
      </Drawer>
    );
  }

  return (
    <Tabs>
      <Tabs.Screen name="planets" options={{ title: 'Planets' }} />
      <Tabs.Screen name="films" options={{ title: 'Films' }} />
      <Tabs.Screen name="spaceships" options={{ title: 'Spaceships' }} />
    </Tabs>
  );
}

