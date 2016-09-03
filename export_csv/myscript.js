var s = document.createElement('script');
s.src = chrome.extension.getURL('index_query.js');
s.onload = function() {
    this.remove();
};
(document.head || document.documentElement).appendChild(s);

//<form id='exp_f'><input type='text' id='page' name='page'><input type='text' id='pagesize' name='pagesize'><input type='button' onclick='doExport(exp_f.page, exp_f.paesize)'></form>
var html = "<form class=\"form-inline\"><div class=\"form-group\"><input type=\"text\" class=\"form-control\" id=\"q_page\" placeholder=\"第几页\"></div><div class=\"form-group\"><input type=\"text\" class=\"form-control\" id=\"q_pagesize\" placeholder=\"每页显示条数\"></div><input type='button' value='Export' class='btn btn-primary btn-sm' onclick='doExport($(\"#q_page\").val(), $(\"#q_pagesize\").val())'></form>";
var div = document.createElement('div');
div.style.position = 'fixed';
div.style.top = 0;
div.style.left = 0;
div.style.class="row";
div.innerHTML = html;
document.body.appendChild(div);


 