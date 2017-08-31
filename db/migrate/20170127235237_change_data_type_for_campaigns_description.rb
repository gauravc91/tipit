class ChangeDataTypeForCampaignsDescription < ActiveRecord::Migration
  def change
    change_table :campaigns do |t|
      t.change :description, :string
    end
  end
end
