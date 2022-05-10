class AuthenticationController < ApplicationController

    skip_before_action :authorize, only: :login

    def login
        @user=User.find_by username: params[:username]
        if @user&.authenticate(params[:password])
            payload = { user_id: @user.id }
            secret = "blizz"
            token=JWT.encode payload, secret
            render json: { token: token, user: @user }, status: :ok
            
        else
            render json: { message: 'Invalid username or password' }, status: :unauthorized 
        end
    end
end