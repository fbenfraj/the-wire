import React, { Component } from "react";
import { Container, Content, Text, ListItem, Body, Right, Icon, Button } from "native-base";
import Menu, { MenuItem } from 'react-native-material-menu';

const users = [{
  name: 'User 1'
}, {
  name: 'User 2'
}, {
  name: 'User 3'
}]

class UsersScreen extends React.PureComponent {

  _menu = null
 
  setMenuRef = ref => {
    this._menu = ref
  }
 
  hideMenu = () => {
    this._menu.hide()
  }
 
  showMenu = () => {
    this._menu.show()
  }

  render () {
    return (
      <Container>
        <Content>
          {users.map((user, i) => (
            <ListItem
              key={i}
              noIndent
              noBorder
            >
              {/* <Left>
                <Thumbnail
                  source={{
                    uri:
                      "https://vignette.wikia.nocookie.net/avatar-the-last-airbender-discord/images/2/23/PFP2.jpg/revision/latest?cb=20180911165028",
                  }}
                ></Thumbnail>
              </Left> */}
              <Body>
                <Text>{user.name}</Text>
                {/* <Text note>How are you Younes?</Text> */}
              </Body>
              <Right>
                <Menu
                  ref={this.setMenuRef}
                  button={
                    <Button onPress={this.showMenu} transparent>
                      <Icon name="more-vert" type="MaterialIcons" />
                    </Button>
                  }
                >
                  <MenuItem onPress={this.hideMenu}>Menu item 1</MenuItem>
                  <MenuItem onPress={this.hideMenu}>Menu item 2</MenuItem>
                </Menu>
              </Right>
            </ListItem>
          ))}
        </Content>
      </Container>
    );
  }
};

export default UsersScreen;
