class Apparel < ApplicationRecord

    has_many :user_apparels, dependent: :destroy

    has_many :users, through: :user_apparels
end
