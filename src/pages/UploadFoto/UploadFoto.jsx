import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { addFoto, addPhoto } from "../../firebase/user";
import { getAuth } from "firebase/auth";
import "./UploadFoto.css"


export function UploadFoto() {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const auth = getAuth();
    const user = auth.currentUser;

    const onSubmit = (data) => {
        const foto = data.arquivo[0];
        const toastId = toast.loading("Upload da imagem...", { position: "top-right" });
        addPhoto(foto).then(url => {
            toast.dismiss(toastId);
            addFoto(url).then(() => {
                toast.success("Foto adicionada", { duration: 2000, position: "bottom-right" })
                navigate("/perfil/usuario")});
            })
            .catch((error) => {
                toast.error(`Aconteceu um erro. Código:${error.code}`);
            })
    }

    return (
        <div className="upload-foto">
            <img alt="" className="imagem-perfil" src={user.photoURL} />
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Form.Group className="mb-3">
                    <div className="container-input">
                        <Form.Control className="borda-right" type="file" accept=".png,.jpg,.jpeg,.gif" {...register("arquivo", { required: true })} />
                        <Button type="submit" variant="success borda-left">Adicionar</Button>
                    </div>
                </Form.Group>
            </Form>
        </div>
    )
}