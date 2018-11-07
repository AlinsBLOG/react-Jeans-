import * as constants from './constants';

const defaultState = {
	list: {},
	boolean: false,
	name: 'name'
};

const changeInfo = (state, action) => {
	return Object.assign({}, state,{
		list: action,
		name: 'alin'
	})
};


export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.CHANGE_INFO:
			return changeInfo(state, action.payload);
		default:
			return state;
	}
}