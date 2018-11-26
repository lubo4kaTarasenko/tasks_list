class User < ApplicationRecord
  validates :name, presence: true, uniqueness: true, length: { minimum: 3 }
  validates_length_of :password, minimum: 6, allow_blank: true

  has_secure_password validations: false

  has_many :tasks

  has_many :owner_users, class_name: 'OwnerToFriend', primary_key: 'id', foreign_key: 'owner_id'
  has_many :owner_friends, class_name: 'OwnerToFriend', primary_key: 'id', foreign_key: 'friend_id'

  has_many :owners, through: :owner_friends
  has_many :friends, through: :owner_users

  	
  mount_uploader :image, ImageUploader
end
