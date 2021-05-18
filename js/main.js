var site = prompt("메인, 레시피, 푸드, 트레벌 중 \ 당신이 원하시는 정보는 무엇입니까","");
var url;

switch(site){
    case"메인":url = "http://127.0.0.1:5500/index.html"
    break;
    case"레시피":url = "http://127.0.0.1:5500/pages/recipes.html"
    break;
    case"푸드":url = "http://127.0.0.1:5500/pages/food.html"
    break;
    case"트레벌":url = "../pages/Travel.html"
    break;
    default:alert("보기 중에 없는 정보입니다.")
}
