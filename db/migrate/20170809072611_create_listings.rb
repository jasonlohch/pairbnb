class CreateListings < ActiveRecord::Migration[5.1]
  def change
    create_table :listings do |t|
      t.string :title
      t.text :description
      t.string :location
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
