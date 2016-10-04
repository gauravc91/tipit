class CampaignsController < ApplicationController
    before_action :find_post, only: [:show, :edit, :update, :destroy]
    before_action :authenticate_user!, except: [:index, :show]
    
    def index
        @campaigns = Campaign.all.order("created_at DESC")
    end
    
    def show
    end
    
    def new
        @campaign = current_user.campaigns.build
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
        if @campaign.user != current_user
            redirect_to campaigns_url
        else
            render "edit"
        end
    end
    
    def update
        if @campaign.update(campaign_params)
            flash[:notice] = "Successfully updated your campaign"
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
        params.require(:campaign).permit(:title, :description, actions_attributes: [:id, :field, :_destroy])
    end
end
