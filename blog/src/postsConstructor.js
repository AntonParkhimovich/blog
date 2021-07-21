import { format } from 'date-fns'
import uuid from 'react-uuid'

function PostConstructor(text){
    this.text = text
    this.date = format(new Date(), 'MM/dd/E/yyyy HH:mm')
    this.id = uuid()
}
export default PostConstructor