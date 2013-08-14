class UsersController < ApplicationController
  def create
    @user = User.new(params[:user])

    if @user.save
      redirect_to user_url(@user)
    else
      render :json => @user.errors.full_messages
    end
  end

  def new
    @user = User.new
  end

  def show
    @user = User.find(params[:id])
  end
end