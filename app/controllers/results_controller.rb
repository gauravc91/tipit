class ResultsController < ApplicationController
    before_action :authenticate_user!, only: [:index]
    
    def create
        @campaign = Campaign.find(params[:campaign_id])
        @result = @campaign.results.create(params[:result].permit(:email, :first_name, :last_name))
        @result.save
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
    
    def show
        @campaign = Campaign.find(params[:campaign_id])
    end
    
    def result_params
    end

end