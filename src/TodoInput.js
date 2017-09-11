import React,{Component} from 'react'
import './TodoInput.css'
export default class TodoInput extends Component{
    submit(e){
        if(e.key === 'Enter'){
            this.props.onSubmit(e)
        }
    }
    changeTitle(e){
        this.props.onChange(e)
    }
    render(){
        return <input type="text" 
                    className="TodoInput"
                    onChange={this.changeTitle.bind(this)}
                    onKeyPress={this.submit.bind(this)} 
               />
            // 这个 defaultValue，只会影响 input 的第一次值，后面 newTodo 怎么变，都不会影响 input。
            // this.submit.call(null, ...)
            // react中的父子通信：
            //监听按键，如果是enter就执行this.props.onSubmit(e)，即是父元素的onSubmit
            // 父元素onSubmit绑定的是addTodo这个函数，即是按下enter就执行addTodo

            // 父亲跟孩子通信：直接props
            // 孩子跟父亲通信，还是依赖的是props，但是此时还需要依赖函数(父传给子一个函数)

            // 这里面的onChange、onKeyPress都是依赖的子与父通信
    }
}
