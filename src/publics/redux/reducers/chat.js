const initialState = {
  data: [
    {id:1, name:'Ade Ayu', date:'15:42 PM', last_msg:'Semangat yah ^_^', status:'online'},
    {id:2, name:'Muhammad Riza', date:'YESTERDAY', last_msg:'Rul ada saldo pp gk?', status:'offline'},
    {id:3, name:'Edo R', date:'YESTERDAY', last_msg:'uy jgn lupa beli tiket', status:'offline'}
  ],
  isLoading: false,
  isSuccess: false,
  isError: false
}

const chatReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'GET_CHATS':
			return {
		        ...state,
		    	isLoading: false,
		    	isSuccess: true
		    };
		default:
			return state;
	}
}

export default chatReducer;