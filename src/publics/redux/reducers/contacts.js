const initialState = {
  data: [],
  isLoading: false,
  isSuccess: false,
  isError: false
}

const contactsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_CONTACTS_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false
      };
    case 'GET_CONTACTS_FULFILLED':
      return {
        ...state,
        data: action.payload.data,
        isLoading: false,
        isSuccess: true
      };
    case 'GET_CONTACTS_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true
      };

    case 'LOADMORE_CONTACTS_PENDING':
      return {
        ...state,
        isLoading: true,
        isError: false,
        isSuccess: false
      };
    case 'LOADMORE_CONTACTS_FULFILLED':
      return {
        ...state,
        data: [
          ...state.data,
          ...action.payload.data
        ],
        isLoading: false,
        isSuccess: true
      };
    case 'LOADMORE_CONTACTS_REJECTED':
      return {
        ...state,
        isLoading: false,
        isError: true
      };

    case 'CREATE_CONTACT':
      state.data.push(action.payload);
      return { ...state, data: state.data };
    default:
      return state;
  }
}

export default contactsReducer;