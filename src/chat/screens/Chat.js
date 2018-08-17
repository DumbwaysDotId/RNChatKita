import React, {Component} from 'react';
import { StyleSheet, FlatList, TouchableOpacity, Alert, View } from 'react-native';
import { StyleProvider, Container, Fab, List, ListItem, Body, Text, Icon } from 'native-base';

// Theme
import getTheme from '../../native-base-theme/components';
import material from '../../native-base-theme/variables/material';

// Redux
import { connect } from 'react-redux';
import { getChats } from '../../publics/redux/actions/chat';

import HeaderNoBack from '../components/HeaderNoBack';

class StatusIcon extends Component {
  render() {
    if (this.props.status == "online") {
      return <Icon type='FontAwesome' name='circle' style={styles.onlineIcon} />;
    } else {
      return <Icon type='FontAwesome' name='circle' style={styles.offlineIcon} />;
    }
  }
}

class Chat extends Component {

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
    this.props.dispatch(getChats());
  }

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
      'Delete Chat',
      'Are you sure want to delete chat with "'+name+'" ?',
      [
        {text: 'Cancel', onPress: () => console.log('Canceled'), style: 'cancel'},
        {text: 'Delete', onPress: () => this.deleteContact(id)},
      ]
    )
  }

  render() {
    const { data, isLoading } = this.props.chat;
    return (
      <StyleProvider style={getTheme(material)}>
        <Container style={styles.container}>
          <HeaderNoBack create={()=>this.props.navigation.navigate("ContactCreate")} />
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
            style={{backgroundColor:'#fff'}}
          />
          <Fab
            active={true}
            direction="up"
            containerStyle={{}}
            style={styles.chatNew}
            position="bottomRight"
            onPress={() => this.props.navigation.navigate('ChatNew')}>
            <Icon type='FontAwesome' name='comment' />
          </Fab>
        </Container>
      </StyleProvider>
    );
  }

  _keyExtractor = (item, index) => item.id.toString();

  _renderItem = ({item}) => (
    <ListItem style={styles.listItem}>
      <TouchableOpacity
        onPress={() => this.props.navigation.navigate("ChatDetail")}
        onLongPress={()=> this.showAlert(item.id, item.name)}
        activeOpacity={0.5}
        style={{flex:1}}
      >
        <View style={styles.itemInner}>
          <Body style={{flex:0.7}}>
            <View style={{flexDirection:'row'}}>
              <Text>{item.name}</Text>
              <StatusIcon status={item.status}/>
            </View>
            <Text note numberOfLines={1}>{item.last_msg}</Text>
          </Body>
          <View style={{flex:0.3}}>
            <Text style={styles.infoDate}>{item.date}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </ListItem>
  )
}

const mapStateToProps = (state) => ({
  chat: state.chat
})

export default connect(mapStateToProps)(Chat)

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
  onlineIcon: {
    color:'hsl(141, 71%, 48%)',
    fontSize: 10,
    top:6,
    left:-5
  },
  offlineIcon: {
    color:'#bdbdbd',
    fontSize: 10,
    top:6,
    left:-5
  },
  infoDate: {
    fontSize:13,
    color:'#616161',
    alignSelf:'flex-end'
  },
  chatNew: {
    backgroundColor:'#039BE5',
    alignItems:'center',
    justifyContent:'center'
  }
});
