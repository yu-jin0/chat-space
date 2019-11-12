class Group < ApplicationRecord
  has_many :group_users
  has_many :user,  through: :group_users
  validates :name, presense: true, uniqueness: true

end
