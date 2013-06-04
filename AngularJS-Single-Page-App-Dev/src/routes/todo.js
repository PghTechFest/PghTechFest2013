/**
 * Created with JetBrains WebStorm.
 * User: Ben
 * Date: 5/19/13
 * Time: 1:17 PM
 * To change this template use File | Settings | File Templates.
 */
var __ = require('underscore');
var todoData = require('data/todoData');

function jsonResponse(obj, res) {
    if(obj) {
        res.write(JSON.stringify(obj));
    }
    res.end();
}

var todos = [{
    id: 1,
    title: 'First Todo',
    description: 'You should really add your first todo.',
    due: new Date(),
    done: null
}];

exports.getAll = function(req, res) {
    jsonResponse(todoData.getAll(), res);
};

exports.getById = function(req, res) {
    var id = req.params.id;
    jsonResponse(todoData.getById(id), res);
};

exports.save = function(req, res) {
   var todo = req.body;
   jsonResponse(todoData.save(todo), res);
}

exports.insert = function (req, res) {
    var todo = req.body;
    jsonResponse(todoData.insert(todo), res);
};

exports.update = function(req, res) {
    var todo = req.body;
    jsonResponse(todoData.update(todo), res);
};

exports.delete  = function(req, res) {
    var id = req.params.id;
    jsonResponse(todoData.delete(id));
};