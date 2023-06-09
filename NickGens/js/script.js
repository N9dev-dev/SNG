const nickName = document.getElementById("nickname"),
    coloredNick = document.getElementById("coloredNick"),
    savedColors = ["0D6EFD", "FFFFFF", getRandomHexColor(), getRandomHexColor(), getRandomHexColor(), getRandomHexColor(), getRandomHexColor(), getRandomHexColor(), getRandomHexColor(), getRandomHexColor()],
    presets = {
        // Rainbow
        1: {
            colors: ["FF0000", "FF7F00", "FFFF00", "00FF00", "0000FF", "4B0082", "9400D3"]
        },
        // me
        2: {
            colors: ["3494E6", "4B8FDF", "628BD8", "7986D1", "9081CA", "A77CC2", "BE78BB", "D573B4", "EC6EAD"]
        },
        // ben
        3: {
            colors: ["621493", "54117e", "460e69", "380b54", "2a093f", "1c062a", "0e0315", "000000"]
        },
        // mel
        4: {
            colors: ["5098ff", "3e95fe", "2d93fc", "1b90fb", "2889ec", "3481dc", "417acd"]
        },
        // baron
        5: {
            colors: ["2005DC", "DEDBDA"]
        },
        // Shira
        6: {
            colors: ["fb48f7", "eb44ed", "da3fe2", "ca3bd8", "ba36ce", "a932c3", "992db9", "8829ae", "7824a4"]
        },
        // Davi
        7: {
            colors: ["00c0cc", "cc00c4", "cc00c4"]
        },
        // Crock
        8: {
            colors: ["ff2aea", "ff3fb0", "ff5575", "ff6a3b", "ff7f00"]
        },
        // Cookie
        9: {
            colors: ["25ffe5", "1fccea", "1899ef", "1266f5", "0b33fa", "0500ff"]
        },
        // mochi
        10: {
            colors: ["90d35b", "a6de75", "bce890", "d1f3aa", "e7fdc4"]
        },
        //scrooge
        11: {
            colors: ["fb0000", "fc1d05", "fc390a", "fd5610", "fe7313", "fe8f1a", "ffac1f"]
        },
        // Juanito
        12: {
            colors: ["34DB09", "FFFFFF", "99884B", "FFFFFF", "F90000"]
        },
        // Danie
        13: {
            colors: ["64F8C7", "F9F995"]
        },
        // Koen
        14: {
            colors: ["E00000", "B4A202"]
        },
        // Fancy
        15: {
            colors: ["F5489B", "F38DF5"]
        },
        // MacDaKing
        16: {
            colors: ["DA0101", "075EE0", "5642A0"]
        },
        // AlexTheFarmer
        17: {
            colors: ["E49801", "E49801"]
        },
        // Vince
        18: {   
            colors: ["2E0360","100B61", "005619"]
        },
        // hevnoorak
        19: {
            colors: ["3EA9DE", "A7D241", "D74E19"]
        },
        // Esno
        20: {
            colors: ["DD0F0D", "F6CB19"]
        },
        // iBurkie
        21: {
            colors: ["019800", "53F9F9"]
        },
        // Colderr
        22: {
            colors: ["9260DB", "5C9DEB"]
        },
        // Frogzie
        23: {
            colors: ["202E1D", "63AF36"]
        },
        // Teddybil
        24: {
            colors: ["1D1D1D", "323232","E40859", "E40859"]
        },
        // Rabbeto
        25: {
            colors: ["8F421C", "569E96"]
        },
        // Elusivefox
        26: {
            colors: ["2AB889", "E58B2D"]
        },
        // Frosty
        27: {
            colors: ["0BB5E1", "1655DF"]
        },
        // MabuTsuki
        28: {
            colors: ["9689CD", "BD827C"]
        },
        // Rawdog
        29: {
            colors: ["FFFFFF", "900FFF"]
        },
        // Fake Dev
        30: {
            colors: ["C92ED7", "450E7E"]
        },
        // Rapha
        w2: {
            colors: ["B37F4A", "822035"]
        },
        // BigGavvy
        w3: {
            colors: ["4DE44D", "DFDFDE", "E19601"]
        },
        // Lora
        w4: {
            colors: ["0F7CBB", "01C795"]
        },
        // Loki
        w5: {
            colors: ["244717", "57E019"]
        },
        // Wolfie10
        w6: {
            colors: ["070402", "101DC2", "EB11EA", "9A10F9"]
        },
        // Zach
        w7: {
            colors: ["010000", "890000"]
        },
        // Aarthos
        w8: {
            colors: ["293945", "87BAE0"]
        },
        // Aazronn
        w9: {
            colors: ["0C032D", "0C032D"]
        },
        // Ruubsen
        w10: {
            colors: ["4201CD", "160045"]
        },
        // Jessie
        w11: {
            colors: ["0BCDC4", "C5DA0D"]
        },
        // Omega
        w12: {
            colors: ["DE0704", "58F700"]
        },
        // Themis
        l2: {
            colors: ["65adcd", "75b6d2", "86bfd7", "96c8dc", "a7d1e1", "b8dae6"]
        },
        // Duckyy
        l3: {
            colors: ["F5BF48", "F7E824"]
        },
        // Reaperr
        l4: {
            colors: ["E20909", "F7F5F5", "E10808"]
        },
        // Vobie
        l5: {
            colors: ["E4C28C", "97F8F9"]
        },
        // FxpWilhelm
        l6: {
            colors: ["E40101", "E4E400"]
        },
        // ORSETTOOOO
        l7: {
            colors: ["E02020", "1E29E1", "DB0101"]
        },
        // denstagmer
        l8: {
            colors: ["B06A19", "6F61C9"]
        },
        // Twister
        l9: {
            colors: ["0F2ED6", "5899E5"]
        },
        // Bandito
        l10: {
            colors: ["4A0708", "180101"]
        },
        // BlackWall
        l11: {
            colors: ["221F1F", "5E5656"]
        },
        // Cookie
        l12: {
            colors: ["E83232", "0DF9DD"]
        },
        // Waffle
        l13: {
            colors: ["0F2ED6", "5899E5"]
        },
        // HEISENBERG
        l14: {
            colors: ["9C0909", "9C0909"]
        },
        // Sonny
        l15: {
            colors: ["304DE2", "F77ABD"]
        },
        // Kuduz
        l16: {
            colors: ["1FAC21", "2E5BE3", "652591"]
        },
        // Quality
        l17: {
            colors: ["ECDDD0", "E2DEDA", "D9DEE4", "CFDFEE", "DADEE3", "E5DED8", "F0DDCD"]
        },
        // Bunny
        s2: {
            colors: ["d6d8fb", "d9d4fb", "dbd0fc", "decdfc", "e1c9fc", "e3c5fd", "e6c1fd"]
        },
        // LissiGirl
        s3: {
            colors: ["8b00cc", "9c34f6", "ae69ee", "bf9de5", "A2A9B3", "A2A9B3", "a2c7e0", "73bce4", "45b1e8"]
        },
        // Blream
        s4: {
            colors: ["E41FD0", "E4C28D"]
        },
        // Lissi Girl
        s5: {
            colors: ["C365BF", "8771D0", "87B5EB", "6AC66A", "D3C46E", "C95E5A"]
        },
        // Sunny
        s6: {
            colors: ["CE099D", "CEBA01"]
        },
        // Jadz
        s7: {
            colors: ["CC285C", "DF6EC7"]
        },
        // ben
        o2: {
            colors: ["621493", "54117e", "460e69", "380b54", "2a093f", "1c062a", "0e0315", "000000"]
        },
        // ben
        o3: {
            colors: ["621493", "54117e", "460e69", "380b54", "2a093f", "1c062a", "0e0315", "000000"]
        },
        // mel
        o4: {
            colors: ["5098ff", "3e95fe", "2d93fc", "1b90fb", "2889ec", "3481dc", "417acd"]
        },
        // baron
        o5: {
            colors: ["2005DC", "DEDBDA"]
        },
        // Shira
        o6: {
            colors: ["fb48f7", "eb44ed", "da3fe2", "ca3bd8", "ba36ce", "a932c3", "992db9", "8829ae", "7824a4"]
        },
        // Davi
        o7: {
            colors: ["00BDC9", "863EC3", "cc00c4"]
        },
        // Crock
        o8: {
            colors: ["ff2aea", "ff3fb0", "ff5575", "ff6a3b", "ff7f00"]
        },
        // Cookie
        o9: {
            colors: ["25ffe5", "1fccea", "1899ef", "1266f5", "0b33fa", "0500ff"]
        },
        // mochi
        o10: {
            colors: ["90d35b", "a6de75", "bce890", "d1f3aa", "e7fdc4"]
        },
        //scrooge
        o11: {
            colors: ["fb0000", "fc1d05", "fc390a", "fd5610", "fe7313", "fe8f1a", "ffac1f"]
        },
        // Juanito
        o12: {
            colors: ["34DB09", "FFFFFF", "99884B", "FFFFFF", "F90000"]
        },
        // Danie
        o13: {
            colors: ["64F8C7", "F9F995"]
        },
        // Koen
        o14: {
            colors: ["E00000", "B4A202"]
        },
        // Fancy
        o15: {
            colors: ["F5489B", "F38DF5"]
        },
        // MacDaKing
        o16: {
            colors: ["DA0101", "075EE0", "5642A0"]
        },
        // AlexTheFarmer
        o17: {
            colors: ["E49801", "E49801"]
        },
        // Vince
        o18: {   
            colors: ["2E0360","100B61", "005619"]
        },
        // hevnoorak
        o19: {
            colors: ["3EA9DE", "A7D241", "D74E19"]
        },
        // Esno
        o20: {
            colors: ["DD0F0D", "F6CB19"]
        },
        // iBurkie
        o21: {
            colors: ["019800", "53F9F9"]
        },
    },
    formats = {
        0: {
            outputPrefix: "/nick ",
            template: "{#$1$2$3$4$5$6}$f$c",
            formatChar: "&",
            maxLength: 256
        },
        1: {
            outputPrefix: "",
            template: "&#$1$2$3$4$5$6 $f$c",
            formatChar: "&",
            maxLength: 256
        },
        2: {
            outputPrefix: "",
            template: "{#$1$2$3$4$5$6}$f$c",
            formatChar: "&",
            maxLength: 256
        },

    };

