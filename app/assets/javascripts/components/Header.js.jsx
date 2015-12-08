const ENTER_KEYCODE = 13

var Header = React.createClass({
  getInitialState: function() {
  	return { value: '' }
  },
  render: function(){
  	return <div className={this.props.className}>
    <h1> todos </h1>
      <input
    	  className='new-todo'
  	    placeholder='Add todo here'
        value={this.state.value}
  	    onKeyDown={this.handleKeyDown}
  	    onChange={this.handleChange}
      />
    </div>
  },
  handleKeyDown: function(e) {
    if (e.keyCode === ENTER_KEYCODE) {
      const value = this.state.value.trim()
      if (value !== '') {
		    this.props.newTodo({content: value})
		    this.setState({ value: '' })
      }
    }
  },
  handleChange: function(e) {
    this.setState({ value: e.target.value })
  }
})
