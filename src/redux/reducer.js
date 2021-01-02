const initialState = {
    users:[],
    choicesForDelete: null
   }

export const reducer = (state = initialState, action)=>{
    switch (action.type){
        case 'ADD':{
            return {...state, users: action.payload};
        }
        case 'SELECT':{
            return {...state, choicesForDelete: action.payload}
        }
        case 'REMOVE':{
            const updatedUsers = state.users.filter(
                (el) => el.userId !== action.payload);
            return { ...state, users: updatedUsers };
        }
        default:{
            return state;
        }
    }
}