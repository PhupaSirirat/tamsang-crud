
const initialOrder = {
    
    All_orders: [],
    orderAmount: 0,
}

const Order = {
    name: "Phupa Sirirat",
    address : "156/265 Bangkok Thailand",
    postalCode : 0,
    email: "",
}

const order = Order({
    name: 'order',
    initialOrder : initialOrder,

    reducer: { 
        addOrder(state, action) {
            const newOrder = action.payload;
            state.orderAmount++;

        }
            
    }
})
