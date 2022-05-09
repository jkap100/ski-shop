class AccessoriesController < ApplicationController

    skip_before_action :authorize, only: [:index, :show]

    def index
        render json: Accessory.all
    end

    def show
        accessory = Accessory.find(params[:id])
        render json: accessory, status: :ok
    end

    def create
        accessory = Accessory.create!(accessory_params)
        render json: accessory, status: :created
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
end
