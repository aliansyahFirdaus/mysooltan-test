import { Button, Container, Stack } from "react-bootstrap";
import { useSelector } from "react-redux";

import React from "react";
import styles from "./Profile.module.css";
import Card from "../UI/Card/Card";
import StatProfile from "./StatProfile";

export default function Profile() {
  const { user } = useSelector((state) => state.userDetail);
  
  console.log(user)

  return (
    <Container>
      <Card>
        <Stack className={styles.profile}>
          <Stack gap={4}>
            <div className={styles["profile-picture"]}>
              <img src={user.avatar_url} />
            </div>
            <Stack className={styles.username}>
              <h3>{user.name}</h3>
              <p>{user.bio}</p>
            </Stack>
          </Stack>
          <Stack direction="horizontal" gap={3}>
            <StatProfile text="Followers" count={user.followers} />
            <StatProfile text="Following" count={user.following} />
            <StatProfile text="Repos" count={0} />
          </Stack>
          <a href={user.html_url} target="_blank">
            <Button className={styles["view-profile"]}>
              View Github Profile
              <i className="fa-solid fa-arrow-up-right-from-square ms-2" />
            </Button>
          </a>
        </Stack>
      </Card>
    </Container>
  );
}
