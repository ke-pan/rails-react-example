
var App = React.createClass({
  getInitialState: function() {
    return {
      todos: this.props.todos,
      count: this.props.todos.length,
      leftCount: this.props.leftCount
    }
  },
  render: function() {
    return <div>
      <Header className='header' newTodo={this.addTodo} />
      <List
        className='main'
        allDone={this.allDone()}
        todos={this.state.todos}
        toggle={this.handleToggle}
        destroy={this.handleDestroy}
        update={this.handleUpdate}
        toggleAll={this.handleToggleAll}
      />
      {this.footer()}
    </div>
  },
  addTodo: function(todo) {
    $.ajax({
      method: 'POST',
      url: 'todos',
      data: {todo: {content: todo.content} },
      success: function(todo) {
        var todos = this.state.todos
        todos.push(todo.todo)
        this.setState({
          todos,
          count: this.state.count + 1,
          leftCount: this.state.leftCount + 1
        })
      }.bind(this)
    })
  },
  handleToggle: function(id, done) {
    $.ajax({
      method: 'PUT',
      url: 'todos/' + id,
      data: {todo: {completed: done}},
      success: function(data) {
        const index = this.findIndex(data.todo.id)
        let todos = this.state.todos
        todos[index].completed = data.todo.completed
        this.setState({
          todos: todos,
          leftCount: this.state.leftCount + (data.todo.completed ? -1 : 1)
        })
      }.bind(this)
    })
  },
  handleToggleAll: function() {
    let todos = this.state.todos
    const allDone = this.allDone()
    todos.forEach(e => e.done = allDone ? false : true)
    this.setState({
      todos: todos,
      leftCount: allDone ? this.state.count : 0
    })
  },
  handleDestroy: function(id) {
    const index = this.findIndex(id)
    let todos = this.state.todos
    const todo = todos.splice(index, 1)
    this.setState({
      todos: todos,
      count: this.state.count - 1,
      leftCount: this.state.leftCount - (todo.done ? 0 : 1)
    })
  },
  handleUpdate: function(id, value) {
    const index = this.findIndex(id)
    const todos = this.state.todos
    todos[index].value = value
    this.setState({ todos: todos })
  },
  findIndex: function(id) {
    return this.state.todos.findIndex( e => e.id === id )
  },
  allDone: function() {
    return this.state.count !== 0 && this.state.leftCount === 0
  },
  someDone: function() {
    return this.state.count !== this.state.leftCount
  },
  handleClear: function() {
    const todos = this.state.todos.filter(e => !e.done)
    this.setState({
      todos: todos,
      count: this.state.leftCount
    })
  },
  footer: function() {
    if (this.state.count > 0) {
      return <Footer
        className="footer"
        leftCount={this.state.leftCount}
        showClear={this.someDone()}
        onClear={this.handleClear}
      />
    }
  }
})
