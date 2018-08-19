import React, { Component, Fragment  } from 'react';
import TodoItem from './TodoItem';
// import logo from './logo.svg';
// import './App.css';

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      inputValue: ''
    }
  }
  handleBtnClick() {    //点击添加TODO数据
    // this.state.list.push('temple')
    // alert("add");
    if(this.state.inputValue){   //如果 输入框的值为空
      this.setState({
        list: [...this.state.list, this.state.inputValue],
        inputValue: ''
      })
    }
    
  }
  handleInputChange(e) {
    // console.log(e.target.value);
    this.setState({
      inputValue: e.target.value
    })
  }
  handleItemClick(index){
    const list = [...this.state.list];
    list.splice(index,1);
    // this.
    this.setState({
      list: list
    })
  }
  // 父组件通过属性的形式向子组件传递参数
  // 子组件通过props接受父组件传递过来的参数
  handleDelete(index) {
    // console.log(index);
    const list = [...this.state.list];
    list.splice(index,1);
    // this.
    this.setState({
      list: list
    })
  }

  getTodoItems() {
    return (
      this.state.list.map((item,index) => {
        // return <li key={index} onClick={this.handleItemClick.bind(this,index)}>{item}</li>
        return (
          <TodoItem 
            delete={this.handleDelete.bind(this)} 
            key={index} 
            content={item} 
            index={index}
          />
        ) 
      })
    )
  }

  render() {
    return (
      <Fragment>
        <div>
          <input value={this.state.inputValue} onChange={(e) => this.handleInputChange(e)} />
          <button className="red-btn" onClick={this.handleBtnClick.bind(this)}>add</button>
        </div>
        <ul>
          {this.getTodoItems()}
        </ul>
      </Fragment>
    );
  }
}

export default Todolist;
