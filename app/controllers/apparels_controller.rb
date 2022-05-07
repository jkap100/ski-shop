class ApparelsController < ApplicationController

    skip_before_action :authorize

    def index
        render json: Apparel.all
    end

end
