class Admins::PasswordsController < Devise::PasswordsController
  respond_to :json

  def reset
    admin = Admin.find_by(email: resource_params[:email])
    if admin.present?
      admin.send_reset_password_instructions
      render json: { message: "Un email de réinitialisation du mot de passe a été envoyé." }, status: :ok
    else
      render json: { error: "Adresse email non trouvée." }, status: :unprocessable_entity
    end
  rescue StandardError => e
    render json: { error: "Erreur lors de l'envoi de l'email de réinitialisation." }, status: :unprocessable_entity
  end

  def check_token
    admin = Admin.reset_password_by_token(resource_params)
    if admin.errors.empty?
      render json: { message: "Le token est valide." }, status: :ok
    else
      render json: { error: "Le lien de réinitialisation du mot de passe est invalide ou a expiré." }, status: :unprocessable_entity
    end
  rescue StandardError => e
    render json: { error: "Le lien de réinitialisation du mot de passe est invalide ou a expiré." }, status: :unprocessable_entity
  end

  private

  def resource_params
    params.permit(:email, :reset_password_token, :password, :password_confirmation)
  end
end
