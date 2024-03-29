function submitArticle() {
    let outputText = document.getElementById('outputText').value;
    
    // send to backend
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/submitArticle", true);
    
}