import { Container, Stack } from "react-bootstrap";

import Search from "./components/Search/Search";
import Profile from "./components/Profile/Profile";
import Repository from "./components/Repository/Repository";

import "./App.css";

function App() {
  return (
    <Container className="my-3">
      <Stack gap={3}>
        <Search />
        <Profile />
        <Repository />
      </Stack>
    </Container>
  );
}

export default App;
