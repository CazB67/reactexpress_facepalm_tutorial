import React from 'react';
import PublicMaster from './layout/public/PublicMaster';
import LoginForm from '../containers/home/LoginForm';


function Home (props){

    return (
        <PublicMaster style={{ height: "100%" }}>
            <LoginForm />
            <img src="/Facepalm_silhouette.svg" alt="logo" />

            {/* card */}

            {/* inside card need a form to login */}
        </PublicMaster>
    );
}

export default Home;