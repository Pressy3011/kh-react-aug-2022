import { useState, useEffect } from 'react';
import axios from 'axios';
import { Alert } from 'react-bootstrap';

const WorkshopsList = () => {
    // We ask React to create a piece of data for each instance of the component
    const [ workshops, setWorkshops ] = useState( [] ); // useState returns an array with the value of the variable, followed by a setter function for the variable
    const [ loading, setLoading ] = useState( true );
    const [ error, setError ] = useState( null );

    console.log( workshops );
    console.log( setWorkshops );

    const fetchWorkshops = async () => {
        try {
            // axios.get() returns a Promise object
            const response = await axios.get( `https://workshops-server.herokuapp.com/workshop` );
            const workshops = response.data;
            console.log( workshops );
            setWorkshops( workshops );
            setLoading( false );
        } catch( error ) {
            setError( error );
            setLoading( false );
        }
    };

    // this function will execute on load, and on every refresh
    // empty array - [], means execute the effecct on component load ONLY
    useEffect(
        () => {
            console.log( 'function passed to useEffect executed' );
            fetchWorkshops();
        },
        [] /* dependencies array - specify the state, props whose change change should execute the effect */
    );

    console.log( 'about to return from rendering function' );

    return (
        <div>
            {
                loading === true && (
                    <Alert variant="info">We are fetching workshops. Please wait...</Alert>
                )
            }
            {
                loading === false && error !== null && (
                    <Alert variant="danger">{error.message}</Alert>
                )
            }
            {
                loading === false && error === null && (
                    <ol>
                        {
                            workshops.map(
                                ( workshop ) => {
                                    return <li key={workshop.id}>{workshop.name}</li>
                                }
                            )
                        }
                    </ol>
                )
            }
        </div>
    );
}
 
export default WorkshopsList;