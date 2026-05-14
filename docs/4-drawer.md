# Ejercicio 4 – Implementación del Drawer

## Descripción

Se ha implementado un Drawer (menú lateral) como navegación principal de la aplicación, configurado en `app/_layout.tsx`.

## Instalación de dependencias

El Drawer de Expo Router requiere las siguientes librerías:

```bash
npx expo install @react-navigation/drawer react-native-gesture-handler react-native-reanimated
```

También es necesario añadir el plugin de Reanimated en `babel.config.js`:

```js
module.exports = {
  presets: ['babel-preset-expo'],
  plugins: ['react-native-reanimated/plugin'],
};
```

## Configuración del layout raíz

El fichero `app/_layout.tsx` define el Drawer con todas las pantallas de la aplicación:

```tsx
import { Drawer } from "expo-router/drawer";

export default function Layout() {
  return (
    <Drawer>
      {/* index oculto del menú: solo redirige a welcome */}
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
    </Drawer>
  );
}
```

## Pantalla inicial por defecto

Gracias a la combinación de `app/index.tsx` (que hace `<Redirect href="/welcome" />`) y el Drawer, la app arranca siempre en la pantalla de **Bienvenida**.

La ruta `index` se oculta del menú con `drawerItemStyle: { display: "none" }` para que no aparezca como opción repetida junto a "Bienvenida".

## Pantallas incluidas en el Drawer

| Pantalla | Ruta | Visible en menú |
|---|---|---|
| Bienvenida | `/welcome` | ✅ |
| Mi Portfolio | `/(tabs)` | ✅ |
| Lista de Recuento | `/recuento` | ✅ |
| Inicio (redirect) | `/` | ❌ |
