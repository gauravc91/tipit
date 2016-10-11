class AddFirstNameToResults < ActiveRecord::Migration
  def change
    add_column :results, :first_name, :string
    add_column :results, :last_name, :string
  end
end
