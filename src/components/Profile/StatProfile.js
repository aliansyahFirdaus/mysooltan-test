import { Col } from "react-bootstrap";

import React from "react";
import styles from "./StatProfile.module.css";

export default function StatProfile({ text, count }) {
  return (
    <Col className={styles.badge}>
      <p>{text}</p>
      <span>{count}</span>
    </Col>
  );
}
