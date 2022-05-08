class AccessoriesController < ApplicationController

    skip_before_action :authorize

    def index
        render json: Accessory.all
    end

    def destroy
        accessory = Accessory.find(params[:id])
        accessory.destroy
        head :no_content
    end
end
