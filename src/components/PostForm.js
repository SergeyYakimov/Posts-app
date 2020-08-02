import React, {Component} from 'react';

export default class PostForm extends Component {
  state = {
    title: ''
  }

  submitHandler = event => {
    event.preventDefault()
    const {title} = this.state

    const newPost = {
      title,
      id: Date.now().toString()
    }

    console.log(newPost)

    this.setState({
      title: ''
    })
  }

  changeInputHandler = event => {
    event.persist()
    this.setState(prev => ({
      ...prev,
      [event.target.id]: event.target.value
    }))
  }

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="form-group">
          <label htmlFor="title">Заголовок поста</label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={this.state.title}
            onChange={this.changeInputHandler}
          />
        </div>
        <button className="btn btn-success" type="submit">Создать</button>
      </form>
    )
  }
}