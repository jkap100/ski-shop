class UserAccessorySerializer < ActiveModel::Serializer
  attributes :id, :cart_count, :name, :sku, :price, :cost, :size, :category, :sex, :image, :brand, :user_id, :username, :accessory_id, :count, :add_back
  # has_one :user
  # has_one :accessory

  def name
    object.accessory.name
  end

  def sku
    object.accessory.sku
  end

  def price
    object.accessory.price
  end

  def cost
    object.accessory.cost
  end

  def size
    object.accessory.size
  end

  def category
    object.accessory.category
  end

  def sex
    object.accessory.sex
  end

  def image
    object.accessory.image
  end
  
  def brand
    object.accessory.brand
  end

  def user_id
    object.user.id
  end

  def accessory_id
    object.accessory.id
  end

  def username
    object.user.username
  end

  def count
    object.accessory.count
  end

  def add_back
    object.accessory.count + object.cart_count
  end

end
