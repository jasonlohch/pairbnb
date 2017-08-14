var req = req || parse_str(document.location.search.substr(1)),
    app = (req.a && req.a !== '') ? parseInt(req.a) : 0,
    tit = (req.t && req.t !== '') ? decodeURIComponent(req.t) : '',
    dom = (req.d && req.d !== '') ? decodeURIComponent(req.d) : '',
    variants = [],
    net_data,
    geo = ["RU","UA","KZ","BY","MD","UZ","AM","GE","AZ","KG","LV","LT","EE"],
    scheme = JSON.parse('[{\"code\":\"%3C%21--%20Composite%20Start%20--%3E%0A%3Cdiv%20id%3D%22M293925ScriptRootC629679%22%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22M293925PreloadC629679%22%3E%0A%20%20%20%20%20%20%20%20%D0%97%D0%B0%D0%B3%D1%80%D1%83%D0%B7%D0%BA%D0%B0...%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%3Cscript%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%28function%28%29%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20D%3Dnew%20Date%28%29%2Cd%3Ddocument%2Cb%3D%27body%27%2Cce%3D%27createElement%27%2Cac%3D%27appendChild%27%2Cst%3D%27style%27%2Cds%3D%27display%27%2Cn%3D%27none%27%2Cgi%3D%27getElementById%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20i%3Dd%5Bce%5D%28%27iframe%27%29%3Bi%5Bst%5D%5Bds%5D%3Dn%3Bd%5Bgi%5D%28%22M293925ScriptRootC629679%22%29%5Bac%5D%28i%29%3Btry%7Bvar%20iw%3Di.contentWindow.document%3Biw.open%28%29%3Biw.writeln%28%22%3Cht%22%2B%22ml%3E%3Cbo%22%2B%22dy%3E%3C%2Fbo%22%2B%22dy%3E%3C%2Fht%22%2B%22ml%3E%22%29%3Biw.close%28%29%3Bvar%20c%3Diw%5Bb%5D%3B%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20catch%28e%29%7Bvar%20iw%3Dd%3Bvar%20c%3Dd%5Bgi%5D%28%22M293925ScriptRootC629679%22%29%3B%7Dvar%20dv%3Diw%5Bce%5D%28%27div%27%29%3Bdv.id%3D%22MG_ID%22%3Bdv%5Bst%5D%5Bds%5D%3Dn%3Bdv.innerHTML%3D629679%3Bc%5Bac%5D%28dv%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20s%3Diw%5Bce%5D%28%27script%27%29%3Bs.async%3D%27async%27%3Bs.defer%3D%27defer%27%3Bs.charset%3D%27utf-8%27%3Bs.src%3D%22%2F%2Fjsc.marketgid.com%2Fw%2Fd%2Fwddqokajnq3.ru.629679.js%3Ft%3D%22%2BD.getYear%28%29%2BD.getMonth%28%29%2BD.getDate%28%29%2BD.getHours%28%29%3Bc%5Bac%5D%28s%29%3B%7D%29%28%29%3B%0A%20%20%20%20%3C%2Fscript%3E%0A%3C%2Fdiv%3E%0A%3C%21--%20Composite%20End%20--%3E\",\"ssl\":\"1\",\"countries\":{\"RU\":\"1\",\"UA\":\"1\",\"KZ\":\"1\",\"BY\":\"1\",\"MD\":\"1\",\"UZ\":\"1\",\"AM\":\"1\",\"GE\":\"1\",\"AZ\":\"1\",\"KG\":\"1\",\"LV\":\"1\"},\"cid\":\"2000359\"},{\"code\":\"%3Cdiv%20id%3D%22MIXADV_2874%22%20class%3D%22MIXADVERT_NET%22%3E%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cscript%20type%3D%22text%2Fjavascript%22%20src%3D%22https%3A%2F%2Fm.mixadvert.com%2Fshow%2F%3Fid%3D2874%22%20async%3E%3C%2Fscript%3E\",\"ssl\":\"1\",\"countries\":{\"RU\":\"1\",\"UA\":\"1\",\"KZ\":\"1\",\"BY\":\"1\",\"MD\":\"1\",\"UZ\":\"1\",\"AM\":\"1\",\"GE\":\"1\",\"AZ\":\"1\",\"KG\":\"1\",\"LV\":\"1\"},\"cid\":\"2000380\"},{\"code\":\"%3C%21--%20Composite%20Start%20--%3E%0A%3Cdiv%20id%3D%22M270826ScriptRootC147132%22%3E%0A%20%20%20%20%20%20%20%20%3Cdiv%20id%3D%22M270826PreloadC147132%22%3E%0A%20%20%20%20%20%20%20%20Loading...%0A%20%20%20%20%3C%2Fdiv%3E%0A%20%20%20%20%20%20%20%20%3Cscript%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%28function%28%29%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20D%3Dnew%20Date%28%29%2Cd%3Ddocument%2Cb%3D%27body%27%2Cce%3D%27createElement%27%2Cac%3D%27appendChild%27%2Cst%3D%27style%27%2Cds%3D%27display%27%2Cn%3D%27none%27%2Cgi%3D%27getElementById%27%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20i%3Dd%5Bce%5D%28%27iframe%27%29%3Bi%5Bst%5D%5Bds%5D%3Dn%3Bd%5Bgi%5D%28%22M270826ScriptRootC147132%22%29%5Bac%5D%28i%29%3Btry%7Bvar%20iw%3Di.contentWindow.document%3Biw.open%28%29%3Biw.writeln%28%22%3Cht%22%2B%22ml%3E%3Cbo%22%2B%22dy%3E%3C%2Fbo%22%2B%22dy%3E%3C%2Fht%22%2B%22ml%3E%22%29%3Biw.close%28%29%3Bvar%20c%3Diw%5Bb%5D%3B%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20catch%28e%29%7Bvar%20iw%3Dd%3Bvar%20c%3Dd%5Bgi%5D%28%22M270826ScriptRootC147132%22%29%3B%7Dvar%20dv%3Diw%5Bce%5D%28%27div%27%29%3Bdv.id%3D%22MG_ID%22%3Bdv%5Bst%5D%5Bds%5D%3Dn%3Bdv.innerHTML%3D147132%3Bc%5Bac%5D%28dv%29%3B%0A%20%20%20%20%20%20%20%20%20%20%20%20var%20s%3Diw%5Bce%5D%28%27script%27%29%3Bs.async%3D%27async%27%3Bs.defer%3D%27defer%27%3Bs.charset%3D%27utf-8%27%3Bs.src%3D%22%2F%2Fjsc.adskeeper.co.uk%2Ft%2Fo%2Ftopsee.me.147132.js%3Ft%3D%22%2BD.getYear%28%29%2BD.getMonth%28%29%2BD.getDate%28%29%2BD.getHours%28%29%3Bc%5Bac%5D%28s%29%3B%7D%29%28%29%3B%0A%20%20%20%20%3C%2Fscript%3E%0A%3C%2Fdiv%3E%0A%3C%21--%20Composite%20End%20--%3E\",\"ssl\":\"1\",\"countries\":{\"LV\":\"1\",\"LT\":\"1\",\"EE\":\"1\",\"other\":\"1\"},\"cid\":\"2000390\"}]');
