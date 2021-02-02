import Layout from "../../components/layout.js"

//basic login wireframe
export default function CreateAccount () {

    return(
        <Layout> 
        <div>
            <form method="POST" action='/api/login'>

                <input type='text' value='admin'/>
                <br/>
                <input type='password' value='admin'/>
                <br/>
                <input type='submit' value='submit'/>
                
            </form>
        </div>
        </Layout> 

    )
    
    
}