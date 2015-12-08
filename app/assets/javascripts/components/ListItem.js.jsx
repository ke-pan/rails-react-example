
var ListItem = React.createClass({
  getInitialState: function() {
    return {
      editing: false
    }
  },
  componentDidUpdate: function (prevProps, prevState) {
		if (!prevState.editing && this.state.editing) {
      var node = React.findDOMNode(this.refs.editField);
      node.focus();
      node.setSelectionRange(0, node.value.length);
    }
  },
  render: function() {
    return <li className={this.getClassName()} >
      <div className='view'>
        <input
          className='toggle'
          type='checkbox'
          checked={this.props.todoItem.done}
          onChange={this.handleChange}
        />
        <label onDoubleClick={this.handleDoubleClick}> {this.props.todoItem.value} </label>
        <button className='destroy' onClick={this.handleClick}/>
      </div>
      <input
        ref='editField'
        className='edit'
        onBlur={this.handleBlur}
        onChange={this.handleValueChange}
        value={this.state.value}
      />
    </li>
  },
  handleChange: function(e) {
    this.props.toggle(this.props.todoItem.uuid, e.target.checked)
  },
  handleClick: function() {
    this.props.destroy(this.props.todoItem.uuid)
  },
  handleDoubleClick: function() {
    this.setState({
      value: this.props.todoItem.value,
      editing: true
    })
  },
  handleBlur: function() {
    this.setState({editing: false})
    this.props.update(this.props.todoItem.uuid, this.state.value)
  },
  handleValueChange: function(e) {
    this.setState({value: e.target.value})
  },
  getClassName: function() {
    const complete = this.props.todoItem.done ? 'completed' : ''
    const editing = this.state.editing ? ' editing' : ''
    return complete + editing
  }
})
