$(document).ready(function() {
    getData();
});


function getData() {

    $.getJSON("js/columbia.json", function(data) {
        //Callback is a function that runs after something else executes. So after the data is loaded.
        loopThroughData(data);
    })

}

function loopThroughData(s) {
    
    for (i=0; i<s.length; i++) {
        var schoolName = s[i]["SCHOOL_NAME"];
        var year = s[i]["YEAR"];
        var gradPct = s[i]["GRADUATES_PCT"];
        
        //If graduation percent is less than (<) 50%... && indicates 'and'
        //if (gradPct < 60 && gradPct > 0) {
            //...do this.
        //    console.log(year, schoolName, gradPct);
        //}
        
        var barWidth = gradPct * 10;
        
        if (schoolName === "FREDERICK DOUGLASS HIGH") {
            $(".chart").append(
                "<p>"+year+": "+gradPct+"%</p>"+
                "<div class='bar' style='width:"+barWidth+"px'></div>");
        }
    }
}
