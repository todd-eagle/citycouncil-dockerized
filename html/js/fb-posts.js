$.ajax({
        url: "FbCards.php",
        method: "GET",
        success:function(data){
            $(".news>.card-container").html(data);
        },
        error:function (xhr){
            alert("something went wrong!");
            console.log(xhr);
        }
});
