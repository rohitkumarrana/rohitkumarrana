<script>
$(document).ready(function(){
    // Isotope initialization
    var $grid = $('.portfolio-container').isotope({
        itemSelector: '.col-md-6',
        layoutMode: 'fitRows'
    });

    // Filter items on click
    $('.portfolio .filters a').click(function(e){
        e.preventDefault();
        $('.portfolio .filters .active').removeClass('active');
        $(this).addClass('active');

        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });
});
</script>
