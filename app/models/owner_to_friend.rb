class OwnerToFriend < ApplicationRecord
  belongs_to :owner, class_name: 'User', foreign_key: 'owner_id'
  belongs_to :friend, class_name: 'User', foreign_key: 'friend_id'
end
