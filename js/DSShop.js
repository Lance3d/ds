ds.views.DSShop = Ext.extend(Ext.Panel, {
    layout: 'card',
    
    initComponent: function() {                
        this.html = '商城',
        ds.views.DSShop.superclass.initComponent.call(this);
    },
    
    
});

Ext.reg('dsshop', ds.views.DSShop);