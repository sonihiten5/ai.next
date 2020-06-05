$('#studentForm').submit(function (e) {

    e.preventDefault();
    var code = {
        teamName: $("#teamName11").val(),
        memName: $("#memName").val(),
        problemStatement: $("input[name='c1']:checked").val(),
        ideaBreif: $("#ps").val(),
        usp: $("#usp").val(),
        techStack: $("#tech_stack").val(),
        possitiveSol: $("#possitive_sol").val(),
        otherSol: $("#other_sol").val(),
        gitRepo: $("#git_repo").val(),
    }

    $.post('ideasubmission', code)
        .then((d) => {
            // $('#idea_submit').modal('hide');
            // Idea Content
            // $('#idea_content').hide();
            // $('#idea_done').show();
            // // After Submitting
            // $('#doneIdea').show();
            // $('#editIdea').show();
            // // Before Submitting
            // $('#submitBtn').hide();
            // $('#cancelIdea').hide();
            location.reload();
            // alert("IDEA SUBMITTED");
        });

    // return false;

});

function wantToCreateTeam() {
    if ($('#createTeamCheck:checkbox:checked').length > 0) {
        $('#createTeam').show();
        if ($('#team-change').hasClass('show')) {
            $('#team-change').toggle('collapse')
        }
        $('#joinMyTeam').show();

        // $('#team-change').show();

    } else {
        $('#createTeam').hide();
        if ($('#team-change').hasClass('show')) {
            $('#team-change').toggle('collapse')
        }
        $('#joinMyTeam').hide();
    }
}

function addProblemStatement() {

    var idea = {
        teamName: $('#uniTeamName').val(),
        problemStatement: $('input[name="c11"]:checked').val()
    }

    $.post('updateProblem', idea)
        .then((d) => {
            location.reload();
        });

}

function editMyIdea() {
    // alert("HELLO");
    $('#idea_content').show();
    $('#idea_done').hide();
    // After Submitting
    $('#doneIdea').hide();
    $('#editIdea').hide();
    // Before Submitting
    $('#submitBtn').show();
    $('#cancelIdea').show();
}
$(document).ready(function () {
    if ($('#ps').val() != "") {
        $('#idea_content').hide();
        $('#idea_done').show();
        // After Submitting
        $('#doneIdea').show();
        $('#editIdea').show();
        // Before Submitting
        $('#submitBtn').hide();
        $('#cancelIdea').hide();
    }
});

function removeMeFromTeam(memName) {
    var rem = {
        memName: $('#memNameToRemove').html(),
        teamName: $('#uniTeamName01').html()
    }
    console
    $.post('removeMember', rem)
        .then((d) => {
            if (d == 'done') {
                location.reload();
                alert("Removed Successfully");
            } else {
                alert("Some Error Occurred");
                location.reload();
            }
        });
}

function updateMem(memName) {
    $('#memNameToRemove').html(memName);
}

function addToTeam(teamName, email) {
    // alert(teamName + "   " + email);

    $.post('confirmjointeam', {
            teamName: teamName,
            email: email
        })
        .then((d) => {
            if (d == 'done') {
                location.reload();
                alert("Added " + email + " Successfully");
            } else {
                alert("Some Error Occurred");
                location.reload();
            }
        });
}

function declineFromTeam(teamName, email) {
    // alert(teamName + "   " + email);

    $.post('declinejointeam', {
            teamName: teamName,
            email: email
        })
        .then((d) => {
            if (d == 'done') {
                location.reload();
                alert("Declined " + email);
            } else {
                alert("Some Error Occurred");
                location.reload();
            }
        });
}