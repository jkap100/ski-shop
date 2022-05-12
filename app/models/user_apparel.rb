class UserApparel < ApplicationRecord
  belongs_to :user
  belongs_to :apparel

  # validates :apparel_id, uniqueness: { scope: :user_id}

  default_scope { order(created_at: :asc)}
end
