class Admins::SessionsController < Devise::SessionsController
  respond_to :json

  private

  def respond_with(_resource, _opts = {})
    render json: {
      message: 'You are logged in.',
      admin: current_admin,
      token: request.env['warden-jwt_auth.token'] # Retourne le token
    }, status: :ok
  end

  def respond_to_on_destroy
    if current_admin
      log_out_success
    else
      log_out_failure
    end
  end

  def log_out_success
    render json: { message: 'You are logged out.' }, status: :ok
  end

  def log_out_failure
    render json: { message: 'Hmm nothing happened.' }, status: :unauthorized
  end
end

