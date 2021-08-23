import React from "react";
import {
   MDBContainer,
   MDBRow,
   MDBCol,
   MDBCard,
   MDBCardBody,
   MDBMask,
   MDBInput,
   MDBIcon,
   MDBView,
   MDBBtn,
} from "mdbreact";
import "./styles.css";
import styled from "styled-components";
import Input2 from "../../compoents/Input2";
import Checkbox from "../../compoents/Checkbox";
import Button from "../../StyledCompoents/Button";
const Wrapper = styled.div`
   min-height: 100%;
   background: rgb(243, 175, 71);
   background: linear-gradient(51deg, rgba(243, 175, 71, 1) 0%, rgba(242, 123, 173, 1) 50%, rgba(0, 0, 178, 1) 100%);
`;

const CardWrapper = styled.div`
   display: flex;
   border-radius: 50px;
   box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.2);
   overflow: hidden;
   flex-direction: column;
`;

const CardHeader = styled.div`
   padding: 3rem;
   color: white;
   background: rgb(255, 255, 255);
   background: linear-gradient(68deg, #abdfec 0%, rgba(91, 209, 237, 1) 58%, rgba(4, 36, 121, 1) 100%);
`;
const CardHeading = styled.h1`
   font-weight: bold;
`;
const CardSubHeading = styled.h2`
   font-weight: 100;
`;

const CardBody = styled.div`
   display: flex;
   padding: 1rem 4rem;
   padding-bottom: 7rem;
   background: white;
   width: 100%;
   flex-direction: column;
`;

const InputWrapper = styled.div`
   display: grid;
   grid-template-rows: 1fr 1fr;
   gap: 3rem;
   width: 100%;
`;
class Login extends React.Component {
   state = {
      collapseID: "",
   };

   toggleCollapse = (collapseID) => () =>
      this.setState((prevState) => ({
         collapseID: prevState.collapseID !== collapseID ? collapseID : "",
      }));

   render() {
      return (
         <div className="classic-form-page" id="login">
            <MDBView>
               <MDBMask className="d-flex justify-content-center align-items-center" overlay="stylish-strong">
                  <MDBContainer>
                     <MDBRow>
                        <MDBCol md="10" lg="6" xl="5" sm="12" className="mt-5 mx-auto">
                           <CardWrapper>
                              <CardHeader>
                                 <CardHeading>BIENVENIDO,</CardHeading>
                                 <CardSubHeading>Porfavor Inicia Sesión</CardSubHeading>
                              </CardHeader>
                              <CardBody>
                                 <InputWrapper>
                                    <Input2 label="Correo" placeholder="Ingrese su correo electrónico"></Input2>
                                    <Input2 label="Contraseña" placeholder="Ingrese su correo electronico"></Input2>
                                 </InputWrapper>
                                 <Checkbox label="Recordarme"></Checkbox>
                                 <Button variant="primary">INICIAR</Button>
                                 <div style={{ marginTop: "1rem", fontSize: "0.8rem" }}>
                                    <span style={{ color: "gray" }}>Aún no eres parte del BDP?. </span>
                                    <b>POSTULAR</b>
                                 </div>
                              </CardBody>
                           </CardWrapper>
                           ;
                        </MDBCol>
                     </MDBRow>
                  </MDBContainer>
               </MDBMask>
            </MDBView>
         </div>
      );
   }
}

export default Login;
