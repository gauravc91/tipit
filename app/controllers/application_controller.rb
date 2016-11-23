class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  
  def disable_nav
    if @campaign.user != current_user
      @disable_nav = true
    else
      @disable_nav = false
    end
  end
  
end
