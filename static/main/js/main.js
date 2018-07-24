  $(document).ready(function(){
             /*鼠标事件*/
            $(".navigation-box").
             hover(
                 function () {
                     /*鼠标进入事件*/
                     $(this).css({"background-color":"yellow","border-top-left-radius":"80px 60px","border-bottom-right-radius":"80px 60px"});
                     $(this).attr({ class: "navigation-box out"});
                 },
                 function () {
                     //mouseout
                    /* alert("超链接1");*/
                     $(".out").css({"background-color":"#ebefee0d","border-radius":"0px"});
                 }
             );
            /*点击事件*/
            $(".navigation-box").click(function () {
                $(this).css({"background-color":"yellow","border-top-left-radius":"80px 60px","border-bottom-right-radius":"80px 60px"});
                $(".navigation-click").css({"background-color":"#ebefee0d","border-radius":"0px"});
                $(this).attr({ class: "navigation-box  navigation-click"});
            });
         });