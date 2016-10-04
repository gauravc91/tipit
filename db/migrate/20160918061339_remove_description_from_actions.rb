class RemoveDescriptionFromActions < ActiveRecord::Migration
  def change
    remove_column :actions, :description, :string
    add_column :actions, :field, :string
  end
end
