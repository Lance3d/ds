Ext.regModel("UserBrief", {
    fields: [
        {name: "id",                type: "int"},
        {name: "text",              type: "string"},
        {name: "from_user",         type: "string"},
        {name: "profile_image_url", type: "string"}
    ]
});

ds.UserBriefStore = new Ext.data.Store({
    model: 'UserBrief',
    proxy: {
        type: 'ajax',
        url : 'ons.txt',
        reader: {
            type: 'json',
            root: 'results'
        }
    },
});


ds.MatchListStore = new Ext.data.Store({
    model: 'UserBrief',
    proxy: {
        type: 'ajax',
        url:  'sexy.txt',
        reader: {
            type: 'json',
            root: 'results',
        },
    },
});

ds.FXBListStore = new Ext.data.Store({
    model: 'UserBrief',
    proxy: {
        type: 'ajax',
        url:  'ons.txt',
        reader: {
            type: 'json',
            root: 'results',
        },
    },
});



ds.UserBriefTpl = new Ext.XTemplate(
    '<img src="{profile_image_url}" />',

    '<div class="x-tweetanchor"></div>',
    '<div class="tweet-bubble">',
        '<div class="tweet-content">',
            '<h2>{from_user}</h2>',
            '<p>{text:this.linkify}</p><strong></strong>',
            '<span class="posted">{created_at}</span>',
        '</div>',
    '</div>',
    {
        linkify: function(value) {
            return value.replace(/(http:\/\/[^\s]*)/g, "<a target=\"_blank\" href=\"$1\">$1</a>");
        }
    }
);


ds.UserBriefList = Ext.extend(Ext.List, {            

    emptyText: '<p>No user found matching that search</p>',            

    //store: ds.UserBriefStore,
    
    // temp
    itemCls: 'tweet',
    itemTpl: ds.UserBriefTpl,    

    plugins: [{
        ptype: 'listpaging',
        autoPaging: true
    }, {
        ptype: 'pullrefresh'
    }],            
});

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

