import React, { Component } from 'react';

class TodoItem extends Component {
    // 子组件如果想父组件通信，子组件要调用父组件传递过来的方法
    constructor(props) {
        super(props);
        this.handleDelete = this.handleDelete.bind(this)
    }

    handleDelete() {
        // console.log(this.props.index);
        // const { delete } = this.props;
        // delete(index);
        this.props.delete(this.props.index);
    }
    render() {
        const { content } = this.props;
        return (
            <li onClick={this.handleDelete}>{content}</li>
        )
    }
}

export default TodoItem;