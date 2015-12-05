class TodoList extends React.Component {
  renderTodo(todos) {
    if (todos) {
      return todos.map(todo =>
        <li key={todo.id}>{todo.text}</li>
      )
    }
    return []
  }
  render() {
    return <div id='todo-list'>
      <ul>
        {this.renderTodo(this.props.todos)}
      </ul>
    </div>
  }
}
