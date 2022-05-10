class SkisController < ApplicationController

    skip_before_action :authorize, only: [:index, :powder, :freestyle, :race, :show]

    def index
        render json: Ski.all
    end

    def powder
        ski_category = Ski.where(category: 'Powder')
        render json: ski_category
    end

    def freestyle
        ski_category = Ski.where(category: 'Freestyle')
        render json: ski_category
    end

    def race
        ski_category = Ski.where(category: 'Race')
        render json: ski_category
    end

    def show
        ski = Ski.find(params[:id])
        render json: ski, status: :ok
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
        params.permit(:sku, :name, :price, :cost, :size, :category, :sex, :description, :image, :brand, :count)
    end

  
end
