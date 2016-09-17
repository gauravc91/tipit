class PagesController < ApplicationController
  def home
    if user_signed_in?
      redirect_to edit_user_registration_url
    else
      render "home"
    end
  end
end
