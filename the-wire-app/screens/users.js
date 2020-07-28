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
  ListItem,
  List,
  View
} from "native-base";

const users = [{
  name: 'User 1'
}, {
  name: 'User 2'
}, {
  name: 'User 3'
}]

const RoomsScreen = () => {
  return (
    <Container>
      <Content>
        <List>
          {users.map((user, i) => (
            <ListItem
              key={i}
              noIndent>
              <Text>{user.name}</Text>
            </ListItem>
          ))}
        </List>
      </Content>
    </Container>
  );
};

export default RoomsScreen;
