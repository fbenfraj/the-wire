import React, { Component, useState } from "react";
import {
  Modal,
  StyleSheet
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
  Tab,
  TabHeading,
	Tabs,
	Badge,
	Right,
} from "native-base";
import Menu, { MenuItem } from 'react-native-material-menu';

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

const users = [{
  name: 'User 1'
}, {
  name: 'User 2'
}, {
  name: 'User 3'
}]

class RoomsView extends React.PureComponent {

	_menu = {}

	state = {
		modalVisible: false
	}
 
  setMenuRef = (i, ref) => {
    this._menu[i] = ref
  }
 
  hideMenu = (i) => {
    this._menu[i].hide()
  }
 
  showMenu = (i) => {
    this._menu[i].show()
	}
	
	render () {
		const { navigation } = this.props
		return (
			<Container>
				<Tabs
				initialPage={0}
				tabBarBackgroundColor="#545E07"
				tabContainerStyle={{ elevation: 0 }}
				tabBarUnderlineStyle={styles.tabBarUnderline}
				>
					<Tab
						heading={
							<TabHeading style={{ backgroundColor: "#545E07" }}>
								<Text style={styles.tabsText}>ROOMS</Text>
								{/* <Badge style={styles.badge}>
									<Text style={styles.badgeText}>2</Text>
								</Badge> */}
							</TabHeading>
						}
					>
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
											<Badge style={styles.badgeChats}>
												<Text style={styles.badgeTextChats}>1</Text>
											</Badge>
										</Right> */}
									</ListItem>
									{room.participants.map((participant, i) => (
										<ListItem key={i} noBorder style={i == room.participants.length - 1 ? styles.participantListItemLast : styles.participantListItem}>
											{/* <Left>
												<Thumbnail
													source={{
														uri:
															"https://vignette.wikia.nocookie.net/avatar-the-last-airbender-discord/images/2/23/PFP2.jpg/revision/latest?cb=20180911165028",
													}}
												></Thumbnail>
											</Left> */}
											<Body>
												<Text style={styles.participantListItemText}>{participant.name}</Text>
												{/* <Text note>How are you Younes?</Text> */}
											</Body>
											{/* <Right>
												<Text note style={{ color: "#66D326" }}>
													3:43PM
												</Text>
												<Badge style={styles.badgeChats}>
													<Text style={styles.badgeTextChats}>1</Text>
												</Badge>
											</Right> */}
										</ListItem>
									))}
								</View>
							))}
							<Modal
								visible={this.state.modalVisible}
								transparent
							>
								<View style={styles.centeredView}>
									<View style={styles.modalView}>
										<Form style={{ justifyContent: 'flex-end', alignItems: 'flex-end' }}>
											<Item last style={{ marginBottom: 8 }}>
												<Input placeholder="Room name" />
											</Item>
											{/* TODO: centrer le bouton, ou le mettre sur la droite */}
											<Button primary onPress={() => {
												setState({ modalVisible: !modalVisible});
											}}>
												<Text>Add</Text>
											</Button>
										</Form>

									</View>
								</View>
							</Modal>
						</Content>
						<Fab
							onPress={() => setState({ modalVisible: true })}
						>
							<Icon name="add" type="MaterialIcons" />
						</Fab>
					</Tab>
					<Tab
						heading={
							<TabHeading style={{ backgroundColor: "#545E07" }}>
								<Text style={styles.tabsText}>USERS</Text>
							</TabHeading>
						}
					>
						<Item>
							<Input placeholder="Search" />
							<Icon name="search" type="MaterialIcons" />
						</Item>
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
										ref={ref => this.setMenuRef(i, ref)}
										button={
											<Button onPress={() => this.showMenu(i)} transparent>
												<Icon name="more-vert" type="MaterialIcons" />
											</Button>
										}
									>
										<MenuItem onPress={() => this.hideMenu(i)}>Menu item 1</MenuItem>
										<MenuItem onPress={() => this.hideMenu(i)}>Menu item 2</MenuItem>
									</Menu>
								</Right>
							</ListItem>
						))}
					</Tab>
				</Tabs>
				
			</Container>
		);
	};
}

const styles = StyleSheet.create({
	participantListItem: {
		paddingTop: 8,
		paddingBottom: 0,
		paddingLeft: 24
	},
	participantListItemText: {
		fontSize: 12
	},
	participantListItemLast: {
		paddingTop: 8,
		paddingBottom: 0,
		paddingLeft: 24,
		marginBottom: 8
	},
	centeredView: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		marginTop: 22
	},
	modalView: {
		margin: 20,
		backgroundColor: "white",
		borderRadius: 20,
		padding: 35,
		alignItems: "center",
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 2
		},
		shadowOpacity: 0.25,
		shadowRadius: 3.84,
		elevation: 5
	},appTitle: {
    fontSize: 22,
    color: "snow",
  },
  headerBackgroundColor: {
    backgroundColor: "#535E07",
  },
  tabBarUnderLine: {
    height: 2,
  },
  tabsText: {
    fontWeight: "bold",
    fontSize: 14,
  },
  badge: {
    height: 24,
    backgroundColor: "#DDE5EC",
    justifyContent: "center",
    alignSelf: "center",
    textAlign: "center",
  },
  badgeText: {
    fontSize: 12,
    color: "#535E07",
  },
  badgeChats: {
    backgroundColor: "#535E07",
    justifyContent: "center",
    textAlign: "center",
    alignSelf: "center",
    height: 24,
    marginTop: 4,
  },
  badgeTextChats: {
    fontSize: 12,
    color: "snow",
  },
});


export default RoomsView;
