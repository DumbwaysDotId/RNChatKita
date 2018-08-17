const initialState = {
  msg: [
  	{
    	_id:1,
    	text:'Semangat yah ^_^',
    	createdAt:new Date("2018/08/15"),
    	user: {
    		_id:2,
    		name:'Rully Ardiansyah'
    	}
    },
    {
    	_id:2,
    	text:'Di toko kue, deket jati',
    	createdAt:new Date("2018/08/15"),
    	user: {
    		_id:1,
    		name:'Ade Ayu'
    	}
    },
    {
    	_id:3,
    	text:'Dimana?',
    	createdAt:new Date("2018/08/15"),
    	user: {
    		_id:2,
    		name:'Rully Ardiansyah'
    	}
    },
    {
    	_id:4,
    	text:'Aku udah mulai kerja nih',
    	createdAt:new Date("2018/08/15"),
    	user: {
    		_id:1,
    		name:'Ade Ayu'
    	}
    }
  ],
  isLoading: false,
  isSuccess: false,
  isError: false
}

const messagesReducer = (state = initialState, action) => {
	switch(action.type) {
		case 'GET_MESSAGES':
			return {
		        ...state,
		    	isLoading: false,
		    	isSuccess: true
		    };
		default:
			return state;
	}
}

export default messagesReducer;