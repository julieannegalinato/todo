function addTask() {
    if (!validate()) return;
    $.getJSON('/_addTask',{task: $('input[name = "task"]').val(), desc: $('input[name = "desc"]').val(), date: $('input[name = "date"]').val()}, function(data){
        $("#result").text(data.result);
      })

    location.reload()
    }

function viewTable(){
    $.getJSON('/_viewTable',{},function (data){
		//return data.retrieve[0][1]
    	//console.log(data.retrieve[0]['id']);
    	$.each(data.retrieve, function(key,value) {
    		$("body").append("<br>Task: " + data.retrieve[key]['task'] +
    			"</br>Description: " + data.retrieve[key]['desc'] + 
    			"</br>Date: " + data.retrieve[key]['date'] + 
    			"</br><input type = 'button' name = 'btnDelete' onclick='deleteTask(this.id)' value = 'Delete' id = "+data.retrieve[key]['id']+" >" +
    			"&nbsp&nbsp&nbsp <input type = 'button' name = 'btnEdit' onclick='editTask(this.id)' value = 'Edit' id = "+data.retrieve[key]['id']+" >" +   			
    			"</br>");
    	});
    	// console.log(data[0]['id']);
    	//$("#retrieve").text(data.retrieve);
      });
	} 

function deleteTask(id) {
		$.getJSON('/_delete',{taskID:id}, function(data){
		});
	location.reload();
	}

var $task = $('#taskEdit');
var $desc = $('#descEdiT');
var $date = $('#dateEdit');
function editTask(id){
	console.log(id);
	$.getJSON('/_edit',{taskID:id}, function(data){
		$("#Edit").text(data.result);
		//$.each(data.result, function(key,value) {
    		$("body").append("<br>Task: <input type = 'textarea' id='editTask' name = 'editTask' value = "+ data['task'] +" >" +
    			"</br>Description: <input type = 'textarea' id='editDesc' name = 'editDesc' value = "+ data['desc'] +" >" +
    			"</br>Date: <input type = 'date' id='editDate' name = 'editDate' value = "+ data['date'] +" >" +
    			"</br><input type = 'button' name = 'btnUpdate' onclick='updateTask(this.id)' value = 'Update' id = "+ data['_id'] +" >" +
    			"</br>");
		//});
		// $("body").append("<br>Task: <input type = 'textarea' name = 'editTask' value = " + data.result[id].task +" >" +
  //   			"</br>Description: <input type = 'textarea' name = 'editDesc' value = " + data.result[id].desc +" >" +
  //    			"</br>Date: <input type = 'date' name = 'editDate' value = " + data.result[id].date +" >" +
  //    			"</br><input type = 'button' name = 'btnDelete' onclick='updateTask(this.id)' value = 'Update' id = "+data.result[key]['id']+" >" +
  //    			"</br>");
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
    var y = $('input[name = "desc"]').val();
    var z = $('input[name = "date"]').val();
    if (x,y,z == null || x,y,z == "" || /[^a-zA-Z0-9\-\/]/.test(x,y) ) {
        alert("Please fill up the Task, Description, and Date");
        return false;
    }
    return true;
}
