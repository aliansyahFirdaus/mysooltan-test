import { Container } from 'react-bootstrap';

import Home from './pages/Home';

import './App.css';
import Profile from './components/Profile/Profile';

function App() {
  return (
    <Container className='my-3'>
      <Home />
      <Profile />
    </Container>
  );
}

export default App;
