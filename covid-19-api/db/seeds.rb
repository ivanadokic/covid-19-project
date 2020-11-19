# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ALL_DATA_URL  = 'https://corona.lmao.ninja/v2/all'
COUNTRIES_DATA_URL  = 'https://corona.lmao.ninja/v2/countries'


def seed_summaries
  puts "Seeding summaries, currently #{Summary.count}"
  response = HTTParty.get(ALL_DATA_URL)
  Summary.create!({
    cases: response["cases"],
    recovered: response["recovered"],
    deaths: response["deaths"],
    updated: response["updated"]
  })
  puts "Seeded. Now there are #{Summary.count} summaries"
end



def seed_countries
  puts "Seeding countries, currently #{Country.count} last updated #{Country.maximum(:updated_at)}" #last updated timestamp
  countries = HTTParty.get(COUNTRIES_DATA_URL)
  countries.each do |country_data|
    country = Country.find_or_initialize_by(country: country_data["country"])
    country.flag = country_data["countryInfo"]["flag"]
    country.cases = country_data["cases"]
    country.recovered = country_data["recovered"]
    country.deaths = country_data["deaths"]
    country.population = country_data["population"]
    country.recovered = country_data["recovered"]
    country.active = country_data["active"]
    country.critical = country_data["critical"]
    country.tests = country_data["tests"]
    country.today_cases = country_data["todayCases"]
    country.today_deaths = country_data["todayDeaths"]
    country.save!
  end
  
  puts "Seeded countries. Now there are currently #{Country.count} countries last updated #{Country.maximum(:updated_at)}"
end

seed_summaries
seed_countries