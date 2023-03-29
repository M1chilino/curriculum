function openTab(evt, tabName) {
  var i, tabcontent, tablinks;

  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// Executar este código quando a página for carregada
window.addEventListener("load", function() {
  // Obter o botão de tab ativo (que tem a classe 'active')
  var activeTab = document.querySelector(".tablinks.active");

  // Obter o ID da aba correspondente a partir do atributo 'onclick' do botão
  var tabName = activeTab.getAttribute("onclick").match(/'(.*?)'/)[1];

  // Ativar a aba correspondente
  openTab(event, tabName);
});