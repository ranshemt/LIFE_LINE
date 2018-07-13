/**
 * Updates the donut chart's percent number and the CSS positioning of the progress bar.
 * Also allows you to set if it is a donut or pie chart
 * @param  {string}  el      The selector for the donut to update. '#thing'
 * @param  {number}  percent Passing in 22.3 will make the chart show 22%
 * @param  {boolean} donut   True shows donut, false shows pie
 * @param  {string} type     
 */
function updateDonutChart (el, percent, donut, type) {
    percent = Math.round(percent);
    if (percent > 100) {
        percent = 100;
    } else if (percent < 0) {
        percent = 0;
    }
    var deg = Math.round(360 * (percent / 100));

    if (percent > 50) {
        $(el + ' .pie').css('clip', 'rect(auto, auto, auto, auto)');
        $(el + ' .right-side').css('transform', 'rotate(180deg)');
    } else {
        $(el + ' .pie').css('clip', 'rect(0, 1em, 1em, 0.5em)');
        $(el + ' .right-side').css('transform', 'rotate(0deg)');
    }
    if (donut) {
        $(el + ' .right-side').css('border-width', '0.1em');
        $(el + ' .left-side').css('border-width', '0.1em');
        $(el + ' .shadow').css('border-width', '0.1em');
    } else {
        $(el + ' .right-side').css('border-width', '0.5em');
        $(el + ' .left-side').css('border-width', '0.5em');
        $(el + ' .shadow').css('border-width', '0.5em');
    }
    $(el + ' .num').text(percent);
    $(el + ' .left-side').css('transform', 'rotate(' + deg + 'deg)');

    if(type=='good'){
        
        $(el + ' .pie-wrapper .half-circle').css('border-color', '#39b54a');

        $(el + ' .shadow').css('border-width', '0.05em');
        $(el + ' .shadow').css('border-color', '#ff1d25');
    }
    else{
        $(el + ' .pie-wrapper .half-circle').css('border-color', '#ff1d25');

        $(el + ' .shadow').css('border-width', '0.05em');
        $(el + ' .shadow').css('border-color', '#39b54a')
    }
}

window.onload = function (){
    updateDonutChart('#pie1', 65, true, 'good');
    updateDonutChart('#pie2', 65, true, 'bad');
    updateDonutChart('#pie3', 15, true, 'good');
    updateDonutChart('#pie4', 15, true, 'bad');
    updateDonutChart('#pie5', 23, true, 'good');
    updateDonutChart('#pie6', 23, true, 'bad');
    updateDonutChart('#pie7', 95, true, 'good');
    updateDonutChart('#pie8', 95, true, 'bad');
    updateDonutChart('#pie9', 10, true, 'bad');

}
// Pass in a number for the percent
