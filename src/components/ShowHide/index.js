// Write your code here
import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {isFirstNameCardHidden: true, isLastNameCardHidden: true}

  onShowHideFirstNameButtonClick = () => {
    this.setState(prevState => ({
      isFirstNameCardHidden: !prevState.isFirstNameCardHidden,
    }))
  }

  onShowHideLastNameButtonClick = () => {
    this.setState(prevState => ({
      isLastNameCardHidden: !prevState.isLastNameCardHidden,
    }))
  }

  render() {
    const {isFirstNameCardHidden, isLastNameCardHidden} = this.state

    const firstNameCard = isFirstNameCardHidden ? null : (
      <p className="card">Joe</p>
    )
    const lastNameCard = isLastNameCardHidden ? null : (
      <p className="card">Jonas</p>
    )

    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="cards-container">
          <div className="card-button-container">
            <button
              className="button-style"
              type="button"
              onClick={this.onShowHideFirstNameButtonClick}
            >
              Show/Hide Firstname
            </button>
            {firstNameCard}
          </div>
          <div className="card-button-container">
            <button
              className="button-style"
              type="button"
              onClick={this.onShowHideLastNameButtonClick}
            >
              Show/Hide Lastname
            </button>
            {lastNameCard}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
