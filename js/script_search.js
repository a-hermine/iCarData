$(document).ready(function(){
var arr = [];
/*compair cars by Model*/

if (typeof localStorage.getItem('compairCars') !== 'undefined' && localStorage.getItem('compairCars') != null) {

    var selectedCar = JSON.parse(localStorage.getItem('compairCars'));
        $('#chooseModel2 option[value="'+selectedCar.make+'"]').prop('selected', true);
        $('#chooseVariant2 option[value="'+selectedCar.model+'"]').prop('selected', true);
        $('#chooseYear2 option[value="'+selectedCar.year+'"]').prop('selected', true);

    localStorage.removeItem('compairCars');
}

/*custom choice by Model*/

if (typeof localStorage.getItem('compairCustomChoice') !== 'undefined' && localStorage.getItem('compairCustomChoice') != null) {

    var selectedCustom = JSON.parse(localStorage.getItem('compairCustomChoice'));
        $('#chooseModelByModel1 option').text(selectedCustom.customMake);
        $('#chooseVariantModel1 option').text(selectedCustom.customModel);
        $('#chooseYearModel1 option').text(selectedCustom.customYear);
}



/*compair cars by Variant*/

if (typeof localStorage.getItem('compairCarsVariant') !== 'undefined' && localStorage.getItem('compairCarsVariant') != null) {

    var selectedCarVariant = JSON.parse(localStorage.getItem('compairCarsVariant'));
        $('#chooseModelByVariant3 option[value="'+selectedCarVariant.makeV+'"]').prop('selected', true);
        $('#chooseVariantByVariant3 option[value="'+selectedCarVariant.variantV+'"]').prop('selected', true);
        $('#chooseYearByYear3 option[value="'+selectedCarVariant.yearV+'"]').prop('selected', true);

    localStorage.removeItem('compairCarsVariant');
}

/*custom choice by Variant*/

if (typeof localStorage.getItem('compairCustomChoiceVariant') !== 'undefined' && localStorage.getItem('compairCustomChoiceVariant') != null) {

    var selectedCustomVariant = JSON.parse(localStorage.getItem('compairCustomChoiceVariant'));
        $('#chooseModelByVariant2 option').text(selectedCustomVariant.customMakeV);
        $('#chooseVariantByVariant2 option').text(selectedCustomVariant.customVariantV);
        $('#chooseYearByVariant2 option').text(selectedCustomVariant.customYearV);
}

/*make part by Model*/

var cars = {
    'Audi': {
        'model1': ['v1','v2','v3','v4','v5','v6'],
        'model2': ['v7','v77','v77','v7','v7','v23'],
        'model3': ['v8','v18','v18','v89','v89','v8'],
    },
    'Honda': {
        'model4': ['v9','v32','v32','v91','v191','v19'],
        'model5': ['v201','v10','v201','v10','v10','v201'],
        'model6': ['v63','v63','v11','v11','v63','v11'],
    },
    'Mitsubishi': {
        'model7': ['v52','v12','v52','v12','v52','v12'],
        'model8': ['v13','v13','v13','v13','v13','v13'],
        'model9': ['v14','v85','v14','v85','v14','v14'],
    },
    'Peugeot': {
        'model10': ['v63','v15','v63','v15','v15','v163'],
        'model11': ['v19','v96','v19','v16','v96','v16'],
        'model12': ['v20','v20','v17','v20','v175','v17'],
    },
}
var years = ["2017","2016","2015","2014","2013","2012"];
var territory = ["USA","Asia","Canada","Malasia"];
//console.log(territory);

function createMakes() {
    $(".make ul").empty();
    $("#makeAuto").empty();
    $(".car .spanMake").empty();
    $(".car .spanModel").empty();
    $(".car .spanVariant").empty();
    $(".year span").empty();
    $(".territory span").empty();
    for (var key in cars) {
        $(".make ul").append('<li data-name="' + key + '" class="carsList">' + key + '</li>');
        $("#makeAuto").append("<option value='" + key + "' selected'>"+key+"</option>");
        $(".make ul").attr('data-page', 'make');
    }

}

function createModels(make, selected) {
    $("#modelAuto").empty();
    $(".car .spanModel").empty();
    for (var key in cars[make]) {
        var selectedOpt = (key == selected) ? " selected='selected'" : "";
        $(".make ul").append('<li data-name="' + key + '" data-make="' + make + '" class="carsList">' + key + '</li>');
        $("#modelAuto").append("<option value='" + key +"' " + selectedOpt + ">"+key+"</option>");
        $(".make ul").attr('data-page', 'model');
    }
}

function createVariants(make, model, selected) {
    $("#variantAuto").empty();
    $(".car .spanVariant").empty();
    $("#modelAuto option").prop("selected", false);
    for (var i = 0; i < cars[make][model].length; ++i) {
        $(".make ul").append('<li data-name="' + cars[make][model][i] + '" class="carsList">' + cars[make][model][i] + '</li>');
        $("#variantAuto").append("<option value='" + cars[make][model][i] + "'>"+cars[make][model][i]+"</option>");
        $("#modelAuto option[value='"+selected+"']").prop("selected", true);
        // $("#modelAuto").trigger("change");
        $(".make ul").attr('data-page', 'variant');
    }
}

function createYears(selected){
    $("#yearAuto").empty();
    $(".year span").empty();
    $("#variantAuto option").prop("selected", false);
    for (var i = 0; i < years.length; ++i) {
        $(".make ul").append('<li  class="carsList">' + years[i] + '</li>');
        $("#yearAuto").append("<option value='" + years[i] + "'>"+years[i]+"</option>");
        $("#variantAuto option[value='"+selected+"']").prop("selected", true);
        // $("#variantAuto").trigger("change");
        $(".make ul").attr('data-page', 'year');

    }
}
function createTerritory(selected){
    $("#territoryAuto").empty();
    $(".territory span").empty();
    $("#yearAuto option").prop("selected", false);
    for (var i = 0; i < territory.length; ++i) {
        $(".make ul").append('<li  class="carsList">' + territory[i] + '</li>');
        $("#territoryAuto").append("<option value='" + territory[i] + "'>"+territory[i]+"</option>");
        $("#yearAuto option[value='"+selected+"']").prop("selected", true);
        // $("#yearAuto").trigger("change");
        $(".make ul").attr('data-page', 'territory');
    }
    
}

function bindClick() {
    $(".make ul li").click(function() {
        var tabName = $(".make ul").attr('data-page');
        var name = $(this).data('name');
        $(".make ul").empty();
        switch (tabName) {
            case 'make':
                createModels(name);
                $(".modelLi").removeClass("disabled");
                $(".makeLi").removeClass("activCarChoose");
                $(".modelLi").addClass("activCarChoose");
                $("#makeAuto option:selected").text($(this).html());
                $(".car .spanMake").text($(this).html());
                $('.car').css('visibility','visible');
                $('.car').addClass('visible');
                $(".selectedItems button").css('visibility','visible');

                break;
            case 'model':
                var make = $(this).data('make');
                $(".variantLi").removeClass("disabled");
                $(".modelLi").removeClass("activCarChoose");
                $(".variantLi").addClass("activCarChoose");
                createVariants(make, name, $(this).text());
                $(".car .spanModel").text($(this).text())
                break;
            case 'variant':
                $(".yearLi").removeClass("disabled");
                $(".variantLi").removeClass("activCarChoose");
                $(".yearLi").addClass("activCarChoose");
                createYears($(this).text());
                 $(".car .spanVariant").text($(this).text())
                break; 
            case 'year':
                $(".territoryLi").removeClass("disabled");
                $(".yearLi").removeClass("activCarChoose");
                $(".territoryLi").addClass("activCarChoose");
                createTerritory($(this).text());
                $(".year span").text($(this).text())
                $('.year').css('visibility','visible');
                $('.year').addClass('visible');
                break; 
            case 'territory':
                $(".territoryLi").removeClass("activCarChoose");
                $("#territoryAuto option[value='"+$(this).text()+"']").prop("selected", true);
                $("#territoryAuto").trigger("change");
                $('.makeDiv').css("display","none")
                $(".territory span").text($(this).text())
                $('.territory').css('visibility','visible');
                $('.territory').addClass('visible');
                break; 
        }
        bindClick();
    })       
}
var clickB = true;

$(".applied button").on('click', function(){
    if($('.car').hasClass('visible') && $('.year').hasClass('visible') && $('.territory').hasClass('visible')){
       
        $(".selectOptions").toggle();
        if(clickB){
            $(this).addClass("activeChangeButton");
            clickB = false;
        }
        else{
            $(this).removeClass("activeChangeButton");
            clickB = true;
        }
        
    }
    
    else{
       alert("Please select all categories")
    }
   
})

$(".makeLi").click(function(){
    createMakes();
bindClick();
        $(".makeDiv").toggle();
    })

$("#makeAuto").change(function(){
    $("#variantAuto").empty();
    $("#modelAuto").empty();
    var make = $("#makeAuto").val();
        $(".car .spanMake").html($("#makeAuto").val());
        for (var key in cars[make]) {
            $("#modelAuto").append("<option value='" + key +"'>"+key+"</option>");
        } 

        var model =  $("#modelAuto").val();
        $(".car .spanModel").html($("#modelAuto").val())

        for (var i = 0; i < cars[make][model].length; ++i) {
                $("#variantAuto").append("<option value='" +  cars[make][model][i]  +"'>"+ cars[make][model][i] +"</option>");
            } 
        $(".car .spanVariant").html($("#variantAuto").val())   
    
})
    $("#modelAuto").change(function(){
        $("#variantAuto").empty();
        $(".car .spanModel").html($("#modelAuto").val())
            var make = $("#makeAuto").val();
            var model =  $("#modelAuto").val();

            for (var i = 0; i < cars[make][model].length; ++i) {
                $("#variantAuto").append("<option value='" +  cars[make][model][i]  +"'>"+ cars[make][model][i] +"</option>");
            }
        $(".car .spanVariant").html($('#variantAuto').val())
    }) 

    $("#variantAuto").change(function(){
        $(".car .spanVariant").html($('#variantAuto').val())
    })

    $("#territoryAuto").change(function(){
        $(".territory span").html($('#territoryAuto').val())
    })
    $("#yearAuto").change(function(){
        $(".year span").html($('#yearAuto').val())
    })



    $(".Depreciation").on('click', function(){
        $(".subMenu").toggle();
    })
    $(".SupplyDemand").click(function(){
        $(".subMenu1").toggle();
    })

    $(".sideBar a").on('click', function(){
        $(".sideBar a").removeClass("chartsMenuActive");
        $(this).addClass("chartsMenuActive");
    })


    /*apply button*/

    $(".selectOptions button").on('click',function(){
        $(".charts").css('display','block');
        $(".selectApplied").css('visibility','visible');
        $(".selectOptions").css('display', 'none');
     
        setCustomChoiceModel();
        setCustomChoiceVariant();
        initializeMaps();
    })

    function setCustomChoiceModel(){
        $("#chooseModelByModel option").text($(".car .spanMake").text());
        $("#chooseVariantModel option").text($(".car .spanModel").text());
        $("#chooseYearModel option").text($(".year span").text());
    }
    function setCustomChoiceVariant(){
        $("#chooseModelByVariant option").text($(".car .spanMake").text() + ' ' + $(".car .spanModel").text());
        $("#chooseVariantByVariant option").text($(".car .spanVariant").text());
        $("#chooseYearByVariant option").text($(".year span").text());
    }


/*custom compair Model*/
    $('.compareImg').on('click', function(){
        if($("#chooseModel1").val()!="Please Select" && $("#chooseVariant1").val()!="Please Select" && $("#chooseYear1").val()!="Please Select"){
            var make = $("#chooseModel1").val();
            var model = $("#chooseVariant1").val();
            var year = $("#chooseYear1").val();
            localStorage.setItem('compairCars', JSON.stringify({
                'make': make,
                'model': model,
                'year': year,
            }));

        }

            var customMake = $(".car .spanMake").text();
            var customModel = $(".car .spanModel").text();
            var customYear = $(".year span").text();
             localStorage.setItem('compairCustomChoice', JSON.stringify({
                'customMake': customMake,
                'customModel': customModel,
                'customYear': customYear,
            }));

            //console.log(customMake)
        $(location).attr('href', 'Comparison_Full_Screen_Model.html');     
    })

/*custom compair Variant*/
    $('.compareImgVariant').on('click', function(){
        if($("#chooseModelByVariant1").val()!="Please Select" && $("#chooseVariantByVariant1").val()!="Please Select" && $("#chooseYearByVariant1").val()!="Please Select"){
            var makeV = $("#chooseModelByVariant1").val();
            var variantV = $("#chooseVariantByVariant1").val();
            var yearV = $("#chooseYearByVariant1").val();
            localStorage.setItem('compairCarsVariant', JSON.stringify({
                'makeV': makeV,
                'variantV': variantV,
                'yearV': yearV,
            }));

        }

            var customMakeV = $(".car .spanMake").text() + ' ' + $(".car .spanModel").text();
            var customVariantV = $(".car .spanVariant").text();
            var customYearV = $(".year span").text();
             localStorage.setItem('compairCustomChoiceVariant', JSON.stringify({
                'customMakeV': customMakeV,
                'customVariantV': customVariantV,
                'customYearV': customYearV,
            }));

            //console.log(customMake)
        $(location).attr('href', 'Comparison_Full_Screen_Variant.html');     
    })



    /*search function for side bar*/

    $("#search-criteria").on("keyup", function() {
        var searchWord = $(this).val().toLowerCase();
        $(".sideBar h4 a").each(function() {
            var result = $(this).text().toLowerCase();
            $(this).closest('.sideBar h4')[ result.indexOf(searchWord ) !== -1 ? 'show' : 'hide' ]();
        });
    });  

    /*search function for menu*/

    $("#search-criteria-menu").on("keyup", function() {
        var searchWordMenu = $(this).val().toLowerCase();
        $(".makeDiv ul li").each(function() {
            var resultMenu = $(this).text().toLowerCase();
            $(this).closest('.makeDiv ul li')[resultMenu.indexOf(searchWordMenu) !== -1 ? 'show' : 'hide' ]();
        });
    }); 

    $(".depreciationTable tr ").on('click',function(){
        console.log($(this).text()[2]);
    })

/*close modal*/
    $(".closeButton").on('click', function(){
        $('.modal').modal('toggle');
    })

    $(".manageV").on('click', function(){
        alert('hi')
    })

    var firstToggle=false;
        var secondToggle=false;

        $("#firstToggle").click(function () {
            firstToggle = !firstToggle;
            if(firstToggle){
                $("#firstToggle p:nth-child(1)").css("display","block");
                $("#firstToggle p:nth-child(2)").css("display","none");
                $("#firstToggle").addClass("variablesToggle-borderColor");
                $("#firstToggle p:nth-child(1)").addClass("variablesToggle-pColor");
                $("#firstDateToggle").addClass("pDateToggle");
                $(".firstToggleMonths").slideToggle(1000);
            }else{
                $("#firstToggle p:nth-child(1)").css("display","none");
                $("#firstToggle p:nth-child(2)").css("display","block");
                $("#firstToggle").removeClass("variablesToggle-borderColor");
                $("#firstToggle p:nth-child(1)").removeClass("variablesToggle-pColor");
                $("#firstDateToggle").removeClass("pDateToggle");
                $(".firstToggleMonths").slideToggle(1000);
            }
            
        });
        $("#secondToggle").click(function () {
            secondToggle = !secondToggle;
            if(secondToggle){
                $("#secondToggle p:nth-child(1)").css("display","block");
                $("#secondToggle p:nth-child(2)").css("display","none");
                $("#secondToggle").addClass("variablesToggle-borderColor");
                $("#secondToggle p:nth-child(1)").addClass("variablesToggle-pColor");
                $("#secondDateToggle").addClass("pDateToggle");
                $(".secondToggleMonths").slideToggle(1000);
            }else{
                $("#secondToggle p:nth-child(1)").css("display","none");
                $("#secondToggle p:nth-child(2)").css("display","block");
                $("#secondToggle").removeClass("variablesToggle-borderColor");
                $("#secondToggle p:nth-child(1)").removeClass("variablesToggle-pColor");
                $("#secondDateToggle").removeClass("pDateToggle");
                $(".secondToggleMonths").slideToggle(1000);
            }
            
        });

        $(".variables input").click(function () {
            if(this.checked){
                $(".variables div:nth-child(1)").children().eq($(this).index()+1).addClass("pDateToggle");
            }else{
                $(".variables div:nth-child(1)").children().eq($(this).index()+1).removeClass("pDateToggle");
            }
        })

        $('.secondToggleMonths p').on('click', function(){
            $('.secondToggleMonths p').removeClass('activeCheck')
            $(this).addClass('activeCheck')
        })
        $('.firstToggleMonths p').on('click', function(){
            $('.firstToggleMonths p').removeClass('activeCheck')
            $(this).addClass('activeCheck')
        })
        $('.alfabetSort').on('click', function(){
            $('.alfabetSort').removeClass('activeCheck');
            $(this).addClass('activeCheck')
        })

        $('.addCar h5').on('click', function(){
            $('.variables').toggle()
        })

$('.fullScreen').on('click', function(){

    $(location).attr('href', 'Depreciation_Full_Screen.html');
    //alert('hi')
})

$('#compairModel').on('click', function(){
    if($("#chooseModel1").val()!="Please Select" && $("#chooseVariant1").val()!="Please Select" && $("#chooseYear1").val()!="Please Select"){
        $('.compareHideTable').css('display', 'block');
        $('.hiddenP').css('display', 'block')
    }  
    
})
$('#variantB').on('click', function(){
    if($("#chooseModelByVariant1").val()!="Please Select" && $("#chooseVariantByVariant1").val()!="Please Select" && $("#chooseYearByVariant1").val()!="Please Select"){
        $('.compareHideTableV').css('display', 'block');
        $('.hiddenP').css('display', 'block')
    }  
    
})

      







$('.showCharts').on('click', function(){
    $(".chartsDepreciation").css('display','block');
    $(".applied").css('visibility','visible');
    
})


$('.backDashboard').on('click', function(){
    $(location).attr('href', 'charts.html');
    
})

$('.stopRenewal input').off('click').on('click', function(){
    console.log("checked = ", $(this).prop('checked'));
    if (!$(this).prop('checked')) {
        $('.subscribeAlert').text('Do you wish to unsubscribe from auto renewal upon expiry?');
        $('.unsubscribeConf').text('UNSUBSCRIBE');
        $('.unsubscribeConf').attr('data-info', 'unsubscribe');
    } else {
        $('.subscribeAlert').text('Do you wish to subscribe to auto renewal?')
        $('.unsubscribeConf').text('SUBSCRIBE')
        $('.unsubscribeConf').attr('data-info', 'subscribe')
    }
    $("#sbscribeInformation").modal('toggle');
})

$('.unsubscribeConf').on('click', function(){
    var checkedStatus = $('.unsubscribeConf').attr('data-info')
    $('#sbscribeInformation').modal('toggle');
    switch (checkedStatus) {
        case 'unsubscribe':
            break;
        case 'subscribe':
            break;
        
    }
})

$('.cancelRenewal').on('click', function(){
    var checkedStatus = $('.unsubscribeConf').attr('data-info');
    switch (checkedStatus) {
        case 'unsubscribe':
            $('.stopRenewal input').prop( "checked", true );      
            break;
         case 'subscribe':
            $('.stopRenewal input').prop( "checked", false );   
            break;
    }
})
$('#cancelSubscribe button').on('click', function(){
    $('#cancelSubscribe').modal('toggle');
    $(".ourPlans").text("");
    $('.selectedPlan').text('Chosen Plan:NONE');
})




/*menu bar*/
 

$(".homePage").off('click').on('click', function(){
     $(location).attr('href', 'charts.html');
})
$(".rankinPage").off('click').on('click', function(){
     $(location).attr('href', 'dashboardRankinModel.html');
})
$(".geolocationPage").off('click').on('click', function(){
     $(location).attr('href', 'dashboardGeolocationModel.html');
})
$(".marketPricePage").off('click').on('click', function(){
     $(location).attr('href', 'dashboardMarketPrice.html');
})


/*mac style*/

function getOS() {
  var userAgent = window.navigator.userAgent,
      platform = window.navigator.platform,
      macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'],
      windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'],
      iosPlatforms = ['iPhone', 'iPad', 'iPod'],
      os = null;
  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'Mac OS';
    $('.navBarCharts ul').eq(0).addClass('mainNavBar');
    $('.mainNavBar').css('width', 640+'px');
    $('.chartsPart table tr th').css('padding','0!important')
   

  } 
  else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS';

  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
    

//    $('.mainNavBar').css('width', 640 + 'px');
  } else if (/Android/.test(userAgent)) {
    os = 'Android';
  } else if (!os && /Linux/.test(platform)) {
    os = 'Linux';
  }

  return os;
}

getOS();




$



});

 


    



  