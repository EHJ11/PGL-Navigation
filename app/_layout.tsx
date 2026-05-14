import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="recuento" options={{ title: "Recuento" }} />
      <Stack.Screen name="counter" options={{ title: "Contador" }} />
    </Stack>
  );
}
