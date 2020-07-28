class Country < ApplicationRecord
    validates :country,
    :cases,
    :recovered,
    :deaths,
    :population,
    :flag,
    :critical,
    :tests,
    :today_cases,
    :today_deaths,
     :active,
     presence: true

end


