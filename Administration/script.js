function renderStudents(){
    $.ajax({
    method: "GET",
    url: "https://ohsehun.herokuapp.com/users"
    })
    .done(function( data ) {
        let list = '';

        for (let i = 0; i < data.length; i++) {
            list += `<tr><td> ${data[i].name}</td>
                        <td>${data[i].birthday}</td>
                        <td>${data[i].email}</td>
                        <td>${data[i].phone}</td>
                        <td>
                            <ul class="list-inline m-0 text-center">
                                <li class="list-inline-item">
                                    <button id="edit" class="btn btn-primary btn-sm" type="button" title="Chỉnh sửa"><i
                                    class="fa fa-edit"></i><span class="res"> Chỉnh sửa</span></button>
                                </li>
                                <li class="list-inline-item">
                                    <button id="${data[i].id}" onclick="delStudent(${data[i].id})" class="btn btn-danger btn-sm" type="button" title="Xóa"><i
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
    $.ajax({
        method: "DELETE",
        url: `https://ohsehun.herokuapp.com/users/${id}`,
    })
    .done(function(){
        $('this').remove();
    })
    location.href = "index.html";
}

