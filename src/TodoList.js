import React,{Component} from 'react';
import 'antd/dist/antd.css';
import { Input,Button,List } from 'antd';
import store from './store';

// const data = [
//     'Racing car sprays burning fuel into crowd.',
//     'Japanese princess to wed commoner.',
//     'Australian walks 100km after outback crash.',
//     'Man charged over missing wedding girl.',
//     'Los Angeles battles huge wildfires.',
//   ];



class TodoList extends Component{

    constructor(props){
        super(props);
        this.state = store.getState();
        //console.log(store.getState());
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleStoreChange = this.handleStoreChange.bind(this);
        this.handleBtnClick = this.handleBtnClick.bind(this);
        store.subscribe(this.handleStoreChange);
    }
    
    render(){
        return (
            <div>
            <input 
            value={this.state.inputValue} 
            placeholder = 'todoInfo' 
            style={{margin:'10px'}}
            onChange = {this.handleInputChange}
            />
            <Button type="primary" onClick = {this.handleBtnClick}>Button</Button>
            <List
                style={{marginTop:'10px',width:'300px'}}
                bordered
                dataSource={this.state.list}
                renderItem={(item,index) => (<List.Item onClick = {this.handleItemClick.bind(this,index)}>{item}</List.Item>)}
            />
            </div>
        )
    }

    handleInputChange(e){
        //console.log(e.target.value);
        const action = {
            type:'change_input_value',
            value: e.target.value
        }
        store.dispatch(action);
    }

    handleStoreChange(){
        //console.log('store changed');
        this.setState(store.getState());
    }

    handleBtnClick(){
        const action = {
            type: 'add_todo_item'
        };
        store.dispatch(action);
    }

    handleItemClick(index){
        //alert(index);
        const action = {
            type:'delete_todo_item',
            index
        };
        store.dispatch(action);
    }

}

export default TodoList;