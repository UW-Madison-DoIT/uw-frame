define(['angular'], function(angular) {

    var config = angular.module('app-config', []);
    config
        .constant('APP_FLAGS', {
            'features' : false,
            'showSidebar' : true,
            'showSearch' : true
        })
        .constant('SERVICE_LOC', {
            'sessionInfo' : 'samples/session.json',
            'sidebarInfo' : 'samples/sidebar.json',
            'featuresInfo' : 'samples/features.json',
            'notificationsURL' : 'samples/notifications.json',
            'kvURL' : null,
            'groupURL' : null
        })
        .constant('NAMES', {
            'title' : 'MyUW',
            'ariaLabelTitle' : 'My U W',
            'crest' : 'img/uwcrest_web_sm.png',
            'crestalt' : 'UW Crest',
            'sublogo' : ''
        })
        .constant('SEARCH',{
            'isWeb' : false,
            'searchURL' : 'https://my.wisc.edu/web/apps/search/'
        })
        .constant('NOTIFICATION', {
            'enabled' : false,
            'groupFiltering' : false,
            'notificationFullURL' : 'notifications'
        })
        .constant('MISC_URLS',{
            'feedbackURL' : 'https://my.wisc.edu/portal/p/feedback',
            'back2ClassicURL' : null,
            'whatsNewURL' : null,
            'loginURL' : '/portal/Login?profile=bucky',
            'helpdeskURL' : 'https://kb.wisc.edu/helpdesk/'
        });

    return config;

});
