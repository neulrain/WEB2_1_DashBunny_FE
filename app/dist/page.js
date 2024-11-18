"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var page_module_scss_1 = require("./page.module.scss");
var horizontalNav_1 = require("./components/horizontalNav");
var OrderList_1 = require("./components/OrderList");
function Home() {
    return (React.createElement("div", { className: page_module_scss_1["default"].background },
        React.createElement(horizontalNav_1["default"], null),
        React.createElement(OrderList_1["default"], null),
        React.createElement("div", { className: page_module_scss_1["default"].order_wrap },
            React.createElement("div", { className: page_module_scss_1["default"].order_total_wrap },
                React.createElement("div", { className: page_module_scss_1["default"].order_total_left },
                    React.createElement("div", { className: page_module_scss_1["default"].order_badge }, "\uBC30\uB2EC"),
                    React.createElement("div", { className: page_module_scss_1["default"].total_text },
                        React.createElement("div", { className: page_module_scss_1["default"].total_text_title },
                            React.createElement("p", null, "\uBC30\uB2ECOOCRT"),
                            React.createElement("p", { className: page_module_scss_1["default"].total_text_paid }, "\uACB0\uC81C\uC644\uB8CC")),
                        "\uBA54\uB274 3\uAC1C \u00B7 \uCD1D 32,000\uC6D0")),
                React.createElement("div", { className: page_module_scss_1["default"].orderSubmit },
                    React.createElement("div", { className: page_module_scss_1["default"].order_sub_decline }, "\uAC70\uBD80"),
                    React.createElement("div", { className: page_module_scss_1["default"].order_sub_count },
                        React.createElement(image_1["default"], { "aria-hidden": true, src: "/icons/count_minus.svg", alt: "Window icon", width: 28, height: 28 }),
                        "20\uBD84",
                        React.createElement(image_1["default"], { "aria-hidden": true, src: "/icons/count_plus.svg", alt: "Window icon", width: 28, height: 28 })),
                    React.createElement("div", { className: page_module_scss_1["default"].order_sub_accept }, "\uC811\uC218"))),
            React.createElement("div", { className: page_module_scss_1["default"].contents_wrap },
                React.createElement("div", { className: page_module_scss_1["default"].order_reciept_wrap },
                    React.createElement("div", { className: page_module_scss_1["default"].receipt_list },
                        React.createElement("div", { className: page_module_scss_1["default"].receipt },
                            React.createElement("p", null, "\uC8FC\uBB38\uAE08\uC561"),
                            React.createElement("p", null, "37,000\uC6D0")),
                        React.createElement("div", { className: page_module_scss_1["default"].receipt },
                            React.createElement("p", null, "\uC8FC\uBB38\uC2DC\uAC04"),
                            React.createElement("p", null, "1.18(\uBAA9) 18:30")),
                        React.createElement("div", { className: page_module_scss_1["default"].receipt },
                            React.createElement("p", null, "\uC8FC\uBB38\uC720\uD615"),
                            React.createElement("p", null, "\uBC30\uBBFC1 \uD55C\uC9D1\uBC30\uB2EC"))),
                    React.createElement("hr", null),
                    React.createElement("div", { className: page_module_scss_1["default"].message_wrap },
                        React.createElement("p", null, "\uC694\uCCAD\uC0AC\uD56D"),
                        React.createElement("p", { className: page_module_scss_1["default"].message }, "(\uC218\uC800\uD3EC\uD06CX), \uBB38 \uC55E\uC5D0 \uB450\uACE0 \uBCA8 \uB20C\uB7EC\uC8FC\uC138\uC694 \uC54C\uACA0\uC8E0?"))),
                React.createElement("div", { className: page_module_scss_1["default"].order_menuList_wrap },
                    React.createElement("div", { className: page_module_scss_1["default"].menu },
                        "[\uC624\uD508\uD2B9\uAC00] \uD654\uB355\uB9C8\uB974\uAC8C\uB9AC\uB530 \uC0B0\uB9C8\uB974\uC790\uB178\uC0B0 \uD50C\uB7FC\uD1A0\uB9C8\uD1A0",
                        React.createElement("div", { className: page_module_scss_1["default"].menu_right },
                            React.createElement("p", null, "3"),
                            React.createElement("div", { className: page_module_scss_1["default"].menu_right_price }, "68,000\uC6D0"))),
                    React.createElement("div", { className: page_module_scss_1["default"].print_wrap },
                        React.createElement("div", { className: page_module_scss_1["default"].print_button }, "\uC8FC\uBB38\uC11C \uCD9C\uB825"),
                        React.createElement("div", { className: page_module_scss_1["default"].print_button }, "\uC601\uC218\uC99D \uCD9C\uB825")))))));
}
exports["default"] = Home;
