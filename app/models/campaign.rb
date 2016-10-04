class Campaign < ActiveRecord::Base
    belongs_to :user
    has_many :results
    has_many :actions
    accepts_nested_attributes_for :actions, reject_if: :all_blank, allow_destroy: true
end
