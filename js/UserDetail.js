ds.views.UserDetail = Ext.extend(Ext.Panel, {
    scroll: 'vertical',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },
        
    cls: 'user-detail',
    initComponent: function(){
        this.dockedItems = appendAdBar([{
            xtype: 'toolbar',
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
            }]
        }]);
        
        this.items = [{
            tpl: new Ext.XTemplate( '<img src="{profile_image_url}" /><h3>{from_user}</h3><h4 class="subdata">{text}</h4>'),
            data: this.record.data,
            styleHtmlContent: true
        }];        
                
        ds.views.UserDetail.superclass.initComponent.call(this);
    },
    
});

Ext.reg('UserDetail', ds.views.UserDetail);