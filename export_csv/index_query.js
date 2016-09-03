function doExport(page, pagesize) {
    var params = {};
    //分页参数
    params.page = page;
    params.pageSize = pagesize

    //查询参数
    params.userPhone = "";
    params.couponCode = "";
    params.isEnable = "";
    params.channel = "";

    console.log(params);
    $.ajax({
        type: "POST",
        url: "/FrontWeb/couponQuery/toCouponQueryPageList",
        data: JSON.stringify(params),
        cache: false,
        contentType: 'application/json;charset=UTF-8'
    }).done(function (data, textStatus) {
        if (data.result == 1) {
            var rtndata = data.obj;
            var iTotalDisplayRecords = rtndata.iTotalDisplayRecords;
            var iTotalRecords = rtndata.iTotalRecords;
            var rdata = rtndata.aaData;

            var csvContent = "data:text/csv;charset=utf-8,";
            csvContent += "专车券序列号(code), 专车券名称(name), 权益说明(rulesDesc), 所属用户(mobile), 状态(isEnable), 生效金额(useAmount), 使用时间(useDate), 开始时间(startDate),结束时间(endDate), 兑换码(exchange)\n";

            rdata.forEach(function (item, index) {
                csvContent += item.code + ", " + item.name + ", " + item.rulesDesc + ", " + item.mobile + ", " + (item.isEnable) + ", " + item.useAmount + ", " + item.useDate + ", " + item.startDate + ", " + item.endDate + ", " + item.exchange + "\n";
            });
            var encodedUri = encodeURI(csvContent);
            var link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "my_data.csv");
            document.body.appendChild(link);
            link.click();
        } else {
            alert(data.msg);
        }
    }).fail(function () {
        alert("网络异常，请重试！");
    });
}


