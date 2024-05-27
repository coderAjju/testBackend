export const fromSubmit = async (req,res)=>{
        try {
            res.status(200).send("hello world this is home page");
        } catch (error) {
            res.send("error occured:",error)
        }
}
