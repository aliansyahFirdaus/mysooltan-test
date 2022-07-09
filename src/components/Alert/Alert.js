import { Container } from "react-bootstrap";

import React from "react";
import Card from "../UI/Card/Card";
import styles from "./Alert.module.css";

export default function Alert({ msg }) {
  return (
    <Container>
      <Card>
        <div className={styles.alert}>{msg}</div>
      </Card>
    </Container>
  );
}
