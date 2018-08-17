import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { StyleProvider, Container, Content, Form, Item, Input, Label, Button, Icon, Spinner, Text } from 'native-base';

// Theme
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

import HeaderWithBack from '../components/HeaderWithBack';

class BtnAdd extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		if (this.props.loading == false) {
			return (
				<Button block primary iconLeft style={styles.submitBtn} onPress={()=>this.props.onSubmit}>
					<Text>Save</Text>
				</Button>
			)
		} else {
			return (
				<Spinner color='#039BE5' />
			)
		}
	}
}

export default class ContactCreate extends Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
			<StyleProvider style={getTheme(material)}>
				<Container>
					<HeaderWithBack navigation={this.props.navigation} title={'Edit Contact'} />
					<Content>
						<Form style={styles.formOuter}>
							<Item floatingLabel style={styles.formInput}>
								<Label>Name</Label>
								<Input value={'Ade Ayu'} />
							</Item>
							<Item floatingLabel style={styles.formInput}>
								<Label>Phone</Label>
								<Input value={'085776179376'} />
							</Item>
							<Item floatingLabel style={styles.formInput}>
								<Label>Email</Label>
								<Input value={'ade.ayu@gmail.com'} />
							</Item>
							<BtnAdd loading={false} onSubmit={()=> {alert('Saved!')}} />
						</Form>
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
	formOuter: {
		flex: 1,
		padding: 8
	},
	formInput: {
		marginLeft: 0
	},
	submitBtn: {
		marginTop: 20
	}
});