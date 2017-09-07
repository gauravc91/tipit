Rails.application.routes.draw do
  mount Bootsy::Engine => '/bootsy', as: 'bootsy'
  resources :campaigns do
    resources :results
  end
  devise_for :users, :controllers => { registrations: 'registrations' }
  root       "pages#home"
  get 'dashboard' => 'dashboard#index'
end
