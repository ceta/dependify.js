var dependify = {
    DependencySelector: '.dependency',
    SectionToggleAttr: 'dependency-child',
    ToggleOn: 'dependency-show',
    MatchSelector: 'dependency-match',
    init: function () {
        var simple = function (obj) {
            var target = $(obj).data(dependify.SectionToggleAttr);
            var dependent = $(obj).data(dependify.ToggleOn);
            var inpVal = obj.value;


            if (isNaN(inpVal)) {
                inpVal = inpVal.toLowerCase();
            }

            if (isNaN(dependent)) {
                dependent = dependent.toLowerCase();
            }

            if (inpVal == dependent) {
                $(target).show();
            } else {

                $(target).hide();
            }

        };

        var or = function (obj) {
            var target = $(obj).data(dependify.SectionToggleAttr);
            var dependent = $(obj).data(dependify.ToggleOn);
            var inpVal = obj.value;
            var depArr = dependent.split("|");
            var flag = false;


            if (typeof dependent === 'string' && dependent.indexOf("|") >= 0) {


                for (i = 0; i < depArr.length; i++) {

                    if (inpVal == depArr[i]) {
                        flag = true;
                    }
                }

            } else {
                flag = false;
            }



            if (flag) {

                $(target).show();
            } else {
                $(target).hide();
            }

        };

        var array = function (obj) {

            var target = $(obj).data(dependify.SectionToggleAttr);
            var dependent = $(obj).data(dependify.ToggleOn);
            var inpVal = obj.value;
            var tarArr = target.split("|");
            var depArr = dependent.split("|");
            var flag = false;

            if (tarArr.length === depArr.length) {
                for (i = 0; i < tarArr.length; i++) {
                    $(tarArr[i]).hide();
                }


                for (i = 0; i < tarArr.length; i++) {
                    if (depArr[i] == inpVal) {
                        target = tarArr[i];
                        flag = true;
                    }



                }


                if (flag) {
                    $(target).show();
                } else {
                    for (i = 0; i < tarArr.length; i++) {
                        $(tarArr[i]).hide();
                    }
                }

            }




        };

        $(this.DependencySelector).change(function () {
            var match = $(this).data('dependency-match');
            switch (match) {
            case "simple":
                simple(this);
                break;

            case "or":
                or(this);
                break;

            case "array":
                array(this);
                break;

            default:
                simple(this);
                break;

            }
        });

        $(this.DependencySelector).each(function () {
            var match = $(this).data('dependency-match');

            switch (match) {
            case "simple":
                simple(this);
                break;

            case "or":
                or(this);
                break;

            case "array":
                array(this);
                break;

            default:
                simple(this);
                break;

            }


        });




    }
};

dependify.init();