function darkMode() {
    1 == document.getElementById("darkmode").checked ? (document.body.classList.add("dark"), document.getElementById("output-format").classList.add("dark"), document.getElementById("color-preset").classList.add("dark"), document.getElementById("numOfColors").classList.add("dark"), document.getElementById("graylabel1").classList.replace("gray", "darkgray"), document.getElementById("graylabel2").classList.replace("gray", "darkgray"), document.getElementById("outputText").classList.replace("gray", "darkgray"), document.getElementById("outputText").classList.replace("gray", "darkgray"), document.getElementById("error").classList.replace("errortext", "darkerrortext"), document.getElementById("numOfColors").classList.add("darktextboxes"), document.getElementById("nickname").classList.add("darktextboxes"), document.getElementById("outputText").classList.add("darktextboxes"), Array.from(document.getElementsByClassName("hexColor")).forEach((e => {
        document.getElementById(e.id).classList.add("darktextboxes")
    }))) : (document.body.classList.remove("dark"), document.getElementById("output-format").classList.remove("dark"), document.getElementById("color-preset").classList.remove("dark"), document.getElementById("numOfColors").classList.remove("dark"), document.getElementById("graylabel1").classList.replace("darkgray", "gray"), document.getElementById("graylabel2").classList.replace("darkgray", "gray"), document.getElementById("outputText").classList.replace("darkgray", "gray"), document.getElementById("error").classList.replace("darkerrortext", "errortext"), document.getElementById("numOfColors").classList.remove("darktextboxes"), document.getElementById("nickname").classList.remove("darktextboxes"), document.getElementById("outputText").classList.remove("darktextboxes"), Array.from(document.getElementsByClassName("hexColor")).forEach((e => {
        document.getElementById(e.id).classList.remove("darktextboxes")
    })))
}

