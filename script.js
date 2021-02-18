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
function onArticle(index)
{
    var articleContent = document.querySelectorAll("article > .content");
    var articleTitleMask = document.querySelectorAll("article > .title > .mask");
    articleTitleMask[index].style.height = "70%";
    articleContent[index].style.borderBottom = "2px solid #f80000";
    articleContent[index].style.height = "550px";
    articleContent[index].style.boxShadow = "0px 0px 20px black";
}
function offArticle(index)
{
    var articleContent = document.querySelectorAll("article > .content");
    var articleTitleMask = document.querySelectorAll("article > .title > .mask");
    articleTitleMask[index].style.height = "100%";
    articleContent[index].style.borderBottom = "none";
    articleContent[index].style.height = "78px";
    articleContent[index].style.boxShadow = "5px 10px 20px black";
}