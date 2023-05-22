import {createSlice} from "@reduxjs/toolkit";
import cardItems from   "../cardItems";

const initialState = {
    cartItems:cardItems,
    quantity:0,
    total:0
}
const cartSlice=createSlice({
    name:"cart",
    initialState
});

export default cartSlice.reducer;