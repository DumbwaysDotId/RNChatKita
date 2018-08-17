import React from 'react';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

// Contacts
import Contacts from './src/contacts/screens/Contacts';
import ContactCreate from './src/contacts/screens/ContactCreate';
import ContactDetail from './src/contacts/screens/ContactDetail';
import ContactEdit from './src/contacts/screens/ContactEdit';

// Chat
import Chat from './src/chat/screens/Chat';
import ChatDetail from './src/chat/screens/ChatDetail';

// Profile
import Profile from './src/profile/screens/Profile';

const ContactNav = createStackNavigator({
  Contacts: {
    screen: Contacts,
    navigationOptions: {
      header: null
    }
  },
  ContactCreate: {
    screen: ContactCreate,
    navigationOptions: {
      header: null
    }
  },
  ContactDetail: {
    screen: ContactDetail,
    navigationOptions: {
      header: null
    }
  },
  ContactEdit: {
    screen: ContactEdit,
    navigationOptions: {
      header: null 
    }
  }
});

const ChatNav = createStackNavigator({
  Chat: {
    screen: Chat,
    navigationOptions: {
      header: null
    }
  },
  ChatDetail: {
    screen: ChatDetail,
    navigationOptions: {
      header: null
    }
  }
});

const RootNavigators = createBottomTabNavigator({
  Contact: { screen: ContactNav },
  Chat: { screen: ChatNav },
  Profile: { screen: Profile }
}, {
  navigationOptions: ({ navigation }) => ({
    tabBarLabel: () => {},
    tabBarIcon: ({ focused, tintColor }) => {
      const { routeName } = navigation.state;
      let iconName;
      if (routeName === 'Contact') {
        iconName = `ios-contact${focused ? '' : '-outline'}`;
      } else if (routeName === 'Chat') {
        iconName = `ios-chatbubbles${focused ? '' : '-outline'}`;
      } else if (routeName === 'Profile') {
        iconName = `ios-person${focused ? '' : '-outline'}`;
      }

      // You can return any component that you like here! We usually use an
      // icon component from react-native-vector-icons
      return <Ionicons name={iconName} size={25} color={tintColor} />;
    },
  }),
  tabBarOptions: {
    activeTintColor: '#039be5',
    inactiveTintColor: 'gray',
    style: {
      backgroundColor: 'white'
    }
  },
  shifting: true
});

export default RootNavigators;