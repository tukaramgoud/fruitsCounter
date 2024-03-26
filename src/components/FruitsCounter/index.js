import {Component} from 'react'
// Write your code here
import './index.css'

class FruitsCounter extends Component {
  state = {mangosCount: 0, bananasCount: 0}

  increaseMangosCount = () => {
    this.setState(pervState => ({mangosCount: pervState.mangosCount + 1}))
  }

  increaseBananasCount = () => {
    this.setState(pervState => ({bananasCount: pervState.bananasCount + 1}))
  }

  render() {
    const {mangosCount, bananasCount} = this.state
    return (
      <div className="background-container">
        <div className="inner-background-container">
          <h1>
            Bob ate <span className="count-of-fruits"> {mangosCount} </span>
            Mangos and
            <span className="count-of-fruits"> {bananasCount} </span>Bananas
          </h1>
          <div className="images-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
              className="image-sizing"
            />
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
              className="image-sizing"
            />
          </div>
          <div className="button-container">
            <button
              type="button"
              className="style-button"
              onClick={this.increaseMangosCount}
            >
              Eat Mango
            </button>
            <button
              type="button"
              className="style-button"
              onClick={this.increaseBananasCount}
            >
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
