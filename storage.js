//כל הפונקציות שקשורות לאחסון נתונים


    function onLoadStorage(){
        localStorage.setItem("manager" , "not manager")
    }

    function replaceManagerMode(){
    localStorage.getItem("manager")==="manager" ? localStorage.setItem("manager" , "not manager") : localStorage.setItem("manager" , "manager")
    loginComponnent()
    managerComponnent()
    showComponnent()
    }


