import { Button, Container } from 'react-bootstrap';
import Quiz1 from "../../assets/images/quiz.png"
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import "./BemVindo.css"

export function BemVindo() {

  const resultado = useContext(ThemeContext);
  const temaEscuro = resultado.temaEscuro;
  const navigate = useNavigate();

  function entrarQuiz() {
    navigate("/quiz/perguntas");
  }

  return (

    <div className={`${temaEscuro ? "bg-dark text-light" : "bg-light text-dark"} bemvindo d-flex justify-content-center `}>
    <Container className={`${temaEscuro ? "bg-dark text-light" : "bg-light text-dark"}`} style={{ maxWidth: '600px', margin: 'auto' }}>
      <div className="quiz my-5 text-center">
        <h2>Seja bem vindo(a) ao nosso quiz!</h2>
        <p><img src={Quiz1} alt="inicio-quiz" /></p>
        <p>Cada questão vale 10 pontos, o máximo é 100 pontos. Clique no botão abaixo para iniciar:</p>
        <Button className="btn btn-success" onClick={entrarQuiz}>Iniciar</Button>
      </div>
    </Container> </div>
  );
}
