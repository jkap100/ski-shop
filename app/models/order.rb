class Order < ApplicationRecord
  belongs_to :user

  default_scope { order(created_at: :desc)}

  validates :sku, presence: true
  validates :name, presence: true
  validates :price, numericality: {greater_than_or_equal_to: 1}
  validates :cost, numericality: {greater_than_or_equal_to: 1}
  validates :size, presence: true
  validates :category, presence: true
  validates :sex, presence: true
  validates :image, presence: true
  validates :brand, presence: true
  validates :count, numericality: {greater_than_or_equal_to: 1}
  validates :first_name, presence: true
  validates :last_name, presence: true
  validates :address, presence: true
  validates :city, presence: true
  validates :state, presence: true
  validates :zip, presence: true
  validates :card_number, presence: true
  validates :ccv, presence: true
  validates :expiration, presence: true
  validates :card_zip, presence: true
  
end
