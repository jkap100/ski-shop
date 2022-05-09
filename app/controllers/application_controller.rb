class ApplicationController < ActionController::API
  include ActionController::Cookies

  rescue_from ActiveRecord::RecordInvalid, with: :render_unprocessable_entity_response
  rescue_from ActiveRecord::RecordNotFound, with: :render_not_found_response
  
  before_action :authorize

  def authorize
    auth_header = request.headers[:Authorization]

    if !auth_header
        render json: { message: "Must send token" }, status: :forbidden
    else
        token = auth_header.split(' ')[1]
        secret = "blizz"

      begin
        decoded_token = JWT.decode token, secret
        
        payload = decoded_token.first
        user_id = payload['user_id']

        @user = User.find user_id
      rescue
        render json: { error: 'Invalid token.' }, status: :forbidden
      end
    end
  end


  def render_unprocessable_entity_response(invalid)
    render json: { errors: invalid.record.errors }, status: :unprocessable_entity
  end

  def render_not_found_response(invalid)
    render json: { errors: "#{invalid.model} not foud" }, status: :not_found
  end

end
