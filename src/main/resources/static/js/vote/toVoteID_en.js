$("#toVoteID").keydown(function () {
    if (event.keyCode == "13") {//keyCode=13是回车键
        toVoteID();
    }
});

$("#gotoVoteID").click(function () {
    toVoteID();
});

function toVoteID() {
    $("#toVoteID").modal("hide");
    var voteID = $("#voteID").val();
    $.ajax({
        url: "/checkVoteID/" + voteID,
        success: function (data) {
            if (data == 1) {
                //Exist
                location.href = "/vote/" + voteID;
            } else if (data == 0) {
                //Not exist
                alert("VoteID not found! Please try again.")
            }
        }
    });
}