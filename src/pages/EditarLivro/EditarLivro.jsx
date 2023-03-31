import { useEffect, useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import { getLivro, updateLivro, uploadCapaLivro } from "../../firebase/livros";

export function EditarLivro() {

    const { id } = useParams();

    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const navigate = useNavigate();

    const onChange = (event: event.target.value) => {
        console.log('change', event.target.value);
    };

    function onSubmit(data) {
        const imagem = data.imagem[0];
        if (imagem) {
            const toastId = toast.loading("Upload da imagem...", { position: "top-right" });
            uploadCapaLivro(imagem).then(url => {
                toast.dismiss(toastId);
                data.urlCapa = url;
                delete data.imagem;
                updateLivro(id, data).then(() => {
                    toast.success("Livro editado com sucesso!", { duration: 2000, position: "bottom-right" })
                    navigate("/livros");
                })
            })
        }
        else {
            delete data.imagem;
            updateLivro(id, data).then(() => {
                toast.success("Livro editado com sucesso!", { duration: 2000, position: "bottom-right" })
                navigate("/livros");
            })
        }

    }

    useEffect(() => {
        getLivro(id).then(livro => {
            reset(livro);
        })
    }, [id, reset]);


    return (
        <div className="editar-livro">
            <Container>
                <h1>Editar livro</h1>
                <hr />
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3">
                        <Form.Label>Título</Form.Label>
                        <Form.Control type="text" className={errors.titulo && "is-invalid"} {...register("titulo", { required: "Título é obrigatório!", maxLength: { value: 255, message: "Limite de 255 caracteres!" } })} />
                        <Form.Text className="text-danger">
                            {errors.titulo?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Autor</Form.Label>
                        <Form.Control type="text" className={errors.autor && "is-invalid"} {...register("autor", { required: "Autor é obrigatório!", maxLength: { value: 255, message: "Limite de 255 caracteres!" } })} />
                        <Form.Text className="text-danger">
                            {errors.autor?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Label>Categorias</Form.Label>
                    <Form.Group className="mb-3" controlId="biografias">
                        <Form.Check type="checkbox" label="Biografias" id={"categorias"} name={"categorias"} value={"biografias"} onChange={onSubmitChackBox} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="computacao">
                        <Form.Check type="checkbox" label="Computação" id={"categorias"} name={"categorias"} value={"computacao"} onChange={onSubmitChackBox} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="entretenimento">
                        <Form.Check type="checkbox" label="Entretenimento" id={"categorias"} name={"categorias"} value={"entretenimento"} onChange={onSubmitChackBox} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="educacao">
                        <Form.Check type="checkbox" label="Educação" id={"categorias"} name={"categorias"} value={"educacao"} onChange={onSubmitChackBox} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="fantasia">
                        <Form.Check type="checkbox" label="Fantasia" id={"categorias"} name={"categorias"} value={"fantasia"} onChange={onSubmitChackBox} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="horror">
                        <Form.Check type="checkbox" label="Horror" id={"categorias"} name={"categorias"} value={"horror"} onChange={onSubmitChackBox} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ficcaoCientifica">
                        <Form.Check type="checkbox" label="Ficção Científica" id={"categorias"} name={"categorias"} value={"ficcaoCientifica"} onChange={onSubmitChackBox} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="gastronomia">
                        <Form.Check type="checkbox" label="Gastronomia" id={"categorias"} name={"categorias"} value={"gastronomia"} onChange={onSubmitChackBox} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="suspense">
                        <Form.Check type="checkbox" label="Suspense" id={"categorias"} name={"categorias"} value={"suspense"} onChange={onSubmitChackBox} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="religiao">
                        <Form.Check type="checkbox" label="Religião" id={"categorias"} name={"categorias"} value={"religiao"} onChange={onSubmitChackBox} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="romance">
                        <Form.Check type="checkbox" label="Romance" id={"categorias"} name={"categorias"} value={"romance"} onChange={onSubmitChackBox} />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>ISBN</Form.Label>
                        <Form.Control type="text" className={errors.isbn && "is-invalid"} {...register("isbn", { required: "ISBN é obrigatório!", maxLength: { value: 255, message: "Limite de 255 caracteres!" } })} />
                        <Form.Text className="text-danger">
                            {errors.isbn?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Imagem da capa</Form.Label>
                        <Form.Control type="file" {...register("imagem")} />
                    </Form.Group>
                    <Button type="submit" variant="success">Editar</Button>
                </Form>
            </Container>
        </div>
    )
}