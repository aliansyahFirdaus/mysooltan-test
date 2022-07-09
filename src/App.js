import { Container, Stack } from "react-bootstrap";

import Search from "./components/Search/Search";
import Profile from "./components/Profile/Profile";
import Repository from "./components/Repository/Repository";
import styles from "./App.module.css"
import Error from "./components/Error/Error";

// import "./App.css";

function App() {
  return (
    <Container className={`${styles.wrapper} vh-100`}>
      <Stack gap={3}>
        <Search />
        {/* <Error msg="Not Found!" /> */}
        <Profile />
        <Repository />
      </Stack>
    </Container>
  );
}

export default App;
