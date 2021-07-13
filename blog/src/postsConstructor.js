import { format } from 'date-fns'

function PostConstructor(text){
    this.text = text
    this.date = format(new Date(), 'MM/dd/E/yyyy HH:mm')
}
export default PostConstructor