class TodosController < ApplicationController
  def index
    @todos = Todo.all
  end

  def create
    @todo = Todo.new(todo_params)
    @todo.save
    render json: @todo
  end

  def update
    find_todo
    @todo.update(todo_params)
    render json: @todo
  end

  private

  def find_todo
    @todo = Todo.find(params[:id])
  end

  def todo_params
    params.require(:todo).permit(:content, :completed)
  end
end
