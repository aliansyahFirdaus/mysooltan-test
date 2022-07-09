import { Container, Form, InputGroup, Stack } from "react-bootstrap";

import React, { useState } from "react";
import styles from "./Search.module.css";

export default function Search() {
  const [keyword, setKeyword] = useState("");

  const typingHandler = (e) => setKeyword(e.target.value);
  const submitHandler = (e) => {
    e.preventDefault();
    console.log(keyword);
    setKeyword("")
  };

  return (
    <Container className={styles.search}>
      <Stack direction="horizontal" style={{ width: "100%" }} gap={3}>
        <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" />

        <InputGroup className={styles.input}>
          <i className={`fa-solid fa-at ${styles.icon}`}></i>
          <Form onSubmit={submitHandler}>
            <Form.Control
              type="text"
              value={keyword}
              onChange={typingHandler}
            />
          </Form>
        </InputGroup>
      </Stack>
    </Container>
  );
}
