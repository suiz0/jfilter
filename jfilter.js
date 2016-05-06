(function($){
    $.fn.jfilter = function(options) {
        
        var settings = $.extend({
                target: '.filter-target'
            }, 
            options);
        
        this.off('keyup').on('keyup', function(event) {
            toggleTargets(this.value, $(settings.target + ' .filter-item'));
        });
        
        function toggleTargets(value, elements) {
            
            elements.each(function() { 
               if(value !== "" && !$(this).html().match(new RegExp(value + "+", 'gi'))) {
                $(this).hide();
               } else {
                $(this).show();
               }
            });
        }
        
        return this; //chaining;
    }
})(jQuery);
