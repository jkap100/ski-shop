class AccessorySerializer < ActiveModel::Serializer
  attributes :id, :sku, :name, :price, :size, :category, :sex, :description, :image, :brand
end
