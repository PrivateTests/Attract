import React, {Component} from 'react';

class Items extends Component {
    searchForItem(arr, id) {
        return arr.find((item) => {
            return item.id === id;
        })
    }

    render() {
        let dataShow = 'No items found';


        if (this.props.data.length) {
            dataShow = this.props.data.map((item) => {
                let category = this.searchForItem(this.props.categories, item.category);
                let city = this.searchForItem(this.props.cities, item.city);

                return <a className="articles--item" key={item.id} href="#">
                    <figure>
                        <img
                            src="https://i.pinimg.com/736x/f6/6d/fb/f66dfb28ae74c59eb004c7cb9097073c--tumblr-colors-tea-for-colds.jpg"
                            alt=""/>
                        <figcaption>
                            {city.name}
                        </figcaption>
                    </figure>
                    <div className="info">
                        <p>Lorem ipsum dolor sit amet</p>
                        <div className="details">
                            <p className="category">
                                {
                                    category.name
                                }
                            </p>
                            <p className="price">{item.price}$</p>
                        </div>
                    </div>
                </a>
            });
        }

        return (

            <main className="articles flex-wrap">
                {
                    dataShow
                }
            </main>
        )
    }
}

export default Items;