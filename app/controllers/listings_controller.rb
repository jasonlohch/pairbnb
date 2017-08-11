class ListingsController < ApplicationController
	before_action :find_listing, only: [:show, :edit, :update, :destroy]
	before_action :check_owner, only: [:edit, :update, :destroy]

	def index
    	@listings = Listing.order("created_at DESC")
  	end

	def show
		
	end

	def new

	end

	def create
		@listing = current_user.listings.new(listing_params)
		
		if @listing.save
			redirect_to @listing 
		else 
			render :new 
		end 
	end

	def edit
		
	end

	def update
		
		if @listing.update(listing_params)
			redirect_to @listing
		else
			render :edit
		end
	end

	def destroy
		
		@listing.destroy
		redirect_to listings_path
	end

private

	def listing_params
		params.require(:listing).permit(:title, :description, :location, :all_tags, :price, :country, :country_code, :property_type, :max_guests, :pictures)
	end

	def find_listing
		@listing = Listing.find(params[:id])
	end

	def check_owner
		@listing = Listing.find(params[:id])
		if @listing.user != current_user
		redirect_to listings_path
		end	
	end

end
