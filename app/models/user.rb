class User < ApplicationRecord
    has_secure_password

    has_many :user_skis, dependent: :destroy
    has_many :skis, through: :user_skis

    has_many :user_apparels, dependent: :destroy
    has_many :apparels, through: :user_apparels

    has_many :user_accessories, dependent: :destroy
    has_many :accessories, through: :user_accessories

end
