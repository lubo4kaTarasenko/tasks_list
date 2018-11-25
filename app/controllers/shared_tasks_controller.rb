class SharedTasksController < ApplicationController
  before_action :require_user
  before_action :require_friend

  def index
    @tasks = Task.for_dashboard(params).where(user_id: params[:friend_id])
  end

  def require_friend
    redirect_to profile_path unless friend?
  end

  def friend?
    OwnerToFriend.where(friend_id: current_user.id, owner_id: params[:friend_id]).exists?
  end
end