class PagesController < ApplicationController
  def home
    if user_signed_in?
      redirect_to campaigns_url
    else
      render "home"
    end
  end

end
