function findItemsOver20(item){
    var itemList =[]
  for(var i = 0;i < item.length;i++){
    if (item[i].qty > 20){
      itemList.push(item[i])
    }
  }
    return itemList
  }