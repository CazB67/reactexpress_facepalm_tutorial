const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

const userSchema = new Schema(
    {
        name: { type: String, required: true },
        email: { type: String, required: true },
        password: { type: String, required: true },
    },
    { timestamps: true }
);

/**
 * Password hash middleware.
 */
userSchema.pre("save", async function save(next) {
    const user = this;
    if (!user.isModified("password")) {
        return next();
    }

    // register
    // enter password
    // go thru bcrypt
    // bcrypt adds salt
    // adawdwdwadaw


    // login
    // enter passsword
    // bcrypt => add salt to entered password
    // encrypt
    // compare if same as db record

    // bcrypt('secret')  // dowapodawd    == > secret
    // bcrypt('secret+23132')  // dwadwaweqew12e


    bcrypt
        .genSalt(10, (err, salt) => {})
        .then((salt) => {
            return bcrypt.hash(user.password, salt);
        })
        .then((hash) => {
            user.password = hash;
            next();
        })
        .catch((err) => {
            return next(err);
        });
});

/**
 * Helper method for validating user's password.
 */
userSchema.methods.comparePassword = function comparePassword(
    candidatePassword,
    cb
) {
    bcrypt.compare(candidatePassword, this.password, (err, isMatch) => {
        cb(err, isMatch);
    });
};

const User = mongoose.model("User", userSchema);

module.exports = User;
