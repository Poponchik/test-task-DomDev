import {Todo} from './ds'

class DataService {
    get todo(){
        return new Todo()
    }
}

export default new DataService()