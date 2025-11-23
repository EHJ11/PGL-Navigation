import { useState } from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";

export default function CounterScreen() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(0);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador</Text>

      <View style={styles.counterContainer}>
        <Text style={styles.counterText}>{count}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <Pressable style={styles.button} onPress={decrement}>
          <Text style={styles.buttonText}>-</Text>
        </Pressable>

        <Pressable style={[styles.button, styles.resetButton]} onPress={reset}>
          <Text style={styles.buttonText}>Reset</Text>
        </Pressable>

        <Pressable style={styles.button} onPress={increment}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 40,
  },
  counterContainer: {
    width: 200,
    height: 200,
    borderRadius: 100,
    backgroundColor: "#3498db",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 40,
  },
  counterText: {
    fontSize: 72,
    fontWeight: "bold",
    color: "#fff",
  },
  buttonsContainer: {
    flexDirection: "row",
    gap: 20,
  },
  button: {
    backgroundColor: "#3498db",
    width: 80,
    height: 80,
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  resetButton: {
    backgroundColor: "#e74c3c",
  },
  buttonText: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});
