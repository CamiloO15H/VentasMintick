import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
import { DropdownButton, Form, FormControl } from "react-bootstrap";

import Menu from '../navbar/Menu';

const data = [
  { id:1, valorT: 30000, idC: 100, cantidad: 2,precioU : 93,fechaV:"12/02/2021",docC: 10879775,NombreC:"jhon",Encargado:1},
  
];

class Productos extends React.Component {
    state = {
      busqueda:"",
      data: data,
      modalActualizar: false,
      modalInsertar: false,
      form: {
        id: "",
        valorT: "",
        idC: "",
        cantidad:"",
        Encargado:"",
        NombreC:"",
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
          arreglo[contador].Encargado = dato.Encargado;
          arreglo[contador].NombreC = dato.NombreC;
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

    onChange=async e=>{
      e.persist();
      await this.setState({busqueda: e.target.value});
      console.log(this.state.busqueda);
    }
  
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
                 value={this.state.busqueda}
                 onChange={this.onChange}
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <br />
            <br />
            <Table className='table table-light'>
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Nombre Cliente</th>
                  <th scope="col">Identificacion</th>
                  <th scope="col">Correo electronico</th>
                  <th scope="col">Rol del usuario</th>
                  <th scope="col">Estado del usuario</th>
                  <th scope="col"></th>
                  </tr>
              </thead>
  
              <tbody>
                {this.state.data.map((dato) => (
                  <tr key={dato.id}>
                    <td>{dato.id}</td>
                    <td>{dato.NombreC}</td>
                    <td>{dato.valorT}</td>
                    <td>{dato.idC}</td>
                    <td>{dato.cantidad}</td>
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
                  identificacion:
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
                  Correo electronico:
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
                   Rol del usuario: 
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
                  Estado de usuario: 
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
             <div><h3>Informacion General</h3></div>
            </ModalHeader>
  
            <ModalBody>

              <FormGroup>
                <label>
                  Nombre: 
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
                  Identificacion:
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
                  Correo electronico: 
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
                  Rol de usuario: 
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
                  Estado del usuario: 
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
  export default Productos;