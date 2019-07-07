$(document).ready(()=>{
    //AJAX here
});

let editMovie = (event) =>{
    $("#edit-movie-modal-header").text('Edit movie');
    $("#edit-movie-btn").text('Edit');
    let parents =$(event.target).parentsUntil("tbody");
    let tr = $(parents[parents.length-1]).children();
    for(let target of tr){
        if(target.hasAttribute("data-dict")){
            if(target.getAttribute("data-dict")=="Cast"){
                let x=target.innerText.split(",");
                console.log(x);
                $("#Cast").val(x);
            }else{
                $("#"+target.getAttribute("data-dict")).val(target.innerText);

            }
        }
    }
    $("#edit-movie-modal").modal('show');
}

let deleteMovie = (event) =>{
    let parents =$(event.target).parentsUntil("tbody");
    let tr = $(parents[parents.length-1]).children();
    for(let target of tr){
        if(target.hasAttribute("data-dict")){
            if(target.getAttribute("data-dict")=="Name"){
                $("#deleting-movie-name").text(target.innerText);
            }
            if(target.getAttribute("data-dict")=="Year"){
                $("#deleting-movie-year").text(target.innerText);
            }
        }
    }
$("#delete-movie-modal").modal('show');
}

let addMovie = () =>{
        $.ajaxSetup({
            headers:
            { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') }
        });
    $("#edit-movie-form :input").val('');
    $("#edit-movie-modal-header").text('Add a new movie');
    $("#edit-movie-btn").text('Add');
    $("#edit-movie-modal").modal('show');
}
$("#edit-movie-btn").click(()=>{
    var token =  $('meta[name="csrf-token"]').attr('content')
    console.log("   Token:", token)
    $.ajaxSetup({
        beforeSend: function(xhr) {
            xhr.setRequestHeader('Csrf-Token', token);
        }
    });
    Movie_id=$("#Movie_id").val();
    console.log(Movie_id);
    let flag = true;
    for(let target of $("#edit-movie-form :input")){
        if(!IsValid(target)){
            flag = false;
        }
    }
    if(flag){
        $("#edit-movie-modal").modal('hide');
         $.ajax({
            url: 'http://127.0.0.1:8000/movies/edit_movies/',
            type: 'POST',
            headers: { 'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content') },
//            setRequestHeader: {'Csrf-Token': token},
            contentType: 'application/json',
            data: JSON.stringify({"Movie_id":Movie_id}),
            success: function (data) {
//                setTimeout(uploadFilesToLSQ((count + 1), ActivityID), 1000);
                  console.log(data);
            },
            error: function (response) {
//                $("#loader").hide();
//                $("#documents").show();
//
//                $('#uploadModal').modal('toggle');
//                var ErrorResponse = JSON.parse(response.responseText);
//                alert(ErrorResponse.ExceptionMessage);
            }
        });
        alert("Add");
    }
});
$("#delete-movie-btn").click(()=>{
    //AJAX here
});
function IsValid(target){
    console.log(target.value);
    if (target.hasAttribute('required') && !target.value) {
        $(target).next('small').text(target.name + " is mandatory");
        target.style.borderColor = "red";
        return false;
    }
    target.style.borderColor = "green";
    if (target.nextElementSibling) {
        $(target).next('small').text("");
    }
    return true;
}

function handleActorCheckboxChange(){
if($('#new-actor-label').is(":checked")){
$("#actor-form").show();
}else{
$("#actor-form").hide();
}
}