class ApparelSerializer < ActiveModel::Serializer
  attributes :id, :sku, :name, :price, :size, :category, :sex, :description, :image
end
