import React, { createContext, useEffect, useReducer } from 'react'
import Header from './Header'
import { AvailableMeals } from '../data';
import Item from './Item';
import { reducer } from './reducer'
import { Link } from 'react-router-dom';
const Context = createContext();


const getCartData = ()=>{
  const localCartData = localStorage.getItem("cart");

  if(localCartData === AvailableMeals){
    return AvailableMeals;
  }
  else{
    return JSON.parse(localCartData)
  }
}

const startingState = {
  items: getCartData(),
  totalAmount: 0,
  totalItem: 0
}
export default function Cart() {



  //state ke paas abhi starting-state vaala object h pura
  const [state, dispatch] = useReducer(reducer, startingState);

  const removeItem = (id) => {
    return dispatch({
      type: "REMOVE_ITEM",
      payload: id
    })
  }

  const addItem = (id) => {
    return dispatch({
      type: "ADD_ITEM",
      payload: id
    })
  }

  const reduceItem = (id) => {
    return dispatch({
      type: "REDUCE_ITEM",
      payload: id
    })
  }

  
  useEffect(() => {
    dispatch({
      type: "GET_TOTAL"
    })

    localStorage.setItem("cart", JSON.stringify(state.items))
  }, [state.items])


  return (
    <div id="menu">
      <Header />

      {/* scrolling menu */}

      <div className='container mt-3' style={{ height: "80vh", overflowY: "scroll", width: "70vw", overflowX: "hidden" }}>

        <div className="row">
          <Context.Provider value={{ ...state, removeItem, addItem, reduceItem }}>
            <Item />
          </Context.Provider>

        </div>
        
      </div>

      {/* checkout part */}

      <div className=' ml-5 mt-2 d-flex flex-row sticky-bottom justify-content-center'>

        {state.totalAmount !== 0 && <h5>Total: {state.totalAmount}</h5>}

        {state.totalAmount !== 0 && <Link to={"/Checkout"}><h5 className='btn btn-sm btn-primary ml-5 float-right'>Checkout</h5></Link>}

      </div>


    </div>
  )
}

export { Context }
