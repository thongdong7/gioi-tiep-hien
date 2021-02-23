import {
  OldStandardTT_400Regular,
  useFonts,
} from "@expo-google-fonts/old-standard-tt";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import React, { useRef, useState, useEffect } from "react";
import { StyleSheet, Linking, Platform } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./styles";
import data from "./data";
import { GioiScreen } from "./GioiScreen";
const PERSISTENCE_KEY = "NAVIGATION_STATE";

const Drawer = createDrawerNavigator();

export default function App() {
  let [fontsLoaded] = useFonts({
    OldStandardTT_400Regular,
  });
  const [isReady, setIsReady] = useState(false);
  const [initialState, setInitialState] = useState();

  useEffect(() => {
    const restoreState = async () => {
      try {
        const initialUrl = await Linking.getInitialURL();

        if (Platform.OS !== "web" && initialUrl == null) {
          // Only restore state if there's no deep link and we're not on web
          const savedStateString = await AsyncStorage.getItem(PERSISTENCE_KEY);
          const state = savedStateString
            ? JSON.parse(savedStateString)
            : undefined;

          if (state !== undefined) {
            setInitialState(state);
          }
        }
      } finally {
        setIsReady(true);
      }
    };

    if (!isReady) {
      restoreState();
    }
  }, [isReady]);

  if (!isReady || !fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <NavigationContainer
      initialState={initialState}
      onStateChange={(state) =>
        AsyncStorage.setItem(PERSISTENCE_KEY, JSON.stringify(state))
      }
    >
      <Drawer.Navigator
        initialRouteName={data[0].title}
        // overlayColor="transparent"
        drawerStyle={styles.drawer}
      >
        {data.map((item, k) => (
          <Drawer.Screen
            key={k}
            name={item.title}
            component={GioiScreen}
            initialParams={{ id: k }}
          />
        ))}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
