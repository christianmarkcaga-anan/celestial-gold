;
(function ($, w, d, h, b) {

    var app = {
        countdown: function () {
            $('.countdown-timer').each(function () {
                var $this = $(this);
                var totalSeconds = 27 * 60 + 30; // You can customize this per element using data-* if needed

                var interval = setInterval(function () {
                    var minutes = Math.floor(totalSeconds / 60);
                    var seconds = totalSeconds % 60;
                    var formatted = minutes + ':' + (seconds < 10 ? '0' + seconds : seconds);

                    if (totalSeconds <= 0) {
                        clearInterval(interval);
                        $this.text("00:00");
                    } else {
                        $this.text(formatted);
                        totalSeconds--;
                    }
                }, 1000);
            });
        },

        date: function () {
            var today = new Date();
            var day = today.getDate();
            var month = today.toLocaleString('default', { month: 'long' });
            var year = today.getFullYear();

            var suffix = "th";
            if (day % 10 === 1 && day !== 11) suffix = "st";
            else if (day % 10 === 2 && day !== 12) suffix = "nd";
            else if (day % 10 === 3 && day !== 13) suffix = "rd";

            var formattedDate = day + suffix + " of " + month + ", " + year;
            $('#current-date').text(formattedDate);
        },

        checkboxValidation: function () {
            var $clickBox = $('.click-box');
            var $checkImg = $clickBox.find('img');
            var $button = $('.yellow-btn');

            $clickBox.on('click', function () {
                $checkImg.toggleClass('check-hidden check-show');
            });

            $button.on('click', function (e) {
                if ($checkImg.hasClass('check-hidden')) {
                    e.preventDefault();
                    alert('Please check the box to proceed.');
                }
            });
        },

        init: function () {
            this.countdown();
            this.date();
            this.checkboxValidation();
        }
    };

    $(d).ready(function () {
        app.init();
    });

})(jQuery, window, document, 'html', 'body');