import React from "react";
import { ScrollView, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import data from "./data";
import { NavigateButton } from "./NavigateButton";
import { Head } from "./Head";
import { Gioi } from "./Gioi";
import { styles } from "./styles";

export function GioiScreen({
  navigation,
  route: {
    params: { id },
  },
}) {
  const previousId = id - 1;
  const nextId = id + 1;
  return (
    <ScrollView style={styles.scroll}>
      <View style={{ flex: 1, flexDirection: "row", paddingBottom: 8 }}>
        <TouchableOpacity
          style={{ padding: 4 }}
          onPress={() => navigation.toggleDrawer()}
        >
          <Icon name="bars" size={24} color="#aaa" />
        </TouchableOpacity>
        <View style={styles.headerTitle}>
          <Head>14 giới Tiếp Hiện tân tu</Head>
        </View>
      </View>
      <View style={{ paddingLeft: 16, paddingRight: 16 }}>
        <Gioi title={data[id].title} content={data[id].content} />
      </View>
      <View
        style={{
          paddingLeft: 8,
          flexDirection: "row",
          justifyContent: "center",
          marginBottom: 16,
        }}
      >
        {previousId >= 0 && (
          <NavigateButton id={previousId} icon="arrow-left" />
        )}
        {nextId < data.length && (
          <NavigateButton id={nextId} icon="arrow-right" />
        )}
      </View>
    </ScrollView>
  );
}
