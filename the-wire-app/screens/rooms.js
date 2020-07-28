import React, { Component } from "react";
import { StyleSheet } from "react-native";
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

const rooms = [{
  title: 'Room 1',
  participants: [{
    name: 'User 1'
  }, {
    name: 'User 2'
  }]
}, {
  title: 'Room 2',
  participants: [{
    name: 'User 3'
  }]
}]

const styles = StyleSheet.create({
  userList: {
    borderBottomColor: 'transparent',
    paddingLeft: 24,
    paddingTop: 8,
    paddingBottom: 8
  },
  userText: {
    fontSize: 14
  }
})

const RoomsScreen = () => {
  return (
    <Container>
      <Content>
        <List>
          {rooms.map((room, i) => (
            <View
              key={i}
              >
              <ListItem
                noIndent
                leftIcon={{ name: 'volume_up' }}
                button
                onPress={() => null}>
                <Text>{room.title}</Text>
              </ListItem>
              {room.participants.map((participant, i) => (
                <ListItem
                  key={i}
                  style={styles.userList}>
                  <Text style={styles.userText}>{participant.name}</Text>
                </ListItem>
              ))}
            </View>
          ))}
        </List>
      </Content>
    </Container>
  );
};

export default RoomsScreen;
