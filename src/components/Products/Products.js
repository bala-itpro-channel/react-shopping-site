import React from 'react';
import './Products.css';

const products = (props) => 
{
    const component = new React.Component(props);

    component.state = {
        category: 'Cosmetics',
        list: [
            { name: 'Fair and lovely 0', price: 20, image: '' },
            { name: 'Fair and lovely 1', price: 21 },
            { name: 'Fair and lovely 2', price: 22 } 
        ]
    }
    
    return (
        <div>
            <p className='plist-title'>Products List</p>
            <p>
                <span> Category: </span>
                <span><b> { props.category } </b></span>
            </p>
            <div className='plist'> 
                {
                    component.state.list.map(
                        (item, key) => {
                            return (<div className="row" key={key} > <div>{item.name} </div><div> {item.price} </div></div>);
                        }
                    )
                }
            </div>
        </div>
    );
};

export default products;
