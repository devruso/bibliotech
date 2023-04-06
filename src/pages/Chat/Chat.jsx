import { Button, Container, Form } from "react-bootstrap";
import "./Chat.css";
import { limitToLast, onSnapshot, orderBy, query } from "firebase/firestore";
import { useState, useEffect } from "react";
import { auth } from "../../firebase/config";
import { enviarMensagem } from "../../firebase/mensagens";
import { mensagensCollection } from "../../firebase/collections";
import moment from 'moment';


export function Chat() {

  const [mensagem, setMensagem] = useState([]);
  const [todasMensagens, setTodasMensagens] = useState([]);

  function scrollToBottom(){
    const descer = document.querySelector(".messageArea");
    descer.scrollTop = descer.scrollHeight;
  }

  function enviarMsg(e) {
    e.preventDefault();
    const novaMsg = {
      mensagem: mensagem,
      horario: new Date(),
      user: auth.currentUser.displayName,
    };
    enviarMensagem(novaMsg);
    setMensagem("");
  }

  useEffect(() => {
    const q = query(mensagensCollection, orderBy("horario"), limitToLast(25));
    onSnapshot(q, (querySnapshot) => {
      const messages = [];
      querySnapshot.forEach((doc) => {
        messages.push(doc.data());
      });
      setTodasMensagens(messages);
    });
  }, []);
  
  useEffect(() =>{
      scrollToBottom();
  }, [todasMensagens])

  const usuarioAtual = auth.currentUser.displayName;
  return (
    <Container>
      <div className="messageArea">
        {todasMensagens.map((el) => {
          
          return (
            <div key={el.id} className={usuarioAtual === el.user ? "userMessage" : "otherUserMessage"}>
              <label>{el.user}</label>
              <p className="ms-3 mb-0" >{el.mensagem}</p>
              <small><i className="bi bi-stopwatch"></i> {moment(el.horario.toDate()).format("hh:mm")}</small>
            </div>
          );
        })}
      </div>
      <div className="textField">
        <Form>
        <Form.Group>
          <div className="input-group">
            <Form.Control
              type="text"
              onChange={(e) => setMensagem(e.target.value)}
              value={mensagem}
              placeholder="escreva aqui! :D"
            />
            <Button  variant="success" type="submit" onClick={enviarMsg}>
            Enviar
          </Button>
          </div>
            
          </Form.Group>
            
        </Form>
      </div>
    </Container>
  );
}
