# app/controllers/api/texts_controller.rb
module Api
  class TextsController < ApplicationController
    # Action pour créer un nouveau texte
    def create
      # Extrait et autorise les paramètres nécessaires à partir de `params`
      text_params = params.permit(:text)  # Autorise uniquement le paramètre `text`
      
      # Crée une nouvelle instance de `Text` avec le contenu autorisé
      @text = Text.new(content: text_params[:text])

      # Sauvegarde le texte dans la base de données
      if @text.save
        # Répond avec un statut 204 No Content si la sauvegarde réussit
        head :no_content
      else
        # Répond avec un statut d'erreur 422 Unprocessable Entity si la sauvegarde échoue
        render json: { error: 'Failed to save text' }, status: :unprocessable_entity
      end
    end

    # Action pour afficher le dernier texte sauvegardé
    def show_latest
      @text = Text.last
      if @text
        render json: { text: @text.content }
      else
        render json: { error: 'No text found' }, status: :not_found
      end
    end
  end
end
