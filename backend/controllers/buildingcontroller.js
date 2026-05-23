let buildings = [
    {
        id: 1,
        name: "Civil Block",
        location: "Campus",
        floors: 3,
        year: 2018
    }
];

// GET all buildings
const getBuildings = (req, res) => {
    res.json(buildings);
};

// POST building
const addBuilding = (req, res) => {

    const newBuilding = {
        id: buildings.length + 1,
        name: req.body.name,
        location: req.body.location,
        floors: req.body.floors,
        year: req.body.year
    };

    buildings.push(newBuilding);

    res.json({
        message: "Building Added Successfully",
        building: newBuilding
    });
};

module.exports = {
    getBuildings,
    addBuilding
};