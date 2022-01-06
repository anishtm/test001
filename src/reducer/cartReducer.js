const initialData = {
    cart_count: 0,
}

function cartReducer(state = initialData, action) {
    switch (action.type) {
        case 'ADD_ITEM':
            return {
                cart_count: --state.cart_count
            }
            break;
        case 'R_ITEM':
            return {
                cart_count: ++state.cart_count
            }
            break;
        default:
            return state
            break;
    }
}

export default cartReducer;