function CopyToClipboard(id)
{
    var r = document.createRange();
    r.selectNode(document.getElementById(id));
    window.getSelection().removeAllRanges();
    window.getSelection().addRange(r);
    document.execCommand('copy');
    window.getSelection().removeAllRanges();
}

function getRandomHexColor() {
    return Math.floor(16777215 * Math.random()).toString(16).toUpperCase()
}

function showError(e) {
    e ? (document.getElementById("error").style.display = "block", document.getElementById("outputText").style.height = "70px", document.getElementById("outputText").style.marginBottom = "5px") : (document.getElementById("error").style.display = "none", document.getElementById("outputText").style.height = "95px", document.getElementById("outputText").style.marginBottom = "10px")
}

function hex(e) {
    let t = "0123456789abcdef",
        o = parseInt(e);
    return 0 == o || isNaN(e) ? "00" : (o = Math.round(Math.min(Math.max(0, o), 255)), t.charAt((o - o % 16) / 16) + t.charAt(o % 16))
}

function convertToHex(e) {
    return hex(e[0]) + hex(e[1]) + hex(e[2])
}

function trim(e) {
    return "#" == e.charAt(0) ? e.substring(1, 7) : e
}

function convertToRGB(e) {
    let t = [];
    return t[0] = parseInt(trim(e).substring(0, 2), 16), t[1] = parseInt(trim(e).substring(2, 4), 16), t[2] = parseInt(trim(e).substring(4, 6), 16), t
}
class Gradient {
    constructor(e, t) {
        this.colors = e, this.gradients = [], this.steps = t - 1, this.step = 0;
        const o = this.steps / (e.length - 1);
        for (let t = 0; t < e.length - 1; t++) this.gradients.push(new TwoStopGradient(e[t], e[t + 1], o * t, o * (t + 1)))
    }
    next() {
        if (this.steps <= 1) return this.colors[0];
        const e = Math.round(Math.abs(2 * Math.asin(Math.sin(this.step * (Math.PI / (2 * this.steps)))) / Math.PI * this.steps));
        let t;
        if (this.gradients.length < 2) t = this.gradients[0].colorAt(e);
        else {
            const o = this.steps / this.gradients.length,
                r = Math.min(Math.floor(e / o), this.gradients.length - 1);
            t = this.gradients[r].colorAt(e)
        }
        return this.step++, t
    }
}
class TwoStopGradient {
    constructor(e, t, o, r) {
        this.startColor = e, this.endColor = t, this.lowerRange = o, this.upperRange = r
    }
    colorAt(e) {
        return [this.calculateHexPiece(e, this.startColor[0], this.endColor[0]), this.calculateHexPiece(e, this.startColor[1], this.endColor[1]), this.calculateHexPiece(e, this.startColor[2], this.endColor[2])]
    }
    calculateHexPiece(e, t, o) {
        const r = (o - t) / (this.upperRange - this.lowerRange);
        return Math.round(r * (e - this.lowerRange) + t)
    }
}

