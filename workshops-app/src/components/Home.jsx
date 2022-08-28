const Home = ( props ) => {
    console.log( props );

    return (
        <div>
            {props.message + '!'}

            <h2>Children...</h2>
            {props.children}
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