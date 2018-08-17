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
				<Body style={{alignItems:'center'}}>
					<Title>Chat</Title>
				</Body>
			</Header>
		)
	}
}