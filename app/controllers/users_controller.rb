class UsersController < ApplicationController

    before_action :authorize, only: :index

    def index
        @users = User.all
        render json: @users, status: :ok
    end

    def create
        @user = User.create(user_params)
        render json: @user, status: :created
    end

    private

    def user_params
        params.permit(:username, :password, :email)
    end
end
