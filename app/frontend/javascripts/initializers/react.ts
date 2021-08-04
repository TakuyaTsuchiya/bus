import ReactDOM from "react-dom";
import React from "react";

const COMPONENT_NAME_KEY = "data-component-name";
const PROPS_KEY = "data-component-props";

const containerMap = {
    Hello: import("../components/Hello"),
    BusForm: import("../components/BusForm"),
    BusStopOrderList: import("../components/BusStopOrderList"),
}

document.addEventListener("DOMContentLoaded", () => {
    for (const node of document.querySelectorAll(`div[${COMPONENT_NAME_KEY}]`)) {
        const name = node.getAttribute(COMPONENT_NAME_KEY);
        if (!name) {
            return;
        }

        const props = JSON.parse(node.getAttribute(PROPS_KEY)!);
        const containerPromise = containerMap[name];
        containerPromise?.then((containerModule) => {
            const container = containerModule[name];
            ReactDOM.render(React.createElement(container, props), node)
        });
    }
});