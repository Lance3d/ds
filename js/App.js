ds.views.MainPanel = Ext.extend(Ext.TabPanel, {        
    
    tabBar: {
        ui: 'light',
        dock: 'bottom',
        layout: { pack: 'center' }
    },
    
    cardSwitchAnimation: false,
            
    defaults: {
        scroll: 'vertical'
    },
    
    initComponent: function() {

        if (navigator.onLine) {
            this.items = [{                
                title: '速配',
                iconCls: 'team',
                xtype: 'matchlist'                
            }, {
                title: '风向标',
                iconCls: 'compose',
                xtype: 'fxblist'                
            }, {
                title: '搭讪炸弹',
                iconCls: 'download',
                xtype: 'dsbomb'                
            }, {
                title: '商城',
                iconCls: 'star',
                xtype: 'dsshop'                
            }];
        } else {
            this.on('render', function(){
                this.el.mask('No internet connection.');
            }, this);
        }
                
        ds.views.MainPanel.superclass.initComponent.call(this);
    },
    
    listeners: {
        beforeactivate: function(){
            this.getActiveItem().fireEvent('beforeactivate');            
        }
    },
    
}); 

ds.App = Ext.extend(Ext.Panel, {
    layout: 'card',
    fullscreen: true,
    
    initComponent: function() {                        
        this.tabPanel = new ds.views.MainPanel();
        this.items = this.tabPanel;
        
        ds.App.superclass.initComponent.call(this);
    },
});