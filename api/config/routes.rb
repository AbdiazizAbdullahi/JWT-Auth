Rails.application.routes.draw do

  #Route for creating a new user
  post '/signup', to: 'users#create'

  #Route for Logging in an existing user
  post '/login', to: 'auth#create'

  #Route for accessing a specific user
  get '/profile', to: 'users#profile'


end
