import { Drawer } from "expo-router/drawer";
import { Stack } from "expo-router";
import { useEffect, useState } from "react";
import { View, ActivityIndicator, Text } from "react-native";
import { getToken } from "../services/storage.service";

function LoadingScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center", backgroundColor: "#fff" }}>
      <ActivityIndicator size="large" color="#3498db" />
      <Text style={{ marginTop: 10, fontSize: 12, color: "#666" }}>Cargando...</Text>
    </View>
  );
}

export default function RootLayout() {
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkSession();
  }, []);

  async function checkSession() {
    try {
      const timeoutPromise = new Promise<null>((_, reject) =>
        setTimeout(() => reject(new Error("Timeout")), 5000)
      );
      const token = (await Promise.race([getToken(), timeoutPromise])) as string | null;
      setIsAuthenticated(!!token);
    } catch {
      setIsAuthenticated(false);
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <LoadingScreen />;

  if (!isAuthenticated) {
    return (
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="login" />
        <Stack.Screen name="register" />
      </Stack>
    );
  }

  return (
    <Drawer>
      <Drawer.Screen
        name="index"
        options={{ drawerItemStyle: { display: "none" }, title: "Inicio" }}
      />
      <Drawer.Screen
        name="welcome"
        options={{ drawerLabel: "Bienvenida", title: "Bienvenida" }}
      />
      <Drawer.Screen
        name="(tabs)"
        options={{ drawerLabel: "Mi Portfolio", title: "Portfolio" }}
      />
      <Drawer.Screen
        name="recuento"
        options={{ drawerLabel: "Lista de Recuento", title: "Lista de Recuento" }}
      />
      <Drawer.Screen
        name="notion"
        options={{ drawerLabel: "Notion", title: "Notion" }}
      />
      <Drawer.Screen
        name="login"
        options={{ drawerItemStyle: { display: "none" }, title: "Login" }}
      />
      <Drawer.Screen
        name="register"
        options={{ drawerItemStyle: { display: "none" }, title: "Registro" }}
      />
    </Drawer>
  );
}
