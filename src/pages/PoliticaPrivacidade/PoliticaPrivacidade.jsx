import { Link } from "react-router-dom";
import "./PoliticaPrivacidade.css"
import { Accordion, ListGroup } from "react-bootstrap";

export function PoliticaPrivacidade() {
    return (
        <div>
            <ListGroup as="ul">
                <Accordion>
                    <ListGroup.Item as="li">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header><h1>Declaração de Privacidade</h1></Accordion.Header>
                            <Accordion.Body>
                                <p>
                                    O objetivo desta política de privacidade é fornecer informações sobre o processamento de dados pessoais
                                    ao utilizar o nosso Web site e serviços associados. <br />
                                    No âmbito do significado do Art.º 4º do Regulamento Geral de Protecção de Dados da UE (GDPR),
                                    dados pessoais são todas as informações relativas a uma pessoa singular identificada ou identificável,
                                    por exemplo, nome, endereço, endereço de e-mail, etc. <br />
                                    Respeitamos o seu direito à privacidade e não recolhemos neste site qualquer informação pessoal sobre
                                    si sem o seu consentimento. <br />
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                        <Accordion.Item eventKey="1">
                            <Accordion.Header><h3>Recolha e utilização de dados pessoais</h3></Accordion.Header>
                            <Accordion.Body>
                                <p>
                                    Não recolhemos os seus dados pessoais neste site, a menos que voluntariamente os forneça (por exemplo,
                                    quando utiliza o nosso formulário para nos dirigir um pedido de informação ou uma queixa). <br />
                                    Qualquer informação que nos forneça por esta via será apenas utilizada para a finalidade descrita e
                                    com as garantias de segurança e confidencialidade, exigidas pelo GDPR. <br />
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                        <Accordion.Item eventKey="2">
                            <Accordion.Header><h3>Ligações a Sites de terceiros</h3></Accordion.Header>
                            <Accordion.Body>
                                <p>
                                    A nossa política de privacidade não é aplicada a sites de terceiros, pelo que, caso visite outro site a
                                    partir do nosso deverá ler a politica de privacidade do mesmo. <br />
                                    Não nos responsabilizamos pela política de privacidade ou conteúdo presente nesses mesmos sites. <br />
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                        <Accordion.Item eventKey="3">
                            <Accordion.Header><h3>Cookies</h3></Accordion.Header>
                            <Accordion.Body>
                                <h5>O que são Cookies</h5>
                                <p>
                                    Na nossa página web, usamos os chamados cookies com base no Artigo 6º, n.º 1, alínea f) do RGPD. Os cookies
                                    são pequenos ficheiros que são gravados no seu dispositivo (computador portátil, tablet, smartphone ou afins)
                                    quando visita a nossa página web. Os cookies não provocam danos no seu dispositivo, não contêm vírus,
                                    cavalos de tróia nem outro software prejudicial. O cookie regista informações geradas em relação ao
                                    dispositivo especificamente utilizado. Mas isto não significa que, deste modo, tenhamos acesso direto à sua
                                    identidade.
                                </p>
                                <h5>Para que servem?</h5>
                                <p>
                                    Utilizamos os cookies para registo estatístico da utilização da nossa página web, com o objetivo de
                                    otimizar a nossa oferta e para apresentarmos informações especialmente adequadas ao seu perfil específico. <br />
                                    Com estes cookies, quando nos visitar novamente, reconhecemos que já nos visitou antes. Estes cookies
                                    são automaticamente eliminados passado um período definido. <br />
                                    A maioria dos browsers aceita automaticamente os cookies. Contudo, pode configurar o seu browser de modo
                                    que não sejam gravados cookies no seu computador ou que seja sempre apresentado um aviso antes de ser
                                    criado um novo cookie. <br />
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                        <Accordion.Item eventKey="4">
                            <Accordion.Header><h3>Web Analytics</h3></Accordion.Header>
                            <Accordion.Body>
                                <h5>Google Analytics</h5>
                                <p>
                                    Este Website utiliza o Google Analytics, um serviço de análise da Web da Google Inc. (“Google”). O Google
                                    Analytics usa um tipo específico de cookie, que é armazenado no seu computador e permite apenas uma
                                    análise da utilização do nosso Website. <br />
                                    Mais informações sobre o processamento de dados pelo Google Analytics podem ser encontradas nos
                                    <Link to={"https://www.google.com/analytics/terms/pt.html"} target="_blank"> Termos de Serviço do Google Analytics</Link>. <br />
                                    O cliente pode configurar o seu navegador para recusar o armazenamento de cookies. <br />
                                    O cliente pode igualmente impedir que os dados gravados gerados pelos cookies relativamente à utilização
                                    do website (incluindo o endereço de IP) sejam enviados para a Google e impedir o tratamento dos mesmos
                                    pela Google através do download e instalação de um plug-in no navegador disponível no seguinte
                                    endereço: http://tools.google.com/dlpage/gaoptout?hl=pt <br />
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </ListGroup.Item>
                    <ListGroup.Item as="li">
                        <Accordion.Item eventKey="5">
                            <Accordion.Header><h3>Mudanças nesta Política de Privacidade e Cookies</h3></Accordion.Header>
                            <Accordion.Body>
                                <p>
                                    Reservamo-nos o direito de modificar esta declaração. As mudanças serão publicadas e publicitadas no nosso website.
                                </p>
                            </Accordion.Body>
                        </Accordion.Item>
                    </ListGroup.Item>
                </Accordion >
            </ListGroup>
        </div >
    );
}