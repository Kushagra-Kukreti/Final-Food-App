import React from 'react'
import {Link} from 'react-router-dom';

 function HomeHeader() {
    return (
        <div>
            <nav class="navbar navbar-expand-lg navbar-dark">
                <Link class="navbar-brand" to ={"/"}>Hunger-Junction</Link>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav mr-auto">
                    </ul>
                    <div>
                    <Link to={"\Login"} class="btn btn-primary mr-2"role="button">Login</Link>
                    <Link to={"\SignUp"} class="btn btn-danger ml-3" role="button">Sign Up</Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default HomeHeader;