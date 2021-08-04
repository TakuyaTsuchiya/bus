/** @jsxRuntime classic */
/** @jsx jsx */

import {css, jsx} from '@emotion/react'
import React, {FC} from "react";
import dayjs from 'dayjs';

type Props = {
    busStops: Array<{
        id: string;
        name: string;
    }>;
    busFlows: Array<{
        id: string;
    }>;
    busStopOrders: Array<{
        id: string;
        busFlowId: string;
        busStopId: string;
        arrivedTime: string;
    }>;
    targetBusStopOrderId: string | null;
}

export const BusStopOrderList: FC<Props> = ({busStops, busStopOrders, busFlows, targetBusStopOrderId}) => {
    return (
        <table>
            <tbody>
            {busStops.map((stop) => {
                return (
                    <tr key={stop.id}>
                        <td>
                            {stop.name}
                        </td>

                        {busFlows.map((flow) => {
                            const order = busStopOrders.find((o) => o.busFlowId === flow.id && o.busStopId === stop.id);
                            return (
                                <td key={flow.id}>
                                    {order ? dayjs(order.arrivedTime, "HH:MM").format("HH:mm") : "↓"}
                                    {order?.id === targetBusStopOrderId && "これやで"}
                                </td>
                            )
                        })}
                    </tr>
                )
            })}
            </tbody>
        </table>
    )
}