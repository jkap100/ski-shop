class SkisController < ApplicationController

    def index
        render json: Ski.all, status: :ok
    end
end
