const mockData = [
    { id: 1, ownerId: 1, members: [2,3,4]},
    { id: 2, ownerId: 1, members: [2,3,4]}
];

const MockList = {
     findById(id) {
        console.log(mockData.find(item => item.id == id));
        return mockData.find(item => item.id == id);
    }
};

module.exports = MockList;
