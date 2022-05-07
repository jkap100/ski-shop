class AccessoriesController < ApplicationController

    skip_before_action :authorize

    def index
        render json: Accessory.all
    end
end
