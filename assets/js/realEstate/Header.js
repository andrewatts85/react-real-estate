import React, { Component} from 'react'

export default class Header extends Component {
  constructor () {
    super()
    this.state = {
      name: ''
    }
  }
  render () {
    return (
        <header>
            <div className="logo">Logo</div>
            <nav>
                <a href="#">Create Ads</a>
                <a href="#">About Us</a>
                <a href="#">Log In</a>
                <a href="#" className="register-btn">Register</a>
            </nav>
        </header>
    )
  }
}
