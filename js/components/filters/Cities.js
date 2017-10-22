import React, {Component} from 'react';

class Cities extends Component {
    constructor(props) {
        super(props);

        this.onChangHandler = this.onChangHandler.bind(this);
    }

    onChangHandler(e) {
        let index = e.target.selectedIndex;

        this.props.applyFilter({city: +e.target.options[index].value})
    }

    render() {
        return (
            <div className="cities">
                <h2>city</h2>
                <select onChange={this.onChangHandler}>
                    <option value={0}>All</option>
                    {
                        this.props.cities.map((item) => {
                            return <option key={item.id} value={item.id}>{item.name}</option>
                        })
                    }
                </select>
            </div>
        );
    }
}

export default Cities;