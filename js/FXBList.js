
function tapHandler(){}

var btn_cityFXB = [{
    text: '同城风向标',  
    handler: tapHandler
}];

var btn_postFXB = [{
    text: '发送风向标',    
    iconMask: true,
    iconCls: 'compose',
    handler: tapHandler
}];

var btn_localFXB = [{
    text: '周边风向标',    
    handler: tapHandler
}];

btn_cityFXB.push({xtype: 'spacer'});
btn_postFXB.push({xtype: 'spacer'});

var FXBListToolbar = [
    new Ext.Toolbar({
        ui: 'light',
        dock: 'top',
        items: btn_cityFXB.concat(btn_postFXB).concat(btn_localFXB),
    }),
];



ds.views.FXBList = Ext.extend(Ext.Panel, {
    layout: 'card',
        
    initComponent: function() {                
        this.list = new ds.UserBriefList({
            store: ds.FXBListStore,
        });
        
        this.list.on('render', function(){
            this.list.store.load();            
        }, this);
        
        this.listPanel = new Ext.Panel({
            items: this.list,
            layout: 'fit',
            dockedItems: FXBListToolbar,
        });
        
        this.items = this.listPanel;
        
        selOptions = {prevCard: this.listPanel, parent: this}
        this.list.on('selectionchange', ds.onUserSelect, this, selOptions);
        
        ds.views.FXBList.superclass.initComponent.call(this);
    },
    
    
});

Ext.reg('fxblist', ds.views.FXBList);