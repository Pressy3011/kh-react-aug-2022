// const Home = ( props ) => {
    // console.log( props );

const Home = ( { message, color, children } ) => {
    // const { message, color, children } = props;

    return (
        <div>
            {message + '!'} with {color} walls

            <h2>Children...</h2>
            {children}
        </div>
    );
};

const a = 'I am a';

// 2 forms of export
    // default export
    // named export
// export { // named export
//     a,
//     b
// };

// You can have ONLY 1 default export
export default Home;

export {
    a
};