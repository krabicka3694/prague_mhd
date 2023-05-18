window.onload = function() {
    var text = document.createElement("div");
    text.innerHTML = "Vítejte! Dovolte mi vám představit krásy pražské MHD. Informace na těchto stránkách jsou vygenerovány za pomoci jazykového modelu ChatGPT! Klikněte pro pokračování" ;
    text.style.textDecoration = "underline";
    text.style.color = "black";
    text.style.position = "fixed";
    text.style.top = "50%";
    text.style.left = "50%";
    text.style.transform = "translate(-50%, -50%)";
    text.style.padding = "20px";
    text.style.background = "rgba(236, 228, 228, 0.889)";
    text.style.border = "2px solid black";
    text.style.cursor = "pointer";
    text.style.zIndex = "5";

    document.body.appendChild(text);
    text.addEventListener("click", function() {
      text.parentNode.removeChild(text);
    }
    );
  };
  