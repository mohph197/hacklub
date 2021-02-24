function onDay(index)
{
    var days = document.querySelectorAll(".day");
    var daysContents = document.querySelectorAll(".day > .content");
    var daysNums = document.querySelectorAll(".day > .num");
    days[index].style.color="#5ffce7";
    daysContents[index].style.backgroundColor="#2d27fb60";
    daysContents[index].style.height="100%";
    daysContents[index].style.borderColor="#5ffce7";
    daysNums[index].style.backgroundColor="#2d27fb60";
    daysNums[index].style.borderColor="#5ffce7";
}
function offDay(index)
{
    var days = document.querySelectorAll(".day");
    var daysContents = document.querySelectorAll(".day > .content");
    var daysNums = document.querySelectorAll(".day > .num");
    days[index].style.color="white";
    daysContents[index].style.backgroundColor="transparent";
    daysContents[index].style.height="0%";
    daysContents[index].style.borderColor="white";
    daysNums[index].style.backgroundColor="transparent";
    daysNums[index].style.borderColor="white";
}
function onArticle(index)
{
    var articleTitle = document.querySelectorAll("article > .title");
    var titleBorder = document.querySelectorAll("article > .title > .flexBorder");
    articleTitle[index].style.color = "#5ffce7b4";
    articleTitle[index].style.borderBottom = "2px solid #5ffce7";
    titleBorder[index].style.height = "20px";
    titleBorder[index].style.borderRight = "2px solid #5ffce7";
}
function offArticle(index)
{
    var articleTitle = document.querySelectorAll("article > .title");
    var titleBorder = document.querySelectorAll("article > .title > .flexBorder");
    articleTitle[index].style.color = "white";
    articleTitle[index].style.borderBottom = "2px solid white";
    titleBorder[index].style.height = "0px";
    titleBorder[index].style.borderRight = "2px solid white";
}
var count = 0;
function nextOne()
{
    var workshop = document.getElementsByClassName("workshop");
    if(count < 2)
    {
        count++;
        // workshop[count - 1].style.height = "0px";
        workshop[count - 1].style.width = "0px";
        workshop[count - 1].style.opacity = "0";
        // workshop[count].style.height = "500px";
        workshop[count].style.width = "400px";
        workshop[count].style.opacity = "1";
    }
}
function preOne()
{
    var workshop = document.getElementsByClassName("workshop");
    if(count > 0)
    {
        // workshop[count - 1].style.height = "500px";
        workshop[count - 1].style.width = "400px";
        workshop[count - 1].style.opacity = "1";
        // workshop[count].style.height = "0px";
        workshop[count].style.width = "0px";
        workshop[count].style.opacity = "0";
        count--;
    }
}