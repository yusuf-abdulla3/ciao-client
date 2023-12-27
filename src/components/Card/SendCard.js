import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";


export default function SendCard(props){
  
  const history = useHistory();  
  const cardUrl = props.cardId ? `${process.env.REACT_APP_CLIENT_URL}/card/${props.cardId}`: '';
  const [recipient, setRecipient] = useState('');
  const [sender, setSender] = useState('');
  const [subject, setSubject] = useState('');
  const [text, setText] = useState(cardUrl);
  const [email, setEmail] = useState({});

  const sendEmail = () => {
    const url = `${process.env.REACT_APP_SERVER_URL}/api/email/`;
    const reactData = {recipient, sender, subject, text}
    axios.post(url, reactData)
    .then(res => {
      console.log('email send');
      console.log(res)
    })
      .catch(err => console.log('--->--',err.data))
      
      history.push(`/card/${props.cardId}`);
  }
  
  return (
    <div className="contact-form mycontformmodal">
      
          
          <label> Recipient Email</label>
          <br />
          <div className="form-group myformgrp">
            <input value={recipient}
            onChange={e => setRecipient(e.target.value)} 
            className="form-control form-controlmodal"
            />
            
          </div>
          <label> Sender Email</label>
            <br />
          <div className="form-group myformgrp">
            
            <input value={sender}
              onChange={e => setSender(e.target.value) } 
              className="form-control form-controlmodal"
              />
          </div>
          <div className="form-group myformgrp">
            <label> Subject </label>
            <br />
            <input value={subject}
              onChange={e => setSubject(e.target.value)} 
              className="form-control form-controlmodal"
              />
          </div>

          <button onClick={sendEmail} class="btn btn-primary mybtncss"> Send Email </button>
        </div>
    
  );
}