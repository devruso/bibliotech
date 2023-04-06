import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Cadastro } from "./pages/Cadastro/Cadastro";
import { Home } from "./pages/Home/Home";
import { Login } from "./pages/Login/Login";
import { Root } from "./pages/Root/Root";
import { Toaster } from "react-hot-toast";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase/config";
import { AuthContext } from "./contexts/AuthContext";
import { AdicionarLivro } from "./pages/AdicionarLivro/AdicionarLivro";
import { Livros } from "./pages/Livros/Livros";
import { EditarLivro } from "./pages/EditarLivro/EditarLivro";
import { AdicionarEmprestimo } from "./pages/AdicionarEmprestimo/AdicionarEmprestimo";
import { Emprestimos } from "./pages/Emprestimos/Emprestimos";
import { EditarEmprestimo } from "./pages/EditarEmprestimo/EditarEmprestimo";
import { PerfilUsuario } from "./pages/PerfilUsuario/PerfilUsuario";
import { ThemeContext } from "./contexts/ThemeContext";
import { BemVindo } from "./pages/BemVindo/BemVindo";
import { Quiz } from "./pages/Quiz/Quiz";
import { Footer } from "./components/Footer/Footer";
import NotFound from "./pages/NotFound/NotFound";
import { PoliticaPrivacidade } from "./pages/PoliticaPrivacidade/PoliticaPrivacidade";
import { Ajuda } from "./pages/Ajuda/Ajuda";
import { Chat } from "./pages/Chat/Chat";
import { RecuperacaoSenha } from "./pages/RecuperacaoSenha/RecuperacaoSenha";
import { EmailVerification } from "./pages/EmailVerification/EmailVerification"
import { Loader } from "./components/Loader/Loader";
import { BlogLista } from "./pages/BlogLista/BlogLista";


export function App() {
  const [usuarioLogado, setUsuarioLogado] = useState(null);
  const [loading, setLoading] = useState(true);
  const [temaEscuro, setTemaEscuro] = useState(false);

  function alternar() {
    if (temaEscuro === true) {
      setTemaEscuro(false);
    } else {
      setTemaEscuro(true);
    }
  }
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUsuarioLogado(user);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Loader />;
  }



  return (
    <>
      <ThemeContext.Provider
        value={{ temaEscuro: temaEscuro, alternar: alternar }}
      >
        <AuthContext.Provider value={usuarioLogado}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Root />}>
                <Route path="/" element={<Home />} />
                <Route path="/livros" element={<Livros />} />
                <Route path="/livros/adicionar" element={<AdicionarLivro />} />
                <Route path="/livros/editar/:id" element={<EditarLivro />} />
                <Route path="/emprestimos" element={<Emprestimos />} />
                <Route path="/emprestimos/adicionar" element={<AdicionarEmprestimo />} />
                <Route path="/emprestimos/editar/:id" element={<EditarEmprestimo />} />
                <Route path="/quiz" element={<BemVindo></BemVindo>}>  </Route>
                <Route path="/quiz/perguntas" element={<Quiz></Quiz>}></Route>
                <Route path="/perfil/usuario" element={<PerfilUsuario />} />
                <Route path="/footer" element={<Footer />} />
                <Route path="/chat" element={<Chat />} />
                <Route path="/blog" element={<BlogLista />} />
                <Route path="/ajuda" element={<Ajuda />} />
                </Route>
              <Route path="/login" element={<Login />} />
              <Route path="/recuperacao-senha" element={<RecuperacaoSenha />} />
              <Route path="/cadastro" element={<Cadastro />} />
              <Route path="/confirmaremail" element={<EmailVerification/>} />
              <Route path="*" element={<NotFound/>} />
              <Route path="/footer" element={<Footer/>} />
              <Route path="/privacidade" element={<PoliticaPrivacidade />} />
              
            </Routes>
          </BrowserRouter>
        </AuthContext.Provider>
      </ThemeContext.Provider>
      <Toaster />
    </>
  );
}
