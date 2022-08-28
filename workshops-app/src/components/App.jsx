// sfc
import { Container } from 'react-bootstrap';
import { Route } from 'react-router-dom';
import Menu from './Menu';
import Home from './Home';
import WorkshopsList from './WorkshopsList';

const App = () => {
    return (
        <div>
            <Menu />
            <Container className="my-4">
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/workshops">
                    <WorkshopsList />
                </Route>
            </Container>
        </div>
    );
}
 
export default App;