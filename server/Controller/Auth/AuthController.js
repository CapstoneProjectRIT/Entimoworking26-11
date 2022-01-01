const formidable=require('formidable')
const  userModel=require('../../Models/users/userSchema');
const userSession=require( '../../Models/userSession/userSession');
const questionModule=require('../../Models/Questions/Question');
const comment=require('../../Models/Comment/Comment');
const Bcrypt=require('bcrypt');
const dotenv=require('dotenv');
const { findOne } = require('../../Models/users/userSchema');
dotenv.config();

class AuthController{
  questionId;
    SignUp(req,res){
        const form =new formidable.IncomingForm();
        try{
            form.parse(req,async (error,fileds,files)=>{
                if(error)
                {
                   
                    return res.status(500).json({msg:"Network Error: Faild to register try again later"});
                }
                const { fullname, email, password, confirmpassword } = fileds;
                if (!fullname || !email || !password || !confirmpassword) {
                    return res.status(422).json({ error: "Please enter all the details" });
            
                }
                const userExist = await userModel.findOne({ email: email });
       
                if (userExist) {
                    return res.status(422).json({ error: "Email alredy exist" });
                }
                else if(password !== confirmpassword)
                {
                    return res.status(422).json({ error: "Password is not matching" });
                }
                const user = new userModel({fullname, email, password,confirmpassword });
        
                await user.save();
                return res.status(201).json({ error: "User register successfully" });
            })
        }
        catch (error)
        {
            return res.status(500).json({msg:"Server Error: Server is Currently Down try again later"});
        }
    }

EditProfile(req,res){
  const form =new formidable.IncomingForm();
  try{
      form.parse(req,async (error,fileds,files)=>{
          if(error)
          {
             
              return res.status(500).json({msg:"Network Error: Faild to register try again later"});
          }
          const { MobileNo, Occupation, Location, Achievement } = fileds;
         
         /* if (!MobileNo || !Occupation || !Location || !Achievement) {
              return res.status(422).json({ error: "Please enter all the details" });
      
          }*/
          /*const mobileExist = await userModel.findOne({ MobileNo: MobileNo });
 
          if (mobileExist) {
              return res.status(422).json({ error: "mobile alredy exist" });
          }*/
          
          const userSession=req.session.userSession||false;
        const owner=userSession.email;
        //const userLogin = await userModel.findOne({ email: owner });
          const updatedDoc = await userModel.findOneAndUpdate(
            {email:owner},
            {
              MobileNo:MobileNo,
              Occupation: Occupation,
              Location: Location,
              Achievement: Achievement
            },
            

            { new: true }
          );
          //const user = new userModel({MobileNo, Occupation, Location,Achievement });
  
          //await user.save();
          return res.status(201).json({ error: "User Profile Edit successfully" });
      })
  }
  catch (error)
  {
      return res.status(500).json({msg:"Server Error: Server is Currently Down try again later"});
  }
}
    Login(req,res){
        const form =new formidable.IncomingForm();
        try{
            form.parse(req, async (error,fileds,files)=>{
                if(error)
                {
                    console.log(error);
                    return res.status(500).json({msg:"Network Error: Faild to Login try again later"});
                }
                const { email, password } = fileds;

        if (!email || !password) {
            return res.status(400).json({ msg: "Can't be empty" })
        }
        const userLogin = await userModel.findOne({ email: email });
        if (!userLogin) {
            return res.status(400).json({ msg: "Invalid Credential" });
        }
            const isMatch = await Bcrypt.compareSync(password, userLogin.password);
            if (!isMatch) {
                return res.status(400).json({ msg: "Invalid Credential" });
            }
            // else {
            //     return res.json({ msg: "User SignIn Successfully" });

            // }
        
        
        const isUserSessionAvailable=await userSession.findOne({'session.user.email':email});
        
        if(isUserSessionAvailable)
        {
            return res.status(200).json({ error: "Already SignIn" });
        }
       const name=userLogin.fullname;
        
        req.session.userSession={email:userLogin.email,id:userLogin._id,name:name}
        res.status(200).send(req.sessionID);
    
    })
}catch (error)
{
    return res.status(500).json({msg:"Server Error: Server is Currently Down try again later"});
}
}
isLoggedIn(req,res){
 //   console.log(req);
    const userSession=req.session||false;
    try {
        if(userSession)
        {
            return res.status(200).json({auth_status:true});
        }
        return res.status(200).json({auth_status:false});
    } catch (error) {
        return res.status(500,{msg:"Server Error: Server is Currently Down try again later"});
    }
}
askQustion(req,res)
{
    const form=new formidable.IncomingForm();
   
    try {
        form.parse(req,async (error,fields,files)=>{
            
            if(error)
            {
                
                return res.status(400).json({msg:"Network Error: Don't ask your Question"});
            }
           
            const {question}=fields
            if(!question)
            {
                
                return res.status(400).json({error:"A question has to be asked"});
            }
            const {Location}=fields
            if(!Location)
            {
                return res.status(400).json({error:"A Location has to provide"});
            }

            const {Topic}=fields
            if(!Topic)
            {
                return res.status(400).json({error:"Topic needs to be choice"});
            }
           
            const userSession=req.session.userSession||false;
           
            if(userSession)
            {
                
                const owner=userSession.email;
                const id=userSession.id.toString();
                const name=userSession.name;
                const newquestion=new questionModule({
                    owner:owner,
                    name:name,
                    question:question,
                    Location:Location,
                    Topic:Topic,
                    date:new Date()
                })
              
                const SavedQuestion=await newquestion.save();
                
                return res.status(200).json({error:"Qustion Asked"});
            }
            
        })
    } catch (error) {
        
        return res.status(500).json({msg:"Network Error: Faild to register try again later"});
    }
}
async GetAllQuestions(request, response) {
   
    try {
      const data = await questionModule.find().sort({date:-1});
      
      return response.status(200).json(data);
    } catch (error) {
      return response
        .status(500)
        .json({ msg: "Server currently down please try again later" });
    }
  }
  async GetAllAboutUs(request, response) {
   
    try {
      const userSession=request.session.userSession||false;
        const owner=userSession.email;
        const userLogin = await userModel.findOne({ email: owner });
      
      
      return response.status(200).json(userLogin);
        
    } catch (error) {
      return response
        .status(500)
        .json({ msg: "Server currently down please try again later" });
    }
  }
  async GetMyAllTasks(request, response) {
   
    try {
      const userSession=request.session.userSession||false;
        const owner=userSession.email;
        const data = await questionModule.find({ owner: owner }).sort({date:-1});;
        
  
      return response.status(200).json(data);
        
    } catch (error) {
      return response
        .status(500)
        .json({ msg: "Server currently down please try again later" });
    }
  }
  
