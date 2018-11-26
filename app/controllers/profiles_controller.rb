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
    if @friend.nil?
     redirect_to profile_path 
    else
      if allowed_sharing?
        OwnerToFriend.create(friend_id: @friend.id, owner_id: current_user.id)    
      end
    redirect_to profile_path
    end
  end

  def destroy
    OwnerToFriend.where(friend_id: params[:friend_id]).delete_all
    redirect_to profile_path
  end

  def allowed_sharing?
     us = OwnerToFriend.find_by(owner_id: current_user.id, friend_id: @friend.id)
     us.nil?
  end

  def save_image
    current_user.image = params[:user][:image]
    current_user.save

    redirect_to profile_path
  end
end
