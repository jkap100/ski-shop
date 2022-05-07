class UserAccessory < ApplicationRecord
  belongs_to :user
  belongs_to :accessory

  validates :accessory_id, uniqueness: true
end
