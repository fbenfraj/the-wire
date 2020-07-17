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

const StatusScreen = () => {
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
          Status Screen
        </Text>
      </Content>
    </Container>
  );
};

export default StatusScreen;
