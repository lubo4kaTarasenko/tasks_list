class CreateOwnerToFriends < ActiveRecord::Migration[5.2]
  def change
    create_table :owner_to_friends do |t|
      t.integer :owner_id
      t.integer :friend_id

      t.timestamps
    end
  end
end
