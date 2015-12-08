var List = React.createClass({
  render: function() {
    return <div className={this.props.className}>
      <input
        onChange={this.props.toggleAll}
        checked={this.props.allDone}
        type="checkbox"
        className="toggle-all"
      />
      <ul className='todo-list'>
        {this.getListItems()}
      </ul>
    </div>
  },
  getListItems: function() {
    return this.props.todos.map(todo => {
      return <ListItem
              key={todo.uuid}
              todoItem={todo}
              toggle={this.props.toggle}
              destroy={this.props.destroy}
              update={this.props.update}
             />
    })
  }
})
