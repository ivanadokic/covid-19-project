class Summary < ApplicationRecord
    has_many :countries
    
    validates :cases, presence: true
    validates :recovered, presence: true
    validates :deaths, presence: true
    validates :updated, presence: true

end
