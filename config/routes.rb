Rails.application.routes.draw do
  mount Bootsy::Engine => '/bootsy', as: 'bootsy'
  resources :campaigns do
    collection do
      get 'editor'
      get 'awesome_editor'
    end
    resources :results
  end
  devise_for :users, :controllers => { registrations: 'registrations' }
  root       "pages#home"
end
