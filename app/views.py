from flask import render_template, jsonify, request
from app import app
from app import api
import json 
@app.route('/')
@app.route('/index')
def index():
    return render_template('index.html')
'''
@app.route('/echo/', methods=['GET'])
def echo():
    ret_data = {"value": request.args.get('echoValue')}
    return jsonify(ret_data)
'''

@app.route('/_viewTable')
def _viewTable():
    return  jsonify(retrieve = api.view())

@app.route('/_addTask')
def _addTask():
    task = str(request.args.get('task'))
    desc = str(request.args.get('desc'))
    date = str(request.args.get('date'))
    data = {"task": task, "desc": desc, "date": date}
    api.add(data)
    return jsonify(result = api.view())

@app.route('/_delete')
def _delete():
    taskID = str(request.args.get('taskID'))
    api.delete(taskID)
    return jsonify(result = api.view())

@app.route('/_edit')
def _edit():
    taskID = str(request.args.get('taskID'))
    task = str(request.args.get('task'))
    desc = str(request.args.get('desc'))
    date = request.args.get('date')
    data = {"id": taskID, "task": task, "desc" : desc, "date" : date}
    print type(taskID)
    result = api.edit(taskID)
    print type(result)
    # sanitized_res = json.loads(result)
    # print result['_id']
    # return result
    return json.dumps(result)

@app.route('/_update')
def _update():
    taskID = str(request.args.get('taskID'))
    task = str(request.args.get('task'))
    date = request.args.get('date')
    desc = str(request.args.get('desc'))    
    data = {"task": task, "desc" : desc, "date" : date}
    api.update(taskID,data)
    return jsonify(result = api.view())