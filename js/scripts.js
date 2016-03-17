
function showDescription(descript){
    $("#description").html("Description: " + descript);
}

function hideDescription(){
    $("#description").html("");
}

function validate(){
    var txtDob = $("#txtDate").val();
    var dob = new Date(txtDob);
    if(dob >= new Date()){
        alert("Date Of Birth is not Valid. Date has to be before today.")
        return false
    }
    var phonenum = $("#phone").val();
    if(phonenum.length < 10){
        alert("Phone number is not Valid. Should be 10 digits long.")
        return false
    }
    if(isNaN(phonenum)){
        alert("Phone number is not Valid. Should comprise of digits only.")
        return false
    }

}