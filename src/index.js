import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import axios from 'axios'


class HelloWorld extends React.Component {
    constructor(props) {
        super(props);
        axios.get('https://api.thecatapi.com/v1/images/search').then(
            (r) => this.parseCatResponse(r)
        );
        this.state = {
            count: 0,
            labelText: '',
            catUrl: '',
            dispCat: false,
        }
    }

    parseCatResponse(response) {
        const url = response.data[0].url;
        this.setState({catUrl: url});
    }

    increaseCount(){
        const count = this.state.count + 1;
        if (count === 10){
            this.setState({labelText: 'Get a life!'});
        } else if (count === 20){
            this.setState({labelText: 'Please stop :('});
        } else if (count === 30) {
            this.setState({
                labelText: 'Here is a cat, now please go on with your life!',
                dispCat: true,
            });
        }
        this.setState({count: count});
    }

    boolToVisibility(bool){
        return bool ? 'visible' : 'hidden';
    }

    render() {
        return (
            <div>
                <p>Hello, World!</p>
                <Counter value={this.state.count}></Counter>
                <IncreaseButton
                    increaseCount={() => this.increaseCount()}
                />
                <NagLabel value={this.state.labelText}/>
                <CatImage 
                    url={this.state.catUrl} 
                    visible={this.boolToVisibility(this.state.dispCat)}
                />
            </div>
        )
    }
}

function CatImage(props) {
    return (
        <img 
            src={props.url} 
            alt="There should have been a cat here :("
            style={{
                visibility: props.visible,
            }}
        />
    )
}

function IncreaseButton(props){
    return (
        <button onClick={props.increaseCount}>Press me</button>
    )
}

function Counter(props) {
    return (<div><p>{props.value}</p></div>)
}

function NagLabel(props) {
    return (<div><p>{props.value}</p></div>)
}

ReactDOM.render(<HelloWorld />,
    document.getElementById("root"));