/*!

switchButton - support a switch button for your page
Version 0.1
© 2015 Zhouyang Xue - https://github.com/xuezhouyang/jquery.switchButton.js

Site: https://github.com/xuezhouyang/jquery.switchButton.js
Blog: https://20xue.com
License: http://opensource.org/licenses/MIT

*/
(function ($) {

    $.fn.switchButton = function (callback1, callback2) {

        return this.each(function () {

            var $this = $(this);

            var  x = "0123456789qwertyuioplkjhgfdsazxcvbnm";
            var  tmp = "";
            var timestamp = new Date().getTime();
            for(var  i = 0; i < 16; i++)  {
                tmp += x.charAt(Math.ceil(Math.random()*100000000)%x.length);
            }

            var randomSwitchButtonSalt = timestamp+tmp;

            var switchButtonArea = '<style>.switch' + randomSwitchButtonSalt + '{width:100px;overflow: hidden;border:1px solid #ddd;border-radius: 4px;height:30px;cursor:pointer;}.switchContent' + randomSwitchButtonSalt + '{width:151px;height: 30px;color:#fff;font-size: 18px;line-height: 30px;text-align: center;}.switchContent' + randomSwitchButtonSalt + ' span{text-shadow: 0 -1px 0 rgba(0, 0, 0, 0.25);float: left; width: 50px;height:30px; }    .switchContent' + randomSwitchButtonSalt + ' .switchOn' + randomSwitchButtonSalt + '{border-right:0px !important;border-top-left-radius: 4px;border-bottom-left-radius: 4px;background-image: linear-gradient(to bottom, #bd362f, #ee5f5b);}.switchContent' + randomSwitchButtonSalt + ' .switchSpace' + randomSwitchButtonSalt + '{border-left:0px;border-right:0px;background-image: linear-gradient(to bottom, #ffffff, #C5C5C5);}.switchContent' + randomSwitchButtonSalt + ' .switchOff' + randomSwitchButtonSalt + '{border-left:0px !important;border-top-right-radius: 4px;border-bottom-right-radius: 4px;background-image: linear-gradient(to bottom, #0044cc, #0088cc);}</style>';

            var switchButtonHtml = '<div class="switch' + randomSwitchButtonSalt + '"><div class="switchContent' + randomSwitchButtonSalt + '"><span class="switchOn' + randomSwitchButtonSalt + '">ON</span><span class="switchSpace' + randomSwitchButtonSalt + '"></span><span class="switchOff' + randomSwitchButtonSalt + '">OFF</span></div><input type="checkbox" checked /></div>';

            $this.append(switchButtonArea + switchButtonHtml);

            var switchState14322810757451y6s7djjbae8qo9k = true;

            $(".switchContent" + randomSwitchButtonSalt).click(function(event) {
                if (switchState14322810757451y6s7djjbae8qo9k) {
                    $(this).stop();
                    $(".switchContent" + randomSwitchButtonSalt).siblings('input[type="checkbox"]').attr('checked', false);
                    $(this).animate({marginLeft: "-50px"}, { duration: 300, queue: false, complete: function() { if(callback1){callback1();} }});
                    switchState14322810757451y6s7djjbae8qo9k = false;
                }else{
                    $(this).stop();
                    $(".switchContent" + randomSwitchButtonSalt).siblings('input[type="checkbox"]').attr('checked', true);
                    $(this).animate({marginLeft: "0px"}, { duration: 300, queue: false, complete: function() { if(callback2){callback2();} }});
                    switchState14322810757451y6s7djjbae8qo9k = true;
                }
            }); 

            if(callback1){callback1();}

        });

    };
})(jQuery);
