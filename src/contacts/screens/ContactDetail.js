import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native';
import { StyleProvider, Container, Content, ListItem, Body, Button, Icon, Text } from 'native-base';

// Theme
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

import HeaderWithBack from '../components/HeaderWithBack';

export default class ContactDetail extends Component {
	render() {
		return (
			<StyleProvider style={getTheme(material)}>
				<Container style={styles.container}>
					<HeaderWithBack navigation={this.props.navigation} title={'Ade Ayu'} />
					<Content>
						<View style={styles.wrapper}>
							<ListItem style={styles.listItem}>
								<Body style={styles.statusWrapper}>
									<Text style={styles.statusLabel}>Online <Icon type='FontAwesome' name='circle' style={styles.statusIcon} /> </Text>
								</Body>
							</ListItem>
							<ListItem style={styles.listItem}>
								<Body>
									<Text>0857-7617-9376</Text>
									<Text note numberOfLines={1}>Mobile | Indonesia</Text>
								</Body>
							</ListItem>
							<ListItem style={styles.listItem}>
								<Body>
									<Text>ade.ayu@gmail.com</Text>
									<Text note numberOfLines={1}>Email</Text>
								</Body>
							</ListItem>
						</View>

						<View style={styles.wrapper}>
							<ListItem style={styles.listItem}>
								<TouchableOpacity activeOpacity={0.5} style={{flex:1}}>
									<Body style={{alignItems:'center'}}>
										<Text style={styles.chatButton}>Chat</Text>
									</Body>
								</TouchableOpacity>
							</ListItem>
							<ListItem style={styles.listItem}>
								<TouchableOpacity activeOpacity={0.5} style={{flex:1}} onPress={() => this.props.navigation.navigate('ContactEdit')}>
									<Body style={{alignItems:'center'}}>
										<Text style={styles.editButton}>Edit</Text>
									</Body>
								</TouchableOpacity>
							</ListItem>
							<ListItem style={styles.listItem}>
								<TouchableOpacity activeOpacity={0.5} style={{flex:1}}>
									<Body style={{alignItems:'center'}}>
										<Text style={styles.blockButton}>Block</Text>
									</Body>
								</TouchableOpacity>
							</ListItem>
						</View>
					</Content>
				</Container>
			</StyleProvider>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
	},
	wrapper: {
		backgroundColor: '#fff',
		marginBottom: 10
	},
	listItem: {
		marginLeft: 0,
		padding:10
	},
	statusWrapper: {
		alignItems:'center',
		justifyContent: 'center'
	},
	statusLabel: {
		fontWeight:'bold',
		flexDirection: 'row'
	},
	statusIcon: {
		color:'hsl(141, 71%, 48%)',
		fontSize: 14
	},
	chatButton: {
		fontWeight:'bold',
		color:'#039BE5'
	},
	editButton: {
		fontWeight:'bold',
		color:'#616161'	
	},
	blockButton: {
		fontWeight:'bold',
		color:'#dc3545'
	}
});