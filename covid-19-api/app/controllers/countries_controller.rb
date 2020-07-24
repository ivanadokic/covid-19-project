class CountriesController < ApplicationController
    def index
        @countries = Country.all
        render json: @countries.to_json(:except => [:updated_at, :created_at])
    end

    def show
        @country = Country.find(params[:id])
        render json: @country.to_json(:except => [:updated_at, :created_at])
    end

    def create
        @country = Country.new(country_params)
        if @country.save
            render json: @country.to_json(:except => [:updated_at, :created_at])
        else
            render json: {error: "Country cannot be saved to the database. Please try again."}
        end
    end

    def destroy
        @country = Country.find(params[:id])
        @country.destroy
        render json: {alert: "Country Deleted"}
    end

    private

    def country_params
        params.require(:country).permit(:cases, :recovered, :deaths, :population )

    end
end
end
