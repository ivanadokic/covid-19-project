class CountriesController < ApplicationController
  def index
    @countries = Country.all
    render json: @countries.to_json(:except => [:updated_at, :created_at])
  end
  
  def show
    @country = Country.find(params[:id])
    render json: @country.to_json(:except => [:updated_at, :created_at])
  end
 
end
