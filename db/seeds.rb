# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

stop1 = BusStop.create!(name: "品川駅港南口")
stop2 = BusStop.create!(name: "芝浦三丁目")
stop3 = BusStop.create!(name: "田町駅東口")
stop4 = BusStop.create!(name: "お台場海浜公園前駅")

flow1 = BusFlow.create!
flow2 = BusFlow.create!
flow3 = BusFlow.create!
flow4 = BusFlow.create!

BusStopOrder.create!(bus_flow: flow1, bus_stop: stop1, order: 1, arrived_time: "7:00")
BusStopOrder.create!(bus_flow: flow1, bus_stop: stop2, order: 2, arrived_time: "7:08")
BusStopOrder.create!(bus_flow: flow1, bus_stop: stop4, order: 3, arrived_time: "7:16")

BusStopOrder.create!(bus_flow: flow2, bus_stop: stop1, order: 1, arrived_time: "7:12")
BusStopOrder.create!(bus_flow: flow2, bus_stop: stop2, order: 2, arrived_time: "7:20")
BusStopOrder.create!(bus_flow: flow2, bus_stop: stop4, order: 3, arrived_time: "7:28")

BusStopOrder.create!(bus_flow: flow3, bus_stop: stop1, order: 1, arrived_time: "7:24")
BusStopOrder.create!(bus_flow: flow3, bus_stop: stop2, order: 2, arrived_time: "7:32")
BusStopOrder.create!(bus_flow: flow3, bus_stop: stop4, order: 3, arrived_time: "7:48")

BusStopOrder.create!(bus_flow: flow4, bus_stop: stop1, order: 1, arrived_time: "7:33")
BusStopOrder.create!(bus_flow: flow4, bus_stop: stop3, order: 2, arrived_time: "7:43")
BusStopOrder.create!(bus_flow: flow4, bus_stop: stop4, order: 3, arrived_time: "7:56")
