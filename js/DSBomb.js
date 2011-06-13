ds.views.DSBomb = Ext.extend(Ext.Panel, {
    layout: 'card',
    
    initComponent: function() {                
        this.html = '搭讪炸弹',
        ds.views.MatchList.superclass.initComponent.call(this);
    },
    
    
});

Ext.reg('dsbomb', ds.views.DSBomb);