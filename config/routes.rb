Rails.application.routes.draw do
  resources :campaigns
  devise_for :users, :controllers => { registrations: 'registrations' }
  root       "pages#home"
end
