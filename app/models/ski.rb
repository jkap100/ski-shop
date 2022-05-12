class Ski < ApplicationRecord

    has_many :user_skis, dependent: :destroy

    has_many :users, through: :user_skis

    default_scope { order(id: :asc)}
end
