import React from "react";
import {
  Badge,
  Button,
  Body,
  Container,
  Header,
  Icon,
  Tab,
  TabHeading,
  Tabs,
  Text,
  Title,
  Right,
} from "native-base";
import CallsScreen from "./calls";
import RoomsScreen from "./rooms/rooms";
import UsersScreen from "./users";
import appStyles from "../appStyles.js";

const MainView = ({ navigation }) => {
  return (
    <Container style={{ marginTop: 20 }}>
      {/* <Header noLeft style={appStyles.headerBackgroundColor}>
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
      </Header> */}
      <Tabs
        initialPage={0}
        tabBarBackgroundColor="#545E07"
        tabContainerStyle={{ elevation: 0 }}
        tabBarUnderlineStyle={appStyles.tabBarUnderline}
      >
        {/* <Tab
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
        </Tab> */}
        <Tab
          heading={
            <TabHeading style={{ backgroundColor: "#545E07" }}>
              <Text style={appStyles.tabsText}>ROOMS</Text>
              <Badge style={appStyles.badge}>
                <Text style={appStyles.badgeText}>2</Text>
              </Badge>
            </TabHeading>
          }
        >
          <RoomsScreen navigation={navigation} />
        </Tab>
        <Tab
          heading={
            <TabHeading style={{ backgroundColor: "#545E07" }}>
              <Text style={appStyles.tabsText}>USERS</Text>
            </TabHeading>
          }
        >
          <UsersScreen />
        </Tab>
        {/* <Tab
          heading={
            <TabHeading style={{ backgroundColor: "#545E07" }}>
              <Text style={appStyles.tabsText}>CALLS</Text>
            </TabHeading>
          }
        >
          <CallsScreen />
        </Tab> */}
      </Tabs>
    </Container>
  );
};

export default MainView;
