const initialState = {
    users: []
}
export const reducer = (state = initialState, action)=>{
    switch (action.type){
        case 'ADD_USER': {
            return {...state, users: [...state.users, action.payload]};
        }
        case 'REMOVE_USER': {
            const updatedUsers = state.users.filter(user => user.userId !== action.payload);
            return {...state, users: updatedUsers};
        }
        default: {
            return state;
        }
    }
}