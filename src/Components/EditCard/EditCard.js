import React, { Component } from 'react'

class EditCard extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: this.props.pet.name, 
            imageURL: this.props.pet.imageURL, 
            age: this.props.pet.age,
            breed: this.props.pet.breed
        }
    }

    handleChange = e => {
        let { value, name } = e.target
        this.setState({
            [name] : value
        })
    }

    handleClick = () => {
        let { id } = this.props.pet
        let {name, imageURL, age, breed} = this.state
        let updatedPet = {
            name, 
            imageURL, 
            age,
            breed
        }
        this.props.update(id, updatedPet)
        this.props.toggle()
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <input 
                    type='text'
                    name='name'
                    value={this.state.name}
                    placeholder='name'
                    onChange={this.handleChange} />
                <input 
                    type='text'
                    name='imageURL'
                    value={this.state.imageURL}
                    placeholder='imageURL'
                    onChange={this.handleChange} />
                <input 
                    type='text'
                    name='age'
                    value={this.state.age}
                    placeholder='age'
                    onChange={this.handleChange} />
                <input 
                    type='text'
                    name='breed'
                    value={this.state.breed}
                    placeholder='breed'
                    onChange={this.handleChange} />
                <button onClick={this.handleClick}>save</button>
                <button onClick={this.props.toggle}>cancel</button>
            </div>
        )
    }
}

export default EditCard