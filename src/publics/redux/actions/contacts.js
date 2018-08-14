import axios from 'axios';

const getContacts = () => {
  return {
    type: 'GET_CONTACTS',
    payload: axios.get('http://192.168.0.23:5000/contact?page=1&perpage=10&sort=1')
  }
}

const loadmoreContacts = (page) => {
  return {
    type: 'LOADMORE_CONTACTS',
    payload: axios.get(`http://192.168.0.23:5000/contact?page=${page}&perpage=10&sort=1`)
  }
}

const createContact = (name) => {
  console.log('action create contact '+ name)
  return {
    type: 'CREATE_CONTACT',
    payload: name
  }
}

export {
  getContacts,
  createContact,
  loadmoreContacts
}