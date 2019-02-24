import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    increaseCount(){
        const count = this.state.count + 1;
        this.setState({count: count});
    }

    render() {
        return (
            <div>
                <p>Hello, World!</p>
                <Counter value={this.state.count}></Counter>
                <IncreaseButton
                    increaseCount={() => this.increaseCount()}
                />
            </div>
        )
    }
}

function IncreaseButton(props){
    return (
        <button onClick={props.increaseCount}>Press me</button>
    )
}

function Counter(props) {
    return (<div><p>{props.value}</p></div>)
}

ReactDOM.render(<HelloWorld />,
    document.getElementById("root"));