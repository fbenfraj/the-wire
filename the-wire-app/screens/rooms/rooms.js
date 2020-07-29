import React, { Component, useState } from "react";
import {
  Modal
} from "react-native"
import {
  Container,
  Content,
  Body,
  Text,
  ListItem,
  Fab,
  Icon,
  View,
  Button,
  Form,
  Item,
  Input,
} from "native-base";
import roomStyles from "./roomStyles";

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

const RoomsScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <Container>
      <Content>
        {rooms.map((room, i) => (
          <View key={i}>
            <ListItem
              noIndent
              button
              onPress={() => navigation.navigate('Room', { roomId: i })}>
              {/* <Left>
                <Thumbnail
                  source={{
                    uri:
                      "https://vignette.wikia.nocookie.net/avatar-the-last-airbender-discord/images/2/23/PFP2.jpg/revision/latest?cb=20180911165028",
                  }}
                ></Thumbnail>
              </Left> */}
              <Body>
                <Text>{room.title}</Text>
                {/* <Text note>How are you Younes?</Text> */}
              </Body>
              {/* <Right>
                <Text note style={{ color: "#66D326" }}>
                  3:43PM
                </Text>
                <Badge style={appStyles.badgeChats}>
                  <Text style={appStyles.badgeTextChats}>1</Text>
                </Badge>
              </Right> */}
            </ListItem>
            {room.participants.map((participant, i) => (
              <ListItem key={i} noBorder style={i == room.participants.length - 1 ? roomStyles.participantListItemLast : roomStyles.participantListItem}>
                {/* <Left>
                  <Thumbnail
                    source={{
                      uri:
                        "https://vignette.wikia.nocookie.net/avatar-the-last-airbender-discord/images/2/23/PFP2.jpg/revision/latest?cb=20180911165028",
                    }}
                  ></Thumbnail>
                </Left> */}
                <Body>
                  <Text style={roomStyles.participantListItemText}>{participant.name}</Text>
                  {/* <Text note>How are you Younes?</Text> */}
                </Body>
                {/* <Right>
                  <Text note style={{ color: "#66D326" }}>
                    3:43PM
                  </Text>
                  <Badge style={appStyles.badgeChats}>
                    <Text style={appStyles.badgeTextChats}>1</Text>
                  </Badge>
                </Right> */}
              </ListItem>
            ))}
          </View>
        ))}
        <Modal
          visible={modalVisible}
          transparent
        >
          <View style={roomStyles.centeredView}>
            <View style={roomStyles.modalView}>
              <Form style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                <Item last style={{ marginBottom: 8 }}>
                  <Input placeholder="Room name" />
                </Item>
                {/* TODO: centrer le bouton, ou le mettre sur la droite */}
                <Button primary onPress={() => {
                  setModalVisible(!modalVisible);
                }}>
                  <Text>Add</Text>
                </Button>
              </Form>

            </View>
          </View>
        </Modal>
      </Content>
      <Fab
        onPress={() => setModalVisible(true)}
      >
        <Icon name="add" type="MaterialIcons" />
      </Fab>
    </Container>
  );
};

export default RoomsScreen;
