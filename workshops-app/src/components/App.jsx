// sfc
import { Container } from 'react-bootstrap';
import Menu from './Menu';
import Home from './Home';

const App = () => {
    return (
        <div>
            <Menu />
            <Container className="my-4">
                <Home />
            </Container>
        </div>
    );
}
 
export default App;