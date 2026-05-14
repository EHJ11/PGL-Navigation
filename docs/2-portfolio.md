# Ejercicio 2 – Reciclado del portfolio

Se ha integrado el portfolio de la unidad anterior en este proyecto, adaptándolo al sistema de ficheros de Expo Router.

## Estructura creada

### Pantalla de Hobbies (`app/(tabs)/hobbies.tsx`)

Muestra la lista de aficiones personales. Incluye:
- El componente `PortfolioHeader` en la parte superior.
- Botón para alternar entre tema claro y oscuro.
- Lista de hobbies con estilos diferenciados.

### Pantalla del QR (`app/(tabs)/qr.tsx`)

Muestra el enlace al repositorio de GitHub. Incluye:
- El componente `PortfolioHeader` en la parte superior.
- Botón para alternar entre tema claro y oscuro.
- Placeholder del código QR y botón para abrir el repositorio.

### Componente de cabecera (`components/PortfolioHeader.tsx`)

Componente reutilizable que muestra la imagen de perfil y la descripción personal. Se usa en ambas pestañas para que la cabecera siempre sea visible independientemente de la pestaña activa.

```tsx
// Uso en cada pantalla del tab
import PortfolioHeader from "../../components/PortfolioHeader";

// Dentro del render:
<PortfolioHeader darkMode={darkMode} />
```

### Layout de Tabs (`app/(tabs)/_layout.tsx`)

Configura la navegación por pestañas entre Hobbies y QR:

```tsx
import { Tabs } from "expo-router";

export default function TabsLayout() {
  return (
    <Tabs screenOptions={{ tabBarActiveTintColor: "#3498db" }}>
      <Tabs.Screen name="hobbies" options={{ title: "Hobbies", headerShown: false }} />
      <Tabs.Screen name="qr" options={{ title: "Mi Repo", headerShown: false }} />
    </Tabs>
  );
}
```

> Se usa `headerShown: false` en cada tab para evitar una doble cabecera, ya que el Drawer proporciona la suya propia.
