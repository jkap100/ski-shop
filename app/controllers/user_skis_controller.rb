class UserSkisController < ApplicationController

    skip_before_action :authorize, only: [:index]

    def index
        render json: UserSki.all
    end

    def create
        user_ski = UserSki.create(user_ski_params)
        render json: user_ski, status: :created
    end

    def destroy
        user_ski = UserSki.find_by params[:ski_id]
        user_ski.destroy
        head :no_content
    end

    private

    def user_ski_params
        params.permit(:user_id, :ski_id)
    end
end
