# Ejercicio 5 – Lista de recuento

## Descripción

Se ha reciclado la funcionalidad de lista de recuento de la práctica anterior y añadido como una nueva pantalla accesible desde el Drawer en `app/recuento.tsx`.

## Funcionalidad

La pantalla permite:
- **Añadir elementos** mediante un campo de texto y un botón `+` (o pulsando "Enter" en el teclado).
- **Contabilizar repeticiones**: si se introduce un elemento que ya existe en la lista, su contador aumenta en 1 en lugar de añadirse de nuevo.
- **Eliminar elementos** individualmente con el botón `✕`.

## Lógica de recuento

```tsx
const addItem = () => {
  const trimmed = inputText.trim();
  if (!trimmed) return;

  const existing = items.find(
    (i) => i.text.toLowerCase() === trimmed.toLowerCase()
  );

  if (existing) {
    // Incrementar el contador del elemento existente
    setItems(items.map((i) =>
      i.id === existing.id ? { ...i, count: i.count + 1 } : i
    ));
  } else {
    // Añadir nuevo elemento con count = 1
    setItems([...items, { id: Date.now().toString(), text: trimmed, count: 1 }]);
  }

  setInputText("");
};
```

## Acceso desde el Drawer

La pantalla es accesible desde el menú lateral bajo el nombre **"Lista de Recuento"**, registrada en el layout raíz:

```tsx
<Drawer.Screen
  name="recuento"
  options={{ drawerLabel: "Lista de Recuento", title: "Lista de Recuento" }}
/>
```
