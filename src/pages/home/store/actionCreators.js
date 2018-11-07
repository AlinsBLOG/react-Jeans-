import * as constants from './constants';
import * as API from '../../../services/api'

const changeData = (result) => ({
	type: constants.CHANGE_INFO,
	payload: result
});

export const change = (params) => {
	return (dispatch) => {
		API.change().then(res => {
			const result = res.data
			dispatch(changeData(result))
		});
	}
}