class SkiSerializer < ActiveModel::Serializer
  attributes :id, :sku, :name, :price, :size, :category, :sex, :description
end
