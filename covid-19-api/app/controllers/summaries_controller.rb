class SummariesController < ApplicationController

    def index
        @collections = Summary.all
        render json: @collections.to_json(:except => [:updated_at, :created_at])
    end

    def show
        @collection = Summary.find(params[:id])
        render json: @collection.to_json(:except => [:updated_at, :created_at])
    end

    def create
        @collection = Summary.new(country_params)
        if @collection.save
            render json: @summary.to_json(:except => [:updated_at, :created_at])
        else
            render json: {error: "Summary cannot be saved to the database. Please try again."}
        end
    end

    def destroy
        @summary = Summary.find(params[:id])
        @summary.destroy
        render json: {alert: "Collection Deleted"}
    end

    private

    def collection_params
        params.require(:summary).permit(:cases, :recovered, :deaths, :updated)

    end
end

end
