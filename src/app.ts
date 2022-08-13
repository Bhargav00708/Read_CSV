import exprss,{Application, Request, Response} from 'express';
import path from 'path';

const app:Application = exprss();
const viewsPath = path.join(__dirname, '../views')

app.set('view engine', 'hbs')
app.set('views', viewsPath)

app.get('/',(req:Request,res:Response)=>
{
    res.render(`index`);
})

app.listen(3069,()=>
{
    console.log(`app is listning on port no 3069`);
})