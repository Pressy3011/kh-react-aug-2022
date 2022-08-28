const Home = () => {
    return (
        <div>This is home</div>
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