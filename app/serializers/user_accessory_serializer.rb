class UserAccessorySerializer < ActiveModel::Serializer
  attributes :id, :cart_count, :name, :price, :cost, :image, :category
  has_one :user
  has_one :accessory

  def name
    object.accessory.name
  end

  def price
    object.accessory.price
  end

  def cost
    object.accessory.cost
  end

  def image
    object.accessory.image
  end
  
  def category
    object.accessory.category
  end
end
