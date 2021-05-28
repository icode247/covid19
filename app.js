require("dotenv").config()
const notificationsRoutes = require("./routes/patientRegistrationRoutes/notificationsRoutes");
const patientRoutes = require("./routes/patientRegistrationRoutes/patientInfoRoutes");
const contactExposureRoutes = require("./routes/patientRegistrationRoutes/contactExposureRoutes")
const chestImageRoutes = require("./routes/chestImageRouter/chestImageRouter")
var { patientInfo } = require("./models/patientRegistrationModels");
const symptomsRoutes = require("./routes/symptomsRouter/symptoms")
const cbcTestRoutes = require("./routes/cbcTestRoutes/cbcTest")
const bodyParser = require("body-parser");
var chestImageModel = require("./models/patientDiagnosisModels");
const { upload } = require("./config/multer.config")
const express = require("express");
const fs = require("fs")
const path = require("path")
const passport = require("passport");
const session = require('express-session');
var flash = require("express-flash");
var initpassport = require("./controllers/authenticateController/authenticatecontrollers")
initpassport.initializePassportAuthentication(passport)
const app = express();
// const auth = require('./controllers/authenticateController/authenticatecontrollers')
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname + "/public")))


//CONFIGURE PASSPORT
app.use(session({
    secret : process.env.SECRET_TOKEN,
    saveUninitialized:false,
    resave:false
}))
app.use(flash())
app.use(passport.initialize());
app.use(passport.session());
app.use(require("./routes/authRoutes/authRoute"))
//end of passport //
app.use("/notification", notificationsRoutes)
app.use("/patient", patientRoutes)
app.use("/notification", notificationsRoutes)
app.use("/exposure", contactExposureRoutes)
app.use("/clinical", chestImageRoutes);
app.use("/symptoms", symptomsRoutes);
app.use("/", cbcTestRoutes)

app.post("/chest", upload.single('image'), async (req, res, next) => {
    var ID = req.body.id
    var obj = {
        caseReports: req.body.caseReports,
        recomendation: req.body.recomendation,
        img: {
            data: fs.readFileSync(path.join(__dirname + '/uploads/' + req.file.filename)),
            contentType: 'image/' + path.extname(req.file.filename).replace('.', '')
        }
    }
    try {
        var patient = await patientInfo.findOne({ _id: ID })
        var created = await chestImageModel.chestImage.create(obj)
        patient.chestImage.push(created)
        patient.save()
        res.redirect(`/test?patient_id=${ID}`)
    } catch (e) {
        console.log(e)
    }
})

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Sever started at ${PORT}`)
})