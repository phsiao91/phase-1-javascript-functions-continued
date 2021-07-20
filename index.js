function saturdayFun(activity="roller-skate"){
    return (`This Saturday, I want to ${activity}!`);
}

function mondayWork(activity="go to the office") {
    return (`This Monday, I will ${activity}.`);
}


function wrapAdjective(sign="*") {
    return function(adj="a hard worker"){
        return (`You are ${sign}${adj}${sign}!`);
    }
}
