import { Badge, Row, Stack } from "react-bootstrap";

import React from "react";
import styles from "./RepositoryItem.module.css";
import BadgeStatRepo from "../UI/BadgeStatRepo/BadgeStatRepo";

export default function RepositoryItem({ detail }) {
  const visibility = (txt) => txt.replace(txt[0], txt[0].toUpperCase());

  return (
    <Row className={styles.item}>
      <Stack gap={3}>
        <Stack direction="horizontal" className={styles.top}>
          <a href={detail.html_url} target="_blank">{detail.name}</a>
          <Badge pill className={styles[detail.visibility]}>
            {visibility(detail.visibility)}
          </Badge>
        </Stack>

        <Stack direction="horizontal" className={styles.bottom} gap={2}>
          <div className={styles.language}>
            <div className={styles.icon} />
            {detail.language || "Unknown"}
          </div>

          <BadgeStatRepo name="Forks" icon="code-fork" count={detail.forks} />
          <BadgeStatRepo name="Watcher" icon="eye" count={detail.watchers} />
        </Stack>
      </Stack>
    </Row>
  );
}
