class UserSkisController < ApplicationController

    skip_before_action :authorize, only: [:index]

    # def index
    #     current_user = User.find(params[:id])
    #     byebug
    #     user_skis = UserSki.where(user_id: current_user.id)
    #     render json: user_skis
    # end

    def index
        user_skis = UserSki.where(user_id: params[:user_id])
        render json: user_skis
    end
      # byebug
        # render json: UserSki.all
    # user_skis = UserSki.find_by_all(user_id: params[:user_id])

    def create
        # byebug
        user_ski = UserSki.create(user_ski_params)
        render json: user_ski, status: :created
    end

    def destroy
        user_ski = UserSki.find(params[:id])
        # byebug
        user_ski.destroy
        head :no_content

    end

    private

    def user_ski_params
        params.permit(:user_id, :ski_id, :cart_count)
    end
end
