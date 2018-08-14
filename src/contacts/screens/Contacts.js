/**
 * Sample React Native Contacts
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { connect } from 'react-redux';
import { Container, List, ListItem, Text, Fab } from 'native-base';

import { getContacts, createContact, loadmoreContacts } from '../../publics/redux/actions/contacts';

type Props = {};
class Contacts extends Component<Props> {

  constructor() {
    super();
    this.page = 1;
    this.endOfPage = false;
    this.state = {
      refreshing: false
    }
  }
  componentDidMount() {
    this.getData();
  }

  getData = () => {
    if (this.page > 1) {
      this.setState({refreshing: true});
      this.page = 1;
      this.endOfPage = false;
    }
    this.props.dispatch(getContacts())
    .then(res => {
      this.setState({refreshing: false});
    })
    .catch(err => {
      this.setState({refreshing: false});
    })
  }

  handleLoadmore = () => {
    if (!this.endOfPage) {
      this.page++;
      this.props.dispatch(loadmoreContacts(this.page))
      .then(res => {
        if (res.value.data.length < 10) {
          this.endOfPage = true;
        }
      })
      .catch(err => {
        console.log(err)
      })
    }
  }

  navigateToCreate = () => {
    this.props.dispatch({
      type: 'Navigation/NAVIGATE',
      routeName: 'ContactCreate'
    })
  }

  render() {
    const { data, isLoading } = this.props.contacts;
    return (
      <Container style={styles.container}>
        <FlatList
          data={data}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          refreshing={this.state.refreshing}
          onRefresh={this.getData}
          onEndReached={this.handleLoadmore}
          onEndReachedThreshold={0.1}
          getItemLayout={(data, index) => ({
            length: 100,
            offset: 100 * index, index
          })}
        />
        <Fab onPress={this.navigateToCreate}>
          <Text>Add</Text>
        </Fab>
      </Container>
    );
  }

  _keyExtractor = (item, index) => item._id;

  _renderItem = ({item}) => (
    <ListItem key={item._id} style={styles.listItem}>
      <Text>{item.name}</Text>
    </ListItem>
  )
}

const mapStateToProps = (state) => ({
  contacts: state.contacts
})

export default connect(mapStateToProps)(Contacts)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  listItem: {
    height: 100
  }
});
