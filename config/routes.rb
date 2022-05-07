Rails.application.routes.draw do
  resources :accessories
  resources :users
  resources :apparels
  resources :skis
  
  
  
  get '/profile', to: "users#profile"

  post'/login', to: 'authentication#login'
  
  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }

  
  
  

   
  


  
end
