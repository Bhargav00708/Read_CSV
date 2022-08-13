import exprss,{Application, Request, Response} from 'express';
import path from 'path';

const app:Application = exprss();
const viewsPath = path.join(__dirname, '../views')

app.set('view engine', 'hbs')
app.set('views', viewsPath)

app.get('/',(req:Request,res:Response)=>
{
    res.status(201).render(`index`);
})

app.get('*',(req:Request,res:Response)=>
{
    res.status(404).json({"errorMessage":"No such Page Exist"});
})

const server = app.listen(3069,()=>
{
    console.log(`app is listning on port no 3069`);
})

export default server;