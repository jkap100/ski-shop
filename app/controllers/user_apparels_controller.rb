class UserApparelsController < ApplicationController

    skip_before_action :authorize, only: [:index]

    def index
        user_apparels = UserApparel.where(user_id: params[:user_id])
        render json: user_apparels
    end

    def create
        user_apparel = UserApparel.create(user_apparel_params)
        render json: user_apparel, status: :created
    end

    def destroy
        user_apparel = UserApparel.find(params[:id])
        user_apparel.destroy
        head :no_content
    end

    private

    def user_apparel_params
        params.permit(:user_id, :apparel_id, :cart_count)
    end
end
