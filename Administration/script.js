$(() => {
    renderStudents();
});

function renderStudents(){

    $('.load').css('display','block');

    $.ajax({
    method: "GET",
    url: "https://ohsehun.herokuapp.com/users"
    })
    .done(function( data ) {

        $('.load').css('display','none');

        let list = '';

        for (let i = 0; i < data.length; i++) {
            list += `<tr><td id="name${data[i].id}" contenteditable> ${data[i].name}</td>
                        <td id="dob${data[i].id}" contenteditable>${data[i].birthday}</td>
                        <td id="email${data[i].id}" contenteditable>${data[i].email}</td>
                        <td id="phone${data[i].id}" contenteditable>${data[i].phone}</td>
                        <td>
                            <ul class="list-inline m-0 text-center">
                                <li class="list-inline-item">
                                    <button id="edit" onclick="editStudent(${data[i].id})" class="btn btn-primary btn-sm" type="button" title="Chỉnh sửa"><i
                                    class="fa fa-edit"></i><span class="res"> Chỉnh sửa</span></button>
                                </li>
                                <li class="list-inline-item">
                                    <button onclick="delStudent(${data[i].id})" class="btn btn-danger btn-sm" type="button" title="Xóa"><i
                                    class="fa fa-trash"></i><span class="res"> Xóa</span></button>
                                </li>
                            </ul>
                        </td>
                        </tr>`;
        }

    $('tbody').html(list);
    });
}
    
function delStudent(id){
    let res = confirm("Bạn có thực sự muốn xóa học viên này không?")
    if(res == true){
        $.ajax({
            method: "DELETE",
            url: `https://ohsehun.herokuapp.com/users/${id}`,
        })
        .done(function(){
            $(this).remove();
            window.location.href = "index.html";
        })
    }
}


function editStudent(id){
    let res = confirm("Bạn có muốn lưu thông tin đã thay đổi không?")
    if(res == true){
        $.ajax({
            method: "PUT",
            url: `https://ohsehun.herokuapp.com/users/${id}`,
            data: {
                name: $(`#name${id}`).html(),
                birthday: $(`#dob${id}`).html(),
                email: $(`#email${id}`).html(),
                phone: $(`#phone${id}`).html(),
            }
        });
        alert("Chỉnh sửa thành công!")
        renderStudents();
    }
    else{
        renderStudents();
    }
}


$('#save').click(function(){
    if($('#name').val() == '' || $('#email').val() == '' || $('#phone').val()==''){
      $('#validate').html('Hãy điền đầy đủ thông tin!');
    }
    else{
    $.ajax({
      method:"POST",
      url: "https://ohsehun.herokuapp.com/users",
      data: {
        name: $('#name').val(),
        birthday: $('#dob').val(),
        email: $('#email').val(),
        phone: $('#phone').val()
      },
    })
    .done(function(){
      alert('Thêm học viên thành công!')
      window.location.href = 'index.html';
    })
    // window.location.href = 'index.html';
    // $(location).attr("href", "index.html")
    // window.location.replace("index.html");
  }
})
