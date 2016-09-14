class ResultsController < ApplicationController
    before_action :authenticate_user!, only: [:index]
    
    def create
        @campaign = Campaign.find(params[:campaign_id])
        @result = @campaign.results.create(params[:result].permit(:email))
        if @result.save
            redirect_to campaign_path(@campaign)
        else
            render 'show'
        end
    end
    
    def index
        @campaign = Campaign.find(params[:campaign_id])
        if @campaign.user == current_user
            render 'index'
        else
            flash[:alert] = "Insufficient permisions."
            redirect_to campaigns_url
        end
    end

end