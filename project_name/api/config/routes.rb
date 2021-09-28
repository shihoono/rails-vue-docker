Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'

  scope format: 'json' do
    namespace :users do
      resource :account, only: :show
    end

    resources :users do
      resources :posts
    end
  end
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
