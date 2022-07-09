import { statusAction } from "./status-slice";
import { userAction } from "./user-slice";

export const fetchUser = (username) => {
  return (dispatch) => {
    dispatch(
      statusAction.updateStatus({ status: "loading", msg: "Mohon tunggu" })
    );
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        dispatch(userAction.getUser(data));
        dispatch(statusAction.updateStatus({ status: "success", msg: "Done" }));
      })
      .catch((err) =>
        dispatch(
          statusAction.updateStatus({ status: "error", msg: err.message })
        )
      );
  };
};
