import { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
  Modal,
  ScrollView,
  Image,
  Alert,
} from "react-native";
import { v4 as uuidv4 } from "uuid";
import PortfolioHeader from "../../components/PortfolioHeader";
import ProductItem, {
  CATEGORIES,
  getImageForCategory,
} from "../../components/ProductItem";
import { Product } from "../../types/product";

export default function FiguritasScreen() {
  const [products, setProducts] = useState<Product[]>([]);

  // ✅ CORREGIDO: estado del modal en lugar de cambio de pantalla
  const [modalVisible, setModalVisible] = useState(false);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const handleAddProduct = () => {
    if (!name.trim() || !price.trim() || !category) {
      Alert.alert("Error", "Rellena todos los campos antes de guardar");
      return;
    }

    const parsedPrice = parseFloat(price);
    if (isNaN(parsedPrice) || parsedPrice < 0) {
      Alert.alert("Error", "Introduce un precio válido");
      return;
    }

    const newProduct: Product = {
      id: uuidv4(), // ✅ CORREGIDO: uuid en lugar de Date.now()
      name: name.trim(),
      category,
      price: parsedPrice,
      marked: false,
    };

    setProducts((prev) => [...prev, newProduct]);
    setName("");
    setPrice("");
    setCategory("");
    setDropdownOpen(false);
    setModalVisible(false);
  };

  const toggleMark = (id: string) =>
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, marked: !p.marked } : p))
    );

  const deleteProduct = (id: string) =>
    setProducts((prev) => prev.filter((p) => p.id !== id));

  // ✅ CORREGIDO: borrar todos
  const clearAll = () => {
    Alert.alert(
      "Borrar todo",
      "¿Seguro que quieres eliminar todas las figuritas?",
      [
        { text: "Cancelar", style: "cancel" },
        { text: "Borrar", style: "destructive", onPress: () => setProducts([]) },
      ]
    );
  };

  const totalItems = products.length;
  // ✅ CORREGIDO: contadores de marcados y precio total de marcados
  const markedItems = products.filter((p) => p.marked).length;
  const totalPriceMarked = products
    .filter((p) => p.marked)
    .reduce((acc, p) => acc + p.price, 0)
    .toFixed(2);

  const selectedImage = category ? getImageForCategory(category) : null;

  return (
    <View style={styles.container}>
      <PortfolioHeader />

      <View style={styles.headerBox}>
        <Text style={styles.headerText}>Figuras de plomo.es</Text>
      </View>

      {/* ✅ CORREGIDO: contadores completos */}
      <View style={styles.statsRow}>
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>Total</Text>
          <Text style={styles.statValue}>{totalItems}</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>Marcadas</Text>
          <Text style={styles.statValue}>{markedItems}</Text>
        </View>
        <View style={styles.statBox}>
          <Text style={styles.statLabel}>Precio marcadas</Text>
          <Text style={styles.statValue}>{totalPriceMarked} €</Text>
        </View>
      </View>

      <View style={styles.actionsRow}>
        <TouchableOpacity
          style={styles.btnAdd}
          onPress={() => setModalVisible(true)}
          activeOpacity={0.8}
        >
          <Text style={styles.btnAddText}>+ Añadir figurita</Text>
        </TouchableOpacity>

        {/* ✅ CORREGIDO: botón borrar todos deshabilitado si lista vacía */}
        <TouchableOpacity
          style={[styles.btnClear, totalItems === 0 && styles.btnDisabled]}
          onPress={clearAll}
          disabled={totalItems === 0}
          activeOpacity={0.8}
        >
          <Text style={styles.btnClearText}>Borrar todo</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        style={styles.listScroll}
        contentContainerStyle={{ paddingBottom: 16 }}
        ListEmptyComponent={
          <View style={styles.emptyBox}>
            <Text style={styles.emptyText}>
              No hay figuritas. ¡Añade la primera!
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <ProductItem
            item={item}
            onToggle={toggleMark}
            onDelete={deleteProduct}
          />
        )}
      />

      {/* ✅ CORREGIDO: Modal real de React Native */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            <ScrollView keyboardShouldPersistTaps="handled">
              <Text style={styles.modalTitle}>Nueva figurita</Text>

              <TextInput
                style={styles.input}
                placeholder="Nombre"
                placeholderTextColor="#5b8dd9"
                value={name}
                onChangeText={setName}
              />

              <TextInput
                style={styles.input}
                placeholder="Precio"
                placeholderTextColor="#5b8dd9"
                keyboardType="numeric"
                value={price}
                onChangeText={setPrice}
              />

              <TouchableOpacity
                style={[styles.input, styles.dropdown]}
                onPress={() => setDropdownOpen(!dropdownOpen)}
                activeOpacity={0.8}
              >
                <Text
                  style={
                    category ? styles.dropdownSelected : styles.dropdownPlaceholder
                  }
                >
                  {category || "Selecciona categoría"}
                </Text>
                <Text style={styles.dropdownArrow}>
                  {dropdownOpen ? "▲" : "▼"}
                </Text>
              </TouchableOpacity>

              {dropdownOpen && (
                <View style={styles.dropdownList}>
                  {CATEGORIES.map((cat) => (
                    <TouchableOpacity
                      key={cat.label}
                      style={[
                        styles.dropdownItem,
                        category === cat.label && styles.dropdownItemSelected,
                      ]}
                      onPress={() => {
                        setCategory(cat.label);
                        setDropdownOpen(false);
                      }}
                      activeOpacity={0.7}
                    >
                      <Image
                        source={cat.image}
                        style={styles.dropdownItemImage}
                        resizeMode="contain"
                      />
                      <Text style={styles.dropdownItemText}>{cat.label}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              )}

              {selectedImage && !dropdownOpen && (
                <View style={styles.previewBox}>
                  <Image
                    source={selectedImage}
                    style={styles.previewImage}
                    resizeMode="contain"
                  />
                </View>
              )}

              <TouchableOpacity
                style={styles.btnSave}
                onPress={handleAddProduct}
                activeOpacity={0.8}
              >
                <Text style={styles.btnSaveText}>Guardar figurita</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.btnCancel}
                onPress={() => {
                  setModalVisible(false);
                  setName("");
                  setPrice("");
                  setCategory("");
                  setDropdownOpen(false);
                }}
                activeOpacity={0.8}
              >
                <Text style={styles.btnCancelText}>Cancelar</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#dce8f5" },
  headerBox: {
    backgroundColor: "#90c4f0",
    borderRadius: 20,
    marginHorizontal: 12,
    marginBottom: 8,
    paddingVertical: 16,
    paddingHorizontal: 20,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#5b9fd4",
  },
  headerText: {
    fontSize: 22,
    fontWeight: "800",
    color: "#0d2f55",
    letterSpacing: 0.5,
    fontStyle: "italic",
  },
  statsRow: {
    flexDirection: "row",
    marginHorizontal: 12,
    marginBottom: 10,
    gap: 8,
  },
  statBox: {
    flex: 1,
    backgroundColor: "#c7e0f5",
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: "#90c4f0",
    alignItems: "center",
    paddingVertical: 8,
  },
  statLabel: { fontSize: 11, color: "#1a3a5c", fontWeight: "600" },
  statValue: { fontSize: 16, fontWeight: "800", color: "#0d2f55" },
  actionsRow: {
    flexDirection: "row",
    marginHorizontal: 12,
    marginBottom: 10,
    gap: 8,
  },
  btnAdd: {
    flex: 2,
    backgroundColor: "#fde68a",
    borderWidth: 1.5,
    borderColor: "#d4a017",
    borderRadius: 14,
    paddingVertical: 12,
    alignItems: "center",
  },
  btnAddText: { fontSize: 14, fontWeight: "700", color: "#7c4a00" },
  btnClear: {
    flex: 1,
    backgroundColor: "#fee2e2",
    borderWidth: 1.5,
    borderColor: "#fca5a5",
    borderRadius: 14,
    paddingVertical: 12,
    alignItems: "center",
  },
  btnClearText: { fontSize: 14, fontWeight: "700", color: "#b91c1c" },
  btnDisabled: { opacity: 0.4 },
  listScroll: { flex: 1, paddingHorizontal: 12 },
  emptyBox: {
    borderWidth: 1.5,
    borderColor: "#90c4f0",
    borderRadius: 14,
    backgroundColor: "#e8f3fc",
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  emptyText: { fontSize: 16, color: "#2563a8", fontWeight: "500" },
  // Modal
  modalOverlay: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.45)",
    justifyContent: "flex-end",
  },
  modalContent: {
    backgroundColor: "#dce8f5",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    padding: 20,
    maxHeight: "90%",
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "800",
    color: "#0d2f55",
    textAlign: "center",
    marginBottom: 16,
  },
  input: {
    backgroundColor: "#e8f3fc",
    borderWidth: 1.5,
    borderColor: "#90c4f0",
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 16,
    marginBottom: 14,
    fontSize: 16,
    color: "#1a3a5c",
  },
  dropdown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  dropdownPlaceholder: { fontSize: 16, color: "#5b8dd9" },
  dropdownSelected: { fontSize: 16, color: "#1a3a5c", fontWeight: "600" },
  dropdownArrow: { fontSize: 14, color: "#5b9fd4" },
  dropdownList: {
    backgroundColor: "#fff",
    borderRadius: 14,
    borderWidth: 1.5,
    borderColor: "#90c4f0",
    marginBottom: 14,
    overflow: "hidden",
  },
  dropdownItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    paddingHorizontal: 14,
    gap: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#e8f3fc",
  },
  dropdownItemSelected: { backgroundColor: "#dce8f5" },
  dropdownItemImage: { width: 40, height: 40 },
  dropdownItemText: { fontSize: 15, color: "#1a3a5c", fontWeight: "500" },
  previewBox: {
    alignItems: "center",
    marginBottom: 14,
    backgroundColor: "#e8f3fc",
    borderRadius: 16,
    borderWidth: 1.5,
    borderColor: "#90c4f0",
    paddingVertical: 16,
  },
  previewImage: { width: 100, height: 100 },
  btnSave: {
    backgroundColor: "#fde68a",
    borderWidth: 1.5,
    borderColor: "#d4a017",
    borderRadius: 16,
    paddingVertical: 16,
    alignItems: "center",
    marginBottom: 10,
  },
  btnSaveText: { fontSize: 16, fontWeight: "700", color: "#7c4a00" },
  btnCancel: {
    backgroundColor: "#e8f3fc",
    borderWidth: 1.5,
    borderColor: "#90c4f0",
    borderRadius: 16,
    paddingVertical: 14,
    alignItems: "center",
    marginBottom: 10,
  },
  btnCancelText: { fontSize: 15, fontWeight: "600", color: "#1a3a5c" },
});
