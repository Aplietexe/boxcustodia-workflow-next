import {
  Col,
  FloatingLabel,
  Form,
  Image as ImageComponent,
  Row,
} from "react-bootstrap"
import styled from "styled-components"

import AccentButton from "../common/AccentButton"
import sendIcon from "../../assets/ContactForm/send.svg"

const StyledForm = styled(Form)`
  font-family: "Poppins", sans-serif;
  font-size: 1.125rem;
  font-weight: 300;
  color: var(--gray-dark);

  input,
  textarea {
    border-radius: calc(var(--border-radius) * 0.7);
  }

  input {
    height: 60px;
  }

  textarea {
    height: 120px !important;
  }

  img {
    margin-left: 0.75rem;
  }
`

const ContactFormBody = () => (
  <Row className="py-5 mt-5">
    <Col xs={{ offset: 1, span: 10 }}>
      <StyledForm className="px-2">
        <FloatingLabel
          className="mb-3"
          controlId="name"
          label="Nombre y apellido"
        >
          <Form.Control placeholder="Nombre y apellido" type="text" />
        </FloatingLabel>
        <FloatingLabel className="mb-3" controlId="phone" label="Teléfono">
          <Form.Control placeholder="Teléfono" type="text" />
        </FloatingLabel>
        <FloatingLabel className="mb-3" controlId="email" label="Email">
          <Form.Control placeholder="Email" type="email" />
        </FloatingLabel>
        <FloatingLabel
          className="mb-3"
          controlId="companyField"
          label="Empresa"
        >
          <Form.Control placeholder="Empresa" type="text" />
        </FloatingLabel>
        <FloatingLabel className="mb-4" controlId="message" label="Mensaje">
          <Form.Control as="textarea" placeholder="Mensaje" type="text" />
        </FloatingLabel>
        <AccentButton>
          Enviar
          <ImageComponent
            alt="Enviar"
            fluid
            height={27}
            src={sendIcon}
            width={32}
          />
        </AccentButton>
      </StyledForm>
    </Col>
  </Row>
)

export default ContactFormBody
