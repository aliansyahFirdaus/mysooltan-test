import { Container } from "react-bootstrap";

import React from "react";
import Card from "../UI/Card/Card";
import RepositoryItem from "./RepositoryItem";
import { useSelector } from "react-redux";

export default function Repository() {
  const { repos } = useSelector((state) => state.repoList);

  return (
    <Container>
      <Card>
        {repos.map((repo) => (
          <RepositoryItem visibility="public" detail={repo} />
        ))}
      </Card>
    </Container>
  );
}
