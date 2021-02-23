import React from "react";
import { Text } from "react-native";
import { styles } from "./styles";

export function Head({ children }) {
  return <Text style={styles.head}>{children}</Text>;
}
