class CreateBuses < ActiveRecord::Migration[6.1]
  def change
    create_table :bus_flows, &:timestamps

    create_table :bus_stops do |t|
      t.string :name, null: false, unique: true
      t.timestamps
    end

    create_table :bus_stop_orders do |t|
      t.bigint :bus_flow_id, null: false
      t.bigint :order, null: false
      t.bigint :bus_stop_id, null: false
      t.time :arrived_time, null: false
      t.timestamps
    end
  end
end
