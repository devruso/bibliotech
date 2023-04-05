import { Button, Container, Form } from 'react-bootstrap';
import './Postagem.css';
import { AuthContext } from '../../contexts/AuthContext';
import { useContext } from 'react';
import { enviarPostagem } from '../../firebase/blog';
import { toast } from 'react-hot-toast';
import { useForm } from "react-hook-form";

export function Postagem(){
    const {register, handleSubmit, formState: {errors} } = useForm();

    

    const user = useContext(AuthContext);

    async function enviarPost(data, e){
        e.preventDefault();
        await enviarPostagem(data).then(()=>{
            toast.success("Post enviado com sucesso!", {duration: 2500, position:"bottom-right"});
        }).catch(() =>{
            toast.error("Algo errado", {duration:2500, position:"bottom-right"})
        })
    }


    return(
        <Container className='d-flex flex-column'>
            <h3 className='mt-3 text-center'>Publicar novo post</h3>
            <div className='postagem'>
            <img src={user.photoURL} alt="" />
            <Form onSubmit={handleSubmit(enviarPost)} className='w-100 ms-5'  >
                <Form.Group className='mt-3'>
                    <Form.Label>Título da postagem</Form.Label>
                    <Form.Control type='text' className='inputDados' {...register("postTitle", {required:"O título é necessario" , maxLength:{value: 128, message:"Limite de 128 caracteres"} })} />
                    <Form.Text>
                        {errors.postTitle?.message}
                    </Form.Text>
                </Form.Group>
                <Form.Group className='mt-2'>
                    <Form.Label>Conteúdo</Form.Label>
                    <Form.Control className='inputDados' type='text' {...register("postContent", {required:"O conteúdo é necessario" , maxLength:{value: 128, message:"Limite de 128 caracteres"} })} />
                    <Form.Text>
                        {errors.postContent?.message}
                    </Form.Text>
                </Form.Group>
                <div className='btnLine'>
                    <Button className='btnPost mt-2' variant='success'  type='submit'>Postar</Button>
                </div>
            </Form>   
            </div>
        </Container>
        
    )
    
}