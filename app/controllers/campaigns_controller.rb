class CampaignsController < ApplicationController
    before_action :find_post, only: [:show, :edit, :update, :destroy]
    
    def index
        @campaigns = Campaign.all.order("created_at DESC")
    end
    
    def show
    end
    
    def new
        if user_signed_in?
            @campaign = current_user.campaigns.build
        else
            redirect_to new_user_session_url
        end
    end
    
    def create
        @campaign = current_user.campaigns.build(campaign_params)
        if @campaign.save
            redirect_to @campaign
        else
            render "new"
        end
    end
    
    def edit
    end
    
    def update
        if @campaign.update(campaign_params)
            redirect_to @campaign
        else
            render "edit"
        end
    end
    
    def destroy
        if @campaign.destroy
            redirect_to campaigns_path
        else
            render @campaign
        end
            
    end
    
    private
    
    def find_post
        @campaign = Campaign.find(params[:id])
    end
    
    def campaign_params
        params.require(:campaign).permit(:title, :description)
    end
end
