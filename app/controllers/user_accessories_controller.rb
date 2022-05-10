class UserAccessoriesController < ApplicationController

    skip_before_action :authorize, only: [:index]

    def index
        render json: UserAccessory.all
    end

    def create
        user_accessory = UserAccessory.create(user_accessory_params)
        render json: user_accessory, status: :created
    end

    def destroy
        # byebug
        user_accessory = UserAccessory.find(params[:id])
      
        user_accessory.destroy
        head :no_content
    end

    private

    def user_accessory_params
        params.permit(:user_id, :accessory_id, :cart_count)
    end

end
