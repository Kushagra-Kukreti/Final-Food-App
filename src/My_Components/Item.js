import React, { useContext } from 'react'
import { Context } from './Cart'
export default function Item() {

    const {items,removeItem,addItem,reduceItem} = useContext(Context);

    
    if(items.length === 0){
        return <h1>your cart is empty</h1>
    }

    return (
        <div className='row'>

            {items.map( data => (

                data.quantity === 0?<div className="col-md-4 animated fadeIn" key={data.id}>
                <div className="card mb-4">
                    <div className="card-body">
                        <div className="avatar">


                            <img
                                src={data.MealImage}
                                className="card-img-top"
                                alt=""
                            />
                        </div>
                        <h5 className="card-title">
                            {data.MealName}
                        </h5>
                        <h6>₹{data.MealPrice}</h6>
                        <p className="card-text">
                            {data.MealDescription}
                            <br />
                        </p>
                        <span type="button" class="btn btn-sm btn-danger container" onClick={()=>addItem(data.id)}>Add Item</span>
                    </div>
                </div>
            </div>:
                <div className="col-md-4 animated fadeIn" key={data.id}>
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="avatar">


                                <img
                                    src={data.MealImage}
                                    className="card-img-top"
                                    alt=""
                                />
                            </div>
                            <h5 className="card-title">
                                {data.MealName}
                            </h5>
                            <h6>₹{data.MealPrice}</h6>
                            <p className="card-text">
                                {data.MealDescription}
                                <br />
                            </p>
                            <button type="button" class="btn btn-sm btn-danger ml-2 mr-2 "onClick={()=>reduceItem(data.id)}>-</button>
                            {data.quantity}
                            <button type="button" class="btn btn-sm btn-success ml-2 " onClick={()=>addItem(data.id)}>+</button>
                        </div>
                    </div>
                </div>
            ))}

        </div>



    )
}
