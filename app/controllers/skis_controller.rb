class SkisController < ApplicationController

    skip_before_action :authorize, only: [:index]

    def index
        render json: Ski.all
    end

    def destroy
        ski = Ski.find(params[:id])
        # byebug
        ski.destroy
        head :no_content
    end

  
end
