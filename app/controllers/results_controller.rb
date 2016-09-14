class ResultsController < ApplicationController
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
    end

end