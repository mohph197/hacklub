function onDay(index)
{
    var days = document.querySelectorAll(".day");
    var daysContents = document.querySelectorAll(".day > .content");
    var daysNums = document.querySelectorAll(".day > .num");
    days[index].style.color="#f80000";
    daysContents[index].style.backgroundColor="#07090f";
    daysContents[index].style.height="200px";
    daysContents[index].style.borderColor="#f80000";
    daysNums[index].style.backgroundColor="#07090f";
    daysNums[index].style.borderColor="#f80000";
}
function offDay(index)
{
    var days = document.querySelectorAll(".day");
    var daysContents = document.querySelectorAll(".day > .content");
    var daysNums = document.querySelectorAll(".day > .num");
    days[index].style.color="white";
    daysContents[index].style.backgroundColor="transparent";
    daysContents[index].style.height="0px";
    daysContents[index].style.borderColor="white";
    daysNums[index].style.backgroundColor="transparent";
    daysNums[index].style.borderColor="white";
}
    