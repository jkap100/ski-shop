class SkisController < ApplicationController

    skip_before_action :authorize, only: [:index]

    def index
        render json: Ski.all
    end

    def create
        ski = Ski.create!(ski_params)
        render json: ski, status: :created
    end

    def destroy
        ski = Ski.find(params[:id])
        # byebug
        ski.destroy
        head :no_content
    end

    private

    def ski_params
        params.permit(:sku, :name, :price, :cost, :size, :category, :sex, :description, :image, :brand)
    end

  
end
