class SkisController < ApplicationController

    skip_before_action :authorize, only: [:index]

    def index
        render json: Ski.all
    end

  
end
