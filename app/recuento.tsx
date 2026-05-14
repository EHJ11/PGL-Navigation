import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  Pressable,
} from "react-native";

interface ListItem {
  id: string;
  text: string;
  count: number;
}

export default function RecuentoScreen() {
  const [items, setItems] = useState<ListItem[]>([]);
  const [inputText, setInputText] = useState("");

  const addItem = () => {
    const trimmed = inputText.trim();
    if (!trimmed) return;

    const existing = items.find(
      (i) => i.text.toLowerCase() === trimmed.toLowerCase(),
    );

    if (existing) {
      setItems(
        items.map((i) =>
          i.id === existing.id ? { ...i, count: i.count + 1 } : i,
        ),
      );
    } else {
      setItems([
        ...items,
        { id: Date.now().toString(), text: trimmed, count: 1 },
      ]);
    }

    setInputText("");
  };

  const removeItem = (id: string) => {
    setItems(items.filter((i) => i.id !== id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Recuento</Text>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Añadir elemento..."
          onSubmitEditing={addItem}
          returnKeyType="done"
        />
        <Pressable style={styles.addButton} onPress={addItem}>
          <Text style={styles.addButtonText}>+</Text>
        </Pressable>
      </View>

      {items.length === 0 ? (
        <Text style={styles.emptyText}>No hay elementos. Añade el primero</Text>
      ) : (
        <FlatList
          data={items}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <View style={styles.itemRow}>
              <Text style={styles.itemText}>{item.text}</Text>
              <View style={styles.itemRight}>
                <View style={styles.badge}>
                  <Text style={styles.badgeText}>{item.count}</Text>
                </View>
                <Pressable
                  style={styles.deleteButton}
                  onPress={() => removeItem(item.id)}
                >
                  <Text style={styles.deleteText}>✕</Text>
                </Pressable>
              </View>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#3498db",
  },
  inputRow: {
    flexDirection: "row",
    marginBottom: 20,
    gap: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
  },
  addButton: {
    backgroundColor: "#3498db",
    width: 48,
    height: 48,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonText: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    lineHeight: 32,
  },
  emptyText: {
    textAlign: "center",
    color: "#999",
    fontSize: 16,
    marginTop: 40,
  },
  itemRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#f0f4f8",
    padding: 14,
    borderRadius: 8,
    marginBottom: 8,
  },
  itemText: {
    fontSize: 16,
    flex: 1,
  },
  itemRight: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  badge: {
    backgroundColor: "#3498db",
    borderRadius: 20,
    minWidth: 32,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 6,
  },
  badgeText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 14,
  },
  deleteButton: {
    backgroundColor: "#e74c3c",
    width: 32,
    height: 32,
    borderRadius: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  deleteText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
