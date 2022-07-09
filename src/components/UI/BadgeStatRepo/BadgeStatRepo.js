import { Badge, Stack } from "react-bootstrap";

import React from "react";
import styles from "./BadgeStatRepo.module.css";

export default function BadgeStatRepo({ icon, name, count }) {
  return (
    <Stack direction="horizontal" className={styles.detail} gap={2}>
      <Stack direction="horizontal" gap={2}>
        <i className={`fa-solid fa-${icon}`} />
        <div className={styles.lines} />
        <p>{name}</p>
      </Stack>
      <Badge pill>{count}</Badge>
    </Stack>
  );
}
