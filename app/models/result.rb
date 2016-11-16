class Result < ActiveRecord::Base
  belongs_to :campaign
  VALID_NAME_REGEX = /\A[a-zA-Z]+(?: [a-zA-Z]+)?\z/
  before_save { self.email = email.downcase }
end