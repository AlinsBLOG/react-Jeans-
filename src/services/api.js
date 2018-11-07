// import { stringify } from 'qs';
import { 
	request
} from '../request'

export function change(params) {
  return request(`/api/project/info`)
}
