var browser = {
    versions: function() {
        var u = navigator.userAgent,
            ua = navigator.userAgent.toLowerCase();
        return { //移动终端浏览器版本信息
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, //火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, //android终端或uc浏览器
            iPhone: u.indexOf('iPhone') > -1, //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1 ,//是否web应该程序，没有头部与底部
            wechat:ua.match(/MicroMessenger/i) == "micromessenger",//微信
            weibo:ua.match(/WeiBo/i) == "weibo",//微博
            qq:ua.match(/QQ/i) == "qq"//qq
        };
    }(),
    language: (navigator.browserLanguage || navigator.language).toLowerCase()
};

function testmobile() {
    if (browser.versions.mobile) {
        var info = document.getElementById('info');
        if (info) { info.style.clear = 'both'; }

        var container = document.getElementById('container');
        if (container) { container.style.width = '100%'; }

        var pho = document.getElementById('photo');
        if (pho) { pho.style.display = 'none'; }

        var name1 = document.getElementById('name1');
        if (name1) { name1.style.display = 'none'; }

        var name2 = document.getElementById('name2');
        if (name2) { name2.style.display = 'inline'; }

        var ols = document.getElementsByTagName('ol');
        for (i = 0; i < ols.length; ++i) {
            var ol = ols[i];
            ol.style.margin_left = 0;
            ol.style.padding = '0 0 0 15px';
            ol.style.list_style_position = 'inside';
        }
        var uls = document.getElementsByTagName('ul');
        for (i = 0; i < uls.length; ++i) {
            var ul = uls[i];
            ul.style.margin_left = 0;
            ul.style.padding = '0 0 0 15px';
            ul.style.list_style_position = 'inside';
        }
    }
    var domain = document.domain;
    var footer = document.getElementById('footer');
    if (domain.indexOf("qingkaishi.github.io") >= 0) {
        var edit = document.getElementById('edit');
        if (edit) { edit.style.display = 'none'; }

        if (footer) {
            footer.innerHTML +=
                "<a href='/#' title='Visit tracker' id='tracker'><img src='//clustrmaps.com/map_v2.png?cl=ffffff&w=a&t=n&d=TfFbkfpRwyjBdzsoAodWHlNZG-oAoqBq4U7gUWWVWkQ&co=2d78ad&ct=ffffff'/></a>"
        }
    } else if(domain.indexOf("localhost") >= 0) {
        if (footer) {
            footer.innerHTML +=
                "<a href='https://clustrmaps.com/site/1a3c7' title='Visit tracker' id='tracker'><img src='images/map_v2.png'/></a>"
        }
    }
}

function share(array1, array2) {
    var sz1 = array1.length
    var sz2 = array2.length
    for (var i = 0; i < sz1; i++) {
        var t1 = array1[i].trim()
        if (t1 === "") continue
        for (var j = 0; j < sz2; j++) {
            var t2 = array2[j].trim()
            if (t1 === t2) {
                return true
            }
        }
    }
    return false
}

function display_papers(type) {
    var show_all = false;
    var display_type_array = type.trim().split(",")
    for (var j = 0; j < display_type_array.length; j++) {
        if (display_type_array[j].trim() === "all") {
            show_all = true
            break
        }
    }

    var all_papers = document.getElementsByTagName('li')
    var i = 0
    var paper = all_papers[i++]
    while(paper) {
        var type_str = paper.getAttribute('type')
        var type_array = type_str.trim().split(",");
        if (show_all || share(type_array, display_type_array)) {
            paper.style.display = 'list-item'
        } else {
            paper.style.display = 'none'
        }
        paper = all_papers[i++]
    }

    var all_years = document.getElementsByTagName('h2')
    var k = 0
    var year = all_years[k++]
    while(year) {
        if (show_all) {
            // show years
            year.style.display = 'block'
        } else {
            // hide years
            year.style.display = 'none'
        }
        year = all_years[k++]
    }
}

function underline_text(el) {
    var all_navigation_links = document.getElementsByClassName('nav')
    var i = 0
    var link = all_navigation_links[i++]
    while(link) {
        link.style.textDecorationLine = 'none'
        link = all_navigation_links[i++]
    }
    el.style.textDecorationLine = 'underline'
}