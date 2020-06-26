Rails.application.routes.draw do
  get 'dashboards/index'
  root "pages#index"

  get 'landing', to: 'pages#index', as: 'landing'

  devise_for :users
end
