import React from "react";
import { Text } from "react-native";
import { styles } from "./styles";

export function Paragraph({ children }) {
  return <Text style={styles.text}>{children}</Text>;
}
