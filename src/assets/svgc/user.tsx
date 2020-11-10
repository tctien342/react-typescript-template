import React from 'react';

export const SVGAvatar: ISvgComponent = ({
    viewBox = "0 0 24 24",
    fill = "#267CE2",
    width = "100%",
    height = "100%",
    opacity = "0.75",
}) => (
    <svg viewBox={viewBox} xmlns="http://www.w3.org/2000/svg" width={width} height={height}>
        <path
            fill={fill}
            fillOpacity={opacity}
            d="M20.822 18.096c-3.439-.794-6.641-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.732-13.678-5.081 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-2.979.688-3.178 2.143-3.178 4.663l.005 1.241h10.483l.704-3h1.615l.704 3h10.483l.005-1.241c.001-2.52-.198-3.975-3.177-4.663zm-8.231 1.904h-1.164l-.91-2h2.994l-.92 2z"
        />
    </svg>
);
