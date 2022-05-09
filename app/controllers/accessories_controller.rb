class AccessoriesController < ApplicationController

    skip_before_action :authorize

    def index
        render json: Accessory.all
    end

    def create
        accessory = Accessory.find(params[:id])
        accessory.create!(accessory_params)
        render json: accessory, status: :created
    end

    def destroy
        accessory = Accessory.find(params[:id])
        accessory.destroy
        head :no_content
    end


    private

    def accessory_params
        params.permit(:sku, :name, :price, :cost, :size, :category, :sex, :description, :image, :brand)
    end
end
