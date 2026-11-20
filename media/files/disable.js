// Everything lives in one closure, so the page keeps no globals of its own.
(function () {
    "use strict";

    var overlay = document.getElementById("killjs");

    function closeOverlay() {
        overlay.style.display = "none";
    }

    // Because this only runs when JavaScript is enabled, it doubles as a warning to
    // visitors that JavaScript is active on this page.
    function jsWarning() {
        if (document.getElementById("jswarning") !== null) {
            return;
        }
        var bar = document.createElement("div");
        bar.id = "jswarning";
        bar.innerHTML =
        '<a style="color:white;" href="https://disable-javascript.org"' +
        ' target="_blank"' +
        ' title="disable-javascript.org">' +
        "Please disable JavaScript by default</a>" +
        " and only enable on websites you trust. You have been warned.";
        document.body.insertBefore(bar, document.body.firstChild);
    }

    function favicons() {
        var hidden = "hidden";
        var visibilityChange = "visibilitychange";
        var favicon = document.querySelector("[rel='shortcut icon']").href;
        var pageTitle = document.title;
        var wasSpoofed = false;
        var spoofed = [];

        var services = {
            trump: () => {
                let title = "Donald J. Trump (@realDonaldTrump) / X";
                let favicon = "/media/files/killjs/x.png";
                return {
                    title,
                    favicon,
                };
            },
            norton: () => {
                let title = "PAYMENT & PURCHASE";
                let favicon = "/media/files/killjs/nr.png";
                return {
                    title,
                    favicon,
                };
            },
            virus: () => {
                let title = "[WARNING] 5 Viruses found on your Computer!";
                let favicon = "/media/files/killjs/warn.png";
                return {
                    title,
                    favicon,
                };
            },
            finance: () => {
                let title = "Yahoo Finance - Stock Market Live, Quotes, Business & Finance News";
                let favicon = "/media/files/killjs/yahoo.png";
                return {
                    title,
                    favicon,
                };
            },
            math1: () => {
                let title = "what is 5 times 3 - Google Search";
                let favicon = "/media/files/killjs/go.ico";
                return {
                    title,
                    favicon,
                };
            },
            lesspriv: () => {
                let title = "Decreasing security and privacy - ChatGPT";
                let favicon = "/media/files/killjs/cgpt.png";
                return {
                    title,
                    favicon,
                };
            },
            warthunder: () => {
                let title = "League of Legends Homepage";
                let favicon = "/media/files/killjs/lol.png";
                return {
                    title,
                    favicon,
                };
            },
            gar: () => {
                let title = "green apple redo - YouTube";
                let favicon = "/media/files/killjs/yt.ico";
                return {
                    title,
                    favicon,
                };
            },
            fishbell: () => {
                let title = "Fish Doorbell – See You Next Season! | The Fish Doorbell";
                let favicon = "/media/files/killjs/fish.png";
                return {
                    title,
                    favicon,
                };
            },
            evil: () => {
                let title = "Home - RozAd87";
                let favicon = "/media/files/killjs/evil.png";
                return {
                    title,
                    favicon,
                };
            },
        };

        var enabledServices = Object.keys(services);

        function update(data) {
            var cacheBuster = "?v=" + Math.round(Math.random() * 10000000);
            var link = document.createElement("link");
            link.type = "image/x-icon";
            link.rel = "shortcut icon";
            link.href = data.favicon + cacheBuster;
            document
            .getElementsByTagName("head")[0]
            .querySelector("[rel='shortcut icon']")
            .remove();
            document.getElementsByTagName("head")[0].appendChild(link);
            document.title = data.title;
            if (wasSpoofed === true) {
                overlay.style.display = "block";
                overlay.innerHTML = `
                <p>
                <strong>[CLICK/TAP THIS OVERLAY ANYWHERE TO CLOSE IT]</strong>
                </p>
                <p>
                ...this isn't the site you expected here, isn't it? What you saw a moment ago in this tab's name was funny, confusing, maybe even embarassing, but it wasn't my site.
                </p>
                <p>
                So what happened here? Well.. you just fell for nothing more than <strong>a prank</strong>. A joke meant to catch you off-guard with something you (probably) haven't seen before. But this isn't just a prank that's here for laughs (though I do hope you end up having a little laugh from this), it's meant to teach you a lesson. A lesson of privacy.
                </p>
                <p>
                As sad as it is, I can heavily assume you aren't interested in internet privacy. You probably use Google Chrome, WhatsApp, and all of these services owned by big companies; and I don't blame anyone but them for that. After all, ~69% (<em>nice</em>) of web browser users use Chrome, and you've grown with sticking to what is known.
                </p>
                <p>
                But I'm here to challenge that. While this prank's (and by extension this popup's) original purpose was only to teach you about the importance of disabling JavaScript, I've decided to expand it into a bigger lesson.
                </p>
                <p>
                So I ask you, <strong>rethink your internet usage!</strong> Think about how much big companies track about you, how much data is being collected on almost all the sites you visit (not this one though, I'm not <em>that</em> much of an a**hole), and how much of your very, very precious personal data goes through the servers of a company who you cannot trust for sure.
                </p>
                <p>
                Do your own research, look into better options for different products you use, like swapping out bad browsers like Chrome, Opera, and Edge for better options like Chrom<strong>ium</strong>, Brave, or even Firefox. Even doing something like setting up NextDNS, which takes at most 20 minutes of your time and has <a href="https://github.com/yokoffing/NextDNS-Config">step by step guides</a>, and once set up will already do a fair bit for your privacy.
                </p>
                <p>
                Soon, I will write a page on how to gain privacy in as many aspects of tech as possible, and put it here.
                </p>
                <p>
                Even if one person decides to look into what I talked about, and changes their tech life for the better, it will be a success. Oh yeah, and <a href="https://disable-javascript.org" target="_blank" title="disable-javascript.org">disable JavaScript!</a>
                </p>
                <p>
                <small>You have no idea what any of this means? Then you probably haven't noticed this page's tab icon and title while it was inactive/sent to the background. Simply open a new tab and see how this tab changes. =]</small>
                </p>
                <p>
                <strong>[CLICK/TAP THIS OVERLAY ANYWHERE TO CLOSE IT]</strong>
                </p>
                `;
            }
        }

        function restore() {
            update({
                title: pageTitle,
                favicon: favicon,
            });
        }

        function spoof() {
            var i = 0;
            if (spoofed.length === enabledServices.length) {
                spoofed.length = 0;
            }
            for (var es = 0; es < enabledServices.length; es++) {
                i = Math.round(Math.random() * (enabledServices.length - 1));
                if (spoofed.includes(i) === false) {
                    break;
                }
            }
            spoofed.push(i);
            var service = enabledServices[i];
            if (service && services[service]) {
                update(services[service]());
            }
            wasSpoofed = true;
        }

        function handler() {
            if (document[hidden]) {
                spoof();
            } else {
                restore();
            }
        }

        // Browsers without the unprefixed Page Visibility API
        if (typeof document.mozHidden !== "undefined") {
            hidden = "mozHidden";
            visibilityChange = "mozvisibilitychange";
        } else if (typeof document.msHidden !== "undefined") {
            hidden = "msHidden";
            visibilityChange = "msvisibilitychange";
        } else if (typeof document.webkitHidden !== "undefined") {
            hidden = "webkitHidden";
            visibilityChange = "webkitvisibilitychange";
        }
        document.addEventListener(visibilityChange, handler, false);
    }

    // The tab title only gets spoofed on a desktop-sized window of a browser that
    // isn't a phone, which is where a visitor sees the tab bar.
    function startFavicons() {
        if (!window.matchMedia("(min-width: 800px)").matches) {
            return;
        }
        if (
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent,
            )
        ) {
            return;
        }
        favicons();
    }

    if (overlay !== null) {
        overlay.addEventListener("click", closeOverlay);
    }

    if (document.body !== null) {
        jsWarning();
    } else {
        document.addEventListener("DOMContentLoaded", jsWarning);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", startFavicons);
    } else {
        startFavicons();
    }
})();
