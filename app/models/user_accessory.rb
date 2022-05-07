class UserAccessory < ApplicationRecord
  belongs_to :user
  belongs_to :accessory
end
