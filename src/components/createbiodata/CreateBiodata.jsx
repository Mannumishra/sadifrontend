import React from 'react';
import '../createbiodata/createbiodata.css';
import couple2 from '../../Assets/couple2.jpg' 
import biodataicon from '../../Assets/biodataicon.png'; 
import youtube from "../../Assets/yootube.avif" 

const CreateBiodata = () => {
    return (
        <section className="create-biodata"> 
            <div className="content">
                <h2>
                    Create Biodata In <span className="highlight">Bharat Matrimony</span> Completely Free
                </h2>
                <div className="buttons">
                    <div className="button create">
                    
                        <img src={biodataicon} alt="Create Biodata" />
                        <span>+ Create Your Biodata</span>
                    </div>
                    <div className="button how-to">
                        <img src={youtube} alt="How To Create Biodata" />
                        <span>How To Create Biodata</span>
                    </div>
                </div>
            </div>
            <div className="images">
                <img src={couple2} alt="couple2" className="couple-left" />
                <img src={couple2} alt="couple2" className="couple-right" />
            </div>
        </section>
    );
}

export default CreateBiodata;
