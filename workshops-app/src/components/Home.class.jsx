import { Component } from 'react';

class Home extends Component {
    // default constructor does this. so we need not provide a constructor.
    // constructor( props ) {
    //     super( props ); // this.props = props
    // }

    // render method is compulsory
    // it returns the UI (React element)
    render() {
        const { message, color, children } = this.props;

        return (
            <div>
                {message + '!'} with {color} walls

                <h2>Children...</h2>
                {children}
            </div>
        )
    }
}

export default Home;