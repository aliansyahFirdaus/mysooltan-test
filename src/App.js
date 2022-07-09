import { Container, Stack } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { statusAction } from "./store/status-slice";
import { Fragment, useEffect } from "react";

import Search from "./components/Search/Search";
import Profile from "./components/Profile/Profile";
import Repository from "./components/Repository/Repository";
import styles from "./App.module.css";
import Alert from "./components/Alert/Alert";

function App() {
  const { status, msg } = useSelector((state) => state.currentStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      statusAction.updateStatus({
        status: "wait",
        msg: "Silahkan Cari Username",
      })
    );
  }, []);

  return (
    <Container className={styles.wrapper}>
      <Stack gap={3}>
        <Search />
        {status !== "success" && <Alert msg={msg} />}
        {status === "success" && (
          <Fragment>
            <Profile />
            <Repository />
          </Fragment>
        )}
      </Stack>
    </Container>
  );
}

export default App;
