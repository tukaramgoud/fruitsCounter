import {Component} from 'react'
// Write your code here
import './index.css'

class FruitsCounter extends Component {
  render() {
    return (
      <div className="background-container">
        <div className="inner-background-container">
          <h1>
            Bob ate <span className="count-of-fruits"> 0 </span>Mangos and
            <span className="count-of-fruits"> 0 </span>Bananas
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
            <button type="button" className="style-button">
              Eat Mango
            </button>
            <button type="button" className="style-button">
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
