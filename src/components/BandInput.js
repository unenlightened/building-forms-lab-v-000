// Add BandInput component
import React, { Component } from 'react'

class BandInput extends Component {
  state = {
    text: ''
  }
  
  render() {
    return(
      <div>
        <form>
          <input type="text" />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default BandInput
