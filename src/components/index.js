import {Component} from 'react'
import './index.css'

class EditableTextInput extends Component {
  state = {text: '', isTrue: true}

  onChangeInput = event => {
    this.setState({text: event.target.value})
  }

  toggleButton = () => {
    this.setState(prevState => ({
      isTrue: !prevState.isTrue,
    }))
  }

  render() {
    const {isTrue, text} = this.state
    console.log(isTrue)

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Editable Text Input</h1>
          <div className="card-text-container">
            {isTrue ? (
              <input
                className="inputEl"
                onChange={this.onChangeInput}
                type="text"
                value={text}
              />
            ) : (
              <p>{text}</p>
            )}

            {isTrue ? (
              <button
                className="button"
                onClick={this.toggleButton}
                type="button"
              >
                Save
              </button>
            ) : (
              <button
                className="button"
                onClick={this.toggleButton}
                type="button"
              >
                Edit
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
}

export default EditableTextInput
