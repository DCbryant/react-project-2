import React,{Component} from 'react'
import './TodoItem.css'
export default class TodoItem extends Component{

    // 父元素传过来一个函数
    toggle(e){
        // 这个this.props.todo是父元素上的
        this.props.onToggle(e,this.props.todo)
    }
    delete(e){
        this.props.onDelete(e,this.props.todo)
    }
    render(){
        return(
            <div className="TodoItem">
                <input 
                    className="checkbox"
                    type="checkbox" 
                    checked={this.props.todo.status === 'completed'}
                    onChange={this.toggle.bind(this)}
                />
                <span className="title">{this.props.todo.title}</span>
                <button onClick={this.delete.bind(this)}>删除</button>
            </div>
        )
    }
}