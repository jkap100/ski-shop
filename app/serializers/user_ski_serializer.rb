class UserSkiSerializer < ActiveModel::Serializer
  attributes :id, :cart_count, :name, :sku, :price, :cost, :size, :category, :sex, :image, :brand, :user_id, :username, :ski_id, :count, :add_back
  # has_one :user
  # has_one :ski

  def name
    object.ski.name
  end

  def sku
    object.ski.sku
  end

  def price
    object.ski.price
  end

  def cost
    object.ski.cost
  end

  def size
    object.ski.size
  end

  def category
    object.ski.category
  end

  def sex
    object.ski.sex
  end

  def image
    object.ski.image
  end
  
  def brand
    object.ski.brand
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
