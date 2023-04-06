import { emailVerif } from "../../firebase/auth";
import { auth } from "../../firebase/config";
import login from "../../assets/images/login.png"


export function EmailVerification() {
  const user = auth.currentUser
  const userEmail = user ? user.email : "";
  const isEmailVerified = user ? user.emailVerified : false;
  const handleResendVerification = () => {
    emailVerif(user)
    alert("Email de verificação enviado. Verifique seu email e tente novamente.");
  };

  if (!isEmailVerified) {
    return(
      <div className="card" >
            <div className='vh-100 text-black bg-success p-3 mb-3 text-light d-flex flex-column align-items-center justify-content-center text-align-center' >
            <div className="card w-25 h-50 card border-success mb-3 d-flex align-items-center justify-content-center text-align-center ">
            <img className="card_img_top"style={{width: '250px'}}  src={login} alt="Imagem do card"></img>
          
        <p className="mb-4 fs-5" > <strong> Email({userEmail}) ainda não foi verificado. Por favor, verifique seu email para liberar seu cadastro.</strong></p>
        <button onClick={handleResendVerification}>Reenviar email de verificação</button>
        </div>
      </div>
      </div>
    );

}

return <div>Seu email ({userEmail}) foi verificado.</div>;

}