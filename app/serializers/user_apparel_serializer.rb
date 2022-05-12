class UserApparelSerializer < ActiveModel::Serializer
  attributes :id, :cart_count, :name, :price, :cost, :image, :category, :user_id, :username, :apparel_id, :count, :add_back
  # has_one :user
  # has_one :apparel

  def name
    object.apparel.name
  end

  def price
    object.apparel.price
  end

  def cost
    object.apparel.cost
  end

  def image
    object.apparel.image
  end
  
  def category
    object.apparel.category
  end

  def user_id
    object.user.id
  end

  def apparel_id
    object.apparel.id
  end

  def username
    object.user.username
  end

  def count
    object.apparel.count
  end

  def add_back
    object.apparel.count + object.cart_count
  end
end
