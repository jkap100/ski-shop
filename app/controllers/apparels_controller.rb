class ApparelsController < ApplicationController

    skip_before_action :authorize, only: [:index, :show, :jackets, :pants]

    def index
        render json: Apparel.all
    end

    def jackets
        apparel_category = Apparel.where(category: 'Jackets')
        render json: apparel_category
    end

    def pants
        apparel_category = Apparel.where(category: 'Pants')
        render json: apparel_category
    end

    def show
        apparel = Apparel.find(params[:id])
        render json: apparel, status: :ok
    end

    def create
        apparel = Apparel.create!(apparel_params)
        render json: apparel, status: :created
    end

    def update
        apparel = Apparel.find(params[:id])
        apparel.update(apparel_params)
        render json: apparel, status: :accepted
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
