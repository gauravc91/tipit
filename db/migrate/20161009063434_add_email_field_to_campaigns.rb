class AddEmailFieldToCampaigns < ActiveRecord::Migration[5.1]
  def change
    add_column :campaigns, :email_field, :boolean
    add_column :campaigns, :first_name_field, :boolean
    add_column :campaigns, :last_name_field, :boolean
  end
end
