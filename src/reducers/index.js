//Initial State and Actions


const actions = {
    ADD_TO_CART: "ADD_TO_CART",
    REMOVE_PRODUCT_CART: "REMOVE_PRODUCT_CART",
};


const cartReducer = (state, action) => {
    switch (action.type) {
        case actions.ADD_TO_CART:
            return { 
                    carts: [
                        ...state.carts,
                        {
                            id: action.cartItem.id,
                            name: action.cartItem.name, 
                            price: action.cartItem.price, 
                            quantity: action.cartItem.quantity, 
                        }
                    ]
                }
        case actions.REMOVE_PRODUCT_CART:
            const cartFilter = state.carts.filter(
                (item) => action.productId !== item.id
            );
            return {
                carts: cartFilter
            };
        default: 
            return state;
    }
}

export default cartReducer;