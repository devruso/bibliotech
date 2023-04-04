import { Button, Card, CardGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Ajuda.css"

export function Ajuda() {
    return (
        <div>
            <h1 className="text-center mt-3 text-success d-flex p-2">Como podemos ajudar ?</h1>
            <hr />
            <CardGroup>
                <Card className="text-center m-2 p-3 border bg-light " style={{ maxWidth: '18rem', maxHeight: 'auto' }}>
                    <Card.Img style={{ maxWidth: '200px', maxHeight: '300px' }} variant="top" src="https://img.freepik.com/vetores-gratis/pilha-de-livros-de-design-plano-desenhado-a-mao_23-2149334862.jpg?w=2000" />
                    <Card.Body>
                        <Card.Title>Livros</Card.Title>
                        <Card.Text className="card-texto">
                            Aqui você pode ver todos os livro do acervo de livros do Bibliotech, exclui-los ou edita-los como quiser.
                        </Card.Text>
                        <Button variant="success" as={Link} to="/livros">Clique aqui!</Button>
                    </Card.Body>
                </Card>
                <Card className="text-center m-2 p-3 border bg-light " style={{ maxWidth: '18rem', maxHeight: 'auto' }}>
                    <Card.Img style={{ maxWidth: '200px', maxHeight: '300px' }} variant="top" src="https://nationaltoday.com/wp-content/uploads/2022/06/5-Return-Borrowed-Books.jpg" />
                    <Card.Body>
                        <Card.Title>Emprestar um livro</Card.Title>
                        <Card.Text className="card-texto">
                            Aqui você pode emprestar ou editar um livro do acervo de livros do Bibliotech.
                        </Card.Text>
                        <Button variant="success" as={Link} to="/emprestimos">Clique aqui!</Button>
                    </Card.Body>
                </Card>
                <Card className="text-center m-2 p-3 border bg-light " style={{ maxWidth: '18rem', maxHeight: 'auto' }}>
                    <Card.Img style={{ maxWidth: '200px', maxHeight: '300px' }} variant="top" src="https://img.freepik.com/vetores-gratis/pilha-de-livros-de-design-plano-desenhado-a-mao_23-2149334862.jpg?w=2000" />
                    <Card.Body>
                        <Card.Title>Adicionar um Livro</Card.Title>
                        <Card.Text className="card-texto">
                            Aqui você pode adicionar um livro ao acervo de livros do Bibliotech.
                        </Card.Text>
                        <Button variant="success" as={Link} to="/livros/adicionar">Clique aqui!</Button>
                    </Card.Body>
                </Card>
                <Card className="text-center m-2 p-3 border bg-light " style={{ maxWidth: '18rem', maxHeight: 'auto' }}>
                    <Card.Img style={{ maxWidth: '200px', maxHeight: '300px' }} variant="top" src="https://nationaltoday.com/wp-content/uploads/2022/06/5-Return-Borrowed-Books.jpg" />
                    <Card.Body>
                        <Card.Title>Adicionar um Emprestimo</Card.Title>
                        <Card.Text className="card-texto1">
                            Aqui você pode adicionar o emprestimo de um livro do acervo do Bibliotech.
                        </Card.Text>
                        <Button variant="success" as={Link} to="/emprestimos/adicionar">Clique aqui!</Button>
                    </Card.Body>
                </Card>
                <Card className="text-center m-2 p-3 border bg-light " style={{ maxWidth: '18rem', maxHeight: 'auto' }}>
                    <Card.Img style={{ maxWidth: '200px', maxHeight: '300px' }} variant="top" src="data:image/png;base64,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" />
                    <Card.Body>
                        <Card.Title>Perfil de Usuário</Card.Title>
                        <Card.Text className="card-texto">
                            Aqui você visualizar editar ou deletar o seu perfil de usuário.
                        </Card.Text>
                        <Button variant="success" as={Link} to="/perfil/usuario">Clique aqui!</Button>
                    </Card.Body>
                </Card>
                <Card className="text-center m-2 p-3 border bg-light " style={{ maxWidth: '18rem', maxHeight: 'auto' }}>
                    <Card.Img style={{ maxWidth: '200px', maxHeight: '300px' }} variant="top" src="https://diegocastro.adv.br/wp-content/uploads/2021/06/politica-privacidade-banner.jpg" />
                    <Card.Body>
                        <Card.Title>Política de privacidade</Card.Title>
                        <Card.Text className="card-texto1">
                            Aqui você pode ver nossa política de privacidade.
                        </Card.Text>
                        <Button variant="success" as={Link} to="/privacidade">Clique aqui!</Button>
                    </Card.Body>
                </Card>
                <Card className="text-center m-2 p-3 border bg-light " style={{ maxWidth: '18rem', maxHeight: 'auto' }}>
                    <Card.Img style={{ maxWidth: '200px', maxHeight: '300px' }} variant="top" src="https://img.freepik.com/vetores-premium/questionario-no-estilo-de-arte-pop-em-quadrinhos-quiz-inteligente-jogo-de-palavra-desenho-de-ilustracao-vetorial_180786-81.jpg?w=2000" />
                    <Card.Body>
                        <Card.Title>Quiz</Card.Title>
                        <Card.Text className="card-texto">
                            Aqui você pode fazer o nosso Quiz dinamico.
                        </Card.Text>
                        <Button variant="success" as={Link} to="/quiz">Clique aqui!</Button>
                    </Card.Body>
                </Card>
            </CardGroup>
            <hr />
            <Button className="m-2" variant="success" as={Link} to="/">Voltar</Button>
        </div>
    );
}