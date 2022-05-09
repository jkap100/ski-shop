class AccessorySerializer < ActiveModel::Serializer
  attributes :id, :sku, :name, :price, :cost, :size, :category, :sex, :description, :image, :brand, :count
end
