import React from "react";
import { View } from "react-native";
import { Head } from "./Head";
import { Paragraph } from "./Paragraph";

export function Gioi({ title, content }) {
  return (
    <View>
      {title && <Head>{title}</Head>}
      <Paragraph>{content}</Paragraph>
    </View>
  );
}