function toggleColors(e) {
    let t = Math.min(10, Math.max(2, e));
    1 == e || "" == e ? e = getColors().length : e != t && ($("#numOfColors").val(t), e = t);
    const o = $("#hexColors"),
        r = o.find(".hexColor"),
        a = r.size();
    if (a > e) r.each(((t, o) => {
        t + 1 > e && (savedColors[t] = $(o).val(), $(o).parent().remove())
    }));
    else if (a < e) {
        let t = $("#hexColorTemplate").html();
        for (let r = a + 1; r <= e; r++) {
            let e = t.replace(/\$NUM/g, r).replace(/\$VAL/g, savedColors[r - 1]);
            o.append(e)
        }
        jscolor.install()
    }
}

function getColors() {
    const e = $("#hexColors").find(".hexColor"),
        t = [];
    return e.each(((e, o) => {
        const r = $(o).val();
        savedColors[e] = r, t[e] = convertToRGB(r)
    })), t
}

function updateOutputText(e) {
    let t = formats[document.getElementById("output-format").value];
    if (t.outputPrefix && (nickName.value = nickName.value.replace(/ /g, ""), nickName.value)) {
        let t = /^[0-9a-zA-Z_]+$/;
        nickName.value.match(t) || (nickName.value = nickName.value.replace(e.data, "")), nickName.value.match(t) || (nickName.value = "birdflop.com")
    }
    let o = nickName.value;
    o || (o = "Type something!");
    const r = document.getElementById("bold").checked,
        a = document.getElementById("italics").checked,
        l = document.getElementById("underline").checked,
        n = document.getElementById("strike").checked;
    let s = document.getElementById("outputText"),
        c = new Gradient(getColors(), o.replace(/ /g, "").length),
        d = [],
        m = t.outputPrefix;
    for (let e = 0; e < o.length; e++) {
        let s = o.charAt(e);
        if (" " == s) {
            m += s, d.push(null);
            continue
        }
        let i = convertToHex(c.next());
        d.push(i);
        let u = t.template;
        for (let e = 1; e <= 6; e++) u = u.replace(`$${e}`, i.charAt(e - 1));
        let h = "";
        null != t.formatChar && (r && (h += t.formatChar + "l"), a && (h += t.formatChar + "o"), l && (h += t.formatChar + "n"), n && (h += t.formatChar + "m")), u = u.replace("$f", h), u = u.replace("$c", s), m += u
    }
    s.innerText = m, showError(null != t.maxLength && t.maxLength < m.length), displayColoredName(o, d)
}

function pad(e, t, o) {
    return o = o || "0", (e += "").length >= t ? e : new Array(t - e.length + 1).join(o) + e
}

function displayColoredName(e, t) {
    coloredNick.classList.remove("minecraftbold", "minecraftibold", "minecraftitalic"), document.getElementById("bold").checked ? document.getElementById("italics").checked ? coloredNick.classList.add("minecraftibold") : coloredNick.classList.add("minecraftbold") : document.getElementById("italics").checked && coloredNick.classList.add("minecraftitalic"), coloredNick.innerHTML = "";
    for (let o = 0; o < e.length; o++) {
        const r = document.createElement("span");
        document.getElementById("underline").checked ? document.getElementById("strike").checked ? r.classList.add("minecraftustrike") : r.classList.add("minecraftunderline") : document.getElementById("strike").checked && r.classList.add("minecraftstrike"), r.style.color = t[o], r.textContent = e[o], coloredNick.append(r)
    }
}

function preset(e) {
    const t = presets[e].colors,
        o = $("#hexColors");
    o.empty();
    let r = $("#hexColorTemplate").html();
    for (let e = 1; e <= t.length; e++) {
        let a = r.replace(/\$NUM/g, e).replace(/\$VAL/g, t[e - 1]);
        o.append(a)
    }
    jscolor.install()
}

function Alert(){
    Alert("Nope.");
}

toggleColors(2);
updateOutputText();
document.getElementById('darkmode').checked = true
darkMode()

