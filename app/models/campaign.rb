class Campaign < ActiveRecord::Base
    belongs_to :user
    has_many :results
    accepts_nested_attributes_for :results, reject_if: :all_blank
end
