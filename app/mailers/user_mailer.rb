class UserMailer < ApplicationMailer
  def logged_in_email
    @user = params[:user]
    mail(to: @user.email, subject: 'Welcome to My Awesome Todo App')
  end
end
