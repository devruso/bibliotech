import { useEffect, useState } from "react";
import { Badge, Button, Container, OverlayTrigger, Table, Tooltip, Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";
import { collection, endBefore, startAfter, getDocs, limit, limitToLast, orderBy, query } from "firebase/firestore";
import { getEmprestimos } from "../../firebase/emprestimos";
import { db } from "../../firebase/config";
import { Loader } from "../../components/Loader/Loader";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";

export function Emprestimos() {

    const [emprestimos, setEmprestimos] = useState(null);
    const resultado = useContext(ThemeContext);
    const temaEscuro = resultado.temaEscuro;
    const [indice, setIndice] = useState(1);
    const [last, setLast] = useState(null);
    const [first, setFirst] = useState(null);

    useEffect(() => {
        const buscaEmprestimos = async () => {
          const emprestimos = await getEmprestimos();
          setEmprestimos(emprestimos);
          
          const atual = query(
            collection(db, "emprestimos"),
            orderBy("dataEmprestimo", "desc"),
            limit(5)
          );
          const snapshot = await getDocs(atual);
          let paginaAtual = [];
          const lastVisible = snapshot.docs[snapshot.docs.length - 1];
          setLast(lastVisible);
          const first = snapshot.docs[0];
          setFirst(first);
          snapshot.forEach((doc) => {
            paginaAtual.push({ ...doc.data(), id: doc.id });
          });
          setEmprestimos(paginaAtual);
        }
      
        buscaEmprestimos();
      }, []);
      

      function avancarPagina() {
        const nextPage = query(
            collection(db, "emprestimos"),
            orderBy("dataEmprestimo", "desc"),
            startAfter(last),
            limit(5)
        );
        getDocs(nextPage).then((snapshot) => {
            if (!snapshot.empty) {
                let calculo = indice + 1;
                setIndice(calculo);
                let paginaAtual = [];
                const lastVisible = snapshot.docs[snapshot.docs.length - 1];
                setLast(lastVisible);
                const first = snapshot.docs[0];
                setFirst(first);
                snapshot.forEach((doc) => {
                    paginaAtual.push({ ...doc.data(), id: doc.id });
                });
                setEmprestimos(paginaAtual);
            }
        });
    }

    function retrocederPagina() {
        const prevPage = query(
            collection(db, "emprestimos"),
            orderBy("dataEmprestimo", "desc"),
            endBefore(first),
            limitToLast(5)
        );
        getDocs(prevPage).then((snapshot) => {
            if (!snapshot.empty) {
                let calculo = indice - 1;
                setIndice(calculo);

                let paginaAtual = [];
                const lastVisible = snapshot.docs[snapshot.docs.length - 1];
                setLast(lastVisible);
                const first = snapshot.docs[0];
                setFirst(first);
                snapshot.forEach((doc) => {
                    paginaAtual.push({ ...doc.data(), id: doc.id });
                });
                setEmprestimos(paginaAtual);
            }
        });
    }
    return (
        <div className={`${temaEscuro ? "bg-dark text-light" : "bg-light text-dark"} emprestimos`}>
            <Container>
                <div className="d-flex justify-content-between align-items-center">
                    <h1>Emprestimos</h1>
                    <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">Clique para adicionar</Tooltip>}>
                        <Button as={Link} to="/emprestimos/adicionar" variant={temaEscuro ? "dark" : "success"}>Adicionar emprestimo</Button>
                    </OverlayTrigger>
                </div>
                <hr />
                {
                    emprestimos === null ?
                        <Loader />
                        :
                        <Table striped bordered hover className={temaEscuro ? "table table-dark" : ""}>
                            <thead>
                                <tr>
                                    <th>Leitor</th>
                                    <th>E-mail</th>
                                    <th>Telefone</th>
                                    <th>Livro</th>
                                    <th>Status</th>
                                    <th>Data de Empréstimo</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>
                            <tbody>
                                {emprestimos.map(emprestimo => {
                                    const dataEmprestimo = emprestimo.dataEmprestimo.toDate().toLocaleDateString('pt-br');
                                    return (
                                        <tr key={emprestimo.id}>
                                            <td>{emprestimo.leitor}</td>
                                            <td>{emprestimo.email}</td>
                                            <td>{emprestimo.telefone}</td>
                                            <td>{emprestimo.livro.titulo}</td>
                                            <td>
                                                <Badge bg={emprestimo.status === "Pendente" ? "warning" : "success"}>{emprestimo.status}</Badge>
                                            </td>
                                            <td>{dataEmprestimo}</td>
                                            <td>
                                                <OverlayTrigger placement="bottom" overlay={<Tooltip id="button-tooltip-2">Clique para editar</Tooltip>}>
                                                    <Button
                                                        as={Link}
                                                        to={`/emprestimos/editar/${emprestimo.id}`}
                                                        variant="warning"
                                                        size="sm"
                                                    >
                                                        <i className="bi bi-pencil-fill"></i>
                                                    </Button>
                                                </OverlayTrigger>
                                            </td>
                                        </tr>
                                    )
                                })}
                            </tbody>
                        </Table>
                }
                <Pagination className="d-flex justify-content-center">
                    <Button variant="none" onClick={retrocederPagina}>
                        <Pagination.Prev />
                    </Button>
                    <Button variant="none">
                        <Pagination.Item active>
                            {indice}
                        </Pagination.Item>
                    </Button>
                    <Button variant="none" onClick={avancarPagina}>
                        <Pagination.Next />
                    </Button>
                </Pagination>
            </Container>
        </div>
    )
}