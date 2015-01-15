/**
 * Created by nastya on 11.01.15.
 */
//Check If SelfPage
function redirectIfNotInIframe(countOfSubfolders) {
    if (self == top) {
        localStorage.pageToShowInFrame = location.pathname;

        var changeDir = "";
        if (countOfSubfolders > 0) {
            for (i = 0; i < countOfSubfolders; i++) {
                changeDir = changeDir + "../";
            }
        }

        var roothtmlPath = changeDir + "index.html";

        window.location.href = roothtmlPath;
    }
    else
    {

//        localStorage.pageToShowInFrame = location.pathname;
        redirectFromLocalStorage();
    }
}

function redirectFromLocalStorage() {
    if (localStorage.getItem("pageToShowInFrame") != null) {
//        document.getElementById("iframePages").src = localStorage["pageToShowInFrame"];
        window.open(localStorage.getItem("pageToShowInFrame"), "iframe_all");
        localStorage.removeItem("pageToShowInFrame");
    }
}