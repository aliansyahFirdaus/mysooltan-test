import { Button, Col, Container, Stack } from "react-bootstrap";

import React from "react";
import styles from "./Profile.module.css";
import Card from "../UI/Card/Card";

export default function Profile({ profile }) {
  return (
    <Container>
      <Card>
        <Stack className={styles.profile}>
          <Stack gap={4}>
            <div className={styles["profile-picture"]}>
              <img src="https://dummyimage.com/400x400/000/fff" />
            </div>
            <Stack className={styles.username}>
              <h3>Aliansyah Firdaus</h3>
              <p>Frontend Engineer | Software Engineer</p>
            </Stack>
          </Stack>
          <Stack direction="horizontal" gap={3}>
            <Col className={styles.badge}>
              <p>Followers</p>
              <span>31</span>
            </Col>
            <Col className={styles.badge}>
              <p>Following</p>
              <span>12</span>
            </Col>
            <Col className={styles.badge}>
              <p>Repos</p>
              <span>21</span>
            </Col>
          </Stack>
          <Button className={styles["view-profile"]}>
            View Github Profile
          </Button>
        </Stack>
      </Card>
    </Container>
  );
}
