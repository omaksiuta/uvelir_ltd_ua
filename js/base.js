/**
 * Created by nastya on 11.01.15.
 */
//Check If SelfPage
function redirectIfNotInIframe() {
    //    if (parent.frames.length == 0)
    if (self == top) {
        var currentPagePath = location.pathname;
        window.location.href = "index.html";
//        top.location.href="index.htm?url="+self.location.href;
        self.frames["iframe_all"].location.href = currentPagePath;
    }

}
