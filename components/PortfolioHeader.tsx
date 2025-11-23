import { View, Text, Image, StyleSheet } from "react-native";

interface PortfolioHeaderProps {
  darkMode?: boolean;
}

export default function PortfolioHeader({
  darkMode = false,
}: PortfolioHeaderProps) {
  const theme = darkMode
    ? {
        card: "#2a2a3c",
        text: "#f0f0f5",
      }
    : {
        card: "#eee",
        text: "#000",
      };

  return (
    <View style={styles.container}>
      <Image style={styles.avatar} source={require("../assets/icon.png")} />
      <View style={[styles.infoCard, { backgroundColor: theme.card }]}>
        <Text style={[styles.title, { color: theme.text }]}>
          Descripción sobre mí!
        </Text>
        <Text style={[styles.description, { color: theme.text }]}>
          Soy profe y me gusta mi trabajo aunque a veces me de por enrevesar
          prácticas para mis queridos alumnos.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  avatar: {
    height: 90,
    width: 90,
    borderRadius: 45,
  },
  infoCard: {
    margin: 10,
    padding: 10,
    borderRadius: 10,
    flex: 1,
  },
  title: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 20,
    marginBottom: 5,
  },
  description: {
    textAlign: "center",
  },
});
