function inCludeHTML() {
  let allTag, ele, file, xhttp;

  allTag = document.getElementsByTagName('*');

  for (let i = 0; i < allTag.length; i++) {
    ele = allTag[i];
    file = ele.getAttribute('data-include');

    if (file) {
      xhttp = new XMLHttpRequest();
      xhttp.onreadystatechange = function () {
        if (this.readyState == 4) {
          if (this.status == 200) {
            ele.innerHTML = this.responseText;
          }
          if (this.status == 404) {
            ele.innerHTML = 'Page not found.';
          }
          ele.removeAttribute('data-include');
          inCludeHTML();
        }
      };
      xhttp.open('GET', file, true);
      xhttp.send();
      return;
    }
  }
}

window.addEventListener('DOMContentLoaded', () => {
  inCludeHTML();
});
