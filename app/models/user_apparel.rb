class UserApparel < ApplicationRecord
  belongs_to :user
  belongs_to :apparel
end
