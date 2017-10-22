import React, {Component} from 'react';
import InputRange from 'react-input-range';
import styles from 'react-input-range/lib/css/index.css';

class Price extends Component {
    constructor(props) {
        super(props);

        this.state = {
            price: {min: 1, max: 300},
        };

        this.changePrice = this.changePrice.bind(this);
    }

    changePrice(value) {
        this.setState({
            price: value
        });
    };

    render() {
        return (
            <div className="price">

                <h2>price</h2>
                <InputRange
                    maxValue={1000}
                    minValue={0}
                    value={this.state.price}
                    onChange={this.changePrice}/>

                <button onClick={(() => {
                    this.props.applyFilter(this.state)
                })}>filter
                </button>
            </div>
        );
    }
}

export default Price;