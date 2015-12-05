const ENTER_CODE = 13

class NewTodo extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}

    this.handleChange = this.handleChange.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)
  }
  handleChange(e) {
    this.setState({
      value: e.target.value
    })
  }
  handleKeyDown(e) {
    if (e.keyCode === ENTER_CODE) {
      this.props.onAddTodo(this.state.value)
      this.setState({value: ''})
    }
  }
  render() {
    return <div id='new-todo'>
      <input
        type='text'
        placeholder='New Todo'
        value={this.state.value}
        onChange={this.handleChange}
        onKeyDown={this.handleKeyDown}
      />
    </div>
  }
}

NewTodo.propTypes = {
  onAddTodo: React.PropTypes.func.isRequired
}
