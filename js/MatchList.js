// toolbar def start

var btn_listView = [{
    text: '列表模式',  
    handler: function(){},
}];

var btn_editTag = [{
    text: '编辑标签',    
    iconMask: true,
    iconCls: 'compose',
    scope: this,
    handler: function(){
        ds.switchCard(ds.theApp, ds.theApp.tabPanel, ds.views.TagFormCard);
    },
}];

var btn_chatLog = [{
    text: '聊天记录',
    badgeText: '2',   
    handler: function () {},
}];

btn_listView.push({xtype: 'spacer'});
btn_editTag.push({xtype: 'spacer'});

var MatchListToolbar = [
    new Ext.Toolbar({
        ui: 'light',
        dock: 'top',
        items: btn_listView.concat(btn_editTag).concat(btn_chatLog),
    }),
];

// toolbar def end

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
            dockedItems: MatchListToolbar,
        });
        
        this.items = this.listPanel;
        
        selOptions = {prevCard: this.listPanel, parent: this}
        this.list.on('selectionchange', ds.onUserSelect, this, selOptions);
        
        ds.views.MatchList.superclass.initComponent.call(this);
    },
            
});

Ext.reg('matchlist', ds.views.MatchList);