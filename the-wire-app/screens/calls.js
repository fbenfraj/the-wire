import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
} from "native-base";

const CallsScreen = () => {
  return (
    <Container>
      <Content>
        <Text
          style={{
            textAlign: "center",
            flex: 1,
            textAlignVertical: "center",
          }}
        >
          Calls Screen
        </Text>
      </Content>
    </Container>
  );
};

export default CallsScreen;
