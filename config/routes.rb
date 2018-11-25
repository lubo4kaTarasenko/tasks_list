Rails.application.routes.draw do
  get 'users', to: 'users#index'
  get 'users/login', to: 'users#login'
  post 'users/login', to: 'users#create'
  get 'users/registration', to: 'users#registration'
  get 'index', to: 'welcome#index'
  root 'tasks#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resource :session
  resources :tasks
  resource :profile
  post 'profile/share', to: 'profiles#share', as: :share
  get '/friends/:friend_id/tasks', to: 'shared_tasks#index', as: :friend_tasks
end
