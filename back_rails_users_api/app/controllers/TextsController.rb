class Api::TextsController < ApplicationController
    before_action :authenticate_admin!
  
    def create
      @text = Text.new(text_params)
      if @text.save
        render json: { message: 'Text saved successfully' }, status: :ok
      else
        render json: { errors: @text.errors.full_messages }, status: :unprocessable_entity
      end
    end
  
    private
  
    def text_params
      params.require(:text).permit(:content)
    end
  
    def authenticate_admin!
      # Méthode pour vérifier si l'utilisateur est un admin
    end
  end
  