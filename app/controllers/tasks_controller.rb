class TasksController < ApplicationController
  before_action :require_user


  def index
    @task = Task.new
    @tasks = Task.for_dashboard(params).where(user_id: params[:user_id] || current_user)
  end

  def create
    @task = current_user.tasks.create(task_params)
    return if @task.invalid?
    @task.save
    redirect_to :root
  end

  def update
    task.update(task_params)
    head 200
  end

  def destroy
    Task.delete(params[:id])
    redirect_to :root
  end

  private

  def task
    @task ||= current_user.tasks.find(params[:id])
  end

  def task_params
    params.require(:task).permit(:title, :status, :done, :description, :expire_at )
  end
end
