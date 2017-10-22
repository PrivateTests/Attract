import React, {Component} from 'react';
import Filtersbar from './components/Filtersbar';
import Items from './components/Items';


export default class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            showedData: Data
        };

        // es6 simplify
        this.cities = City;
        this.categories = Category;
        this.data = Data;


        this.applyFilter = this.applyFilter.bind(this);
    }

    applyFilter(filters) {
        let items = this.data.filter((current) => {
            //todo optimize
            if (!filters.city || current.city == filters.city) {
                if (current.price <= filters.price.max && current.price >= filters.price.min) {
                    if (!filters.categories.length || ~filters.categories.indexOf(current.category)) {
                        return true;
                    }
                }
            }
        });

        this.setState({
            showedData: items
        })
    }

    render() {
        return (
            <div className="wrap">
                <Filtersbar applyFilter={this.applyFilter} cities={this.cities} categories={this.categories}/>
                <Items data={this.state.showedData} cities={this.cities} categories={this.categories}/>
            </div>

        )
    }
}
