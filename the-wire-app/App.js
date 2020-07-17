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
  Tabs,
  Tab,
  TabHeading,
  Badge,
} from "native-base";
import { StatusBar } from "react-native";
import CallsScreen from "./screens/calls";
import ChatsScreen from "./screens/chats";
import StatusScreen from "./screens/status";
import appStyles from "./appStyles.js";

const App = () => {
  setTimeout(() => {
    StatusBar.setBackgroundColor("#7E8C12");
  }, 100);

  return (
    <Container>
      <Header noLeft style={appStyles.headerBackgroundColor}>
        <Body>
          <Title style={appStyles.appTitle}>The Wire</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon type="MaterialIcons" name="search" />
          </Button>
          <Button transparent>
            <Icon type="MaterialIcons" name="more-vert" />
          </Button>
        </Right>
      </Header>
      <Tabs
        initialPage={1}
        tabBarBackgroundColor="#545E07"
        tabContainerStyle={{ elevation: 0 }}
        tabBarUnderlineStyle={appStyles.tabBarUnderline}
      >
        <Tab
          heading={
            <TabHeading style={{ backgroundColor: "#545E07" }}>
              <Icon name="photo-camera" type="MaterialIcons" />
            </TabHeading>
          }
        >
          <Text
            style={{
              textAlign: "center",
              flex: 1,
              textAlignVertical: "center",
            }}
          >
            Camera Screen
          </Text>
        </Tab>
        <Tab
          heading={
            <TabHeading style={{ backgroundColor: "#545E07" }}>
              <Text style={appStyles.tabsText}>CHATS</Text>
              <Badge style={appStyles.badge}>
                <Text style={appStyles.badgeText}>2</Text>
              </Badge>
            </TabHeading>
          }
        >
          <CallsScreen />
        </Tab>
        <Tab
          heading={
            <TabHeading style={{ backgroundColor: "#545E07" }}>
              <Text style={appStyles.tabsText}>STATUS</Text>
            </TabHeading>
          }
        >
          <StatusScreen />
        </Tab>
        <Tab
          heading={
            <TabHeading style={{ backgroundColor: "#545E07" }}>
              <Text style={appStyles.tabsText}>CALLS</Text>
            </TabHeading>
          }
        >
          <CallsScreen />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default App;
