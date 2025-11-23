import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{
          drawerLabel: "Bienvenida",
          title: "Inicio",
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
        name="counter"
        options={{
          drawerLabel: "Contador",
          title: "Lista de Recuento",
        }}
      />
    </Drawer>
  );
}
