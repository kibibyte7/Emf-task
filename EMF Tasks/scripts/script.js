$(document).ready(function () {
    // Récupère les listes de chaque colonne
    var todoList = document.getElementById('todo-list');
    var inprogressList = document.getElementById('inprogress-list');
    var doneList = document.getElementById('done-list');

    // Initialise la bibliothèque "SortableJS" pour chaque liste
    new Sortable(todoList, {
        group: 'task-lists',
        ghostClass: 'dragging',
        onEnd: function (evt) {
            //Mettre à jour la base de données

        }
    });

    new Sortable(inprogressList, {
        group: 'task-lists',
        ghostClass: 'dragging',
        onEnd: function (evt) {
            //Mettre à jour la base de données

        }
    });

    new Sortable(doneList, {
        group: 'task-lists',
        ghostClass: 'dragging',
        onEnd: function (evt) {
            //Mettre à jour la base de données
            
        }
    });
});