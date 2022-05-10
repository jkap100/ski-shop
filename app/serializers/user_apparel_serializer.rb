class UserApparelSerializer < ActiveModel::Serializer
  attributes :id, :cart_count, :name, :price, :cost, :image, :category
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
end
