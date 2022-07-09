import { userAction } from "./user-slice";

export const fetchUser = (username) => {
  return (dispatch) => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {dispatch(userAction.getUser(data)); console.log(data, "===")})
      .catch((err) => console.log(err));
  };
};
