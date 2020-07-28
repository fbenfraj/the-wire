import React, { Component } from "react";
import { Container, Content, Text } from "native-base";

const UsersScreen = () => {
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
          Users Screen
        </Text>
      </Content>
    </Container>
  );
};

export default UsersScreen;
