class Accessory < ApplicationRecord

    has_many :user_accessories, dependent: :destroy

    has_many :users, through: :user_accessories
end
