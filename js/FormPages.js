
ds.switchCard = function(owner, prevCd, targetCd){
    var target = new targetCd({
        prevCard: prevCd,
    });
    owner.setActiveItem(target, 'slide');    
};

// 用户列表元素选中后的处理。
// 传入的options应该包括以下两个元素: options.prevCard 和 options.parent
ds.onUserSelect = function(selectionmodel, records, options){    
    if( records[0] != undefined){
        var userCard = new ds.views.UserDetail({
            prevCard: options.prevCard,
            record: records[0]
        });

        // Tell the parent panel to animate to the new card
        options.parent.setActiveItem(userCard, 'slide');
    }
}



ds.views.TagFormCard = Ext.extend(Ext.Panel, {
    scroll: 'vertical',
    layout: 'card',    
    
    initComponent: function(){
    
        // toolbar
        this.dockedItems = [{
            xtype: 'toolbar',
            title: '编辑标签',
            items: [{
                ui: 'back',
                text: '返回',
                scope: this,
                handler: function(){
                    this.ownerCt.setActiveItem(this.prevCard, {
                        type: 'slide',
                        reverse: true,
                        scope: this,
                        after: function(){
                            this.destroy();
                        }
                    });
                }
            },{
                xtype: 'spacer',
            },{
                text: '我的空间',
                handler: function(){}
            },]
        }];
        
        this.html = "under construction";        
                
        ds.views.TagFormCard.superclass.initComponent.call(this);
    },


});