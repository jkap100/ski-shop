class ApparelsController < ApplicationController

    skip_before_action :authorize

    def index
        render json: Apparel.all
    end


    def create
        apperal = Accessory.find(params[:id])
        apparel.create!(apparel_params)
        render json: apparel, status: :created
    end

    def destroy
        apparel = Apparel.find(params[:id])
        apparel.destroy
        head :no_content
    end


    private

    def apparel_params
        params.permit(:sku, :name, :price, :cost, :size, :category, :sex, :description, :image, :brand)
    end

end
