import React, { Component } from 'react'
import './Task.css'

// const textStlye ={
//     fontWeight: '700',
//     color: '#09203f'
// }
const buttonStyle ={
    backgroundColor: '#09203f'
}


export class Task extends Component {
    
    componentDidMount(){
        const M = window.M;
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.collapsible');
            var instances = M.Collapsible.init(elems, {});
          });
    }
    render() {
        return (
                    <div className="card z-depth-3 col s12 m12 l5">
                        <div className="cardTitle">
                            <span>Task</span>
                        </div>
                    <div className="cardDetail"> 
                        <ul className="collapsible">
                            <li>
                            <div className="collapsible-header">
                                <label>
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                First
                            </div>
                            <div className="collapsible-body"><span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam adipisci placeat iusto alias dolorem nostrum maiores quis blanditiis amet, ex iure dolore magni eaque ea porro, provident itaque fuga eligendi.</span></div>
                            </li>
                            <li>
                            <div className="collapsible-header">
                            <label>
                                    <input type="checkbox" defaultChecked="checked" />
                                    <span></span>
                                </label>
                                 Second</div>
                            <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                            </li>
                            <li>
                            <div className="collapsible-header">
                            <label>
                                    <input type="checkbox" />
                                    <span></span>
                                </label>
                                Third</div>
                            <div className="collapsible-body"><span>Lorem ipsum dolor sit amet.</span></div>
                            </li>
                        </ul>
                    </div>
                    <button className="btn-floating halfway-fab waves-effect waves-light " style={buttonStyle} onClick={this.props.addTask}><i className="material-icons">add</i></button>
                    </div>

        )
    }
}

export default Task
