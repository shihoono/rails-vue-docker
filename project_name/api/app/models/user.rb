# frozen_string_literal: true

class User < ActiveRecord::Base
  devise :two_factor_authenticatable,
         :otp_secret_encryption_key => Rails.application.credentials.devise_two_factor[:ENCRYPTION_KEY]

  has_many :posts, dependent: :destroy
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :registerable, :trackable,
         :recoverable, :rememberable, :validatable
  include DeviseTokenAuth::Concerns::User
end
