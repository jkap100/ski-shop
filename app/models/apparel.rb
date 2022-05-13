class Apparel < ApplicationRecord

    has_many :user_apparels, dependent: :destroy

    has_many :users, through: :user_apparels

    default_scope { order(id: :asc)}

    validates :name, presence: true
    validates :sku, inclusion: {in: 2000..2999}
    validates :price, numericality: {greater_than_or_equal_to: 1}
    validates :cost, numericality: {greater_than_or_equal_to: 1}
    validates :size, presence: true
    validates :category, presence: true
    validates :sex, presence: true
    validates :description, presence: true
    validates :image, presence: true
    validates :brand, presence: true
    validates :count, numericality: {greater_than_or_equal_to: 0}
end
