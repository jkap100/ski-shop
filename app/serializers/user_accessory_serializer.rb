class UserAccessorySerializer < ActiveModel::Serializer
  attributes :id
  has_one :user
  has_one :accessory
end
