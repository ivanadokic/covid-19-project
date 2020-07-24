class Country < ApplicationRecord
    belongs_to :summary

    validates :country, presence: true
    validates :cases, presence: true
    validates :recovered, presence: true
    validates :deaths, presence: true
    validates :population, presence: true
end


