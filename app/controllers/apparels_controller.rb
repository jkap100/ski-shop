class ApparelsController < ApplicationController

    skip_before_action :authorize

    def index
        render json: Apparel.all
    end

    def destroy
        apparel = Apparel.find(params[:id])
        apparel.destroy
        head :no_content
    end

end
