export default function listReducer(state, action){

    switch(action.type){

        case 'AddItem':
            const newItem = action.text;
            return {...state, list: [...state.list, newItem]};
 
        case 'RemoveItem':
            const newList = state.list.filter((_,i) => i !== action.index);
            return {...state, list: newList};
        default:
            return  state;
    }

}