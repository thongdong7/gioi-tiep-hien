import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View } from "react-native";
import { Button } from "react-native-elements";
import Icon from "react-native-vector-icons/FontAwesome";
import data from "./data";
import { styles } from "./styles";

export function NavigateButton({ id, title, icon }) {
  const navigation = useNavigation();

  return (
    <View style={{ paddingRight: 8 }}>
      <Button
        title={title}
        icon={<Icon name={icon} size={24} color="#0D6277" />}
        onPress={() => {
          navigation.navigate(data[id].title, { id });
        }}
        buttonStyle={styles.navigateButton}
      />
    </View>
  );
}
