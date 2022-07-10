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
          <a href={detail.html_url} target="_blank">
            {detail.name}
          </a>
          <div className={styles.right}>
            <Badge pill className={styles[detail.visibility]}>
              {visibility(detail.visibility)}
            </Badge>
            <div className={styles.star}>
              <i className="fa-regular fa-star" />
              <span>{detail.stargazers_count}</span>
            </div>
          </div>
        </Stack>

        <Stack direction="horizontal" className={styles.bottom} gap={2}>
          <div className={styles.language}>
            <div className={styles.icon} />
            {detail.language || "Unknown"}
          </div>

          <div className={styles.badge}>
            <BadgeStatRepo name="Forks" icon="code-fork" count={detail.forks} />
            <BadgeStatRepo name="Watcher" icon="eye" count={detail.watchers} />
          </div>
        </Stack>
      </Stack>
    </Row>
  );
}
