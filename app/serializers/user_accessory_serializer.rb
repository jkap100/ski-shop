class UserAccessorySerializer < ActiveModel::Serializer
  attributes :id, :cart_count, :name, :price, :cost, :image, :category, :user_id, :username, :accessory_id, :count, :add_back
  # has_one :user
  # has_one :accessory

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