  async GetEducationTasks(request, response) {
   
    try {
      
        const data = await questionModule.find({ Topic:'Education' }).sort({date:-1});;
      
      
      return response.status(200).json(data);
        
    } catch (error) {
      return response
        .status(500)
        .json({ msg: "Server currently down please try again later" });
    }
  }
  async GetWeatherTasks(request, response) {
   
    try {
      
        const data = await questionModule.find({ Topic: "Weather" }).sort({date:-1});;
      
      
      return response.status(200).json(data);
        
    } catch (error) {
      return response
        .status(500)
        .json({ msg: "Server currently down please try again later" });
    }
  }
  async GetNutritionTasks(request, response) {
   
    try {
      
        const data = await questionModule.find({ Topic: "Nutrition" }).sort({date:-1});;
      
      
      return response.status(200).json(data);
        
    } catch (error) {
      return response
        .status(500)
        .json({ msg: "Server currently down please try again later" });
    }
  }
  async GetTechnologyTasks(request, response) {
   
    try {
      
        const data = await questionModule.find({ Topic: "Technology" }).sort({date:-1});;
      
      
      return response.status(200).json(data);
        
    } catch (error) {
      return response
        .status(500)
        .json({ msg: "Server currently down please try again later" });
    }
  }
  async GetSocialTasks(request, response) {
   
    try {
      
        const data = await questionModule.find({ Topic: "Social" }).sort({date:-1});;
      
      
      return response.status(200).json(data);
        
    } catch (error) {
      return response
        .status(500)
        .json({ msg: "Server currently down please try again later" });
    }
  }
  async GetBookTasks(request, response) {
   
    try {
      
        const data = await questionModule.find({ Topic: "Book" }).sort({date:-1});;
      
      
      return response.status(200).json(data);
        
    } catch (error) {
      return response
        .status(500)
        .json({ msg: "Server currently down please try again later" });
    }
  }
  async GetTrendingTasks(request, response) {
   
    try {
      
        const data = await questionModule.find({}).sort({upvotes:-1});
      
      
      return response.status(200).json(data);
        
    } catch (error) {
      return response
        .status(500)
        .json({ msg: "Server currently down please try again later" });
    }
  }
  Like(request, response) {
    const form = new formidable.IncomingForm();

    try {
      form.parse(request, async (error, fields, files) => {
        if (error) {
          return response
            .status(500)
            .json({ msg: "Network Error: Failed to like question" });
        }

        const { id } = fields;

        const question = await questionModule.findOne({ _id: id });

        question.upvotes += 1;

        const updatedDoc = await questionModule.findOneAndUpdate(
          { _id: id },
          question,
          { new: true }
        );

        return response.status(200).json({ msg: "Liked" });
      });
    } catch (error) {
      return response
        .status(500)
        .json({ msg: "Server currently down please try again later" });
    }
  }
  Dislike(request, response) {
    const form = new formidable.IncomingForm();

    try {
      form.parse(request, async (error, fields, files) => {
        if (error) {
          return response
            .status(500)
            .json({ msg: "Network Error: Failed to like question" });
        }

        const { id } = fields;

        const question = await questionModule.findOne({ _id: id });

        question.downvotes += 1;
//console.log(id);
        const updatedDoc = await questionModule.findOneAndUpdate(
          { _id: id },
          question,
          
          { new: true }
        );

        return response.status(200).json({ msg: "DisLiked" });
      });
    } catch (error) {
      return response
        .status(500)
        .json({ msg: "Server currently down please try again later" });
    }
  }
  
