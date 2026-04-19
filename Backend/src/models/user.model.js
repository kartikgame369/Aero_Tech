import mongoose from 'mongoose';
import validator from 'validator';

const userSchema = new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        minlength:4,
        maxlength:20

    },
    lastName:{
        type:String,
        trim:true
    },
    emailId:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('Invalid email address');
            }
        }
    },
    password:{
        type:String,
        required:true,
        validate(value){
            if(!validator.isStrongPassword(value)){
                throw new Error('Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one number, and one symbol');
            }
        }
    },
    photoUrl:{
        type:String,
    }
});

userSchema.methods.getJwt= async function () {
    const user = this;

    const token = jwt.sign({ _id: user._id.toString() }, process.env.JWT_SECRET, { expiresIn: '1h' });
    return token;
};

userSchema.methods.validatepassword = async function (passwordInputByUser){
    const user = this ;
    const passwordhash = user.password;

    const isPasswordValid = await bcrypt.compare(passwordInputByUser, passwordhash);
    return isPasswordValid;
};

const User = mongoose.model('User', userSchema);

export default User;    
