class OrdersController < ApplicationController

    def index
        render json: Order.all
    end

    def create
        order = Order.create!(order_params)
        render json: order, status: :created
    end

    def destroy
        order = Order.find(params[:id])
        order.destroy
        head :no_content
    end

    private

    def order_params
        params.permit(:sku, :name, :price, :cost, :size, :category, :sex, :image, :brand, :count, :user_id)
    end
end
