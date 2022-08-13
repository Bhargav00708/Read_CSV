// const chai = require(`chai`);
import chai  from "chai";
// const chaiHTTP = require(`chai-http`);
import chaiHTTP from "chai-http";
import server from "../src/app";

// const {server} = require(`../src/app`);

chai.should();
chai.use(chaiHTTP);

describe(`API Testing`,()=>
{
    it(`Render main page`,(done)=>
    {
        console.log(`Op`);
        
        chai.request(server)
        .get(`/`)
        .end((err,response)=>
        {
            if(err) console.log(err);
            response.should.status(201);
        }) 
        done();
    })
    it(`Error page`,(done)=>
    {   
        chai.request(server)
        .get(`/Error`)
        .end((err,response)=>
        {
            if(err) console.log(err);
            response.should.status(404);
        }) 
        done();
    })
})


