class SummariesController < ApplicationController
  
  def index
   @summary = Summary.order(created_at: :desc).first
 
    render json: @summary
  end
end
