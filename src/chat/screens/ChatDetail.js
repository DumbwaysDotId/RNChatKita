import React, { Component } from 'react';
import { StyleSheet, FlatList, TouchableOpacity, Alert, View } from 'react-native';
import { StyleProvider, Container, List, ListItem, Body, Text, Icon } from 'native-base';

// Theme
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

// Redux
import { connect } from 'react-redux';
import { getMessages } from '../../publics/redux/actions/messages';

import HeaderWithBack from '../components/HeaderWithBack';
import { GiftedChat } from 'react-native-gifted-chat';

class ChatDetail extends Component {
	componentDidMount() {
		this.getData();
	}

	getData = () => {
		if (this.page > 1) {
			this.setState({refreshing: true});
			this.page = 1;
			this.endOfPage = false;
		}
		this.props.dispatch(getMessages());
	}

	render() {
		const { msg, isLoading } = this.props.messages;
		return (
			<StyleProvider style={getTheme(material)}>
				<Container style={styles.container}>
					<HeaderWithBack navigation={this.props.navigation} title='Ade Ayu' />
					<GiftedChat
						messages={msg}
						onSend={messages => alert('Sent!')}
						user={{
							_id: 2,
						}}
						renderAvatar={null}
					/>
				</Container>
			</StyleProvider>
		)
	}
}

const mapStateToProps = (state) => ({
  messages: state.messages
})

export default connect(mapStateToProps)(ChatDetail)

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#f5f5f5',
	}
});