
Object.defineProperty(exports, "__esModule", { value: true });
exports.WorldMap = void 0;
const tslib_1 = require("tslib");
const React = require("react");
const d3_geo_1 = require("d3-geo");
const countries_geo_1 = require("./countries.geo");
const constants_1 = require("./constants");
const utils_1 = require("./utils");
const draw_1 = require("./draw");
const Frame_1 = require("./components/Frame");
const Region_1 = require("./components/Region");
const TextLabel_1 = require("./components/TextLabel");
(0, tslib_1.__exportStar)(require("./types"), exports);
function WorldMap(props) {
    const { data, title, valuePrefix = '', valueSuffix = '', color = constants_1.defaultColor, strokeOpacity = 0.2, backgroundColor = 'white', tooltipBgColor = 'black', tooltipTextColor = 'white', size = constants_1.defaultSize, frame = false, frameColor = 'black', borderColor = 'black', richInteraction = false, styleFunction = (0, constants_1.defaultCountryStyle)(borderColor, strokeOpacity), tooltipTextFunction = constants_1.defaultTooltip, onClickFunction, hrefFunction, textLabelFunction = () => [], } = props;
    const windowWidth = (0, utils_1.useWindowWidth)();
    const width = typeof size === 'number' ? size : (0, utils_1.responsify)(size, windowWidth);
    const height = width * constants_1.heightRatio;
    const [scale, setScale] = React.useState(1);
    const [translateX, setTranslateX] = React.useState(0);
    const [translateY, setTranslateY] = React.useState(0);
    const containerRef = React.createRef();
    const countryValueMap = Object.fromEntries(data.map(({ country, value }) => [country.toUpperCase(), value]));
    const newDeathsMap = Object.fromEntries(data.map(({ country, newDeaths }) => [country.toUpperCase(), newDeaths]));
    const totalCasesMap = Object.fromEntries(data.map(({ country, totalCases }) => [country.toUpperCase(), totalCases]));
    const totalDeathsValueMap = Object.fromEntries(data.map(({ country, totalDeaths }) => [country.toUpperCase(), totalDeaths]));
    const minValue = Math.min(...data.map(({ value }) => value));
    const maxValue = Math.max(...data.map(({ value }) => value));
    const projection = (0, d3_geo_1.geoMercator)();
    const pathGenerator = (0, d3_geo_1.geoPath)().projection(projection);
    const regions = countries_geo_1.default.features.map((feature, idx) => {
        const triggerRef = React.createRef();
        const { I: isoCode, N: countryName, C: coordinates } = feature;
        const geoFeature = {
            type: 'Feature',
            properties: { NAME: countryName, ISO_A2: isoCode },
            geometry: {
                type: 'MultiPolygon',
                coordinates: coordinates,
            },
        };
        const context = {
            countryCode: isoCode,
            newDeaths: newDeathsMap[isoCode],
            totalCases: totalCasesMap[isoCode],
            totalDeaths: totalDeathsValueMap[isoCode],
            countryValue: countryValueMap[isoCode],
            countryName,
            color,
            minValue,
            maxValue,
            prefix: valuePrefix,
            suffix: valueSuffix,
        };
        const path = (React.createElement(Region_1.default, { ref: triggerRef, d: pathGenerator(geoFeature), style: styleFunction(context), onClick: (event) => onClickFunction === null || onClickFunction === void 0 ? void 0 : onClickFunction(Object.assign(Object.assign({}, context), { event })), strokeOpacity: strokeOpacity, href: hrefFunction === null || hrefFunction === void 0 ? void 0 : hrefFunction(context), key: `path${idx}` }));
        const tooltip = (0, draw_1.drawTooltip)(typeof context.countryValue === 'undefined'
            ? undefined
            : tooltipTextFunction(context), tooltipBgColor, tooltipTextColor, idx, triggerRef, containerRef);
        return { path, highlightedTooltip: tooltip };
    });
    const regionPaths = regions.map((entry) => entry.path);
    const regionTooltips = regions.map((entry) => entry.highlightedTooltip);
    const eventHandlers = {
        onMouseDown(e) {
            e.preventDefault();
            e.stopPropagation();
        },
        onDoubleClick(e) {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            if (scale === 4) {
                setTranslateX(0);
                setTranslateY(0);
                setScale(1);
            }
            else {
                setTranslateX(2 * translateX - x);
                setTranslateY(2 * translateY - y);
                setScale(scale * 2);
            }
        },
    };
    return (React.createElement("figure", { className: "worldmap__figure-container", style: { backgroundColor } },
        title && (React.createElement("figcaption", { className: "worldmap__figure-caption" }, title)),
        React.createElement("svg", Object.assign({ ref: containerRef, height: `${height}px`, width: `${width}px` }, (richInteraction ? eventHandlers : undefined)),
            frame && React.createElement(Frame_1.default, { color: frameColor }),
            React.createElement("g", { transform: `translate(${translateX}, ${translateY}) scale(${(width / 960) * scale}) translate(0, 240)`, style: { transition: 'all 0.2s' } }, regionPaths),
            React.createElement("g", null, textLabelFunction(width).map((props, idx) => (React.createElement(TextLabel_1.default, Object.assign({}, props, { key: `text_${idx}` }))))),
            regionTooltips)));
}
exports.default = WorldMap;

