import React from "react";
import { Container } from "react-bootstrap";
import Card from "../UI/Card/Card";
import styles from "./Error.module.css";

export default function Error({ msg }) {
  return (
    <Container>
      <Card>
        <div className={styles.error}>{msg}</div>
      </Card>
    </Container>
  );
}
