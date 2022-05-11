class UserAccessoriesController < ApplicationController

    skip_before_action :authorize, only: [:index]

    
    def index
        user_accessories = UserAccessory.where(user_id: params[:user_id])
        render json: user_accessories
    end

    def create
        user_accessory = UserAccessory.create(user_accessory_params)
        render json: user_accessory, status: :created
    end

    def destroy
        user_accessory = UserAccessory.find(params[:id])
        user_accessory.destroy
        head :no_content
    end


    def destroy_all
        user_accessory = UserAccessory.all
        user_accessory.destroy_all
        head :no_content
    end

    private

    def user_accessory_params
        params.permit(:user_id, :accessory_id, :cart_count)
    end

end
