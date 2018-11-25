class ApplicationController < ActionController::Base
  helper_method :current_user, :user_signed_in?

  def require_user
    redirect_to new_session_path unless current_user
  end
  
  #def require_guest
    #redirect_to tasks_path if current_user
  #end

  def current_user
    @current_user ||= User.find_by(id: session[:user_id])
  end

  def user_signed_in?
    !current_user.nil?
  end
end
