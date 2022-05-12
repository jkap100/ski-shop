class Apparel < ApplicationRecord

    has_many :user_apparels, dependent: :destroy

    has_many :users, through: :user_apparels

    default_scope { order(id: :asc)}
end
