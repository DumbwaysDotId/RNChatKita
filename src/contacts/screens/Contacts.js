import React, {Component} from 'react';
import { StyleSheet, FlatList, TouchableOpacity, Alert, View } from 'react-native';
import { StyleProvider, Container, List, ListItem, Body, Text, Icon } from 'native-base';

// Theme
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

// Redux
// import { connect } from 'react-redux';
// import { getContacts, createContact, loadmoreContacts } from '../../publics/redux/actions/contacts';

import HeaderNoBack from '../components/HeaderNoBack';

class Contacts extends Component {

  constructor() {
    super();
    this.page = 1;
    this.endOfPage = false;
    this.state = {
      data: [
        {id:1, name:'Ade Ayu', phone:'085776179376', email:'ade.ayu@gmail.com'},
        {id:2, name:'Rully Ardiansyah', phone:'085776179376', email:'de.voresyah@gmail.com'},
        {id:3, name:'Muhammad Riza', phone:'08111111111', email:'m.riza@gmail.com'}
      ],
      refreshing: false
    }
  }
  componentDidMount() {
    // this.getData();
  }

  getData = () => {
    if (this.page > 1) {
      this.setState({refreshing: true});
      this.page = 1;
      this.endOfPage = false;
    }
    this.props.dispatch(getContacts());
  }

  // handleLoadmore = () => {
  //   if (!this.endOfPage) {
  //     this.page++;
  //     this.props.dispatch(loadmoreContacts(this.page))
  //     .then(res => {
  //       if (res.value.data.length < 10) {
  //         this.endOfPage = true;
  //       }
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  //   }
  // }

  navigateToCreate = () => {
    this.props.dispatch({
      type: 'Navigation/NAVIGATE',
      routeName: 'ContactCreate'
    })
  }

  navigateToDetail = () => {
    this.props.dispatch({
      type: 'Navigation/NAVIGATE',
      routeName: 'ContactDetail'
    })
  }

  showAlert = (id, name) => {
    const vm = this;

    Alert.alert(
      'Delete Contact',
      'Are you sure want to delete "'+name+'" from contact?',
      [
        {text: 'Cancel', onPress: () => console.log('Canceled'), style: 'cancel'},
        {text: 'Delete', onPress: () => this.deleteContact(id)},
      ]
    )
  }

  render() {
    // const { data, isLoading } = this.props.contacts;
    return (
      <StyleProvider style={getTheme(material)}>
        <Container style={styles.container}>
          <HeaderNoBack create={()=>this.props.navigation.navigate("ContactCreate")} />
          <FlatList
            data={this.state.data}
            keyExtractor={this._keyExtractor}
            renderItem={this._renderItem}
            refreshing={this.state.refreshing}
            onRefresh={()=>alert("onRefresh")}
            onEndReached={()=>alert("onReached")}
            onEndReachedThreshold={0.1}
            getItemLayout={(data, index) => ({
              length: 100,
              offset: 100 * index, index
            })}
          />
        </Container>
      </StyleProvider>
    );
  }

  _keyExtractor = (item, index) => item.id.toString();

  _renderItem = ({item}) => (
    <ListItem style={styles.listItem}>
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("ContactDetail")}
        onLongPress={()=> this.showAlert(item.id, item.name)}
        activeOpacity={0.5}
        style={{flex:1}}
      >
        <View style={styles.itemInner}>
          <Body style={{flex:0.9}}>
            <Text>{item.name}</Text>
            <Text note numberOfLines={1}>{item.phone}</Text>
          </Body>
          <View style={styles.arrowIcon}>
            <Icon name='ios-arrow-forward' style={styles.iconColor} />
          </View>
        </View>
      </TouchableOpacity>
    </ListItem>
  )
}

// const mapStateToProps = (state) => ({
//   contacts: state.contacts
// })

// export default connect(mapStateToProps)(Contacts)
export default Contacts;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  listItem: {
    marginLeft: 0
  },
  itemInner: {
    flex:1,
    flexDirection:'row'
  },
  arrowIcon: {
    flex:0.1,
    justifyContent:'center',
    alignItems:'flex-end'
  },
  iconColor: {
    color:'#757575'
  }
});
