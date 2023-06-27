$(function() {
    //modal注册登录显示隐藏
    $(".login").click(function() {
        $(".modal").fadeIn();
    })
    $(".modalclose").click(function() {
            $(".modal").fadeOut();
        })
        //登录注册选项卡切换
    $(".modaltitle>div").click(function() {
            $(this).find("p").addClass("modal_title_active").parent().siblings().find("p").removeClass("modal_title_active");
            $(".modalcon>div").eq($(this).index()).show().siblings().hide();
        })
        //响应式轮播图
    var $firstLi = $(".swiper>li").eq(0).clone();
    $(".swiper").append($firstLi);
    var windowWidth = $(window).width();

    function resw() {
        windowWidth = $(window).width();
        if (windowWidth < 1200) {
            windowWidth = 1200
        }
        $(".swiper").width(windowWidth * $(".swiper>li").length);
        $(".carsouel,.swiper>li,.swiper>li>a,.swiper>li>a>img").width(windowWidth);
        $(".carsouel,.swiper>li,.swiper>li>a,.swiper>li>a>img").height(600);
    }
    resw();
    $(window).resize(function() {
            resw();
        })
        //声明全局变量n
    var n = 0;

    function play() {
        if (n < 0) {
            $(".swiper").css({
                "left": -windowWidth * ($(".swiper>li").length - 1)
            })
            n = $(".swiper>li").length - 2;
        }
        if (n >= $(".swiper>li").length) {
            $(".swiper").css({
                "left": 0
            })
            n = 1;
        }
        $(".swiper").animate({
            "left": -n * windowWidth
        }, 300)
        if (n == $(".swiper>li").length - 1) {
            $(".dot>li").eq(0).addClass("dotactive").siblings().removeClass("dotactive");
        } else {
            $(".dot>li").eq(n).addClass("dotactive").siblings().removeClass("dotactive");
        }
    }
    var timer;
    auto();

    function auto() {
        timer = setInterval(function() {
            n++;
            play();
        }, 2000)
    }
    //上一个下一个按钮
    $(".next").click(function() {
        n++;
        play();
    })
    $(".prev").click(function() {
            n--;
            play();
        })
        //鼠标悬停轮播图停止移开继续
    $(".carsouel").hover(function() {
        clearInterval(timer);
    }, function() {
        auto();
    })
    $(".dot>li").click(function() {
            n = $(this).index();
            play();
        })
        //上传预览图
    $(".scwjj").click(function() {
        $(".upload").click()
    })
    $(".bdscll").click(function() {
        $(".upload").click()
    })
    $(".upload").change(function(e) {
            var ofile = e.target.files || e.DataTransfer.files;
            if (ofile[0]) {
                var reader = new FileReader();
                reader.readAsDataURL(ofile[0]);
                reader.onload = function() {
                    $(".ylt0,.ylt1,.ylt2,.ylt3").attr("src", this.result);
                }
            }
        })
        //点击性别保密上下滑菜单
    $(".gender>p").click(function() {
            $(".gender>ol").slideToggle().addClass("zindex");
        })
        //点击具体性别赋值保密
    $(".gender>ol>li").click(function() {
            $(".gender>p").text($(this).text());
            $(".gender>ol").slideUp();
            $(".gender>p").css({
                "text-align": "center"
            })
        })
        //创建年
    for (i = 1900; i < 2100; i++) {
        var $li = $("<li></li>");
        $li.text(i);
        $(".year>ol").append($li);
        //赋值年
        $li.click(function() {
            $(".year>p").text($(this).text());
            $(".year>ol").slideUp();
            $(".year>p").css({
                "text-align": "center"
            })
        })
    }
    //点击年月日之一下滑其他上滑
    $(".date>div>p").click(function() {
            $(this).next().slideToggle().addClass("zindex2").parent().siblings().find(".jglist").slideUp();
        })
        //回归年
    $(".year>ol>li").click(function() {
            $(".year>p").text($(this).text());
            $(".year>ol").slideUp();
            $(".year>p").css({
                "text-align": "center"
            });
        })
        //创建月
    for (i = 1; i < 13; i++) {
        var $li = $("<li></li>");
        $li.text(i);
        $(".month>ol").append($li);
        //赋值月
        $li.click(function() {
            $(".month>p").text($(this).text());
            $(".month>ol").slideUp();
            $(".month>p").css({
                "text-align": "center"
            });
            var idx = getStar();
            $(".xingzuo>li").eq(idx).addClass("getstar").siblings().removeClass("getstar");
        })
    }

    //回归月
    $(".month>ol>li").click(function() {
            $(".month>p").text($(this).text());
            $(".month>ol").slideUp();
            $(".month>p").css({
                "text-align": "center"
            })
        })
        //创建日
    $(".day>p").click(function() {
            var y = $(".year>p").text();
            var m = $(".month>p").text();
            //获取某年某月天数
            var d = new Date(y, m, 0);
            var d = d.getDate();
            $(".day>ol").empty();
            $(".day>ol").append("<li>日  ▼</li>");
            //回归日
            $(".day>ol>li").click(function() {
                $(".day>p").text($(this).text());
                $(".day>ol").slideUp();
                $(".day>p").css({
                    "text-align": "center"
                })
            })
            for (i = 1; i < d + 1; i++) {
                var $li = $("<li></li>");
                $li.text(i);
                $(".day>ol").append($li);
                //赋值日
                $li.click(function() {
                    $(".day>p").text($(this).text());
                    $(".day>ol").slideUp();
                    $(".day>p").css({
                        "text-align": "center"
                    });
                    var idx = getStar();
                    $(".xingzuo>li").eq(idx).addClass("getstar").siblings().removeClass("getstar");
                })
            }
        })
        //星座区间函数
    function getStar() {
        var m = $(".month>p").text();
        var d = $(".day>p").text();
        if (d < 10) {
            d = "0" + d;
        }
        var brd = m + "." + d;
        switch (true) {
            case brd >= 3.21 && brd <= 4.19:
                return 0; //白羊座
            case brd >= 4.20 && brd <= 5.20:
                return 1; //金牛座
            case brd >= 5.21 && brd <= 6.21:
                return 2; //双子座
            case brd >= 6.22 && brd <= 7.22:
                return 3; //巨蟹座
            case brd >= 7.23 && brd <= 8.22:
                return 4; //狮子座
            case brd >= 8.23 && brd <= 9.22:
                return 5; //处女座
            case brd >= 9.23 && brd <= 10.23:
                return 6; //天秤座
            case brd >= 10.24 && brd <= 11.22:
                return 7; //天蝎座
            case brd >= 11.23 && brd <= 12.21:
                return 8; //射手座
            case brd >= 12.22 || brd <= 1.19:
                return 9; //摩羯座
            case brd >= 1.20 && brd <= 2.18:
                return 10; //水瓶座
            case brd >= 2.19 && brd <= 3.20:
                return 11; //双鱼座
        }

    }
    //注册窗口打开
    $(".registerbtn").click(function() {
            $(".modaltitle").hide();
            $(".modalcon").hide();
            $(".mcon>img").hide();
            $(".yhzc").show();
        })
        //注册窗口关闭
    $(".modalclose2").click(function() {
            $(".modaltitle").show();
            $(".modalcon").show();
            $(".mcon>img").show();
            $(".yhzc").hide();
        })
        //点击注册时进行操作
    $(".yhzcbtn2").click(function() {
            var username = $("#newusername").val();
            var password = $("#newuserpassword").val();
            var TEL = $("#newuserphone").val();
            if (x == 1) {
                $.ajax({
                    type: "get",
                    url: "http://localhost:8020/demo_20200706/add",
                    async: true,
                    data: {
                        username: username,
                        tel: TEL,
                        password: password
                    },
                    success: function(res) {
                        res = JSON.parse(res);
                        if (res == 0) {
                            alert("注册成功");
                            $(".yhzc").hide();
                            $(".modaltitle").show();
                            $(".modaltitle>div>p").removeClass("modal_title_active");
                            $(".zhdlb>p").addClass("modal_title_active");
                            $(".modalcon").show();
                            $(".modalcon>div").hide();
                            $(".zhdla").show();
                            $(".usernameipt").val(username);
                            $(".passwordipt").val(password);
                        } else {
                            $("#newusername,#newuserpassword,#newuserphone").val("");
                        }
                    },
                    error: function(e) {
                        console.log(e)
                    }
                })

            } else {
                alert("请正确验证")
            }
        })
        //点击登录进行操作
    var tips = "";
    $(".loginbtn").click(function() {
            var username = $(".usernameipt").val();
            var password = $(".passwordipt").val();

            $.ajax({
                url: "http://localhost:8020/demo_20200706/login",
                type: "get",
                async: true,
                data: {
                    username: username,
                    password: password
                },
                success: function(res) {
                    res = JSON.parse(res)
                    if (!res.message) {
                        alert("登录失败");
                        $(".passwordipt").val("").focus();
                        localStorage.clear();
                        return;
                    }
                    alert("登录成功");
                    tips = res.tip;
                    $(".login").remove();
                    $(".modal").hide();
                    $(".header").append("<a class='login' href='9_grxmgl.html'><p>" + res.tip.username + "</p></a>");
                    var $img = $("<img src='" + res.url + res.tip.img + "?t=" + Math.random() + "' >");

                    $(".login>p").before($img);
                    console.log(res.tip);
                    $("#un").val(res.tip.username);
                    $(".login").css({
                        "width": 200
                    });
                    $(".ph1").attr("src", res.url + res.tip.img + "?t=" + Math.random());
                },
                error: function(e) {
                    console.log(e)
                },
            })
        })
        //上传图片
    $(".imgurl").click(function() {
            var formData = new FormData();
            formData.append("photo", document.getElementById("upload").files[0])
            formData.append("idss", tips.idss)
            $.ajax({
                url: "http://localhost:8020/demo_20200706/upload",
                type: "post",
                async: true,
                data: formData,
                contentType: false,
                processData: false,
                success: function(res) {
                    res = JSON.parse(res);
                    $(".login>img").attr("src", res.filepath + res.filename + "?t=" + Math.random());
                    $(".ph1").attr("src", res.filepath + res.filename + "?t=" + Math.random());
                    alert("上传成功");
                },
                error: function(e) {
                    console.log(e)
                }
            })
        })
        //修改个人信息
    $(".grzhglbc").click(function() {
        var idss = tips.idss;
        var username = $("#un").val();
        var email = $("#email").val();
        var tel = $("#tel").val();
        var nicheng = $("#nicheng").val();
        var xingbie = $("#xingbie").text();
        var shengri = $("#nian").text() + "-" + $("#yue").text() + "-" + $("#ri").text();
        var guanji = $("#guanji1").text() + "-" + $("#guanji2").text() + "-" + $("#guanji3").text();
        var gerenmiaoshu = $("#gerenmiaoshu").val();

        if (yxzhm == 1) {
            $.ajax({
                url: "http://localhost:8020/demo_20200706/updete",
                type: "post",
                async: true,
                data: {
                    "userid": tips.idss,
                    "username": username,
                    "email": email,
                    "tel": tel,
                    "nicheng": nicheng,
                    "xingbie": xingbie,
                    "shengri": shengri,
                    "guanji": guanji,
                    "gerenmiaoshu": gerenmiaoshu
                },
                success: function(data) {
                    var x = JSON.parse(data);
                    alert("修改成功")
                },
                error: function(e) {
                    console.log(e)
                },
            })
        } else {
            alert("请先正确验证邮箱")
        }
    })

    //点击省市区之一下滑其余上滑
    $("#guanji>div>p").click(function() {
            $(this).next().stop().slideToggle().addClass("zindex2").parent().siblings().find("ol").slideUp();
        })
        //创建省
    creatrPro();

    function creatrPro() {
        var prvData = darea[100000];
        $(".Provinces>ol").empty();
        for (let k in prvData) {
            var $li = $("<li></li>");
            $li.text(prvData[k]).attr("data-id", k);
            $(".Provinces>ol").append($li);
            $li.click(function() {
                $(".Provinces>p").css({ "text-align": "center" }).text($(this).text()).next().slideUp();
                $(".City>p").text("城市  ▼");
                createCity($(this).attr("data-id"));
                $(".Street>p").text("街道  ▼");
            })
        }
    }
    //创建市
    function createCity(prov) {
        $(".City>ol").empty();
        var citys = darea[prov];
        for (var k in citys) {
            var $li = $("<li></li>");
            $li.text(citys[k]).attr("data-id", k);
            $(".City>ol").append($li);
            $li.click(function() {
                creatStreet($(this).attr("data-id"));
                $(".City>p").text($(this).text()).css({ "text-align": "center" }).next().slideUp();
                $(".Street>p").text("街道  ▼");
            })
        }
    }
    //创建 街道
    function creatStreet(city) {
        $(".Street>ol").empty();
        var streets = darea[city];
        for (let k in streets) {
            var $li = $("<li></li>");
            $li.text(streets[k]);
            $(".Street>ol").append($li);
            $li.click(function() {
                $(".Street>p").text($(this).text()).css({ "text-align": "center" }).next().slideUp();
            })
        }
    }
    //发送短信
    $(".fsyzm").click(function() {
            var tel = $("#newuserphone").val()
            $.ajax({
                url: "http://localhost:8020/demo_20200706/sendCode",
                type: "post",
                async: true,
                xhrFields: {
                    withCredentials: true
                },
                data: {
                    phoneNumbers: tel
                },
                success(res) {},
                error(e) {
                    console.log(e);
                    alert("发送失败");
                }
            })
        })
        //验证短信
    var x;
    $(".yzyzm").click(function() {
        var yzm = $("#yzmyzm").val();
        $.ajax({
            url: "http://localhost:8020/demo_20200706/verification",
            type: "post",
            xhrFields: {
                withCredentials: true
            },
            async: true,
            data: {
                usercode: yzm
            },
            success(res) {
                res = JSON.parse(res);
                if (res.message == "success") {
                    alert("验证成功");
                    return x = 1;
                } else {
                    alert("验证失败，请重新验证")
                }
            },
            error(e) {
                console.log(e);
            }
        })
    })
})