import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#3498db",
        tabBarInactiveTintColor: "#999",
      }}
    >
      <Tabs.Screen
        name="hobbies"
        options={{
          title: "Hobbies",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="qr"
        options={{
          title: "Mi Repo",
          headerShown: false,
        }}
      />
      <Tabs.Screen
        name="figuritas"
        options={{
          title: "Figuritas",
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
