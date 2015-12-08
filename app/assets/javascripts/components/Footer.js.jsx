var Footer = React.createClass({
  render: function() {
    return <div className={this.props.className}>
      <span className='todo-count'> {this.todoCountText()} </span>
      {this.clearButton()}
    </div>
  },
  clearButton: function() {
    if (this.props.showClear) {
      return <button className='clear-completed' onClick={this.props.onClear}> Clear completed </button>
    }
  },
  todoCountText: function() {
    return this.props.leftCount + ' item' + (this.props.leftCount === 1 ? ' left' : 's left')
  }
})
