/** @jsxRuntime classic */
/** @jsx jsx */

import { css, jsx } from '@emotion/react'
import React, { FC } from "react";

type Props = {
    actionUrl: string;
    busStops: Array<{
        id: string;
        name: string;
    }>;
    selectedStartBusStopId: string | null;
    selectedEndBusStopId: string | null;
}

export const BusForm: FC<Props> =
    ({ actionUrl, busStops, selectedStartBusStopId, selectedEndBusStopId }) => {
    return(
        <form action={actionUrl} method="get" >
            <p>
                出発地:
                <select name="start_bus_stop_id" id="start_bus_stop_id">
                    {busStops.map((busStop) => {
                        return(
                            <option value={busStop.id} key={busStop.id} selected={selectedStartBusStopId === busStop.id && true}>
                                {busStop.name}
                            </option>
                        )
                    })}
                </select>
            </p>

            <p>
                到着地:
                <select name="end_bus_stop_id" id="end_bus_stop_id">
                    {busStops.map((busStop) => {
                        return(
                            <option value={busStop.id} key={busStop.id} selected={selectedEndBusStopId === busStop.id && true}>
                                {busStop.name}
                            </option>
                        )
                    })}
                </select>
            </p>

            <input type="submit" value="確定する" css={styles.submitButton} />
        </form>
    )
}

const styles = {
    submitButton: css({
        borderColor: "white",
        backgroundColor: "hotpink",
        color: "black",
        borderRadius: "5px",

        "&:hover": {
            color: "white",
        }
    }),
};