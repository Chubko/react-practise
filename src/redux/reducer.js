const initialState = {
    users:[]
}

export const reducer = (state = initialState, action)=>{
    switch (action.type){
        case 'ADD':{
            return {...state, users: action.payload};
        }
        case 'REMOVE':{
            // const updatedUsers = state.users.filter(
            //     (el) => el.id !== action.payload.id
            // );
            // return { ...state, users: updatedUsers };
            return {...state, users: action.payload}
        }
        default:{
            return state;
        }
    }

}