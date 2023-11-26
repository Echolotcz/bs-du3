const List = require(`../models/list`);

const listController = {
    getAllLists: (req, res) => {
        res.send(`Logged as ` + req.user.name +  `, List of all Lists`);
    },

    getListById: (req, res) => {
        res.send(`List with ID ${req.params.listId}`);
    },

    createNewList: (req, res) => {
        res.send(`New list created`);
    },

    editList: (req, res) => {
        res.send(`Edited list with ID ${req.params.listId}`);
    },

    archiveList: (req, res) => {
        res.send(`Archived list with ID ${req.params.listId}`);
    },

    addItemToList: (req, res) => {
        res.send(`Added item to list with ID ${req.params.listId}`);
    },

    removeItemFromList: (req, res) => {
        res.send(`Removed item ID ${req.params.itemId} from list with ID ${req.params.listId}`);
    },

    editListMembers: (req, res) => {
        res.send(`Edited members of list with ID ${req.params.listId}`);
    },

    changeItemStatus: (req, res) => {
        res.send(`Changed status of item with ID ${req.params.itemId} in list ${req.params.listId}`);
    }
};

module.exports = listController;
