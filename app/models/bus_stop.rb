class BusStop < ApplicationRecord
  has_many :bus_stop_orders
end