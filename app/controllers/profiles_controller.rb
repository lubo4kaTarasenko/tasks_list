class ProfilesController < ApplicationController
  before_action :require_user

  def show  
    @friends_i_share = current_user.friends
    @friends_share_me = current_user.owners
    #@friends_i_share = OwnerToFriend.where(owner_id: current_user.id).map(&:friend)
    #@friends_share_me = OwnerToFriend.where(friend_id: current_user.id).map(&:owner)
  end

  def update 
  end

  def share
    @friend = User.find_by(name: params[:friend])
    OwnerToFriend.create(friend_id: @friend.id, owner_id: current_user.id)
    redirect_to profile_path
  end

end