import { Badge, Row, Stack } from "react-bootstrap";

import React from "react";
import styles from "./RepositoryItem.module.css";
import BadgeStatRepo from "../UI/BadgeStatRepo/BadgeStatRepo";

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

          <BadgeStatRepo name="Fork" icon="code-fork" count={2} />
          <BadgeStatRepo name="Watcher" icon="eye" count={20} />
        </Stack>
      </Stack>
    </Row>
  );
}
