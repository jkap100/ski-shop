class AccessoriesController < ApplicationController

    skip_before_action :authorize, only: [:index, :goggles, :gloves, :hats, :show, :remove_from_inventory]

    def index
        render json: Accessory.all
    end

    def goggles
        accessory_category = Accessory.where(category: 'Goggles')
        render json: accessory_category
    end


    def gloves
        accessory_category = Accessory.where(category: 'Gloves')
        render json: accessory_category
    end


    def hats
        accessory_category = Accessory.where(category: 'Hats')
        render json: accessory_category
    end

    def show
        accessory = Accessory.find(params[:id])
        render json: accessory, status: :ok
    end

    def create
        accessory = Accessory.create!(accessory_params)
        render json: accessory, status: :created
    end

    def update
        accessory = Accessory.find(params[:id])
        accessory.update(accessory_params)
        render json: accessory, status: :accepted
    end

    def remove_from_inventory
        accessory = Accessory.find(params[:id])
        accessory.update(remove_from_inventory_params)
        render json: accessory, status: :accepted
    end

    def destroy
        accessory = Accessory.find(params[:id])
        accessory.destroy
        head :no_content
    end


    private

    def accessory_params
        params.permit(:sku, :name, :price, :cost, :size, :category, :sex, :description, :image, :brand, :count)
    end

    def remove_from_inventory_params
        params.permit(:count)
    end
end
