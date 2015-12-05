class App extends React.Component {
  constructor(props) {
    super(props)
    this.addTodo = this.addTodo.bind(this)
  }
  render() {
    const { todos, actions } = this.props;
    return <div id='app'>
      <NewTodo onAddTodo={this.addTodo}/>
      <TodoList todos={todos} />
    </div>
  }
  addTodo() {
    console.log('add todo')
  }
}
