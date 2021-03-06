$(document).ready(function () {
    $.ajax(api_url, {
        headers: {Accept: "application/vnd.github.v3.html+json"},
        dataType: "json",
        success: function(comments) {
            $("#gh-comments-list").append("<p id='comments-invite'>Visit the <a href='" + url + "'>Github Issue</a> to comment on this post</p>");
            $.each(comments, function(i, comment) {

                var date = new Date(comment.created_at);

                var t = "<div class='gh-comment'>";
                t += "<img src='" + comment.user.avatar_url + "' width='24px'>";
                t += "<b><a href='" + comment.user.html_url + "'>" + comment.user.login + "</a></b>";
                t += " posted at ";
                t += "<em>" + date.toUTCString() + "</em>";
                t += "<div class='gh-comment-hr'></div>";
                t += comment.body_html;
                t += "</div>";
                $("#gh-comments-list").append(t);
            });
        },
        error: function() {
            $("#gh-comments-list").append("Comments are not open for this post yet.");
        }
    });
});