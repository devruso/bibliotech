import { useEffect, useState } from "react";
import { Card, CardGroup } from "react-bootstrap";
import { getLivros } from "../../firebase/livros";
import { getUsers } from "../../firebase/user";
import { getEmprestimos } from "../../firebase/emprestimos";
import { ThemeContext } from "../../contexts/ThemeContext";
import { useContext } from "react";

export function Home() {

  const [users, setUsers] = useState(0);
  const [livros, setLivros] = useState(0);
  const [emprestimos, setEmprestimos] = useState(0);
  const [emprestimosDevolvidos, setEmprestimosDevolvidos] = useState(0);
  const [emprestimosPendentes, setEmprestimosPendentes] = useState(0);

  const resultado = useContext(ThemeContext);
  const temaEscuro = resultado.temaEscuro;

  useEffect(() => {
    getUsers().then((data) => {
      setUsers(data.length)
    });
    getLivros().then((data) => {
      setLivros(data.length)
    });
    getEmprestimos().then((data) => {
      setEmprestimos(data.length)
      setEmprestimosDevolvidos(
        data.filter((emprestimo) => emprestimo.status === "Entregue").length
      )
      setEmprestimosPendentes(
        data.filter((emprestimo) => emprestimo.status === "Pendente").length
      )
    });
  }, []);

  return (
    <div className={`${temaEscuro ? "bg-dark text-light" : "bg-light text-dark"} home`}>
      <h3 className="d-flex align-items-center mt-4">Visão geral</h3> <hr />
      <CardGroup>
        <Card className="text-center m-2 p-3 border bg-light " style={{ maxWidth: '18rem', maxHeight: 'auto' }}>
          <Card.Body className={temaEscuro ? "bg-dark text-light" : "bg-light text-dark"}>
            <Card.Title>Total de usuários</Card.Title>
            <Card.Text className="text-success">
              {users}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="text-center m-2 p-3 border bg-light " style={{ maxWidth: '18rem', maxHeight: 'auto' }}>
          <Card.Body className={temaEscuro ? "bg-dark text-light" : "bg-light text-dark"}>
            <Card.Title>Total de livros</Card.Title>
            <Card.Text className="text-success">
              {livros}
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className="text-center m-2 p-3 border bg-light " style={{ maxWidth: '18rem', maxHeight: 'auto' }}>
          <Card.Body className={temaEscuro ? "bg-dark text-light" : "bg-light text-dark"}>
            <Card.Title>Total de empréstimos: {emprestimos}</Card.Title>
            <Card.Text className="text-success">
              {`${emprestimosDevolvidos} Devolvidos`}
            </Card.Text>
            <Card.Text className="text-warning">
              {`${emprestimosPendentes} Pendentes`}
            </Card.Text>
          </Card.Body>
        </Card>
      </CardGroup>
    </div>
  );
}
