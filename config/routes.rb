Rails.application.routes.draw do
  resources :user_accessories
  resources :user_apparels
  resources :user_skis
  resources :users

  resources :accessories
  resources :apparels
  get '/jackets', to: "apparels#jackets"
  get '/pants', to: "apparels#pants"  

  resources :skis
  get '/powder_skis', to: "skis#powder"
  get '/freestyle_skis', to: "skis#freestyle"
  get '/race_skis', to: "skis#race"  
  
  get '/cart', to: "users#cart"

  post'/login', to: 'authentication#login'
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  
  
  

   
  


  
end
