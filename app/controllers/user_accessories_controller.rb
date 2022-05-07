class UserAccessoriesController < ApplicationController

    skip_before_action :authorize

    def index
        render json: UserAccessory.all
    end

    def create
        user_accessory = UserAccessory.create(user_accessory_params)
        render json: user_accessory, status: :created
    end

    private

    def user_accessory_params
        params.permit(:user_id, :accessory_id)
    end

end
