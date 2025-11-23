import { Drawer } from "expo-router/drawer";

export default function RootLayout() {
  return (
    <Drawer>
      <Drawer.Screen name="welcome" options={{ title: "Bienvenida" }} />
      <Drawer.Screen name="portfolio" options={{ title: "Portfolio" }} />
      <Drawer.Screen name="recuento" options={{ title: "Recuento" }} />
    </Drawer>
  );
}
