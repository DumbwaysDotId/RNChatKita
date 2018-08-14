import { createStackNavigator } from 'react-navigation';

import Contacts from './src/contacts/screens/Contacts';
import ContactCreate from './src/contacts/screens/ContactCreate';

const RootNavigators = createStackNavigator({
  Contacts: {
    screen: Contacts,
    navigationOptions: {
      title: 'Contact'
    }
  },
  ContactCreate: {
    screen: ContactCreate,
    navigationOptions: {
      title: 'Create Contact'
    }
  }
});

export default RootNavigators;