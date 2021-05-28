var models = require("../../models/patientRegistrationModels")
exports.NotifyPage = (req, res) => {
    res.render("notification.ejs", { started: "app is runing" })
}

exports.createNotification = async (req, res) => {
    var { creator_name, contact_number, date, email, hospital, city, case_report } = req.body
    try {
        var created = await models.Notification.create({
            creator_name, 
            contact_number, 
            date, 
            email, 
            hospital, 
            city,
            case_report
        });
        res.status(201).json({ created })
    } catch (e) {
    }
}

exports.getOneNotification = (req, res) => {
    console.log(req.params.id)
}
module.exports = exports;