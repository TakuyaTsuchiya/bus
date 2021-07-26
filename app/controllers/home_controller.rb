class HomeController < ApplicationController
  def show(start_bus_stop_id: nil, end_bus_stop_id: nil)
    if start_bus_stop_id
      @start_bus_stop = BusStop.find(start_bus_stop_id)
    end

    if end_bus_stop_id
      @end_bus_stop = BusStop.find(end_bus_stop_id)
    end

    if @start_bus_stop && @end_bus_stop
      candidate_orders = BusStopOrder.where(bus_stop: @end_bus_stop)
      candidate_bus_flows = BusFlow.where(bus_stop_orders: candidate_orders)
      target_orders = BusStopOrder.where(bus_flow: candidate_bus_flows, bus_stop: @start_bus_stop)
      @target_order = target_orders.where("arrived_time >= ?", Time.zone.now).take
      @target_order ||= target_orders.order(arrived_time: :asc).take
    end

    @bus_stops = BusStop.all
    @bus_stop_orders = BusStopOrder.all
    @bus_flows = BusFlow.all
  end


end
