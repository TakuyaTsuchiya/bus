class HomeController < ApplicationController
  def show
    @current_bus_stop = BusStop.find(1)
    @target_bus_stop = BusStop.find(4)

    candidate_orders = BusStopOrder.where(bus_stop: @target_bus_stop)
    candidate_bus_flows = BusFlow.where(bus_stop_orders: candidate_orders)
    target_orders = BusStopOrder.where(bus_flow: candidate_bus_flows, bus_stop: @current_bus_stop)
    @target_order = target_orders.where("arrived_time >= ?", Time.zone.now).take
    @target_order ||= target_orders.order(arrived_time: :asc).take

    @bus_stops = BusStop.all
    @bus_stop_orders = BusStopOrder.all
    @bus_flows = BusFlow.all
  end
end
