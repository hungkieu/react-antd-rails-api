class RegistrationsController < Devise::RegistrationsController
  respond_to :json

  def create
    @user = User.new(user_params)
    if @user.save
      render json: {message: 'Sign up successfully'}
    else
      render json: {
        errors: @user.error
      }, status: 500
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :password_confirmation)
  end
end
