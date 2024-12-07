var BookmarkName = document.getElementById('BookmarkName');
var WebsiteURL = document.getElementById('WebsiteURL');
var submitBtn = document.getElementById('submitBtn');
var empList = [];
if (localStorage.getItem('prodect') == null) {
  empList = [];
} else {
  empList = JSON.parse(localStorage.getItem('prodect'))
  display();
}

submitBtn.addEventListener("click", function () {
  addEmployee();
});

function addEmployee() {
  if (cheackName(BookmarkName) && cheackName(WebsiteURL)) {
    var emp = {
      name: BookmarkName.value,
      url: WebsiteURL.value
    }
    empList.push(emp);
    display();
    localStorage.setItem('prodect', JSON.stringify(empList));
    clear();
  } else {
    alert("Please enter valid data.");
  }
}

function clear() {
  BookmarkName.value = null;
  WebsiteURL.value = null;
}

function display() {
  var cartona = '';
  for (var i = 0; i < empList.length; i++) {
    cartona += `<tr>
          <td>${i + 1}</td>
          <td>${empList[i].name}</td>
          <td>
              <a href="${empList[i].url}" target="_blank" class="btn btn-info">
                  <i class="fa-solid fa-eye pe-2"></i><span>Visit</span>
              </a>
          </td>
          <td>
              <button class="btn btn-danger " onclick="deleteEmp(${i})">
                  <i class="fa-solid fa-trash-can-arrow-up pe-2"></i><span>Delete</span>
              </button>
          </td>
      </tr>`;
  }
  document.getElementById('tbody').innerHTML = cartona;
}

function addEmployee() {
  if (cheackName(BookmarkName) && cheackName(WebsiteURL)) {
    var emp = {
      name: BookmarkName.value,
      url: WebsiteURL.value
    }
    empList.push(emp);
    display();
    localStorage.setItem('prodect', JSON.stringify(empList));
    clear();
  } else {
    showModal();
  }
}


function deleteEmp(id) {
  empList.splice(id, 1);
  display();
  localStorage.setItem('prodect', JSON.stringify(empList));
}


function showModal() {
  var modal = document.getElementById('errorModal');
  var closeBtn = document.getElementsByClassName('close-btn')[0];
  modal.style.display = 'flex';
  closeBtn.onclick = function() {
    modal.style.display = 'none';
  };

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = 'none';
    }
  };
}


function cheackName(tern) {
  if (tern.value.trim() === "") {
    tern.classList.remove('is-valid', 'is-invalid');
    return false;
  }

  var regex = {
    BookmarkName: /^[A-Za-z ]{3,30}$/,
    WebsiteURL: /^(https?:\/\/)?(w{3}\.)?\w+\.\w{2,}\/?(:\d{2,5})?(\/\w+)*$/
  };

  if (regex[tern.id].test(tern.value)) {
    tern.classList.add('is-valid');
    tern.classList.remove('is-invalid');
    return true;
  } else {
    tern.classList.remove('is-valid');
    tern.classList.add('is-invalid');
    return false;
  }
}
























