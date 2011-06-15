// toolbar def
var MatchListToolbar = [{
        text: '列表模式',  
        handler: function(){},
    },{
        xtype: 'spacer',
    },{
        text: '编辑标签',    
        iconMask: true,
        iconCls: 'compose',
        scope: this,
        handler: function(){
            ds.switchCard(ds.theApp, ds.theApp.tabPanel, ds.views.TagFormCard);
        },
    },{
        xtype: 'spacer',
    },{
        text: '聊天记录',
        badgeText: '2',   
        handler: function () {},
    },
];

ds.views.MatchList = Ext.extend(Ext.Panel, {
    layout: 'card',

    initComponent: function() {    
        
        this.list = new ds.UserBriefList({
            store: ds.MatchListStore,
        });
                
        this.list.on('render', function(){
            this.list.store.load();            
        }, this);
        
        this.listPanel = new Ext.Panel({
            items: this.list,
            layout: 'fit',
            dockedItems: appendAdBar([{
                xtype: 'toolbar',
                dock: 'top',
                items: MatchListToolbar,
            }]),
        });
        
        this.items = this.listPanel;
        
        this.list.on('selectionchange', 
            function(selectionmodel, records){
                options = {prevCard: ds.theApp.tabPanel, parent: ds.theApp};
                ds.onUserSelect(selectionmodel, records, options)
            }, this);
            
        this.listeners = {
            beforeactivate: { fn: function(){
                this.list.getSelectionModel().deselectAll();                
            }, scope: this },
        },
        
        ds.views.MatchList.superclass.initComponent.call(this);
    },
            
});

Ext.reg('matchlist', ds.views.MatchList);