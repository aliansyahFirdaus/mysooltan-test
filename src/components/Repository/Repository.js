import { Badge, Container, Row, Stack } from "react-bootstrap";

import React from "react";
import Card from "../UI/Card/Card";
import RepositoryItem from "./RepositoryItem";

export default function Repository() {
  return (
    <Container>
      <Card>
        <RepositoryItem visibility="public" />
        <RepositoryItem visibility="public" />
        <RepositoryItem visibility="private" />
        <RepositoryItem visibility="public" />
      </Card>
    </Container>
  );
}
