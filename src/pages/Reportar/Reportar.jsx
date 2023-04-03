import "./Reportar.css"

    
const Reportar = ({ onClose }) => {    
  const handleSubmit = (event) => {
    console.log('Report submitted');
    event.preventDefault();    
    onClose();
  };
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={onClose}>&times;</span>
        <h2>Report </h2>
        <form onSubmit={handleSubmit}>
          <label>
            Em que posso ajudar?
            <textarea required />
          </label>
          <button type="submit">Enviar Report</button>
        </form>
      </div>
    </div>
  );
};

export default Reportar;


{/*}
function ReportButton({ onClick, showModal }) {
    return (
      <button onClick={onClick}>
        Reportar problema
        {showModal && (
          <div className="report-modal">
            <form>
              <label htmlFor="report-description">Em que podemos te ajudar?</label>
              <textarea id="report-description"></textarea>
              <button type="submit">Enviar </button>
            </form>
            <button onClick={onClick}>&times;</button>
          </div>
        )}
      </button>
    );
  } */}