class DropActions < ActiveRecord::Migration
  def change
    drop_table :actions
  end
end
