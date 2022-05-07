class UserSki < ApplicationRecord
  belongs_to :user
  belongs_to :ski

  validates :ski_id, uniqueness: true
end
