import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

import '../estilos/atendimento.css';

const Atendimentos = () => {

  return (
  
    <table>
  <tr>
    <th>Nome do cliente</th>
    <th>Horário</th>
    <th>Tipo de Animal</th>
    <th>Nome do animal</th>
  </tr>
  <tr>
    <td>José Fonseca</td>
    <td>18:30</td>
    <td>Cão</td>
    <td>Totó</td>
  </tr>
  <tr>
    <td>Marco Aurélio</td>
    <td>13:00</td>
    <td>Gato</td>
    <td>Floquinho</td>
  </tr>
</table>



    
  );


    
  };
  
  export default Atendimentos;