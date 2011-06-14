
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
        
        // tag form
        var formBase = {
            scroll: 'vertical',            
            html: "<p align='center'>小窍门：开启VIP标签，可以提高速配效率</p>",
            items: [
               {
                    xtype: 'fieldset',
                    //title: '免费标签',
                    defaults: {
                        required: true,
                        labelAlign: 'left',
                        labelWidth: '40%'
                    },
                    items: [{
                            xtype: 'textfield',
                            name : 'tag1',
                            label: '标签一',
                            value: '吃饭',
                            useClearIcon: true,                            
                        }, {
                            xtype: 'textfield',
                            name : 'tag2',
                            label: '标签二',
                            value: '看电影',
                            useClearIcon: true,
                        }, 
                    ]
                }, {
                    xtype: 'fieldset',
                    title: 'VIP专享标签',
                    defaults: {
                        labelAlign: 'left',
                        labelWidth: '40%'
                    },
                    items: [{
                            xtype: 'textfield',
                            name : 'tag3',
                            label: '标签三',
                            value: '闲聊',                            
                            useClearIcon: true,
                            disabled: true,                            
                        }, {
                            xtype: 'textfield',
                            name : 'tag4',
                            label: '标签四',
                            value: '约会',
                            useClearIcon: true,
                            disabled: true,
                        }, {
                            xtype: 'textfield',
                            name : 'tag5',
                            label: '标签五',                            
                            value: '征婚',
                            useClearIcon: true,
                            disabled: true,
                        }, 
                    ],
                },{
                    xtype: 'button',
                    text: '更新',
                    ui: 'confirm',
                    style: 'margin:2%;',
                    scope: this,
                    handler: function() {
                        var tags = this.tagForm.getValues();                        
                        for(idx in tags) console.log(idx + ':' + tags[idx]);
                    }
                }, 
            ],
        };
        
        var tagForm = new Ext.form.FormPanel(formBase);
        
        // 根据是否为VIP来调整form的显示
        var isVIP = false;
        if(isVIP){
            tagForm.html = '';
            tagForm.items.get(1).items.each(function(item){item.enable();});            
        }
        
        this.tagForm = tagForm;
        this.items = this.tagForm;
                
        ds.views.TagFormCard.superclass.initComponent.call(this);
    },  // initComponent()


});