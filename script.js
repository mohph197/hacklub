function onDay(index)
{
    var days = document.querySelectorAll(".day");
    var daysContents = document.querySelectorAll(".day > .content");
    var daysNums = document.querySelectorAll(".day > .num");
    days[index].style.color="#5ffcad";
    daysContents[index].style.backgroundColor="#2d27fb60";
    daysContents[index].style.height="100%";
    daysContents[index].style.borderColor="#5ffcad";
    daysNums[index].style.backgroundColor="#2d27fb60";
    daysNums[index].style.borderColor="#5ffcad";
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
    var articleContent = document.querySelectorAll("article > .content");
    // var articleTitleMask = document.querySelectorAll("article > .title > .mask");
    // articleTitleMask[index].style.height = "70%";
    articleTitle[index].style.color = "#5ffcadb4";
    articleTitle[index].style.borderBottom = "2px solid #5ffcad";
    articleContent[index].style.borderLeft = "2px solid #5ffcad";
    articleContent[index].style.borderBottom = "2px solid #5ffcad";
    // articleContent[index].style.boxShadow = "0px 0px 10px rgb(107, 150, 190)";
}
function offArticle(index)
{
    var articleTitle = document.querySelectorAll("article > .title");
    var articleContent = document.querySelectorAll("article > .content");
    // var articleTitleMask = document.querySelectorAll("article > .title > .mask");
    // articleTitleMask[index].style.height = "100%";
    articleTitle[index].style.color = "white";
    articleTitle[index].style.borderBottom = "2px solid white";
    articleContent[index].style.borderLeft = "2px solid white";
    articleContent[index].style.borderBottom = "none";
    // articleContent[index].style.boxShadow = "2px 5px 10px rgb(107, 150, 190)";
}
var count = 0;
function nextOne()
{
    var workshop = document.getElementsByClassName("workshop");
    if(count < 2)
    {
        count++;
        workshop[count - 1].style.height = "0px";
        workshop[count - 1].style.width = "0px";
        workshop[count - 1].style.opacity = "0";
        workshop[count].style.height = "500px";
        workshop[count].style.width = "400px";
        workshop[count].style.opacity = "1";
    }
}
function preOne()
{
    var workshop = document.getElementsByClassName("workshop");
    if(count > 0)
    {
        workshop[count - 1].style.height = "500px";
        workshop[count - 1].style.width = "400px";
        workshop[count - 1].style.opacity = "1";
        workshop[count].style.height = "0px";
        workshop[count].style.width = "0px";
        workshop[count].style.opacity = "0";
        count--;
    }
}