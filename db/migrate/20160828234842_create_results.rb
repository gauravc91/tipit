class CreateResults < ActiveRecord::Migration
  def change
    create_table :results do |t|
      t.text :email
      t.references :campaign, index: true, foreign_key: true

      t.timestamps null: false
    end
  end
end
