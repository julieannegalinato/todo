import pymongo
from pymongo import MongoClient
from bson import ObjectId, json_util
from flask import jsonify

# #client = MongoClient()
# client = MongoClient('mlab://michaelgo:abc123@ds161505.mlab.com:61505/db_todolist')
# db = client.db_todolist
# #print posts.find_one({"text":"search for book if available"})
# retrieve = db.mylist

client = MongoClient('ds161505.mlab.com',61505)
client.db_todolist.authenticate('julieannemg','Jmg1248.')
db = client.db_todolist
retrieve = db.mylist

def add(data):
	retrieve.insert_one(data)

def view():
	retrieved = []
	viewdata = [] 
	#tasknum = 0
	for document in retrieve.find():
	    #tasknum += 1
	    retrieved.append({'id' : str(document["_id"]), 'task' : str(document["task"]), 'desc' : str(document["desc"]), 'date' : str(document["date"])})		
	viewdata = retrieved	
	return (viewdata)

def delete(taskID):
	#vartostring = str(taskID)
	#vardelete = "{'_id': ObjectID('" + vartostring +"')}"
	#output = []
	#for collect in retrive.find():
	retrieve.remove({'_id': ObjectId(''+taskID+'')})

def update(taskID,data):
	print taskID
	print str(data)
	retrieve.update_one({'_id': ObjectId(taskID)},{'$set':data})

def edit(taskID):
	print type(taskID)
	# retrieved = []
	# viewdata = [] 
	# for document in retrieve.find_one({'_id': ObjectId(''+taskID+'')}):
	#     retrieved.append({'id' : str(document["_id"]), 'task' : str(document["task"]), 'desc' : str(document["desc"]), 'date' : str(document["date"])})		
	# viewdata = retrieved	
	# return (viewdata)
	retrieved = []
	viewdata = {}
	#tasknum = 0
	# for document in retrieve.find():
	#     #tasknum += 1
	#     retrieved.append({'id' : str(document["_id"]), 'task' : str(document["task"]), 'desc' : str(document["desc"]), 'date' : str(document["date"])})		
	# viewdata = retrieved	
	# return (viewdata)
	print ObjectId(taskID)
	viewdata = retrieve.find_one({'_id': ObjectId(taskID)})
	# ObjectID is not JSON serializable, attempt to force taskID value to _id
	# for jQUery/AJAX/HTML retrieval
	viewdata['_id'] = taskID
	return viewdata
