(function() {
    var e, t;
    e = ["underscore", "debug", "angular", "lang", "angular_translate", "core/module", "core/filters/isMe", "core/filters/renderAccount", "core/filters/renderDatetime", "core/filters/renderLeftTime", "core/filters/renderPercent", "core/filters/renderTradeStatus", "core/filters/rendSorter", "core/filters/stabilityStyle", "core/filters/tradeStyle", "core/directives/domain", "core/directives/equals", "core/directives/fixAutoFill", "core/directives/focusBind", "core/directives/formState", "core/directives/inviterInput", "core/directives/resizeIframe", "core/services/invitationManager", "core/services/corruptDetector", "options/controllers/OptionsPageController", "options/controllers/TradeListController", "options/controllers/DomainListController", "options/controllers/InvitationController", "options/controllers/ProfileController", "options/controllers/ChangePasswordController", "options/controllers/ChangePasswordModalController"], t = function(e, t, r, o) {
        var i;
        return i = t("options"), r.module("options").run(function($templateCache) {
            return i("run"), $templateCache.put("dropdown/safeDropdown.tpl.html", '<ul tabindex="-1" class="dropdown-menu" role="menu"><li role="presentation" ng-class="{divider: item.divider}" ng-repeat="item in content"><a role="menuitem" tabindex="-1" ng-href="{{item.href}}" ng-if="!item.divider && item.href" ng-bind="item.text"></a> <a role="menuitem" tabindex="-1" href="" ng-if="!item.divider && item.click" ng-click="$eval(item.click);$hide()" ng-bind="item.text"></a></li></ul>')
        }).config(function($compileProvider, $stateProvider, $urlRouterProvider, $dropdownProvider, $translateProvider) {
            return i("config"), $compileProvider.aHrefSanitizationWhitelist(/^\s*(http|https?|ftp|mailto|chrome-extension):/), r.extend($dropdownProvider.defaults, {
                template: "dropdown/safeDropdown.tpl.html"
            }), $urlRouterProvider.when("/", "/domains"), $stateProvider.state("main", {
                url: "/",
                templateUrl: "/partials/options/layout.html",
                controller: "OptionsPageController",
                resolve: {
                    user: function(tele) {
                        return tele.scope("user")
                    },
                    averageStability: function(tele) {
                        return tele.scope("averageStability")
                    }
                }
            }).state("main.trades", {
                url: "trades",
                templateUrl: "/partials/options/trade_list.html",
                controller: "TradeListController"
            }).state("main.domains", {
                url: "domains",
                templateUrl: "/partials/options/domain_list.html",
                controller: "DomainListController"
            }), $urlRouterProvider.otherwise("domains"), o.config($translateProvider)
        }), r.element(document).ready(function() {
            return r.bootstrap(document, ["options"])
        })
    }, require(["../config"], function() {
        return requireWithRetry(e, t)
    })
}).call(this);