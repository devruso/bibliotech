import { useState } from "react";
import { Button, Container, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { addLivro, uploadCapaLivro } from "../../firebase/livros";

export function AdicionarLivro() {

    const [categorias, setCategorias] = useState([]);
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const handleCheckBox = (event) => {
        let categoriasArray = [...categorias];
        if (event.target.checked) {
            categoriasArray = [...categorias, event.target.value];
        } else {
            categoriasArray.splice(categorias.indexOf(event.target.value), 1);
        }
        setCategorias(categoriasArray)
    }

    function onSubmit(data) {
        const imagem = data.imagem[0];
        if (imagem) {
            const toastId = toast.loading("Upload da imagem...", { position: "top-right" });
            uploadCapaLivro(imagem).then(url => {
                toast.dismiss(toastId);
                data.urlCapa = url;
                delete data.imagem;
                addLivro(data).then(() => {
                    toast.success("Livro adicionado com sucesso!", { duration: 2000, position: "bottom-right" })
                    navigate("/livros");
                })
            })
        }
        else {
            delete data.imagem;
            addLivro(data).then(() => {
                toast.success("Livro adicionado com sucesso!", { duration: 2000, position: "bottom-right" })
                navigate("/livros");
            })
        }
    }

    return (
        <div className="adicionar-livro">
            <Container>
                <h1>Adicionar livro</h1>
                <hr />
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Título</Form.Label>
                        <Form.Control type="text" className={errors.titulo && "is-invalid"} {...register("titulo", { required: "Título é obrigatório!", maxLength: { value: 255, message: "Limite de 255 caracteres!" } })} />
                        <Form.Text className="text-danger">
                            {errors.titulo?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Autor</Form.Label>
                        <Form.Control type="text" className={errors.autor && "is-invalid"} {...register("autor", { required: "Autor é obrigatório!", maxLength: { value: 255, message: "Limite de 255 caracteres!" } })} />
                        <Form.Text className="text-danger">
                            {errors.autor?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Label>Categorias</Form.Label>
                    <Form.Group className="mb-3" controlId="biografias">
                        <Form.Check type="checkbox" label="Biografias" id={"categorias"} name={"categorias"} value={"biografias"} onChange={handleCheckBox} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="computacao">
                        <Form.Check type="checkbox" label="Computação" id={"categorias"} name={"categorias"} value={"computacao"} onChange={handleCheckBox} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="entretenimento">
                        <Form.Check type="checkbox" label="Entretenimento" id={"categorias"} name={"categorias"} value={"entretenimento"} onChange={handleCheckBox} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="educacao">
                        <Form.Check type="checkbox" label="Educação" id={"categorias"} name={"categorias"} value={"educacao"} onChange={handleCheckBox} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="fantasia">
                        <Form.Check type="checkbox" label="Fantasia" id={"categorias"} name={"categorias"} value={"fantasia"} onChange={handleCheckBox} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="horror">
                        <Form.Check type="checkbox" label="Horror" id={"categorias"} name={"categorias"} value={"horror"} onChange={handleCheckBox} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="ficcaoCientifica">
                        <Form.Check type="checkbox" label="Ficção Científica" id={"categorias"} name={"categorias"} value={"ficcaoCientifica"} onChange={handleCheckBox} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="gastronomia">
                        <Form.Check type="checkbox" label="Gastronomia" id={"categorias"} name={"categorias"} value={"gastronomia"} onChange={handleCheckBox} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="suspense">
                        <Form.Check type="checkbox" label="Suspense" id={"categorias"} name={"categorias"} value={"suspense"} onChange={handleCheckBox} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="religiao">
                        <Form.Check type="checkbox" label="Religião" id={"categorias"} name={"categorias"} value={"religiao"} onChange={handleCheckBox} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="romance">
                        <Form.Check type="checkbox" label="Romance" id={"categorias"} name={"categorias"} value={"romance"} onChange={handleCheckBox} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>ISBN</Form.Label>
                        <Form.Control type="text" className={errors.isbn && "is-invalid"} {...register("isbn", { required: "ISBN é obrigatório!", maxLength: { value: 255, message: "Limite de 255 caracteres!" } })} />
                        <Form.Text className="text-danger">
                            {errors.isbn?.message}
                        </Form.Text>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Imagem da capa</Form.Label>
                        <Form.Control type="file" accept=".png,.jpg,.jpeg,.gif" {...register("imagem")} />
                    </Form.Group>
                    <Button type="submit" variant="success">Adicionar</Button>
                </Form>
            </Container>
        </div>
    )
}