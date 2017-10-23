import React, { Component} from 'react'

export default class Footer extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <footer>
        <ul>
          <li>Twitter: <a href="https://twitter.com/AndreWatts85">@andrewatts85</a></li>
          <li>Portfolio: <a href="https://andrewatts85.github.io/responsive-portfolio/"><span>Andre Watts</span></a></li>
        </ul>
      </footer>
    )
  }
}
