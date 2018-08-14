import React from 'react';
import { StyleSheet } from 'react-native';
import { Container, Text } from 'native-base';

const ContactCreate = () => (
  <Container style={styles.container}>
    <Text>Contact Create Page</Text>
  </Container>
);

export default ContactCreate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})