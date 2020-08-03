import React from "react";
import {
  Button,
  Container,
  Content,
  Form,
  Item,
  Input,
  Text,
} from "native-base";

const LoginView = ({ navigation }) => {
  return (
    <Container>
      <Content>
        <Form style={{ margin: 20, display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-end' }}>
          <Item last>
            <Input placeholder="Server IP" />
          </Item>
          <Item last style={{ marginBottom: 24 }}>
            <Input placeholder="Password" />
          </Item>
          {/* TODO: centrer le bouton, ou le mettre sur la droite */}
          <Button primary onPress={() => {
            navigation.navigate("Rooms")
            navigation.reset({
              index: 0,
              routes: [{ name: 'Rooms' }],
            });
          }}>
            <Text>Login</Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default LoginView;
