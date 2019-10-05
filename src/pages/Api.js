import React, { Component } from 'react'

class Api extends Component {

    state = {
        register: [],
    }

    componentDidMount = () => {
        fetch("http://localhost:3001/register/getData")
            .then(res => res.json())
            .then(register => this.setState({ register }, () => console.log("Display Data...")))
            .catch(err => console.log("Error"));
    }

    render() {
        return (
            <div>
                <div className="FormTitle">
                    <h1>User Detail</h1>
                </div>
                <table className="TableFormat" >
                    <tbody>{
                        this.state.register.map(function (register, key) {
                            return (
                                <tr key={key}>
                                    <td>{register.id}</td>
                                    <td>{register.name}</td>
                                    <td>{register.email}</td>
                                    <td>{register.password}</td>
                                    <td>{register.createdAt}</td>
                                    <td>{register.updatedAt}</td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div >
        )
    }
}

export default Api
