class UserSki < ApplicationRecord
  belongs_to :user
  belongs_to :ski
end
