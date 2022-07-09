import { Container, Stack } from "react-bootstrap";

import Home from "./pages/Home";
import Profile from "./components/Profile/Profile";
import Repository from "./components/Repository/Repository";

import "./App.css";

function App() {
  return (
    <Container className="my-3">
      <Stack gap={3}>
        <Home />
        <Profile />
        <Repository />
      </Stack>
    </Container>
  );
}

export default App;
