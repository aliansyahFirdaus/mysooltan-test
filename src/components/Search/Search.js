import { Container, Form, InputGroup } from "react-bootstrap";

import React from "react";
import styles from "./Search.module.css";

export default function Search() {
  return (
    <Container className={styles.search}>
      <InputGroup className="d-flex justify-content-center align-items-center">
        <i className={`fa-solid fa-user ${styles.icon}`}></i>
        <Form.Control type="text" />
      </InputGroup>
    </Container>
  );
}
