
// 附加广告位
function appendAdBar(dockedItems){
    var isVIP = false;
    if(!isVIP){
        dockedItems.push({
            html:"<p align='center'>广告位招租</p>"
        },{
            html:"<p align='center'>广告位招租</p>"
        },{
            html:"<p align='center'>广告位招租</p>"
        });    
    }
    return dockedItems;
}