
import { AvailableMeals } from "../data"
 
 export const reducer = (state,action)=>{


    


     if(action.type === "REMOVE_ITEM"){
      return{
        ...state,
        items:state.items.filter((currEle)=>{
          return currEle.id !== action.payload
        })
      }
     }

     if(action.type === "CLEAR_CART"){
      return{
        ...state,
        items:[]
      }
     }





     if(action.type === "ADD_ITEM"){
       let updatedCart = state.items.map((currEle)=>{
           if(currEle.id === action.payload){
            //hoti h to update krke kro
            return {...currEle,quantity:currEle.quantity+1}
           } 
           //agr id match nahi hoti to unn elements ko as it is return kro
           return currEle;
       })
       return {...state,items:updatedCart}
     }
     






     if(action.type === "REDUCE_ITEM"){
      let updatedCart = state.items.map((currEle)=>{
          if(currEle.id === action.payload){
           //hoti h to update krke Quantity ko currEle return kro
           if(currEle.quantity == 0)
           return currEle;
           return {...currEle,quantity:currEle.quantity-1}
          } 
          //agr id match nahi hoti to unn elements ko as it is return kro
          return currEle;
      })
       //updated cart humara items ka updated array hai
      return {...state,items:updatedCart}
    }


     

    if(action.type === "GET_TOTAL"){

      let {totalItem,totalAmount} = state.items.reduce((adder,currEle)=>{
         let {quantity, MealPrice} = currEle;
         let updatedTotal =  MealPrice*quantity;
         adder.totalItem += quantity;
         adder.totalAmount+=updatedTotal;

         return adder;
      },{totalItem:0,totalAmount:0})
         
      localStorage.setItem("totalAmount",JSON.stringify(totalAmount))
      localStorage.setItem("totalItem",JSON.stringify(totalItem))
        return {...state,totalAmount,totalItem}
    }


    if(action.type === "ADD_ORDER"){
        
     let order =   AvailableMeals.map((currEle)=>{
        if(currEle.id === action.payload){
          return currEle;
        }
      })
      
      return {...state,items:order}

    }

     

     return state;
 }