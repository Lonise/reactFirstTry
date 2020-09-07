import React, { Component } from 'react'

export default class Ccomponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visibility: false,
            input: "",
            submit: "",
        };
        this.addingPoint = this.addingPoint.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.EntryPoint = this.EntryPoint.bind(this);
    }
    handleChange(event) {
        this.setState({
            input: event.target.value
        });
    }
    EntryPoint(event) {
        event.preventDefault()
        this.setState ({
            submit: this.state.input
        });
    }
    addingPoint() {
        this.setState(state => ({
            visibility: !state.visibility
        }));
    }
    render() {

        /*function MapPoint(name, latitude, longitude, timeDate) {
        
        
    }
         let newpoint = new MapPoint(1,2,3,4)
*/

        let visibilityPopup
        if (this.state.visibility) {
            visibilityPopup = {
                display:"block",
            }
        }
        else {
            visibilityPopup = {
                display:"none",
            }
        }
            return (
                 <div>
                    <button  onClick={this.addingPoint} className="buttonAddPoint">Добавить точку</button>
                    <div className = "pointsListStyles">
                    <div className = "pointsListContainer">
                        <div className = "filterByName">
                            Фильтр по имени <br></br>
                            <input style={{width:"100%"}} />
                        </div>
                        <div className = "addedPoints">
                            <p>{this.state.submit}</p>
                        </div>
                    </div>
                </div>
                    <div style={visibilityPopup} className = "addPointPopUp">
                     <div>
                         <div onClick={this.addingPoint} style={{cursor:"pointer", right:10, position:"absolute",top:0,transform:"rotate(45deg)",fontSize:30}}>+</div>
                         <br></br>
                         <p >Создание точки /<br></br> редактирование точки</p>
                         <form  onSubmit={this.EntryPoint} name="points">
                         <table>
                             <tr>
                                 <td>Название точки</td>
                                 <td><input value={this.state.input} onChange={this.handleChange} name="name" /></td>  
                             </tr>
                             <tr>
                                 <td>Широта</td>
                                 <td><input name="latitude" /></td>
                             </tr>
                             <tr>
                             <td>Долгота</td>
                                 <td><input name="longitude" /></td>
                             </tr>
                             <tr>
                             <td>Дата и время создания</td>
                                 <td><input name="timeDate" /></td>
                             </tr>
                         </table>
                         <button  type="submit" onClick={this.addingPoint} style={{bottom:15, position:"absolute", left:"40%"}}>Сохранить</button>
                         </form>     
                     </div>
                </div>
                  </div>
                );   
    }
    
}