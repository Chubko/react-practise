import {TOGGLE_ITEM_IN_CART} from "../action-types";

export const cartActionCreator = (products) => ({
    type: TOGGLE_ITEM_IN_CART,
    payload: products
});