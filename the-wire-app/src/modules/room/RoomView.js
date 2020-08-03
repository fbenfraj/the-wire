import React, { Component } from "react";
import {
  Container,
  Content,
  Text,
} from "native-base";

const RoomView = ({ route }) => {
	const { roomId } = route.params

  return (
    <Container>
      <Content>
        <Text>Room {roomId}</Text>
      </Content>
    </Container>
  );
};

export default RoomView;
