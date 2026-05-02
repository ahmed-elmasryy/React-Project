import { Container } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import {Routes,Route, Link} from 'react-router-dom';
import Events from "./Events";
function Home() {
  return (
    <Container className ="mt-4 text-center">
      <h1>Maqarrarnash site</h1>
      <p>Welcome to Maqarrarnash, we have some events {"(:"}</p>
      <nav>
        <Button style={{ backgroundColor:'cyan',color:'black'}}>
        <Link className="text-decoration-none" to="/Events">
          View Events
        </Link>
        </Button>
      </nav>
      <Routes>
        <Route path="/Events" element={<Events/>} />
      </Routes>
      
    </Container>
  );
}
export default Home;