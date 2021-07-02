import passport from 'passport'
import { Strategy, ExtractJwt } from 'passport-jwt'
import User from '../models/userModel.js'


var JwtStrategy = Strategy
var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = process.env.SECRET;

const pass = passport.use(new JwtStrategy(opts, async function (jwt_payload, done) {
    console.log(jwt_payload)
    await User.findOne({ id: jwt_payload.sub }, function (err, user) {
        if (err) {
            return done(err, false);
        }
        if (user) {
            return done(null, user);
        } else {
            return done(null, false);
            // or you could create a new account
        }
    }).select('-password -isAdmin');
}));

export default pass