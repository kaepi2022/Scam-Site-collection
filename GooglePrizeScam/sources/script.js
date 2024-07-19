var exitpop = true;
window.onbeforeunload = function() {
    if (exitpop) {
        exitpop = false;
        return "あなたはGoogleで10億回目の検索を行いました！\n\n本当にこのページを離れて賞品を放棄しますか？";
    }
}

// var title_name = true;
// window.setInterval(function(){
// 	if (title_name){
// 		document.title = "(1) Google";
// 	}else{
// 		document.title = "Google";
// 	}
// 	title_name = !title_name;
// }, 1000);

var current_path = window.location.pathname;
var claimed_prize = false;
$(".prize").click(function() {
    if (claimed_prize) return;
    claimed_prize = true;
    DeactivateConfetti();
    $(".prize_button").css("background-color", "grey");
    $(this).children(".prize_button").css("background-color", "#00c853");
    $(".prize_button.confirm").css("background-color", "#00c853");
    $(".prize_button.submit_certificate").css("background-color", "#00c853");
    $(".prize_button.finish").css("background-color", "#00c853");
    $(this).children(".real_prize").children(".real_prize_image").attr("src", "/iphone.png");
    if ($(this).hasClass("one")) {
        $(".prize.two").children(".real_prize").children(".real_prize_image").attr("src", "/iphone.png");
        $(".prize.three").children(".real_prize").children(".real_prize_image").attr("src", "/iphone.png");
    } else if ($(this).hasClass("two")) {
        $(".prize.one").children(".real_prize").children(".real_prize_image").attr("src", "iphone.png");
        $(".prize.three").children(".real_prize").children(".real_prize_image").attr("src", "/iphone.png");
    } else if ($(this).hasClass("three")) {
        $(".prize.two").children(".real_prize").children(".real_prize_image").attr("src", "/iphone.png");
        $(".prize.one").children(".real_prize").children(".real_prize_image").attr("src", "/iphone.png");
    }
    $(".prize_image").fadeTo(2000, 0, function() {});

    $(".real_prize").fadeIn(2000, function() {
        window.setInterval(function() {
            document.body.style.overflow = 'hidden';
            $("#black_overlay, #prize_confirmation").show();
        }, 2000);
    });
});

$(".prize_button.confirm").click(function() {
    $("#prize_confirmation").html('\
        <p>あなたはGoogleで10億回目の検索を行いましたので、感謝の意を表します。あなたのApple iPhone 15 Proはパートナーページで予約されています。</p>\
        <p>Googleの従業員が現在、あなたの受賞証明書を準備しています。どの名前を記載すべきですか？</p>\
        <div id="certificate_form">\
            <p class="certificate_label">名前</p>\
            <input type="text" class="certificate_data"><br>\
            <p class="certificate_label">苗字</p>\
            <input type="text" class="certificate_data">\
        </div>\
        <div class="prize_button submit_certificate">続行</div>\
    ');
    $(".prize_button.submit_certificate").click(function() {
        $("#prize_confirmation").html('\
            <p>賞品受け取りフォームの準備が整いました。</p>\
            <p>重要: 賞品は非常に人気があるため、賞品の予約は5分間のみ保持されます。この時間内に賞品受け取りフォームに記入してください。さもなければ賞品はキャンセルされます。残念ながら、これが現在のルールです。</p>\
            <p id="limit_notice">あなたのApple iPhone 15 Proは、あと<span id="minutes">5</span>:<span id="seconds">00</span>分間、あなたの名前で予約されています。</p>\
            <div class="prize_button finish" style="font-size: 13px !important;">賞品受け取りフォームへ</div>\
        ');
        $(".prize_button.finish").click(function() {
            exitpop = false;
            window.location.href = "/index.html";
        });
        start_minute_timer("minutes", "seconds", 4, 59);
    });
});

$(".prize_button.abort").click(function() {
    window.location.href = "index.html";
});

function start_second_timer() {
    var second_timer_seconds = 59;
    var second_timer_micro_seconds = 99;
    var second_timer = setInterval(function() {
        second_timer_micro_seconds -= 1;
        if (second_timer_micro_seconds <= 0) {
            if (second_timer_seconds > 0) {
                second_timer_micro_seconds = 99;
                second_timer_seconds -= 1;
            } else {
                clearInterval(second_timer);
            }
        }
        if (second_timer_micro_seconds < 10) {
            second_timer_micro_seconds = "0" + second_timer_micro_seconds;
        }
        document.getElementById("second_timer_seconds").innerHTML = second_timer_seconds;
        document.getElementById("second_timer_microseconds").innerHTML = second_timer_micro_seconds;
    }, 10);
}

function start_minute_timer(minute_label, seconds_label, m, s) {
    var minute_timer = window.setInterval(function() {
        s -= 1;
        if (s < 0) {
            if (m > 0) {
                s = 59;
                m -= 1;
            } else {
                s = 0;
                window.clearInterval(minute_timer);
            }
        }
        if (s < 10) {
            s = "0" + s;
        }
        document.getElementById(minute_label).innerHTML = m;
        document.getElementById(seconds_label).innerHTML = s;
    }, 1000);
}

var link = document.querySelector("link[rel*='icon']") || document.createElement('link');
link.type = 'image/x-icon';
link.rel = 'shortcut icon';
link.href = current_path + 'img/googleg_lodp.ico';
document.getElementsByTagName('head')[0].appendChild(link);
