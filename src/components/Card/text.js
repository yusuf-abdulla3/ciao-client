import { useState } from "react";
import axios from "axios";
import { useHistory } from 'react-router-dom';
import {Form,Button} from 'react-bootstrap'

export default function Text(props){
const [selectText, setSelectText] = useState("");

const history = useHistory();

const handleText = (e) => {
  setSelectText(e.target.value);
}
const handlePostSubmit = (e) => {
  e.preventDefault();
  const reactData = {selectText}
  const url = `${process.env.REACT_APP_SERVER_URL}/api/text/`
  let sendData = () => {
    axios.post(url, reactData)
      .then(res => console.log('data send'))
      .catch(err => console.log('--->--',err.data))
    }
    sendData();
    history.push('/createcard');
  }

  const onCancel =(e)=> {
    history.push('/createcard');
  }
return(
<>
<Form>
    <Form.FloatingLabel controlId="floatingTextarea2" className="mb-3" label="Message">
    <Form.Control
      as="textarea"
      onChange = {handleText}
      placeholder="Enter Message here"
    
    />
 </Form.FloatingLabel>
<div>
 <Button 
 variant="outline-primary" onClick={handlePostSubmit}>
   Post
   </Button>{' '}

  <Button variant="outline-danger" onClick={onCancel}> Cancel </Button>
</div>

</Form>
</>
)


}