function onDay(index)
{
    var days = document.querySelectorAll(".day");
    var daysContents = document.querySelectorAll(".day > .content");
    var daysNums = document.querySelectorAll(".day > .num");
    days[index].style.color="#5ffce7";
    // days[index].style.backgroundColor="#2d27fb60";
    daysContents[index].style.backgroundColor="#2d27fb60";
    // daysContents[index].style.height="100%";
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
    // days[index].style.backgroundColor="transparent";
    daysContents[index].style.backgroundColor="transparent";
    // daysContents[index].style.height="0%";
    daysContents[index].style.borderColor="white";
    daysNums[index].style.backgroundColor="transparent";
    daysNums[index].style.borderColor="white";
}
function onArticle(index)
{
    var articleTitle = document.querySelectorAll("article > .title");
    var articleContent = document.querySelectorAll("article > .content");
    var titleBorder = document.querySelectorAll("article > .title > .flexBorder");
    var contentBorder = document.querySelectorAll("article > .content > .flexBorder");
    articleTitle[index].style.color = "#5ffce7b4";
    // articleTitle[index].style.borderBottom = "2px solid #5ffce7";
    articleContent[index].style.backgroundColor = "#27a6fb60";
    articleContent[index].style.boxShadow = "5px 5px 10px #022546c0";
    // articleContent[index].style.borderBottom = "2px solid #5ffce7";
    articleContent[index].style.borderLeftColor = "#5ffce7";
    contentBorder[index].style.width = "100%";
    contentBorder[index].style.borderBottomColor = "#5ffce7";
    titleBorder[index].style.height = "20px";
    titleBorder[index].style.width = "100%";
    titleBorder[index].style.borderRightColor = "#5ffce7";
    titleBorder[index].style.borderBottomColor = "#5ffce7";
}
function offArticle(index)
{
    var articleTitle = document.querySelectorAll("article > .title");
    var articleContent = document.querySelectorAll("article > .content");
    var titleBorder = document.querySelectorAll("article > .title > .flexBorder");
    var contentBorder = document.querySelectorAll("article > .content > .flexBorder");
    articleTitle[index].style.color = "white";
    // articleTitle[index].style.borderBottom = "2px solid white";
    articleContent[index].style.backgroundColor = "transparent";
    articleContent[index].style.boxShadow = "none";
    // articleContent[index].style.borderBottom = "none";
    articleContent[index].style.borderLeftColor = "white";
    contentBorder[index].style.width = "0%";
    contentBorder[index].style.borderBottomColor = "transparent";
    titleBorder[index].style.height = "0px";
    titleBorder[index].style.width = "0%";
    titleBorder[index].style.borderRightColor = "transparent";
    titleBorder[index].style.borderBottomColor = "transparent";
}
var count = 0;
function nextOne()
{
    var workshop = document.getElementsByClassName("workshop");
    var workshopTrackers = document.getElementsByClassName("miniBar");
    if(count < 3)
    {
        count++;
        workshop[count - 1].style.width = "0px";
        workshop[count - 1].style.opacity = "0";
        workshopTrackers[count - 1].style.backgroundColor = "#ffffff1f";
        workshop[count].style.width = "400px";
        workshop[count].style.opacity = "1";
        workshopTrackers[count].style.backgroundColor = "#5ffcef";
    } else
    {
        count = 0;
        workshop[3].style.width = "0px";
        workshop[3].style.opacity = "0";
        workshopTrackers[3].style.backgroundColor = "#ffffff1f";
        workshop[count].style.width = "400px";
        workshop[count].style.opacity = "1";
        workshopTrackers[count].style.backgroundColor = "#5ffcef";
    }
        
    
}
function preOne()
{
    var workshop = document.getElementsByClassName("workshop");
    var workshopTrackers = document.getElementsByClassName("miniBar");
    if(count > 0)
    {
        workshop[count - 1].style.width = "400px";
        workshop[count - 1].style.opacity = "1";
        workshopTrackers[count - 1].style.backgroundColor = "#5ffcef";
        workshop[count].style.width = "0px";
        workshop[count].style.opacity = "0";
        workshopTrackers[count].style.backgroundColor = "#ffffff1f";
        count--;
    } else
    {
        workshop[3].style.width = "400px";
        workshop[3].style.opacity = "1";
        workshopTrackers[3].style.backgroundColor = "#5ffcef";
        workshop[count].style.width = "0px";
        workshop[count].style.opacity = "0";
        workshopTrackers[count].style.backgroundColor = "#ffffff1f";
        count=3;
    }
}