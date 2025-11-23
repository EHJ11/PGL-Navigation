import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="welcome"
        options={{
          drawerLabel: "Bienvenida",
          title: "Bienvenida",
        }}
      />

      <Drawer.Screen
        name="(tabs)"
        options={{
          drawerLabel: "Mi Portfolio",
          title: "Portfolio",
        }}
      />

      <Drawer.Screen
        name="recuento"
        options={{
          drawerLabel: "Recuento",
          title: "Lista de Recuento",
        }}
      />
    </Drawer>
  );
}
