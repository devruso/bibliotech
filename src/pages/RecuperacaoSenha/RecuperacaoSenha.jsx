import { Button, FormControl, Form } from "react-bootstrap";
import "./RecuperacaoSenha.css"
import { useForm } from "react-hook-form";
import { resetSenha } from "../../firebase/user";
import { useNavigate } from "react-router";
import { toast } from "react-hot-toast";

export function RecuperacaoSenha() {
    const {register, handleSubmit, formState: { errors }} = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const toastId = toast.loading("Enviando e-mail", { position: "top-right" });
        resetSenha(data.email).then(() => {
            toast.dismiss(toastId);
            navigate("/login");
            toast.success("E-mail enviado com sucesso. Verifique sua caixa de entrada!", { duration: 2000, position: "bottom-right" })
        }).catch ((error) => {
                console.log(error);
                alert("Ocorreu um erro ao enviar o e-mail de recuperação de senha. Por favor, tente novamente mais tarde.");
        })
    }

    return (
        <div className="container w-75 vh-100 d-flex align-items-center justify-content-center">
            <Form onSubmit={handleSubmit(onSubmit)}
            className="center-recup-senha d-flex align-items-center justify-content-center">
                <Form.Group class="text-start m-5 w-75 " controlId="email">
                    <h1 className="mb-4">Recuperação de senha</h1>
                    <hr className=""/>
                    <Form.Label className="mb-4 mt-3">Para recuperar sua senha, informe seu endereço de e-mail válido que nós enviaremos um link para a alteração de senha.</Form.Label>
                    <Form.Label >Email</Form.Label>
                    <div className="d-flex  responsividade-600">
                        <FormControl className="borda-right" type="email" placeholder="Digite seu e-mail"  {...register("email", { required: true })}/>
                        <Button className="borda-left" size="sm" variant="primary" type="submit">
                            Recuperar
                        </Button>
                    </div>
                    {errors.email && <span className="text-danger">Campo obrigatório</span>}
                    <Form.Label className="mt-1 text-muted">Voltar para login? <a href="/login">Clique aqui</a></Form.Label>
                </Form.Group>
            </Form>
        </div>
    )
}
