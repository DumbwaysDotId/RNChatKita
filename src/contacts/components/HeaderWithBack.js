import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Header, Left, Body, Right, Title, Icon, Button, Text } from 'native-base';

export default class HeaderWithBack extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<Header>
				<Left>
					<Button transparent onPress={() => this.props.navigation.goBack()}>
						<Icon name='arrow-back' />
					</Button>
				</Left>
				<Body>
					<Title>{this.props.title}</Title>
				</Body>
			</Header>
		)
	}
}