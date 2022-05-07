class UserSerializer < ActiveModel::Serializer
  # attributes :id, :username, :password_digest, :email, :admin
  has_many :apparels
  has_many :skis
  has_many :accessories


end
