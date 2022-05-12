class SkisController < ApplicationController

    skip_before_action :authorize, only: [:index, :powder, :freestyle, :race, :show, :remove_from_inventory, :add_back_to_inventory]

    def index
        render json: Ski.all
    end

    def show
        ski = Ski.find(params[:id])
        render json: ski
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

    def update
        ski = Ski.find(params[:id])
        ski.update(ski_params)
        render json: ski, status: :accepted
    end

    def add_one_to_inventory
        ski = Ski.find(params[:id])
        ski.update(add_or_remove_from_inventory_params)
        render json: ski, status: :accepted
    end

    def add_back_to_inventory        
        ski = Ski.find(params[:id])
        ski.update(add_or_remove_from_inventory_params)
        render json: ski, status: :accepted
    end

    def remove_from_inventory
        ski = Ski.find(params[:id])
        ski.update(add_or_remove_from_inventory_params)
        render json: ski, status: :accepted
    end

    def destroy        
        ski = Ski.find(params[:id])
        ski.destroy
        head :no_content
    end

    private

    def ski_params
        params.permit(:sku, :name, :price, :cost, :size, :category, :sex, :description, :image, :brand, :count)
    end


    def add_or_remove_from_inventory_params
        params.permit(:count)
    end
  
end
