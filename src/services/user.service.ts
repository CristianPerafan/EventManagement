import UserModel, {UserInput, UserDocument} from '../models/user.models'
import jwt from "jsonwebtoken";
class UserService{
    public async findAll() : Promise<UserDocument[]>{
        try{
            const users = await UserModel.find();
            return users;
        }catch(error){
            throw error;
        }
    }
    public async findByEmail(email:any):Promise<UserDocument | null>{
        try{
            const user = await UserModel.findOne({email});
            return user;
        }catch (error){
            throw error;
        }
    }

    public async create(userInput: UserInput): Promise<UserDocument>{
        try{
            const user = await UserModel.create(userInput);
            return user;
        }catch (error){
            throw error;
        }
    }

    public async updateById(id: any, userInput: UserInput): Promise<UserDocument | null>{
        try{
            const user = await UserModel.updateOne({_id: id}, userInput);
            const editeduser = await UserModel.findOne({email: userInput.email});
            return editeduser;
        }catch (error){
            throw error;
        }
    }

    public async findById(id: any): Promise<UserDocument | null>{
        try{
            const user = await UserModel.findById(id);
            return user;
        }catch(error){
            throw error
        }
    }

    public async delete(id : any): Promise<UserDocument | null>{
        try{
            const user= await UserModel.findOneAndDelete({_id: id});
            return user;
        }catch(error){
            throw error
        }
    }

    public generateToken(user: UserDocument) {
        try{
            return jwt.sign({user_id:user.id, email:user.email},
                process.env.JWT_SECRET || "secret",
                {expiresIn: "5m"});

        }catch(error){
            throw error;
        }
    }


}



export default new UserService();