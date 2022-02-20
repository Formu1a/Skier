var ajaxHandlerScript = "https://fe.it-academy.by/AjaxStringStorage2.php";
var updatePassword;
var stringName = "BORISEVICH_TEST_INFO";

function storeInfo() {
    updatePassword = Math.random();
    jQuery.ajax({
        url: ajaxHandlerScript,
        type: "POST",
        cache: false,
        dataType: "json",
        data: { f: "LOCKGET", n: stringName, p: updatePassword },
        success: lockGetReady,
        error: errorHandler,
    });
}

function lockGetReady(callresult) {
    if (callresult.error != undefined) alert(callresult.error);
    else {
        // нам всё равно, что было прочитано -
        // всё равно перезаписываем
        var info = {
            name: document.getElementById("IName").value,
            distance: document.getElementById("dist").textContent,
        };
        console.log(info);
        jQuery.ajax({
            url: ajaxHandlerScript,
            type: "POST",
            cache: false,
            dataType: "json",
            data: {
                f: "UPDATE",
                n: stringName,
                v: JSON.stringify(info),
                p: updatePassword,
            },
            success: updateReady,
            error: errorHandler,
        });
    }
}

function updateReady(callresult) {
    if (callresult.error != undefined) alert(callresult.error);
}

function restoreInfo() {
    jQuery.ajax({
        url: ajaxHandlerScript,
        type: "POST",
        cache: false,
        dataType: "json",
        data: { f: "READ", n: stringName },
        success: readReady,
        error: errorHandler,
    });
}

function readReady(callresult) {
    if (callresult.error != undefined) alert(callresult.error);
    else if (callresult.result != "") {
        let info = JSON.parse(callresult.result);

        localStorage.setItem(info.name, info.distance);

        document.getElementById("IName").value = "DefaultName";
        document.getElementById("dist").textContent = info.distance;
    }
}

function errorHandler(jqXHR, statusStr, errorStr) {
    alert(statusStr + " " + errorStr);
}

restoreInfo();
