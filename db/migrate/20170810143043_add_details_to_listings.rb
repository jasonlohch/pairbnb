class AddDetailsToListings < ActiveRecord::Migration[5.1]
  def change
    add_column :listings, :price, :integer
    add_column :listings, :property_type, :string
    add_column :listings, :max_guests, :integer
    add_column :listings, :country, :string
    add_column :listings, :country_code, :string
    add_column :listings, :pictures, :json
  end
end
