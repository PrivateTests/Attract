import React, {Component} from 'react';

class Categories extends Component {
    constructor(props) {
        super(props);

        this.checked = [];

        this.onChangHandler = this.onChangHandler.bind(this);
    }

    searchForItem(searchibleArr, id) {
        return searchibleArr.find((item) => {
            return item.id === id;
        })
    }

    onChangHandler(target) {
        if (target.checked) {
            this.checked.push(target.id);
        }
        else {
            if (~this.checked.indexOf(target.id)) {
                this.checked.splice(this.checked.indexOf(target.id), 1);
            }
        }

        console.log(this.checked);

        this.props.applyFilter({categories: this.checked});
    }

    render() {
        return (
            <div className="categories">
                <h2>categories</h2>

                <ul>
                    {
                        this.props.categories.map((item) => {
                            return <li key={item.id}>
                                <label>
                                    <input type="checkbox" onChange={(e) => {
                                        this.onChangHandler({
                                            id: item.id,
                                            checked: e.target.checked
                                        })
                                    }
                                    }/>
                                    {item.name}
                                </label>
                            </li>
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default Categories;