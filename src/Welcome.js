import React from 'react'
// 便于我们继承React.Component
// class Welcome extends React.Component{
//     render(){
//         return <h1>Hello ,{this.props.name} Component</h1>
//     }
// }

// function Welcome(props){
//     return <h1>Hello, {props.name}</h1>
// }

class Welcome extends React.Component{
    constructor(props){
        super(props)
        // super 关键字用于调用一个对象的父对象上的函数
        this.state = {
            date:new Date(),
            tset:'1'
        }  
        setInterval(() => {
            // 这里的钩子是在setInterval里面，并不是在constructor
            this.setState({
                date:new Date(), //更新date
                tset:'constructor'
            })
        })   
        console.log('我已经在 constructor 里将 props 和 state 初始化好了')  
    }
    componentWillMount(){
        this.setState({
            date:new Date(),
            test:'componentWillMount'
        })
        console.log('运行到这里的话，说明马上就要运行 render 了')    
    }


    render(){
        // this.setState({
        //     date:new Date(),
        //     test:'render'
        // })       
        console.log('嗯，这里是 render')
        return(
            <div>
                <h1>Hello, {this.props.name}</h1>
                <h2>{this.state.date.toString()}</h2>
                <p>{this.state.test}</p>
            </div>
        )
    }
    componentDidMount(){
        this.setState({
            date:new Date(),
            test:'componentDidMount'
        })
        console.log('已经挂载到页面里了')
    }
    componentWillReceiveProps(){
        this.setState({
            date:new Date(),
            test:'componentWillReceiveProps'
        })
    }
    shouldComponentUpdate(){
        this.setState({
            date:new Date(),
            test:'shouldComponentUpdate'
        })  
        return true     
    }
    componentWillUpdate(){
        // this.setState({
        //     date:new Date(),
        //     test:'componentWillUpdate'
        // })    
    }
    componentDidUpdate(){
        // this.setState({
        //     date:new Date(),
        //     test:'componentDidUpdate'
        // })
    }
    componentWillUnmount(){
        console.log('gg')
    }
}

export default Welcome
// 导出去便于其他组件对Welcome的应用
// 不用关心模块输出了什么，通过 export default 指令就能加载到默认模块，不需要通过 花括号来指定输出的模块,一个模块只能使用 export default 一次