class UserSkiSerializer < ActiveModel::Serializer
  attributes :id, :cart_count, :name, :price, :cost, :image, :category, :user_id, :username, :ski_id, :count, :add_back
  # has_one :user
  # has_one :ski

  def name
    object.ski.name
  end

  def price
    object.ski.price
  end

  def cost
    object.ski.cost
  end

  def image
    object.ski.image
  end
  
  def category
    object.ski.category
  end

  def user_id
    object.user.id
  end

  def ski_id
    object.ski.id
  end

  def username
    object.user.username
  end

  def count
    object.ski.count
  end

  def add_back
    object.ski.count + object.cart_count
  end

end
