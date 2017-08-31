class AddEmailFieldToCampaigns < ActiveRecord::Migration
  def change
    add_column :campaigns, :email_field, :boolean
    add_column :campaigns, :first_name_field, :boolean
    add_column :campaigns, :last_name_field, :boolean
  end
end
