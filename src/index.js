const { request } = require("express");
const express = require("express");
const cors = require("cors");
const userController = require("./controller/user");
const blogController = require("./controller/blog");
const authController = require("./controller/auth");
const passport = require("passport");
const db = require("./db/index");

const { SIGNING_KEY, sanitizeUser } = require("./utility");
const JwtStrategy = require("passport-jwt").Strategy,
  ExtractJwt = require("passport-jwt").ExtractJwt;

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = SIGNING_KEY;
const app = express();
const PORT = 9000;
passport.use(
  new JwtStrategy(opts, async function (payload, done) {
    const user = await db.sequelize.models.users.findOne({ where: { id: payload.id } });

    if (!user) {
      done(null, false);
    }
    done(null, sanitizeUser(user))
  })
);
app.use(express.json());
app.use(express.urlencoded());
app.use(passport.initialize());
app.use(cors());

userController.Init(app);
blogController.Init(app);
authController.Init(app);

db.init().then(console.log).catch(console.log);

app.get('localhost:9000/blogs',function(request,response,next){
  console.log('Connected with CORS');
  response.json({message:"Connected"});
});
app.use(express.static(__dirname))
app.use((req, res, next) => {
  res.set('Access-Control-Allow-Origin', '*')
  next()
})
app.listen(PORT, function () {
  console.log(`Your app is running on PORT - ${PORT}`);
});
