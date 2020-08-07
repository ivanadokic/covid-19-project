class SummariesController < ApplicationController
  
  def index
   @summaries = Summary.order(created_at: :desc).limit(1)
 
    render json: @summaries
  end
end
