Ext.ns('ds','ds.views','ds.globals');

Ext.setup({
    icon: 'icon.png',
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    glossOnIcon: false,
    onReady: function() {
        ds.globals.userDetailCard = new ds.views.UserDetail();
        ds.theApp = new ds.App();
    }
});