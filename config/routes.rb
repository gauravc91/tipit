Rails.application.routes.draw do
  resources :campaigns do
    resources :results
  end
  devise_for :users, :controllers => { registrations: 'registrations' }
  root       "pages#home"
end
