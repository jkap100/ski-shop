class Accessory < ApplicationRecord

    has_many :user_accessories, dependent: :destroy

    has_many :users, through: :user_accessories

    default_scope { order(id: :asc)}

    validates :name, presence: true
    validates :sku, inclusion: {in: 3000..3999}
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
