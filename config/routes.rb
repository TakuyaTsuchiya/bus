Rails.application.routes.draw do
  root "home#show"
  get  "/getbus", to: "home#aaa"
end
