import { Button, Container, Form } from "react-bootstrap";
import "./Chat.css";
import {onSnapShot, serverTimestamp} from "firebase/firestore";
import { useState, handleSubmit, useEffect } from "react";
import { useForm } from "react-hook-form";
import { auth } from "../../firebase/config";
import { enviarMensagem} from "../../firebase/mensagens";

export function Chat(){
    const [mensagem, setMensagem] = useState([]);

    const {register,handleSubmit, formState:{errors}} = useForm();

     function enviarMsg(data,e){

        e.preventDefault();

        const novaMsg = {mensagem: data.mensagem, horario:serverTimestamp(),user: auth.currentUser.displayName}; 
        enviarMensagem(novaMsg).then(()=>{
            console.log(novaMsg)
        });
        setMensagem("");
    }

    useEffect(() =>{

    }, [mensagem])

    return(
        <Container>
            <div className="messageArea"></div>
            <Form onSubmit={handleSubmit(enviarMsg)}>
                <Form.Group>
                <Form.Control type="text" onChange={(e)=>setMensagem(e.target.value)} {...register("mensagem",{required:true})}/>
                </Form.Group>
                <Button variant="success" type="submit">Enviar</Button>
            </Form>
        </Container>
    )
}