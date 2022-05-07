class UserApparel < ApplicationRecord
  belongs_to :user
  belongs_to :apparel

  validates :apparel_id, uniqueness: true
end
