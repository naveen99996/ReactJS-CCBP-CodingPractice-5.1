// Write your code here
import {Component} from 'react'
import './index.css'

class WelcomeApp extends Component {
  state = {isSubscribed: true}

  changeBtn = () => {
    const {isSubscribed} = this.state

    if (isSubscribed === true) {
      this.setState({isSubscribed: false})
    } else {
      this.setState({isSubscribed: true})
    }
  }

  render() {
    const {isSubscribed} = this.state

    return (
      <div className="Welcome-Container">
        <div>
          <h1 className="welcome-heading">Welcome</h1>
          <p className="welcome-description">Thank you! Happy Learning</p>
          {isSubscribed ? (
            <button type="button" onClick={this.changeBtn}>
              Subscribe
            </button>
          ) : (
            <button type="button" onClick={this.changeBtn}>
              Subscribed
            </button>
          )}
        </div>
      </div>
    )
  }
}

export default WelcomeApp
