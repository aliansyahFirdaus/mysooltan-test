import { repoAction } from "./repo-slice";

export const fetchRepoUser = (url) => {
  return (dispatch) => {
    fetch(url, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/vnd.github+json",
      },
    })
      .then((res) => res.json())
      .then((data) => dispatch(repoAction.getRepo(data)));
  };
};
