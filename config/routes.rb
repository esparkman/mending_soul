Rails.application.routes.draw do
  root "pages#splash"

  get 'landing', to: 'pages#index', as: 'landing'
end
