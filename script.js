function _slicedToArray(a, b) {
    return _arrayWithHoles(a) || _iterableToArrayLimit(a, b) || _unsupportedIterableToArray(a, b) || _nonIterableRest();
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(a, b) {
    if (a) {
        if ("string" == typeof a) return _arrayLikeToArray(a, b);
        var c = Object.prototype.toString.call(a).slice(8, -1);
        return "Object" === c && a.constructor && (c = a.constructor.name), "Map" === c || "Set" === c ? Array.from(a) : "Arguments" === c || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c) ? _arrayLikeToArray(a, b) : void 0;
    }
}
function _arrayLikeToArray(a, b) {
    (null == b || b > a.length) && (b = a.length);
    for (var c = 0, d = new Array(b); c < b; c++) d[c] = a[c];
    return d;
}
function _iterableToArrayLimit(a, b) {
    if ("undefined" != typeof Symbol && Symbol.iterator in Object(a)) {
        var c = [],
            d = !0,
            e = !1,
            f = void 0;
        try {
            for (var g, h = a[Symbol.iterator](); !(d = (g = h.next()).done) && (c.push(g.value), !b || c.length !== b); d = !0);
        } catch (a) {
            (e = !0), (f = a);
        } finally {
            try {
                d || null == h.return || h.return();
            } finally {
                if (e) throw f;
            }
        }
        return c;
    }
}
function _arrayWithHoles(a) {
    if (Array.isArray(a)) return a;
}
Object.entries ||
    (Object.entries = function (a) {
        for (var b = Object.keys(a), c = b.length, d = new Array(c); c--; ) d[c] = [b[c], a[b[c]]];
        return d;
    }),
    Array.prototype.find ||
        Object.defineProperty(Array.prototype, "find", {
            value: function (a) {
                if (null == this) throw new TypeError('"this" is null or not defined');
                var b = Object(this),
                    c = b.length >>> 0;
                if ("function" != typeof a) throw new TypeError("predicate must be a function");
                for (var d = arguments[1], e = 0; e < c; ) {
                    var f = b[e];
                    if (a.call(d, f, e, b)) return f;
                    e++;
                }
            },
        }),
    $(function () {
        function a() {
            function a(a) {
                e(a), i(a), k(a), l(a), m(a);
            }
            function e(a) {
                var b = document.querySelector("#background"),
                    c = document.querySelector("#crossfader"),
                    d = h(a);
                c.setAttribute("src", b.getAttribute("src")),
                    $(c)
                        .finish()
                        .animate({ opacity: 1 }, 0, function () {
                            b.setAttribute("src", "https://web-assets.zendesk.com/images/p-self-guided-tour/" + d + ".png"), p(c);
                        });
            }
            function h(a) {
                var b = {
                    1: 2,
                    2: 4,
                    3: 5,
                    4: 6,
                    5: 7,
                    6: 8,
                    7: 9,
                    8: 12,
                    9: 13,
                    10: 15,
                    11: 16,
                    12: 17,
                    13: 18,
                    14: 19,
                    15: 20,
                    16: 21,
                    17: 24,
                    18: 25,
                    19: 26,
                    20: 27,
                    21: 28,
                    22: 29,
                    23: 31,
                    24: 32,
                    25: 34,
                    underflow: 0,
                    overflow: 1 / 0,
                };
                return Object.entries(b)
                    .sort(function (a, b) {
                        var c = _slicedToArray(a, 2),
                            d = (c[0], c[1]),
                            e = _slicedToArray(b, 2),
                            f = (e[0], e[1]);
                        return d - f;
                    })
                    .find(function (b) {
                        var c = _slicedToArray(b, 2),
                            d = (c[0], c[1]);
                        return a <= d;
                    })[0];
            }
            function i(a) {
                var b = A[a].overlay;
                b ? o("#overlay") : p("#overlay"),
                    1 === a ? $("#prev").addClass("disabled") : $("#prev").removeClass("disabled"),
                    2 === a ? ($("#dots").show(), o(".dot")) : ($("#dots").hide(), p("#highlight, .dot")),
                    10 === a || 20 === a || 22 === a || 24 === a || 33 === a
                        ? (window.clearTimeout(w),
                          (w = window.setTimeout(
                              function () {
                                  (a += 1), t(a);
                              },
                              24 === a ? 1e3 : 2e3
                          )))
                        : window.clearTimeout(w),
                    a === C ? ($("#overlay").addClass("conclusion"), $("#next").addClass("disabled")) : ($("#overlay").removeClass("conclusion"), $("#next").removeClass("disabled"));
            }
            function j(a) {
                var b = x[a];
                if (b) {
                    var c = b.width + "%",
                        d = b.height + "%",
                        e = b.top + "%",
                        f = b.left + "%";
                    D.css("width", c), D.css("height", d), D.css("top", e), D.css("left", f);
                }
            }
            function k(a) {
                var b = y[a];
                if (b) {
                    var c = b.width + "%",
                        d = b.height + "%",
                        e = b.top + "%",
                        f = b.left + "%";
                    E.css("width", c), E.css("height", d), E.css("top", e), E.css("left", f), o(E, 250);
                } else p(E, 250);
            }
            function l(a) {
                $(F)
                    .finish()
                    .animate({ opacity: 0 }, 500, function () {
                        var b = z[a];
                        if (b) {
                            var c = z[a].top + "%",
                                d = z[a].left + "%";
                            F.css("top", c), F.css("left", d), o(F);
                        } else p(F);
                    });
            }
            function m(a) {
                a > 99
                    ? (n(a), o(G))
                    : $(G)
                          .finish()
                          .animate({ opacity: 0 }, 500, function () {
                              a === C ? $(".popup").addClass("conclusion") : $(".popup").removeClass("conclusion"), n(a), o(G), r();
                          });
            }
            function n(a) {
                var b = A[a].title,
                    c = A[a].content,
                    d = A[a].button,
                    e = A[a].width + "%",
                    f = A[a].top + "%",
                    g = A[a].left + "%",
                    h = A[a].arrowTop + "%",
                    i = A[a].arrowLeft + "%",
                    j = document.querySelector(".popup .next");
                b ? H.text(b).show() : H.hide(),
                    c ? (G.show(), I.html(c).show(), j.removeAttribute("style")) : G.hide(),
                    2 === a ? $(".popup .next").text("Got it") : $(".popup .next").text("Next"),
                    d ? J.show() : J.hide(),
                    G.css("width", e),
                    G.css("top", f),
                    G.css("left", g),
                    K.css("top", h),
                    K.css("left", i);
            }
            function o(a, b) {
                b || (b = 500), $(a).finish().animate({ opacity: 1 }, b);
            }
            function p(a, b) {
                b || (b = 500), $(a).finish().animate({ opacity: 0 }, b);
            }
            function q(a) {
                var b = a;
                b.addClass("disabled");
            }
            function r() {
                var a = $("button.next, #click-zone, .intro");
                a.removeClass("disabled");
            }
            function s(b) {
                t(), a(b), 1 !== b && ($("#intro").fadeOut(), $("#container").fadeIn());
            }
            function t(a) {
                a ? (L = a) : ((L = u()), (B = L)), (document.location.hash = L);
            }
            function u() {
                return (L = window.location.hash), (L = parseInt(L.replace("#", ""))), (L = v(L)), isNaN(L) && (L = 1), L;
            }
            function v(a) {
                return a < 1 && (a = 1), a > C && (a = C), a;
            }
            $(".demo-selection-container").hide(),
                "true" === f &&
                    ($(".js-get-started").removeClass("js-open-modal"),
                    $(".js-get-started").click(function () {
                        c();
                    })),
                b() &&
                    ($(".p-self-guided-tour").addClass("ungated"),
                    $(".js-modal").css("z-index", "-1"),
                    $(".js-open-modal").click(function (a) {
                        $(".js-open-modal").addClass("disabled");
                        var b = setInterval(function () {
                            $(".js-step.step-3").hasClass("step-fade-in") ? clearTimeout(b) : $(".js-demo-submit-btn:visible").click();
                        }, 500);
                    })),
                g.find(".js-success-message").on("submissionResultMessageActiveClassAdded", d);
            var w,
                x = {
                    1: { width: 57, height: 5.5, top: 5, left: 7 },
                    2: { width: 24.5, height: 78.6, top: 16.3, left: 7 },
                    3: { width: 38.3, height: 45.9, top: 49, left: 31.6 },
                    4: { width: 27.2, height: 28.5, top: 16.3, left: 70 },
                    5: { width: 27.2, height: 44.3, top: 45, left: 70 },
                    6: { width: 38.4, height: 54.7, top: 16.3, left: 31.6 },
                },
                y = {
                    4: { width: 2.5, height: 4, top: 4, left: 87.5 },
                    6: { width: 2.5, height: 4, top: 4, left: 73.5 },
                    7: { width: 2.5, height: 4, top: 79, left: 32.5 },
                    8: { width: 2.5, height: 4, top: 65, left: 40 },
                    9: { width: 2.5, height: 4, top: 85.5, left: 65.2 },
                    12: { width: 2.5, height: 4, top: 74, left: 81 },
                    13: { width: 2.5, height: 4, top: 75.2, left: 69.5 },
                    16: { width: 2.5, height: 4, top: 7.5, left: 52.5 },
                    17: { width: 2.5, height: 4, top: 18.5, left: 59 },
                    18: { width: 2.5, height: 4, top: 19.5, left: 46 },
                    19: { width: 2.5, height: 4, top: 55, left: 63.7 },
                    21: { width: 2.5, height: 4, top: 55, left: 63 },
                    25: { width: 2.5, height: 4, top: 74, left: 37 },
                    26: { width: 2.5, height: 4, top: 62, left: 41.2 },
                    27: { width: 2.5, height: 4, top: 92, left: 43.5 },
                    28: { width: 2.5, height: 4, top: 68, left: 31 },
                    29: { width: 2.5, height: 4, top: 58.7, left: 30.8 },
                    31: { width: 2.5, height: 4, top: 91.5, left: 87.6 },
                    32: { width: 2.5, height: 4, top: 88.2, left: 81.2 },
                },
                z = {
                    4: { top: 4.5, left: 87.5 },
                    6: { top: 4, left: 73.5 },
                    7: { top: 79, left: 32.5 },
                    8: { top: 65, left: 40 },
                    9: { top: 85.5, left: 65.2 },
                    12: { top: 74, left: 81 },
                    13: { top: 75.2, left: 69.5 },
                    16: { top: 7.5, left: 52.5 },
                    17: { top: 18.5, left: 59 },
                    18: { top: 19.5, left: 46 },
                    19: { top: 55, left: 63.7 },
                    21: { top: 55, left: 63 },
                    25: { top: 74, left: 37 },
                    26: { top: 62, left: 41.2 },
                    27: { top: 92, left: 43.5 },
                    28: { top: 68, left: 31 },
                    29: { top: 58.7, left: 30.8 },
                    31: { top: 91.5, left: 87.6 },
                    32: { top: 88.2, left: 81.2 },
                },
                A = {
                    1: {
                        title: "Overview",
                        content: "Before we get into the tour, let's do a quick overview to get you familiar with the layout of the agent workspace.",
                        button: !0,
                        width: 27,
                        top: 35,
                        left: 37,
                        arrowTop: 85,
                        arrowLeft: 90,
                        overlay: !0,
                    },
                    2: {
                        title: "",
                        content: "Hover over the pulsing hotspots to learn about each item. When you're ready to move on, click the next arrow above.",
                        button: !0,
                        width: 25,
                        top: 0,
                        left: 37.3,
                        arrowTop: 10.5,
                        arrowLeft: -3.5,
                        overlay: !1,
                    },
                    3: {
                        title: "A conversation-focused workspace",
                        content: "Agent Alex is on the customer support team at Shoe La La and has just answered a customer's question about a refund via WhatsApp ???????? one of their most popular channels.",
                        button: !0,
                        width: 27,
                        top: 30,
                        left: 37,
                        arrowTop: 85,
                        arrowLeft: 90,
                        overlay: !0,
                    },
                    4: {
                        title: "",
                        content: "Alex looks at his social messaging notifications to see if any need his attention.<p>&nbsp;</p>(To take action, click on the hotspot.)",
                        button: !1,
                        width: 25,
                        top: 11.5,
                        left: 74.5,
                        arrowTop: -5.5,
                        arrowLeft: 53.5,
                        overlay: !1,
                    },
                    5: {
                        title: "Notifications",
                        content: "Agents can keep track of notifications for conversations across social channels, including WhatsApp, WeChat, and LINE.",
                        button: !0,
                        width: 24,
                        top: 30,
                        left: 43,
                        arrowTop: 43,
                        arrowLeft: 96.5,
                        overlay: !1,
                    },
                    6: {
                        title: "",
                        content: "While checking his notifications, Alex sees an incoming chat message. To start the conversation, he clicks ???????Accept chat.???????",
                        button: !1,
                        width: 24.5,
                        top: 12,
                        left: 62.25,
                        arrowTop: -5.5,
                        arrowLeft: 47.8,
                        overlay: !1,
                    },
                    7: {
                        title: "",
                        content: "After reviewing Riley????????s question, Alex sends a quick response using ???????Chat Shortcuts???????, by typing ???????/r.???????",
                        button: !1,
                        width: 24,
                        top: 60,
                        left: 22,
                        arrowTop: 90,
                        arrowLeft: 45.6,
                        overlay: !1,
                    },
                    8: { title: "", content: "He selects the shortcut.", button: !1, width: 18, top: 51.5, left: 32.5, arrowTop: 89, arrowLeft: 44.5, overlay: !1 },
                    9: { title: "", content: "He then clicks ???????Send.???????", button: !1, width: 17.5, top: 71, left: 57.25, arrowTop: 90, arrowLeft: 49, overlay: !1 },
                    10: { title: "", content: "", button: !0, width: 7, top: 22, left: 47, arrowTop: 82, arrowLeft: 86, overlay: !1 },
                    11: {
                        title: "See their history",
                        content: "Before asking the customer any additional questions, Alex previews previous interactions that Riley has had with Shoe La La by reviewing Interaction History.",
                        button: !0,
                        width: 26,
                        top: 30,
                        left: 36.5,
                        arrowTop: 85,
                        arrowLeft: 90,
                        overlay: !0,
                    },
                    12: { title: "", content: "Alex scrolls down the sidebar to see the full interaction history.", button: !1, width: 23, top: 57, left: 70.5, arrowTop: 89, arrowLeft: 47.5, overlay: !1 },
                    13: { title: "", content: "Alex hovers over a previous inquiry.", button: !1, width: 17, top: 70.4, left: 50.5, arrowTop: 43, arrowLeft: 96.5, overlay: !1 },
                    14: {
                        title: "Previous interactions",
                        content: "Here, Alex is able to see that Riley reached out about an order yesterday, and mentioned an order number.",
                        button: !0,
                        width: 23,
                        top: 27,
                        left: 41,
                        arrowTop: 95,
                        arrowLeft: 47,
                        overlay: !1,
                    },
                    15: {
                        title: "A quick side conversation",
                        content:
                            "With this information, Alex decides to loop in someone from the fulfillment center, who has the most relevant info on Riley's order. To do this, he uses Side Conversations ???????? an easy way to reach out to any team over email or Slack, without leaving the conversation.",
                        button: !0,
                        width: 27,
                        top: 30,
                        left: 37,
                        arrowTop: 85,
                        arrowLeft: 90,
                        overlay: !0,
                    },
                    16: { title: "", content: "Alex clicks on ???????Side conversations.???????", button: !1, width: 24.5, top: 16, left: 41.4, arrowTop: -14, arrowLeft: 47, overlay: !1 },
                    17: { title: "", content: "Alex selects ???????Slack.???????", button: !1, width: 16, top: 25.5, left: 52.25, arrowTop: -9, arrowLeft: 47, overlay: !1 },
                    18: { title: "", content: "Alex selects the #ask-shipping channel.", button: !1, width: 17, top: 27, left: 38.7, arrowTop: -7, arrowLeft: 47, overlay: !1 },
                    19: { title: "", content: "Alex types up his query and then clicks ???????Send.???????", button: !1, width: 18, top: 63, left: 56, arrowTop: -8, arrowLeft: 47, overlay: !1 },
                    20: { title: "", content: "", button: !0, width: 7, top: 48, left: 56.5, arrowTop: -8, arrowLeft: 47, overlay: !1 },
                    21: { title: "", content: "After getting a response, Alex marks the side conversation as done.", button: !1, width: 19, top: 63, left: 54.7, arrowTop: -7, arrowLeft: 47, overlay: !1 },
                    22: { title: "", content: "", button: !0, width: 7, top: 49, left: 53, arrowTop: -7, arrowLeft: 47, overlay: !1 },
                    23: {
                        title: "Wrapping it up",
                        content: "With the information from the fulfillment team, Agent Alex now has everything he needs to follow up with Riley, who has followed up with another question.",
                        button: !0,
                        width: 27,
                        top: 32,
                        left: 37,
                        arrowTop: 90,
                        arrowLeft: 85,
                        overlay: !0,
                    },
                    24: { title: "", content: "", button: !0, width: 7, top: 48, left: 56.5, arrowTop: -8, arrowLeft: 47, overlay: !1 },
                    25: { title: "", content: "After reading Riley????????s latest query, Alex uses the composer to switch over to email.", button: !1, width: 22, top: 72, left: 41.5, arrowTop: 17, arrowLeft: -3.5, overlay: !1 },
                    26: { title: "", content: "Alex selects ???????Email.???????", button: !1, width: 16.5, top: 70, left: 34.25, arrowTop: -9, arrowLeft: 46, overlay: !1 },
                    27: { title: "", content: "Alex has a macro set up to address this very request, so he selects a pre-written response.", button: !1, width: 24, top: 72, left: 33, arrowTop: 90, arrowLeft: 45, overlay: !1 },
                    28: { title: "", content: "Alex selects the Shipping category.", button: !1, width: 25, top: 54, left: 20.1, arrowTop: 85, arrowLeft: 45, overlay: !1 },
                    29: { title: "", content: "Alex selects the Delivery Status macro.", button: !1, width: 18, top: 41.5, left: 23.2, arrowTop: 91.5, arrowLeft: 45, overlay: !1 },
                    30: {
                        title: "Macro applied",
                        content: "The macro automatically adds in the relevant customer information and attaches the requested item.",
                        button: !0,
                        width: 24,
                        top: 28.5,
                        left: 39,
                        arrowTop: 95,
                        arrowLeft: 45,
                        overlay: !1,
                    },
                    31: {
                        title: "",
                        content: "Looks like everything is wrapped up, so Alex closes out the ticket by clicking the ???????Submit as?????????????? button.",
                        button: !1,
                        width: 21,
                        top: 69,
                        left: 78.5,
                        arrowTop: 91.5,
                        arrowLeft: 45,
                        overlay: !1,
                    },
                    32: { title: "", content: "Alex selects ???????Submit as Solved.???????", button: !1, width: 23, top: 74, left: 71.1, arrowTop: 87, arrowLeft: 45, overlay: !1 },
                    33: { title: "", content: "", button: !0, width: 7, top: 78, left: 63, arrowTop: 5, arrowLeft: 5, overlay: !1 },
                    34: {
                        title: "Try the new Agent Workspace",
                        content:
                            "Now that you????????ve seen a short demo of some of the capabilities of the new Agent Workspace, try it out for yourself by signing up for a free trial of the Zendesk Suite.<br><a href='/register/?source=zendesk_suite' target='_blank' rel='noopener'><button>Start a trial</button></a>",
                        button: !1,
                        width: 27,
                        top: 32,
                        left: 36.5,
                        arrowTop: 87,
                        arrowLeft: 45,
                        overlay: !0,
                    },
                    101: { title: "Live updates", content: "Get real-time updates on incoming messages from customers across channels.", button: !1, width: 21, top: 9, left: 20, arrowTop: -5, arrowLeft: 45 },
                    102: { title: "Ticket fields", content: "Track and prioritize each customer interaction for faster follow up and resolution.", button: !1, width: 22, top: 27, left: 32.5, arrowTop: 44, arrowLeft: -3.8 },
                    103: {
                        title: "Omnichannel composer",
                        content: "Serve and respond to customers on their preferred channel. Seamlessly channel-switch without ending the conversation.",
                        button: !1,
                        width: 22,
                        top: 62.5,
                        left: 6,
                        arrowTop: 45,
                        arrowLeft: 96,
                    },
                    104: {
                        title: "Essentials card",
                        content: "See all relevant customer details like contact information and language, and add external profiles using Sunshine Profiles.",
                        button: !1,
                        width: 22,
                        top: 15,
                        left: 46.5,
                        arrowTop: 45,
                        arrowLeft: 96,
                    },
                    105: {
                        title: "Interaction history",
                        content: "Gain visibility into all previous events and conversations with your customers, including those from external systems using Sunshine Events.",
                        button: !1,
                        width: 22,
                        top: 40.5,
                        left: 46.5,
                        arrowTop: 45,
                        arrowLeft: 96,
                    },
                    106: { title: "Unified conversation", content: "Unify support channels into one stream for faster replies and seamless wrap up.", button: !1, width: 21, top: 77.5, left: 49.6, arrowTop: -5, arrowLeft: 45 },
                },
                B = 1,
                C = 34,
                D = $("#highlight"),
                E = $("#click-zone"),
                F = $("#dot"),
                G = $(".popup"),
                H = $(".popup .title"),
                I = $(".popup .content"),
                J = $(".popup .next"),
                K = $(".arrow");
            $(document).on("click", "#, .next, .previous", function () {
                var a = $(this),
                    b = $("button.next, #click-zone, .intro"),
                    c = "forward" === $(this).data("direction");
                2 === B && a.hasClass("in-popup") ? p(G) : (a.hasClass("disabled") || (c ? (B += 1) : (B -= 1)), (a.is(b) || a.hasClass("intro")) && q(b), t(B));
            }),
                $(".end").on("click", function () {
                    var a = $(this);
                    q(a), t(C);
                }),
                $(".dot").on("mouseenter", function () {
                    var a = $(this).attr("class").replace("dot dot-", "");
                    j(a), m("10" + a), o(D), p($(this));
                }),
                $(".dot").on("mouseleave", function () {
                    p(D), 2 === B && p(G), o(".dot");
                });
            var L;
            u(),
                s(L),
                window.addEventListener("hashchange", function () {
                    t(), a(L);
                });
        }
        function b() {
            return "true" === $.cookie(e);
        }
        function c() {
            $("#intro").fadeOut(), $("#container").fadeIn();
        }
        function d() {
            $(".js-close-modal:visible").trigger("click"), c();
        }
        var e = "lead-demo",
            f = webutils.getURLParameter("ungated"),
            g = $(".js-demo-form");
        document.addEventListener("keyup", function (a) {
            37 === a.keyCode && $(".nav-button.previous").trigger("click"), 39 === a.keyCode && $(".nav-button.next").trigger("click");
        }),
            a();
    });
