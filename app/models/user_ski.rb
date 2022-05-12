class UserSki < ApplicationRecord
  belongs_to :user
  belongs_to :ski

  # validates :ski_id, uniqueness: { scope: :user_id}
  default_scope { order(created_at: :asc)}
end
