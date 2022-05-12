class Accessory < ApplicationRecord

    has_many :user_accessories, dependent: :destroy

    has_many :users, through: :user_accessories

    default_scope { order(id: :asc)}
end
