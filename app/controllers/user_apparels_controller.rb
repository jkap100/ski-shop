class UserApparelsController < ApplicationController

    skip_before_action :authorize, only: [:index]

    def index
        render json: UserApparel.all
    end

    def create
        user_apparel = UserApparel.create(user_apparel_params)
        render json: user_apparel, status: :created
    end

    private

    def user_apparel_params
        params.permit(:user_id, :apparel_id)
    end
end
