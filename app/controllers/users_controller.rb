class UsersController < ApplicationController
  before_action :find_user, only: [:show, :edit, :update]
  before_action :check_owner, only: [:show, :edit, :update, :destroy]

  def index
    @users = User.all
  end

  def show
  end

  def edit
  end

  def update
    respond_to do |format|
      if @user.update(user_params)
        format.html { redirect_to @user, notice: 'User was successfully updated.' }
      else
        format.html { render :edit }
      end
    end
  end

private

  def user_params
    params.require(:user).permit(:email, :name)
  end

  def find_user
    @user = User.find(params[:id])
  end

  def check_owner
    if @user != current_user
      redirect_to root_url
    end
  end

end
