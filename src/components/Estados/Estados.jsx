import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './Estilos.css';
import {
  Table,
  Button,
  Container,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  ModalFooter,
} from "reactstrap";

import Menu from '../navbar/Menu';
import { DropdownButton, Form, FormControl } from "react-bootstrap";

const data = [
  { id:1, valorT: 30000, idC: 100, cantidad: 2,precioU : 93,fechaV:"12/02/2021",docC: 10879775,NombreC:"jhon",Encargado:1},
  
];

class Estados extends React.Component {
  state = {
    data: data,
    modalActualizar: false,
    modalInsertar: false,
    form: {
      id: "",
      valorT: "",
      idC: "",
      cantidad:"",
      precioU:"",
      fechaV:"",
      docC:"",
      NombreC:"",
      Encargado:"",

    },
  };

  mostrarModalActualizar = (dato) => {
    this.setState({
      form: dato,
      modalActualizar: true,
    });
  };

  cerrarModalActualizar = () => {
    this.setState({ modalActualizar: false });
  };

  mostrarModalInsertar = () => {
    this.setState({
      modalInsertar: true,
    });
  };

  cerrarModalInsertar = () => {
    this.setState({ modalInsertar: false });
  };

  editar = (dato) => {
    var contador = 0;
    var arreglo = this.state.data;
    arreglo.map((registro) => {
      if (dato.id == registro.id) {
        arreglo[contador].valorT = dato.valorT;
        arreglo[contador].idC = dato.idC;
        arreglo[contador].cantidad = dato.cantidad;
        arreglo[contador].precioU = dato.precioU;
        arreglo[contador].fechaV = dato.fechaV;
        arreglo[contador].docC = dato.docC;
        arreglo[contador].NombreC = dato.NombreC;
        arreglo[contador].Encargado = dato.Encargado;
      }
      contador++;
    });
    this.setState({ data: arreglo, modalActualizar: false });
  };

  eliminar = (dato) => {
    var opcion = window.confirm("Estás Seguro que deseas Eliminar el elemento "+dato.id);
    if (opcion == true) {
      var contador = 0;
      var arreglo = this.state.data;
      arreglo.map((registro) => {
        if (dato.id == registro.id) {
          arreglo.splice(contador, 1);
        }
        contador++;
      });
      this.setState({ data: arreglo, modalActualizar: false });
    }
  };

  insertar= ()=>{
    var valorNuevo= {...this.state.form};
    valorNuevo.id=this.state.data.length+1;
    var lista= this.state.data;
    lista.push(valorNuevo);
    this.setState({ modalInsertar: false, data: lista });
  }

  handleChange = (e) => {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value,
      },
    });
  };

  render() {
    
    return (
      <>


      <header>
        <Menu/>
      </header>


        <Container>
        <br />
        <Form className="d-flex">
             <FormControl
                 type="search"
                 placeholder="Search"
                 className="me-2"
                 aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          <br />
          <br />
          <Table className='table table-light'>
            <thead>
              <tr>
                <th scope="col">Id</th>
                <th scope="col">Valor Total</th>
                <th scope="col">Identificador</th>
                <th scope="col">Cantidad</th>
                <th scope="col">Precio Unitario</th>
                <th scope="col">Fecha de Venta</th>
                <th scope="col">Documento</th>
                <th scope="col">Nombre Cliente</th>
                <th scope="col">Encargado</th>
                <th scope="col"></th>
              </tr>
            </thead>

            <tbody>
              {this.state.data.map((dato) => (
                <tr key={dato.id}>
                  <td>{dato.id}</td>
                  <td>{dato.valorT}</td>
                  <td>{dato.idC}</td>
                  <td>{dato.cantidad}</td>
                  <td>{dato.precioU}</td>
                   <td>{dato.fechaV}</td>
                  <td>{dato.docC}</td>
                  <td>{dato.NombreC}</td>
                   <td>{dato.Encargado}</td>
                  <td>
                    <DropdownButton>
                    <Button
                      color="primary"
                      onClick={() => this.mostrarModalActualizar(dato)}
                    >
                      Editar
                    </Button>{" "}
                    <Button color="danger" onClick={()=> this.eliminar(dato)}>Eliminar</Button>
                    </DropdownButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>

          <center>
          <Button color="success" id='crear' onClick={()=>this.mostrarModalInsertar()}>Crear</Button>
          </center>

        </Container>

        <Modal isOpen={this.state.modalActualizar}>
          <ModalHeader>
           <div><h3>Editar Registro</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
               Id:
              </label>
            
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.form.id}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                Valor Total: 
              </label>
              <input
                className="form-control"
                name="valorT"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.valorT}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                identificacion: 
              </label>
              <input
                className="form-control"
                name="idC"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.idC}
              />
            </FormGroup>
             <FormGroup>
              <label>
                cantidad: 
              </label>
              <input
                className="form-control"
                name="cantidad"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.cantidad}
              />
            </FormGroup>
             <FormGroup>
              <label>
                precio unitario: 
              </label>
              <input
                className="form-control"
                name="precioU"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.precioU}
              />
            </FormGroup>
             <FormGroup>
              <label>
                fecha de Venta: 
              </label>
              <input
                className="form-control"
                name="fechaV"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.fechaV}
              />
            </FormGroup>
             <FormGroup>
              <label>
                documento cliente: 
              </label>
              <input
                className="form-control"
                name="docC"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.docC}
              />
            </FormGroup>
             <FormGroup>
              <label>
                Nombre del cliente: 
              </label>
              <input
                className="form-control"
                name="NombreC"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.NombreC}
              />
            </FormGroup>
             <FormGroup>
              <label>
                Encargado: 
              </label>
              <input
                className="form-control"
                name="Encargado"
                type="text"
                onChange={this.handleChange}
                value={this.state.form.Encargado}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.editar(this.state.form)}
            >
              Editar
            </Button>
            <Button
              color="danger"
              onClick={() => this.cerrarModalActualizar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>



        <Modal isOpen={this.state.modalInsertar}>
          <ModalHeader>
           <div><h3>Registro de Compras</h3></div>
          </ModalHeader>

          <ModalBody>
            <FormGroup>
              <label>
                Id: 
              </label>
              
              <input
                className="form-control"
                readOnly
                type="text"
                value={this.state.data.length+1}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                valor Total: 
              </label>
              <input
                className="form-control"
                name="valorT"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
            
            <FormGroup>
              <label>
                identificacion: 
              </label>
              <input
                className="form-control"
                name="idC"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>

             <FormGroup>
              <label>
                cantidad: 
              </label>
              <input
                className="form-control"
                name="cantidad"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
             <FormGroup>
              <label>
                precio Unitario: 
              </label>
              <input
                className="form-control"
                name="precioU"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
             <FormGroup>
              <label>
                fecha venta: 
              </label>
              <input
                className="form-control"
                name="fechaV"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
             <FormGroup>
              <label>
                documento del cliente: 
              </label>
              <input
                className="form-control"
                name="docC"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
             <FormGroup>
              <label>
                Nombre cliente: 
              </label>
              <input
                className="form-control"
                name="NombreC"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
             <FormGroup>
              <label>
                Encargado: 
              </label>
              <input
                className="form-control"
                name="Encargado"
                type="text"
                onChange={this.handleChange}
              />
            </FormGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary"
              onClick={() => this.insertar()}
            >
              Insertar
            </Button>
            <Button
              className="btn btn-danger"
              onClick={() => this.cerrarModalInsertar()}
            >
              Cancelar
            </Button>
          </ModalFooter>
        </Modal>
      </>
    );
  }
}
export default Estados;
