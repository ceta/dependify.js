var dependify = {
    DependencySelector: '.dependency',
    SectionToggleAttr: 'dependency-child',
    ToggleOn: 'dependency-show',
    MatchSelector: 'dependency-match',
    init: function () {
        var simple = function (obj) {
            var target = $(obj).data('dependency-child');
            var dependent = $(obj).data('dependency-show');
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
            var target = $(obj).data('dependency-child');
            var dependent = $(obj).data('dependency-show');
            var inpVal = obj.value;
            var inpArr = [];
            var flag = false;

            if (typeof dependent === 'string' && dependent.indexOf("|") >= 0) {
                inpArr = dependent.split("|");

                for (i = 0; i < inpArr.length; i++) {
                    if (inpVal == inpArr[i]) {
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
          
          var target = obj.getAttribute('data-dependency-child');
          var dependent = $(obj).data('dependency-show');
          var inpVal = obj.value;
          var inpArr = target.split("|");
          var depArr = $(obj).data('dependency-show').split("|");
          var flag = false;
                    
          if(inpArr.length === depArr.length){
          
            for(i = 0; i < inpArr.length; i++){
              if(depArr[i] == inpVal){
                target = inpArr[i]; 
                flag = true;
              }
              
              
              
            }
            
           alert(flag);

           if (flag) {
               $(target).show();
            } else {
              for(i=0; i< inpArr.length;i++){
                 $(inpArr[i]).hide();
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