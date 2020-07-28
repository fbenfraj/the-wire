import React, { Component } from "react";
import {
  Container,
  Content,
  Left,
  Right,
  Body,
  Text,
  ListItem,
  Thumbnail,
  Badge,
  Fab,
  Icon,
  View,
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
      </Content>
      <Fab>
        <Icon name="chat" type="MaterialIcons" />
      </Fab>
    </Container>
  );
};

export default RoomsScreen;
