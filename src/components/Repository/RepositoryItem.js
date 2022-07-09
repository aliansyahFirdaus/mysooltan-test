import { Badge, Row, Stack } from "react-bootstrap";

import React from "react";
import styles from "./RepositoryItem.module.css";

export default function RepositoryItem({visibility}) {
  return (
    <Row className={styles.item}>
      <Stack gap={3}>
        <Stack direction="horizontal" className={styles.top}>
          <a href="#">100DayOfCode-cart-redux</a>
          <Badge pill className={styles[visibility]}>Public</Badge>
        </Stack>

        <Stack direction="horizontal" className={styles.bottom} gap={2}>
          <div className={styles.language}>
            <div className={styles.icon} />
            Javascript
          </div>
          <Stack direction="horizontal" className={styles.detail} gap={2}>
            <Stack direction="horizontal" gap={2}>
              <i className="fa-solid fa-code-fork" />
              <div className={styles.lines} />
              <p>Fork</p>
            </Stack>
            <Badge pill>2</Badge>
          </Stack>
          <Stack direction="horizontal" className={styles.detail} gap={2}>
            <Stack direction="horizontal" gap={2}>
              <i className="fa-solid fa-eye" />
              <div className={styles.lines} />
              <p>Wathcer</p>
            </Stack>
            <Badge pill>0</Badge>
          </Stack>
        </Stack>
      </Stack>
    </Row>
  );
}
