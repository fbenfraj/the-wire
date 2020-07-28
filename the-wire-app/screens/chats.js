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
} from "native-base";
import appStyles from "../appStyles";

const ChatsScreen = () => {
  return (
    <Container>
      <Content>
        <ListItem avatar noBorder>
          <Left>
            <Thumbnail
              source={{
                uri:
                  "https://vignette.wikia.nocookie.net/avatar-the-last-airbender-discord/images/2/23/PFP2.jpg/revision/latest?cb=20180911165028",
              }}
            ></Thumbnail>
          </Left>
          <Body>
            <Text>Farouk Ben Fraj</Text>
            <Text note>How are you Younes?</Text>
          </Body>
          <Right>
            <Text note style={{ color: "#66D326" }}>
              3:43PM
            </Text>
            <Badge style={appStyles.badgeChats}>
              <Text style={appStyles.badgeTextChats}>1</Text>
            </Badge>
          </Right>
        </ListItem>
        <ListItem avatar noBorder>
          <Left>
            <Thumbnail
              source={{
                uri:
                  "https://vignette.wikia.nocookie.net/avatar-the-last-airbender-discord/images/2/23/PFP2.jpg/revision/latest?cb=20180911165028",
              }}
            ></Thumbnail>
          </Left>
          <Body>
            <Text>Farouk Ben Fraj</Text>
            <Text note>How are you Younes?</Text>
          </Body>
          <Right>
            <Text note style={{ color: "#66D326" }}>
              3:43PM
            </Text>
            <Badge style={appStyles.badgeChats}>
              <Text style={appStyles.badgeTextChats}>1</Text>
            </Badge>
          </Right>
        </ListItem>
        <ListItem avatar noBorder>
          <Left>
            <Thumbnail
              source={{
                uri:
                  "https://vignette.wikia.nocookie.net/avatar-the-last-airbender-discord/images/2/23/PFP2.jpg/revision/latest?cb=20180911165028",
              }}
            ></Thumbnail>
          </Left>
          <Body>
            <Text>Farouk Ben Fraj</Text>
            <Text note>How are you Younes?</Text>
          </Body>
          <Right>
            <Text note style={{ color: "#66D326" }}>
              3:43PM
            </Text>
            <Badge style={appStyles.badgeChats}>
              <Text style={appStyles.badgeTextChats}>1</Text>
            </Badge>
          </Right>
        </ListItem>
        <ListItem avatar noBorder>
          <Left>
            <Thumbnail
              source={{
                uri:
                  "https://vignette.wikia.nocookie.net/avatar-the-last-airbender-discord/images/2/23/PFP2.jpg/revision/latest?cb=20180911165028",
              }}
            ></Thumbnail>
          </Left>
          <Body>
            <Text>Farouk Ben Fraj</Text>
            <Text note>How are you Younes?</Text>
          </Body>
          <Right>
            <Text note style={{ color: "#66D326" }}>
              3:43PM
            </Text>
            <Badge style={appStyles.badgeChats}>
              <Text style={appStyles.badgeTextChats}>1</Text>
            </Badge>
          </Right>
        </ListItem>
      </Content>
      <Fab>
        <Icon name="chat" type="MaterialIcons" />
      </Fab>
    </Container>
  );
};

export default ChatsScreen;