if(tit)document.title = tit;
if(!req.country)req.country = '';
for(net in scheme){
    net_data = scheme[net];
    if ((net_data.code.indexOf('dumedia') > -1 && req['nodm']) || (net_data.code.indexOf('adfban') > -1 && req['noadfban']))
        continue;
    if (document.location.protocol === 'https:' && net_data.ssl !== '1')
        continue;
    if(!net_data.countries)
        continue;
    if(net_data.dbl){
        if(typeof net_data.dbl !== 'object')continue;
        if(Object.values(net_data.dbl).indexOf(dom) > -1)
            continue;
    }
    if(net_data.dbl && dom !== '' && net_data.dbl === dom)
        continue;
    if(net_data.countries === 'all'){
        variants.push(net_data);
        continue;
    }
    if(net_data.countries[req.country]){
        variants.push(net_data);
        continue;
    }
    if (net_data.countries.other && geo.indexOf(req.country) === -1){
        variants.push(net_data);
    }
}
function rand(min, max) {
    var argc = arguments.length;
    if (argc === 0) {
        min = 0;
        max = 2147483647;
    } else if (argc === 1) {
        throw new Error('Warning: rand() expects exactly 2 parameters, 1 given');
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
if (variants.length > 0) {
    var netid = rand(0, variants.length - 1);
    var finNet = variants[netid];
    (function (finNet, doc) {
        var cid = finNet.cid || 0;
        var imageCode = '';
        if (cid !== 0 && app !== 0)imageCode = "<script>(new Image()).src = 'http://4iy269pif3b3dd.ru/stat?a=" + app + "&t=p1&s=" + cid + "&r='+Math.random();</script>";
        var i = doc.createElement('iframe');
        i.setAttribute('src', 'about:blank');
        i.setAttribute('width', '100%');
        i.setAttribute('height', '100%');
        i.setAttribute('scrolling', 'no');
        i.setAttribute('border', '0');
        i.setAttribute('frameborder', '0');
        doc.getElementById('content').appendChild(i);
        setTimeout(function () {
            try {
                var iw = i.contentWindow.document;
                iw.open();
                var stl = (finNet.code.toLowerCase().indexOf('marketgid') > -1) ? 'margin:1px;' : '';
                iw.write('<html><head><title>' + tit + '</title><style type="text/css">.da_adp_links{display:none !important;}</style></head><body class="altAdvHere" style="margin:0;padding:0;display:flex;justify-content:center;align-items:center;"><div id="content" style="' + stl + '">' + decodeURIComponent(finNet.code) + imageCode + '</div></body></html>');
                iw.close();
            } catch (e) {
            }
        }, 500);
    })(finNet, document);
}