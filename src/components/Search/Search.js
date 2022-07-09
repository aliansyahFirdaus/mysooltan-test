import { Container, Form, InputGroup, Stack } from "react-bootstrap";

import React from "react";
import styles from "./Search.module.css";

export default function Search() {
  return (
    <Container className={styles.search}>
      <Stack direction="horizontal" gap={3}>
        
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />

        <InputGroup className={styles.input}>
          <i className={`fa-solid fa-at ${styles.icon}`}></i>
          <Form.Control type="text" />
        </InputGroup>

      </Stack>
    </Container>
  );
}
