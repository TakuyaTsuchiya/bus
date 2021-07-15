class BusStopOrder < ApplicationRecord
  belongs_to :bus_flow
  belongs_to :bus_stop
end