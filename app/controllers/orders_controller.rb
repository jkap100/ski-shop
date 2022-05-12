class OrdersController < ApplicationController

    def index
        render json: Order.all
    end

    def filled
        filled_oreders = Order.where(status: true)
        render json: filled_oreders
    end

    def open
        open_orders = Order.where(status: false)
        render json: open_orders
    end

    def show
        order = Order.find(params[:id])
        render json: order
    end

    def create
        order = Order.create!(order_params)
        render json: order, status: :created
    end

    def update
        order = Order.find(params[:id])
        order.update(update_params)
        render json: order, status: :accepted        
    end

    def destroy
        order = Order.find(params[:id])
        order.destroy
        head :no_content
    end

    private

    def order_params
        params.permit(:sku, :name, :price, :cost, :size, :category, :sex, :image, :brand, :count, :user_id, :first_name, :last_name, :address, :city, :state, :zip, :card_number, :ccv, :expiration, :card_zip, :status)
    end

    def update_params
        params.permit(:status)
    end
end
