# Ejercicio 3 – Pantalla de bienvenida

## Descripción

Se ha creado `app/welcome.tsx`, una pantalla de bienvenida sencilla que el usuario ve al abrir la aplicación.

## Elementos de la pantalla

- **Mensaje de bienvenida**: Título y subtítulo que dan la bienvenida al usuario.
- **Imagen**: Imagen decorativa cargada desde los assets locales.
- **Botón de navegación**: Botón que lleva al usuario directamente a la pestaña de Hobbies del portfolio.

## Lógica de navegación

Se utiliza el hook `useRouter` de Expo Router para navegar programáticamente al pulsar el botón:

```tsx
import { useRouter } from "expo-router";

const router = useRouter();

// Al pulsar el botón:
router.push("/(tabs)/hobbies");
```

## Redirección desde la raíz

El fichero `app/index.tsx` redirige automáticamente a `/welcome` al iniciar la app, garantizando que la pantalla de bienvenida sea siempre la primera en mostrarse:

```tsx
import { Redirect } from "expo-router";

export default function Index() {
  return <Redirect href="/welcome" />;
}
```

De esta forma, la ruta `/` nunca se ve directamente, sino que el usuario llega siempre a la pantalla de bienvenida.
