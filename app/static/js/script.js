function addTask() {
    if (!validate()) return;
    $.getJSON('/_addTask',{task: $('input[name = "task"]').val(), desc: $('input[name = "desc"]').val(), date: $('input[name = "date"]').val()}, function(data){
        $("#result").text(data.result);
      })     
    location.reload();
    }

function viewTable(){
    $.getJSON('/_viewTable',{},function (data){
		//return data.retrieve[0][1]
    	//console.log(data.retrieve[0]['id']);
    	$.each(data.retrieve, function(key,value) {
            $("ol").append("<br>Task: " + data.retrieve[key]['task'] +
                "</br>Description: " + data.retrieve[key]['desc'] + 
                "</br>Date: " + data.retrieve[key]['date'] + 
                "</br><input type = 'button' class='btnDel' name = 'btnDelete' onclick='deleteTask(this.id)' value = 'Delete' id = "+data.retrieve[key]['id']+" >" +
                "&nbsp&nbsp&nbsp <input type = 'button' class='btnEdit' name = 'btnEdit' onclick='editTask(this.id)' value = 'Edit' id = "+data.retrieve[key]['id']+" >" +              
                "</br>");
        });
    	
      });
	} 

function deleteTask(id) {
		$.getJSON('/_delete',{taskID:id}, function(data){
		});
	location.reload();
	}

var $task = $('#taskEdit');
var $desc = $('#descEdit');
var $date = $('#dateEdit');
function editTask(id){
    console.log(id);
    $.getJSON('/_edit',{taskID:id}, function(data){
        $("#Edit").text(data.result);
        //$.each(data.result, function(key,value) {
            $("ol").append("<br>Task: <br/> <input type = 'textarea' class='inputstyle' id='editTask' name = 'editTask' value = "+ data['task'] +" >" +
                "</br>Description: <br/> <input type = 'textarea' id='editDesc' class='inputstyle' name = 'editDesc' value = "+ data['desc'] +" >" +
                "</br>Date: <br/> <input type = 'date' id='editDate' name = 'editDate' class='inputstyle' value = "+ data['date'] +" >" +
                "</br><br/><input type = 'button' class='btnEdit' name = 'btnUpdate' onclick='updateTask(this.id)' value = 'Update' id = "+ data['_id'] +" >" +
                "</br>");
        //});
        // $("body").append("<br>Task: <input type = 'textarea' name = 'editTask' value = " + data.result[id].task +" >" +
  //            "</br>Description: <input type = 'textarea' name = 'editDesc' value = " + data.result[id].desc +" >" +
  //                "</br>Date: <input type = 'date' name = 'editDate' value = " + data.result[id].date +" >" +
  //                "</br><input type = 'button' name = 'btnDelete' onclick='updateTask(this.id)' value = 'Update' id = "+data.result[key]['id']+" >" +
  //                "</br>");
        });
    }

function updateTask(id){
    console.log(id);
    $.getJSON('/_update',{taskID: id, task: $('input[name = "editTask"]').val(), desc: $('input[name = "editDesc"]').val(), date: $('input[name = "editDate"]').val()}, function(data){
      });
    location.reload();
    }
    
function validate() {
    var x = $('input[name = "task"]').val();
    if (x == null || x == "" || /[^a-zA-Z0-9\d\s/]+$/.test(x) ) {
        alert("Task must be filled out");
        return false;
    }
    return true;
}