import React, {Component} from 'react';
import Cities from './filters/Cities';
import Categories from './filters/Categories';
import Price from './filters/Price';

class Filtersbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            categories: [],
            price: {
                min: 1,
                max: 300
            }
        };

        this.filtersChangeHandler = this.filtersChangeHandler.bind(this);
    }

    filtersChangeHandler(changed) {
        console.log(changed);
        this.setState(changed, () => {
            this.props.applyFilter(this.state)
        });
    }


    render() {
        return (
            <aside>
                <div className="menu-toggle">
                    <input type="checkbox"/>
                    <span></span>
                    <span></span>
                    <span></span>

                    <div className="filters">
                        <Cities cities={this.props.cities} applyFilter={this.filtersChangeHandler}/>
                        <Categories categories={this.props.categories} applyFilter={this.filtersChangeHandler}/>
                        <Price applyFilter={this.filtersChangeHandler}/>
                    </div>
                </div>
            </aside>
        );
    }
}

export default Filtersbar;