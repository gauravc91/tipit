class AddEmailToActions < ActiveRecord::Migration
  def change
    add_column :actions, :email, :string
  end
end
