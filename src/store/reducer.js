//import {} from 
//默认值
const defaultState = {
    inputValue: '',
    list :[]
}

//reducer 可以接收state，但是决不能修改state
//state是指 state里面上次存的数据，action是指那修改什么东西的话。
export default (state = defaultState,action)=>{
    if(action.type ==="change_input_value"){
        const newState = JSON.parse(JSON.stringify(state));
        newState.inputValue = action.value;
        return newState;
    }

    if(action.type === 'add_todo_item'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.push(newState.inputValue);
        newState.inputValue = '';
        return newState;

    }

    if(action.type === 'delete_todo_item'){
        const newState = JSON.parse(JSON.stringify(state));
        newState.list.splice(action.index,1);
        return newState;
    }


    console.log(state,action);
    return state;
}