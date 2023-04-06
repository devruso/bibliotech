import { useState, useEffect } from "react"
import { getPostagens } from "../../firebase/blog";
import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemeContext";
import { Toast, Container } from 'react-bootstrap';



export function BlogLista() {

  const [postagens, setPostagens] = useState([])
  const resultado = useContext(ThemeContext);
  const temaEscuro = resultado.temaEscuro;

  useEffect(() => {
    initializeTable();

  }, []);

  function initializeTable() {
    getPostagens().then(resultados => {
      setPostagens(resultados)
    })
  }



  return (
    <div className={`${temaEscuro ? "bg-dark text-light" : "bg-light text-dark"} postagens`}>
      {postagens.map((postagem) => {
        return (
          <>
            <Container className="vh-90">
              <Toast className="mb-2">
                <div className={`${temaEscuro ? "bg-dark text-light" : "bg-light text-dark"} postagens`}>
                  <Toast.Header>
                    <strong className="me-auto">{postagem.postTitle}</strong>
                  </Toast.Header>
                  <Toast.Body>{postagem.postContent}</Toast.Body>
                </div>
              </Toast>
            </Container>
          </>
        )
      })}
    </div>
  );



}