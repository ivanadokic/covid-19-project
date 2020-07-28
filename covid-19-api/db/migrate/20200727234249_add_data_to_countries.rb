class AddDataToCountries < ActiveRecord::Migration[6.0]
  def change
    add_column :countries, :flag, :string
    add_column :countries, :active, :integer
    add_column :countries, :critical, :integer
    add_column :countries, :tests, :integer
    add_column :countries, :today_cases, :integer
    add_column :countries, :today_deaths, :integer
  end
end
