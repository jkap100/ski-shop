Rails.application.routes.draw do
  resources :user_accessories
  resources :user_apparels
  resources :user_skis
  resources :users

  resources :accessories
  get '/gloves', to: "accessories#gloves"
  get '/hats', to: "accessories#hats"  
  get '/goggles', to: "accessories#goggles"
  patch  '/accessories/:id', to: "accessories#remove_from_inventory"
  
  
  resources :apparels
  get '/jackets', to: "apparels#jackets"
  get '/pants', to: "apparels#pants"  
  patch  '/apparels/:id', to: "apparels#remove_from_inventory"

  resources :skis
  get '/powder_skis', to: "skis#powder"
  get '/freestyle_skis', to: "skis#freestyle"
  get '/race_skis', to: "skis#race"  
  patch  '/skis/:id', to: "skis#remove_from_inventory"

  delete '/user_skis/', to: "user_skis#destroy_all"
  delete '/apparels/', to: "apparels#destroy_all"
  delete '/accessories/', to: "accessories#destroy_all"
  
  get '/cart', to: "users#cart"

  post'/login', to: 'authentication#login'
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  
  
  

   
  


  
end
