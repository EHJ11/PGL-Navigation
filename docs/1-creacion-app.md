# Ejercicio 1 – Creación de la app con navegación por ficheros

## Creación del proyecto

Se ha creado la aplicación usando el siguiente comando, seleccionando la plantilla **Blank (TypeScript)**:

```bash
npx create-expo-app --template
```

Al ejecutarlo, el asistente muestra las plantillas disponibles. Se selecciona `Blank (TypeScript)` para obtener un proyecto limpio con soporte TypeScript.

## Inicialización de Expo Router

Según la [documentación oficial de Expo Router](https://docs.expo.dev/router/installation/), se realizaron los siguientes pasos:

### 1. Instalación de dependencias

```bash
npx expo install expo-router react-native-safe-area-context react-native-screens expo-linking expo-constants expo-status-bar
```

Para el Drawer también se necesita:

```bash
npx expo install @react-navigation/drawer react-native-gesture-handler react-native-reanimated
```

### 2. Modificación de `package.json`

Se cambió el punto de entrada (`main`) para que Expo Router tome el control:

```json
{
  "main": "expo-router/entry"
}
```

### 3. Modificación de `app.json`

Se añadió el esquema de enlaces necesario para el enrutamiento:

```json
{
  "expo": {
    "scheme": "pgl-navigation"
  }
}
```

### 4. Estructura de ficheros

El enrutamiento se gestiona mediante la carpeta `app/`. Cada fichero `.tsx` dentro de ella se convierte automáticamente en una ruta de la aplicación:

```
app/
├── _layout.tsx          ← Layout raíz con el Drawer
├── index.tsx            ← Redirige a /welcome
├── welcome.tsx          ← Pantalla de bienvenida
├── recuento.tsx         ← Pantalla de lista de recuento
└── (tabs)/
    ├── _layout.tsx      ← Layout de tabs del portfolio
    ├── hobbies.tsx      ← Pestaña de hobbies
    └── qr.tsx           ← Pestaña del código QR
```
