class OrderSerializer < ActiveModel::Serializer
  attributes :id, :sku, :name, :price, :cost, :size, :category, :sex, :image, :brand, :count
  # has_one :user
end
