import { useEffect } from 'react';

const WorkshopsList = () => {
    // this function will execute on load
    useEffect(
        () => {
            console.log( 'function passed to useEffect executed' );
        }
    );

    console.log( 'about to return from rendering function' );

    return (
        <div>We are fetching workshops. Please wait...</div>
    );
}
 
export default WorkshopsList;