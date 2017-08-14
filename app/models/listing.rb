class Listing < ApplicationRecord
  belongs_to :user
  has_many :taggings, dependent: :destroy
  has_many :tags, through: :taggings
  has_many :bookings
  mount_uploaders :pictures, PictureUploader
  serialize :pictures, Array


	def all_tags=(names)
  		self.tags = names.split(",").map do |name|
  		Tag.where(name: name.strip).first_or_create!
  		end
  	end

  	def all_tags
  		self.tags.map(&:name).join(", ")
  	end
  	
end
