class User < ActiveRecord::Base
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  VALID_NAME_REGEX = /\A[a-zA-Z]+(?: [a-zA-Z]+)?\z/
  validates(:first_name,  presence: true, length: { maximum: 13, minimum: 2 }, format: { with: VALID_NAME_REGEX })
  before_save {self.first_name =  first_name.capitalize}
  
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable, 
         :omniauthable, :omniauth_providers => [:facebook]
         
  has_many :campaigns
end
