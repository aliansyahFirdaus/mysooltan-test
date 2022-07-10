import { Container } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { fetchRepoUser } from "../../store/repo-action";

import React, { useEffect } from "react";
import Card from "../UI/Card/Card";
import RepositoryItem from "./RepositoryItem";

export default function Repository() {
  const { repos } = useSelector((state) => state.repoList);
  const { user } = useSelector((state) => state.userDetail);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRepoUser(user.repos_url));
  }, [user]);

  console.log(repos);

  return (
    <Container>
      <Card>
        {repos.map((repo) => (
          <RepositoryItem key={repo.id} visibility="public" detail={repo} />
        ))}
      </Card>
    </Container>
  );
}
