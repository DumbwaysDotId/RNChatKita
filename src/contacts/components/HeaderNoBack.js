import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Header, Left, Body, Right, Title, Icon, Button, Text } from 'native-base';

export default class HeaderNoBack extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Header>
				<Left />
				<Body style={{alignItems:'flex-end'}}>
					<Title>Contacts</Title>
				</Body>
				<Right>
					<Button transparent onPress={this.props.create}>
						<Icon name='add' />
					</Button>
				</Right>
			</Header>
		)
	}
}