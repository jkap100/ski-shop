class Order < ApplicationRecord
  belongs_to :user

  default_scope { order(created_at: :desc)}
end
