let inspections = [];

// GET inspections
const getInspections = (req, res) => {
    res.json(inspections);
};

// POST inspection
const addInspection = (req, res) => {

    const {
        buildingName,
        cracks,
        leakage,
        electricalDamage
    } = req.body;

    if (!buildingName) {
        return res.status(400).json({
            message: "Building name required"
        });
    }

    let issues = 0;

    if (cracks) issues++;
    if (leakage) issues++;
    if (electricalDamage) issues++;

    let safetyLevel = "Safe";

    if (issues === 1) {
        safetyLevel = "Moderate Risk";
    }

    if (issues >= 2) {
        safetyLevel = "High Risk";
    }

    const newInspection = {
        id: inspections.length + 1,
        buildingName,
        cracks,
        leakage,
        electricalDamage,
        safetyLevel
    };

    inspections.push(newInspection);

    res.json({
        message: "Inspection Added Successfully",
        inspection: newInspection
    });
};

module.exports = {
    getInspections,
    addInspection
};