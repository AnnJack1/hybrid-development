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