  GetQuestionId(request,response)
  {
    const form = new formidable.IncomingForm();

    try {
      form.parse(request, async (error, fields, files) => {
        if (error) {
          return response
            .status(500)
            .json({ msg: "Network Error: Failed to like question" });
        }

        const { id } = fields;
      
        this.questionId=id;
        //return this.id;
      });
    }
        catch (error) {
      return response
        .status(500)
        .json({ msg: "Server currently down please try again later" });
    }
  }
Comment(request,response)
{
    const form = new formidable.IncomingForm();

    try {
      form.parse(request, async (error, fields, files) => {
        if (error) {
          return response
            .status(500)
            .json({ msg: "Network Error: Failed to like question" });
        }
        const userSession=request.session.userSession||false;
        const owner=userSession.email;
        const userLogin = await userModel.findOne({ email: owner });
        

        if(userSession)
        {
            
           
            
        
        
        const name=userLogin.fullname;
        const email=userLogin.email;
        const {comment}=fields;
        if(!comment)
        {
            
            return response.status(400).json({error:"A comment not post"});
        }
      
    
    // authController=new AuthController();
    //const id=.GetQuestionId();
   
        const updatedDoc = await questionModule.findOneAndUpdate(
        {_id:this.questionId},
       {
         $push:{
           comments:{         
           name:name,
           comment:comment
           }
         }
       }
        );
      //   const newcomment=new Comment({
      //     owner:owner,
      //     comment:comment,
          
         
      // })
    
     // const SavedQuestion=await newcomment.save();
        return response.status(200).json({ error: "Comment Posted" });
        }
      });
    } catch (error) {
      return response
        .status(500)
        .json({ msg: "Server currently down please try again later" });
    }
}
async GetAllComments(request, response) {
   
  try {
    const userSession=request.session.userSession||false;
    const name=userSession.name;
  
      const data = await questionModule.find({name:name});
 
    return response.status(200).json(data);
      
  } catch (error) {
    return response
      .status(500)
      .json({ msg: "Server currently down please try again later" });
  }
}

}


module.exports=AuthController