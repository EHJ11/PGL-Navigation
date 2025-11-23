import { View, Text, Button, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";

export default function Welcome() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>¡Bienvenido a mi App!</Text>
      <Image
        source={require("../assets/welcome-image.png")}
        style={styles.image}
      />
      <Button
        title="Ir a mi Portfolio"
        onPress={() => router.push("/portfolio")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: { fontSize: 28, fontWeight: "bold", marginBottom: 20 },
  image: { width: 250, height: 250, marginBottom: 30, borderRadius: 20 },
});
