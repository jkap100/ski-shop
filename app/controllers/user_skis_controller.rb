class UserSkisController < ApplicationController

    skip_before_action :authorize

    def create
        user_ski = UserSki.create(user_ski_params)
        render json: user_ski, status: :created
    end

    private

    def user_ski_params
        params.permit(:user_id, :ski_id)
    end
end
