class ApparelsController < ApplicationController

    skip_before_action :authorize, only: [:index, :show]

    def index
        render json: Apparel.all
    end

    def show
        apparel = Apparel.find(params[:id])
        render json: apparel, status: :ok
    end

    def create
        apparel = Apparel.create!(apparel_params)
        render json: apparel, status: :created
    end

    def destroy
        apparel = Apparel.find(params[:id])
        apparel.destroy
        head :no_content
    end


    private

    def apparel_params
        params.permit(:sku, :name, :price, :cost, :size, :category, :sex, :description, :image, :brand, :count)
    end

end
