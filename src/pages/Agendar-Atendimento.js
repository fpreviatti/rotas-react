import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import "../estilos/agendar-atendimento.css";

const AgendarAtendimento = () => {
  return (
    <form className="formulario" action="" method="post">
      <label htmlFor ="fname" className="label-estilizado">
        Nome do cliente
      </label>
      <br></br>
      <input type="text" className="input-estilizado" ></input>
      <br></br>

      <label htmlFor ="fname" className="label-estilizado">
        Nome do cliente
      </label>
      <br></br>
      <input type="text" className="input-estilizado" ></input>
      <br></br>

      <label htmlFor ="fname" className="label-estilizado">
        Nome do cliente
      </label>
      <br></br>
      <input type="text" className="input-estilizado" ></input>
      <br></br>

      <input type="submit" value="Agendar atendimento"></input>
    </form>
  );
};

export default AgendarAtendimento;
