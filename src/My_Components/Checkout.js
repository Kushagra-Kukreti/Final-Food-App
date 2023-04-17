import React from 'react'
import { Link } from 'react-router-dom';

export default function Checkout() {

    const Items = JSON.parse(localStorage.getItem("cart"));
    const total = JSON.parse(localStorage.getItem("totalAmount"))
    const billItems = Items.filter((currEle) => {
        return currEle.quantity !== 0;
    })



    return (
        <div className='container mt-5'>
            <table class="table">
                <thead class="thead-dark">
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Price(₹)</th>
                        <th scope="col">Quantity</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        billItems.map((currEle) => {
                            return (<>
                                <tr>
                                    <td>{currEle.MealName}</td>
                                    <td>{currEle.MealPrice}</td>
                                    <td>{currEle.quantity}</td>
                                </tr>
                            </>)
                        })
                    }

                </tbody>
            </table>

           <Link to={"/AddressForm"}>
            <div className='float-right btn btn-sm btn-primary'>Next</div>
            </Link>
            <div className='float-right mr-2 mt-1'>Total: {total}</div>

        </div>
    )
}
