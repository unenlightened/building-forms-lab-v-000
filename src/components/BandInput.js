// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    name: ''
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  render() {
    return(
      <div>
        <form>
          <input type="text" onChange={this.handleChange} />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
