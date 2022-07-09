import { Button, Col, Container, Stack } from "react-bootstrap";

import React from "react";
import styles from "./Profile.module.css";
import Card from "../UI/Card/Card";
import StatProfile from "./StatProfile";

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
            <StatProfile text="Followers" count={20} />
            <StatProfile text="Following" count={20} />
            <StatProfile text="Repos" count={20} />
          </Stack>
          <Button className={styles["view-profile"]}>
          View Github Profile <i className="fa-solid fa-arrow-up-right-from-square ms-2" />
          </Button>
        </Stack>
      </Card>
    </Container>
  );
}
