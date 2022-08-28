import { useState, useEffect } from 'react';
import axios from 'axios';

const WorkshopsList = () => {
    // We ask React to create a piece of data for each instance of the component
    const [ workshops, setWorkshops ] = useState( [] ); // useState returns an array with the value of the variable, followed by a setter function for the variable
    const [ loading, setLoading ] = useState( true );

    console.log( workshops );
    console.log( setWorkshops );

    const fetchWorkshops = async () => {
        const response = await axios.get( `https://workshops-server.herokuapp.com/workshops` );
        const workshops = response.data;
        console.log( workshops );
        setWorkshops( workshops );
        setLoading( false );
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
                    <div>We are fetching workshops. Please wait...</div>
                )
            }
            {
                loading === false && (
                    <ol>
                        {
                            workshops.map(
                                ( workshop ) => {
                                    return <li>{workshop.name}</li>
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