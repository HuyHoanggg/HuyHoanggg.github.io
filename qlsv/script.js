const idPrefix = "student-";

$(() => {
  renderStudents();
});

function renderStudents() {
  // Bật loading ...

  // Bắt đầu gọi request lên server để lấy danh sách học viên
  $.ajax({
    method: "GET",
    url: "https://studentlist2020.herokuapp.com/users",
  }).done(function (data) {
    // Đã thực hiện xong request

    // Tắt loading ...

    // Render giao diện dựa vào data lấy được
    let content = "";

    for (let i = 0; i < data.length; i++) {
      content += `<tr>
                      <td>${data[i].name}</td>
                      <td>${data[i].year}</td>
                      <td>${data[i].email}</td>
                      <td>${data[i].phone}</td>
                      <td>
                        <a href="#" class="edit"><i class="fas fa-edit"> Chỉnh sửa</i></a> |
                        <a href="#" class="delete" id="${idPrefix}${data[i].id}" onclick="deleteStudent(${data[i].id})"><i class="fas fa-trash-alt"> Xóa</i></a>
                      </td>
                </tr>`;
    }

    $("#content").html(content);

    // Cách 1: Thêm sự kiện xóa student
    // addEventDeleteStudent();
  });
}

function addEventDeleteStudent() {
  let deleteArrayButton = $(".delete");

  for (let i = 0; i < deleteArrayButton.length; i++) {
    $(deleteArrayButton[i]).click(function () {
      console.log("click");
      $.ajax({
        method: "DELETE",
        url:
          "https://studentlist2020.herokuapp.com/users/" +
          `${deleteArrayButton[i].id.replace(idPrefix, "")}`,
      }).done(function (data) {
        // Sau khi xóa xong thì render lại giao diện
        renderStudents();
      });
    });
  }
}

// Cách 2: Dùng onclick trên HTML
function deleteStudent(id) {
  alert("Xoa student id = " + id);
}


function realDel(){
  
}