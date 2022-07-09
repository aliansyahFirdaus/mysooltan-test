import { repoAction } from "./repo-slice";

export const fetchRepoUser = (url) => {
  return (dispatch) => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => dispatch(repoAction.getRepo(data)));
  };
};
