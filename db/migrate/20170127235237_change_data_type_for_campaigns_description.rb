class ChangeDataTypeForCampaignsDescription < ActiveRecord::Migration[5.1]
  def change
    change_table :campaigns do |t|
      t.change :description, :string
    end
  end
end
