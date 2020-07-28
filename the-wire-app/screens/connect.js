import React from "react";
import {
  Button,
  Container,
  Content,
  Header,
  Form,
  Item,
  Input,
  Text,
} from "native-base";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const ConnectView = ({ navigation }) => {
  return (
    <Container>
      <Header />
      <Content>
        <Form>
          <Item>
            <Input placeholder="Server IP" />
          </Item>
          <Item>
            <Input placeholder="Password" />
          </Item>
          <Button primary onPress={() => navigation.navigate("Main")}>
            <Text>Connect</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default ConnectView;
