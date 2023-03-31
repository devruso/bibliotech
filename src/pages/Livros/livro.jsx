import { useEffect, useState } from "react";
import { Button, Container, OverlayTrigger, Table, Tooltip, Modal } from "react-bootstrap";
import { toast } from "react-hot-toast";
import { Link } from "react-router-dom";
import { Loader } from "../../components/Loader/Loader";
import { deleteLivro, getLivros } from "../../firebase/livros";
import "./Livros.css";

export function Livros() {

    const [livros, setLivros] = useState(null);
    const [show, setShow] = useState(false);
    const [livroSelecionado, setLivroSelecionado] = useState(null);
   
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        initializeTable();
    }, []);

    function initializeTable() {
        getLivros().then(resultados => {
            setLivros(resultados)
        })
    }

    function onDeleteLivro(id, titulo) {
        const deletar = window.confirm(`Tem certeza que deseja excluir o livro ${titulo}?`);
        if (deletar) {
            deleteLivro(id).then(() => {
                toast.success(`${titulo} apagado com sucesso!`, { duration: 2000, position: "bottom-right" });
                initializeTable();
            })
        }
    }

    return (
        <div className="livros">
            <Container>
                <div className="d-flex justify-content-between align-items-center">
                    <h1>Livros</h1>
                    <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">Clique para adicionar</Tooltip>}>
                        <Button as={Link} to="/livros/adicionar" variant="success">
                            Adicionar Livro
                        </Button>
                    </OverlayTrigger>
                </div>
                <hr />
                {livros === null ?
                    <Loader />
                    :
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>Título</th>
                                <th>Autor</th>
                                <th>Categoria</th>
                                <th>ISBN</th>
                                <th>Imagem</th>
                                <th>Ações</th>
                            </tr>
                        </thead>
                        <tbody>
                            {livros.map(livro => {
                                return (
                                    <tr key={livro.id}>
                                        <td>{livro.titulo}</td>
                                        <td>{livro.autor}</td>
                                        <td>{livro.categoria}</td>
                                        <td>{livro.isbn}</td>
                                        <td>
                                            <img src={livro.urlCapa} alt={livro.titulo} />
                                        </td>
                                        <td className="d-flex  justify-content-center align-items-center
">
                                            <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">Clique para editar</Tooltip>}>
                                                <Button
                                                    as={Link}
                                                    to={`/livros/editar/${livro.id}`}
                                                    variant="warning"
                                                    size="sm"
                                                    className="me-2 h-100"
                                                >
                                                    <i className="bi bi-pencil-fill"></i>
                                                </Button>
                                            </OverlayTrigger>

                                            <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">Clique para excluir</Tooltip>}>
                                                <Button size="sm" variant="danger" onClick={() => onDeleteLivro(livro.id, livro.titulo)}>
                                                    <i className="bi bi-trash3-fill"></i>
                                                </Button>
                                            </OverlayTrigger>

                                           
                                           
                                            <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">Clique para saber as informações</Tooltip>}>
                                            <Button
                                                    size="sm"
                                                    variant="success"
                                                    onClick={() => { setLivroSelecionado(livro); handleShow(); }}
                                                    className="mx-2"
                                                >
                                                    <i class="bi bi-info-circle-fill"></i>
                                                </Button>
                                                </OverlayTrigger>

                                                <Modal show={show} onHide={handleClose}>
                                                    <Modal.Header closeButton>
                                                        <Modal.Title>{livroSelecionado?.titulo}</Modal.Title>
                                                    </Modal.Header>
                                                    <Modal.Body>
                                                        <ul>
                                                        <li><b>Livro</b>: {livroSelecionado?.titulo}</li>
                                                            <li><b>Categoria: </b> {livroSelecionado?.categoria}</li>
                                                            <li><b>Autor: </b> {livroSelecionado?.autor}</li>
                                                        </ul>
                                                    </Modal.Body>
                                                    <Modal.Footer>
                                                        <Button variant="secondary" onClick={handleClose}>
                                                            Close
                                                        </Button>

                                                    </Modal.Footer>
                                                </Modal>

                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>
                }
            </Container>
        </div>
    )
}