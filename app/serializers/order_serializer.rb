class OrderSerializer < ActiveModel::Serializer
  attributes :id, :sku, :name, :price, :cost, :size, :category, :sex, :image, :brand, :count, :user_id, :first_name, :last_name, :address, :city, :state, :zip, :card_number, :ccv, :expiration, :card_zip, :status, :date
  # has_one :user

  def date
    object.created_at.to_date
  end
end
