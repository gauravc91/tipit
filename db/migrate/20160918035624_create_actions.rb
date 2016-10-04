class CreateActions < ActiveRecord::Migration
  def change
    create_table :actions do |t|
      t.string :description
      t.references :campaign, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
